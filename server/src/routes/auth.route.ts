import { NextFunction, Request, Response, Router } from 'express';
import Realm from 'realm';
import { google } from 'googleapis';
import dotenv from 'dotenv';

dotenv.config()

const REALM_APP_ID = process.env.REALM_APP_ID || '';

// Configure and instantiate Google OAuth2.0 client
const oauthConfig = {
  client_id: process.env.GOOGLE_CLIENT_ID,
  project_id: process.env.GOOGLE_PROJECT_ID,
  auth_uri: 'https://accounts.google.com/o/oauth2/auth',
  token_uri: 'https://oauth2.googleapis.com/token',
  auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
  client_secret: process.env.GOOGLE_CLIENT_SECRET,
  redirect_uris: [`${process.env.BASE_URL}/auth/google/callback`],
  JWTsecret: 'secret',
  scopes: [
    'https://www.googleapis.com/auth/userinfo.email',
    'https://www.googleapis.com/auth/userinfo.profile',
    'openid',
    // any other scopes you might require. View all here - https://developers.google.com/identity/protocols/oauth2/scopes
  ],
};
const OAuth2 = google.auth.OAuth2;
const oauth2Client = new OAuth2(
  oauthConfig.client_id,
  oauthConfig.client_secret,
  oauthConfig.redirect_uris[0]
);

// Instantiate Realm app
const realmApp = new Realm.App({
  id: REALM_APP_ID,
});

import express from 'express';

const router: Router = express.Router();

router.get('/', (req: Request, res: Response) => {
  // generate OAuth 2.0 login link
  const loginLink = oauth2Client.generateAuthUrl({
    access_type: 'offline', // Indicates that we need to be able to access data continuously without the user constantly giving us consent
    scope: oauthConfig.scopes,
  });
  res.send({ loginLink });
});

router.get('/auth/google/callback', (req, res, errorHandler) => {
  if (req.query.error) {
    // The user did not give us permission.
    return errorHandler(req.query.error);
  } else {
    const authCodeFromQueryString: any = req.query.code;
    // :snippet-start: login-with-token
    // Get Google token and use it to sign into Realm
    oauth2Client.getToken(
      authCodeFromQueryString,
      async (error: any, token: any) => {
        if (error) return errorHandler(error);
        try {
          const credential = Realm.Credentials.google({
            idToken: token.id_token,
          });
          const user = await realmApp.logIn(credential);
          console.log('signed in as Realm user', user.id);
          return res.render('views/success', { id: user.id }); // :remove:
        } catch (error) {
          errorHandler(error);
        }
      }
    );
    // :snippet-end:
  }
});

router.post('/logout', (reqL: Request, res: Response) => {
  res.redirect('/');
});

// Handle 500 Errors
// router.use((
//   error: Error,
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   res.status(500).render('views/error', { error });
// });

// router.get('/login', (req: Request, res: Response, next: NextFunction) =>
//   res.send('login')
// );

// router.post(
//   '/login/google',
//   (req: Request, res: Response, next: NextFunction) => {
//     console.log(req.body);
//   }
// );

export = router;

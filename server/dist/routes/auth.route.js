"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const realm_1 = __importDefault(require("realm"));
const googleapis_1 = require("googleapis");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
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
const OAuth2 = googleapis_1.google.auth.OAuth2;
const oauth2Client = new OAuth2(oauthConfig.client_id, oauthConfig.client_secret, oauthConfig.redirect_uris[0]);
// Instantiate Realm app
const realmApp = new realm_1.default.App({
    id: REALM_APP_ID,
});
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get('/', (req, res) => {
    // generate OAuth 2.0 login link
    const loginLink = oauth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: oauthConfig.scopes,
    });
    res.send({ loginLink });
});
router.get('/auth/google/callback', (req, res, errorHandler) => {
    if (req.query.error) {
        // The user did not give us permission.
        return errorHandler(req.query.error);
    }
    else {
        const authCodeFromQueryString = req.query.code;
        // :snippet-start: login-with-token
        // Get Google token and use it to sign into Realm
        oauth2Client.getToken(authCodeFromQueryString, async (error, token) => {
            if (error)
                return errorHandler(error);
            try {
                const credential = realm_1.default.Credentials.google({
                    idToken: token.id_token,
                });
                const user = await realmApp.logIn(credential);
                console.log('signed in as Realm user', user.id);
                return res.render('views/success', { id: user.id }); // :remove:
            }
            catch (error) {
                errorHandler(error);
            }
        });
        // :snippet-end:
    }
});
router.post('/logout', (reqL, res) => {
    res.redirect('/');
});
module.exports = router;

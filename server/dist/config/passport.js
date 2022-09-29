"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_google_oauth20_1 = __importDefault(require("passport-google-oauth20"));
const user_model_1 = require("../models/user.model");
const GoogleStrategy = passport_google_oauth20_1.default.Strategy;
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID || '';
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET || '';
module.exports = (passport) => {
    passport.use(new GoogleStrategy({
        clientID: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
        callbackURL: '/auth/google/callback',
    }, async (accessToken, refreshToken, profile, done) => {
        const newUser = {
            googleId: profile.id,
            displayName: profile.displayName,
            firstName: profile.name.givenName,
            lastName: profile.name.familyName,
            image: profile.photos[0].value,
        };
        try {
            let user = await user_model_1.User.findOne({ googleId: profile.id });
            if (user) {
                done(null, user);
            }
            else {
                user = await user_model_1.User.create(newUser);
                done(null, user);
            }
        }
        catch (err) {
            console.error(err);
        }
    }));
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });
    passport.deserializeUser((id, done) => {
        user_model_1.User.findById(id, (err, user) => done(err, user));
    });
};

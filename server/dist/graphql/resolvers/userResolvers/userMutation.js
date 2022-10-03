"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signOutUser = exports.signInUser = exports.createUser = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const token_1 = __importDefault(require("../../../database/models/token"));
const user_1 = __importDefault(require("../../../database/models/user"));
require("dotenv/config");
const TOKEN_KEY = process.env.TOKEN_KEY;
const cookieOpts = {
    path: '/',
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
};
const createUser = async (_, args, ctx) => {
    const { input: { displayName, firstName, lastName, email, password }, } = args;
    const date = new Date();
    const salt = bcryptjs_1.default.genSaltSync(10);
    try {
        const user = await user_1.default.create({
            displayName,
            firstName,
            lastName,
            date,
            email,
            password: bcryptjs_1.default.hashSync(password, salt),
        });
        const token = await jsonwebtoken_1.default.sign({ _id: user._id.toString(), email: user.email }, process.env.JWT_SECRET, {
            expiresIn: '1d',
        });
        ctx.res.cookie(TOKEN_KEY, JSON.stringify(token), cookieOpts);
        return {
            user,
            token,
        };
    }
    catch (error) {
        console.log(error);
        throw new Error(error);
    }
};
exports.createUser = createUser;
const signInUser = async (_, args, ctx) => {
    const { input: { email, password }, } = args;
    try {
        const user = await user_1.default.findOne({
            email,
        });
        const isValidPassword = bcryptjs_1.default.compareSync(password, user.password);
        if (isValidPassword) {
            const token = jsonwebtoken_1.default.sign({ _id: user._id, email: user.email }, process.env.JWT_SECRET, {
                expiresIn: '1d',
            });
            ctx.res.cookie(TOKEN_KEY, JSON.stringify(token), cookieOpts);
        }
        return {
            isAuthenticated: isValidPassword,
        };
    }
    catch (error) {
        throw new Error(error);
    }
};
exports.signInUser = signInUser;
const signOutUser = async (_, _args, ctx) => {
    const token = ctx.req.cookies['x-access-token'];
    if (token) {
        const newToken = new token_1.default();
        newToken.tags.push(token);
        newToken.save();
    }
    ctx.res.clearCookie(TOKEN_KEY);
    return {
        status: 200,
    };
};
exports.signOutUser = signOutUser;

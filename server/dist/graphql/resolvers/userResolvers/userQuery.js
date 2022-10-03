"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAuthenticated = exports.getUserByEmail = void 0;
const user_1 = __importDefault(require("../../../database/models/user"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const token_1 = __importDefault(require("../../../database/models/token"));
const TOKEN_KEY = 'x-access-token';
const generateToken = (str) => {
    if (str) {
        try {
            const token = JSON.parse(str);
            return token;
        }
        catch (err) {
            return null;
        }
    }
    return null;
};
const isValidToken = (str) => {
    if (str) {
        try {
            const token = generateToken(str);
            return !!jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        }
        catch (err) {
            return false;
        }
    }
    return false;
};
const getStatus = (token, tokens) => {
    return isValidToken(token) && tokens.length === 0 ? 200 : 401;
};
const getUserByEmail = async (_, args) => {
    const { input: { email }, } = args;
    console.log(email);
    return user_1.default.findOne({ email });
};
exports.getUserByEmail = getUserByEmail;
const isAuthenticated = async (_, _args, ctx) => {
    const token = ctx.req.cookies['x-access-token']; // ctx=context
    const tokens = await token_1.default.find({ tags: token });
    const status = getStatus(ctx.req.cookies['x-access-token'], tokens);
    if (status === 401) {
        if (token) {
            const newToken = new token_1.default();
            newToken.tags.push(token);
            newToken.save();
        }
        ctx.res.clearCookie(TOKEN_KEY);
    }
    return {
        status,
    };
};
exports.isAuthenticated = isAuthenticated;

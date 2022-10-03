"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const user_1 = __importDefault(require("../database/models/user"));
const token_1 = __importDefault(require("../database/models/token"));
const TOKEN_KEY = 'x-access-token';
const cookieOpts = {
    path: '/',
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
};
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
const resolvers = {
    Query: {
        async getUserByEmail(_, args) {
            const { input: { email } } = args;
            console.log(email);
            return user_1.default.findOne({ email });
        },
        async isAuthenticated(_, _args, ctx) {
            const token = ctx.req.cookies['x-access-token'];
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
        },
    },
    Mutation: {
        createUser: async (_, args, ctx) => {
            const { input: { email, password }, } = args;
            const salt = bcryptjs_1.default.genSaltSync(10);
            try {
                const user = await user_1.default.create({
                    email,
                    password: bcryptjs_1.default.hashSync(password, salt),
                });
                const token = await jsonwebtoken_1.default.sign({ _id: user._id, email: user.email }, process.env.JWT_SECRET, {
                    expiresIn: '1d',
                });
                ctx.res.cookie(TOKEN_KEY, JSON.stringify(token), cookieOpts);
                return {
                    token,
                };
            }
            catch (error) {
                throw new Error(error);
            }
        },
        signInUser: async (_, args, ctx) => {
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
        },
        signOutUser: async (_, _args, ctx) => {
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
        },
    },
};
exports.default = resolvers;

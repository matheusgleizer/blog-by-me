"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.middleware = void 0;
const path_1 = __importDefault(require("path"));
const express_1 = __importDefault(require("express"));
const compression_1 = __importDefault(require("compression"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const isDevelopment = process.env.NODE_ENV === 'development';
const staticDir = isDevelopment ? './dist' : '.';
const middleware = (app) => {
    app.use((0, compression_1.default)());
    app.use(express_1.default.json());
    app.use((0, cookie_parser_1.default)());
    app.use(express_1.default.static(path_1.default.join(__dirname, staticDir)));
};
exports.middleware = middleware;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.db = {
    generateUri: () => {
        const { CLUSTER, DB_NAME, DB_USERNAME, DB_PASSWORD } = process.env;
        return `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${CLUSTER}.${DB_NAME}.net?retryWrites=true&w=majority`;
    },
    connect: async () => {
        mongoose_1.default.connection.once('connected', () => {
            console.log('Connected to MongoDB!');
        });
        mongoose_1.default.connection.on('error', (err) => {
            console.error(err);
        });
        await mongoose_1.default.connect(exports.db.generateUri(), {
            keepAlive: true,
            keepAliveInitialDelay: 300000,
        });
    },
};

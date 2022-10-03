"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    id: { type: String, required: true },
    googleId: {
        type: String,
        required: true,
    },
    displayName: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    email: {
        type: String,
        min: 6,
        max: 255,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        min: 6,
        max: 1024,
        unique: false,
        required: true,
    },
}, { timestamps: true });
const User = (0, mongoose_1.model)('User', userSchema);
exports.default = User;

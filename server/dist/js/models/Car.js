"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const carSchema = new mongoose_1.default.Schema({
    type: {
        type: String,
        required: true
    },
    plaka: {
        type: String,
        required: true
    },
    entryTime: {
        type: Date,
        default: Date.now
    },
    exitTime: {
        type: String,
    }
}, { timestamps: true });
exports.default = mongoose_1.default.model("Car", carSchema);

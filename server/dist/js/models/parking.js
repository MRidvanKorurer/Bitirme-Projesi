"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const parkingSchema = new mongoose_1.default.Schema({
    entryTime: {
        type: String,
        required: true
    },
    exitTime: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    }
});
exports.default = mongoose_1.default.model("Price", parkingSchema);

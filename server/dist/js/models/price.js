"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const priceSchema = new mongoose_1.default.Schema({
    price: {
        type: Number,
        required: true
    },
    entryTime: {
        type: String,
        required: true
    },
    exitTime: {
        type: String,
        required: true
    },
    type: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "Car"
    }
});
exports.default = mongoose_1.default.model("Price", priceSchema);

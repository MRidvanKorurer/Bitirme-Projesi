"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const parking_1 = require("../controllers/parking");
const router = express_1.default.Router();
router.get("/fee", parking_1.calculatePrice);
exports.default = router;

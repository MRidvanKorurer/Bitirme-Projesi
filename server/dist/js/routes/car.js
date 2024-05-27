"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Car_1 = require("../controllers/Car");
const router = express_1.default.Router();
router.post("/create", Car_1.createCar);
router.delete("/delete/:id", Car_1.deleteCar);
router.get("/all", Car_1.allCar);
router.post("/fee", Car_1.calculateFee);
exports.default = router;

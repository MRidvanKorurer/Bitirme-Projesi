"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculatePrice = void 0;
const error_1 = __importDefault(require("../utils/error"));
const calculatePrice = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { entryTime, exitTime, type } = req.body;
        // return new IResponse("İşlem başarılı", fee).success(res);
    }
    catch (error) {
        throw new error_1.default("İşlem Başarısız", 400);
    }
});
exports.calculatePrice = calculatePrice;

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
exports.calculateFee = exports.allCar = exports.deleteCar = exports.createCar = void 0;
const Car_1 = __importDefault(require("../models/Car"));
const error_1 = __importDefault(require("../utils/error"));
const response_1 = __importDefault(require("../utils/response"));
const createCar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const car = yield Car_1.default.create(req.body);
        return new response_1.default("Araç Otoparka Giriş Yaptı", car).created(res);
    }
    catch (error) {
        throw new error_1.default("Hata Oluştu Lütfen Araç Bilgilerini Girin!", 400);
    }
});
exports.createCar = createCar;
const deleteCar = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const deletedCar = yield Car_1.default.findByIdAndDelete(id);
        if (deletedCar) {
            return new response_1.default("Araç Otopartan Çıkış Yaptı", deletedCar).success(res);
        }
        else {
            next(new error_1.default("Bu Plakaya Ait Araç Otoparkta Bulunamadı", 400));
        }
    }
    catch (error) {
        throw new error_1.default("Hata Oluştu!", 400);
    }
});
exports.deleteCar = deleteCar;
const allCar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const car = yield Car_1.default.find();
        return new response_1.default("İşlem Başarılı", car).success(res);
    }
    catch (error) {
        throw new error_1.default("İşlem Başarısız", 400);
    }
});
exports.allCar = allCar;
const calculateFee = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { entryTime, exitTime, type } = req.body;
        const rates = {
            car: 50,
            truck: 75,
            motor: 25
        };
        let fee;
        if (type === "car") {
            fee = rates.car * (exitTime - entryTime);
        }
        if (type === "truck") {
            fee = rates.truck * (exitTime - entryTime);
        }
        if (type === "motor") {
            fee = rates.motor * (exitTime - entryTime);
        }
        // console.log(fee);
        return new response_1.default("İşlem başarılı", fee).success(res);
    }
    catch (error) {
        throw new error_1.default("İşlem başarısız", 400);
    }
});
exports.calculateFee = calculateFee;

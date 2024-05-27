"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calculatePrice = (type, entryTime, exitTime) => {
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
    return fee;
};
exports.default = calculatePrice;

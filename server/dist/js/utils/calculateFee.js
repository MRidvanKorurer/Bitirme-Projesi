"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calculateFee = (entryTime, exitTime, type) => {
    const rates = {
        car: 50,
        motor: 25,
        truck: 75
    };
    const entry = new Date(entryTime);
    const exit = new Date(exitTime);
    const durationInHours = Math.ceil((exit - entry) / (1000 * 60 * 60));
    const rate = rates[type];
    return durationInHours * rate;
};
exports.default = calculateFee;

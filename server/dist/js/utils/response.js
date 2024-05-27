"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IResponse {
    constructor(message = null, data) {
        this.data = data;
        this.message = message;
    }
    success(res) {
        return res.status(200).json({
            message: this.message,
            data: this.data
        });
    }
    created(res) {
        return res.status(201).json({
            message: this.message,
            data: this.data
        });
    }
}
exports.default = IResponse;

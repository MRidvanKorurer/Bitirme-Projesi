import Car from "../models/Car";
import {NextFunction, Request, Response} from "express";
import APIError from "../utils/error";
import IResponse from "../utils/response";


export const createCar = async (req: Request, res: Response) => {   
    try {
        const car = await Car.create(req.body);

        return new IResponse("Araç Otoparka Giriş Yaptı", car).created(res);

    } catch (error) {
        throw new APIError("Hata Oluştu Lütfen Araç Bilgilerini Girin!", 400);
    }
}


export const deleteCar = async (req: Request, res: Response, next: NextFunction) => {   
    try {
        const {id} = req.params;

        const deletedCar = await Car.findByIdAndDelete(id);

        if(deletedCar) {
            return new IResponse("Araç Otopartan Çıkış Yaptı", deletedCar).success(res);
        }else {
             next(new APIError("Bu Plakaya Ait Araç Otoparkta Bulunamadı", 400));   
        }


    } catch (error) {
        throw new APIError("Hata Oluştu!", 400);
    }
}


export const allCar = async (req: Request, res: Response) => {
    try {
        const car: any = await Car.find();

        return new IResponse("İşlem Başarılı", car).success(res);
    } catch (error) {
        throw new APIError("İşlem Başarısız", 400);
    }   
}



export const calculateFee = async (req: Request, res: Response) => {
    try {
        const {entryTime, exitTime, type} = req.body;

        const rates = {
            car: 50,
            truck: 75,
            motor: 25
        }

        let fee;

        if(type === "car") {
            fee = rates.car * (exitTime - entryTime);
        }

        if(type === "truck") {
            fee = rates.truck * (exitTime - entryTime);
        }

        if(type === "motor") {
            fee = rates.motor * (exitTime - entryTime);
        }

        // console.log(fee);
        
        return new IResponse("İşlem başarılı", fee).success(res);

    } catch (error) {
        throw new APIError("İşlem başarısız", 400);
    }
}



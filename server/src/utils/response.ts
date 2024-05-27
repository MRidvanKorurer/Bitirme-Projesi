import { Response } from "express";
import { ICar, IParking } from "../types/type";

class IResponse {
    message: string | null;
    data: ICar | IParking | number | undefined |null

    constructor(message: string | null = null, data: ICar | IParking | number | undefined | null) {
        this.data = data;
        this.message = message
    }



    success(res: Response) {
        return res.status(200).json({
            message: this.message,
            data: this.data
        })
    }
    

    
    created(res: Response) {
        return res.status(201).json({
            message: this.message,
            data: this.data
        })
    }
}


export default IResponse;
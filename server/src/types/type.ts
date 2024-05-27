import {Document} from "mongoose";

export interface ICar extends Document {
    type: string,
    plaka: string,
    entryTime: string,
    exitTime: string,
    _id?: string
}


export interface IParking extends Document {
    entryTime: string,
    exitTime: string,
    type: string,
}
import mongoose from "mongoose";
import {ICar} from "../types/type";


const carSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true
    },
    plaka: {
        type: String,
        required: true
    },
    entryTime: {
        type: Date,
        default: Date.now
    },
    exitTime: {
        type: String,
    }
}, {timestamps: true});



export default mongoose.model<ICar>("Car", carSchema);
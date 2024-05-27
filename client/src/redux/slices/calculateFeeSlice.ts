import {PayloadAction, createSlice} from "@reduxjs/toolkit";
import { ICar } from "../../types/type";


interface IInitialState {
    isModel: boolean,
    item: ICar,
    entryTime: any;
    exitTime: any;
    total: number
}

const initialState: IInitialState = {
    isModel: false,
    item: {
        type: "",
        plaka: "",
        entryTime: "",
        exitTime: "",
        _id: ""
    },
    entryTime: "",
    exitTime: "",
    total: 0
}


const calculateFeeSlice = createSlice({
    name: "calculateFeeSlice",
    initialState,
    reducers: {
        openModel: (state) => {
            state.isModel = true;
        },
        closeModel: (state) => {
            state.isModel = false;
        },
        changeItem: (state, actions: PayloadAction<ICar>) => {
            state.item = actions.payload;
        },
        changeEntryTime: (state, actions: any) => {
            state.entryTime = actions.payload;
        },
        changeExitTime: (state, actions: any) => {
            state.entryTime = actions.payload;
        },
        changeTotal: (state, actions: PayloadAction<number>) => {
            state.total = actions.payload;
        }
    }
});


export const {closeModel, openModel, changeItem, changeEntryTime, changeExitTime, changeTotal} = calculateFeeSlice.actions;

export const calculateFeeReducer = calculateFeeSlice.reducer;
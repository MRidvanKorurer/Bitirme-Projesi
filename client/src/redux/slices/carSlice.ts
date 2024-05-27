import {PayloadAction, createSlice} from "@reduxjs/toolkit";
import { ICar } from "../../types/type";

interface IInitialState {
    content: ICar,
    message: string,
    isAlert: boolean
}

const initialState: IInitialState = {
    content: {
        plaka: "",
        type: "",
        entryTime: "",
        _id: "",
        exitTime: ""
    },
    message: "",
    isAlert: false
}

const carSlice = createSlice({
    name: "car",
    initialState,
    reducers: {
        changeContent: (state, actions: PayloadAction<ICar>) => {
            state.content = actions.payload;
        },
        changeMessage: (state, actions: PayloadAction<string>) => {
            state.message = actions.payload;
        },
        isAlertTrue: (state) => {
            state.isAlert = true;
        },
        isAlertFalse: (state) => {
            state.isAlert = false;
        }
    }
});


export const {changeContent, changeMessage, isAlertFalse, isAlertTrue} = carSlice.actions;
export const carReducer = carSlice.reducer;
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { carApi } from './services/carApi';
import { carReducer } from './slices/carSlice';
import { calculateFeeReducer } from './slices/calculateFeeSlice';


export const store = configureStore({
  reducer: {
    [carApi.reducerPath]: carApi.reducer,
    car: carReducer,
    calculateFee: calculateFeeReducer
  },
 
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(carApi.middleware),
});


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

setupListeners(store.dispatch)
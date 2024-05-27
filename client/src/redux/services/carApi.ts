import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ICar, ICarRes } from '../../types/type';


export const carApi = createApi({
  reducerPath: 'carApi',
  tagTypes: ["Car"],
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/car' }),
  endpoints: (builder) => ({


    getAllCar: builder.query<ICarRes, void>({
      providesTags: ["Car"],
      query: () => {
        return {
            url: `/all`,
            method: "GET"
        }
      },
    }),


    createCar: builder.mutation<ICarRes, Pick<ICar, "plaka" | "type">>({
      invalidatesTags: () => {
        return [{type: "Car"}]
      },
      query: (data) => {
        return {
            url: `/create`,
            method: "POST",
            body: data
        }
      },
    }),


    deleteCar: builder.mutation<ICarRes, Pick<ICar, "_id">>({
      invalidatesTags: () => {
        return [{type: "Car"}]
      },
      query: (id) => {
        return {
            url: `/delete/${id}`,
            method: "DELETE",
        }
      },
    }),



    calculateFee: builder.mutation<ICarRes, Pick<ICar, "entryTime" | "exitTime" | "type">>({
      invalidatesTags: () => {
        return [{type: "Car"}]
      },
      query: (data) => {
        return {
            url: `/fee`,
            method: "POST", 
            body: data
        }
      },
    }),


  }),
})


export const { useGetAllCarQuery, useCreateCarMutation, useDeleteCarMutation, useCalculateFeeMutation } = carApi;
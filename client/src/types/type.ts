
export interface ICar {
    type: string,
    plaka: string,
    entryTime: any,
    exitTime: string,
    _id?: string,
    createdAt?: string
    updateddAt?: string
}

export interface ICarRes {
    message: string,
    data: any
}
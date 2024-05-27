import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/hook'
import { FaCar } from "react-icons/fa";
import { FaTruck } from "react-icons/fa";
import { FaMotorcycle } from "react-icons/fa6";
import { IoIosCloseCircle } from "react-icons/io";
import { changeExitTime, changeTotal, closeModel } from '../../redux/slices/calculateFeeSlice';
import { useCalculateFeeMutation, useDeleteCarMutation } from '../../redux/services/carApi';
import { message } from 'antd';
import { changeContent, changeMessage, isAlertTrue } from '../../redux/slices/carSlice';
import moment from 'moment';


const FeeModel: React.FC = () => {
    const {item, entryTime, exitTime, total} = useAppSelector(state => state.calculateFee);
    const [deleteCar] = useDeleteCarMutation();
    const [calculateFee] = useCalculateFeeMutation();

    const dispatch = useAppDispatch();


    let date : any;

     const formatTime = (dateString: any) => {
        date = moment(dateString).format('HH:mm')
        dispatch(changeExitTime(date));
        return  date;
    };

    const now = moment();
    const formattedTime = now.format('HH:mm');


    const handleClickExitFunc = (id: any) => {
        deleteCar(id).unwrap()
            .then((res) => {
                message.success(res.message);
                dispatch(isAlertTrue());
                dispatch(changeContent(res.data));
                dispatch(changeMessage(res.message));
                dispatch(closeModel());
            })
            .catch((err) => {
                message.error(err.data.message);
            })
    }

    let enTime = entryTime.split(":")[1];
    let exTime = formattedTime.split(":")[1];

    
    useEffect(() => {
        calculateFee({entryTime: enTime, exitTime:exTime, type: item.type}).unwrap()
            .then((res) => {
                // console.log(res.data, "RES");
                dispatch(changeTotal(res.data));
            })
            .catch((err) => {
                console.log(err);
            })
    }, [exitTime, dispatch, date]);

    // console.log(total)
    
  return (
    <div className=' flex justify-start items-center flex-col gap-5 w-full relative z-50 '>
        <div className=' border-b-2 border-sky-400 w-full flex justify-center py-2'>
            <h2 className=' font-bold text-xl tracking-widest'>Ücret Bilgisi</h2>
        </div>

        <div className=' flex justify-between gap-10' >
            <div className=' flex justify-center items-center'>
                <p className=' w-20'>Araç Tipi</p>
                <span>
                    {item.type === "motor" && <FaMotorcycle size={25}/>}
                    {item.type === "truck" && <FaTruck size={25}/>}
                    {item.type === "car" && <FaCar size={25}/>}
                </span>
            </div>

            <div className=' flex'>
                <p className=' w-20'>Plaka</p>
                <span className=' font-semibold'>{item.plaka}</span>
            </div>
        </div>

        <div className=' flex flex-col w-full'>
            <div className=' flex w-full justify-around py-2  items-center border-b border-sky-400 bg-gray-800 border-t border-t-sky-400'>
                <p className=' font-bold w-32'>Giriş Saati</p>
                <span className=' font-bold text-lg'>{formatTime(item.entryTime)}</span>
            </div>

            <div  className=' flex w-full justify-around py-2  items-center border-b border-sky-400 '>
                <p  className=' font-bold w-32'>Çıkış Saati</p>
                <span  className=' font-bold text-lg'>{formattedTime}</span>
            </div>

            <div  className=' flex w-full justify-around py-2  items-center border-b border-sky-400 bg-gray-800'>
                <p  className=' font-bold w-32'>Tutar</p>
                <span  className=' font-bold text-xl text-green-600'>{Math.abs(total)}₺</span>
            </div>
        </div>

        <div>
            <button onClick={() => handleClickExitFunc(item._id)} className=' bg-sky-700 font-bold p-1 rounded hover:bg-sky-900 transition-all w-56 mt-8'>Çıkış Yap</button>
        </div>

        <div className=' absolute -right-3 -top-8 cursor-pointer hover:scale-125 transition-all text-red-600'>
            <IoIosCloseCircle onClick={() => dispatch(closeModel())} size={30}/>
        </div>
    </div>
  )
}

export default FeeModel
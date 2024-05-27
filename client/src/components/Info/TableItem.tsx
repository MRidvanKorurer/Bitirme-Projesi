import React, { useEffect } from 'react'
import { useGetAllCarQuery } from '../../redux/services/carApi'
import { ICar } from '../../types/type';
import { FaCar } from "react-icons/fa";
import { FaTruck } from "react-icons/fa";
import { FaMotorcycle } from "react-icons/fa6";
import { useAppDispatch } from '../../redux/hook';
import { changeEntryTime, changeItem, openModel } from '../../redux/slices/calculateFeeSlice';
import moment from 'moment';
import 'moment/locale/tr'; 

moment.locale('tr');


const TableItem: React.FC = () => {
    const {data, isError, isLoading} = useGetAllCarQuery();
    // const {item: car} = useAppSelector(state => state.calculateFee); 

    const dispatch = useAppDispatch();


    const handleClickCalculateFeeFunc = (item: ICar) => {
        dispatch(openModel());
        dispatch(changeItem(item));
        
    }

        
    let date: any;

    const formatTime = (dateString: any) => {
        date = moment(dateString).format('HH:mm');
        dispatch(changeEntryTime(date));
        return date;
    };

    let content;

    if(isError) {
        content = (
            <div>error</div>
        )
    }else if(isLoading) {
        content = (
            <div>loading...</div>
        )
    }else {
        content = (
            data?.data.map((item: ICar)=> (
                <tr key={item._id} className="text-gray-700 ">
                    <td className="px-4 py-3 border">
                        <div className="flex items-center text-sm ">
                            <div className="relative w-8 h-8 mr-3 rounded-full md:block flex justify-center items-center">
                                <div>
                                    {item.type === "car" &&  <FaCar size={22} className=' text-sky-600'/>}
                                    {item.type === "motor" && <FaMotorcycle size={22} className=' text-green-600' />}
                                    {item.type === "truck" && <FaTruck size={22} className=' text-red-600'/>}
                                </div>
                            </div>
                            <div>
                                <p className="font-semibold text-black">{item.type}</p>
                            </div>
                        </div>
                    </td>
                    <td className="px-4 py-3 text-ms font-semibold border "> <span className='z-50 '>{item.plaka}</span></td>
                    <td className="px-4 py-3 text-xs border">
                        <span className=" flex font-bold">{formatTime(item.entryTime)}</span>
                    </td>
                    <td className="px-4 py-3 text-white  border z-50">              
                        <div className=' flex justify-center items-center'>
                            <button onClick={() => handleClickCalculateFeeFunc(item)} className=' bg-red-600 rounded p-1 font-semibold hover:bg-orange-700 z-50 transition-all'>Çıkış</button>
                        </div>
                    </td>
                </tr>
            )) 
        )
    }

    useEffect(() => {
        dispatch(changeEntryTime(date));
    }, [dispatch, date]);


  return (
    <>
        {content}
    </>
  )
}

export default TableItem
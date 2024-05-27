import React, { useState } from 'react'
import { useCreateCarMutation } from '../../redux/services/carApi';
import { useAppDispatch } from '../../redux/hook';
import { changeContent, changeMessage, isAlertTrue } from '../../redux/slices/carSlice';
import { message } from 'antd';


const FormIn: React.FC = () => {
    const [createCar] = useCreateCarMutation();

    const dispatch = useAppDispatch();

    const [formData, setFormData] = useState({
        plaka: "",
        type: ""
    });

    

    const handleChange = (e:any) => {
        setFormData(prev => ({...prev, [e.target.name] : e.target.value}));
    }


    const handleClickCreated = () => {
        createCar(formData).unwrap()
            .then(res => {
                dispatch(isAlertTrue());
                dispatch(changeContent(res.data));
                dispatch(changeMessage(res.message));
            })
            .catch(err => {
                message.error(err.data.message);
            })
    }


  return (
    <div className=' p-2 rounded-lg'>
        <div className=' flex flex-col justify-center items-center h-full gap-10'>
            <div className=' flex flex-col gap-2 justify-center items-center'>
                <h1 className=' font-bold text-2xl tracking-wider'>Otoparka Giriş Yap</h1>
            </div>

            <div>
                <div className=' text-black w-full font-bold'>
                    <select name="type" className='p-1 w-56' value={formData.type} onChange={handleChange}>
                        <option onChange={handleChange}  value="" disabled selected>Araç Tipi Seçiniz</option> 
                        <option onChange={handleChange} value="car">Otomobil</option>
                        <option onChange={handleChange} value="truck">Kamyon</option>
                        <option onChange={handleChange} value="motor">Motosiklet</option>
                    </select>
                </div>
            </div>

            <div>
                <input className=' outline-none p-2 w-96 rounded text-black' name='plaka' value={formData.plaka} onChange={handleChange}  placeholder={"plaka..."} />
            </div>

            <div className=' w-full'>
                <button className=' bg-sky-700 text-white p-1 hover:bg-sky-800 transition-all w-full rounded ' onClick={handleClickCreated}>Giriş</button>
            </div>
        </div>
    </div>
  )
}

export default FormIn;
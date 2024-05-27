import React from 'react'
import { useAppSelector } from '../redux/hook';



const Alert: React.FC = () => {
    // const dispatch = useAppDispatch();
  const {content, message} = useAppSelector(state => state.car);

  return (
    <div className='relative w-full h-full rounded-xl bg-black p-4 flex flex-col gap-10 justify-center items-center shadow-sky-300 shadow-lg'>
        <div className=' border-b-2 py-2 text-green-600 font-bold text-lg'>
            {message}
        </div>

        <div className=' flex flex-col justify-center items-center gap-5'>
            <div>
                <p className='font-bold text-lg'>Araç Bilgileri</p>
            </div>

            <div className=' flex gap-10'>
                <div className=' flex justify-center items-center gap-5 '>
                    <p>Plaka</p>
                    <span className=' font-bold'>{content.plaka}</span>
                </div>

                <div  className=' flex justify-center items-center gap-5 '>
                    <p>Araç Tipi</p>
                    <span className=' font-bold'>{content.type}</span>
                </div>

               
            </div>
        </div>


        {/* <div className='absolute top-0 right-0'>
          <IoIosCloseCircle onClick={() => {dispatch(isAlertFalse())}} size={32} className='text-red-600 hover:scale-110 cursor-pointer transition-all'/>
        </div> */}
    </div>
  )
}

export default Alert
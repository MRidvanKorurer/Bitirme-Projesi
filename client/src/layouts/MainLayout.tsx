import React, { ReactNode } from 'react'
import Navbar from './Navbar';
import { useAppDispatch, useAppSelector } from '../redux/hook';
import { closeModel } from '../redux/slices/calculateFeeSlice';
import FeeModel from '../components/FeeModel/FeeModel';


interface IProps {
    children: ReactNode
}


const MainLayout: React.FC<IProps> = ({children}) => {
  const {isModel} = useAppSelector(state => state.calculateFee);
  const dispatch = useAppDispatch();


  return (
    <div className=' relative bg-gray-950 min-h-screen bg-opacity-95 text-white flex flex-col gap-10 p-4'>
        <Navbar />
        {children}
        <>
          {
            isModel ? (
              <div className='w-1/3 mx-auto rounded overflow-hidden bg-black bg-opacity-95 h-[400px] p-4 shadow-lg flex items-center shadow-sky-300 absolute left-[700px] top-52 z-30'>
                  <FeeModel />      
              </div>
            ) : null
          }
        </>

          {/* clickOutSide */}
        <div onClick={() => dispatch(closeModel())} className=' w-full h-full absolute top-0 left-0 z-10'>
          
        </div>
    </div>
  )
}

export default MainLayout;
import React from 'react'
import Table from '../components/Info/Table'
import SideBar from '../components/SideBar/SideBar'
import { useAppSelector } from '../redux/hook';
import Alert from '../components/Alert';
import PriceDetails from '../components/PriceDetails';

const HomePage: React.FC = () => {
  const {content, message, isAlert} = useAppSelector(state => state.car);



  let alert;

  if(content || message) {
    alert = (
      <Alert />
    )
  }

  return (
    <div className=' flex gap-x-5 relative'>
        <div className=' flex-1 z-20'>

          <div className='p-2 mb-4 bg-black bg-opacity-90 rounded-xl shadow-lg shadow-sky-400'>
              <PriceDetails />
          </div>

          <SideBar />

          <div className=' flex justify-center items-center w-full mt-4 '>
            {isAlert ? alert : null}
          </div>
        </div>

        <div className=' flex-[4] flex flex-col gap-10'>
          <Table />
        </div>
    </div>
  )
}

export default HomePage
import React from 'react'
import { BsSignStopFill } from "react-icons/bs";
import { FaSquareParking } from "react-icons/fa6";


const Navbar: React.FC = () => {
  return (
    <div className=' flex mx-auto justify-center items-center  rounded-xl p-1 w-full shadow-lg shadow-sky-300 gap-20'>
        <div>
          <BsSignStopFill className=' text-red-600' size={50}/>
        </div>

        <div className=' flex flex-col justify-center items-center gap-y-3'>
            <h1 className=' font-bold text-4xl '>Bitirme Projesi</h1>
            <h3 className=' font-bold text-xl'>Otopark Sistemi</h3>
        </div>

        <div>
          <FaSquareParking className=' text-sky-700' size={55}/>
        </div>
    </div>
  )
}

export default Navbar
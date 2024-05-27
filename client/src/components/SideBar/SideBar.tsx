import React from 'react'
import FormIn from '../Forms/FormIn'
// import FormOut from '../Forms/FormOut'

const SideBar: React.FC = () => {
  return (
    <div className=' p-4 rounded-xl h-[400px] bg-black bg-opacity-90 shadow-lg shadow-sky-300 flex flex-col justify-between py-10'>
        <div className=' flex justify-center items-center '>
            <FormIn />
        </div>
    </div>
  )
}

export default SideBar
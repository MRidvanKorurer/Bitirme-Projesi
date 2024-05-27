import React from 'react'

const PriceDetails: React.FC = () => {
  return (
    <div className=' flex flex-col justify-center py-1 items-center gap-5'>
        <div className=' border-b border-sky-400'>
            <h2 className=' font-bold text-lg '>Araç Tipini Göre Saatlik Ücret Tarifesi</h2>
        </div>

        <div className=' flex justify-between items-center w-full px-4'>
            <div className=' flex justify-center items-center flex-col border-r-2 border-sky-400 w-32'>
                <p>Otomobil</p>
                <span className=' font-bold text-lg'>50₺</span>
            </div>

            <div  className=' flex justify-center items-center flex-col border-r-2 border-sky-400 w-32'>
                <p>Motosiklet</p>
                <span className=' font-bold text-lg'>25₺</span>
            </div>

            <div  className=' flex justify-center items-center flex-col w-32'>
                <p>Kamyonet</p>
                <span className=' font-bold text-lg'>75₺</span>
            </div>
        </div>
    </div>
  )
}

export default PriceDetails
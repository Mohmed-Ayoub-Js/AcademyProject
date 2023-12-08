import React from 'react'
import Header from '@/components/header/Header'
import DataApp from '@/componentsElmpley/DataApp'

const Emplo = () => {
  return (
    <div className="flex justify-between  items-start flex-row">
      <Header />
      <div className="flex justify-between  items-center flex-col p-5">
        <center>
        <div dir='rtl'>
          <h1 className='flex text-4xl font-bold hover:text-green-600' dir='rtl' style={{transition:'0.5s'}}>
            بيانات المستخدمين
          </h1>
        </div>          
        </center>
      <div  className='w-[1080px] m-2'>
        <DataApp />
      </div>        
      </div>

    </div>
  )
}

export default Emplo
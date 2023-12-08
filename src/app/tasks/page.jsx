import React from 'react'
import Header from '@/components/header/Header';
import { Button } from '@nextui-org/react';
import {Input} from "@nextui-org/react";
const Task = () => {
  return (
    <div className="flex justify-between  items-start flex-row">
      <Header />
      <div className="flex justify-between  items-center flex-col p-5">
        <center>
        <div dir='rtl'>
          <h1 className='flex text-4xl font-bold hover:text-green-600' dir='rtl' style={{transition:'0.5s'}}>
           ادارة المهام
          </h1>
        </div>          
        </center>
      <div  className='w-[1080px] m-2'>
        <div className='flex justify-center items-center flex-row gap-5'>
      <Input type="email" label="Email" placeholder="Enter your email" />
      <Button>
        اضافة
      </Button>          
        </div>

        <div className='bg-gray-950 rounded-xl shadow-xl m-5 p-5'>
          <div>
            <h1 className='font-bold text-xl'>
              اضافة طالب قديم
            </h1>
            الوصف الوصف هو لاوصافقحجالاهقفهاجدخفقهادفخاهقفاعفحثخàهاعفثخحهاع
          </div>
        <div className='m-4'>
          <Button color="danger" className='m-5'>
        Danger
      </Button>  
      <Button color="success">
        Success
      </Button>            
        </div>

        </div>
      </div>        
      </div>

    </div>
  )
}

export default Task
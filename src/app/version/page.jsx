"use client";
import React from 'react'
import { useRouter } from 'next/navigation';
import { Button } from '@nextui-org/react';
const Version = () => {
  const router = useRouter();
  return (
    <div className='flex justify-center items-center flex-col'>
        <img src="https://static.vecteezy.com/system/resources/previews/011/577/724/original/3d-rendering-of-checkmark-icon-true-choice-png.png" alt="" srcset="" width={100} height={100}/>
        <div className='flex justify-center items-center flex-col'>
          <h1 className='font-bold text-green-500'>
            التطبيق يستخدم آخر اصدار
          </h1>
          <h1  className='font-bold text-green-500'>
           v1.0.0 
          </h1>
           <Button onClick={() => {router.back()}}>
            الرجوع الى اخر صفحة
           </Button>
        </div>
    </div>
  )
}

export default Version
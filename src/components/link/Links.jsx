"use client";
import React , {useState} from 'react'
import { BookOnline } from '@mui/icons-material';
import Link from 'next/link';
import { Progress } from "@nextui-org/react";
const Links = () => {
   // const links = ["الصفحة الرئيسية","التلاميذ","الموظفون","المهام","عن البرنامج"];
    const links = [
      {
        a:"/applications",
        href:'الصفحة الرئيسية'
      },
      {
        a:"/tasks",
        href:'المهام'
      },
      {
        a:"/employee",
        href:'التلاميذ'
      },
      {
        a:"/info",
        href:'عن'
      },
    ];

    const [loading , setLoading] = useState(false)
  return (
  <div className='flex justify-center items-center flex-col'>
    <div className='flex justify-between gap-[50px] items-start flex-row gap-6 mb-5 mt-0'>
        <div  className='flex justify-between items-start flex-row gap-6 mb-5 mt-0'>
        {links.map((item , index) => (
         <Link key={index} href={item.a} onClick={() => {setLoading(true)}}>
            <div key={index} className='flex text-gray-600 hover:text-white cursor-pointer' style={{transition:'0.5s'}}> 
              {item.href}
            </div>         
         </Link>

        ))}            
        </div>
    <div>
        <p className='text-purple-500 bg-black rounded-lg shadow-lg cursor-pointer'>
            check version
        </p>
    </div>
    </div> 
       {loading == true ? (
            <Progress
            size="sm"
            isIndeterminate
            aria-label="Loading..."
            className="max-w-md m-5"
          />
       ):(
        <Progress
        size="sm"
        isIndeterminate
        aria-label="Loading..."
        className="max-w-md hidden"
      />
       )}
  </div>

  )
}

export default Links
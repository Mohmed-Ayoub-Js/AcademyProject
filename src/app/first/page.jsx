"use client";
import React , {useState , useEffect} from 'react'
import ReactConfetti from 'react-confetti';
import Link from 'next/link';
import { Button } from '@nextui-org/react';
const First = () => {
  const isClient = typeof window !== 'undefined';
  const [windowa, setWindow] = useState({
    width: isClient ? window.innerWidth : 0,
    height: isClient ? window.innerHeight : 0,
  });
    const size =() => {
        setWindow(    {
            width:window.innerWidth, 
            height :window.innerHeight
            })
    }

    useEffect(() => {
      if (isClient) {
        window.addEventListener('resize', size);
        return () => {
          window.removeEventListener('resize', size);
        };
      }
    }, [windowa]);
  return (
    <div>
        <ReactConfetti 
         width={windowa.width} height={windowa.height}
         tweenDuration={1000}
        />
        <div className='flex justify-center items-center flex-col'>
        <img src="happy.webp" width={500} height={500} alt="" srcset="" />
          <div  className='flex justify-center items-center flex-col'>
            <h1 className='font-bold text-4xl'>
                مبروك على اول مرة استخدام
            </h1>
            <Link href='/first/setsetting' className='m-5'>
              <Button color='default' variant='shadow'>
                 اعداد البرنامج
              </Button>
            </Link>
          </div>
        </div> 
    </div>
  )
}

export default First;
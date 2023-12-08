"use client";
import React from 'react'
import {Input} from "@nextui-org/react";
import ModalFromApplication from '@/components/modal/Modal';
import { useState } from 'react';
import { useNavigate } from "next/router";
import { useRouter } from 'next/navigation';
import { Button } from '@nextui-org/react';
import {Chip} from "@nextui-org/react";
const Check = () => {
  const [userpassword, setUserpassword] = useState('');
  const isClient = typeof window !== 'undefined'; 
  const password = isClient ? localStorage.getItem('password') : null;
  const [loading, setLoading] = useState('hidden');
  const [button, setButton] = useState('block');
  const [text, setText] = useState('تسجيل الدخول');
  const router = useRouter();

  function userChaing() {
    if (userpassword !== '') {
      if (password === userpassword) {
        setLoading('block');
        setButton('hidden');
        router.push('/application');
      } else {
        setText('كلمة السر خاطئة');
        setTimeout(() => {
          setText('تسجيل الدخول');
        }, 2000);
      }
    } else {
      setText('حقل الإدخال فارغ');
      setTimeout(() => {
        setText('تسجيل الدخول');
      }, 2000);
    }
  }

  return (
    <div className='flex justify-center items-center flex-col m-10'>
      <div className='m-5'>
        <p className='mt-5 text-5xl font-extrabold leading-[1.15]  sm:text-6xl'>
          التحقق من صلاحية الوصول
        </p>
      </div>
      <Input
        onChange={(e) => {
          setUserpassword(e.target.value);
        }}
        isRequired
        type='password'
        label='كلمة السر'
        className='max-w-xs'
      />

      <div className='flex justify-center items-center flex-row gap-5 m-5'>
        {/* استخدمت isClient للتحقق من وجود المتصفح قبل استخدام localStorage */}
        {isClient && <ModalFromApplication />}
        <div>
          <Chip>او</Chip>
        </div>
        <div>
          <Button className={`${button}`} variant='shadow' onClick={userChaing}>
            {text}
          </Button>
          <Button className={`${loading}`} variant='shadow' onClick={userChaing}>
            جار التسجيل
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Check;
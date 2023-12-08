"use client";
import React, { useState } from 'react';
import { Input } from '@nextui-org/react';
import { useRouter } from "next/navigation";

const SetSettings = () => {
  const route = useRouter();
  const [password, setPassword] = useState('');
  const handleAddPassword = () => {
    localStorage.setItem('password', password);
    setPassword('');
    route.push('/');
  };
  return (
    <div className='flex justify-center items-center flex-row'>
      <div className='w-[500px] flex justify-center items-center flex-col m-6'>
        <img src="https://cdn-icons-png.flaticon.com/512/10473/10473528.png" alt="" width={400} height={400} />
        <Input
          placeholder='كلمة سر'
          label='ادخل كلمة السر'
          className='m-5'
          value={password}
          onChange={(e) => { setPassword(e.target.value) }}
        />
        <button
          className="relative overflow-hidden rounded-lg h-12 group hover:animate-pulse hover:shadow-lg hover:scale-105 transition duration-500 before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-br before:from-pink-400 before:via-purple-400 before:to-indigo-400"
          onClick={handleAddPassword}
        >
          <span className="relative text-white font-bold px-8 py-8">اضافة</span>
        </button>
      </div>
      <div dir='rtl'>
        <h1 className='text-4xl font-bold'>
          اضافة كلمة سر
        </h1>
        <h1>
          حماية و تأمين البيانات امر مهم جدا ، لهذا يرجى ادخال كلمة سر
        </h1>
      </div>
    </div>
  );
}

export default SetSettings;

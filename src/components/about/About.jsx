import React from 'react'
import {Card, CardFooter, Image, Button} from "@nextui-org/react";
import axios from 'axios';
import { useEffect , useState } from 'react';
import {Input} from "@nextui-org/react";
import Link from 'next/link';
const About = () => {
  const [data , setData] = useState([]);
  const [id , setId] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/read');
        console.log('البيانات المسترجعة:', response.data);
        if (Array.isArray(response.data.data)) {
          setData(response.data.data);
        } else {
          console.error('البيانات المسترجعة ليست مصفوفة.');
        }
      } catch (error) {
        console.error('حدث خطأ أثناء جلب البيانات:', error);
      }
    };
  
    fetchData();
  }, [data]);
return (

    <div dir='rtl' className='w-[500px] p-5 rounded-lg shadow-xl h-[150px]' style={{backgroundColor:'#333'}}>
        <div>
          <h1 className='font-bold text-xl'>
           التحقق من اشتراك الطلاب
          </h1>
        </div>
        <div className='flex justify-center items-center flex-col gap-4 w-[300px]'>
        <Input type="text" label="ادخل معرف الطالب" placeholder="معرف الطالب" />
        <Link href='/info' className='text-white hover:text-gray-500' style={{transition:'0.5s'}}>التعرف على طريقة جلب id</Link>
        </div>
    </div>
  )
}

export default About
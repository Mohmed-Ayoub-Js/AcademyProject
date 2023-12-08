"use client";
import AddIcon from '@mui/icons-material/Add';
import VisibilityIcon from '@mui/icons-material/Visibility';
import InfoIcon from '@mui/icons-material/Info';
import { Input} from "@nextui-org/react";
import { SearchIcon } from './SearchIcon';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import GitHubIcon from '@mui/icons-material/GitHub';
import {Divider} from "@nextui-org/react";
import { useState } from 'react';
export default function Options() {
  const iconsShow = [
    {
     icon: <PersonIcon />,
     name:'اضافة مستخدم',
     des:'وظيفة هذه الميزة هو اضافة المزيد من التلاميذ و الموظفين بشكل منظم مع هيكلة البيانات في صفحة مخصصة للتعديل عليها ',
    }, 
    {
     icon: <SettingsIcon />,
     name:'اظهار المستخدمين',
     des:'خاصية اظهار المستخدمين  ، هي ميزة موجودة منذ الاصدار الاول من التطبيق ، تعمل هذه الميزة على اظهار المستخدمين و التلاميذ و الموظفين الموجودة في  أكادمية التحدي و التحكم في البيانات كتعديلها و حذفها وغيره'
   },
   {
    icon: <GitHubIcon />,
    name:'المزيد عن التطبيق',
    des:'للتعرف على التطبيق و عن الاصدار ، وايضا عن طريقة الاستخدام',
  },
  ];



  return (
<div className='w-[1149px] p-2 flex justify-between items-center flex-col'>
 <div className='flex justify-between gap-[600px] items-center flex-row m-2 p-2'>
  <div>
  <h1 className='text-2xl font-bold'>
   أكادمية التحدي
  </h1>   
  </div>
  <div className='flex justify-center items-center flex-row'>
  {iconsShow.map((item , index) => (
    <div key={index} className='p-2 bg-gray-900 cursor-pointer m-2 rounded-lg shadow-lg'> 
      {item.icon}
    </div>
  ))}    
  </div>


</div>     

<Divider className="my-4 w-full" />

    </div>

  );
}

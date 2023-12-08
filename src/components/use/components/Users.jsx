"use client";
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import axios from 'axios';
import { useEffect, useState } from 'react';
export default function Users(){
  const [data , setData] = useState([]);

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
     

    return(
      <div className="flex justify-center items-center gap-7 flex-row  bg-purple-500  shadow-2xl rounded-lg p-5">
      <div className='bg-black rounded-lg shadow-lg p-2'>
        <p className='text-purple-500'>
         <AccessibilityNewIcon />
        </p>
      </div>
      <div className='flex justify-center items-center flex-col'>
      <div>
        <p className="font-bold text-white">
          عدد التلاميذ : 
        </p>
      </div>
      <div>
        <p className='font-bold text-xl'>
          {data.length}
         </p>
      </div>            
      </div>

    </div>
    )
}
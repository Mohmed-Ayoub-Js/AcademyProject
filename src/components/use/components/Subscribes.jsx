"use client";
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import axios from 'axios';
import { useState, useEffect } from 'react';
import {Spinner} from "@nextui-org/react";
export default function Sub() {
  const [data, setData] = useState([]);
  const [latestStudent, setLatestStudent] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/read');
        console.log('البيانات المسترجعة:', response.data);
        if (Array.isArray(response.data.data)) {
          setData(response.data.data);

          // تحديث آخر طالب عند تغيير البيانات
          if (response.data.data.length > 0) {
            setLatestStudent(response.data.data[response.data.data.length - 1]);
          }
        } else {
          console.error('البيانات المسترجعة ليست مصفوفة.');
        }
      } catch (error) {
        console.error('حدث خطأ أثناء جلب البيانات:', error);
      }
    };

    fetchData();
  }, [data]);

  if (latestStudent) {
    return (
      <div className="flex justify-center items-center gap-7 flex-row bg-green-600 shadow-2xl rounded-lg p-5">
        <div className='bg-black rounded-lg shadow-lg p-2'>
          <p className='text-green-600'>
            <AccessibilityNewIcon />
          </p>
        </div>
        <div className='flex justify-center items-center flex-col'>
          <div>
            <p className="font-bold text-white">
              احدث تلميذ :
            </p>
          </div>
          <div>
            <p onClick={() => { console.log(latestStudent); }}>
              {latestStudent.name} {latestStudent.family}
            </p>
          </div>
        </div>
      </div>
    );
  } else {
    return (
     <div>
          <Spinner />
     </div>
    );
  }
}

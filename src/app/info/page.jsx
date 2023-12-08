import React from 'react'
import Header from '@/components/header/Header';
import {Card, CardBody} from "@nextui-org/react";
import {Accordion, AccordionItem} from "@nextui-org/react";
const Info = () => {
  const data = [
    {
      id:3,
      title:'This software is developed by Next JS FramWork',
      des:' If you are not a developer, you may not benefit from what is written, you can go to the How to use page for users ',
    },
    {
      id:1,
      title:'github',
      des:'To learn about the source code of the program, you can read all the code that github contains, we have compiled all the code in our account on Github',
    },
    {
      id:2,
      title:'electornjs',
      des:'NextJS may be more dedicated to developing user interfaces and backend sites, Electronjs will be the only way to make the application custom for Windows operating systems in the .exe file format.',
    },
  ]
  return (
    <div className="flex justify-between  items-start flex-row">
      <Header />
      <div className="flex justify-between  items-center flex-col p-5">
        <center>
        <div dir='rtl'>
          <h1 className='flex justify-center items-center flex-col text-4xl font-bold hover:text-green-600' dir='rtl' style={{transition:'0.5s'}}>
            application docs
          </h1>
         {data.map((item , index) => (
          <Card key={index} className='m-5'>
          <CardBody>
            <p className='font-bold text-2xl'>{item.title}</p>
            <p className='text-gray-400'>
             {item.des}
            </p>
          </CardBody>
       </Card>          
         ))}
        </div>          
        </center>
      <div  className='w-[1080px] m-2'>
        <div>
          <h1 className='text-3xl font-bold'>
            1_How to use
          </h1>
          <div className='text-2xl font-bold m-3'>
            Add Student
          </div>
          <div className='m-4'>
          The method of adding the student is simple, you can go to the home page of the application and then click on the students button and then click on the add button and then fill in the data 
          </div>
          <div className='text-2xl font-bold m-3'>
          Student ID
          </div>
          <div className='m-4'>
          A student ID is a set of a string of symbols that each part is separated by (-), as a simple example: 91743cab-f3d5-4a58-a0e3-e018b79ee7ee 
You can extract this ID by searching for the desired student on the Students page and then click on More and then it will show you the ID where you can copy it and with this ID you know if the student has expired his monthly subscription period or not            
          </div>
          <div className='text-2xl font-bold m-3'>
          Tasks page
          </div>
          <div className='m-4'>
          It is a page designed specifically to store what an organization <span className='font-bold'>اكادمية التحدي</span>  wants from it in an organized manner 
          </div>
          <h1 className='text-3xl font-bold'>
            2_Student Privacy
          </h1>
          <div className='m-4'>
          This application works on the Internet, it means that there is access to the privacy of students on the Internet, for this we strive with all our efforts to protect this data from cyber security attacks, and it is better to take important periodic measures so that we preserve this data and not be in the hands of others who want sabotage, as the first step must download a backup copy of student data in the settings, and if you notice that strange things happen in the application, please inform The developer may be due to a cybersecurity attack on the data, you can also get the data in the Render platform to host the backend of the application, (link) 
          </div>
        </div>
         
      </div>        
      </div>

    </div>
  )
}

export default Info
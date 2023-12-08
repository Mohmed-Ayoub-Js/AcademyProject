import {Divider} from "@nextui-org/react";
import SettingsIcon from '@mui/icons-material/Settings';
import Link from "next/link";
export default function Header(){
  const link = [
    {
      id:1,
      href:'/employee',
      name:'التلاميذ',
    },
    {
      id:1,
      href:'/info',
      name:'Application docs',
    },
    {
     id:1,
     href:'/tasks',
     name:'المهام',
    },
  ];

  const more =[
    {
      id:1,
      href:'/version',
      name:'الاصدار',
    },
    {
      id:1,
      href:'/info',
      name:'كيفية الاستخدام',
    },   
  ]
return(
 <div className="flex justify-center items-center flex-col bg-slate-900 shadow-lg rounded-lg">
    <Link href='../application'>
    <div  className='flex justify-center items-center flex-col p-0'>
      <img src="logo.png" alt="" srcset="" width={200} height={100}/>
      <div>
        <p className='font-bold'>
          أكادمية التحدي
        </p>
      </div>  
      </div>  
    </Link>
    <div>
     {link.map((item , index) => (
    <Link key={index} href={item.href}>
      <div > 
        <div className="rounded-lg shadow-lg bg-black m-5 p-5 flex cursor-pointer hover:bg-white hover:text-black" style={{transition:'0.5s'}}>
          {item.name}        
        </div>
      </div>    
    </Link>

     ))}
    </div>
    <Divider className="my-4" />
    <div>
      المزيد
    </div>    <div className="flex justify-center items-center flex-col">
    {more.map((item , index) => (
      <Link  key={index} href={item.href}>
      <div> 
        <div className="rounded-lg w-[150px] shadow-lg bg-black m-5 p-5 flex cursor-pointer hover:bg-white hover:text-black" style={{transition:'0.5s'}}>
          {item.name}        
        </div>
      </div>      
      </Link>

     ))}
    </div>
    <Divider className="my-4" />

    <div>
      <SettingsIcon />
    </div>
 </div>
    )
}

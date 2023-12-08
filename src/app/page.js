"use client";
import Link from "next/link";
import { useState , useEffect} from "react";
import { Progress } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
export default function Home() {
   const router = useRouter();
   const [display , setDisplay] = useState('block');
   const [functionElement , setFunctionElement] = useState('hidden');
   const [loading , setloading] = useState('hidden');
   const [error , setError] = useState("");
      setTimeout(() => {
         if(display == 'block') {
            setDisplay('hidden');
         } 
         if(functionElement == "hidden" ){
               const getData = localStorage.getItem('password');
               if(getData == null){
                router.push('/first')
               }    
               setFunctionElement('block');  
         } 
      }, 3000);

     setTimeout(() => {
      setError('هل التحميل اخذ وقت طويل عن المتعاد ؟ يرجى التواصل مع المطور')
     }, 8000);

return (
 <main className="flex justify-center items-center flex-col m-10">
         <style jsx global>{`
         @import url('https://fonts.googleapis.com/css2?family=Katibeh&family=Roboto+Condensed:wght@300&display=swap');

        html {
         font-family: 'Katibeh', serif;
         font-family: 'Roboto Condensed', sans-serif;
        }
      `}</style>
   <div className={`${display} flex justify-center items-center flex-col`}>
      <img src='logo.png'/>
      <Progress
      size="sm"
      isIndeterminate
      aria-label="Loading..."
      className="max-w-md"
    />
    <div>
      <p className="font-bold">برنامج ادارة مؤسسة اكادمية التحدي</p>
    </div>
   </div>
   <Button  className={`${functionElement}`} onClick={() => {setloading('block');setFunctionElement('hidden')}}>
   <Link href='/check'>
   <div>
    التحقق الان
   </div>
   </Link>
   </Button>      

   <Button  className={`${loading}`} isLoading>
   <div>
    يرجى الانتظارp
   </div>   
   </Button>
   {error}    

 </main>
  )
}

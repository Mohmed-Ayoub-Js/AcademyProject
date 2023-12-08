"use client";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import React from "react";
import {Input} from "@nextui-org/react";
import {Select, SelectItem} from "@nextui-org/react";
import { useState } from "react";
import Axios from "axios";
export default function ModalApplication(){
    const {isOpen, onOpen, onClose} = useDisclosure();
    const [backdrop,  setBackdrop] = React.useState('opaque')
    const [name , setName] = useState('');
    const [family , setFamily] = useState('');
    const [number , setNumber] = useState('');
    const [day , setDay] = useState('');
    const [mounth , setMounth] = useState('');
    const [year , setYear] = useState('');
    const [subject , setSubject] = useState([]);

    const backdrops = [ "blur"];
    const animals = [
        {label: "الروبوتيك",},
        {label: "الرياضيات", },
        {label: "العلوم",},
        {label: "الفيزياء",},
        {label: "الانجليزية", },
        {label: "السوروبان",},
      ];
    const handleOpen = (backdrop) => {
      setBackdrop(backdrop)
      onOpen();
    }
    const currentDate = new Date();
  const Subscription = currentDate.toISOString();
   const Add = () => {
if (name !== '' && family !== '' && number !== '' && day !== '' && mounth !== '' && year !== '' && subject !== '') {

  Axios.post('http://localhost:3001/add' , {
    name:name,family:family,number:number,day:day,mounth:mounth,year:year,subject:subject,Subscription:Subscription
  }) .then(response => {
    console.log('تم إرسال البيانات بنجاح:', response.data);
    onClose();
    location.href='/employee'
  })
  .catch(error => {
    console.error('حدث خطأ أثناء إرسال البيانات:', error);
  });
} else {
  console.log('One or more values are not set.');
}}
   const handleSubjectClick = (value) => {
    const isSelected = subject.includes(value);
    if (isSelected) {
      setSubject(subject.filter((subject) => subject !== value));
    } else {
      setSubject([...subject, value]);
    }

    console.log(subject)
  };
const daysSinceSubscription = Math.floor((currentDate - new Date(Subscription)) / (1000 * 60 * 60 * 24));

if (daysSinceSubscription > 30) {
  console.log('لم يقم المستخدم بالاشتراك في الخدمة لأكثر من 30 يومًا.');
}

    return(
        <>
        <div className="flex flex-wrap gap-3">
          {backdrops.map((b) => (
            <Button  
              key={b}
              variant="flat" 
              color="default" 
              onPress={() => handleOpen(b)}
              className="capitalize"
            >
             اضافة 
            </Button>
          ))}  
        </div>
        <Modal backdrop={backdrop} isOpen={isOpen} onClose={onClose}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">اضافة طالب جديد</ModalHeader>
                <ModalBody>
                <div className="m-2 p-2 flex justify-center items-center flex-col">
                <Input type="text" label="اسم الطالب" className="m-2" onChange={(e) => {setName(e.target.value)} }/> 
                <Input type="text" label="لقب الطالب" className="m-2" onChange={(e) => {setFamily(e.target.value)} }/>  
                <Input type="text" label="رقم الهاتف" className="m-2" onChange={(e) => {setNumber(e.target.value)} }/>  
                <Input type="text" label="يوم الميلاد" className="m-2" onChange={(e) => {setDay(e.target.value)} }/>  
                <Input type="text" label="شهر الميلاد" className="m-2" onChange={(e) => {setMounth(e.target.value)} }/>  
                <Input type="text" label="سنة الميلاد" className="m-2" onChange={(e) => {setYear(e.target.value)} }/>  

                <Select
                label="المواد المطلوبة"
                placeholder="اختار مادة"
                selectionMode="multiple"
                className="m-2"
                >
                {animals.map((animal) => (
                    <SelectItem 
                    key={animal.value} 
                    value={animal.value} 
                    onClick={() => handleSubjectClick(animal.value)}
                    checked={subject.includes(animal.value)}                >
                    {animal.label} 
                    </SelectItem>
                ))}
                </Select>                
                </div>         
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    غلق
                  </Button>
                  <Button color="primary" onPress={Add}>
                    اضافة
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </>
    )
}
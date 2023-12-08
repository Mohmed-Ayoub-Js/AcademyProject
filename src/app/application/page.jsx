"use client";
import About from "@/components/about/About";
import Header from "@/components/header/Header";
import Links from "@/components/link/Links";
import Options from "@/components/options/Options";
import CardsApp from "@/components/use/Use";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Popover, PopoverTrigger, PopoverContent, Button } from "@nextui-org/react";
import { Snippet } from "@nextui-org/react";

const Application = () => {
  const [data, setData] = useState([]);

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
    <div className="flex justify-center items-center flex-col">
      <div className="flex justify-between items-start flex-row">
        <Header />
        <div className="flex justify-center items-center flex-col ">
          <Options />
          <Links />
          <div className="grid grid-cols-2 justify-center items-start">
            <div className="flex justify-center items-center flex-col">
              <CardsApp />
              <center>
                <div className="gap-2 grid grid-cols-2 sm:grid-cols-4 m-5">
                  {data.map((item) => (
                    <Popover placement="right" key={item.id}>
                      <PopoverTrigger>
                        <Card shadow="sm" isPressable onPress={() => console.log("item pressed")}>
                          <CardBody className="overflow-visible p-0">
                            <Image
                              shadow="sm"
                              radius="lg"
                              width="100%"
                              alt={item.title}
                              className="w-full object-cover h-[140px]"
                              src="student.png"
                            />
                          </CardBody>
                          <CardFooter className="text-small flex justify-between items-center flex-col">
                            <b>{item.name}</b>
                          </CardFooter>
                        </Card>
                      </PopoverTrigger>
                      <PopoverContent>
                        <div className="px-1 py-2">
                          <div className="text-small font-bold">معرف المستخدم</div>
                          <div className="text-tiny">
                            <Snippet>{item.id}</Snippet>
                          </div>
                        </div>
                      </PopoverContent>
                    </Popover>
                  ))}
                </div>
              </center>
            </div>
            <div className="flex justify-center items-center flex-col">
              <About />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Application;

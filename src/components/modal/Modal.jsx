"use client";
import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import {Input} from "@nextui-org/react";
export default function App() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
      <Button onPress={onOpen}>نسيت كل السر</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">عند نسيان كلمة السر</ModalHeader>
              <ModalBody>
              <Input
                isClearable
                type="text"
                label="اسم مستخدم محلي"
                variant="bordered"
                placeholder="ادخل الاسم الافتراضي"
                defaultValue="admin+?"
                onClear={() => console.log("input cleared")}
                className="max-w-xs"
                />
                <Input
                isClearable
                type="password"
                label="password"
                variant="bordered"
                placeholder="ادخل كلمة السر الجديدة"
                defaultValue="PASSWORD"
                onClear={() => console.log("input cleared")}
                className="max-w-xs"
                />
            </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

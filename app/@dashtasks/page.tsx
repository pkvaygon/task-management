"use client";
import nodata from '@/public/no_data.png'
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
import Image from 'next/image';
export default function DashTasks() {
  return (
    <Card className="w-full h-full rounded-large">
      <CardHeader>Assigned Tasks</CardHeader>
          <CardBody className=' relative w-full h-full flex justify-start items-center'>
              <Image fill className='object-contain'  src="/no_data.png" alt="no tasks" />
      </CardBody>
          <CardFooter >
              <p className='text-center w-full'>You don&apos;t assigned to any tasks</p>
      </CardFooter>
    </Card>
  );
}

"use client";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
import Image from "next/image";
export default function DashTasks() {
  return (
    <Card className="w-full h-full rounded-large">
      <CardHeader>Team</CardHeader>
      <CardBody className=" relative w-full h-full flex justify-start items-center">
        <Image
          fill
          className="object-contain"
          src="/no_team.png"
          alt="no tasks"
        />
      </CardBody>
      <CardFooter>
        <p className="text-center w-full">No team</p>
      </CardFooter>
    </Card>
  );
}

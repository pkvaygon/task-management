"use client";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";

export default function DashTasks() {
  return (
    <Card className="w-full h-full rounded-large">
      <CardHeader>Projects</CardHeader>
      <CardBody></CardBody>
      <CardFooter>No Projects</CardFooter>
    </Card>
  );
}

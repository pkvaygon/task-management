"use client";

import { Textarea } from "@nextui-org/react";
import { usePathname } from "next/navigation";
import React from "react";


export default function DashNotes() {
    const pathname = usePathname()
    const [value, setValue] = React.useState('')
    return (
        <>
        <Textarea maxRows={11} onValueChange={setValue} fullWidth variant="bordered" classNames={{
            base: `h-full ${pathname !== "/" ? "hidden" : ""}`,
            mainWrapper: "h-full",
            innerWrapper: "h-full",
            inputWrapper: 'min-h-full'
            }} label="Notes" />
        </>
        )

}
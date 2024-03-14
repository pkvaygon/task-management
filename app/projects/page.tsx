"use client";

import { useRouter } from "next/navigation";
import React from "react";

export default function Projects() {
  const router = useRouter()
  React.useEffect(() => {
    router.refresh()
  },[router])
  return <div>Projects</div>;
}

"use client";

import type {
  ListboxProps,
  ListboxSectionProps,
  Selection,
} from "@nextui-org/react";

import React from "react";
import {
  Listbox,
  Tooltip,
  ListboxItem,
  ListboxSection,
  Link,
} from "@nextui-org/react";
import { Icon } from "@iconify/react";
import { cn } from "@/cn";
import { sidebarItems } from "@/static/sidebar-items";
import { usePathname } from "next/navigation";

export type SidebarItem = {
  key: string;
  title: string;
  icon?: string;
  href?: string;
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  items?: SidebarItem[];
  className?: string;
};

const SideBarLinks = () => {
  const pathname = usePathname();
  return (
    <Listbox aria-label="ListBox">
      {sidebarItems.map((item) => (
        <ListboxItem
          as={Link}
          href={item.href}
          className={`${
            pathname === item.href ? "bg-slate-700/20 dark:bg-slate-700/50" : ""
          } text-foreground`}
          aria-label="Sidebar Item"
          {...item}
          key={item.key}
          endContent={item.endContent || null}
          startContent={
            item.icon ? (
              <Icon
                className={cn(
                  "text-default-500 group-data-[selected=true]:text-foreground"
                )}
                icon={item.icon}
                width={24}
              />
            ) : (
              item.startContent ?? null
            )
          }
          title={item.title}>
          <Tooltip content={item.title} placement="right">
            <div className={`flex w-full items-center justify-center`}>
              {item.icon ? (
                <Icon
                  className={cn(
                    "text-default-500 group-data-[selected=true]:text-foreground"
                  )}
                  icon={item.icon}
                  width={24}
                />
              ) : (
                item.startContent ?? null
              )}
            </div>
          </Tooltip>
        </ListboxItem>
      ))}
    </Listbox>
  );
};

export default SideBarLinks;

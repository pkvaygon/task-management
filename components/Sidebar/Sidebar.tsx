"use client";

import {
  Avatar,
  Button,
  ScrollShadow,
  Spacer,
  Input,
  Link,
} from "@nextui-org/react";
import { Icon } from "@iconify/react";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import SidebarLinks from "@/components/Sidebar/SideBarLinks";
import { LogoIcon } from "@/icons";
import {sidebarItems} from '@/static/sidebar-items'

export default function SideBar() {
    return (
        <div className="h-dvh">
        <div className="relative flex h-full w-full flex-1 flex-col border-r-small border-divider p-6">
          <div className="flex items-center gap-2 px-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-foreground">
              <LogoIcon width={24} height={24} className="text-background" />
            </div>
            <span className="text-small font-bold uppercase">Askar</span>
            <div className="ml-auto">
              <ThemeSwitcher />
            </div>
          </div>
          <Spacer y={8} />
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 px-2">
              <Avatar
                isBordered
                size="sm"
                src="https://i.pravatar.cc/150?u=a04258114e29026708c"
              />
              <div className="flex flex-col">
                <p className="text-small font-medium text-default-600">
                  Askar dev
                </p>
                <p className="text-tiny text-default-400">Frontend Developer</p>
              </div>
            </div>
            <Input
              fullWidth
              aria-label="search"
              className="px-1"
              labelPlacement="outside"
              placeholder="Search..."
              startContent={
                <Icon
                  className="text-default-500  [&>g]:stroke-[2px]"
                  icon="solar:magnifer-linear"
                  width={18}
                />
              }
            />
          </div>
          <ScrollShadow className="-mr-6 h-full max-h-full py-6 pr-6">
            <SidebarLinks />
          </ScrollShadow>
          <Spacer y={8} />
          <div className="mt-auto flex flex-col">
            <Button
              as={Link}
              isExternal={true}
              href="https://askarcv-dev.vercel.app/"
              fullWidth
              className="justify-start text-default-500 data-[hover=true]:text-foreground"
              startContent={
                <Icon
                  className="text-default-500"
                  icon="solar:info-circle-line-duotone"
                  width={24}
                />
              }
              variant="light">
              Portfolio
              </Button>
            <Button
              className="justify-start text-default-500 data-[hover=true]:text-foreground"
              startContent={
                <Icon
                  className="rotate-180 text-default-500"
                  icon="solar:minus-circle-line-duotone"
                  width={24}
                />
              }
              variant="light">
              Log Out
            </Button>
          </div>
        </div>
      </div>
        )

}
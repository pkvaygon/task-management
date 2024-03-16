"use client";
import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar} from "@nextui-org/react";
import { LogoIcon } from "@/icons";
import { ThemeSwitcher } from "../ThemeSwitcher";

export default function Header() {
  return (
    <Navbar className="w-full h-10">
      <NavbarBrand className="flex items-center gap-2"> 
              <LogoIcon width={24} height={24}/>
        <p className="font-bold text-inherit">Askar</p>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          Some Items here
        </NavbarItem>
      </NavbarContent>

      <NavbarContent as="div" justify="end">
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              className="transition-transform"
              color="secondary"
              name="AskarDev"
              size="sm"
              src="https://i.pravatar.cc/150?u=a04258114e29026708c"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">askardev@gmail.com</p>
            </DropdownItem>
            <DropdownItem key="analytics">
              <ThemeSwitcher/>
            </DropdownItem>
            <DropdownItem key="settings">My Settings</DropdownItem>
            <DropdownItem key="team_settings">Team Settings</DropdownItem>
            <DropdownItem key="analytics">Analytics</DropdownItem>
            
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
}

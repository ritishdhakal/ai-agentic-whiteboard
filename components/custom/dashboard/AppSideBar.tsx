"use client";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { useUser } from "@clerk/nextjs";
import {
  Archive,
  Files,
  Icon,
  Settings,
  Sparkle,
  UsersIcon,
} from "lucide-react";

import Image from "next/image";
import { usePathname } from "next/navigation";

export function AppSidebar() {
  const { user } = useUser();
  const path = usePathname();
  return (
    <Sidebar>
      <SidebarHeader className="p-2">
        <div className="flex items-center gap-2">
          <Image src="/logo.svg" alt="Logo" width={40} height={40} />
          <h1 className="text-xl font-bold">WhiteBoard</h1>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <Button>+Create New Board</Button>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>My Board</SidebarGroupLabel>
          <SidebarMenuButton className="p-5" isActive={path === "/dashboard"}>
            <Files></Files>
            <span> All files</span>
          </SidebarMenuButton>

          <SidebarMenuButton
            className="p-5 mt-2"
            isActive={path === "/shared-files"}
          >
            <UsersIcon />
            <span> Shared</span>
          </SidebarMenuButton>

          <SidebarMenuButton
            className="p-5 mt-2"
            isActive={path === "/archived"}
          >
            <Archive />
            <span> Archieved</span>
          </SidebarMenuButton>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Others</SidebarGroupLabel>

          <SidebarMenuButton className="p-5 mt-2" isActive={path === "/ai"}>
            <Sparkle />
            <span> AI Helper</span>
          </SidebarMenuButton>

          <SidebarMenuButton
            className="p-5 mt-2"
            isActive={path === "/settings"}
          >
            <Settings />
            <span>Setting</span>
          </SidebarMenuButton>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <Button>+Create New Board</Button>
        <div className="p-4 my-3 border rounded-2xl">
          <h1 className="text-sm flex justify-between mb-2">
            2 files created <span></span>total3{" "}
          </h1>
          <Progress value={66} className="h-2 mt-2"></Progress>
        </div>
        <div className="flex items-center gap-2 p-2 border rounded-2xl">
          <Image
            src={user?.imageUrl ?? ""}
            alt="image-url"
            width={40}
            height={40}
            className="rounded-full"
          ></Image>
          <h2>
            {user?.firstName} {user?.lastName}
          </h2>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}

import * as React from "react";
import { DollarSign, Home, Key, User, UserCheck, UserMinus, UserPlus, XCircle, Users, MessageCircle } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";

interface NavItem {
  title: string;
  url: string;
  items?: NavItem[] | null;
  isActive?: boolean;
  icon: React.ReactNode;
}

const data: { navMain: NavItem[] } = {
  navMain: [
    {
      title: "Home",
      url: "/super-admin-dashboard",
      items: [],
      icon: <Home />,
      isActive: true,
    },
    {
      title: "Finance",
      url: "/super-admin-dashboard/finance",
      items: [],
      icon: <DollarSign />,
      isActive: false,
    },
    {
      title: "Communication",
      url: "/super-admin-dashboard/communication",
      items: [],
      icon: <MessageCircle />,
    },
    {
      title: "Add School",
      url: "/super-admin-dashboard/admin-edit",
      items: [],
      icon: <Users />,
    },
    {
      title: "Password Management",
      url: "/super-admin-dashboard/password-management",
      items: null,
      icon: <Key />,
    },
    {
      title: "Logout",
      url: "/",
      items: null,
      icon: <XCircle />,
    },
  ],
};

const SuperAdminSidebar = ({ ...props }: React.ComponentProps<typeof Sidebar>) => {
  return (
    <Sidebar variant="floating" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold">SHS SUPER ADMIN</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu className="gap-2">
            {data.navMain.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <a href={item.url} className="flex gap-2 items-center">
                    {item.icon}
                    {item.title}
                  </a>
                </SidebarMenuButton>
                {item.items?.length ? (
                  <SidebarMenuSub className="ml-0 border-l-0 px-1.5">
                    {item.items.map((subItem) => (
                      <SidebarMenuSubItem key={subItem.title}>
                        <SidebarMenuSubButton asChild isActive={subItem.isActive}>
                          <a href={subItem.url} className="flex gap-2 items-center">
                            {subItem.icon}
                            {subItem.title}
                          </a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                ) : null}
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default SuperAdminSidebar;

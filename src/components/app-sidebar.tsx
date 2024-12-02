import * as React from "react"
import {  DollarSign, Home, Key, User, UserCheck, UserMinus, UserPlus, XCircle } from "lucide-react"

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
} from "@/components/ui/sidebar"



// This is sample data.
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
      url: "/dashboard",
      items: [
        {
              title:'Total Students',
              url:'/dashboard/total-students',
              icon:<User/>
      },
     
        {
              title:' Students in School',
              url:'/dashboard/students-inschool',
              icon:<UserCheck/>
      },
     
        {
              title:'Signed Out',
              url:'/dashboard/signed-out',
              icon:<UserMinus/>
      },
     
        {
              title:'Signed In',
              url:'/dashboard/signed-in',
              icon:<UserPlus/>
      },
     
    ],
      icon:<Home/>,
      isActive:true
     
    },
    {
      title: "Finance",
      url: "/dashboard/finance",
      items:null
     
      ,
      icon:<DollarSign/>,
      isActive:false
      
         
    },
    {
      title:'Password Management',
      url:'/dashboard/password-management',
      items:null,
      icon:<Key/>
    },
    {
      title:'Logout',
      url:'/',
      items:null,
      icon:<XCircle/>
    }
  
  ],
}

const  AppSidebar = ({ ...props }: React.ComponentProps<typeof Sidebar>) =>{
  return (
    <Sidebar variant="floating" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
               
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold">SHS EXEAT ADMIN</span>
                 
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
                <SidebarMenuButton asChild >
                  <a href={item.url} className="flex gap-2 items-center">
                    {item.icon}
                    {item.title}
                  </a>
                </SidebarMenuButton>
                {item.items?.length ? (
                  <SidebarMenuSub className="ml-0 border-l-0 px-1.5">
                    {item.items.map((item) => (
                      <SidebarMenuSubItem key={item.title}>
                        <SidebarMenuSubButton asChild isActive={item.isActive}>
                          <a href={item.url} className="flex gap-2 items-center">
                            {item.icon}
                            {item.title}
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
  )
}

export default AppSidebar
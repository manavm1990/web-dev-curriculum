'use client'

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import { Link } from 'next-view-transitions'
import { usePathname } from 'next/navigation'

const NAV_ITEMS = [
  {
    title: 'Home',
    url: '/',
  },
  {
    title: '1-1 Soft Skills',
    url: '/soft-skills',
  },
  { title: '1-2 Installing Software', url: '/installing-software' },
  { title: '1-2 Mac/Linux Software', url: '/installing-software/mac' },
  { title: '1-2 Windows Software', url: '/installing-software/windoze' },
  { title: '1-2 File Systems', url: '/file-systems' },
] as const

export function AppSidebar() {
  const pathname = usePathname()

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Table of Contents</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {NAV_ITEMS.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link
                      href={item.url}
                      className={pathname === item.url ? 'font-black text-sidebar-primary' : ''}
                    >
                      {item.title}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}

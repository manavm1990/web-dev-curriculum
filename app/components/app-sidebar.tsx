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
import { Fragment } from 'react'
import { Separator } from './ui/separator'

const NAV_ITEMS = [
  {
    title: 'Home',
    url: '/',
  },
  {
    title: '1-1 Soft Skills',
    url: '/soft-skills',
  },
  { title: '1-2 Dev XP Tools 🧰', url: '/dev-xp-tools' },
  // { title: '1-2 Mac/Linux Software', url: '/installing-software/mac' },
  // { title: '1-2 Windows Software', url: '/installing-software/windoze' },
  // { title: '1-2 File Systems', url: '/file-systems' },
] as const

function checkForSectionChange(
  currentItem: (typeof NAV_ITEMS)[number],
  previousItem?: (typeof NAV_ITEMS)[number],
) {
  if (!previousItem) return false

  const currentSection = currentItem.title.split('-')[1]?.slice(0, 1)
  const previousSection = previousItem.title.split('-')[1]?.slice(0, 1)

  return currentSection !== previousSection
}

export function AppSidebar() {
  const pathname = usePathname()

  return (
    // TODO: Add collapsible sections when this 💩 gets too long!
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Table of Contents</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {NAV_ITEMS.map((item, index, items) => (
                <Fragment key={item.title}>
                  {index > 0 && checkForSectionChange(item, items[index - 1]) && <Separator />}
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <Link
                        href={item.url}
                        className={pathname === item.url ? 'font-black text-sidebar-primary' : ''}
                      >
                        {item.title}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </Fragment>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}

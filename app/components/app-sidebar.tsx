'use client'

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarSeparator,
  useSidebar,
} from '@/components/ui/sidebar'
import { cn } from '@/lib/utils'
import { ChevronDown } from 'lucide-react'
import { Link } from 'next-view-transitions'
import { usePathname } from 'next/navigation'
import { Fragment } from 'react'
import useCollapsible from './hooks/use-collapsible'

type BaseNavItem = {
  title: string
}

// DISCRIMINATED UNION - `submenu` and `url` are mutually exclusive
type NavItemWithUrl = BaseNavItem & {
  url: string
  submenu?: never
}
type NavItemWithSubmenu = BaseNavItem & {
  submenu: Array<{
    title: string
    url: string
  }>
  url?: never
}

type NavItem = NavItemWithUrl | NavItemWithSubmenu

const NAV_ITEMS: NavItem[] = [
  {
    title: 'Home',
    url: '/',
  },
  {
    title: 'Soft Skills',
    url: '/soft-skills',
  },
  {
    title: 'Dev XP Tools 🧰',
    submenu: [
      { title: 'Overview', url: '/dev-xp-tools' },
      { title: 'Mac/Linux Software', url: '/dev-xp-tools/mac' },
      { title: 'Windows Software', url: '/dev-xp-tools/windoze' },
    ],
  },
  {
    title: 'Fundamentals',
    submenu: [
      { title: 'Files and Directories', url: '/fundamentals/files-and-directories' },
      {
        title: 'How Computers Work',
        url: '/fundamentals/how-computers-work',
      },
      { title: 'UTF-8', url: '/fundamentals/utf-8' },
      { title: 'The Web', url: '/fundamentals/the-web' },
      { title: 'The Terminal', url: '/fundamentals/the-terminal' },
      { title: 'VS Code', url: '/fundamentals/vs-code' },
      { title: 'Version Control', url: '/fundamentals/git-github' },
      { title: 'Markdown', url: '/fundamentals/md' },
      { title: 'Web Standards', url: '/fundamentals/web-standards' },
    ],
  },
  {
    title: 'JS Basics',
    submenu: [
      { title: 'What is JS?', url: '/js-programming/what-is-js' },
      { title: 'Data in JS', url: '/js-programming/data' },
      { title: 'Arrays', url: '/js-programming/arrays' },
      { title: 'Node and VS Code', url: '/js-programming/node-code' },
      { title: 'Strings', url: '/js-programming/strings' },
      { title: 'Functions', url: '/js-programming/functions' },
      { title: 'Loops', url: '/js-programming/loops' },
    ],
  },
  {
    title: 'Functional Programming',
    submenu: [
      { title: 'First Class Functions', url: '/functional/callbacks' },
      { title: 'Array Methods', url: '/functional/array-methods' },
    ],
  },
  {
    title: 'Prepare for JS in the Browser',
    url: '/template-repo',
  },
  {
    title: 'Function Components',
    url: 'Function Components I',
  },
  {
    title: 'Special Interview Topics',
    submenu: [
      { title: 'Semantic Versioning', url: '/interview/sem-ver' },
      { title: 'Values and References', url: '/interview/values-references' },
      { title: 'Nested Maps & JSON', url: '/interview/nested-maps-json' },
      { title: 'Imperative', url: '/interview/imperative' },
      { title: 'Declarative', url: '/interview/declarative' },
      { title: 'OOP', url: '/interview/oop' },
      { title: 'Unit Testing', url: '/interview/unit-testing' },
      { title: 'Internals', url: '/interview/internals' },
    ],
  },
  {
    title: 'CSS 💄',
    submenu: [
      { title: 'CSS Review', url: '/css/css-review' },
      { title: 'Tailwind CSS I', url: '/css/tailwind' },
      { title: 'Tailwind CSS II', url: '/css/tailwind-2' },
      { title: 'HTML-Tailwind CSS', url: '/css/html-tailwind' },
    ],
  },
  { title: 'DOM Manipulation', url: '/dom-manipulation' },
  {
    title: 'Forms',
    submenu: [{ title: 'Render and Store', url: '/forms/render' }],
  },
  { title: 'Fetching Data', url: '/fetching-data' },
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

export default function AppSidebar() {
  const pathname = usePathname()
  const { toggleSidebar } = useSidebar()

  return (
    <Sidebar>
      <SidebarContent className="pb-8">
        <SidebarGroup>
          <SidebarGroupLabel>Table of Contents</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {NAV_ITEMS.map((item, index, items) => (
                <Fragment key={item.title}>
                  {index > 0 && checkForSectionChange(item, items[index - 1]) && (
                    <SidebarSeparator />
                  )}
                  <SidebarMenuItem>
                    {'submenu' in item && item.submenu ? (
                      <CollapsibleNavItem
                        item={item}
                        pathname={pathname}
                        onNavigate={toggleSidebar}
                      />
                    ) : (
                      <Link
                        href={item.url}
                        className={cn(
                          'hover:bg-sidebar-accent block rounded-md p-2 text-sm',
                          pathname === item.url && 'font-bold text-green-400',
                        )}
                      >
                        {item.title}
                      </Link>
                    )}
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

interface CollapsibleNavItemProps {
  item: NavItemWithSubmenu
  pathname: string
  onNavigate: () => void
}

function CollapsibleNavItem({ item, pathname, onNavigate }: CollapsibleNavItemProps) {
  const { isOpen, setIsOpen } = useCollapsible()

  return (
    <Collapsible defaultOpen open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger className="hover:bg-sidebar-accent flex w-full items-center justify-between rounded-md p-2 text-sm transition-colors">
        {item.title}
        <ChevronDown
          className={`h-4 w-4 shrink-0 transition-transform duration-400 ease-[cubic-bezier(0.87,0,0.13,1)] ${
            isOpen ? '' : 'rotate-180'
          }`}
        />
      </CollapsibleTrigger>
      <CollapsibleContent className="data-[state=closed]:animate-slide-up data-[state=open]:animate-slide-down overflow-hidden">
        <div className="mt-1 ml-4 space-y-1">
          {item.submenu.map((subItem) => (
            <Link
              key={subItem.url}
              href={subItem.url}
              className={cn(
                'hover:bg-sidebar-accent block rounded-md p-2 text-sm transition-colors',
                pathname === subItem.url && 'font-bold text-green-400',
              )}
              onClick={onNavigate}
            >
              {subItem.title}
            </Link>
          ))}
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}

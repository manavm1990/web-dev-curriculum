import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { AppSidebar } from './components/app-sidebar'
import { SidebarProvider, SidebarTrigger } from './components/ui/sidebar'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Southwestern Illinois College (SWIC) Web Development',
  description: 'SWIC CIS-177',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} p-8 antialiased`}>
        <SidebarProvider>
          <AppSidebar />
          <main>
            <SidebarTrigger />

            {children}
          </main>
        </SidebarProvider>
      </body>
    </html>
  )
}

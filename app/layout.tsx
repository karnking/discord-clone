import './globals.css'
import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'

import { ThemeProvider } from '@/components/providers/theme-provider'
import { ModalProvider } from '@/components/providers/modal-provider'

import { cn } from '@/lib/utils'
import { SocketProvider } from '@/components/providers/socket-provider'
import { QueryProvider } from '@/components/providers/query-provider'

const font = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Discord App',
  description: 'A Discord Clone thats supports instant messaging, attachment sharing, message editing, 1:1 calls, member management, unique invite links etc',
  metadataBase: new URL("https://discord-clone-1.up.railway.app")
  openGraph: {
    title: "Discord Clone",
    description: "A Discrod Clone built using Next.js",
    url: "https://discord-clone-1.up.railway.app",
    locale: "en-US",
    type: "website",
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={cn(
          font.className, "bg-white dark:bg-[#313338]"
        )}>
          <ThemeProvider attribute='class' defaultTheme='dark' enableSystem={false} storageKey='discord-theme' >
            <SocketProvider>
              <ModalProvider />
              <QueryProvider>
                {children} 
              </QueryProvider>
            </SocketProvider>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}

import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

import { AppProvider } from "@/context/page"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Lucas Garcia",
  description: "Lucas Garcia",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <AppProvider>
        <body className={inter.className}>{children}</body>
      </AppProvider>
    </html>
  )
}

'use client';
import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
    let darkMode = localStorage.getItem('darkMode');
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={inter.className}>
        {/*import navbar component*/}
        <Navbar darkmode={darkMode}/>
        {children}
      </body>
    </html>
  )
}

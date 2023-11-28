
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import SqlContextComponent from '@/Context/SqlContext'
import SkeletonLayout from '@/components/SkeletonLayout'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Atlan SQL Editor',
  description: 'Atlan SQL Editor is a powerful online SQL editor designed to streamline database management tasks. Create, edit, and execute SQL queries effortlessly. Experience intuitive query building, real-time visualization, and collaborative tools.',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <SqlContextComponent>
        <body className={inter.className} >
          <SkeletonLayout/>
          <Navbar/>
          {children}
        </body>
      </SqlContextComponent>
    </html>
  )
}

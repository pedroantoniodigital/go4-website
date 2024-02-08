import { Inter } from 'next/font/google'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Go4Digital',
  description: 'A Go4 Digital é uma empresa especializada no desenvolvimento de soluções digitais voltadas para a Gestão de Ativos e nasceu da união de experientes profissionais do segmento de gestão de frotas.',
  icons: '/static/images/logotipo-go4-bg-white.png'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href='/static/images/logotipo-go4-bg-white.png'/>
      </head>
      <body className={inter.className }>
        {children}
      </body>
    </html>
  )
}

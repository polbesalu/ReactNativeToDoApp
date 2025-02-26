import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ToDo App',
  description: 'Simple React Native ToDo App',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

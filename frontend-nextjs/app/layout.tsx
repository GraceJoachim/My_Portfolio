import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Grace Joachim - Data Scientist & Analyst Portfolio',
  description: 'Portfolio of Grace Joachim, Data Scientist specializing in SQL, analytics, data visualization, and turning data into insights.',
  authors: ['Grace Joachim'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <link rel="icon" href="https://cdn.pixelcave.com/favicon.svg" sizes="any" type="image/svg+xml" />
        <link rel="icon" href="https://cdn.pixelcave.com/favicon.png" type="image/png" />
      </head>
      <body className="antialiased bg-slate-50 text-slate-900 dark:bg-[#0d1023] dark:text-white">
        {children}
      </body>
    </html>
  )
}


import './globals.css'
import Header from '@/components/Header'

export const metadata = {
  title: 'WORA',
  description: 'portfolio worawiboon',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}

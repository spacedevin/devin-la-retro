import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  metadataBase: new URL('https://devin.la/'),
  title: 'Devin Smith - Official',
  description: 'Expert full stack Javascript, PHP, NoSQL, React, Next.js, iOS, Android, Web3, AI developer, mentor & leader. Passionate product manager UX/UI designer and creative lead.',
  openGraph: {
    title: 'Devin Smith - Official',
    description: 'Expert full stack Javascript, PHP, NoSQL, React, Next.js, iOS, Android, Web3, AI developer, mentor & leader. Passionate product manager UX/UI designer and creative lead.',
    url: 'https://devin.la',
    siteName: 'Devin Smith',
    // images: [
    //   {
    //     url: '/devin.png',
    //     width: 800,
    //     height: 600,
    //   },
    // ],
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

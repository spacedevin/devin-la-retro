import './globals.css'


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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>

      <body>{children}</body>
    </html>
  )
}

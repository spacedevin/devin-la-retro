import Image from 'next/image'
import Head from 'next/head'
import styles from './page.module.css'

export const metadata = {
  title: 'Devin Smith - Official',
  description: 'Expert full stack Javascript, PHP, NoSQL, React, Next.js, iOS, Android, Web3, AI developer, mentor & leader. Passionate product manager UX/UI designer and creative lead.',
  openGraph: {
    title: 'Devin Smith - Official',
    description: 'Expert full stack Javascript, PHP, NoSQL, React, Next.js, iOS, Android, Web3, AI developer, mentor & leader. Passionate product manager UX/UI designer and creative lead.',
    url: 'https://devin.la',
    siteName: 'Devin Smith',
    images: [
      {
        url: '/devin.png',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export default function Home() {
  return (
    <>
    <main className={styles.main}>
      <div>
        <h2>Welcome to the offical website of</h2>
        <h1>Devin Smith</h1>
        <Image src="/devin.png" width={238} height={243} alt="Devin Smith" />
        <p>
          Director of Technology Innovation & Founder @{" "}
          <a href="https://ae.studio" target="_blank">
            ae.studio
          </a>{" "}
          with over 25 years of experience in tech.
          <br />
          <br />
          Expert full stack Javascript, PHP, NoSQL, React, Next.js, iOS,
          Android, Web3, AI developer, mentor & leader. Passionate product
          manager, UI/UX designer and creative lead.
        </p>
        <h3>DOWNLOAD A RESUME</h3>
        <div className={styles.row}>
          <a href="/resume-devin-smith-2023-cto.pdf">CTO</a>
          <a href="/resume-devin-smith-2023-dev.pdf">Developer</a>
          <a href="/resume-devin-smith-2023-design.pdf">Designer</a>
        </div>
        <i>This website is UNDER CONSTRUCTION. Please come back soon.</i>

        <a className={styles.row} href="mailto:y2k@devin.la">
          <img src="/email.gif" alt="email" />
          <span>SEND ME AN EMAIL</span>
          <img src="/email.gif" alt="email" />
        </a>
        <div className={styles.row}>
          <a
            href="https://winworldpc.com/product/netscape-navigator/30x"
            target="_blank"
          >
            <img src="/netscape.gif" alt="netscape" />
          </a>
          <a
            href="https://winworldpc.com/product/internet-explorer/ie-30"
            target="_blank"
          >
            <img src="/ie.gif" alt="internet explorer" />
          </a>
        </div>
        <br />
        <img src="/notepad.gif" alt="notepad" />
        <br />
        <br />
        <img src="/counter.gif" alt="counter" />
      </div>
    </main>
    </>
  )
}

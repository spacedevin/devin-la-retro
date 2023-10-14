//import { mdToPdf } from 'md-to-pdf'
import { NextResponse } from 'next/server'
import { connectToDatabase } from '../../../lib/db'

import { resolve } from 'path'
//var markdownpdf = require('markdown-pdf')


const p = 'Devin Smith 🧑‍💻\n=============================\n\n📍 Los Angeles, CA\n📞 405.279.9645\n✉️ work@devin.la\n💼 https://linkedin.com/in/spacedevin\n\nSummary\n-------\nFull stack JavaScript, PHP, NoSQL, React, Next.js, iOS, Android, Web3, AI developer, mentor & leader with over 10 years of experience. Passionate agile product manager, UI/UX designer, and creative lead.\n\nExperience\n----------\n**AE Studio** | Director of Technology Innovation / Lead Architect\n2016 - present • Venice, CA\n- Applied agile methodology and frequent communication as a team leader and scrum master to exceed client expectations.\n- Implemented CI/CD processes using CircleCI, AWS, and GCP for rapid product delivery.\n- Pioneered Next.js and TainwindCSS to achieve an 85% monthly employee engagement rate through internal reward initiatives.\n- Directed the evolution of the company website with SSR, SEO, and code splitting built into Next.js and Vercel.\n- Migrated projects and teams from Docker, Heroku to Vercel, refactoring projects for microservices.\n- Designed UI/UX and built an app for a video on demand platform using React Native and React Native Web.\n- Built an app for users to create custom apparel and order them, incorporating a built-in social network using React Native.\n- Created medical billing platform with Peachy Patients to simplify payments and provide direct monthly payments on Next.\n\n**Crunchbutton** | CTO\n2012 - 2016 • Marina del Rey, CA\n- Spearheaded product design, wireframing, and roadmapping using PhotoShop, Illustrator, and Sketch.\n- Engineered a robust PHP and MySQL backend, incorporating geospatial queries using a LAMP stack.\n- Architected a DevOps strategy and migrated LAMP stack to scalable AWS RDS MariaDB.\n- Launched iOS and Android apps for customers and drivers built using PhoneGap, Cordova, Angular, Stripe, and REST APIs.\n- Led a dedicated team using Git and GitHub for collaboration.\n- Developed front-end assets including microsites and landing pages.\n- Constructed an admin system for real-time order tracking and back-office management.\n\n**Luma Pictures** | PHP Architect\n2009 - 2012 • Santa Monica, CA\n- Created a customizable suite of VFX internal project and resource management tools used by 100% of the company.\n- Ported existing internal tools to a single PHP MVC framework.\n- Built a real-time asset and resource scheduler using mootools with intuitive CSS animations.\n- Developed the company website and a tool to launch files on the internal network using Objective-C and Swift.\n- Created a payroll management and time tracking system with Administaff payroll integration.\n\nOther Accomplishments\n---------------------\n- Created a themeable weather app for Windows, Mac, Android, and iOS using .NET MAUI and Bootstrap.\n- Developed an AI-powered clothing line with Shopify, JamStack, GraphQL, Stable Diffusion, DALLE, and other LLMs.\n- Built a live video, voip, and text chat white label app used by enterprises using WebRTC, WebSockets, Ionic, and NodeJS.\n- Created a diet tracking app for Keto and ratio-based dieting with React Native and Apple Health integration.\n- Co-founded a marketplace and app for gig workers in the food and beverage industry using React Native.\n- Developed an infinite runner VR music game for iOS, Android, tvOS, and Steam using Unity.\n- Created a video game in Unity for multi-source gravity space battles similar to Worms.\n- Built a desktop app for sharing, delivering, commenting, and annotating video assets for the entertainment industry.\n- Developed an app for integrating with Phillips hue lights and providing custom lighting animations on iOS and Android.\n- Created a project management system with customizable views for different team members using PHP, jQuery, and MySQL.\n- Co-Founded a giving platform to easily give to nonprofits using QR codes (before QRs were popular).\n- Developed desktop software to monitor and alert when WoW servers go offline or online.\n- Created an open-source PHP package implementing setTimeout\'s asynchronous behavior in PHP.\n- Developed the fastest PHP micro framework of its time, Tipsy, and one of the fastest MVC PHP frameworks, Cana.\n- Created a multi-tier finance platform for the Archdiocese of Chicago from the ground up using Zend Framework and jQuery.\n- Built a slimmed-down eCommerce platform using PHP, MySQL, and Authorize.net.\n- Co-founded an MMORPG game company and helped write the game and backend authentication using C++, PHP, MySQL, XML, and SOAP.\n- Developed a design FTP/SFTP program in C# with a built-in editor and syntax highlighting.\n- Created a PHP open-source file manager with over 1000 downloads per month for over 10 years.\n- Founded a payment management system similar to PayPal to handle payments in unsupported countries.\n- Developed an ad and analytics platform for tracking advertising, clicks, revenue, and fees for an affiliate network.\n- Founded a company that made desktop software for MySpace automation using Visual Basic and C#.\n- Founded a domain registrar that operated for almost 10 years.\n- Developed microsites for PhotoShow Walgreens prints and PhotoShow DVDs for Flickr using PHP.\n- Built themes and templates in PHP Smarty for users\' slideshows on PhotoShow for SimpleStar.\n- Created a music community platform using PHP and Icecast for artists, fans, concert info, contact, and live radio.\n- Built a user-managed dynamic member directory system for the Silverlake Chamber of Commerce using PHP and MySQL.\n- Developed an SMS platform, MySMS, for group messaging without knowing recipients\' numbers using PHP and MySQL.\n- Created a modular and powerful open-source CMS comparable to Drupal or Wordpress using PHP, SCSS, MySQL, and vanilla JavaScript.\n- Collaborated with the Utah Sports Commision on creating a PHP-Actionscript remoting system for their Flash frontend.\n- Founded a web hosting company specializing in Linux, Apache, nginx, MySQL, PHP, DNS, and email.\n- Founded a freelance agency working globally using Flash, ActionScript, Coldfusion, HTML, and CSS.\n- Managed IT and customer support for a merchant processing datacenter, diagnosing network and mSQL transaction issues.\n- Created fan sites using HTML and CSS to sell merchandise, generating a significant revenue stream.\n\nEducation\n---------\n- Bachelor\'s degree in Computer Science\n- XYZ University, Full City, Earth\n\nSkills\n------\n- Full Stack Development\n- JavaScript, PHP, NoSQL\n- React, Next.js, iOS, Android\n- Web3, AI, UI/UX Design\n- Agile Methodology\n- Product Management\n\nReady'

const a = `
# md-to-pdf

A web service for converting markdown to PDF

## Web UI

For quick experimentation, you can use [the web version](https://md-to-pdf.fly.dev).
Just paste your markdown and download the converted PDF.

## API

You can convert markdown by sending a  request to 

    curl --data-urlencode 'markdown=# Heading 1' --output md-to-pdf.pdf https://md-to-pdf.fly.dev

Send data from files like this:

    curl --data-urlencode "markdown=$(cat example.md)"

## Deploy

A prebuilt container image is available at [Docker Hub](https://hub.docker.com/r/spawnia/md-to-pdf).
You can run it yourself like this:

    docker run -p 8000:8000 spawnia/md-to-pdf

## Built with

- [Rocket - a web framework for Rust](https://rocket.rs)
- [Pandoc - a universal document converter](https://pandoc.org)
- [Codemirror - a text editor for the browser](https://codemirror.net)

`

const resume = async () => {
  //const { db } = await connectToDatabase()

  const body = new FormData()
  body.set('markdown', a)
  body.set('engine', 'weasyprint')

  const b = new URLSearchParams(`markdown=${a}`)
  console.log((p + '').length)
  
  try {
    const response = await fetch('https://md-to-pdf.fly.dev', {
      body: b,
      method: 'post',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8', //
        'Content-Length': (b + '').length
      },
    })
    const data = await response.text()
    const headers = new Headers()

    headers.set('Content-Type', 'application/pdf')
    //headers.set('Content-Length', data.length)
    headers.set('Content-Disposition', 'attachment; filename=quote.pdf')
  
    return new NextResponse(data, { status: 200, statusText: 'OK', headers })

    return NextResponse.send('asd')
    res.send('asd')
    // await mdToPdf({
    //   content: p,
    // }, {
    //   stylesheet: ['./md.css'],
    //   highlight_style: null,
    //   css: 'body { color: red; !important }',
    //   pdf_options: {
    //     format: 'a4',
    //     margin: '0mm',
    //     printBackground: true,
    //   }
    // }, { dest: 'resume.pdf' })


    // var md = 'foo===\n* bar\n* baz\n\nLorem ipsum dolor sit'
    //   , outputPath = './resume2.pdf'

    // markdownpdf().from.string(p).to(outputPath, function () {
    //   console.log('Created', outputPath)
    //   return NextResponse.json({resume: 'done'})

    // })
    return res
  } catch (e) {
    console.log(e)
    return NextResponse.json({ error: e.message })
  }
}

export const GET = resume

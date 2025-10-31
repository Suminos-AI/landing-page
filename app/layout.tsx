import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import NavOnNonHome from './components/NavOnNonHome'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { baseUrl } from './sitemap'
import { PostHogProvider } from './components/PostHogProvider'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Suminos - Your AI-Powered Job Hunting Companion',
    template: '%s | Suminos',
  },
  description: 'Refine your resume, discover opportunities, apply smarter, and prepare with confidence. The complete AI-powered job hunting platform.',
  icons: {
    icon: [
      { url: '/images/icon.ico', sizes: 'any' },
      { url: '/images/icon-120.png', sizes: '120x120', type: 'image/png' },
    ],
    apple: [
      { url: '/images/icon-120.png', sizes: '120x120', type: 'image/png' },
    ],
  },
  openGraph: {
    title: 'Suminos - Your AI-Powered Job Hunting Companion',
    description: 'Refine your resume, discover opportunities, apply smarter, and prepare with confidence. The complete AI-powered job hunting platform.',
    url: baseUrl,
    siteName: 'Suminos',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx(
        'text-black bg-white dark:text-white dark:bg-black',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="antialiased">
        <PostHogProvider>
          <main className="min-h-screen">
            <NavOnNonHome />
            {children}
            <Footer />
            <Analytics />
            <SpeedInsights />
          </main>
        </PostHogProvider>
      </body>
    </html>
  )
}
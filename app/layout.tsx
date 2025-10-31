import './global.css'
import type { Metadata } from 'next'
import { Inter, Roboto_Mono } from 'next/font/google'
import { LandingHeader } from './components/LandingHeader'
import { DEFAULT_FONT } from './font-config'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const robotoMono = Roboto_Mono({ subsets: ['latin'], variable: '--font-roboto-mono' })

// Determine which font to use as default based on config
const defaultFont = DEFAULT_FONT === 'roboto-mono' ? robotoMono : inter
const defaultFontVariable = DEFAULT_FONT === 'roboto-mono' ? '--font-roboto-mono' : '--font-inter'
const defaultFontFamily = DEFAULT_FONT === 'roboto-mono' ? "'Roboto Mono', monospace" : "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
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
        'text-black dark:text-white dark:bg-black',
        inter.variable,
        robotoMono.variable
      )}
      style={{ backgroundColor: '#FBFAFB' }}
    >
      <body className="antialiased" style={{ fontFamily: `var(${defaultFontVariable}), ${defaultFontFamily}`, backgroundColor: '#FBFAFB' }}>
        <PostHogProvider>
          <main className="min-h-screen" style={{ backgroundColor: '#FBFAFB' }}>
            <LandingHeader />
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
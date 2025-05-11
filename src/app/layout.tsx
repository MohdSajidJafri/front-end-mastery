import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import CustomCursor from '../components/CustomCursor'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk', weight: ['400', '500', '700'] })

export const metadata: Metadata = {
  title: 'Obsidian UI',
  description: 'A mind-blowing, premium UI/UX experience',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${spaceGrotesk.variable}`}> 
      <body className="font-sans antialiased bg-background text-primary"> 
        <div className="min-h-screen w-full relative overflow-x-hidden bg-background"> 
          {/* Subtle noise overlay for depth */}
          <div className="pointer-events-none fixed inset-0 z-10 opacity-10 mix-blend-overlay" style={{backgroundImage: 'url(https://www.transparenttextures.com/patterns/noise.png)'}} />
          <CustomCursor />
          <div className="relative z-30">{children}</div>
        </div>
      </body>
    </html>
  )
} 
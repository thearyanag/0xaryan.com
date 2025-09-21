import type { Metadata } from "next"
import { Geist_Mono } from "next/font/google"
import "./globals.css"
import { Navbar } from "../components/navbar"

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.0xaryan.com"),
  title: {
    default: "0xaryan",
    template: "%s | 0xaryan",
  },
  description: "reducing information arbitrage",
  openGraph: {
    title: "0xaryan",
    description: "reducing information arbitrage",
    url: "https://www.0xaryan.com",
    siteName: "0xaryan",
    locale: "en_US",
    type: "website",
    images: ["https://www.0xaryan.com/og/home"],
  },
  robots: {
    index: true,
    follow: true,
    "max-video-preview": -1,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  twitter: {
    title: "0xaryan",
    card: "summary_large_image",
    creator: "@_0xaryan",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${geistMono.variable} antialiased min-h-screen font-mono`}
      >
        <div className="max-w-4xl mx-auto px-4 py-8">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  )
}

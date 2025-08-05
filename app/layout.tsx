import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Shopping with Chiedzamarv - Premium Cosmetics & Gourmet Cereals",
  description:
    "Your trusted source for premium cosmetics and gourmet cereals in Zimbabwe. Delivery available in Harare and Chinhoyi, with pickup at Steve's Mall.",
  keywords: "cosmetics, cereals, Zimbabwe, Harare, Chinhoyi, beauty products, breakfast cereals, shopping, delivery",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

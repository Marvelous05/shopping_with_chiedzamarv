"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"
import { Menu, ShoppingCart, Search, Phone, MessageCircle } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const cartItemCount = 0 // This would come from your cart state

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Cosmetics", href: "/products?category=cosmetics" },
    { name: "Cereals", href: "/products?category=cereals" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/black.png?height=40&width=40"
              alt="Shopping with Chiedzamarv"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div className="hidden sm:block">
              <span className="text-lg font-bold text-gray-900">Shopping with</span>
              <span className="text-lg font-bold text-pink-600 ml-1">Chiedzamarv</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-700 hover:text-pink-600 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-2">
            {/* Search Button */}
            <Button variant="ghost" size="icon" className="hidden sm:flex">
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>

            {/* Contact Buttons */}
            <Button variant="ghost" size="icon" asChild className="hidden sm:flex">
              <Link href="tel:+263785456313">
                <Phone className="h-5 w-5" />
                <span className="sr-only">Call us</span>
              </Link>
            </Button>

            <Button variant="ghost" size="icon" asChild>
              <Link href="https://wa.me/263785456313">
                <MessageCircle className="h-5 w-5 text-green-600" />
                <span className="sr-only">WhatsApp</span>
              </Link>
            </Button>

            {/* Cart */}
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {cartItemCount > 0 && (
                <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                  {cartItemCount}
                </Badge>
              )}
              <span className="sr-only">Shopping cart</span>
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col space-y-4 mt-8">
                  <Link href="/" className="flex items-center space-x-2 mb-6">
                    <Image
                      src="/placeholder.svg?height=32&width=32"
                      alt="Shopping with Chiedzamarv"
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                    <div>
                      <span className="text-sm font-bold text-gray-900">Shopping with</span>
                      <span className="text-sm font-bold text-pink-600 ml-1">Chiedzamarv</span>
                    </div>
                  </Link>

                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-lg font-medium text-gray-700 hover:text-pink-600 transition-colors py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}

                  <div className="pt-6 border-t">
                    <div className="space-y-3">
                      <Button asChild className="w-full">
                        <Link href="https://wa.me/263785456313">
                          <MessageCircle className="h-4 w-4 mr-2" />
                          WhatsApp Catalog
                        </Link>
                      </Button>
                      <Button variant="outline" asChild className="w-full bg-transparent">
                        <Link href="tel:+263785456313">
                          <Phone className="h-4 w-4 mr-2" />
                          Call Us
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}

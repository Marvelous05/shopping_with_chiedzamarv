import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { MapPin, Phone, MessageCircle, Mail, Clock, Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/placeholder.svg?height=40&width=40"
                alt="Shopping with Chiedzamarv"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <span className="text-lg font-bold">Shopping with</span>
                <span className="text-lg font-bold text-pink-400 ml-1">Chiedzamarv</span>
              </div>
            </Link>
            <p className="text-gray-300 text-sm">
              Your trusted source for premium cosmetics and gourmet cereals in Zimbabwe. Quality products delivered with
              care.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-300 hover:text-white transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/products?category=cosmetics" className="text-gray-300 hover:text-white transition-colors">
                  Cosmetics
                </Link>
              </li>
              <li>
                <Link href="/products?category=cereals" className="text-gray-300 hover:text-white transition-colors">
                  Cereals
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-pink-400" />
                <Link href="tel:+263785456313" className="text-gray-300 hover:text-white transition-colors">
                  +263 78 545 6313
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4 text-green-400" />
                <Link href="https://wa.me/263785456313" className="text-gray-300 hover:text-white transition-colors">
                  WhatsApp
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">info@shoppingwithchiedzamarv.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-red-400 mt-0.5" />
                <div className="text-gray-300">
                  <p>Steve's Mall</p>
                  <p className="text-sm">Cnr Albion & Cameron</p>
                  <p className="text-sm">Shop A7, Ground Floor</p>
                  <p className="text-sm">Harare, Zimbabwe</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-300 text-sm mb-4">Subscribe to get updates on new products and special offers.</p>
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
              />
              <Button className="w-full bg-pink-600 hover:bg-pink-700">Subscribe</Button>
            </div>

            <div className="mt-6">
              <h4 className="font-medium mb-2">Store Hours</h4>
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <Clock className="h-4 w-4" />
                <span>Mon-Sat: 9:00 AM - 6:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-gray-700" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-gray-300">
            <p>&copy; 2024 Shopping with Chiedzamarv. All rights reserved.</p>
          </div>

          <div className="flex flex-wrap gap-6 text-sm">
            <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-300 hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/shipping" className="text-gray-300 hover:text-white transition-colors">
              Shipping Policy
            </Link>
            <Link href="/returns" className="text-gray-300 hover:text-white transition-colors">
              Returns & Exchanges
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

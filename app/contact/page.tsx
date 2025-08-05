import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, MessageCircle, Mail, Clock, Truck } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get in touch with Shopping with Chiedzamarv for orders, inquiries, or support. We're here to help you find
            the perfect products!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-pink-600" />
                  Get in Touch
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <MessageCircle className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="font-medium">WhatsApp</p>
                    <Link href="https://wa.me/263785456313" className="text-green-600 hover:underline">
                      +263 78 545 6313
                    </Link>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <Link href="tel:+263785456313" className="text-blue-600 hover:underline">
                      +263 78 545 6313
                    </Link>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-purple-600" />
                  <div>
                    <p className="font-medium">Email</p>
                    <Link href="mailto:info@shoppingwithchiedzamarv.com" className="text-purple-600 hover:underline">
                      info@shoppingwithchiedzamarv.com
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-green-600" />
                  Pickup Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="font-medium">Steve's Mall</p>
                  <p className="text-gray-600">
                    Corner Albion and Cameron Street
                    <br />
                    Shop A7, Ground Floor
                    <br />
                    Harare, Zimbabwe
                  </p>

                  <div className="flex items-center gap-2 mt-4">
                    <Clock className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-600">Monday - Saturday: 9:00 AM - 6:00 PM</span>
                  </div>
                </div>

                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Steve's Mall Location"
                    width={400}
                    height={200}
                    className="w-full h-32 object-cover rounded-lg"
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Truck className="h-5 w-5 text-orange-600" />
                  Delivery Areas
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium text-pink-600 mb-2">Harare Delivery</h4>
                  <p className="text-sm text-gray-600">
                    Same-day delivery available for orders placed before 2:00 PM. Delivery fee applies based on
                    location.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-orange-600 mb-2">Chinhoyi Delivery</h4>
                  <p className="text-sm text-gray-600">
                    Scheduled delivery days throughout the week. Contact us for specific delivery schedules and timing.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
                <p className="text-gray-600">
                  Have a question about our products or need assistance? Fill out the form below and we'll get back to
                  you soon.
                </p>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                        First Name
                      </label>
                      <Input id="firstName" placeholder="Your first name" />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                        Last Name
                      </label>
                      <Input id="lastName" placeholder="Your last name" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <Input id="email" type="email" placeholder="your.email@example.com" />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <Input id="phone" type="tel" placeholder="+263 XX XXX XXXX" />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <Input id="subject" placeholder="What's this about?" />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea id="message" placeholder="Tell us how we can help you..." rows={5} />
                  </div>

                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button variant="outline" asChild className="h-auto p-4 bg-transparent">
                <Link href="https://wa.me/263785456313" className="flex flex-col items-center gap-2">
                  <MessageCircle className="h-6 w-6 text-green-600" />
                  <span className="font-medium">WhatsApp Catalog</span>
                  <span className="text-xs text-gray-500">Browse our full product range</span>
                </Link>
              </Button>

              <Button variant="outline" asChild className="h-auto p-4 bg-transparent">
                <Link href="/products" className="flex flex-col items-center gap-2">
                  <MapPin className="h-6 w-6 text-pink-600" />
                  <span className="font-medium">View Products</span>
                  <span className="text-xs text-gray-500">Browse online catalog</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How do I place an order?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  You can place orders through our WhatsApp catalog, call us directly, or visit our pickup location at
                  Steve's Mall. We'll help you find the perfect products and arrange delivery or pickup.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What are your delivery charges?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Delivery charges vary based on location within Harare and Chinhoyi. Contact us with your address for
                  specific delivery pricing. Pickup at our Steve's Mall location is always free.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Do you offer same-day delivery?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Yes! Same-day delivery is available in Harare for orders placed before 2:00 PM. For Chinhoyi
                  deliveries, we have scheduled delivery days throughout the week.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Can I return or exchange products?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We want you to be completely satisfied with your purchase. Contact us within 7 days of purchase for
                  returns or exchanges. Products must be unopened and in original condition.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

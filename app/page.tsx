import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Truck, Star, Phone, MessageCircle } from "lucide-react"

export default function HomePage() {
  const featuredProducts = [
    {
      id: 1,
      name: "Premium Foundation Set",
      brand: "Shopping with Chiedzamarv",
      price: 45.0,
      image: "/placeholder.svg?height=300&width=300",
      category: "cosmetics",
      rating: 4.8,
      reviews: 124,
    },
    {
      id: 2,
      name: "Chocolate Crunch Cereal",
      brand: "Gourmet Crunch",
      price: 8.5,
      image: "/placeholder.svg?height=300&width=300",
      category: "cereals",
      rating: 4.9,
      reviews: 89,
    },
    {
      id: 3,
      name: "Luxury Lipstick Collection",
      brand: "Shopping with Chiedzamarv",
      price: 32.0,
      image: "/placeholder.svg?height=300&width=300",
      category: "cosmetics",
      rating: 4.7,
      reviews: 156,
    },
    {
      id: 4,
      name: "Honey Oat Crunch",
      brand: "Gourmet Crunch",
      price: 9.25,
      image: "/placeholder.svg?height=300&width=300",
      category: "cereals",
      rating: 4.6,
      reviews: 73,
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-pink-50 to-orange-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Shopping with <span className="text-pink-600">Chiedzamarv</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Your one-stop shop for premium cosmetics and gourmet cereals. Quality products delivered to your
                doorstep in Harare and Chinhoyi.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" asChild>
                  <Link href="/products">Shop Now</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>

              {/* Delivery Options */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Truck className="h-5 w-5 text-pink-600" />
                  <span>Harare Delivery</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Truck className="h-5 w-5 text-pink-600" />
                  <span>Chinhoyi Delivery</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <MapPin className="h-5 w-5 text-pink-600" />
                  <span>Pickup Available</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=500"
                alt="Featured Products"
                width={500}
                height={500}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Product Categories</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="group hover:shadow-lg transition-shadow cursor-pointer">
              <Link href="/products?category=cosmetics">
                <CardHeader>
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Cosmetics"
                    width={400}
                    height={200}
                    className="rounded-lg mb-4 group-hover:scale-105 transition-transform"
                  />
                  <CardTitle className="text-2xl">Shopping with Chiedzamarv</CardTitle>
                  <CardDescription>Premium cosmetics and beauty products</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Discover our extensive range of high-quality cosmetics including foundations, lipsticks, eyeshadows,
                    and skincare products.
                  </p>
                  <Button
                    variant="outline"
                    className="group-hover:bg-pink-600 group-hover:text-white transition-colors bg-transparent"
                  >
                    Shop Cosmetics
                  </Button>
                </CardContent>
              </Link>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow cursor-pointer">
              <Link href="/products?category=cereals">
                <CardHeader>
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Cereals"
                    width={400}
                    height={200}
                    className="rounded-lg mb-4 group-hover:scale-105 transition-transform"
                  />
                  <CardTitle className="text-2xl">Gourmet Crunch</CardTitle>
                  <CardDescription>Premium breakfast cereals and snacks</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Start your day right with our selection of nutritious and delicious cereals, from classic favorites
                    to gourmet blends.
                  </p>
                  <Button
                    variant="outline"
                    className="group-hover:bg-orange-600 group-hover:text-white transition-colors bg-transparent"
                  >
                    Shop Cereals
                  </Button>
                </CardContent>
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-lg transition-shadow">
                <Link href={`/products/${product.id}`}>
                  <CardHeader className="p-0">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={300}
                      height={300}
                      className="w-full h-48 object-cover rounded-t-lg group-hover:scale-105 transition-transform"
                    />
                  </CardHeader>
                  <CardContent className="p-4">
                    <Badge variant="secondary" className="mb-2">
                      {product.brand}
                    </Badge>
                    <h3 className="font-semibold mb-2 group-hover:text-pink-600 transition-colors">{product.name}</h3>
                    <div className="flex items-center gap-1 mb-2">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm text-gray-600">
                        {product.rating} ({product.reviews} reviews)
                      </span>
                    </div>
                    <p className="text-lg font-bold text-pink-600">${product.price.toFixed(2)}</p>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button size="lg" asChild>
              <Link href="/products">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Delivery Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Delivery & Pickup Options</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Truck className="h-12 w-12 text-pink-600 mx-auto mb-4" />
                <CardTitle>Harare Delivery</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Fast and reliable delivery throughout Harare. Same-day delivery available for orders placed before 2
                  PM.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Truck className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <CardTitle>Chinhoyi Delivery</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We deliver to Chinhoyi with scheduled delivery days. Contact us for delivery schedules and timing.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <MapPin className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle>Pickup Location</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">
                  <strong>Steve's Mall</strong>
                  <br />
                  Cnr Albion and Cameron
                  <br />
                  Shop A7 Ground Floor
                  <br />
                  Harare
                </p>
                <p className="text-sm text-gray-500">Mon-Sat: 9AM-6PM</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-pink-600 to-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Shop?</h2>
          <p className="text-xl mb-8 opacity-90">
            Contact us for personalized recommendations or browse our full catalog
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="https://wa.me/263785456313" className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5" />
                WhatsApp Catalog
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-pink-600"
              asChild
            >
              <Link href="tel:+263785456313" className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Call Us
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

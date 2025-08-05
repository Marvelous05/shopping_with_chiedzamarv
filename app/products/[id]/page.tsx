"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star, ShoppingCart, Heart, Share2, ArrowLeft, Truck, MapPin, MessageCircle } from "lucide-react"

// This would typically come from a database or API
const products = [
  {
    id: 1,
    name: "Premium Foundation Set",
    brand: "Shopping with Chiedzamarv",
    price: 45.0,
    images: [
      "/placeholder.svg?height=500&width=500",
      "/placeholder.svg?height=500&width=500",
      "/placeholder.svg?height=500&width=500",
    ],
    category: "cosmetics",
    rating: 4.8,
    reviews: 124,
    description:
      "Our premium foundation set offers full coverage with a natural finish. Perfect for all skin types and available in multiple shades to match your unique skin tone.",
    features: [
      "Full coverage formula",
      "Available in 12 shades",
      "Long-lasting wear (up to 16 hours)",
      "SPF 30 protection",
      "Suitable for all skin types",
      "Cruelty-free and paraben-free",
    ],
    ingredients:
      "Water, Cyclopentasiloxane, Titanium Dioxide, Dimethicone, Glycerin, Phenyl Trimethicone, PEG-10 Dimethicone, Sodium Chloride, Disteardimonium Hectorite, Phenoxyethanol, Tocopheryl Acetate",
    inStock: true,
    stockCount: 15,
  },
  {
    id: 7,
    name: "Chocolate Crunch Cereal",
    brand: "Gourmet Crunch",
    price: 8.5,
    images: [
      "/placeholder.svg?height=500&width=500",
      "/placeholder.svg?height=500&width=500",
      "/placeholder.svg?height=500&width=500",
    ],
    category: "cereals",
    rating: 4.9,
    reviews: 89,
    description:
      "Start your day with our rich chocolate flavored crunchy cereal. Made with real cocoa and fortified with essential vitamins and minerals for a nutritious breakfast.",
    features: [
      "Made with real cocoa",
      "Fortified with 12 vitamins and minerals",
      "Whole grain goodness",
      "No artificial colors",
      "High in fiber",
      "Family size 500g box",
    ],
    ingredients:
      "Whole grain wheat, sugar, cocoa powder, salt, natural chocolate flavor, vitamins and minerals (iron, vitamin D, thiamin, riboflavin, niacin, vitamin B6, folic acid, vitamin B12)",
    inStock: true,
    stockCount: 32,
  },
]

export default function ProductPage() {
  const params = useParams()
  const productId = Number.parseInt(params.id as string)
  const product = products.find((p) => p.id === productId)

  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <Button asChild>
            <Link href="/products">Back to Products</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-6 text-sm text-gray-600">
          <Link href="/" className="hover:text-pink-600">
            Home
          </Link>
          <span>/</span>
          <Link href="/products" className="hover:text-pink-600">
            Products
          </Link>
          <span>/</span>
          <span className="text-gray-900">{product.name}</span>
        </div>

        <Button variant="outline" className="mb-6 bg-transparent" asChild>
          <Link href="/products">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Products
          </Link>
        </Button>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div>
            <div className="mb-4">
              <Image
                src={product.images[selectedImage] || "/placeholder.svg"}
                alt={product.name}
                width={500}
                height={500}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="grid grid-cols-3 gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`border-2 rounded-lg overflow-hidden ${
                    selectedImage === index ? "border-pink-600" : "border-gray-200"
                  }`}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} view ${index + 1}`}
                    width={150}
                    height={150}
                    className="w-full h-24 object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div>
            <Badge
              variant="secondary"
              className={`mb-4 ${product.category === "cosmetics" ? "bg-pink-100 text-pink-800" : "bg-orange-100 text-orange-800"}`}
            >
              {product.brand}
            </Badge>

            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>

            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
                <span className="ml-2 text-gray-600">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>
            </div>

            <p className="text-3xl font-bold text-pink-600 mb-6">${product.price.toFixed(2)}</p>

            <p className="text-gray-700 mb-6 leading-relaxed">{product.description}</p>

            {/* Stock Status */}
            <div className="mb-6">
              {product.inStock ? (
                <div className="flex items-center gap-2 text-green-600">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span>In Stock ({product.stockCount} available)</span>
                </div>
              ) : (
                <div className="flex items-center gap-2 text-red-600">
                  <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  <span>Out of Stock</span>
                </div>
              )}
            </div>

            {/* Quantity and Add to Cart */}
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center border rounded-lg">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-3 py-2 hover:bg-gray-100">
                  -
                </button>
                <span className="px-4 py-2 border-x">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="px-3 py-2 hover:bg-gray-100">
                  +
                </button>
              </div>

              <Button size="lg" className="flex-1" disabled={!product.inStock}>
                <ShoppingCart className="h-5 w-5 mr-2" />
                Add to Cart
              </Button>

              <Button variant="outline" size="lg">
                <Heart className="h-5 w-5" />
              </Button>

              <Button variant="outline" size="lg">
                <Share2 className="h-5 w-5" />
              </Button>
            </div>

            {/* Delivery Options */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-lg">Delivery & Pickup Options</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3">
                  <Truck className="h-5 w-5 text-pink-600" />
                  <div>
                    <p className="font-medium">Harare Delivery</p>
                    <p className="text-sm text-gray-600">Same-day delivery available</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Truck className="h-5 w-5 text-orange-600" />
                  <div>
                    <p className="font-medium">Chinhoyi Delivery</p>
                    <p className="text-sm text-gray-600">Scheduled delivery days</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="font-medium">Pickup at Steve's Mall</p>
                    <p className="text-sm text-gray-600">Cnr Albion and Cameron, Shop A7</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact for Orders */}
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <p className="mb-4 text-gray-600">Ready to order? Contact us directly:</p>
                  <Button asChild className="w-full">
                    <Link href="https://wa.me/263785456313" className="flex items-center gap-2">
                      <MessageCircle className="h-5 w-5" />
                      Order via WhatsApp
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <Tabs defaultValue="features" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="ingredients">Ingredients</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>

            <TabsContent value="features" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Product Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="ingredients" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Ingredients</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="leading-relaxed">{product.ingredients}</p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="reviews" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Customer Reviews</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8 text-gray-500">
                    <p>Reviews coming soon!</p>
                    <p className="text-sm mt-2">Be the first to review this product.</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Star, Search, Filter } from "lucide-react"

const products = [
  // Cosmetics
  {
    id: 1,
    name: "Premium Foundation Set",
    brand: "Shopping with Chiedzamarv",
    price: 45.0,
    image: "/placeholder.svg?height=300&width=300",
    category: "cosmetics",
    rating: 4.8,
    reviews: 124,
    description: "Full coverage foundation set with multiple shades",
  },
  {
    id: 2,
    name: "Luxury Lipstick Collection",
    brand: "Shopping with Chiedzamarv",
    price: 32.0,
    image: "/placeholder.svg?height=300&width=300",
    category: "cosmetics",
    rating: 4.7,
    reviews: 156,
    description: "Premium lipstick collection in various shades",
  },
  {
    id: 3,
    name: "Eye Shadow Palette",
    brand: "Shopping with Chiedzamarv",
    price: 28.5,
    image: "/placeholder.svg?height=300&width=300",
    category: "cosmetics",
    rating: 4.6,
    reviews: 98,
    description: "Professional eyeshadow palette with 12 colors",
  },
  {
    id: 4,
    name: "Skincare Essentials Kit",
    brand: "Shopping with Chiedzamarv",
    price: 65.0,
    image: "/placeholder.svg?height=300&width=300",
    category: "cosmetics",
    rating: 4.9,
    reviews: 203,
    description: "Complete skincare routine in one kit",
  },
  {
    id: 5,
    name: "Mascara & Eyeliner Set",
    brand: "Shopping with Chiedzamarv",
    price: 22.0,
    image: "/placeholder.svg?height=300&width=300",
    category: "cosmetics",
    rating: 4.5,
    reviews: 87,
    description: "Waterproof mascara and precision eyeliner",
  },
  {
    id: 6,
    name: "Blush & Highlighter Duo",
    brand: "Shopping with Chiedzamarv",
    price: 35.0,
    image: "/placeholder.svg?height=300&width=300",
    category: "cosmetics",
    rating: 4.7,
    reviews: 142,
    description: "Perfect blush and highlighter combination",
  },

  // Cereals
  {
    id: 7,
    name: "Chocolate Crunch Cereal",
    brand: "Gourmet Crunch",
    price: 8.5,
    image: "/placeholder.svg?height=300&width=300",
    category: "cereals",
    rating: 4.9,
    reviews: 89,
    description: "Rich chocolate flavored crunchy cereal",
  },
  {
    id: 8,
    name: "Honey Oat Crunch",
    brand: "Gourmet Crunch",
    price: 9.25,
    image: "/placeholder.svg?height=300&width=300",
    category: "cereals",
    rating: 4.6,
    reviews: 73,
    description: "Natural honey and oat breakfast cereal",
  },
  {
    id: 9,
    name: "Berry Blast Cereal",
    brand: "Gourmet Crunch",
    price: 9.75,
    image: "/placeholder.svg?height=300&width=300",
    category: "cereals",
    rating: 4.8,
    reviews: 156,
    description: "Mixed berry flavored cereal with real fruit pieces",
  },
  {
    id: 10,
    name: "Protein Power Crunch",
    brand: "Gourmet Crunch",
    price: 12.5,
    image: "/placeholder.svg?height=300&width=300",
    category: "cereals",
    rating: 4.7,
    reviews: 94,
    description: "High-protein cereal for active lifestyles",
  },
  {
    id: 11,
    name: "Vanilla Almond Crunch",
    brand: "Gourmet Crunch",
    price: 10.25,
    image: "/placeholder.svg?height=300&width=300",
    category: "cereals",
    rating: 4.5,
    reviews: 67,
    description: "Premium vanilla and almond flavored cereal",
  },
  {
    id: 12,
    name: "Cinnamon Swirl Cereal",
    brand: "Gourmet Crunch",
    price: 8.75,
    image: "/placeholder.svg?height=300&width=300",
    category: "cereals",
    rating: 4.6,
    reviews: 112,
    description: "Sweet cinnamon swirl breakfast cereal",
  },
]

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [sortBy, setSortBy] = useState("name")

  const filteredAndSortedProducts = useMemo(() => {
    const filtered = products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = categoryFilter === "all" || product.category === categoryFilter
      return matchesSearch && matchesCategory
    })

    return filtered.sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price
        case "price-high":
          return b.price - a.price
        case "rating":
          return b.rating - a.rating
        case "name":
        default:
          return a.name.localeCompare(b.name)
      }
    })
  }, [searchTerm, categoryFilter, sortBy])

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Our Products</h1>
          <p className="text-gray-600">Discover our complete range of premium cosmetics and gourmet cereals</p>
        </div>

        {/* Filters */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger>
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="cosmetics">Cosmetics</SelectItem>
                <SelectItem value="cereals">Cereals</SelectItem>
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">Name A-Z</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredAndSortedProducts.map((product) => (
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
                  <Badge
                    variant="secondary"
                    className={`mb-2 ${product.category === "cosmetics" ? "bg-pink-100 text-pink-800" : "bg-orange-100 text-orange-800"}`}
                  >
                    {product.brand}
                  </Badge>
                  <h3 className="font-semibold mb-2 group-hover:text-pink-600 transition-colors">{product.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{product.description}</p>
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

        {filteredAndSortedProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  )
}

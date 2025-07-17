"use client"
import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Star, Eye, Heart, ChevronLeft, ChevronRight, Minus, Plus } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"
import { AddToCartButton, AddToCartFilledButton } from "@/components/AddToCartButton"
import axios from "axios"
import { useCart } from "@/context/CartContext"
import { Button } from "./ui/button"
import { DropdownMenuSeparator } from "./ui/dropdown-menu"
import FallbackImage from "./FallbackImage"

interface Product {
  id: string
  name: string
  basePrice: number
  description?: string
  gender?: string
  brandName?: string
  rating?: number
  reviewCount?: number
  images: { imageUrl: string; color?: string }[]
  variants: {
    color: string
    size: string
    stock: number
    priceOverride: string
  }[]
}

function CarouselItems() {
  const [open, setOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedColor, setSelectedColor] = useState<string | null>(null)
  const [selectedSize, setSelectedSize] = useState<string | null>(null)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const { incrementQuantity, decrementQuantity, cart } = useCart()
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("/api/products")
        setProducts(res.data.products || [])
      } catch (error) {
        console.error("Error fetching products:", error)
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])

  console.log("products", products)

  const handleOpenDialog = (product: Product) => {
    const defaultColor = product.variants?.[0]?.color || null
    const defaultImage =
      product.images?.find((img: any) => img.color === defaultColor)?.imageUrl ||
      product.images?.[0]?.imageUrl ||
      "/placeholder.svg"
    setSelectedProduct(product)
    setSelectedColor(defaultColor)
    setSelectedImage(defaultImage)
    setOpen(true)
  }

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex + 4 >= products.length) {
        return 0
      }
      return prevIndex + 1
    })
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex <= 0) {
        return Math.max(0, products.length - 4)
      }
      return prevIndex - 1
    })
  }

  // Calculate visible products based on screen size
  // On mobile: show all products, on desktop: show carousel slice
  const getVisibleProducts = () => {
    // For desktop (md and up), use carousel logic
    const desktopProducts = products.slice(currentIndex, currentIndex + 4)
    if (desktopProducts.length < 4 && products.length > 4) {
      const neededProducts = 4 - desktopProducts.length
      const wrappedProducts = products.slice(0, neededProducts)
      desktopProducts.push(...wrappedProducts)
    }
    return desktopProducts
  }

  const desktopVisibleProducts = getVisibleProducts()

  // Function to handle increment for a product by ID
  const handleIncrement = (productId: string) => {
    incrementQuantity(productId)
  }

  // Function to handle decrement for a product by ID
  const handleDecrement = (productId: string) => {
    decrementQuantity(productId)
  }

  const formatPrice = (price: number) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(price)

  const ProductCard = ({ product }: { product: Product }) => (
    <div className="bg-white rounded-md shadow-sm flex flex-col p-2 items-center border hover:border-gray-500 transition duration-300">
      <div className="w-full h-50 relative group mb-4 cursor-pointer">
        <Link href={`/product/${product.id}`}>
          <FallbackImage
            src={product.images?.[0]?.imageUrl || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-contain"
          />
        </Link>
        <div className="absolute opacity-0 top-2 right-0 translate-x-10 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
          <button onClick={() => handleOpenDialog(product)}>
            <Eye className="h-7 w-7 p-1" />
          </button>
          <Heart className="h-7 w-7 p-1" />
        </div>
      </div>
      <h3 className="text-gray-700 text-center mb-2">{product.name}</h3>
      <p className="font-medium text-gray-900 mb-2">{formatPrice(product.basePrice)}</p>
      <div className="items-end mt-auto" >
        {cart.find((item: { id: string | number }) => item.id === product.id) ? (
          <div className="flex items-center justify-around gap-2 w-full">
            <button onClick={() => handleDecrement(product.id)} className="p-1 border rounded-md hover:bg-gray-100">
              <Minus className="h-3 w-3" />
            </button>
            <span className="w-6 text-center">
              {cart.find((item: { id: string | number }) => item.id === product.id)?.quantity}
            </span>
            <button onClick={() => handleIncrement(product.id)} className="p-1 border rounded-md hover:bg-gray-100">
              <Plus className="h-3 w-3" />
            </button>
          </div>
        ) : (
          <AddToCartButton product={product} />
        )}
      </div>
    </div>
  )

  if (loading) {
    return <div className="text-center py-8">Loading products...</div>
  }

  return (
    <div className="w-full mx-auto py-8 relative">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-medium text-gray-800">Deals Of The Day</h2>
        <Link href="/" className="text-sm text-black hover:text-pink-500">
          More Products
        </Link>
      </div>

      {/* Navigation arrows - Hidden on mobile, visible on desktop */}
      <div className="hidden md:block absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-8 z-10">
        <button
          onClick={prevSlide}
          className="bg-gray-100 hover:bg-gray-200 p-2 rounded-full shadow-md"
          aria-label="Previous products"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
      </div>
      <div className="hidden md:block absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-8 z-10">
        <button
          onClick={nextSlide}
          className="bg-gray-100 hover:bg-gray-200 p-2 rounded-full shadow-md"
          aria-label="Next products"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Mobile view: Show all products in 2-column grid */}
      <div className="block md:hidden">
        <div className="grid grid-cols-2 gap-2">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      {/* Desktop view: Show carousel with 4 products */}
      <div className="hidden md:block">
        <div className="grid grid-cols-4 gap-6">
          {desktopVisibleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[700px] sm:max-h-[800px] text-pink-600">
          {selectedProduct && (
            <>
              <DialogHeader />
              <VisuallyHidden>
                <DialogTitle>{selectedProduct.name}</DialogTitle>
              </VisuallyHidden>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-4 px-4">
                <div>
                  <div className="relative h-100 self-center w-full">
                    <Link href={`/product/${selectedProduct.id}`}>
                      <Image
                        src={selectedImage || "/placeholder.svg"}
                        alt={selectedProduct.name}
                        height={400}
                        width={400}
                        className="object-contain"
                      />
                    </Link>
                  </div>
                  <div className="flex gap-2">
                    {selectedProduct.images
                      ?.filter((img) => img.color === selectedColor)
                      .map((img, index) => (
                        <div
                          key={index}
                          onClick={() => setSelectedImage(img.imageUrl)}
                          className="rounded-lg border bg-gray-100 p-1 mt-12 border-red-400 cursor-pointer"
                        >
                          <Image
                            src={img.imageUrl || "/placeholder.svg"}
                            alt={`Product Image ${index + 1}`}
                            width={80}
                            height={80}
                            className="object-cover rounded"
                          />
                        </div>
                      ))}
                  </div>
                </div>
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-3xl text-black mb-2">{selectedProduct.name}</h3>
                    <div className="flex m-5 ml-0">
                      <p className="text-gray-600">Brand:</p>
                      <span className="text-md text-black pl-2">{selectedProduct.brandName}</span>
                    </div>
                    <div className="flex items-center mb-4">
                      <span className="text-gray-600 pr-2">Rated:</span>
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < (selectedProduct.rating || 0)
                            ? "fill-yellow-400 text-yellow-400"
                            : "fill-gray-200 text-gray-200"
                            }`}
                        />
                      ))}
                      <span className="text-xs text-gray-500 ml-1">({selectedProduct.reviewCount ?? 0} reviews)</span>
                    </div>
                    <p className="text-2xl text-pink-600 font-bold">{formatPrice(selectedProduct.basePrice)}</p>
                  </div>
                  <div>
                    <DropdownMenuSeparator className="mt-5 mb-5 bg-zinc-600" />
                    {/* Colors */}
                    <div className="font-semibold mb-1">Colors</div>
                    <div className="grid grid-cols-2 gap-2">
                      {Array.from(new Set(selectedProduct.variants.map((v) => v.color))).map((color) => {
                        const colorImage = selectedProduct.images.find((img) => img.color === color)
                        return (
                          <Button
                            variant="outline"
                            key={color}
                            onClick={() => {
                              setSelectedColor(color)
                              setSelectedSize(null) // reset size when color changes
                              setSelectedImage(colorImage?.imageUrl || "/placeholder.svg")
                            }}
                            className={`border-gray-300 hover:bg-black hover:text-gray-100 cursor-pointer transition duration-300 ${selectedColor === color ? "bg-white text-black" : "bg-gray-200"
                              }`}
                          >
                            {color}
                          </Button>
                        )
                      })}
                    </div>
                    {/* Sizes */}
                    {selectedColor && (
                      <div className="mt-4">
                        <div className="font-semibold mb-1">Sizes</div>
                        <div className="grid grid-cols-2 gap-2">
                          {Array.from(
                            new Set(
                              selectedProduct.variants.filter((v) => v.color === selectedColor).map((v) => v.size),
                            ),
                          ).map((size) => (
                            <Button
                              variant="outline"
                              key={size}
                              onClick={() => setSelectedSize(size)}
                              className={`border-gray-300 hover:bg-black hover:text-gray-100 cursor-pointer transition duration-300 ${selectedSize === size ? "bg-white text-black" : "bg-gray-200"
                                }`}
                            >
                              {size}
                            </Button>
                          ))}
                        </div>
                      </div>
                    )}
                    {/* Stock */}
                    {selectedColor && selectedSize && (
                      <div className="mt-4 text-sm text-gray-600">
                        {(() => {
                          const variant = selectedProduct.variants.find(
                            (v) => v.color === selectedColor && v.size === selectedSize,
                          )
                          return variant ? `Available stock: ${variant.stock}` : "Out of stock for this combination."
                        })()}
                      </div>
                    )}
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex text-sm flex-col">
                      <span className="text-gray-600 pr-2">Sold By:</span>
                      <p className="text-black">Mobile Store</p>
                    </div>
                    <div>
                      <AddToCartFilledButton
                        product={selectedProduct}
                        selectedColor={selectedColor}
                        selectedSize={selectedSize}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default CarouselItems

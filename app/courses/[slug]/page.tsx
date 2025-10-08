"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Star, Clock, Users, Award, CheckCircle2, ShoppingCart } from "lucide-react"
import { motion } from "framer-motion"
import { useToast } from "@/hooks/use-toast"

export default function CourseDetailPage() {
  const params = useParams()
  const router = useRouter()
  const { toast } = useToast()
  const [course, setCourse] = useState<any>(null)
  const [isInCart, setIsInCart] = useState(false)

  useEffect(() => {
    // Load course from JSON
    fetch("/data/courses.json")
      .then((res) => res.json())
      .then((data) => {
        const foundCourse = data.find((c: any) => c.slug === params.slug)
        if (foundCourse) {
          setCourse(foundCourse)

          // Check if already in cart
          const cart = JSON.parse(localStorage.getItem("cart") || "[]")
          setIsInCart(cart.some((item: any) => item.id === foundCourse.id))
        }
      })
  }, [params.slug])

  const addToCart = () => {
    if (!course) return

    const cart = JSON.parse(localStorage.getItem("cart") || "[]")

    if (!cart.some((item: any) => item.id === course.id)) {
      cart.push(course)
      localStorage.setItem("cart", JSON.stringify(cart))
      setIsInCart(true)
      window.dispatchEvent(new Event("cartUpdated"))

      toast({
        title: "Added to cart!",
        description: `${course.title} has been added to your cart.`,
      })
    }
  }

  const goToCart = () => {
    router.push("/cart")
  }

  if (!course) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="text-center">Loading...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-accent/5 py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="lg:col-span-2 space-y-6"
            >
              <Badge>{course.category}</Badge>
              <h1 className="text-3xl md:text-4xl font-bold text-balance">{course.title}</h1>
              <p className="text-lg text-muted-foreground leading-relaxed text-pretty">{course.description}</p>

              <div className="flex flex-wrap items-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <span className="font-bold">{course.rating}</span>
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  </div>
                  <span className="text-muted-foreground">({course.reviewCount.toLocaleString()} reviews)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <span>{course.students.toLocaleString()} students</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-4 w-4 text-muted-foreground" />
                  <span>{course.level}</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <img
                  src={`https://picsum.photos/seed/${course.instructor}/50/50`}
                  alt={course.instructor}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <div className="font-semibold">{course.instructor}</div>
                  <div className="text-sm text-muted-foreground">{course.instructorTitle}</div>
                </div>
              </div>
            </motion.div>

            {/* Sticky Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:sticky lg:top-20 h-fit"
            >
              <Card>
                <CardContent className="p-6 space-y-4">
                  <div className="relative aspect-video rounded-lg overflow-hidden">
                    <Image src={course.image || "/placeholder.svg"} alt={course.title} fill className="object-cover" />
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-3xl font-bold">${course.price}</span>
                    <span className="text-lg text-muted-foreground line-through">${course.originalPrice}</span>
                    <Badge variant="secondary">
                      {Math.round(((course.originalPrice - course.price) / course.originalPrice) * 100)}% off
                    </Badge>
                  </div>

                  {isInCart ? (
                    <Button className="w-full" size="lg" onClick={goToCart}>
                      Go to Cart
                    </Button>
                  ) : (
                    <Button className="w-full" size="lg" onClick={addToCart}>
                      <ShoppingCart className="mr-2 h-5 w-5" />
                      Add to Cart
                    </Button>
                  )}

                  <p className="text-xs text-center text-muted-foreground">30-Day Money-Back Guarantee</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {/* What You'll Learn */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <Card>
                  <CardContent className="p-6 space-y-4">
                    <h2 className="text-2xl font-bold">What you'll learn</h2>
                    <div className="grid md:grid-cols-2 gap-3">
                      {course.whatYouLearn.map((item: string, index: number) => (
                        <div key={index} className="flex gap-2">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Curriculum */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <Card>
                  <CardContent className="p-6 space-y-4">
                    <h2 className="text-2xl font-bold">Course Curriculum</h2>
                    <div className="space-y-3">
                      {course.curriculum.map((section: any, index: number) => (
                        <div key={index} className="border rounded-lg p-4">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-semibold">{section.section}</h3>
                              <p className="text-sm text-muted-foreground mt-1">
                                {section.lectures} lectures • {section.duration}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Reviews */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <Card>
                  <CardContent className="p-6 space-y-4">
                    <h2 className="text-2xl font-bold">Student Reviews</h2>
                    <div className="space-y-4">
                      {course.reviews.map((review: any, index: number) => (
                        <div key={index}>
                          {index > 0 && <Separator className="my-4" />}
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <img
                                src={`https://picsum.photos/seed/${review.name}/40/40`}
                                alt={review.name}
                                className="w-10 h-10 rounded-full"
                              />
                              <div>
                                <div className="font-semibold">{review.name}</div>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                  <div className="flex">
                                    {Array.from({ length: review.rating }).map((_, i) => (
                                      <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                                    ))}
                                  </div>
                                  <span>{review.date}</span>
                                </div>
                              </div>
                            </div>
                            <p className="text-sm text-muted-foreground leading-relaxed">{review.comment}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

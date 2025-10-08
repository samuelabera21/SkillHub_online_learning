"use client"

import Link from "next/link"
import Image from "next/image"
import { Star, Users } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

interface CourseCardProps {
  course: {
    id: number
    title: string
    slug: string
    instructor: string
    price: number
    originalPrice: number
    rating: number
    reviewCount: number
    students: number
    category: string
    level: string
    image: string
  }
  index?: number
}

export function CourseCard({ course, index = 0 }: CourseCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Link href={`/courses/${course.slug}`}>
        <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full">
          <div className="relative aspect-video overflow-hidden">
            <Image
              src={course.image || "/placeholder.svg"}
              alt={course.title}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
            <Badge className="absolute top-3 right-3 bg-background/90 text-foreground">{course.category}</Badge>
          </div>
          <CardContent className="p-4 space-y-2">
            <h3 className="font-semibold text-lg line-clamp-2 leading-snug text-balance">{course.title}</h3>
            <p className="text-sm text-muted-foreground">{course.instructor}</p>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <span className="font-bold text-sm">{course.rating}</span>
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              </div>
              <span className="text-xs text-muted-foreground">({course.reviewCount.toLocaleString()})</span>
            </div>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Users className="h-3 w-3" />
              <span>{course.students.toLocaleString()} students</span>
            </div>
          </CardContent>
          <CardFooter className="p-4 pt-0 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="font-bold text-lg">${course.price}</span>
              <span className="text-sm text-muted-foreground line-through">${course.originalPrice}</span>
            </div>
            <Badge variant="secondary">{course.level}</Badge>
          </CardFooter>
        </Card>
      </Link>
    </motion.div>
  )
}

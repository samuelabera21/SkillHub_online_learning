"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { BookOpen, Clock, Award, TrendingUp } from "lucide-react"
import { motion } from "framer-motion"

export default function DashboardPage() {
  const router = useRouter()
  const [purchasedCourses, setPurchasedCourses] = useState<any[]>([])
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    // Check if user is logged in
    const user = localStorage.getItem("user")
    if (!user) {
      router.push("/login")
      return
    }
    setIsLoggedIn(true)

    // Load purchased courses
    const purchased = JSON.parse(localStorage.getItem("purchasedCourses") || "[]")
    setPurchasedCourses(purchased)
  }, [router])

  if (!isLoggedIn) {
    return null
  }

  const totalCourses = purchasedCourses.length
  const averageProgress =
    totalCourses > 0 ? purchasedCourses.reduce((sum, course) => sum + course.progress, 0) / totalCourses : 0
  const completedCourses = purchasedCourses.filter((c) => c.progress === 100).length

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-4xl font-bold mb-8">My Learning Dashboard</h1>
      </motion.div>

      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-4 mb-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <Card>
            <CardContent className="p-6 flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <div>
                <div className="text-2xl font-bold">{totalCourses}</div>
                <div className="text-sm text-muted-foreground">Enrolled Courses</div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <Card>
            <CardContent className="p-6 flex items-center gap-4">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-accent" />
              </div>
              <div>
                <div className="text-2xl font-bold">{Math.round(averageProgress)}%</div>
                <div className="text-sm text-muted-foreground">Avg. Progress</div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <Card>
            <CardContent className="p-6 flex items-center gap-4">
              <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center">
                <Award className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <div className="text-2xl font-bold">{completedCourses}</div>
                <div className="text-sm text-muted-foreground">Completed</div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
          <Card>
            <CardContent className="p-6 flex items-center gap-4">
              <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center">
                <Clock className="h-6 w-6 text-orange-600 dark:text-orange-400" />
              </div>
              <div>
                <div className="text-2xl font-bold">{totalCourses - completedCourses}</div>
                <div className="text-sm text-muted-foreground">In Progress</div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Courses */}
      {purchasedCourses.length > 0 ? (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">My Courses</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {purchasedCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative aspect-video">
                    <Image src={course.image || "/placeholder.svg"} alt={course.title} fill className="object-cover" />
                  </div>
                  <CardContent className="p-4 space-y-3">
                    <h3 className="font-semibold line-clamp-2 text-balance">{course.title}</h3>
                    <p className="text-sm text-muted-foreground">{course.instructor}</p>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Progress</span>
                        <span className="font-semibold">{course.progress}%</span>
                      </div>
                      <Progress value={course.progress} />
                    </div>
                    <Link href={`/courses/${course.slug}`}>
                      <Button className="w-full bg-transparent" variant="outline">
                        {course.progress === 0 ? "Start Course" : "Continue Learning"}
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      ) : (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12 space-y-4">
          <BookOpen className="h-24 w-24 mx-auto text-muted-foreground" />
          <h2 className="text-2xl font-bold">No courses yet</h2>
          <p className="text-muted-foreground">Start your learning journey by enrolling in a course!</p>
          <Link href="/courses">
            <Button size="lg">Browse Courses</Button>
          </Link>
        </motion.div>
      )}
    </div>
  )
}

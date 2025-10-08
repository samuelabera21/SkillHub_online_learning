"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CourseCard } from "@/components/course-card"
import {
  ArrowRight,
  BookOpen,
  Users,
  Award,
  TrendingUp,
  Code,
  Palette,
  BarChart,
  Smartphone,
  Cloud,
  Megaphone,
} from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function HomePage() {
  const [featuredCourses, setFeaturedCourses] = useState<any[]>([])

  useEffect(() => {
    // Load featured courses from JSON
    fetch("/data/courses.json")
      .then((res) => res.json())
      .then((data) => setFeaturedCourses(data.slice(0, 3)))
  }, [])

  const categories = [
    { name: "Web Development", icon: Code, color: "text-blue-500" },
    { name: "Design", icon: Palette, color: "text-pink-500" },
    { name: "Data Science", icon: BarChart, color: "text-green-500" },
    { name: "Mobile Development", icon: Smartphone, color: "text-purple-500" },
    { name: "Cloud Computing", icon: Cloud, color: "text-cyan-500" },
    { name: "Marketing", icon: Megaphone, color: "text-orange-500" },
  ]

  const stats = [
    { label: "Active Students", value: "50K+", icon: Users },
    { label: "Expert Instructors", value: "200+", icon: Award },
    { label: "Online Courses", value: "1,000+", icon: BookOpen },
    { label: "Success Rate", value: "95%", icon: TrendingUp },
  ]

  const testimonials = [
    {
      name: "Samuel Abera",
      role: "Full-Stack Developer",
      content:
        "SkillHub transformed my career. The courses are practical, engaging, and taught by industry experts. I landed my dream job within 3 months!",
      avatar: "/images/cutmy.png",
    },
    {
      name: "Amanuel",
      role: "UX Designer",
      content:
        "The UI/UX course was exactly what I needed. The projects were real-world applicable and the instructor feedback was invaluable.",
      avatar: "/images/aman.jpg",
    },
    {
      name: "Helen",
      role: "Data Analyst",
      content:
        "Best investment in my education. The Python course gave me the skills to transition into data science. Highly recommend!",
      avatar: "/images/helen.jpg",
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-accent/5 to-background py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
                Unlock Your Potential with <span className="text-primary">Expert-Led</span> Online Courses
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">
                Learn from industry professionals, build real-world projects, and advance your career with our
                comprehensive online learning platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/courses">
                  <Button size="lg" className="w-full sm:w-auto">
                    Explore Courses
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/signup">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent">
                    Start Learning Free
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative aspect-square">
                <img
                  src="/images/education2.jpg"
                  alt="Hero illustration"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="p-6 text-center space-y-2">
                    <stat.icon className="h-8 w-8 mx-auto text-primary" />
                    <div className="text-3xl font-bold">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Courses</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              Discover our most popular courses taught by industry experts
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {featuredCourses.map((course, index) => (
              <CourseCard key={course.id} course={course} index={index} />
            ))}
          </div>

          <div className="text-center">
            <Link href="/courses">
              <Button size="lg" variant="outline">
                View All Courses
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore Categories</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              Find the perfect course for your learning goals
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Link href={`/courses?category=${encodeURIComponent(category.name)}`}>
                  <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                    <CardContent className="p-6 text-center space-y-3">
                      <category.icon className={`h-10 w-10 mx-auto ${category.color}`} />
                      <h3 className="font-semibold text-sm">{category.name}</h3>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Students Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              Join thousands of successful learners who transformed their careers
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6 space-y-4">
                    <p className="text-muted-foreground leading-relaxed text-pretty">"{testimonial.content}"</p>
                    <div className="flex items-center gap-3">
                      <img
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full"
                      />
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-balance">Ready to Start Your Learning Journey?</h2>
            <p className="text-lg text-primary-foreground/90 text-balance">
              Join SkillHub today and get access to thousands of courses from expert instructors. Start learning at your
              own pace.
            </p>
            <Link href="/signup">
              <Button size="lg" variant="secondary" className="mt-4">
                Get Started Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

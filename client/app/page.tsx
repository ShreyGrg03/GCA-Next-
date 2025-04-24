"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import { useRef, useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Award,
  Calendar,
  CheckCircle,
  ChevronRight,
  ChevronUp,
  Layers,
  MapPin,

  Users,
  ChevronDown,
  Mail,
  Phone,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Sparkles,
  Brain,
  Cpu,

} from "lucide-react"

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const floatingAnimation = {
  initial: { y: 0 },
  animate: {
    y: [0, -10, 0] as number[], // Remove readonly modifier
    transition: {
      duration: 3,
      repeat: Number.POSITIVE_INFINITY,
      repeatType: "reverse" as const, // Explicitly cast to the correct type
      ease: "easeInOut",
    },
  },
}

const pulseAnimation = {
  initial: { scale: 1, opacity: 0.8 },
  animate: {
    scale: [1, 1.05, 1],
    opacity: [0.8, 1, 0.8],
    transition: {
      duration: 2,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    },
  },
}

const glowAnimation = {
  initial: { boxShadow: "0 0 0 rgba(168, 85, 247, 0.4)" },
  animate: {
    boxShadow: ["0 0 0 rgba(168, 85, 247, 0.4)", "0 0 20px rgba(168, 85, 247, 0.6)", "0 0 0 rgba(168, 85, 247, 0.4)"],
    transition: {
      duration: 2,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    },
  },
}

export default function Home() {
  const [showFullAbout, setShowFullAbout] = useState(false)
  const [showFullEvents, setShowFullEvents] = useState(false)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)

  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.8])
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100])

  useEffect(() => {
    // Preload the video
    const video = document.getElementById("nomination-video") as HTMLVideoElement
    if (video) {
      video.addEventListener("loadeddata", () => {
        setIsVideoLoaded(true)
      })
    }
  }, [])

  const faqItems = [
    {
      question: "What are Golden Conference Awards?",
      answer:
        "Golden Conference Awards recognize and celebrate the outstanding achievements of individuals and organizations across various fields, including business, technology, arts, culture, and education.",
    },
    {
      question: "Who can be nominated for Golden Conference Awards?",
      answer:
        "Individuals and organizations that have made significant contributions in their respective fields are eligible for nomination.",
    },
    {
      question: "What are the benefits of participating?",
      answer:
        "Participating in Golden Conference Awards offers recognition, networking, exposure, inspiration, and opportunities.",
    },
    {
      question: "How do I nominate someone for an award?",
      answer: "To nominate someone, please fill out the nomination form available on our official website.",
    },
    {
      question: "How can I contact Golden Conference Awards team?",
      answer: "You can contact us at infogoldenconference@gmail.com or call +91 8283857170.",
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative h-screen flex justify-center items-center text-center text-white overflow-hidden"
      >
        {/* Background elements */}
        <motion.div className="absolute inset-0 z-10" style={{ opacity: heroOpacity }}></motion.div>
        <motion.div
          className="absolute inset-0 z-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: "url('/images/background.jpg')",
            opacity: heroOpacity,
            scale: heroScale,
            y: heroY,
          }}
        ></motion.div>

        {/* AI-related decorative elements */}
        <div className="absolute inset-0 z-5 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/noise.jpg')] opacity-30"></div>

          {/* Neural network nodes and connections */}
          <div className="absolute inset-0 overflow-hidden">
            {Array.from({ length: 15 }).map((_, i) => (
              <motion.div
                key={`node-${i}`}
                className="absolute w-3 h-3 rounded-full bg-purple-400/30"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.7, 0.3],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: Math.random() * 2,
                }}
              />
            ))}

            {/* Floating AI-related particles */}
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.div
                key={`particle-${i}`}
                className="absolute w-1.5 h-1.5 rounded-full bg-amber-300/40"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  x: [0, Math.random() * 20 - 10, 0],
                }}
                transition={{
                  duration: 4 + Math.random() * 3,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          <motion.div
            className="absolute top-20 left-20 w-64 h-64 rounded-full bg-amber-500/20 blur-3xl"
            variants={pulseAnimation}
            initial="initial"
            animate="animate"
          ></motion.div>
          <motion.div
            className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-indigo-500/20 blur-3xl"
            variants={pulseAnimation}
            initial="initial"
            animate="animate"
          ></motion.div>
        </div>

        {/* Content container */}
        {/* Pre-title badge */}
        <div className="relative z-20 px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            {/* <span className="inline-block bg-white/10 backdrop-blur-sm text-amber-200 text-sm font-medium px-4 py-2 rounded-full border border-white/20">
              <motion.span
                className="inline-block w-2 h-2 bg-amber-400 rounded-full mr-2"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [1, 0.7, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              ></motion.span>
              2025 Edition
            </span> */}
          </motion.div>

          {/* Main title with enhanced styling */}
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight leading-tight"
          >
            {/* <span className="block">The</span> */}
            <motion.span
              className="bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-400 bg-clip-text text-transparent inline-block"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 10,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            >
              Golden Conference
            </motion.span>
            <span className="block mt-2">Awards</span>
          </motion.h1>

          {/* Subtitle with improved typography */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl md:text-2xl font-light max-w-2xl mx-auto leading-relaxed mb-4 text-gray-100"
          >
            Where Excellence Meets Recognition
          </motion.p>

          {/* Description text with AI-related icon */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-base text-gray-200 max-w-xl mx-auto mb-10 flex items-center justify-center gap-2"
          >
            <Sparkles className="h-4 w-4 text-amber-300" />
            Join us in celebrating outstanding achievements and groundbreaking innovations in the industry at this
            prestigious annual ceremony.
          </motion.p>

          {/* Call to action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
          >
            <Link href="#nomination">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-black font-semibold px-8 py-6 rounded-lg text-lg shadow-lg shadow-amber-500/20 border border-amber-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/30"
                >
                  Nominate Now
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
            </Link>
            <Link href="#categories">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/30 font-medium px-6 py-6 rounded-lg text-lg transition-all duration-300"
                >
                  View Categories
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
        >
          <div className="flex flex-col items-center justify-center">
            <span className="text-sm text-gray-300 mb-2">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
              <motion.div
                animate={{
                  y: [0, 12, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                }}
                className="w-1.5 h-1.5 bg-white rounded-full"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          {/* Section header with decorative elements */}
          <div className="relative text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-block"
            >
              <span className="block h-1 w-12 bg-purple-300 mx-auto mb-3"></span>
              <h2 className="text-3xl md:text-5xl font-bold text-purple-800 relative inline-block">
                About Us
                <span className="absolute -z-10 -inset-1 rounded-lg bg-purple-50 blur-xl opacity-70"></span>
              </h2>
              <span className="block h-1 w-20 bg-purple-300 mx-auto mt-3"></span>
            </motion.div>
          </div>

          {/* Content with cards layout */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Mission statement card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-xl shadow-md p-8 border border-gray-100 relative overflow-hidden group"
              whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)" }}
            >
              <div className="absolute -right-6 -top-6 w-24 h-24 bg-purple-100 rounded-full opacity-70 group-hover:scale-110 transition-transform duration-300"></div>
              <div className="relative">
                <h3 className="text-2xl font-bold text-purple-700 mb-4 flex items-center">
                  <Award className="h-6 w-6 mr-2 text-purple-500" />
                  Our Mission
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Golden Conference Award unites scientists, researchers, and industry leaders to exchange
                  groundbreaking ideas and emerging technologies. We foster collaboration between academia and industry
                  while recognizing excellence and innovation.
                </p>
              </div>
            </motion.div>

            {/* What we do card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-xl shadow-md p-8 border border-gray-100 relative overflow-hidden group"
              whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)" }}
            >
              <div className="absolute -left-6 -top-6 w-24 h-24 bg-purple-100 rounded-full opacity-70 group-hover:scale-110 transition-transform duration-300"></div>
              <div className="relative">
                <h3 className="text-2xl font-bold text-purple-700 mb-4 flex items-center">
                  <Layers className="h-6 w-6 mr-2 text-purple-500" />
                  What We Do
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We provide comprehensive branding services, market research, media solutions, and strategic advisory.
                  Our expertise spans across government bodies, NGOs, corporates, and startups, ensuring tailored
                  solutions aligned with business goals.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Main content with expandable text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md p-8 md:p-10 border border-gray-100"
          >
            <div className="prose prose-lg mx-auto text-gray-700">
              <p className="text-lg">
                {showFullAbout ? (
                  <>
                    <p className="mb-4">
                      Golden Conference Award is a premier tech-conference that unites global scientists,
                      researchers, and industry leaders. This exclusive platform facilitates the exchange of ideas and
                      technologies, attracting renowned speakers worldwide to present cutting-edge research and industry
                      trends.
                    </p>

                    <p className="mb-4">
                      Beyond knowledge sharing, we accelerate brand development and redefine market research through
                      strategic services. Our expertise spans diverse sectors, including government bodies, NGOs,
                      corporates, and startups.
                    </p>

                    <p className="mb-4">
                      We offer branding services that develop and implement brand identity by effectively communicating
                      business messages to target audiences. Our evaluations and research analyses adhere to high
                      industry standards, maintaining our credibility and reputation.
                    </p>

                    <p className="mb-4">
                      Golden Conference Award also specializes in media solutions, including profiling, consulting,
                      promotions, and advertising. We organize exhibitions, award events, and conferences that nurture
                      and promote innovation and talent.
                    </p>
                  </>
                ) : (
                  "Golden Conference Award is a premier tech-conference bringing together global scientists, researchers, and industry leaders. We foster collaboration between academia and industry while providing branding, market research, and strategic advisory services. Committed to excellence, we enhance brand visibility, promote knowledge-sharing, and drive progress through innovation."
                )}
              </p>
            </div>

            <div className="flex justify-center mt-8">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Button
                  onClick={() => setShowFullAbout(!showFullAbout)}
                  className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white border-0 font-medium px-6 py-2 rounded-lg shadow-md shadow-purple-200 flex items-center gap-2 transition-all duration-300"
                >
                  {showFullAbout ? (
                    <>
                      Read Less <ChevronUp className="h-4 w-4" />
                    </>
                  ) : (
                    <>
                      Read More <ChevronDown className="h-4 w-4" />
                    </>
                  )}
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* Statistics section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto"
          >
            {[
              { icon: Users, value: "500+", label: "Global Partners" },
              { icon: Award, value: "120+", label: "Awards Given" },
              { icon: Calendar, value: "10+", label: "Years Experience" },
              { icon: MapPin, value: "30+", label: "Countries Reached" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-50 hover:shadow-md transition-shadow duration-300"
                whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <motion.div
                  className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 text-purple-600 mb-4"
                  variants={floatingAnimation}
                  initial="initial"
                  animate="animate"
                >
                  <stat.icon className="h-6 w-6" />
                </motion.div>
                <motion.h4
                  className="text-2xl font-bold text-purple-800"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + 0.1 * index }}
                >
                  {stat.value}
                </motion.h4>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20 px-4 md:px-8 lg:px-16 text-center text-black relative bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-3xl md:text-4xl font-bold mb-10 text-center text-purple-700"
          >
            Chronicles of Events
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="prose prose-lg max-w-4xl mx-auto text-gray-700"
          >
            <p className="text-lg leading-relaxed">
              {showFullEvents ? (
                <>
                  <p>
                    Golden Conference Award proudly hosted the The Business and Education Awards & The Icon Awards,
                    a landmark event celebrating excellence across diverse industries. This prestigious ceremony brought
                    together leaders, entrepreneurs, educators, and visionaries from around the world, recognizing
                    individuals and organizations that have made outstanding contributions to business, education, and
                    leadership. By honoring innovation, talent, and transformative leadership, the event served as a
                    platform to inspire and empower future change-makers to push boundaries and drive progress.
                  </p>

                  <p className="mt-4">
                    With a strong emphasis on excellence and global impact, the awards set a new benchmark for
                    recognizing achievements on an The scale. Inspiring speeches from honorees and speakers showcased
                    their remarkable journeys, sharing insights into their dedication, perseverance, and success.
                    Attendees had the unique opportunity to engage in networking sessions, connecting with industry
                    pioneers, innovators, and influencers, fostering valuable collaborations and partnerships.
                  </p>

                  <p className="mt-4">
                    The event garnered extensive media coverage, amplifying the achievements of the awardees and
                    highlighting the significance of the Global Eminence Awards. By bringing together the brightest
                    minds and celebrating their success, the ceremony reinforced its mission to champion innovation,
                    leadership, and excellence on a global stage.
                  </p>
                </>
              ) : (
                "Golden Conference Award hosted the The Business and Education Awards & The Icon Awards, honoring excellence across industries. The event celebrated leaders, entrepreneurs, and educators for their contributions to business, education, and leadership. With inspiring speeches, networking opportunities, and global media coverage, the ceremony highlighted innovation, talent, and transformative leadership, reinforcing its mission to drive progress and excellence worldwide."
              )}
            </p>
            <div className="text-center mt-6">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Button
                  variant="outline"
                  onClick={() => setShowFullEvents(!showFullEvents)}
                  className="text-purple-700 border-purple-700 hover:bg-purple-50 font-medium"
                >
                  {showFullEvents ? "Read Less" : "Read More"}
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Awards Section */}
      <section id="awards" className="py-20 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-3xl md:text-4xl font-bold mb-12 text-center text-purple-700"
          >
            Awards Categories
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {/* Start-Up Awards */}
            <motion.div variants={fadeIn}>
              <Card className="h-full p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-t-4 border-t-amber-500 overflow-hidden group">
                <h3 className="text-xl font-bold text-purple-700 mb-4 pb-2 border-b border-gray-200 group-hover:text-amber-600 transition-colors">
                  Start-Up Awards
                </h3>
                <ul className="space-y-2 text-left text-gray-700">
                  <li className="py-1.5 pl-3 border-l-2 border-transparent hover:border-amber-500 transition-all">
                    Innovative Start-Up of the Year
                  </li>
                  <li className="py-1.5 pl-3 border-l-2 border-transparent hover:border-amber-500 transition-all">
                    Start-Up of the Year (Industry-Specific)
                  </li>
                  <li className="py-1.5 pl-3 border-l-2 border-transparent hover:border-amber-500 transition-all">
                    Emerging Start-Up of the Year
                  </li>
                  <li className="py-1.5 pl-3 border-l-2 border-transparent hover:border-amber-500 transition-all">
                    Mobility Start-Up of the Year
                  </li>
                  <li className="py-1.5 pl-3 border-l-2 border-transparent hover:border-amber-500 transition-all">
                    Best Social Impact Start-Up
                  </li>
                </ul>
              </Card>
            </motion.div>

            {/* Entrepreneurship & Business Excellence */}
            <motion.div variants={fadeIn}>
              <Card className="h-full p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-t-4 border-t-purple-500 overflow-hidden group">
                <h3 className="text-xl font-bold text-purple-700 mb-4 pb-2 border-b border-gray-200 group-hover:text-purple-600 transition-colors">
                  Entrepreneurship & Business
                </h3>
                <ul className="space-y-2 text-left text-gray-700">
                  <li className="py-1.5 pl-3 border-l-2 border-transparent hover:border-purple-500 transition-all">
                    Entrepreneur of the Year
                  </li>
                  <li className="py-1.5 pl-3 border-l-2 border-transparent hover:border-purple-500 transition-all">
                    Young Entrepreneur of the Year
                  </li>
                  <li className="py-1.5 pl-3 border-l-2 border-transparent hover:border-purple-500 transition-all">
                    Woman Entrepreneur of the Year
                  </li>
                  <li className="py-1.5 pl-3 border-l-2 border-transparent hover:border-purple-500 transition-all">
                    Innovative Entrepreneur of the Year
                  </li>
                  <li className="py-1.5 pl-3 border-l-2 border-transparent hover:border-purple-500 transition-all">
                    Fastest-Growing Company of the Year
                  </li>
                </ul>
              </Card>
            </motion.div>

            {/* Technology & Innovation */}
            <motion.div variants={fadeIn}>
              <Card className="h-full p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-t-4 border-t-cyan-500 overflow-hidden group">
                <h3 className="text-xl font-bold text-purple-700 mb-4 pb-2 border-b border-gray-200 group-hover:text-cyan-600 transition-colors">
                  Technology & Innovation
                </h3>
                <ul className="space-y-2 text-left text-gray-700">
                  <li className="py-1.5 pl-3 border-l-2 border-transparent hover:border-cyan-500 transition-all">
                    Most Innovative Tech Company
                  </li>
                  <li className="py-1.5 pl-3 border-l-2 border-transparent hover:border-cyan-500 transition-all">
                    AI & Emerging Technology Leader
                  </li>
                  <li className="py-1.5 pl-3 border-l-2 border-transparent hover:border-cyan-500 transition-all">
                    Best Digital Transformation Company
                  </li>
                  <li className="py-1.5 pl-3 border-l-2 border-transparent hover:border-cyan-500 transition-all">
                    Cybersecurity Innovation Award
                  </li>
                  <li className="py-1.5 pl-3 border-l-2 border-transparent hover:border-cyan-500 transition-all">
                    Blockchain & Fintech Disruptor
                  </li>
                </ul>
              </Card>
            </motion.div>

            {/* Education & Academia */}
            <motion.div variants={fadeIn}>
              <Card className="h-full p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-t-4 border-t-emerald-500 overflow-hidden group">
                <h3 className="text-xl font-bold text-purple-700 mb-4 pb-2 border-b border-gray-200 group-hover:text-emerald-600 transition-colors">
                  Education & Academia
                </h3>
                <ul className="space-y-2 text-left text-gray-700">
                  <li className="py-1.5 pl-3 border-l-2 border-transparent hover:border-emerald-500 transition-all">
                    Best University/College of the Year
                  </li>
                  <li className="py-1.5 pl-3 border-l-2 border-transparent hover:border-emerald-500 transition-all">
                    Best Coaching Institute of the Year
                  </li>
                  <li className="py-1.5 pl-3 border-l-2 border-transparent hover:border-emerald-500 transition-all">
                    Best Online Education Program
                  </li>
                  <li className="py-1.5 pl-3 border-l-2 border-transparent hover:border-emerald-500 transition-all">
                    Emerging Play School of the Year
                  </li>
                  <li className="py-1.5 pl-3 border-l-2 border-transparent hover:border-emerald-500 transition-all">
                    Best Education Mobile App
                  </li>
                </ul>
              </Card>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mt-12 text-center"
          >
            {/* <Link href="/awards">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Button className="bg-purple-700 hover:bg-purple-800 text-white px-8 py-6 rounded-md text-lg font-medium">
                  View All Categories
                </Button>
              </motion.div>
            </Link> */}
          </motion.div>
        </div>
      </section>

      {/* Awards Packages Section */}
      <section id="packages" className="py-24 bg-gradient-to-br from-white via-purple-50/30 to-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          {/* Section header with decorative elements */}
          <div className="text-center mb-16 relative">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="inline-block"
            >
              <span className="inline-block px-4 py-1.5 bg-purple-100 text-purple-700 text-sm font-semibold rounded-full mb-4">
                Choose Your Package
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-purple-800 mb-4">Awards Packages</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Select the perfect package to showcase your achievements and gain recognition
              </p>
              <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto mt-6"></div>
            </motion.div>
          </div>

          {/* Package comparison slider/tabs */}

          {/* Pricing cards with improved layout and aligned buttons */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 mb-12">
            {/* Standard Package */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col h-full"
            >
              <div className="h-full bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group flex flex-col">
                <div className="h-2 bg-gray-400 group-hover:bg-gray-500 transition-colors"></div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-800">Standard</h3>
                  <div className="my-4 flex items-baseline justify-center">
                    <span className="text-lg font-medium text-purple-800">For individuals & small teams</span>
                  </div>
                </div>
                <div className="px-6 pb-4 flex-grow">
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start text-sm">
                      <CheckCircle className="h-4 w-4 text-gray-500 mr-2 flex-shrink-0 mt-1" />
                      <div>
                        <div className="mt-2 h-12 w-full">
                          <img src="images/oic.png" alt="University Logo" className="w-full h-full object-contain" />
                        </div>
                      </div>
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-gray-500 mr-2 flex-shrink-0" />
                      <span>GCA Membership and Kit</span>
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-gray-500 mr-2 flex-shrink-0" />
                      <span>Networking Opportunity and Branding in Magazine</span>
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-gray-500 mr-2 flex-shrink-0" />
                      <span>Conference Lunch</span>
                    </li>
                  </ul>
                </div>
                <div className="px-6 pb-6 mt-auto">
                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                    <Link href="/registration">
                      <Button className="w-full bg-gray-500 hover:bg-gray-600 font-medium">Select Standard</Button>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Supreme Package */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col h-full"
            >
              <div className="h-full bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group flex flex-col">
                <div className="h-2 bg-blue-400 group-hover:bg-blue-500 transition-colors"></div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-800">Supreme</h3>
                  <div className="my-4 flex items-baseline justify-center">
                    <span className="text-lg font-medium text-purple-800">For growing organizations</span>
                  </div>
                </div>
                <div className="px-6 pb-4 flex-grow">
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start text-sm">
                      <CheckCircle className="h-4 w-4 text-blue-500 mr-2 flex-shrink-0 mt-1" />
                      <div>
                        <div className="mt-2 h-12 w-full">
                          <img src="images/supreme.png" alt="University Logo" className="w-full h-full object-contain rounded-full " />
                        </div>
                      </div>
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-blue-500 mr-2 flex-shrink-0" />
                      <span>All Standard Features</span>
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-blue-500 mr-2 flex-shrink-0" />
                      <span>Enhanced Networking with Video Byte</span>
                    </li>
                  </ul>
                </div>
                <div className="px-6 pb-6 mt-auto">
                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                    <Link href="/registration">
                      <Button className="w-full bg-blue-500 hover:bg-blue-600 font-medium">Select Supreme</Button>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Elite Package */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col h-full"
            >
              <div className="h-full bg-white rounded-2xl shadow-lg overflow-hidden border border-purple-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group flex flex-col">
                <div className="h-2 bg-purple-500 group-hover:bg-purple-600 transition-colors"></div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-800">Elite</h3>
                  <div className="my-4 flex items-baseline justify-center">
                    <span className="text-lg font-medium text-purple-800">For established businesses</span>
                  </div>
                </div>
                <div className="px-6 pb-4 flex-grow">
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start text-sm">
                      <CheckCircle className="h-4 w-4 text-purple-500 mr-2 flex-shrink-0 mt-1" />
                      <div>
                        <div className="mt-2 h-12 w-full">
                          <img src="images/WMU.png" alt="University Logo" className="w-full h-full object-contain" />
                        </div>
                      </div>
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-purple-500 mr-2 flex-shrink-0" />
                      <span>All Supreme Features</span>
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-purple-500 mr-2 flex-shrink-0" />
                      <span>Enhanced Networking Opportunities</span>
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-purple-500 mr-2 flex-shrink-0" />
                      <span>University Convocation at International Location or GCA in-house, India</span>
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-purple-500 mr-2 flex-shrink-0" />
                      <span>Film Making (Actor and Anchor creating your biography in metropolitan city location)</span>
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-purple-500 mr-2 flex-shrink-0" />
                      <span>Fast Track</span>
                    </li>
                  </ul>
                </div>
                <div className="px-6 pb-6 mt-auto">
                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                    <Link href="/registration">
                      <Button className="w-full bg-purple-600 hover:bg-purple-700 font-medium">Select Elite</Button>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Premium Package */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col h-full"
            >
              <div className="h-full bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group flex flex-col">
                <div className="h-2 bg-amber-400 group-hover:bg-amber-500 transition-colors"></div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-800">Premium</h3>
                  <div className="my-4 flex items-baseline justify-center">
                    <span className="text-lg font-medium text-purple-800">For industry leaders</span>
                  </div>
                </div>
                <div className="px-6 pb-4 flex-grow">
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start text-sm">
                      <CheckCircle className="h-4 w-4 text-amber-500 mr-2 flex-shrink-0 mt-1" />
                      <div>
                        <div className="mt-2 h-12 w-full">
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrj9SuArp2numImJDeY8ydo7oaEL6ooMnrHA&s" alt="University Logo" className="w-full h-full object-contain" />
                        </div>
                      </div>
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-amber-500 mr-2 flex-shrink-0" />
                      <span>All Elite Features</span>
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-amber-500 mr-2 flex-shrink-0" />
                      <span>Happy Hour Session with Premium Guest</span>
                    </li>
                  </ul>
                </div>
                <div className="px-6 pb-6 mt-auto">
                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                    <Link href="/registration">
                      <Button className="w-full bg-amber-500 hover:bg-amber-600 font-medium">Select Premium</Button>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Legends Package */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col h-full"
            >
              <div className="h-full bg-gradient-to-br from-white to-rose-50 rounded-2xl shadow-lg overflow-hidden border border-rose-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group relative flex flex-col">
                <div className="absolute -right-12 top-7 bg-gradient-to-r from-rose-500 to-pink-500 text-white px-12 py-1 transform rotate-45 text-xs font-bold shadow-sm">
                  BEST VALUE
                </div>
                <div className="h-2 bg-gradient-to-r from-rose-400 to-pink-400 group-hover:from-rose-500 group-hover:to-pink-500 transition-colors"></div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-800">Legends</h3>
                  <div className="my-4 flex items-baseline justify-center">
                    <span className="text-lg font-medium text-rose-600">For industry trailblazers</span>
                  </div>
                </div>
                <div className="px-6 pb-4 flex-grow">
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start text-sm">
                      <CheckCircle className="h-4 w-4 text-rose-500 mr-2 flex-shrink-0 mt-1" />
                      <div>
                        <div className="mt-2 h-12 w-full">
                          <img src="" alt="University Logo" className="w-full h-full object-contain" />
                        </div>
                      </div>
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-rose-500 mr-2 flex-shrink-0" />
                      <span>All Premium Features</span>
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-rose-500 mr-2 flex-shrink-0" />
                      <span>Global Media Coverage</span>
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-rose-500 mr-2 flex-shrink-0" />
                      <span>VIP Experience</span>
                    </li>
                  </ul>
                </div>
                <div className="px-6 pb-6 mt-auto">
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    variants={glowAnimation}
                    initial="initial"
                    animate="animate"
                  >
                    <Link href="/registration">
                      <Button className="w-full bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 font-medium shadow-md shadow-rose-100">
                        Select Legends
                      </Button>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Degrees Section */}
      <section id="degrees" className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-3xl md:text-4xl font-bold mb-12 text-center text-purple-700"
          >
            Degrees
          </motion.h2>

          <motion.div
            className="max-w-4xl mx-auto flex flex-col gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {/* Honorary Degree */}
            <motion.div variants={fadeIn}>
              <Card className="p-8 shadow-lg border-0 bg-gradient-to-r from-purple-50 to-white">
                <h3 className="text-2xl font-bold text-purple-700 mb-6 text-center">Honorary Degree</h3>

                <div className="space-y-8">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                      <span className="w-2 h-8 bg-amber-500 mr-3 rounded-full"></span>
                      Business & Management
                    </h4>
                    <ul className="space-y-3 ml-5">
                      <li className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-amber-500">
                        Doctor of Business Administration (Hon. DBA)
                      </li>
                      <li className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-amber-500">
                        Doctor of Public Administration (Hon. D.P.A.)
                      </li>
                      <li className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-amber-500">
                        Doctor of Leadership (Hon. D.Lead.)
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                      <span className="w-2 h-8 bg-purple-500 mr-3 rounded-full"></span>
                      Science & Technology
                    </h4>
                    <ul className="space-y-3 ml-5">
                      <li className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-purple-500">
                        Doctor of Science (Hon. D.Sc.)
                      </li>
                      <li className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-purple-500">
                        Doctor of Technology (Hon. D.Tech.)
                      </li>
                      <li className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-purple-500">
                        Doctor of Engineering (Hon. D.Eng.)
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Doctorate Degrees */}
            <motion.div variants={fadeIn}>
              <Card className="p-8 shadow-lg border-0 bg-gradient-to-r from-cyan-50 to-white">
                <h3 className="text-2xl font-bold text-purple-700 mb-6 text-center">Doctorate Degree</h3>
                <ul className="space-y-3 ml-5">
                  <li className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-cyan-500">
                    Doctorate of Business Administration
                  </li>
                  <li className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-cyan-500">
                    Doctorate of Computer Science
                  </li>
                </ul>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section id="sponsors" className="py-24 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-white to-purple-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-amber-100 text-amber-700 rounded-full text-sm font-semibold mb-4">
              Our Partners
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Sponsors & Partners</h2>

            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We are proud to collaborate with leading organizations that share our vision for excellence and innovation
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mt-6"></div>
          </motion.div>

          {/* Silver Sponsors */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* <h3 className="text-xl font-semibold text-center mb-10 flex items-center justify-center gap-2">
              <Award className="h-5 w-5 text-gray-500" />
              <span>Silver Sponsors</span>
            </h3> */}

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
              {/* Replace with actual sponsor logos */}
              {[
                { id: 1, name: "Wilmington Metropolitan University", logo: "https://orcad.co.in/wp-content/uploads/2023/01/wmu-new-removebg-preview-1.png" },
                { id: 2, name: "Hawkins University", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrj9SuArp2numImJDeY8ydo7oaEL6ooMnrHA&s" },
                { id: 3, name: "Oxford International College", logo: "https://www.oicbrighton.com/-/media/oic-oxford/wechatimg761.png?h=219&iar=0&w=538&rev=65a6e15e1e054814a242efb0eb3ff2b5&hash=1BF5F73E06642D5AE358ABE4918AE9CB" },
                { id: 4, name: "American Merit Council", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY_X2LQc8tFKk_RGN4u90L8U6pdtfDfSOFCQ&s" },
                { id: 5, name: "NIILM University", logo: "https://www.niilmuniversity.ac.in/web/assets/img/logo.png" },
                { id: 6, name: "United Nations Uzbekistan", logo: "https://timun.wiut.uz/images/2023/10/06/002.jpg" }
              ].map((sponsor) => (
                <motion.div
                  key={sponsor.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.05 * sponsor.id }}
                  whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)" }}
                  className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 h-32 flex items-center justify-center"
                >
                  <div className="flex flex-col items-center">
                    <img
                      src={sponsor.logo}
                      alt={`${sponsor.name} logo`}
                      className="h-16 object-contain mb-2"
                    />
                    <p className="font-medium text-gray-700 text-sm">{sponsor.name}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Accreditation & Collaboration Section */}
      <section id="accreditation" className="py-24 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-purple-50 to-white">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-amber-100 text-amber-700 rounded-full text-sm font-semibold mb-4">
              Collaborations
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Accreditation & Collaboration</h2>

            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We are proud to collaborate with leading organizations that share our vision for excellence and innovation
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mt-6"></div>
          </motion.div>

          {/* Academic Partners Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >

            <h3 className="text-xl font-semibold text-center mb-10 flex items-center justify-center gap-2">
              <Award className="h-5 w-5 text-gray-500" />
              <span>Our Collaborators</span>
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {/* Replace with actual collaborators logos */}
              {[
                { id: 1, name: "Eduqua Certified", logo: "https://www.ssbm.ch/wp-content/uploads/2020/03/eduqua_logo_notxt_mit_Schutzraum_cmyk-1200x534-1.jpg" },
                { id: 2, name: "5 Star QS Rating", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyi8SLkE0CeVc7vF-hEk_6vL8Yxy_HNEX3C2M-zl5oKE6sLF5tS2JGTe2qCpe24YSgTh8&usqp=CAU" },
                { id: 3, name: "ACBSP Member", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYzPqgLcolu3GuCKRXLO6DTgB25MvbdiwrJw&s" },
                { id: 4, name: "BGA MP", logo: "https://raw.githubusercontent.com/hdpngworld/HPW/main/uploads/650bcc2aa0a46-logo.png" },
                { id: 5, name: "IACBE Education", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxVm96ScBdR57krSC3QwbOAQuLbMMYk4z35w&s" },
              ].map((accreditation) => (
                <motion.div
                  key={accreditation.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.05 * accreditation.id }}
                  whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)" }}
                  className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 h-32 flex items-center justify-center"
                >
                  <div className="flex flex-col items-center">
                    <img
                      src={accreditation.logo}
                      alt={`${accreditation.name} logo`}
                      className="h-16 object-contain mb-2"
                    />
                    <p className="font-medium text-gray-700 text-sm">{accreditation.name}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      {/* Industry Collaborations Card */}
      {/* <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="h-full bg-white shadow-lg border-0 overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-amber-500 to-amber-400"></div>
                <div className="p-8">
                  {/* Card Header */}
      {/* <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Briefcase className="h-6 w-6 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">Industry Collaborations</h3>
                      <p className="text-gray-600">Partnerships with leading organizations</p>
                    </div>
                  </div>  */}

      {/* Industry Partners Grid */}
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                    {[
                      "Tech Innovation Alliance",
                      "Global Business Forum",
                      "AI Research Consortium",
                      "Digital Transformation Council",
                      "Sustainable Tech Initiative",
                      "Future Leaders Network",
                    ].map((partner, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.1 * index }}
                        className="flex items-center gap-3 bg-amber-50 p-3 rounded-lg"
                      >
                        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
                          <Handshake className="h-4 w-4 text-amber-600" />
                        </div>
                        <p className="text-sm font-medium text-gray-700">{partner}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          </div> */}

      {/* Accreditation & Recognition Card */}
      {/* <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12"
          >
            <Card className="bg-white shadow-lg border-0 overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-purple-500 via-amber-500 to-indigo-500"></div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                  <BadgeCheck className="h-5 w-5 text-purple-600" />
                  Accreditation & Recognition
                </h3> */}

      {/* Recognition Items Grid */}
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    {
                      icon: Shield,
                      title: "IEEE Computer Society",
                      description: "Technical co-sponsor providing quality assurance",
                    },
                    {
                      icon: Globe2,
                      title: "ACM Special Interest Group",
                      description: "In-cooperation status for enhanced visibility",
                    },
                    {
                      icon: Users,
                      title: "International Association for AI",
                      description: "Official endorsement from global AI community",
                    },
                    {
                      icon: Building2,
                      title: "Dubai Science Foundation",
                      description: "Local support from Dubai's premier scientific body",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.1 * index }}
                      className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-xl border border-purple-100"
                      whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)" }}
                    >
                      <div className="flex items-center gap-4 mb-3">
                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
                          <item.icon className="h-5 w-5 text-purple-600" />
                        </div>
                        <h4 className="font-semibold text-gray-800">{item.title}</h4>
                      </div>
                      <p className="text-sm text-gray-600 ml-14">{item.description}</p>
                    </motion.div>
                  ))}
                </div> */}

      {/* Note Box */}
      {/* <div className="mt-8 p-4 bg-purple-50 rounded-lg border border-purple-100">
                  <div className="flex items-start gap-3">
                    <div className="text-purple-600 mt-1 flex-shrink-0">
                      <Info className="h-5 w-5" />
                    </div>
                    <p className="text-gray-700 text-sm">
                      <span className="font-medium">Note:</span> The Golden Conference Awards proceedings will be
                      submitted for inclusion in leading indexing services including Scopus, Web of Science, and the ACM
                      Digital Library, subject to meeting their quality standards.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div> */}
      {/* </div></section> */}

      {/* Members Ship */}
      <section id="membership" className="py-24 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-purple-50 to-white">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-amber-100 text-amber-700 rounded-full text-sm font-semibold mb-4">
              Membership
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Membership & Representation</h2>

            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We welcome dedicated individuals and groups whose values resonate with our mission of excellence and innovation.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mt-6"></div>
          </motion.div>

          {/* Academic Membership Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >

            <h3 className="text-xl font-semibold text-center mb-10 flex items-center justify-center gap-2">
              <Award className="h-5 w-5 text-gray-500" />
              <span>Our Members</span>
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-10">
              {/* Replace with actual members logos */}
              {[
                { id: 1, name: "UN PRME Member", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl34uie7Ni9rWr33RsL8k2vKnYFVn524JQpA&s" },
                { id: 2, name: "UN PRME Member", logo: "https://kjsim.somaiya.edu/assets/simsr/img/aacsb/aacsb-logo-accredited-color.png" },
              ].map((membership) => (
                <motion.div
                  key={membership.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.05 * membership.id }}
                  whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)" }}
                  className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 h-32 flex items-center justify-center"
                >
                  <div className="flex flex-col items-center">
                    <img
                      src={membership.logo}
                      alt={`${membership.name} logo`}
                      className="h-16 object-contain mb-2"
                    />
                    <p className="font-medium text-gray-700 text-sm">{membership.name}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Nomination Section with Video Background */}
      <section
        id="nomination"
        className="relative py-32 w-full flex justify-center items-center text-center text-white overflow-hidden"
      >
        {/* Video background */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            id="nomination-video"
            autoPlay
            muted
            loop
            playsInline
            className="absolute min-w-full min-h-full object-cover"
            style={{ filter: "brightness(0.3)" }}
          >
            <source src="/images/nominate.mp4" type="video/mp4" />
          </video>

          {/* Fallback gradient overlay if video isn't loaded yet */}
          {!isVideoLoaded && (
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/95 via-indigo-900/95 to-purple-900/95"></div>
          )}
        </div>

        {/* AI-related particle effects overlay */}
        <div className="absolute inset-0 z-5 pointer-events-none">
          {/* Neural network nodes */}
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={`node-${i}`}
              className="absolute w-2 h-2 rounded-full bg-white/30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 2,
              }}
            />
          ))}

          {Array.from({ length: 10 }).map((_, i) => (
            <motion.div
              key={`stream-${i}`}
              className="absolute w-0.5 h-20 bg-gradient-to-b from-amber-400/40 to-transparent"
              style={{
                left: `${Math.random() * 100}%`,
                top: `-20px`,
              }}
              animate={{
                y: typeof window !== "undefined" ? [0, window.innerHeight] : [0, 1000], // fallback value
                opacity: [0.7, 0],
              }}
              transition={{
                duration: 2 + Math.random() * 3,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>

        {/* Enhanced gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/70 via-indigo-900/70 to-purple-900/70 z-10"></div>

        <motion.div
          className="relative z-20 px-6 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* AI-related icon */}
          <motion.div
            className="mb-6 flex justify-center"
            variants={floatingAnimation}
            initial="initial"
            animate="animate"
          >
            <div className="w-16 h-16 rounded-full bg-amber-500/20 flex items-center justify-center">
              <Brain className="h-8 w-8 text-amber-400" />
            </div>
          </motion.div>

          {/* Decorative element */}
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-8 rounded-full"></div>

          {/* Main content */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Nominate Now for the
            <span className="block text-amber-400 mt-2">Golden Conference Awards</span>
          </h2>

          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-200 leading-relaxed">
            Showcase your excellence and join the ranks of industry leaders. Get the recognition your achievements
            deserve.
          </p>

          {/* CTA Button with enhanced styling */}
          <Link href="/registration">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }} className="inline-block">
              <Button
                size="lg"
                className="group relative inline-flex items-center bg-amber-500 hover:bg-amber-600 text-black font-semibold px-10 py-6 rounded-lg text-lg transition-all duration-300"
              >
                <span>Submit Your Nomination</span>
                <svg
                  className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Button>
            </motion.div>
          </Link>

          {/* Optional: Add social proof or deadline */}
          {/* <p className="mt-8 text-gray-300 text-sm">
            Nominations close in 30 days • Previous winners include industry leaders
          </p> */}
        </motion.div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            {/* Decorative element */}
            <span className="inline-block px-4 py-1.5 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
              Got Questions?
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>

            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about The Golden Conference Awards
            </p>
          </motion.div>

          <motion.div
            className="max-w-3xl mx-auto space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={`item-${index + 1}`}
                  value={`item-${index + 1}`}
                  className="group bg-white border border-gray-200 rounded-xl mb-4 overflow-hidden shadow-sm hover:shadow-md transition-all duration-200"
                >
                  <AccordionTrigger className="flex items-center justify-between w-full text-left text-lg font-medium px-8 py-6 hover:bg-gray-50 transition-colors">
                    <span className="pr-8">{item.question}</span>
                  </AccordionTrigger>

                  <AccordionContent className="text-base bg-gray-50">
                    <div className="p-8 border-t border-gray-100">
                      <div className="flex gap-4">
                        <div className="w-1 bg-purple-500 rounded-full"></div>
                        <div className="text-gray-700 leading-relaxed">{item.answer}</div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          {/* Additional Help Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <p className="text-gray-600 mb-4">Still have questions? We&apos;re here to help!</p>
            <div className="flex justify-center gap-4 flex-wrap">
              <motion.a
                href="mailto:infogoldenconference@gmail.com"
                className="inline-flex items-center px-6 py-3 bg-purple-50 text-purple-700 rounded-lg hover:bg-purple-100 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Support
              </motion.a>
              <motion.a
                href="tel:+918283857170"
                className="inline-flex items-center px-6 py-3 bg-purple-50 text-purple-700 rounded-lg hover:bg-purple-100 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Us
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-24 bg-gradient-to-r from-purple-800 to-indigo-900 text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1920')] bg-cover bg-center"></div>
        </div>

        {/* AI-related particle effects */}
        <div className="absolute inset-0 z-5 pointer-events-none">
          {/* Digital circuit patterns */}
          <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="circuit-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 0,10 L 10,10 M 10,0 L 10,20" stroke="white" strokeWidth="0.5" fill="none" />
              <circle cx="10" cy="10" r="1.5" fill="white" />
            </pattern>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#circuit-pattern)" />
          </svg>

          {/* Floating tech icons */}
          {Array.from({ length: 5 }).map((_, i) => (
            <motion.div
              key={`tech-icon-${i}`}
              className="absolute"
              style={{
                left: `${10 + Math.random() * 80}%`,
                top: `${10 + Math.random() * 80}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 2,
              }}
            >
              <Cpu className="h-8 w-8 text-white/10" />
            </motion.div>
          ))}
        </div>

        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-amber-500/10 text-amber-300 rounded-full text-sm font-semibold mb-4">
              Contact Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
            <p className="text-xl max-w-2xl mx-auto text-white/80">
              Have questions about the Golden Conference Awards? Our team is here to help you.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
            >
              <h3 className="text-2xl font-bold mb-8 text-amber-300">Contact Information</h3>

              <div className="space-y-8">
                {[
                  {
                    icon: Mail,
                    title: "Email Us",
                    content: "infogoldenconference@gmail.com",
                    subtitle: "We'll respond within 24 hours",
                    href: "mailto:infogoldenconference@gmail.com",
                  },
                  {
                    icon: Phone,
                    title: "Call Us",
                    content: "+919815979159",
                    subtitle: "Mon-Fri from 9am to 6pm",
                    href: "tel:+919815979159",
                  },
                  {
                    icon: MapPin,
                    title: "Visit Us",
                    content: "A.O. SCO-19, Zirakpur-140603",
                    subtitle: "Chandigarh-Delhi Expressway",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start group">
                    <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-amber-500 transition-colors">
                      <item.icon className="h-6 w-6 text-amber-300 group-hover:text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1">{item.title}</h4>
                      {item.href ? (
                        <a href={item.href} className="text-amber-300 hover:text-amber-400 transition-colors">
                          {item.content}
                        </a>
                      ) : (
                        <p className="text-amber-300">{item.content}</p>
                      )}
                      <p className="text-white/60 mt-1">{item.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex space-x-4">
                {[
                  { icon: Facebook, href: "#" },
                  { icon: Twitter, href: "#" },
                  { icon: Instagram, href: "#" },
                  { icon: Youtube, href: "#" },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-amber-500 transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
            >
              <h3 className="text-2xl font-bold mb-8 text-amber-300">Send Us a Message</h3>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { id: "name", label: "Your Name", type: "text", placeholder: "John Doe" },
                    { id: "email", label: "Your Email", type: "email", placeholder: "john@example.com" },
                  ].map((field) => (
                    <div key={field.id}>
                      <label htmlFor={field.id} className="block text-sm font-medium mb-2 text-white/80">
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        id={field.id}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-white placeholder-white/30"
                        placeholder={field.placeholder}
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2 text-white/80">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-white placeholder-white/30"
                    placeholder="How can we help you?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-white/80">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-white placeholder-white/30 resize-none"
                    placeholder="Your message here..."
                  ></textarea>
                </div>

                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                  <Button className="w-full bg-amber-500 hover:bg-amber-600 text-black font-medium py-3 rounded-lg transition-all duration-300">
                    Send Message
                  </Button>
                </motion.div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}

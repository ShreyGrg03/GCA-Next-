"use client"

import { useState, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import {
  Calendar,
  FileCheck,
  Download,
  TrendingUp,
  Headphones,
  CreditCard,
  CalendarCheck,
  HelpCircle,
  Monitor,
  UserCircle,
  Globe,
  FileText,
  Upload,
  Search,
  CheckCircle,
  Info,
  Flag,
  DollarSign,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Award,
  Brain,
  Activity,
  Lock,
  Wifi,
  Atom,
  Leaf,
  UserPlus,
  BarChart,
  AlertTriangle,
  Code,
  Building,
  Sparkles,
  ArrowLeftRight,
  MessageCircle,
  Users,
  BarChart3,
  ChevronDown,
  ChevronUp,
} from "lucide-react"
import Link from "next/link"

export default function GCAConference() {
  const [showMoreTopics, setShowMoreTopics] = useState(false)
  const [showMoreAbout, setShowMoreAbout] = useState(false)
  const [activeTab, setActiveTab] = useState("overview");
  // Currency converter state
  const [amount, setAmount] = useState(1)
  const [fromCurrency, setFromCurrency] = useState("USD")
  const [toCurrency, setToCurrency] = useState("MYR")
  const [conversionResult, setConversionResult] = useState("1 USD = 4.65 MYR")

  // Scroll animations
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 300], [1, 0])
  const heroRef = useRef<HTMLDivElement>(null)

  const handleConvert = () => {
    // Actual conversion rates
    const rates = {
      USD: { USD: 1, MYR: 4.65, EUR: 0.92, GBP: 0.79, JPY: 150.2, CNY: 7.23, INR: 83.5 },
      EUR: { EUR: 1, USD: 1.09, MYR: 5.06, GBP: 0.86, JPY: 163.7, CNY: 7.88, INR: 91.0 },
      GBP: { GBP: 1, USD: 1.27, EUR: 1.16, MYR: 5.89, JPY: 190.3, CNY: 9.16, INR: 105.8 },
      MYR: { MYR: 1, USD: 0.215, EUR: 0.198, GBP: 0.17, JPY: 32.3, CNY: 1.55, INR: 17.96 },
      JPY: { JPY: 1, USD: 0.0067, EUR: 0.0061, GBP: 0.0053, MYR: 0.031, CNY: 0.048, INR: 0.56 },
      CNY: { CNY: 1, USD: 0.138, EUR: 0.127, GBP: 0.109, MYR: 0.645, JPY: 20.8, INR: 11.55 },
      INR: { INR: 1, USD: 0.012, EUR: 0.011, GBP: 0.0094, MYR: 0.056, JPY: 1.8, CNY: 0.087 },
    };

    if (fromCurrency === toCurrency) {
      setConversionResult(`${amount} ${fromCurrency} = ${amount} ${toCurrency}`);
      return;
    }

    const rate = rates[fromCurrency as keyof typeof rates][toCurrency as keyof (typeof rates)[keyof typeof rates]];
    const result = amount * rate;
    setConversionResult(`${amount} ${fromCurrency} = ${result.toFixed(2)} ${toCurrency}`);
  };

  return (
    <div className="min-h-screen bg-white font-['Poppins'] text-[#1e293b] overflow-x-hidden">
      {/* Hero Section - Full height with parallax effect */}
      <section id="home" ref={heroRef} className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/video/2.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/60"></div>
          <motion.div
            style={{ opacity }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white z-10"
          >
            <div className="flex flex-col items-center">
              <span className="text-sm mb-2">Scroll Down</span>
              <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
                <motion.div
                  className="w-1 h-2 bg-white rounded-full mt-2"
                  animate={{
                    y: [0, 12, 0],
                  }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 1.5,
                  }}
                />
              </div>
            </div>
          </motion.div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="flex justify-center">
              <div className="text-center max-w-3xl">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="mb-4"
                >
                  <Badge
                    variant="outline"
                    className="bg-white/10 backdrop-blur-sm text-white px-3 py-1 text-sm rounded-full mb-4"
                  >
                    November 27-29, 2025 | Malaysia
                  </Badge>
                </motion.div>
                <motion.h1
                  className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <span className="block">WELCOME TO</span>
                  <span className="bg-gradient-to-r from-[#2783ac] to-[#c753a5] bg-clip-text text-transparent">
                    GCA 2025
                  </span>
                </motion.h1>
                <motion.p
                  className="text-xl md:text-2xl text-white/90 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Golden Conference Awards on Artificial Intelligence and Applications
                </motion.p>
                <motion.div
                  className="flex flex-col sm:flex-row justify-center gap-4 mt-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-[#2783ac] to-[#c753a5] hover:opacity-90 border-0"
                    asChild
                  >
                    <Link href={'/registration'} className="w-full sm:w-auto">

                      Register Now <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/20" asChild>
                    <a href="#submission">Submit Paper</a>
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Section */}
      <section id="about" className="py-24 bg-gradient-to-b from-white to-primary-50 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-40 right-0 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
        <div className="absolute bottom-40 left-0 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="mb-4 text-sm font-semibold text-[#2783ac] bg-white shadow-sm border border-blue-100 uppercase tracking-wider px-4 py-1 rounded-full">
              November 27-29, 2025
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#2783ac] to-[#c753a5] bg-clip-text text-transparent mb-6">
              About The Conference
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#2783ac] to-[#c753a5] mx-auto rounded-full"></div>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main content */}
              <motion.div
                className="lg:col-span-2"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <Card className="shadow-lg border-0 bg-white/90 backdrop-blur-sm overflow-hidden h-full">
                  <div className="h-2 bg-gradient-to-r from-[#2783ac] to-[#c753a5]"></div>
                  <CardContent className="p-8">
                    <span className="inline-block mb-4 text-[#2783ac]">
                      <Sparkles className="h-8 w-8" />
                    </span>
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Golden Conference on Artificial Intelligence and Applications</h3>
                    <div className="prose prose-lg text-gray-700">
                      <p className="leading-relaxed">
                        We are pleased to announce the &quot;Golden Conference on Artificial Intelligence and Applications (GCA)&quot;,
                        scheduled to take place on <strong>27-29th November 2025</strong> in Malaysia, in collaboration with the Malaysia
                        University of Science and Technology.
                      </p>
                      {showMoreAbout ? (
                        <>
                          <p className="leading-relaxed">
                            GCA is a peer-reviewed international conference dedicated to bringing together scientists, academics,
                            researchers, and industry professionals to exchange ideas, share high-quality research findings, and
                            present the latest advancements in Artificial Intelligence, Control, Data Sciences, and related applications.
                          </p>
                          <p className="leading-relaxed">
                            The conference will offer a comprehensive technical program featuring multiple technical sessions
                            showcasing cutting-edge research and technological innovations.
                          </p>
                          <button
                            onClick={() => setShowMoreAbout(false)}
                            className="text-[#2783ac] font-medium flex items-center gap-1 hover:underline mt-2"
                          >
                            Read Less <ChevronUp className="h-4 w-4" />
                          </button>
                        </>
                      ) : (
                        <button
                          onClick={() => setShowMoreAbout(true)}
                          className="text-[#2783ac] font-medium flex items-center gap-1 hover:underline mt-2"
                        >
                          Read More <ChevronDown className="h-4 w-4" />
                        </button>
                      )}
                    </div>

                    <div className="mt-10 grid grid-cols-2 gap-4">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                          <Calendar className="h-5 w-5 text-[#2783ac]" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">November 27-29, 2025</p>
                          <p className="text-sm text-gray-500">Conference Dates</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                          <MapPin className="h-5 w-5 text-[#2783ac]" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">Malaysia</p>
                          <p className="text-sm text-gray-500">University of Science & Tech</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Conference highlights */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <Tabs defaultValue="highlights" className="h-full">
                  <TabsList className="grid w-full grid-cols-2 bg-blue-50">
                    <TabsTrigger value="highlights">Highlights</TabsTrigger>
                    <TabsTrigger value="topics">Topics</TabsTrigger>
                  </TabsList>

                  <TabsContent value="highlights" className="mt-0">
                    <Card className="shadow-lg border-0 bg-white/90 backdrop-blur-sm h-full">
                      <CardContent className="p-6 space-y-6">
                        <div className="pt-4">
                          <div className="flex items-start gap-4 mb-6">
                            <div className="h-10 w-10 rounded-full bg-gradient-to-r from-[#2783ac] to-[#5d76ac] flex items-center justify-center flex-shrink-0">
                              <Globe className="h-5 w-5 text-white" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-lg text-gray-800 mb-1">Hybrid Format</h4>
                              <p className="text-gray-600">
                                Present your papers either physically or online, ensuring global participation regardless of travel constraints.
                              </p>
                            </div>
                          </div>

                          <div className="flex items-start gap-4 mb-6">
                            <div className="h-10 w-10 rounded-full bg-gradient-to-r from-[#5d76ac] to-[#8a64a7] flex items-center justify-center flex-shrink-0">
                              <FileText className="h-5 w-5 text-white" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-lg text-gray-800 mb-1">Prestigious Publication</h4>
                              <p className="text-gray-600">
                                Accepted papers will be submitted for inclusion in Springer after rigorous peer review.
                              </p>
                            </div>
                          </div>

                          <div className="flex items-start gap-4 mb-6">
                            <div className="h-10 w-10 rounded-full bg-gradient-to-r from-[#8a64a7] to-[#c753a5] flex items-center justify-center flex-shrink-0">
                              <Users className="h-5 w-5 text-white" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-lg text-gray-800 mb-1">Global Networking</h4>
                              <p className="text-gray-600">
                                Connect with leading researchers, scientists, and industry professionals from around the world.
                              </p>
                            </div>
                          </div>

                          <div className="flex items-start gap-4">
                            <div className="h-10 w-10 rounded-full bg-gradient-to-r from-[#c753a5] to-[#2783ac] flex items-center justify-center flex-shrink-0">
                              <Award className="h-5 w-5 text-white" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-lg text-gray-800 mb-1">Best Paper Awards</h4>
                              <p className="text-gray-600">
                                Outstanding research papers will be recognized with special awards and certificates.
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="topics" className="mt-0">
                    <Card className="shadow-lg border-0 bg-white/90 backdrop-blur-sm h-full">
                      <CardContent className="p-6">
                        <div className="pt-4 grid grid-cols-1 gap-3">
                          {[
                            "Artificial Intelligence & Machine Learning",
                            "Neural Networks & Deep Learning",
                            "Computer Vision & Pattern Recognition",
                            "Natural Language Processing",
                            "Robotics & Automation",
                            "Big Data Analytics",
                            "IoT & Embedded AI Systems",
                            "AI Ethics & Governance",
                            "Computational Intelligence",
                            "Knowledge Representation & Reasoning"
                          ].map((topic, index) => (
                            <div key={index} className="flex items-center gap-3">
                              <div className="h-2 w-2 rounded-full bg-gradient-to-r from-[#2783ac] to-[#c753a5]"></div>
                              <p className="text-gray-700">{topic}</p>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </motion.div>
            </div>

            {/* Call to action */}
            <motion.div
              className="mt-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Card className="shadow-lg border-0 bg-gradient-to-r from-[#2783ac] to-[#c753a5] text-white p-8">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-bold mb-4">Join Us in Malaysia</h3>
                  <p className="text-lg mb-6 max-w-2xl mx-auto">
                    Be part of this exciting opportunity to share your research, gain valuable insights,
                    and build lasting collaborations with peers from around the world.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <a
                      href="#registration"
                      className="px-6 py-3 bg-white text-[#2783ac] font-medium rounded-md hover:bg-blue-50 transition-colors shadow-lg"
                    >
                      Register Now
                    </a>
                    <a
                      href="#submission"
                      className="px-6 py-3 bg-white/20 text-white font-medium rounded-md hover:bg-white/30 transition-colors border border-white/30"
                    >
                      Submit Paper
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Conference Topics */}
      <section id="topics" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="text-sm font-medium text-[#2783ac] bg-primary-50 uppercase tracking-wider px-3 py-1">
              Explore
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2783ac] relative inline-block mt-2 mb-6 after:content-[''] after:absolute after:bottom-[-0.5rem] after:left-1/2 after:-translate-x-1/2 after:w-[60px] after:h-[3px] after:bg-gradient-to-r after:from-[#2783ac] after:to-[#c753a5]">
              Conference Topics
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
              Discover the cutting-edge research areas covered in our conference
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Brain className="h-8 w-8 text-white" />,
                title: "Demystifying Generative AI",
                topics: "From Foundation Models to Real-World Impact",
                description:
                  "Explore the latest advancements in generative AI models and their practical applications across industries.",
              },
              {
                icon: <Activity className="h-8 w-8 text-white" />,
                title: "AI-Powered Healthcare",
                topics: "Innovations in Diagnosis, Treatment, and Bioinformatics",
                description:
                  "Discover how AI is revolutionizing healthcare through improved diagnostics, personalized treatments, and biological data analysis.",
              },
              {
                icon: <Lock className="h-8 w-8 text-white" />,
                title: "Ethical and Explainable AI",
                topics: "Building Trust in Intelligent Systems",
                description:
                  "Addressing the challenges of creating transparent, fair, and accountable AI systems that users can trust.",
              },
              {
                icon: <Wifi className="h-8 w-8 text-white" />,
                title: "The Rise of AIoT",
                topics: "Intelligent Devices in Smart Environments",
                description:
                  "Examining the convergence of AI and IoT technologies to create smarter, more responsive environments.",
              },
              {
                icon: <Atom className="h-8 w-8 text-white" />,
                title: "Quantum Machine Learning",
                topics: "Bridging AI and Quantum Computing",
                description:
                  "Investigating the intersection of quantum computing and machine learning for solving complex problems.",
              },
              {
                icon: <Leaf className="h-8 w-8 text-white" />,
                title: "AI for Climate Action",
                topics: "Sustainable Solutions through Smart Intelligence",
                description:
                  "Leveraging AI to address climate change through improved modeling, prediction, and resource optimization.",
              },
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <Card className="h-full overflow-hidden border-none shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <div className="h-16 bg-gradient-to-r from-[#2783ac] to-[#c753a5] flex items-center px-6">
                    <div className="h-10 w-10 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      {category.icon}
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold text-gray-800">{category.title}</CardTitle>
                    <CardDescription className="text-[#2783ac] font-medium">{category.topics}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{category.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              onClick={() => setShowMoreTopics(!showMoreTopics)}
              variant="outline"
              className="border-[#2783ac] text-[#2783ac] hover:bg-primary-50"
            >
              {showMoreTopics ? "Hide Topics" : "View All Topics"}
            </Button>
          </div>

          {showMoreTopics && (
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
            >
              {[
                {
                  icon: <UserPlus className="h-8 w-8 text-white" />,
                  title: "Human-AI Collaboration",
                  topics: "Designing the Future of Work and Creativity",
                  description:
                    "Exploring how humans and AI can work together to enhance productivity, creativity, and problem-solving.",
                },
                {
                  icon: <BarChart className="h-8 w-8 text-white" />,
                  title: "AI in Business Intelligence",
                  topics: "Predictive Analytics for Smarter Decisions",
                  description:
                    "Using AI to transform business data into actionable insights for strategic decision-making.",
                },
                {
                  icon: <AlertTriangle className="h-8 w-8 text-white" />,
                  title: "Securing the Future",
                  topics: "AI in Cybersecurity and Threat Detection",
                  description:
                    "Implementing AI systems to identify, prevent, and respond to evolving cybersecurity threats.",
                },
                {
                  icon: <Code className="h-8 w-8 text-white" />,
                  title: "Low-Code and AutoML",
                  topics: "Accelerating AI Adoption Across Industries",
                  description:
                    "Democratizing AI development through accessible tools that require minimal coding expertise.",
                },
              ].map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <Card className="h-full overflow-hidden border-none shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                    <div className="h-16 bg-gradient-to-r from-[#2783ac] to-[#c753a5] flex items-center px-6">
                      <div className="h-10 w-10 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        {category.icon}
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl font-semibold text-gray-800">{category.title}</CardTitle>
                      <CardDescription className="text-[#2783ac] font-medium">{category.topics}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{category.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* Venue Section */}
      <section id="venue" className="py-20 bg-primary-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-medium text-[#2783ac] bg-white rounded-full uppercase tracking-wider px-4 py-1.5 shadow-sm">
              Location
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#2783ac] mt-4 mb-6">
              Venue Details
            </h2>
            <div className="relative mx-auto w-24 h-1 mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-[#2783ac] to-[#c753a5] rounded-full"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-xl overflow-hidden shadow-2xl transform transition duration-300 hover:scale-105">
              <div className="relative aspect-video rounded-xl overflow-hidden">
                {/* YouTube Video Embed */}
                <iframe
                  src="https://www.youtube.com/embed/EVG-IH8cMYs?si=9hdKwEA4baqFQ_kj"
                  title="Experience Malaysia"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                ></iframe>
              </div>
              <div className="bg-white p-4">
                <h3 className="text-xl font-bold text-gray-800">Discover Malaysia</h3>
                <p className="text-gray-600">A vibrant blend of cultures and landscapes</p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-800 flex items-center">
                <span className="inline-block w-2 h-8 bg-[#c753a5] mr-3 rounded-full"></span>
                Explore Malaysia
              </h3>

              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                {/* Tab Navigation */}
                <div className="flex bg-gray-50">
                  {[
                    { id: "overview", label: "Overview" },
                    { id: "attractions", label: "Attractions" },
                    { id: "tips", label: "Travel Tips" }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex-1 py-4 px-6 text-center font-medium transition-all duration-200 ${activeTab === tab.id
                        ? "text-[#2783ac] border-b-2 border-[#2783ac] bg-white"
                        : "text-gray-600 hover:text-[#2783ac] hover:bg-white/50"
                        }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* Tab Content */}
                <div className="p-6">
                  {/* Overview Tab */}
                  {activeTab === "overview" && (
                    <div className="space-y-6">
                      <div className="flex gap-4 items-start p-4 bg-blue-50 rounded-lg">
                        <div className="w-12 h-12 flex-shrink-0 rounded-full bg-blue-100 flex items-center justify-center text-[#2783ac]">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-lg font-medium text-gray-800 mb-1">Tropical Climate</h4>
                          <p className="text-gray-600">
                            Enjoy warm temperatures (25–35°C) year-round with two distinct monsoon seasons:
                            Southwest (May–September) bringing drier weather and Northeast (November–March)
                            bringing more rainfall.
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4 items-start p-4 bg-green-50 rounded-lg">
                        <div className="w-12 h-12 flex-shrink-0 rounded-full bg-green-100 flex items-center justify-center text-[#2783ac]">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-lg font-medium text-gray-800 mb-1">Geography</h4>
                          <p className="text-gray-600">
                            Malaysia spans two regions separated by the South China Sea: Peninsular Malaysia
                            and East Malaysia (Borneo), featuring dense rainforests, beaches, and Mount Kinabalu.
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4 items-start p-4 bg-purple-50 rounded-lg">
                        <div className="w-12 h-12 flex-shrink-0 rounded-full bg-purple-100 flex items-center justify-center text-[#2783ac]">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-lg font-medium text-gray-800 mb-1">Cultural Diversity</h4>
                          <p className="text-gray-600">
                            Experience a rich blend of Malay, Chinese, Indian, and indigenous cultures,
                            creating a unique tapestry reflected in the food, festivals, and local traditions.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Attractions Tab */}
                  {activeTab === "attractions" && (
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <div className="font-medium text-lg mb-2 text-[#2783ac] flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
                            </svg>
                            Petronas Twin Towers
                          </div>
                          <p className="text-gray-600 text-sm">Iconic 452m tall skyscrapers with observation deck and shopping mall.</p>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-lg">
                          <div className="font-medium text-lg mb-2 text-[#2783ac] flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                            </svg>
                            Batu Caves
                          </div>
                          <p className="text-gray-600 text-sm">Hindu temple complex with 272 colorful steps and golden statue.</p>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-lg">
                          <div className="font-medium text-lg mb-2 text-[#2783ac] flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" />
                            </svg>
                            George Town & Malacca
                          </div>
                          <p className="text-gray-600 text-sm">UNESCO World Heritage sites with colonial architecture and rich history.</p>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-lg">
                          <div className="font-medium text-lg mb-2 text-[#2783ac] flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M6.115 5.19l.319 1.913A6 6 0 008.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 002.288-4.042 1.087 1.087 0 00-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 01-.98-.314l-.295-.295a1.125 1.125 0 010-1.591l.13-.132a1.125 1.125 0 011.3-.21l.603.302a.809.809 0 001.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 001.528-1.732l.146-.292M6.115 5.19A9 9 0 1017.18 4.64M6.115 5.19A8.965 8.965 0 0112 3c1.929 0 3.716.607 5.18 1.64" />
                            </svg>
                            Langkawi Island
                          </div>
                          <p className="text-gray-600 text-sm">Stunning archipelago with beaches, sky bridge, and duty-free shopping.</p>
                        </div>
                      </div>

                      <div className="mt-4 bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg">
                        <h4 className="font-medium text-lg mb-2 text-gray-800">National Parks</h4>
                        <div className="flex flex-wrap gap-2">
                          <span className="bg-white px-3 py-1 rounded-full text-sm text-gray-700">Taman Negara</span>
                          <span className="bg-white px-3 py-1 rounded-full text-sm text-gray-700">Kinabalu Park</span>
                          <span className="bg-white px-3 py-1 rounded-full text-sm text-gray-700">Gunung Mulu</span>
                          <span className="bg-white px-3 py-1 rounded-full text-sm text-gray-700">Bako National Park</span>
                          <span className="bg-white px-3 py-1 rounded-full text-sm text-gray-700">Endau-Rompin</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Travel Tips Tab */}
                  {activeTab === "tips" && (
                    <div className="space-y-4">
                      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
                        <h4 className="font-medium text-gray-800 mb-2">Best Time to Visit</h4>
                        <p className="text-gray-600 text-sm">
                          December to February offers the best overall weather conditions. For the
                          east coast (including Perhentian Islands), visit between March and October
                          to avoid the monsoon season.
                        </p>
                      </div>

                      <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg">
                        <h4 className="font-medium text-gray-800 mb-2">Local Transportation</h4>
                        <p className="text-gray-600 text-sm">
                          Use the efficient MRT and LRT systems in Kuala Lumpur. For intercity travel,
                          consider buses or the ETS high-speed train. Grab (rideshare app) is widely available
                          and often cheaper than regular taxis.
                        </p>
                      </div>

                      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
                        <h4 className="font-medium text-gray-800 mb-2">Cultural Etiquette</h4>
                        <p className="text-gray-600 text-sm">
                          Remove shoes before entering homes and places of worship. When visiting mosques,
                          dress modestly with covered shoulders and knees. Use your right hand for eating and
                          giving/receiving items.
                        </p>
                      </div>

                      <div className="bg-purple-50 border-l-4 border-purple-400 p-4 rounded-r-lg">
                        <h4 className="font-medium text-gray-800 mb-2">Must-Try Foods</h4>
                        <div className="grid grid-cols-2 gap-2 mt-2">
                          <div className="bg-white p-2 rounded text-sm text-gray-700">🍲 Nasi Lemak</div>
                          <div className="bg-white p-2 rounded text-sm text-gray-700">🍜 Laksa</div>
                          <div className="bg-white p-2 rounded text-sm text-gray-700">🥘 Rendang</div>
                          <div className="bg-white p-2 rounded text-sm text-gray-700">🥗 Rojak</div>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="mt-6 flex">
                    <button className="flex-1 py-3 bg-gradient-to-r from-[#2783ac] to-[#c753a5] text-white font-medium rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center">
                      Book Your Trip Now
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section id="registration" className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="text-sm font-medium bg-[#2783ac]/10 text-[#2783ac] uppercase tracking-wider px-4 py-1.5 rounded-full">
              Join Us
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 bg-gradient-to-r from-[#2783ac] to-[#c753a5] bg-clip-text text-transparent">
              Registration
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#2783ac] to-[#c753a5] mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Secure your spot at the premier AI conference of 2025
            </p>
          </motion.div>

          <div className="flex justify-center">
            <div className="w-full max-w-4xl">
              {/* Pricing Table Card */}
              <motion.div
                className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="p-6 bg-gradient-to-r from-[#2783ac]/10 to-[#c753a5]/10">
                  <h3 className="text-2xl font-bold text-gray-800">Registration Options</h3>
                  <p className="text-gray-600 mt-1">Choose the registration type that fits your needs</p>
                </div>

                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-gradient-to-r from-[#2783ac] to-[#c753a5]">
                        <TableHead className="text-white font-semibold py-4 w-1/3">Registration Type</TableHead>
                        <TableHead className="text-white font-semibold text-center">
                          <div className="flex flex-col items-center">
                            <span>Early Payment</span>
                            <span className="text-xs font-normal mt-1 bg-white/20 px-2 py-0.5 rounded-full">Until Sep 15</span>
                          </div>
                        </TableHead>
                        <TableHead className="text-white font-semibold text-center">
                          <div className="flex flex-col items-center">
                            <span>Late Payment</span>
                            <span className="text-xs font-normal mt-1 bg-white/20 px-2 py-0.5 rounded-full">After Sep 15</span>
                          </div>
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow className="hover:bg-[#2783ac]/5 transition-colors">
                        <TableCell className="font-medium text-gray-800">
                          <div className="flex items-center gap-2">
                            <UserCircle className="h-5 w-5 text-[#2783ac]" />
                            <span>Single Author</span>
                          </div>
                        </TableCell>
                        <TableCell className="text-center font-medium">
                          <Badge variant="outline" className="bg-[#2783ac]/5 text-[#2783ac] border-[#2783ac]/20 px-3 py-1">
                            $600 USD
                          </Badge>
                        </TableCell>
                        <TableCell className="text-center font-medium">
                          <Badge variant="outline" className="bg-[#c753a5]/5 text-[#c753a5] border-[#c753a5]/20 px-3 py-1">
                            $700 USD
                          </Badge>
                        </TableCell>
                      </TableRow>

                      <TableRow className="hover:bg-[#2783ac]/5 transition-colors">
                        <TableCell className="font-medium text-gray-800">
                          <div className="flex items-center gap-2">
                            <Monitor className="h-5 w-5 text-[#2783ac]" />
                            <span>Virtual (Remote presentation)</span>
                          </div>
                        </TableCell>
                        <TableCell className="text-center font-medium">
                          <Badge variant="outline" className="bg-[#2783ac]/5 text-[#2783ac] border-[#2783ac]/20 px-3 py-1">
                            $500 USD
                          </Badge>
                        </TableCell>
                        <TableCell className="text-center font-medium">
                          <Badge variant="outline" className="bg-[#c753a5]/5 text-[#c753a5] border-[#c753a5]/20 px-3 py-1">
                            $600 USD
                          </Badge>
                        </TableCell>
                      </TableRow>

                      <TableRow className="hover:bg-[#2783ac]/5 transition-colors">
                        <TableCell className="font-medium text-gray-800">
                          <div className="flex items-center gap-2">
                            <FileText className="h-5 w-5 text-[#2783ac]" />
                            <span>Registration fees for 2nd paper</span>
                          </div>
                        </TableCell>
                        <TableCell className="text-center font-medium">
                          <Badge variant="outline" className="bg-[#2783ac]/5 text-[#2783ac] border-[#2783ac]/20 px-3 py-1">
                            $350 USD
                          </Badge>
                        </TableCell>
                        <TableCell className="text-center font-medium">
                          <Badge variant="outline" className="bg-[#c753a5]/5 text-[#c753a5] border-[#c753a5]/20 px-3 py-1">
                            $400 USD
                          </Badge>
                        </TableCell>
                      </TableRow>

                      <TableRow className="hover:bg-[#2783ac]/5 transition-colors">
                        <TableCell className="font-medium text-gray-800">
                          <div className="flex items-center gap-2">
                            <Headphones className="h-5 w-5 text-[#2783ac]" />
                            <span>Listener (physical participant)</span>
                          </div>
                        </TableCell>
                        <TableCell className="text-center font-medium">
                          <Badge variant="outline" className="bg-[#2783ac]/5 text-[#2783ac] border-[#2783ac]/20 px-3 py-1">
                            $300 USD
                          </Badge>
                        </TableCell>
                        <TableCell className="text-center font-medium">
                          <Badge variant="outline" className="bg-[#c753a5]/5 text-[#c753a5] border-[#c753a5]/20 px-3 py-1">
                            $350 USD
                          </Badge>
                        </TableCell>
                      </TableRow>

                      <TableRow className="hover:bg-[#2783ac]/5 transition-colors">
                        <TableCell className="font-medium text-gray-800">
                          <div className="flex items-center gap-2">
                            <FileText className="h-5 w-5 text-[#2783ac]" />
                            <span>Extra pages fees (after 6 pages)</span>
                          </div>
                        </TableCell>
                        <TableCell colSpan={2} className="text-center font-medium">
                          <Badge variant="outline" className="bg-gradient-to-r from-[#2783ac]/5 to-[#c753a5]/5 text-gray-700 border-[#2783ac]/20 px-3 py-1">
                            $50 USD per page
                          </Badge>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </motion.div>

              {/* Registration Info and CTA */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <motion.div
                  className="md:col-span-2 bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-[#2783ac]/10 p-3 rounded-lg">
                      <Info className="h-6 w-6 text-[#2783ac]" />
                    </div>
                    <div>
                      <h5 className="text-xl font-bold mb-4 text-gray-800">Important Information</h5>
                      <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                          <div className="bg-[#2783ac]/10 p-1.5 rounded-md mt-0.5">
                            <Calendar className="h-4 w-4 text-[#2783ac]" />
                          </div>
                          <div>
                            <p className="font-medium text-gray-800">Early Registration Deadline</p>
                            <p className="text-gray-600">September 15, 2025</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="bg-[#2783ac]/10 p-1.5 rounded-md mt-0.5">
                            <CheckCircle className="h-4 w-4 text-[#2783ac]" />
                          </div>
                          <div>
                            <p className="font-medium text-gray-800">What&apos;s Included</p>
                            <p className="text-gray-600">Access to all sessions, conference materials, coffee breaks, and lunches</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="bg-[#2783ac]/10 p-1.5 rounded-md mt-0.5">
                            <CreditCard className="h-4 w-4 text-[#2783ac]" />
                          </div>
                          <div>
                            <p className="font-medium text-gray-800">Payment Methods</p>
                            <p className="text-gray-600">Credit Card, PayPal, or Bank Transfer</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="bg-[#2783ac]/10 p-1.5 rounded-md mt-0.5">
                            <Mail className="h-4 w-4 text-[#2783ac]" />
                          </div>
                          <div>
                            <p className="font-medium text-gray-800">Questions?</p>
                            <p className="text-gray-600">
                              Contact us at{" "}
                              <a href="mailto:registration@gca2025.org" className="text-[#2783ac] font-medium hover:underline">
                                registration@gca2025.org
                              </a>
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="bg-gradient-to-br from-[#2783ac] to-[#c753a5] rounded-2xl shadow-lg p-6 text-white flex flex-col justify-between"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <div>
                    <h5 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <CalendarCheck className="h-5 w-5" /> Register Now
                    </h5>
                    <p className="mb-6">
                      Join thousands of AI researchers, practitioners, and enthusiasts from around the world.
                    </p>
                    <div className="bg-white/20 rounded-lg p-4 mb-6">
                      <p className="font-medium">Early bird ends in:</p>
                      <div className="grid grid-cols-4 gap-2 mt-3">
                        <div className="bg-white/20 rounded p-2 text-center">
                          <div className="text-2xl font-bold">45</div>
                          <div className="text-xs">Days</div>
                        </div>
                        <div className="bg-white/20 rounded p-2 text-center">
                          <div className="text-2xl font-bold">12</div>
                          <div className="text-xs">Hours</div>
                        </div>
                        <div className="bg-white/20 rounded p-2 text-center">
                          <div className="text-2xl font-bold">30</div>
                          <div className="text-xs">Mins</div>
                        </div>
                        <div className="bg-white/20 rounded p-2 text-center">
                          <div className="text-2xl font-bold">05</div>
                          <div className="text-xs">Secs</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Button size="lg" className="w-full bg-white text-[#2783ac] hover:bg-white/90 font-bold h-14">
                    Register Now <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </motion.div>
              </div>

              {/* FAQ Section */}
              <motion.div
                className="mt-12 bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                  <HelpCircle className="h-6 w-6 text-[#2783ac]" /> Frequently Asked Questions
                </h3>

                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-lg font-medium text-gray-800">
                      What is included in the registration fee?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      Your registration fee includes access to all conference sessions, workshops, keynotes, conference materials, coffee breaks, and lunches during the event days. Networking events are also included.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-lg font-medium text-gray-800">
                      Can I cancel my registration?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      Cancellations received before August 15, 2025 will receive a full refund minus a $50 processing fee. Cancellations between August 16 and September 15 will receive a 50% refund. No refunds will be issued after September 15, 2025.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-lg font-medium text-gray-800">
                      Is there a student discount available?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      Yes, full-time students can receive a 30% discount on all registration types. Please email a copy of your valid student ID to registration@gca2025.org to receive your discount code.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Committee Section */}
      <section id="committee" className="py-20 bg-primary-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* <Badge className="text-sm font-medium text-[#2783ac] bg-white uppercase tracking-wider px-3 py-1">
              Leadership
            </Badge> */}
            <h2 className="text-3xl md:text-4xl font-bold text-[#2783ac] relative inline-block mt-2 mb-6 after:content-[''] after:absolute after:bottom-[-0.5rem] after:left-1/2 after:-translate-x-1/2 after:w-[60px] after:h-[3px] after:bg-gradient-to-r after:from-[#2783ac] after:to-[#c753a5]">
              Committees
            </h2>
          </motion.div>
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="executive" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="executive">Executive Committee</TabsTrigger>
                <TabsTrigger value="scientific">Scientific Committee</TabsTrigger>
              </TabsList>
              <TabsContent value="executive">
                <div className="space-y-6">
                  {[
                    {
                      name: "Gurpreet Singh Selopal",
                      affiliation: "Assistant Professor, Dalhousie University",
                      avatar: "GS",
                    },
                    {
                      name: "Kuljeet Singh Garewal",
                      affiliation: "Assistant Professor, University of Prince Edward Island, Canada",
                      avatar: "KG",
                    },
                    {
                      name: "Sundeep Singh",
                      affiliation: "Assistant Professor, University of Prince Edward Island, Canada",
                      avatar: "SS",
                    },
                  ].map((member, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                    >
                      <Card className="transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                        <CardHeader className="pb-2">
                          <div className="flex items-center gap-4">
                            <Avatar className="h-12 w-12 border-2 border-[#2783ac]/20">
                              <AvatarFallback className="bg-gradient-to-r from-[#2783ac] to-[#c753a5] text-white">
                                {member.avatar}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <CardTitle className="text-xl font-semibold text-gray-800">{member.name}</CardTitle>
                              <CardDescription className="text-gray-600">{member.affiliation}</CardDescription>
                            </div>
                          </div>
                        </CardHeader>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="scientific">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    {
                      name: "Md Shamim Hossain",
                      affiliation:
                        "Department of Marketing, Hajee Mohammad Danesh Science and Technology University, Dinajpur, Bangladesh",
                      avatar: "MH",
                    },
                    {
                      name: "Wadii Boulila",
                      affiliation:
                        "Riadi Laboratory, National School of Computer Sciences, University of Manouba, Tunisia",
                      avatar: "WB",
                    },
                    {
                      name: "Hans-Jürgen Federsel",
                      affiliation: "Ph.D, Assoc Professor Senior Advisor, Research Institute, Sweden",
                      avatar: "HF",
                    },
                    {
                      name: "Prof Dinesh Kumar",
                      affiliation: "Bangor College China, CSUFT University China",
                      avatar: "DK",
                    },
                    {
                      name: "Prof Palani Balaya",
                      affiliation: "National University of Singapore, SINGAPORE",
                      avatar: "PB",
                    },
                    {
                      name: "Prof Tien Anh Tran",
                      affiliation: "Seoul National University, South Korea",
                      avatar: "TT",
                    },
                    {
                      name: "Dr. Nem Singh",
                      affiliation: "Research Professor, Korea University, Seoul",
                      avatar: "NS",
                    },
                    {
                      name: "Dr. Akbar Ahmad",
                      affiliation: "MI College, Maldives",
                      avatar: "AA",
                    },
                    {
                      name: "Dr Kamarulzaman Kamarudin",
                      affiliation: "Universiti Malaysia Perlis (UniMAP), MALAYSIA",
                      avatar: "KK",
                    },
                    {
                      name: "Dr. Thanh-Phong Dao",
                      affiliation: "Institute for Computational Science Ton Duc Thang University, Vietnam",
                      avatar: "TD",
                    },
                    {
                      name: "Associate Professor Andriy Olenko",
                      affiliation: "La Trobe University, Australia",
                      avatar: "AO",
                    },
                    {
                      name: "Prof. Ghanshyam Singh",
                      affiliation: "University of Johannesburg, South Africa",
                      avatar: "GS",
                    },
                  ].map((member, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.05 * index }}
                    >
                      <HoverCard>
                        <HoverCardTrigger asChild>
                          <Card className="transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer">
                            <CardHeader className="pb-2">
                              <div className="flex items-center gap-3">
                                <Avatar className="h-10 w-10 border-2 border-[#2783ac]/20">
                                  <AvatarFallback className="bg-gradient-to-r from-[#2783ac] to-[#c753a5] text-white text-xs">
                                    {member.avatar}
                                  </AvatarFallback>
                                </Avatar>
                                <div>
                                  <CardTitle className="text-base font-semibold text-gray-800">{member.name}</CardTitle>
                                </div>
                              </div>
                            </CardHeader>
                          </Card>
                        </HoverCardTrigger>
                        <HoverCardContent className="w-80">
                          <div className="flex justify-between space-x-4">
                            <Avatar className="h-12 w-12">
                              <AvatarFallback className="bg-gradient-to-r from-[#2783ac] to-[#c753a5] text-white">
                                {member.avatar}
                              </AvatarFallback>
                            </Avatar>
                            <div className="space-y-1">
                              <h4 className="text-sm font-semibold">{member.name}</h4>
                              <p className="text-sm text-gray-600">{member.affiliation}</p>
                              <div className="flex items-center pt-2">
                                <Building className="h-3.5 w-3.5 text-[#2783ac] mr-1" />
                                <span className="text-xs text-gray-500">Committee Member</span>
                              </div>
                            </div>
                          </div>
                        </HoverCardContent>
                      </HoverCard>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-8 text-center">
                  <p className="text-gray-600 italic">
                    And many more distinguished professors and researchers from universities and research institutions
                    worldwide.
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Publication Section */}
      <section id="publication" className="py-24 bg-gradient-to-b from-white to-sky-50">
        <div className="container mx-auto px-4">
          {/* Header with improved animation and styling */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >

            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#2783ac] to-[#c753a5] bg-clip-text text-transparent relative inline-block mt-4 mb-6">
              Publication
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-[#2783ac] to-[#c753a5] rounded-full mx-auto"></div>
            <p className="text-gray-600 max-w-2xl mx-auto mt-6 text-lg">
              Submit your research and join the academic community in advancing knowledge in the field
            </p>
          </motion.div>

          <div className="flex justify-center">
            <div className="w-full max-w-5xl">
              {/* Publication Cards with improved hover effects */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <Card className="h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border-0 shadow-md overflow-hidden group bg-white rounded-xl">
                    <div className="h-2 bg-gradient-to-r from-[#2783ac] to-[#2783ac] group-hover:from-[#2783ac] group-hover:to-[#c753a5]"></div>
                    <CardHeader className="pt-8">
                      <div className="flex justify-center mb-6">
                        <div className="h-20 w-20 rounded-full bg-blue-50 flex items-center justify-center transition-transform group-hover:scale-110">
                          <FileText className="h-9 w-9 text-[#2783ac]" />
                        </div>
                      </div>
                      <CardTitle className="text-2xl font-bold text-center text-gray-800">
                        Book Publication
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pb-8">
                      <p className="mb-4 text-gray-600 text-center">
                        All accepted papers will be submitted for inclusion in Springer&apos;s Lecture Notes in Computer
                        Science (LNCS) series, subject to meeting Springer&apos;s scope and quality standards.
                      </p>
                      <p className="text-gray-600 text-center font-medium">
                        Papers must be original and not previously published or currently under review elsewhere.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <Card className="h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border-0 shadow-md overflow-hidden group bg-white rounded-xl">
                    <div className="h-2 bg-gradient-to-r from-[#c753a5] to-[#c753a5] group-hover:from-[#2783ac] group-hover:to-[#c753a5]"></div>
                    <CardHeader className="pt-8">
                      <div className="flex justify-center mb-6">
                        <div className="h-20 w-20 rounded-full bg-pink-50 flex items-center justify-center transition-transform group-hover:scale-110">
                          <Award className="h-9 w-9 text-[#c753a5]" />
                        </div>
                      </div>
                      <CardTitle className="text-2xl font-bold text-center text-gray-800">
                        Journal Publication
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pb-8">
                      <p className="mb-4 text-gray-600 text-center">
                        Selected high-quality papers will be invited for extension and submission to special issues of
                        reputed international journals indexed in SCI, Scopus, and other major databases.
                      </p>
                      <p className="text-gray-600 text-center font-medium">
                        Extended versions must contain at least 30% new material compared to the conference paper.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>

              {/* Guidelines section with improved styling */}
              <motion.div
                className="mt-16 bg-white rounded-2xl p-10 shadow-lg border border-gray-100"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                <h3 className="text-2xl font-bold mb-8 text-gray-800 flex items-center">
                  <FileCheck className="h-7 w-7 mr-3 text-[#2783ac]" />
                  Submission Guidelines
                </h3>
                <div className="grid md:grid-cols-2 gap-6 mb-10">
                  {[
                    {
                      title: "Format & Template",
                      desc: "Papers should be written in English and formatted according to the Springer LNCS template."
                    },
                    {
                      title: "Length Requirements",
                      desc: "The length of the paper should be between 10-15 pages including figures and references."
                    },
                    {
                      title: "Review Process",
                      desc: "All papers will undergo a rigorous double-blind peer review process."
                    },
                    {
                      title: "Presentation",
                      desc: "At least one author of each accepted paper must register for the conference and present the paper."
                    }
                  ].map((guideline, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-100">
                      <div className="rounded-full bg-blue-50 p-2 mt-1">
                        <CheckCircle className="h-5 w-5 text-[#2783ac]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">{guideline.title}</h4>
                        <p className="text-gray-600">{guideline.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row justify-center gap-5 mt-10">
                  <Button className="bg-gradient-to-r from-[#2783ac] to-[#2783ac] hover:from-[#2783ac] hover:to-[#c753a5] text-white font-medium px-6 py-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                    Download Template <Download className="ml-2 h-5 w-5" />
                  </Button>
                  <Button variant="outline" className="border-2 border-[#2783ac] text-[#2783ac] hover:bg-blue-50 font-medium px-6 py-6 rounded-xl shadow-sm">
                    Submit Paper <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </motion.div>

              {/* Added Important Dates section */}
              <motion.div
                className="mt-12 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <div className="inline-flex items-center gap-2 text-[#2783ac] font-medium mb-2">
                  <Calendar className="h-5 w-5" />
                  <span>Important Dates</span>
                </div>
                <div className="grid md:grid-cols-3 gap-4 mt-6">
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                    <h4 className="font-bold text-gray-800">Paper Submission</h4>
                    <p className="text-[#c753a5] font-medium">June 15, 2025</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                    <h4 className="font-bold text-gray-800">Notification</h4>
                    <p className="text-[#c753a5] font-medium">July 30, 2025</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                    <h4 className="font-bold text-gray-800">Camera Ready</h4>
                    <p className="text-[#c753a5] font-medium">August 15, 2025</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Submission Section */}
      <section id="submission" className="py-20 bg-gradient-to-b from-primary-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* <Badge className="text-sm font-medium text-[#2783ac] bg-white uppercase tracking-wider px-3 py-1">
              Process
            </Badge> */}
            <h2 className="text-3xl md:text-4xl font-bold text-[#2783ac] relative inline-block mt-2 mb-6 after:content-[''] after:absolute after:bottom-[-0.5rem] after:left-1/2 after:-translate-x-1/2 after:w-[60px] after:h-[3px] after:bg-gradient-to-r after:from-[#2783ac] after:to-[#c753a5]">
              Paper Submission
            </h2>
          </motion.div>
          <div className="flex justify-center py-12 px-4">
            <div className="w-full max-w-3xl">
              <div className="relative">
                {/* Process Timeline Section */}
                <div className="relative mb-24">
                  {/* Timeline line now has a specific height and stops at the last process item */}
                  <div
                    className="absolute top-7 left-5 md:left-6 w-1 bg-gradient-to-b from-[#2783ac] to-[#c753a5]"
                    style={{ height: 'calc(100% - 40px)' }}
                  />

                  <div className="space-y-16">
                    {[
                      {
                        icon: <FileText className="h-5 w-5 md:h-6 md:w-6 text-white" />,
                        title: "Prepare Your Manuscript",
                        description:
                          "Format your paper according to the Springer LNCS template. Papers should be 10-15 pages including figures and references.",
                      },
                      {
                        icon: <Upload className="h-5 w-5 md:h-6 md:w-6 text-white" />,
                        title: "Submit Your Paper",
                        description:
                          "Submit your paper through the conference management system. Make sure to follow the double-blind review requirements.",
                      },
                      {
                        icon: <Search className="h-5 w-5 md:h-6 md:w-6 text-white" />,
                        title: "Review Process",
                        description:
                          "Each paper will be reviewed by at least three members of the program committee based on originality, technical quality, and relevance.",
                      },
                      {
                        icon: <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-white" />,
                        title: "Notification & Camera-Ready",
                        description:
                          "Authors will be notified of acceptance decisions. Accepted papers must be revised according to reviewers' comments and submitted as camera-ready.",
                      },
                    ].map((step, index) => (
                      <motion.div
                        key={index}
                        className="flex gap-6"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 * index }}
                      >
                        <div className="flex-shrink-0 relative z-10">
                          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-r from-[#2783ac] to-[#c753a5] flex items-center justify-center shadow-lg">
                            {step.icon}
                          </div>
                        </div>
                        <div className="pt-1 flex-1">
                          <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-800">{step.title}</h3>
                          <p className="text-gray-600 text-sm md:text-base">{step.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Important Dates Section - Now completely separate from the timeline */}
                <motion.div
                  className="pt-10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <h3 className="text-2xl font-semibold text-center mb-8 text-gray-800">Important Dates</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      {
                        icon: <Calendar className="h-5 w-5 md:h-6 md:w-6 text-[#2783ac]" />,
                        title: "Paper Submission Deadline",
                        date: "August 15, 2025",
                      },
                      {
                        icon: <Calendar className="h-5 w-5 md:h-6 md:w-6 text-[#2783ac]" />,
                        title: "Notification of Acceptance",
                        date: "September 30, 2025",
                      },
                      {
                        icon: <Calendar className="h-5 w-5 md:h-6 md:w-6 text-[#2783ac]" />,
                        title: "Camera-Ready Submission",
                        date: "October 15, 2025",
                      },
                      {
                        icon: <Calendar className="h-5 w-5 md:h-6 md:w-6 text-[#2783ac]" />,
                        title: "Conference Dates",
                        date: "November 27-29, 2025",
                      },
                    ].map((date, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 * index }}
                      >
                        <Card className="flex items-center gap-4 p-4 md:p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg bg-white border border-gray-100">
                          <div className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                            {date.icon}
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-800">{date.title}</h4>
                            <p className="text-gray-600 text-sm md:text-base">{date.date}</p>
                          </div>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Tools Section */}
      <section id="tools" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-[#2783ac] to-[#c753a5] bg-clip-text text-transparent">Travel Tools</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Currency Converter Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex"
            >
              <Card className="h-full w-full shadow-lg rounded-xl overflow-hidden border-0 transition-all duration-300 hover:shadow-xl">
                <div className="bg-gradient-to-r from-[#2783ac] to-[#c753a5] h-3 w-full" />
                <CardHeader className="pb-2 pt-6">
                  <CardTitle className="text-2xl font-bold flex items-center gap-3 text-gray-800">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-r from-[#2783ac]/10 to-[#c753a5]/10 flex items-center justify-center">
                      <DollarSign className="h-6 w-6 text-[#2783ac]" />
                    </div>
                    Currency Converter
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    Convert between currencies for your travel planning
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6 pt-4">
                  <div className="bg-gradient-to-r from-[#2783ac]/5 to-[#c753a5]/5 p-4 rounded-xl">
                    <label htmlFor="amount" className="block mb-2 text-sm font-medium text-gray-700">
                      Enter Amount
                    </label>
                    <div className="relative">
                      <Input
                        id="amount"
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(Number(e.target.value) || 0)}
                        className="focus:ring-[#2783ac] focus:border-[#2783ac] text-lg pl-8 h-12 bg-white shadow-sm"
                        placeholder="0.00"
                      />
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
                    <div className="md:col-span-2">
                      <label htmlFor="fromCurrency" className="block mb-2 text-sm font-medium text-gray-700">
                        From
                      </label>
                      <Select value={fromCurrency} onValueChange={setFromCurrency}>
                        <SelectTrigger className="focus:ring-[#2783ac] focus:border-[#2783ac] h-12 shadow-sm">
                          <SelectValue placeholder="Select currency" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="USD">USD - US Dollar</SelectItem>
                          <SelectItem value="EUR">EUR - Euro</SelectItem>
                          <SelectItem value="GBP">GBP - British Pound</SelectItem>
                          <SelectItem value="MYR">MYR - Malaysian Ringgit</SelectItem>
                          <SelectItem value="JPY">JPY - Japanese Yen</SelectItem>
                          <SelectItem value="CNY">CNY - Chinese Yuan</SelectItem>
                          <SelectItem value="INR">INR - Indian Rupee</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Exchange icon button */}
                    <div className="flex justify-center">
                      <button
                        onClick={() => {
                          const temp = fromCurrency;
                          setFromCurrency(toCurrency);
                          setToCurrency(temp);
                          handleConvert();
                        }}
                        className="bg-gradient-to-r from-[#2783ac]/10 to-[#c753a5]/10 rounded-full p-3 shadow-md hover:shadow-lg transition-all duration-300 transform hover:rotate-180"
                      >
                        <ArrowLeftRight className="h-5 w-5 text-[#2783ac]" />
                      </button>
                    </div>

                    <div className="md:col-span-2">
                      <label htmlFor="toCurrency" className="block mb-2 text-sm font-medium text-gray-700">
                        To
                      </label>
                      <Select value={toCurrency} onValueChange={setToCurrency}>
                        <SelectTrigger className="focus:ring-[#2783ac] focus:border-[#2783ac] h-12 shadow-sm">
                          <SelectValue placeholder="Select currency" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="USD">USD - US Dollar</SelectItem>
                          <SelectItem value="EUR">EUR - Euro</SelectItem>
                          <SelectItem value="GBP">GBP - British Pound</SelectItem>
                          <SelectItem value="MYR">MYR - Malaysian Ringgit</SelectItem>
                          <SelectItem value="JPY">JPY - Japanese Yen</SelectItem>
                          <SelectItem value="CNY">CNY - Chinese Yuan</SelectItem>
                          <SelectItem value="INR">INR - Indian Rupee</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-[#2783ac]/5 to-[#c753a5]/5 p-6 rounded-xl">
                    <div className="flex items-center justify-between mb-3">
                      <p className="text-sm font-medium text-gray-600">Current Exchange Rate</p>
                      <Badge variant="outline" className="bg-white text-[#2783ac] border-[#2783ac]/20 px-3 py-1">
                        Updated Today
                      </Badge>
                    </div>
                    <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                      <p id="conversionResult" className="font-bold text-2xl text-center text-gray-800">
                        {conversionResult}
                      </p>
                    </div>
                  </div>

                  <Button
                    onClick={handleConvert}
                    className="w-full h-14 bg-gradient-to-r from-[#2783ac] to-[#c753a5] hover:opacity-90 border-0 text-lg font-medium transition-all duration-300 hover:shadow-lg"
                  >
                    Convert Currency
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Flag Counter Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex"
            >
              <Card className="h-full w-full shadow-md rounded-xl overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-xl">
                <div className="bg-gradient-to-r from-[#2783ac] to-[#c753a5] h-2 w-full" />
                <CardHeader className="pb-3">
                  <CardTitle className="text-2xl font-semibold flex items-center gap-2 text-gray-800">
                    <Flag className="h-6 w-6 text-[#2783ac]" /> Visitor Analytics
                  </CardTitle>
                  <CardDescription className="text-gray-600">Track visitors from around the world</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="p-6 rounded-lg bg-white border border-gray-200">
                    <div className="flex items-center justify-between mb-6">
                      <h4 className="text-lg font-semibold text-gray-800">Global Reach</h4>
                      <Select defaultValue="all">
                        <SelectTrigger className="w-36 h-8 text-xs">
                          <SelectValue placeholder="Filter by region" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Regions</SelectItem>
                          <SelectItem value="asia">Asia</SelectItem>
                          <SelectItem value="europe">Europe</SelectItem>
                          <SelectItem value="americas">Americas</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      {[
                        { country: "USA", code: "usa", visits: "1.2M", growth: "+12%" },
                        { country: "UK", code: "uk", visits: "856K", growth: "+9%" },
                        { country: "UAE", code: "uae", visits: "645K", growth: "+15%" },
                        { country: "Japan", code: "japan", visits: "789K", growth: "+7%" },
                        { country: "China", code: "china", visits: "925K", growth: "+11%" },
                        { country: "India", code: "india", visits: "1.1M", growth: "+18%" },
                      ].map((flag, index) => (
                        <div key={index} className="text-center mb-3">
                          <div className="bg-gray-50 p-3 rounded-lg border border-gray-100 shadow-sm mb-2 hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
                            <div className="relative">
                              <img
                                src={`/images/${flag.code.toLowerCase()}.png`}
                                alt={flag.country}
                                className="w-10 h-auto rounded shadow-sm"
                                onError={(e) => {
                                  (e.target as HTMLImageElement).onerror = null;
                                  (e.target as HTMLImageElement).src = '/images/placeholder-flag.png';
                                }}
                              />
                              <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-1 shadow-sm">
                                <span className="text-xs font-medium text-green-500">{flag.growth}</span>
                              </div>
                            </div>
                          </div>
                          <p className="text-sm font-medium text-gray-800">{flag.country}</p>
                          <div className="flex items-center justify-center gap-1 mt-1">
                            <Users className="h-3 w-3 text-[#2783ac]" />
                            <span className="text-xs font-medium text-gray-500">{flag.visits}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 flex items-center justify-between border-t border-gray-100 pt-4">
                      <div>
                        <p className="text-sm font-medium text-gray-700">Total Unique Visitors</p>
                        <p className="text-2xl font-semibold bg-gradient-to-r from-[#2783ac] to-[#c753a5] bg-clip-text text-transparent">5.42M</p>
                      </div>
                      <Button variant="outline" className="border-[#2783ac] text-[#2783ac] hover:bg-[#2783ac]/5 flex items-center gap-1">
                        <BarChart3 className="h-4 w-4" />
                        <span>Full Analytics</span>
                      </Button>
                    </div>
                  </div>

                  <div className="mt-5 bg-gray-50 p-4 rounded-lg border border-gray-100">
                    <div className="flex items-center gap-2 text-sm">
                      <TrendingUp className="h-4 w-4 text-green-500" />
                      <span className="text-gray-700">Visitors increased by <span className="font-semibold text-green-500">12.4%</span> this month</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-b from-white to-primary-50 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-blue-300 blur-3xl"></div>
          <div className="absolute top-40 -right-20 w-60 h-60 rounded-full bg-purple-300 blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-40 h-40 rounded-full bg-blue-400 blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="text-sm font-semibold text-[#2783ac] bg-white shadow-sm border border-blue-100 uppercase tracking-wider px-4 py-1 rounded-full">
              Get in Touch
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#2783ac] to-[#c753a5] bg-clip-text text-transparent mt-4 mb-6">
              Contact Us
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#2783ac] to-[#c753a5] mx-auto rounded-full"></div>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Contact Form Card */}
              <motion.div
                className="lg:col-span-2"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm overflow-hidden">
                  <div className="h-2 bg-gradient-to-r from-[#2783ac] to-[#c753a5]"></div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-2xl text-center font-bold text-gray-800 flex items-center justify-center">
                      <MessageCircle className="mr-3 h-6 w-6 text-[#2783ac]" />
                      Send us a Message
                    </CardTitle>
                    <p className="text-center text-gray-600 mt-2">We&apos;d love to hear from you</p>
                  </CardHeader>
                  <CardContent className="px-6 py-6">
                    <form className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Full Name
                          </label>
                          <Input
                            id="name"
                            placeholder="John Doe"
                            required
                            className="rounded-md border-gray-200 focus:ring-2 focus:ring-[#2783ac] focus:border-[#2783ac]"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email Address
                          </label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="your@email.com"
                            required
                            className="rounded-md border-gray-200 focus:ring-2 focus:ring-[#2783ac] focus:border-[#2783ac]"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                          Subject
                        </label>
                        <Input
                          id="subject"
                          placeholder="How can we help you?"
                          required
                          className="rounded-md border-gray-200 focus:ring-2 focus:ring-[#2783ac] focus:border-[#2783ac]"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                          Your Message
                        </label>
                        <Textarea
                          id="message"
                          rows={5}
                          placeholder="Please write your message here..."
                          required
                          className="rounded-md border-gray-200 focus:ring-2 focus:ring-[#2783ac] focus:border-[#2783ac]"
                        />
                      </div>
                      <div className="pt-2">
                        <Button
                          type="submit"
                          size="lg"
                          className="w-full bg-gradient-to-r from-[#2783ac] to-[#c753a5] hover:opacity-90 border-0 py-3 rounded-md shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                        >
                          Send Message <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Contact Info Cards */}
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <Card className="shadow-lg border-0 bg-white/90 backdrop-blur-sm overflow-hidden">
                  <div className="h-1 bg-[#2783ac]"></div>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                        <Mail className="h-6 w-6 text-[#2783ac]" />
                      </div>
                      <div>
                        <h5 className="font-semibold text-lg text-gray-800 mb-1">Email Us</h5>
                        <a
                          href="mailto:infogoldenconference@gmail.com"
                          className="text-[#2783ac] text-sm hover:underline transition-colors"
                        >
                          infogoldenconference@gmail.com
                        </a>
                        <p className="text-xs text-gray-500 mt-1">We&apos;ll respond within 24 hours</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-lg border-0 bg-white/90 backdrop-blur-sm overflow-hidden">
                  <div className="h-1 bg-[#5d76ac]"></div>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                        <Phone className="h-6 w-6 text-[#5d76ac]" />
                      </div>
                      <div>
                        <h5 className="font-semibold text-lg text-gray-800 mb-1">Call Us</h5>
                        <a
                          href="tel:+919815979159"
                          className="text-[#5d76ac] text-sm hover:underline transition-colors"
                        >
                          +91 9815 979 159
                        </a>
                        <p className="text-xs text-gray-500 mt-1">Mon-Fri from 9am to 6pm</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-lg border-0 bg-white/90 backdrop-blur-sm overflow-hidden">
                  <div className="h-1 bg-[#c753a5]"></div>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-14 h-14 rounded-full bg-pink-50 flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-[#c753a5]" />
                      </div>
                      <div>
                        <h5 className="font-semibold text-lg text-gray-800 mb-1">Visit Us</h5>
                        <p className="text-gray-600 text-sm">
                          A.O. SCO-19, Zirakpur-140603 <br />
                          Chandigarh-Delhi Expressway
                        </p>
                      </div>
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
};
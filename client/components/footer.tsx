import { BookOpen } from "lucide-react"
import {
  Calendar,

  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Heart,
  ChevronRight,

} from "lucide-react"
import { Input } from "./ui/input"
import { Button } from "./ui/button"

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#2783ac] to-[#c753a5] pt-16 pb-6 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="h-10 w-10 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <div>
                <span className="font-bold text-xl">GCA</span>
                <span className="ml-1 text-sm text-white/80"></span>
              </div>
            </div>
            <p className="text-white/80 mb-3">
              Golden Conference Award (GCA) 
            </p>
            {/* <p className="text-white/80 flex items-center gap-2">
              <Calendar className="h-4 w-4" /> November 27-29, 2025 | Malaysia
            </p> */}
          </div>
          <div>
            <h5 className="text-white text-lg font-medium mb-6">Quick Links</h5>
            <ul className="space-y-3">
              {["Home", "About", "Topics", "Registration", "Submission", "Venue", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-white/80 hover:text-white transition-colors flex items-center gap-2"
                  >
                    <ChevronRight className="h-4 w-4" /> {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="text-white text-lg font-medium mb-6">Connect With Us</h5>
            <div className="flex space-x-4 mb-8">
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
            <h6 className="text-white font-medium mb-3">Subscribe to our newsletter</h6>
            <div className="flex">
              <Input
                placeholder="Your email"
                className="rounded-r-none bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
              <Button className="rounded-l-none">Subscribe</Button>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-white/20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <p className="text-white/80 text-center md:text-left">&copy; GCA. All rights reserved.</p>
            <p className="text-white/80 text-center md:text-right">
              Designed with <Heart className="h-4 w-4 text-red-400 inline" /> for GCA 
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

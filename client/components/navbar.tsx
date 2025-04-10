"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useMediaQuery } from "@/hooks/use-media-query"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isMobile = useMediaQuery("(max-width: 768px)")

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-[rgba(0,123,185,0.9)] py-4 sticky top-0 z-50">
      <nav className="flex justify-between items-center px-4 md:px-12 relative">
        <div className="logo">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="Golden Conference Awards Logo"
              width={150}
              height={50}
              className="h-[50px] w-auto"
            />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white text-2xl bg-transparent border-none cursor-pointer"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        {/* Desktop Navigation */}
        <ul className={`hidden md:flex gap-5 items-center`}>
          <NavItem href="#about">About</NavItem>
          <NavItem href="#events">Events</NavItem>
          <NavItem href="#awards">Awards</NavItem>
          <NavItem href="#degrees">Degrees</NavItem>

          <li>
            <DropdownMenu>
              <DropdownMenuTrigger className="text-white text-lg hover:text-white/90 transition-colors">
                GCA Conference
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-[rgba(0,123,185,0.9)]">
                <DropdownMenuItem className="text-white hover:bg-[#007bb9] cursor-pointer">
                  <Link href="/gca2025" className="w-full">
                    GCA 2025
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-white hover:bg-[#007bb9] cursor-pointer">
                  <Link href="/gca2026" className="w-full">
                    GCA 2026
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </li>

          <NavItem href="#contact">Contact</NavItem>
        </ul>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && isMobile && (
            <motion.ul
              className="flex flex-col w-full absolute top-[60px] left-0 bg-[rgba(0,123,185,0.9)] p-4 space-y-4 z-50"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              <MobileNavItem href="#about" onClick={() => setIsMenuOpen(false)}>
                About
              </MobileNavItem>
              <MobileNavItem href="#events" onClick={() => setIsMenuOpen(false)}>
                Events
              </MobileNavItem>
              <MobileNavItem href="#awards" onClick={() => setIsMenuOpen(false)}>
                Awards
              </MobileNavItem>
              <MobileNavItem href="#degrees" onClick={() => setIsMenuOpen(false)}>
                Degrees
              </MobileNavItem>
              <MobileNavItem href="#" onClick={() => {}}>
                <details className="w-full">
                  <summary className="cursor-pointer">GCA Conference</summary>
                  <ul className="pl-4 mt-2 space-y-2">
                    <li>
                      <Link
                        href="/gca2025"
                        className="text-white hover:text-white/80"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        GCA 2025
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/gca2026"
                        className="text-white hover:text-white/80"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        GCA 2026
                      </Link>
                    </li>
                  </ul>
                </details>
              </MobileNavItem>
              <MobileNavItem href="#contact" onClick={() => setIsMenuOpen(false)}>
                Contact
              </MobileNavItem>
            </motion.ul>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}

type NavItemProps = {
  href: string
  children: React.ReactNode
}

const NavItem = ({ href, children }: NavItemProps) => (
  <li>
    <Link href={href} className="text-white text-lg hover:text-white/90 transition-colors">
      {children}
    </Link>
  </li>
)

type MobileNavItemProps = {
  href: string
  children: React.ReactNode
  onClick: () => void
}

const MobileNavItem = ({ href, children, onClick }: MobileNavItemProps) => (
  <li className="py-2">
    {href === "#" ? (
      children
    ) : (
      <Link href={href} className="text-white text-lg block w-full" onClick={onClick}>
        {children}
      </Link>
    )}
  </li>
)

export default Navbar

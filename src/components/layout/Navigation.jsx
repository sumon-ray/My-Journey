"use client"

import { useEffect, useRef, useState } from "react" // Added useState
import { gsap } from "gsap"
import { MousePointer, Star, Rocket, Heart, Zap, Code, Menu, X } from "lucide-react" // Added Menu and X icons
import { scrollToSection } from "../../utils/scrollTo"

export default function Navigation({ activeSection }) {
  const navRef = useRef(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false) // State for mobile menu

  useEffect(() => {
    if (!navRef.current) return

    gsap.fromTo(
      navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 3.5 },
    )
  }, [])

  const navItems = [
    { id: "hero", label: "Home", icon: MousePointer },
    { id: "origins", label: "Origins", icon: Star },
    { id: "journey", label: "Journey", icon: Rocket },
    { id: "activities", label: "Beyond Code", icon: Heart },
    { id: "projects", label: "Projects", icon: Code },
    { id: "contact", label: "Connect", icon: Zap },
  ]

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const handleMenuItemClick = (id) => {
    scrollToSection(id)
    setIsMobileMenuOpen(false) // Close menu after clicking a link
  }

  return (
    <nav ref={navRef} className="fixed top-0 left-0 right-0 z-40 bg-black/5 backdrop-blur-2xl border-b border-white/5">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            {/* Sumon Ray */}
            <img src="/profile.png" className="w-10" alt="" />

          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <button
                  key={item.id}
                  onClick={() => handleMenuItemClick(item.id)}
                  className={`interactive flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 hover:scale-110 ${
                    activeSection === item.id
                      ? "bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 border border-cyan-400/30"
                      : "text-white/70 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{item.label}</span>
                </button>
              )
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white interactive p-2 rounded-md hover:bg-white/10 transition-colors"
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed h-fit inset-0 bg-black/90 backdrop-blur-2xl z-50 flex flex-col items-center justify-center space-y-8 py-20 animate-fade-in">
          <button
            className="absolute top-6 right-6 text-white interactive p-2 rounded-md hover:bg-white/10 transition-colors"
            onClick={toggleMobileMenu}
            aria-label="Close navigation menu"
          >
            <X className="w-8 h-8" />
          </button>
          {navItems.map((item) => {
            const Icon = item.icon
            return (
              <button
                key={item.id}
                onClick={() => handleMenuItemClick(item.id)}
                className={`interactive flex items-center space-x-4 px-6 py-3 rounded-full text-xl font-semibold transition-all duration-300 hover:scale-105 ${
                  activeSection === item.id
                    ? "bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 border border-cyan-400/30"
                    : "text-white/70 hover:text-white hover:bg-white/5"
                }`}
              >
                <Icon className="w-6 h-6" />
                <span>{item.label}</span>
              </button>
            )
          })}
        </div>
      )}
    </nav>
  )
}

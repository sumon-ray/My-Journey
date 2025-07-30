"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { MousePointer, Star, Rocket, Heart, Zap, Code } from "lucide-react"
import { scrollToSection } from "../../utils/scrollTo" // Adjusted import path

export default function Navigation({ activeSection }) {
  const navRef = useRef(null)

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

  return (
    <nav ref={navRef} className="fixed top-0 left-0 right-0 z-40 bg-black/5 backdrop-blur-2xl border-b border-white/5">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Sumon Ray
          </div>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
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
        </div>
      </div>
    </nav>
  )
}

"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ArrowUp } from "lucide-react"
import { scrollToSection } from "../../utils/scrollTo" // Adjusted import path

export default function FloatingActionButton() {
  const buttonRef = useRef(null)

  useEffect(() => {
    if (!buttonRef.current) return

    // Floating animation
    gsap.to(buttonRef.current, {
      y: -10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    })

    // Show/hide based on scroll
    gsap.set(buttonRef.current, { opacity: 0, scale: 0 })

    const handleScroll = () => {
      if (window.scrollY > 200) {
        gsap.to(buttonRef.current, { opacity: 1, scale: 1, duration: 0.3 })
      } else {
        gsap.to(buttonRef.current, { opacity: 0, scale: 0, duration: 0.3 })
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <button
      ref={buttonRef}
      onClick={() => scrollToSection("hero")}
      className="interactive fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center text-white shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-110 z-40"
    >
      <ArrowUp className="w-6 h-6" />
    </button>
  )
}

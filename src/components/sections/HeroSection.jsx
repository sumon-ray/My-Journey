"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { Code, Sparkles, ArrowRight } from 'lucide-react'
import { scrollToSection } from "../../utils/scrollTo"
import MagneticButton from "../ui/MagneticButton"
import TextReveal from "../animations/TextReveal"
import CounterAnimation from "../animations/CounterAnimation"
import Floating3DObject from "../animations/Floating3DObject"

export default function HeroSection() {
  const sectionRef = useRef(null)
  const avatarRef = useRef(null)

  useEffect(() => {
    if (!sectionRef.current || !avatarRef.current) return

    const tl = gsap.timeline({ delay: 3.8 })

    // Hero entrance animation
    tl.fromTo(
      avatarRef.current,
      { scale: 0, rotation: 360 },
      { scale: 1, rotation: 0, duration: 1.5, ease: "back.out(1.7)" },
    ).fromTo(
      ".hero-content > *",
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out" },
      "-=1",
    )

    // Floating animation for avatar
    gsap.to(avatarRef.current, {
      y: -20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    })

    // Parallax effect
    gsap.to(".hero-bg", {
      yPercent: -50,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    })
  }, [])

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden py-20 sm:py-0" // Added vertical padding for small screens
    >
      {/* Animated Background Elements */}
      <div className="hero-bg absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-48 h-48 sm:w-72 sm:h-72 bg-gradient-to-r from-cyan-400/20 to-transparent rounded-full blur-3xl animate-pulse"></div> {/* Adjusted size */}
        <div className="absolute bottom-10 right-10 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-r from-purple-400/20 to-transparent rounded-full blur-3xl animate-pulse"></div> {/* Adjusted size */}
      </div>

      {/* Floating 3D Object */}
      <Floating3DObject />

      <div className="container mx-auto px-4 sm:px-6 text-center relative z-10"> {/* Adjusted horizontal padding */}
        <div className="hero-content">
          {/* Avatar */}
          <div
            ref={avatarRef}
            className="w-32 h-32 sm:w-48 sm:h-48 mx-auto mb-8 sm:mb-12 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 p-2 relative" // Adjusted size and margin
          >
            <div className="w-full h-full rounded-full bg-slate-900/80 backdrop-blur-xl flex items-center justify-center relative overflow-hidden">
              <Code className="w-16 h-16 sm:w-20 sm:h-20 text-cyan-400 z-10" /> {/* Adjusted icon size */}
              <div
                className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-purple-500/10 animate-spin"
                style={{ animationDuration: "8s" }}
              ></div>
            </div>
            <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full opacity-20 animate-ping"></div> {/* Adjusted inset */}
          </div>

          {/* Title with Text Reveal */}
          <TextReveal
            text="Sumon Ray"
            className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white mb-4 sm:mb-8 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent" // Adjusted font sizes
          />

          {/* Subtitle */}
          <div className="text-lg sm:text-2xl md:text-3xl lg:text-4xl text-white/90 mb-6 sm:mb-8 font-light"> {/* Adjusted font sizes */}
            <span className="inline-block">Full-Stack Developer</span>
            <span className="mx-2 sm:mx-4 text-cyan-400 animate-pulse">•</span> {/* Adjusted margin */}
            <span className="inline-block">Problem Solver</span>
            <span className="mx-2 sm:mx-4 text-purple-400 animate-pulse">•</span> {/* Adjusted margin */}
            <span className="inline-block">Digital Innovator</span>
          </div>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-white/70 mb-10 sm:mb-16 max-w-4xl mx-auto leading-relaxed"> {/* Adjusted font sizes and margin */}
            From a curious Class 9 student experimenting with HTML to a passionate full-stack developer. This is my
            story of resilience, self-learning, and turning setbacks into comebacks.
          </p>

          {/* CTA Button */}
          <MagneticButton
            onClick={() => scrollToSection("origins")}
            className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-8 py-4 sm:px-12 sm:py-6 rounded-full text-lg sm:text-xl font-semibold transition-all duration-300 group mb-16 sm:mb-20" // Adjusted padding, font size, margin
          >
            <Sparkles className="mr-2 sm:mr-3 w-5 h-5 sm:w-6 sm:h-6 group-hover:rotate-12 transition-transform" /> {/* Adjusted icon size */}
            Discover My Journey
            <ArrowRight className="ml-2 sm:ml-3 w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" /> {/* Adjusted icon size */}
          </MagneticButton>

          {/* Stats Counter */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 max-w-xs sm:max-w-2xl mx-auto"> {/* Ensured single column on mobile, adjusted max-width */}
            <div className="text-center">
              <CounterAnimation end={2} className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-1 sm:mb-2" /> {/* Adjusted font size */}
              <div className="text-white/60 text-sm sm:text-base">Years Learning</div> {/* Adjusted font size */}
            </div>
            <div className="text-center">
              <CounterAnimation end={15} className="text-3xl sm:text-4xl font-bold text-purple-400 mb-1 sm:mb-2" /> {/* Adjusted font size */}
              <div className="text-white/60 text-sm sm:text-base">Technologies</div> {/* Adjusted font size */}
            </div>
            <div className="text-center">
              <CounterAnimation end={2} className="text-3xl sm:text-4xl font-bold text-pink-400 mb-1 sm:mb-2" /> {/* Adjusted font size */}
              <div className="text-white/60 text-sm sm:text-base">Team Projects</div> {/* Adjusted font size */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

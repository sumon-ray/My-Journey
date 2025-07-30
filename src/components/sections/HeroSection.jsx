"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { Code, Sparkles, ArrowRight } from "lucide-react"
import { scrollToSection } from "../../utils/scrollTo" // Adjusted import path
import MagneticButton from "../ui/MagneticButton" // Adjusted import path
import TextReveal from "../animations/TextReveal" // Adjusted import path
import CounterAnimation from "../animations/CounterAnimation" // Adjusted import path
import Floating3DObject from "../animations/Floating3DObject" // Adjusted import path

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
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="hero-bg absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-cyan-400/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Floating 3D Object */}
      <Floating3DObject />

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="hero-content">
          {/* Avatar */}
          <div
            ref={avatarRef}
            className="w-48 h-48 mx-auto mb-12 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 p-2 relative"
          >
            <div className="w-full h-full rounded-full bg-slate-900/80 backdrop-blur-xl flex items-center justify-center relative overflow-hidden">
              <Code className="w-20 h-20 text-cyan-400 z-10" />
              <div
                className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-purple-500/10 animate-spin"
                style={{ animationDuration: "8s" }}
              ></div>
            </div>
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full opacity-20 animate-ping"></div>
          </div>

          {/* Title with Text Reveal */}
          <TextReveal
            text="Sumon Ray"
            className="text-7xl md:text-9xl font-bold text-white mb-8 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
          />

          {/* Subtitle */}
          <div className="text-2xl md:text-4xl text-white/90 mb-8 font-light">
            <span className="inline-block">Full-Stack Developer</span>
            <span className="mx-4 text-cyan-400 animate-pulse">•</span>
            <span className="inline-block">Problem Solver</span>
            <span className="mx-4 text-purple-400 animate-pulse">•</span>
            <span className="inline-block">Digital Innovator</span>
          </div>

          {/* Description */}
          <p className="text-xl text-white/70 mb-16 max-w-4xl mx-auto leading-relaxed">
            From a curious Class 9 student experimenting with HTML to a passionate full-stack developer. This is my
            story of resilience, self-learning, and turning setbacks into comebacks.
          </p>

          {/* CTA Button */}
          <MagneticButton
            onClick={() => scrollToSection("origins")}
            className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-12 py-6 rounded-full text-xl font-semibold transition-all duration-300 group mb-20"
          >
            <Sparkles className="mr-3 w-6 h-6 group-hover:rotate-12 transition-transform" />
            Discover My Journey
            <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </MagneticButton>

          {/* Stats Counter */}
          <div className="grid grid-cols-3 gap-12 max-w-2xl mx-auto">
            <div className="text-center">
              <CounterAnimation end={2} className="text-4xl font-bold text-cyan-400 mb-2" />
              <div className="text-white/60">Years Learning</div>
            </div>
            <div className="text-center">
              <CounterAnimation end={15} className="text-4xl font-bold text-purple-400 mb-2" />
              <div className="text-white/60">Technologies</div>
            </div>
            <div className="text-center">
              <CounterAnimation end={2} className="text-4xl font-bold text-pink-400 mb-2" />
              <div className="text-white/60">Team Projects</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

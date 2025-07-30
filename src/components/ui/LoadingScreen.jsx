"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { Code, Zap } from "lucide-react"

export default function LoadingScreen() {
  const containerRef = useRef(null)
  const progressRef = useRef(null)
  const textRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current || !progressRef.current || !textRef.current) return

    const tl = gsap.timeline()

    // Initial setup
    gsap.set([progressRef.current, textRef.current], { opacity: 0, y: 50 })

    // Animation sequence
    tl.to([progressRef.current, textRef.current], {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
    })
      .to(
        progressRef.current.querySelector(".progress-bar"),
        {
          width: "100%",
          duration: 2.5,
          ease: "power2.inOut",
        },
        "-=0.5",
      )
      .to(
        containerRef.current,
        {
          opacity: 0,
          duration: 0.8,
          ease: "power2.inOut",
        },
        "+=0.2",
      )

    // Floating animation for icons
    gsap.to(".loading-icon", {
      y: -20,
      rotation: 360,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: 0.3,
    })

    return () => tl.kill()
  }, [])

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center z-50"
    >
      <div className="text-center max-w-md mx-auto px-6">
        {/* Animated Icons */}
        <div className="flex justify-center space-x-8 mb-12">
          <div className="loading-icon w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center">
            <Code className="w-8 h-8 text-white" />
          </div>
          <div className="loading-icon w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center">
            <Zap className="w-8 h-8 text-white" />
          </div>
        </div>

        {/* Loading Text */}
        <div ref={textRef} className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Sumon Ray
          </h2>
          <p className="text-white/70 text-lg">Crafting Digital Experiences...</p>
        </div>

        {/* Progress Bar */}
        <div ref={progressRef} className="w-full">
          <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
            <div className="progress-bar h-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full w-0 relative">
              <div className="absolute inset-0 bg-white/30 animate-pulse rounded-full"></div>
            </div>
          </div>
          <div className="mt-4 text-white/50 text-sm">Loading portfolio...</div>
        </div>
      </div>
    </div>
  )
}

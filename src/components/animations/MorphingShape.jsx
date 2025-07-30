"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

export default function MorphingShape({ className = "", delay = 0 }) {
  const shapeRef = useRef(null)

  useEffect(() => {
    if (!shapeRef.current) return

    // Rotation and scale animation
    gsap.to(shapeRef.current, {
      rotation: 360,
      scale: 1.2,
      duration: 8,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay,
    })
  }, [delay])

  return (
    <div
      ref={shapeRef}
      className={`w-64 h-64 bg-gradient-to-r from-cyan-400/10 to-purple-500/10 rounded-full blur-xl ${className}`}
    />
  )
}

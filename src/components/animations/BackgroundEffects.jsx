"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

export default function BackgroundEffects() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Create floating geometric shapes
    const shapes = []
    for (let i = 0; i < 15; i++) {
      const shape = document.createElement("div")
      const shapeType = Math.random() > 0.5 ? "circle" : "square"

      shape.className = `absolute pointer-events-none ${
        shapeType === "circle" ? "rounded-full" : "rounded-lg rotate-45"
      }`

      const size = Math.random() * 100 + 50
      shape.style.width = `${size}px`
      shape.style.height = `${size}px`
      shape.style.left = `${Math.random() * 100}%`
      shape.style.top = `${Math.random() * 100}%`
      shape.style.background = `linear-gradient(45deg, 
        rgba(6, 182, 212, ${Math.random() * 0.3}), 
        rgba(147, 51, 234, ${Math.random() * 0.3}))`
      shape.style.filter = "blur(1px)"

      containerRef.current.appendChild(shape)
      shapes.push(shape)
    }

    // Animate shapes
    shapes.forEach((shape, index) => {
      gsap.set(shape, {
        rotation: Math.random() * 360,
        scale: Math.random() * 0.5 + 0.5,
      })

      gsap.to(shape, {
        rotation: `+=${Math.random() * 360 + 180}`,
        x: `+=${Math.random() * 200 - 100}`,
        y: `+=${Math.random() * 200 - 100}`,
        scale: Math.random() * 0.8 + 0.6,
        duration: Math.random() * 20 + 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: index * 0.5,
      })
    })

    // Create particle system
    const particles = []
    for (let i = 0; i < 50; i++) {
      const particle = document.createElement("div")
      particle.className = "absolute w-1 h-1 bg-cyan-400 rounded-full pointer-events-none opacity-60"
      particle.style.left = `${Math.random() * 100}%`
      particle.style.top = `${Math.random() * 100}%`

      containerRef.current.appendChild(particle)
      particles.push(particle)
    }

    // Animate particles
    particles.forEach((particle, index) => {
      gsap.to(particle, {
        x: `+=${Math.random() * 400 - 200}`,
        y: `+=${Math.random() * 400 - 200}`,
        opacity: Math.random() * 0.8 + 0.2,
        scale: Math.random() * 2 + 0.5,
        duration: Math.random() * 15 + 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: index * 0.1,
      })
    })

    // Animated gradient background
    const gradientAnimation = gsap.timeline({ repeat: -1 })
    gradientAnimation
      .to(containerRef.current, {
        background: "linear-gradient(45deg, #0f172a, #581c87, #0f172a, #7c3aed)",
        duration: 8,
        ease: "sine.inOut",
      })
      .to(containerRef.current, {
        background: "linear-gradient(135deg, #581c87, #0f172a, #7c3aed, #0f172a)",
        duration: 8,
        ease: "sine.inOut",
      })
      .to(containerRef.current, {
        background: "linear-gradient(225deg, #7c3aed, #581c87, #0f172a, #581c87)",
        duration: 8,
        ease: "sine.inOut",
      })

    return () => {
      shapes.forEach((shape) => shape.remove())
      particles.forEach((particle) => particle.remove())
      gradientAnimation.kill()
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 -z-10 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
      style={{
        background: "linear-gradient(45deg, #0f172a, #581c87, #0f172a, #7c3aed)",
        backgroundSize: "400% 400%",
      }}
    />
  )
}

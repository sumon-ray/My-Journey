"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

export default function CustomCursor() {
  const cursorRef = useRef(null)
  const followerRef = useRef(null)

  useEffect(() => {
    // Only show custom cursor on desktop
    if (typeof window === "undefined" || window.innerWidth < 768) return

    if (!cursorRef.current || !followerRef.current) return

    const cursor = cursorRef.current
    const follower = followerRef.current

    const handleMouseMove = (e) => {
      gsap.to(cursor, {
        x: e.clientX - 8,
        y: e.clientY - 8,
        duration: 0.1,
        ease: "power2.out",
      })

      gsap.to(follower, {
        x: e.clientX - 20,
        y: e.clientY - 20,
        duration: 0.3,
        ease: "power2.out",
      })
    }

    const handleMouseEnter = () => {
      gsap.to([cursor, follower], {
        scale: 1.5,
        duration: 0.3,
        ease: "power2.out",
      })
    }

    const handleMouseLeave = () => {
      gsap.to([cursor, follower], {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      })
    }

    // Add event listeners
    window.addEventListener("mousemove", handleMouseMove)

    // Add hover effects to interactive elements
    const interactiveElements = document.querySelectorAll("button, a, .interactive")
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter)
      el.addEventListener("mouseleave", handleMouseLeave)
    })

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter)
        el.removeEventListener("mouseleave", handleMouseLeave)
      })
    }
  }, [])

  // Don't render on mobile
  if (typeof window !== "undefined" && window.innerWidth < 768) {
    return null
  }

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed w-4 h-4 bg-cyan-400 rounded-full pointer-events-none z-50 mix-blend-difference hidden md:block"
        style={{ transform: "translate(-50%, -50%)" }}
      />
      <div
        ref={followerRef}
        className="fixed w-10 h-10 border-2 border-cyan-400/50 rounded-full pointer-events-none z-50 hidden md:block"
        style={{ transform: "translate(-50%, -50%)" }}
      />
    </>
  )
}

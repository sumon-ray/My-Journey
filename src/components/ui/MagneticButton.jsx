"use client"

import { useRef, useEffect } from "react"
import { gsap } from "gsap"

export default function MagneticButton({ children, className = "", onClick }) {
  const buttonRef = useRef(null)

  useEffect(() => {
    if (!buttonRef.current) return

    const button = buttonRef.current

    const handleMouseMove = (e) => {
      const rect = button.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2

      gsap.to(button, {
        x: x * 0.3,
        y: y * 0.3,
        duration: 0.3,
        ease: "power2.out",
      })
    }

    const handleMouseLeave = () => {
      gsap.to(button, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "elastic.out(1, 0.3)",
      })
    }

    button.addEventListener("mousemove", handleMouseMove)
    button.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      button.removeEventListener("mousemove", handleMouseMove)
      button.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <button
      ref={buttonRef}
      onClick={onClick}
      className={`interactive transform transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-cyan-500/25 ${className}`}
    >
      {children}
    </button>
  )
}

"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

export default function TextReveal({ text, className = "" }) {
  const textRef = useRef(null)

  useEffect(() => {
    if (!textRef.current) return

    const chars = textRef.current.querySelectorAll(".char")

    gsap.fromTo(
      chars,
      { y: 100, opacity: 0, rotationX: -90 },
      {
        y: 0,
        opacity: 1,
        rotationX: 0,
        duration: 1,
        stagger: 0.05,
        ease: "back.out(1.7)",
        delay: 4.5,
      },
    )
  }, [])

  return (
    <div ref={textRef} className={className}>
      {text.split("").map((char, index) => (
        <span key={index} className="char inline-block" style={{ transformOrigin: "50% 50% -50px" }}>
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </div>
  )
}

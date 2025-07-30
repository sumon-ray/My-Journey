"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

export default function CounterAnimation({ end, className = "", duration = 2 }) {
  const counterRef = useRef(null)

  useEffect(() => {
    if (!counterRef.current) return

    const counter = { value: 0 }

    gsap.to(counter, {
      value: end,
      duration,
      ease: "power2.out",
      delay: 5,
      onUpdate: () => {
        if (counterRef.current) {
          counterRef.current.textContent = Math.round(counter.value).toString()
        }
      },
    })
  }, [end, duration])

  return (
    <div ref={counterRef} className={className}>
      0
    </div>
  )
}

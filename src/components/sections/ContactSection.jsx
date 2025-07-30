"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { Sparkles } from 'lucide-react'

export default function ContactSection() {
  const sectionRef = useRef(null)

  useEffect(() => {
    if (!sectionRef.current) return

    gsap.fromTo(
      ".contact-content > *",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "bottom 30%",
          toggleActions: "play none none reverse",
        },
      },
    )
  }, [])

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="min-h-screen py-20 sm:py-32 bg-black/10 backdrop-blur-xl flex items-center"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="contact-content">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Ready to Create Impact
            </h2>
            <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-8 sm:mb-12"></div>
            <p className="text-base sm:text-lg md:text-xl text-white/80 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
              Thank you for taking the time to learn about my journey. From setbacks to comebacks, I've learned that
              resilience and passion can overcome any obstacle. I'm excited to bring my full-stack development skills
              and leadership experience to the Blync.Studio team.
            </p>

            <div className="space-y-6 sm:space-y-8"> {/* Adjusted space-y */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center"> {/* Adjusted gap */}
                <a
                  href="https://sumon-ray.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="interactive bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-8 py-3 sm:px-10 sm:py-4 rounded-full text-lg sm:text-xl font-semibold transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:shadow-cyan-500/25 group inline-flex items-center justify-center"
                >
                  <Sparkles className="mr-2 sm:mr-3 w-5 h-5 sm:w-6 sm:h-6 group-hover:rotate-12 transition-transform" />
                  View My Portfolio
                </a>
                <a
                  href="https://drive.google.com/file/d/1n9wYMMYxIYhVIkAocobkgj8-roV8KdMt/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="interactive border-2 border-white/30 text-white hover:bg-white/10 px-8 py-3 sm:px-10 sm:py-4 rounded-full text-lg sm:text-xl font-semibold bg-transparent hover:border-white/50 transition-all duration-300 transform hover:scale-110 inline-flex items-center justify-center"
                >
                  Download Resume
                </a>
              </div>

              <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-6 pt-6 sm:pt-8"> {/* Adjusted space-y and space-x */}
                <div className="text-white/60 flex items-center justify-center space-x-2 text-sm sm:text-base"> {/* Adjusted font size */}
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-400 rounded-full"></div>
                  <span className="font-medium">Email:</span>
                  <span>sumon.ray@email.com</span>
                </div>
                <div className="text-white/60 flex items-center justify-center space-x-2 text-sm sm:text-base"> {/* Adjusted font size */}
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-400 rounded-full"></div>
                  <span className="font-medium">LinkedIn:</span>
                  <span>/in/sumon-ray-dev</span>
                </div>
              </div>
            </div>

            <div className="mt-12 sm:mt-16 p-6 sm:p-10 bg-white/5 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-white/10 relative overflow-hidden"> {/* Adjusted padding and border-radius */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 to-purple-500/5 animate-pulse"></div>
              <p className="text-white/90 text-base sm:text-lg md:text-xl leading-relaxed relative z-10"> {/* Adjusted font size */}
                "My journey taught me that setbacks are setups for comebacks. I believe in turning challenges into
                opportunities and building solutions that make a difference. I'm ready to bring this mindset, along with
                my technical skills and leadership experience, to create amazing digital experiences at Blync.Studio."
              </p>
              <div className="mt-4 sm:mt-6 text-cyan-400 font-medium text-base sm:text-lg relative z-10">- Sumon Ray</div> {/* Adjusted font size */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

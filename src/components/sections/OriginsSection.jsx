"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { BookOpen, Target, GraduationCap, Star } from "lucide-react"
import { Card, CardContent } from "../ui/card" // Adjusted import path
import MorphingShape from "../animations/MorphingShape" // Adjusted import path

export default function OriginsSection() {
  const sectionRef = useRef(null)

  useEffect(() => {
    if (!sectionRef.current) return

    // Staggered card animations
    gsap.fromTo(
      ".origin-card",
      { y: 100, opacity: 0, rotationY: -15 },
      {
        y: 0,
        opacity: 1,
        rotationY: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "bottom 30%",
          toggleActions: "play none none reverse",
          onEnter: () => {
            // Animate technologies and icon ripple on enter
            gsap.fromTo(
              ".origin-card .tech-tag",
              { opacity: 0, y: 20 },
              { opacity: 1, y: 0, stagger: 0.05, duration: 0.5, ease: "power2.out" },
            )
            gsap.fromTo(
              ".origin-card .icon-wrapper",
              { scale: 0.8, opacity: 0 },
              { scale: 1, opacity: 1, duration: 0.8, ease: "back.out(1.7)", stagger: 0.2 },
            )
            gsap.to(".origin-card .icon-wrapper", {
              scale: 1.1,
              repeat: 1,
              yoyo: true,
              duration: 0.3,
              ease: "power1.inOut",
              stagger: 0.2,
              delay: 0.5, // Delay after initial scale
            })
          },
        },
      },
    )

    // Parallax effect for background elements
    gsap.to(".origin-bg", {
      yPercent: -30,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    })
  }, [])

  const originSteps = [
    {
      icon: BookOpen,
      title: "Class 9: The Discovery",
      subtitle: "The spark ignites",
      description:
        "My journey into technology started in Class 9 when I first discovered my passion for computer science. Experimenting with simple HTML and CSS to create basic web pages brought me real joy.",
      technologies: ["HTML", "CSS"],
      gradient: "from-cyan-400 to-purple-500",
    },
    {
      icon: Target,
      title: "The Dream Forms",
      subtitle: "Vision crystallizes",
      description:
        "I realized that I truly enjoyed building things with code. From that point on, I made up my mind to pursue Computer Science and Engineering (CSE) in the future.",
      technologies: ["Problem Solving", "Logic Building"],
      gradient: "from-purple-400 to-pink-500",
    },
    {
      icon: GraduationCap,
      title: "Academic Foundation",
      subtitle: "Building the base",
      description:
        "After completing SSC, I enrolled in HSC with a science background, determined to keep my dream of studying CSE alive. I worked hard and successfully completed my HSC.",
      technologies: ["Mathematics", "Physics", "Chemistry"],
      gradient: "from-green-400 to-blue-500",
    },
  ]

  return (
    <section id="origins" ref={sectionRef} className="min-h-screen py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="origin-bg absolute inset-0 opacity-20">
        <MorphingShape className="absolute top-20 left-10" />
        <MorphingShape className="absolute bottom-20 right-10" delay={2} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-7xl font-bold text-white mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Where It All Began
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-8"></div>
            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Every great journey starts with a single step. Mine began with curiosity and a simple HTML page.
            </p>
          </div>

          {/* Origin Cards */}
          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {originSteps.map((step, index) => {
              const Icon = step.icon
              return (
                <Card
                  key={index}
                  className="origin-card bg-white/5 backdrop-blur-2xl border border-white/10 hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl group"
                >
                  <CardContent className="p-8 h-full flex flex-col">
                    <div className="flex items-center mb-6">
                      <div
                        className={`icon-wrapper w-16 h-16 bg-gradient-to-r ${step.gradient} rounded-2xl flex items-center justify-center mr-6 group-hover:rotate-12 transition-transform duration-300`}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                        <div className="text-cyan-400 text-sm">{step.subtitle}</div>
                      </div>
                    </div>

                    <p className="text-white/80 leading-relaxed text-lg mb-6 flex-grow">{step.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {step.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="tech-tag px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 rounded-full text-sm border border-cyan-500/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Inspirational Quote */}
          <div className="text-center">
            <div className="inline-block p-12 bg-white/5 backdrop-blur-2xl rounded-3xl border border-white/10 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 to-purple-500/5 animate-pulse"></div>
              <Star
                className="w-16 h-16 text-yellow-400 mx-auto mb-6 animate-spin"
                style={{ animationDuration: "4s" }}
              />
              <p className="text-white/90 text-2xl font-medium mb-4 relative z-10">
                "Every small success brought me real joy"
              </p>
              <p className="text-white/60 text-lg relative z-10">The foundation of a developer's mindset</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

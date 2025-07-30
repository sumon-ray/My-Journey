"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { Heart, BookOpen, Code, Rocket, Award, ExternalLink } from "lucide-react"
import { Card, CardContent } from "../ui/card" // Adjusted import path

export default function JourneySection() {
  const sectionRef = useRef(null)
  const timelineLineRef = useRef(null)

  useEffect(() => {
    if (!sectionRef.current) return

    // Animate timeline line drawing
    gsap.fromTo(
      timelineLineRef.current,
      { scaleY: 0, transformOrigin: "top" },
      {
        scaleY: 1,
        duration: 1.5,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "bottom 30%",
          toggleActions: "play none none reverse",
        },
      },
    )

    // Timeline items and icon animations
    gsap.fromTo(
      ".timeline-item",
      { x: (index) => (index % 2 === 0 ? -100 : 100), opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "bottom 30%",
          toggleActions: "play none none reverse",
          onEnter: () => {
            gsap.fromTo(
              ".timeline-item .icon-circle",
              { scale: 0, rotation: 360 },
              { scale: 1, rotation: 0, duration: 0.8, ease: "back.out(1.7)", stagger: 0.1 },
            )
          },
        },
      },
    )
  }, [])

  const journeySteps = [
    {
      icon: Heart,
      title: "The Setback",
      period: "University Admission • 2020",
      description:
        "During the admission tests for public universities, I unfortunately couldn't secure a seat in CSE. That moment was heartbreaking for me — it felt like my dream was slipping away.",
      color: "red",
      colorClasses: {
        bg: "bg-gradient-to-r from-red-400 to-red-500",
        border: "border-red-500/20",
        text: "text-red-400",
        bgAccent: "bg-red-500/20",
        dot: "bg-red-400",
        shadow: "hover:shadow-red-500/10",
      },
      side: "left",
    },
    {
      icon: BookOpen,
      title: "Self-Learning Journey",
      period: "YouTube & Practice • 2020-2021",
      description:
        "If I couldn't study CSE formally, I would still follow the path by focusing on web development. I started learning HTML, CSS, and JavaScript through YouTube tutorials.",
      technologies: ["HTML", "CSS", "JavaScript", "YouTube"],
      color: "yellow",
      colorClasses: {
        bg: "bg-gradient-to-r from-yellow-400 to-yellow-500",
        border: "border-yellow-500/20",
        text: "text-yellow-400",
        bgAccent: "bg-yellow-500/20",
        dot: "bg-yellow-400",
        shadow: "hover:shadow-yellow-500/10",
      },
      side: "right",
    },
    {
      icon: Code,
      title: "Programming Hero - Level 1",
      period: "Frontend Development • 6 Months",
      description:
        "Enrolled in a structured course focusing on frontend development. Mastered modern web technologies and frameworks.",
      technologies: ["HTML", "CSS", "Tailwind", "JavaScript", "Node.js", "Express", "React", "MongoDB"],
      certificateLink: "https://drive.google.com/file/d/1BkADDb4lr5bd_sN4JWqkCYU_TYkmfTGv/view?pli=1",
      color: "cyan",
      colorClasses: {
        bg: "bg-gradient-to-r from-cyan-400 to-cyan-500",
        border: "border-cyan-500/20",
        text: "text-cyan-400",
        bgAccent: "bg-cyan-500/20",
        dot: "bg-cyan-400",
        shadow: "hover:shadow-cyan-500/10",
      },
      side: "left",
    },
    {
      icon: Rocket,
      title: "Programming Hero - Level 2",
      period: "Full-Stack Development • 6 Months",
      description:
        "Advanced to full-stack development with modern technologies. Led team projects and gained real-world experience.",
      technologies: ["React.js", "Next.js", "TypeScript", "Redux", "PostgreSQL", "Prisma", "Docker", "AWS", "Jest"],
      certificateLink: "https://drive.google.com/file/d/1toNYc2XRP2A1VNNM1SAoDEarPpJQCZ8L/view",
      color: "purple",
      colorClasses: {
        bg: "bg-gradient-to-r from-purple-400 to-purple-500",
        border: "border-purple-500/20",
        text: "text-purple-400",
        bgAccent: "bg-purple-500/20",
        dot: "bg-purple-400",
        shadow: "hover:shadow-purple-500/10",
      },
      side: "right",
    },
    {
      icon: Award,
      title: "Current Status",
      period: "Final Year • Ready for Industry",
      description:
        "Currently in my final year at Mawlana Bhashani Science and Technology University, ready to bring my skills to the industry.",
      color: "green",
      colorClasses: {
        bg: "bg-gradient-to-r from-green-400 to-green-500",
        border: "border-green-500/20",
        text: "text-green-400",
        bgAccent: "bg-green-500/20",
        dot: "bg-green-400",
        shadow: "hover:shadow-green-500/10",
      },
      side: "left",
    },
  ]

  return (
    <section id="journey" ref={sectionRef} className="min-h-screen py-32 bg-black/10 backdrop-blur-xl">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-7xl font-bold text-white mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              The Path of Resilience
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-8"></div>
            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Every setback became a setup for a comeback. Here's how I transformed challenges into opportunities.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div
              ref={timelineLineRef}
              className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-400 to-purple-500 rounded-full"
            ></div>

            <div className="space-y-16">
              {journeySteps.map((step, index) => {
                const Icon = step.icon
                const isLeft = step.side === "left"

                return (
                  <div key={index} className="timeline-item flex items-center">
                    {isLeft ? (
                      <>
                        <div className="w-1/2 pr-8 text-right">
                          <Card
                            className={`bg-white/5 backdrop-blur-xl ${step.colorClasses.border} hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl ${step.colorClasses.shadow}`}
                          >
                            <CardContent className="p-8">
                              <div className="flex items-center justify-end mb-4">
                                <div>
                                  <h3 className="text-2xl font-semibold text-white">{step.title}</h3>
                                  <p className={step.colorClasses.text}>{step.period}</p>
                                </div>
                                <div
                                  className={`icon-circle w-16 h-16 ${step.colorClasses.bg} rounded-2xl flex items-center justify-center ml-6`}
                                >
                                  <Icon className="w-8 h-8 text-white" />
                                </div>
                              </div>
                              <p className="text-white/80 leading-relaxed text-lg mb-4">{step.description}</p>
                              {step.technologies && (
                                <div className="flex flex-wrap gap-2 justify-end mb-4">
                                  {step.technologies.map((tech, techIndex) => (
                                    <span
                                      key={techIndex}
                                      className={`px-3 py-1 ${step.colorClasses.bgAccent} ${step.colorClasses.text} rounded-full text-sm`}
                                    >
                                      {tech}
                                    </span>
                                  ))}
                                </div>
                              )}
                              {step.certificateLink && (
                                <a
                                  href={step.certificateLink}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className={`interactive inline-flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium ${step.colorClasses.bgAccent} ${step.colorClasses.text} border ${step.colorClasses.border} hover:scale-105 transition-transform duration-300`}
                                >
                                  <ExternalLink className="w-4 h-4" />
                                  <span>View Certificate</span>
                                </a>
                              )}
                            </CardContent>
                          </Card>
                        </div>
                        <div
                          className={`w-8 h-8 ${step.colorClasses.dot} rounded-full border-4 border-slate-900 z-10`}
                        ></div>
                        <div className="w-1/2 pl-8"></div>
                      </>
                    ) : (
                      <>
                        <div className="w-1/2 pr-8"></div>
                        <div
                          className={`w-8 h-8 ${step.colorClasses.dot} rounded-full border-4 border-slate-900 z-10`}
                        ></div>
                        <div className="w-1/2 pl-8">
                          <Card
                            className={`bg-white/5 backdrop-blur-xl ${step.colorClasses.border} hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl ${step.colorClasses.shadow}`}
                          >
                            <CardContent className="p-8">
                              <div className="flex items-center mb-4">
                                <div
                                  className={`icon-circle w-16 h-16 ${step.colorClasses.bg} rounded-2xl flex items-center justify-center mr-6`}
                                >
                                  <Icon className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                  <h3 className="text-2xl font-semibold text-white">{step.title}</h3>
                                  <p className={step.colorClasses.text}>{step.period}</p>
                                </div>
                              </div>
                              <p className="text-white/80 leading-relaxed text-lg mb-4">{step.description}</p>
                              {step.technologies && (
                                <div className="flex flex-wrap gap-2 mb-4">
                                  {step.technologies.map((tech, techIndex) => (
                                    <span
                                      key={techIndex}
                                      className={`px-3 py-1 ${step.colorClasses.bgAccent} ${step.colorClasses.text} rounded-full text-sm`}
                                    >
                                      {tech}
                                    </span>
                                  ))}
                                </div>
                              )}
                              {step.certificateLink && (
                                <a
                                  href={step.certificateLink}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className={`interactive inline-flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium ${step.colorClasses.bgAccent} ${step.colorClasses.text} border ${step.colorClasses.border} hover:scale-105 transition-transform duration-300`}
                                >
                                  <ExternalLink className="w-4 h-4" />
                                  <span>View Certificate</span>
                                </a>
                              )}
                            </CardContent>
                          </Card>
                        </div>
                      </>
                    )}
                  </div>
                )
              })}
            </div>
          </div>

          {/* Achievements */}
          <div className="mt-20 text-center">
            <Card className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-xl border border-white/20 inline-block">
              <CardContent className="p-8">
                <Award className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
                <h3 className="text-2xl font-semibold text-white mb-6">Journey Achievements</h3>
                <div className="grid md:grid-cols-2 gap-6 text-white/80">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span>Successfully completed both Programming Hero levels</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span>Led a team project as Team Leader</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>Collaborated effectively as Team Member</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                    <span>Industry-level job preparation training</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

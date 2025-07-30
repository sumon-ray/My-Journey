"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { Users, Rocket, Heart } from "lucide-react"
import { Card, CardContent } from "../ui/card" // Adjusted import path

export default function ActivitiesSection() {
  const sectionRef = useRef(null)

  useEffect(() => {
    if (!sectionRef.current) return

    gsap.fromTo(
      ".activity-card",
      { y: 100, opacity: 0, scale: 0.8 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
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
              ".skill-bar-fill",
              { width: "0%" },
              { width: "100%", duration: 1.5, ease: "power2.out", stagger: 0.1 },
            )
          },
        },
      },
    )
  }, [])

  return (
    <section id="activities" ref={sectionRef} className="min-h-screen py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-7xl font-bold text-white mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Beyond Development
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-8"></div>
            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Leadership, communication, and teamwork skills are just as important as technical skills in today's world.
            </p>
          </div>

          {/* Activity Cards */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <Card className="activity-card bg-white/5 backdrop-blur-2xl border border-white/10 hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 group">
              <CardContent className="p-10">
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-3xl flex items-center justify-center mb-8 group-hover:rotate-12 transition-transform duration-300 mx-auto">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4 text-center">English Language Society</h3>
                <p className="text-cyan-400 mb-6 text-center">Media and Graphic Secretary • Since 2022</p>
                <p className="text-white/80 leading-relaxed mb-6 text-center">
                  Active member of the English Language Society at Mawlana Bhashani Science and Technology University.
                  Responsible for designing promotional materials and organizing events.
                </p>
                <div className="space-y-3">
                  {[
                    "Design promotional materials and announcements",
                    "Organize online and offline speaking sessions",
                    "Coordinate media and graphic content",
                    "Lead creative design initiatives",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span className="text-white/70">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="activity-card bg-white/5 backdrop-blur-2xl border border-white/10 hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 group">
              <CardContent className="p-10">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-500 rounded-3xl flex items-center justify-center mb-8 group-hover:rotate-12 transition-transform duration-300 mx-auto">
                  <Rocket className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4 text-center">Skills Developed</h3>
                <p className="text-purple-400 mb-6 text-center">Leadership & Communication</p>
                <p className="text-white/80 leading-relaxed mb-6 text-center">
                  Through my involvement in extracurricular activities, I've greatly improved essential soft skills that
                  complement my technical abilities.
                </p>
                <div className="space-y-4">
                  {[
                    { skill: "Communication", color: "purple" },
                    { skill: "Leadership", color: "pink" },
                    { skill: "Team Management", color: "cyan" },
                    { skill: "Creative Design", color: "blue" },
                  ].map((item, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span className="text-white/80">{item.skill}</span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <div
                          className={`skill-bar-fill h-full bg-gradient-to-r from-${item.color}-400 to-${item.color}-500 rounded-full`}
                          style={{ width: "0%" }} // Initial width for animation
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quote */}
          <div className="text-center">
            <Card className="bg-gradient-to-r from-green-500/10 to-blue-500/10 backdrop-blur-xl border border-white/20 inline-block">
              <CardContent className="p-8">
                <Heart className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <p className="text-white/90 text-xl font-medium">
                  "Balancing technical expertise with strong communication and leadership skills"
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

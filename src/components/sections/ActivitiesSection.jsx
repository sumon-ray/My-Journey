"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { Users, Rocket, Heart } from 'lucide-react'
import { Card, CardContent } from "../ui/card"

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
    <section id="activities" ref={sectionRef} className="min-h-screen py-20 sm:py-32"> {/* Adjusted vertical padding */}
      <div className="container mx-auto px-4 sm:px-6"> {/* Adjusted horizontal padding */}
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-20"> {/* Adjusted margin-bottom */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"> {/* Adjusted font sizes */}
              Beyond Development
            </h2>
            <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-6 sm:mb-8"></div> {/* Adjusted width */}
            <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed"> {/* Adjusted font sizes */}
              Leadership, communication, and teamwork skills are just as important as technical skills in today's world.
            </p>
          </div>

          {/* Activity Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16"> {/* Ensured single column on mobile */}
            <Card className="activity-card bg-white/5 backdrop-blur-2xl border border-white/10 hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 group">
              <CardContent className="p-6 sm:p-10"> {/* Adjusted padding */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-3xl flex items-center justify-center mb-6 sm:mb-8 group-hover:rotate-12 transition-transform duration-300 mx-auto"> {/* Adjusted size */}
                  <Users className="w-8 h-8 sm:w-10 sm:h-10 text-white" /> {/* Adjusted icon size */}
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2 sm:mb-4 text-center">English Language Society</h3> {/* Adjusted font size */}
                <p className="text-cyan-400 text-sm sm:text-base mb-4 sm:mb-6 text-center">Media and Graphic Secretary • Since 2022</p> {/* Adjusted font size */}
                <p className="text-white/80 leading-relaxed text-base sm:text-lg mb-4 sm:mb-6 text-center"> {/* Adjusted font size */}
                  Active member of the English Language Society at Mawlana Bhashani Science and Technology University.
                  Responsible for designing promotional materials and organizing events.
                </p>
                <div className="space-y-2 sm:space-y-3"> {/* Adjusted space-y */}
                  {[
                    "Design promotional materials and announcements",
                    "Organize online and offline speaking sessions",
                    "Coordinate media and graphic content",
                    "Lead creative design initiatives",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-2 sm:space-x-3"> {/* Adjusted space-x */}
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-400 rounded-full"></div> {/* Adjusted size */}
                      <span className="text-white/70 text-sm sm:text-base">{item}</span> {/* Adjusted font size */}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="activity-card bg-white/5 backdrop-blur-2xl border border-white/10 hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 group">
              <CardContent className="p-6 sm:p-10"> {/* Adjusted padding */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-purple-400 to-pink-500 rounded-3xl flex items-center justify-center mb-6 sm:mb-8 group-hover:rotate-12 transition-transform duration-300 mx-auto"> {/* Adjusted size */}
                  <Rocket className="w-8 h-8 sm:w-10 sm:h-10 text-white" /> {/* Adjusted icon size */}
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2 sm:mb-4 text-center">Skills Developed</h3> {/* Adjusted font size */}
                <p className="text-purple-400 text-sm sm:text-base mb-4 sm:mb-6 text-center">Leadership & Communication</p> {/* Adjusted font size */}
                <p className="text-white/80 leading-relaxed text-base sm:text-lg mb-4 sm:mb-6 text-center"> {/* Adjusted font size */}
                  Through my involvement in extracurricular activities, I've greatly improved essential soft skills that
                  complement my technical abilities.
                </p>
                <div className="space-y-3 sm:space-y-4"> {/* Adjusted space-y */}
                  {[
                    { skill: "Communication", color: "purple" },
                    { skill: "Leadership", color: "pink" },
                    { skill: "Team Management", color: "cyan" },
                    { skill: "Creative Design", color: "blue" },
                  ].map((item, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-1 sm:mb-2"> {/* Adjusted margin-bottom */}
                        <span className="text-white/80 text-sm sm:text-base">{item.skill}</span> {/* Adjusted font size */}
                      </div>
                      <div className="h-1.5 sm:h-2 bg-white/10 rounded-full overflow-hidden"> {/* Adjusted height */}
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
            <Card className="bg-gradient-to-r from-green-500/10 to-blue-500/10 backdrop-blur-xl border border-white/20 inline-block max-w-full sm:max-w-xl"> {/* Added max-w */}
              <CardContent className="p-6 sm:p-8"> {/* Adjusted padding */}
                <Heart className="w-10 h-10 sm:w-12 sm:h-12 text-green-400 mx-auto mb-3 sm:mb-4" /> {/* Adjusted size */}
                <p className="text-white/90 text-base sm:text-lg md:text-xl font-medium"> {/* Adjusted font size */}
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

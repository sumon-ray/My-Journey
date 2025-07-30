"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { Github, Link } from "lucide-react"
import { Card, CardContent } from "../ui/card" // Adjusted import path

export default function ProjectsSection() {
  const sectionRef = useRef(null)

  useEffect(() => {
    if (!sectionRef.current) return

    gsap.fromTo(
      ".project-card",
      { y: 100, opacity: 0, rotationX: -30 },
      {
        y: 0,
        opacity: 1,
        rotationX: 0,
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

  const projects = [
    {
      name: "Bookify",
      type: "Team Project",
      description:
        "Bookify is a book exchange platform that allows users to exchange their books easily. Best of all, it provides additional features where users can read a few pages of a book and get a summary before making an exchange.",
      technologies: ["Next.js", "MongoDB", "Shadcn", "Tailwind CSS", "Node.js", "Gemini API"],
      image: "/public/images/bookify.jpg",
      liveLink: "https://bookify-mocha.vercel.app/",
      githubLink: "https://github.com/sumon-ray/Bookify",
    },
    {
      name: "nextEvent",
      type: "Team Project",
      description:
        "nextEvent is an awesome project where users can create their events without any cost. Premium members can also create events to get special discounts.",
      technologies: ["Next.js", "PostgreSQL", "Node.js", "Tailwind CSS", "Shadcn"],
      image: "/public/images/next-event.png",
      liveLink: "https://next-event-pro.vercel.app/",
      githubLink: "https://github.com/developersajadur/Next-Event-Client-Side",
    },
    {
      name: "Mini Event Scheduler",
      type: "Personal Project",
      description:
        "Mini Event Scheduler is a dynamic and user-friendly event management platform that enables users to seamlessly create, delete, archive, and unarchive events in real-time.",
      technologies: ["React", "Node.js", "Tailwind CSS", "Shadcn", "Unit Testing (Jest)"],
      image: "/public/images/mini-event-scheduler.png",
      liveLink: "https://mini-event-scheduler-app.vercel.app/",
      githubLink: "https://github.com/sumon-ray/mini-event-scheduler",
    },
  ]

  return (
    <section id="projects" ref={sectionRef} className="min-h-screen py-32 bg-black/10 backdrop-blur-xl">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-7xl font-bold text-white mb-8 bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">
              My Creations
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-pink-400 to-blue-500 mx-auto mb-8"></div>
            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Here are some of the projects I've built, showcasing my skills in full-stack development and
              problem-solving.
            </p>
          </div>

          {/* Project Cards */}
          <div className="grid lg:grid-cols-3 gap-12">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="project-card bg-white/5 backdrop-blur-2xl border border-white/10 hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/10 group"
              >
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="relative w-full h-48 overflow-hidden rounded-lg mb-6">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                      <h3 className="text-2xl font-bold text-white">{project.name}</h3>
                    </div>
                  </div>

                  <p className="text-white/70 text-sm mb-2">{project.type}</p>
                  <p className="text-white/80 leading-relaxed text-lg mb-4 flex-grow">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gradient-to-r from-pink-500/20 to-blue-500/20 text-pink-300 rounded-full text-sm border border-pink-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-between items-center mt-auto">
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="interactive flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors group"
                      >
                        <Link className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                        <span className="font-medium">Live Demo</span>
                      </a>
                    )}
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="interactive flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors group"
                      >
                        <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        <span className="font-medium">GitHub</span>
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

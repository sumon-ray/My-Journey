"use client"

import { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { TextPlugin } from "gsap/TextPlugin"

// Components
import Navigation from "./components/layout/Navigation"
import HeroSection from "./components/sections/HeroSection"
import OriginsSection from "./components/sections/OriginsSection"
import JourneySection from "./components/sections/JourneySection"
import ActivitiesSection from "./components/sections/ActivitiesSection"
import ProjectsSection from "./components/sections/ProjectsSection"
import ContactSection from "./components/sections/ContactSection"
import LoadingScreen from "./components/ui/LoadingScreen"
import BackgroundEffects from "./components/animations/BackgroundEffects"
import CustomCursor from "./components/ui/CustomCursor"
import FloatingActionButton from "./components/ui/FloatingActionButton"

// Hooks
import { useLoading } from "./hooks/useLoading"
import { useScrollSections } from "./hooks/useScrollSections"

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, TextPlugin)
}

export default function App() {
  const { isLoading } = useLoading()
  const { activeSection } = useScrollSections()

  useEffect(() => {
    // Global GSAP settings
    gsap.config({
      force3D: true,
      nullTargetWarn: false,
    })

    // Smooth scrolling setup
    ScrollTrigger.refresh()

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Background Effects */}
      <BackgroundEffects />

      {/* Custom Cursor */}
      <CustomCursor />

      {/* Navigation */}
      <Navigation activeSection={activeSection} />

      {/* Main Content */}
      <main>
        <HeroSection />
        <OriginsSection />
        <JourneySection />
        <ActivitiesSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      {/* Floating Action Button */}
      <FloatingActionButton />
    </div>
  )
}

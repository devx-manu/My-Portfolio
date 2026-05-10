'use client'

import { SpaceBackground } from '@/components/space-background'
import { Navbar } from '@/components/navbar'
import { HeroSection } from '@/components/hero-section'
import { SolarSystem } from '@/components/solar-system'
import { ProjectsGalaxy } from '@/components/projects-galaxy'
import { JourneyTimeline } from '@/components/journey-timeline'
import { ContactSection } from '@/components/contact-section'
import { CustomCursor } from '@/components/custom-cursor'

export default function Page() {
  return (
    <main className="relative overflow-x-hidden bg-slate-950">
      {/* Fixed space background */}
      <SpaceBackground />

      {/* Navigation */}
      <Navbar />

      {/* Custom cursor */}
      <CustomCursor />

      {/* Content sections with relative z-index */}
      <div className="relative z-10">
        {/* Hero Section */}
        <div id="home">
          <HeroSection />
        </div>

        {/* Solar System Tech Stack */}
        <div id="tech">
          <SolarSystem />
        </div>

        {/* Projects Galaxy */}
        <div id="projects">
          <ProjectsGalaxy />
        </div>

        {/* Journey Timeline */}
        <div id="journey">
          <JourneyTimeline />
        </div>

        {/* Contact & Dev.kannadiga */}
        <div id="contact">
          <ContactSection />
        </div>
      </div>
    </main>
  )
}

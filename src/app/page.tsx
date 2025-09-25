"use client";
import { useState, useEffect } from "react";
import HeroSection from "@/components/sections/hero";
import AboutSection from "@/components/sections/about";
import SkillsSection from "@/components/sections/skills";
import ProjectsSection from "@/components/sections/projects";
import ContactSection from "@/components/sections/contact";
import Navigation from "@/components/layout/navigation";
import { AnimatePresence, motion } from "framer-motion";
import WelcomeOverlay from "@/components/ui/welcome-overlay";

const sections = {
  home: <HeroSection />,
  about: <AboutSection />,
  skills: <SkillsSection />,
  projects: <ProjectsSection />,
  contact: <ContactSection />,
};

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const [showWelcomeOverlay, setShowWelcomeOverlay] = useState(false);
  const [animationsEnabled, setAnimationsEnabled] = useState(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisitedPortfolio");
    if (!hasVisited) {
      setShowWelcomeOverlay(true);
      localStorage.setItem("hasVisitedPortfolio", "true");
    } else {
      // If already visited, enable animations immediately
      setAnimationsEnabled(true);
    }
  }, []);

  const handleEnterPortfolio = () => {
    setShowWelcomeOverlay(false);
    setAnimationsEnabled(true);
  };

  const handleSetActiveSection = (section: string) => {
    setActiveSection(section);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <AnimatePresence>
        {showWelcomeOverlay && <WelcomeOverlay onEnter={handleEnterPortfolio} />}
      </AnimatePresence>
      <Navigation
        activeSection={activeSection}
        setActiveSection={handleSetActiveSection}
      />
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {activeSection === "home" ? (
              <HeroSection animationsEnabled={animationsEnabled} setActiveSection={handleSetActiveSection} />
            ) : (
              sections[activeSection as keyof typeof sections]
            )}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

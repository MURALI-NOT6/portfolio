"use client";
import { useState } from "react";
import HeroSection from "@/components/sections/hero";
import AboutSection from "@/components/sections/about";
import SkillsSection from "@/components/sections/skills";
import ProjectsSection from "@/components/sections/projects";
import ContactSection from "@/components/sections/contact";
import Navigation from "@/components/layout/navigation";
import { AnimatePresence, motion } from "framer-motion";

const sections = {
  home: <HeroSection />,
  about: <AboutSection />,
  skills: <SkillsSection />,
  projects: <ProjectsSection />,
  contact: <ContactSection />,
};

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  const handleSetActiveSection = (section: string) => {
    setActiveSection(section);
  };

  return (
    <div className="flex min-h-screen flex-col">
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
            {sections[activeSection as keyof typeof sections]}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

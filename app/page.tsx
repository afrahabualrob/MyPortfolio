"use client";
import { motion } from "framer-motion";
import HomeSection from "./components/HomeSection";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import SkillsSection from "./components/SkillsSection";
import ContactSection from "./components/ContactSection";
import ProjectsSection from "./components/ProjectsSection";
import ReferencesSection from "./components/ReferencesSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <motion.main
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <HomeSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ReferencesSection />
        <ContactSection />
      </motion.main>
    </div>
  );
}

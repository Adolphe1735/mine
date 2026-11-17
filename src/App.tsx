import { useEffect, useState } from 'react';
import { MotionConfig } from 'motion/react';
import About from './components/About';
import Contact from './components/Contact';
import CvModal from './components/CvModal';
import Education from './components/Education';
import Footer from './components/Footer';
import Hero from './components/Hero';
import { ScrollProgressBar } from './components/MotionPrimitives';
import Navbar from './components/Navbar';
import ProjectModal from './components/ProjectModal';
import Projects from './components/Projects';
import Services from './components/Services';
import Skills from './components/Skills';
import { NAV_ITEMS, type ProjectItem } from './data/portfolioData';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [cvModalOpen, setCvModalOpen] = useState<boolean>(false);

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) => document.getElementById(item.id)).filter(
      (el): el is HTMLElement => el !== null
    );

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: '-20% 0px -55% 0px',
        threshold: [0.1, 0.35, 0.6],
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-[#0B0F14] text-white">
        <ScrollProgressBar />
        <Navbar activeSection={activeSection} />

        <main>
          <Hero onOpenCv={() => setCvModalOpen(true)} />
          <About />
          <Skills />
          <Projects onSelectProject={setSelectedProject} />
          <Education />
          <Services />
          <Contact />
        </main>

        <Footer />

        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

        <CvModal
          isOpen={cvModalOpen}
          onClose={() => setCvModalOpen(false)}
        />
      </div>
    </MotionConfig>
  );
}

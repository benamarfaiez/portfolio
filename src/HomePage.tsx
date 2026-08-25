// pages/HomePage.tsx
import { lazy } from 'react';
import Hero from './components/hero/Hero';

// Below-the-fold components
const About = lazy(() => import('./components/About'));
const Experience = lazy(() => import('./components/Experience/Experience'));
const Skills = lazy(() => import('./components/skills/Skills'));
const Education = lazy(() => import('./components/Education/Education'));
const Certifications = lazy(() => import('./components/Certifications/Certifications'));
const Contact = lazy(() => import('./components/Contact/Contact'));

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Education />
      <Certifications />
      <Contact />
    </>
  );
}
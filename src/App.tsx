import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './i18n';
import Layout from './components/Layout';
import Hero from './components/hero/Hero';
import About from './components/About';
import Experience from './components/Experience/Experience';
import Skills from './components/skills/Skills';
import Education from './components/Education/Education';
import Certifications from './components/Certifications/Certifications';
import Contact from './components/Contact/Contact';
import ExperienceDetail from './components/Experience/ExperienceDetail';
import SkillsCategory from './components/skills/SkillsCategory';
import NotFound from './components/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Experience />
              <Skills />
              <Education />
              <Certifications />
              <Contact />
            </>
          } />
          <Route path="/experiences/:slug" element={<ExperienceDetail />} />
          <Route path="/skills/:category" element={<SkillsCategory />} />
          {/* Route 404 - doit être en dernier */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './i18n';
import Layout from './components/Layout';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import ExperienceDetail from './components/ExperienceDetail';

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
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

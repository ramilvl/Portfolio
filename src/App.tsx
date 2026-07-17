import { MotionConfig } from 'framer-motion';
import { Background } from './components/layout/Background/Background';
import { Navbar } from './components/layout/Navbar/Navbar';
import { Footer } from './components/layout/Footer/Footer';
import { Hero } from './components/sections/Hero/Hero';
import { About } from './components/sections/About/About';
import { Experience } from './components/sections/Experience/Experience';
import { Skills } from './components/sections/Skills/Skills';
import { Projects } from './components/sections/Projects/Projects';
import { Technologies } from './components/sections/Technologies/Technologies';
import { Timeline } from './components/sections/Timeline/Timeline';
import { Contact } from './components/sections/Contact/Contact';

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <Background />
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Technologies />
        <Timeline />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  );
}

export default App;

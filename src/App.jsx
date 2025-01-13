import { ThemeProvider } from './context/ThemeContext';
import { GlobalStyles } from './styles/GlobalStyles';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import BackToTop from './components/BackToTop/BackToTop';

function App() {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </ThemeProvider>
  );
}

export default App;
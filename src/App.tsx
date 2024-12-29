import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio/Portfolio';
import ScrollProgress from './components/ScrollProgress';
import Services from './components/Services';
import Team from './components/Team/Team';
import Testimonials from './components/Testimonials';

export default function App() {
  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Team />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
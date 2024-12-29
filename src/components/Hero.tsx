import { ChevronDown, MousePointer2 } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-800/80 to-transparent z-10 animate-gradient" />
      
      {/* Parallax background */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-75"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1497366216548-37526070297c")',
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
        }}
      />
      
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="floating-element absolute top-1/4 left-1/4 w-32 h-32 bg-blue-400/10 rounded-full blur-xl" />
        <div className="floating-element absolute top-1/3 right-1/4 w-40 h-40 bg-cyan-400/10 rounded-full blur-xl" />
        <div className="floating-element absolute bottom-1/4 left-1/3 w-36 h-36 bg-purple-400/10 rounded-full blur-xl" />
      </div>
      
      <div className="relative z-20 max-w-4xl mx-auto px-4 text-center">
        <MousePointer2 className="h-6 w-6 mx-auto mb-6 animate-bounce" />
        <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in">
          <span className="bg-gradient-to-r from-blue-400 to-cyan-300 text-transparent bg-clip-text">
            Transform
          </span>
          <br />
          Your Digital Future
        </h1>
        <p className="text-xl md:text-2xl mb-12 text-gray-200 animate-fade-in delay-200">
          We craft innovative digital solutions that elevate your business to new heights
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-300">
          <a
            href="#services"
            className="group relative bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 overflow-hidden"
          >
            <span className="relative z-10">Explore Services</span>
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-cyan-400 to-blue-500 transition-transform duration-300" />
          </a>
          <a
            href="#contact"
            className="relative overflow-hidden bg-transparent border-2 border-white text-white hover:text-blue-900 font-bold py-4 px-8 rounded-full transition-all duration-300 group"
          >
            <span className="relative z-10">Get Started</span>
            <div className="absolute inset-0 -translate-y-full group-hover:translate-y-0 bg-white transition-transform duration-300" />
          </a>
        </div>
        
        <button 
          onClick={scrollToServices}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
          aria-label="Scroll down"
        >
          <ChevronDown className="h-8 w-8" />
        </button>
      </div>
    </section>
  );
}
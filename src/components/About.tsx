import { Award, Users, Globe, Zap } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';
import { useInView } from './hooks/useInView';

interface StatProps {
  icon: React.ReactNode;
  number: number;
  suffix?: string;
  label: string;
}

function Stat({ icon, number, suffix = '', label }: StatProps) {
  const [ref, isVisible] = useInView<HTMLDivElement>();

  return (
    <div 
      ref={ref}
      className="text-center transform transition-all duration-500 hover:scale-105"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: `translateY(${isVisible ? 0 : '20px'})`,
      }}
    >
      <div className="inline-block p-4 bg-blue-100 rounded-full text-blue-600 mb-4">
        {icon}
      </div>
      <div className="text-3xl font-bold text-blue-900 mb-2">
        {isVisible && <AnimatedCounter end={number} suffix={suffix} />}
      </div>
      <div className="text-gray-600">{label}</div>
    </div>
  );
}

export default function About() {
  const stats = [
    {
      icon: <Award className="h-6 w-6" />,
      number: 10,
      suffix: "+",
      label: "Years Experience",
    },
    {
      icon: <Users className="h-6 w-6" />,
      number: 200,
      suffix: "+",
      label: "Happy Clients",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      number: 15,
      suffix: "+",
      label: "Countries Served",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      number: 500,
      suffix: "+",
      label: "Projects Completed",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text mb-4 animate-fade-in">
            About Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in">
            We're a team of passionate innovators dedicated to transforming businesses
            through cutting-edge digital solutions. With a decade of experience, we've
            helped companies worldwide achieve their digital potential.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
          {stats.map((stat) => (
            <Stat key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
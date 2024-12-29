import { Code, Smartphone, TrendingUp, Palette, Shield, Megaphone } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
}

function ServiceCard({ title, description, icon, gradient }: ServiceCardProps) {
  return (
    <div className={`${gradient} p-[2px] rounded-2xl transform hover:-translate-y-2 transition-all duration-300`}>
      <div className="bg-white h-full p-8 rounded-2xl">
        <div className="mb-4 text-blue-600">{icon}</div>
        <h4 className="text-2xl font-bold text-blue-900 mb-4">{title}</h4>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

export default function Services() {
  const services = [
    {
      title: 'Web Development',
      description: 'Custom web applications built with cutting-edge technologies for optimal performance and scalability.',
      icon: <Code className="h-8 w-8" />,
      gradient: 'bg-gradient-to-r from-blue-500 to-cyan-400',
    },
    {
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
      icon: <Smartphone className="h-8 w-8" />,
      gradient: 'bg-gradient-to-r from-cyan-400 to-teal-400',
    },
    {
      title: 'Digital Marketing',
      description: 'Data-driven marketing strategies that boost your online presence and drive growth.',
      icon: <TrendingUp className="h-8 w-8" />,
      gradient: 'bg-gradient-to-r from-teal-400 to-green-400',
    },
    {
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive interfaces that engage users and enhance brand experience.',
      icon: <Palette className="h-8 w-8" />,
      gradient: 'bg-gradient-to-r from-green-400 to-emerald-400',
    },
    {
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and data.',
      icon: <Shield className="h-8 w-8" />,
      gradient: 'bg-gradient-to-r from-emerald-400 to-cyan-400',
    },
    {
      title: 'Social Media',
      description: 'Strategic social media management to build and engage your community.',
      icon: <Megaphone className="h-8 w-8" />,
      gradient: 'bg-gradient-to-r from-cyan-400 to-blue-500',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600">
            Comprehensive digital solutions for modern businesses
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
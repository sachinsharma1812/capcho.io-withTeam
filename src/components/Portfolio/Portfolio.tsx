import { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectFilter from './ProjectFilter';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce solution with real-time inventory management.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c',
    video: 'https://www.youtube.com/embed/YOUR_VIDEO_ID',
    technologies: ['React', 'Node.js', 'MongoDB'],
    category: 'Web Development',
    link: 'https://example.com/project1',
  },
  {
    title: 'Fitness Tracking App',
    description: 'Mobile app for tracking workouts and nutrition with social features.',
    image: 'https://images.unsplash.com/photo-1526502900236-e988d89d881b',
    technologies: ['React Native', 'Firebase', 'Redux'],
    category: 'Mobile Apps',
  },
  {
    title: 'AI-Powered Analytics',
    description: 'Business intelligence dashboard with predictive analytics.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
    technologies: ['Python', 'TensorFlow', 'AWS'],
    category: 'Data Science',
  },
  {
    title: 'Social Media Campaign',
    description: 'Integrated social media campaign that increased engagement by 300%.',
    image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07',
    video: 'https://www.youtube.com/embed/YOUR_VIDEO_ID2',
    technologies: ['Social Media', 'Content Strategy', 'Analytics'],
    category: 'Digital Marketing',
  },
  {
    title: 'Real Estate Platform',
    description: 'Property listing and management system with virtual tours.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa',
    technologies: ['Vue.js', 'Django', 'PostgreSQL'],
    category: 'Web Development',
  },
  {
    title: 'Healthcare App',
    description: 'Telemedicine platform connecting patients with healthcare providers.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d',
    technologies: ['Flutter', 'Node.js', 'WebRTC'],
    category: 'Mobile Apps',
  },
];

const categories = ['All', 'Web Development', 'Mobile Apps', 'Digital Marketing', 'Data Science'];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = projects.filter(
    (project) => activeCategory === 'All' || project.category === activeCategory
  );

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text mb-4">
            Our Portfolio
          </h2>
          <p className="text-xl text-gray-600">
            Explore our latest projects and success stories
          </p>
        </div>

        <ProjectFilter
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
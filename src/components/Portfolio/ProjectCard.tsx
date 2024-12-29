import { ExternalLink, Play } from 'lucide-react';
import { useState } from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  video?: string;
  technologies: string[];
  link?: string;
}

export default function ProjectCard({ title, description, image, video, technologies, link }: ProjectCardProps) {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg group">
      <div className="relative aspect-video">
        {video ? (
          <>
            {showVideo ? (
              <iframe
                src={`${video}?autoplay=1`}
                className="w-full h-full"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            ) : (
              <div className="relative">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setShowVideo(true)}
                  className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Play className="w-16 h-16 text-white" />
                </button>
              </div>
            )}
          </>
        ) : (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
          />
        )}
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-blue-900">{title}</h3>
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
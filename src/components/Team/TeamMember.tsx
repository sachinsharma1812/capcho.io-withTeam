import { Github, Linkedin, Twitter } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  social: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

export default function TeamMember({ name, role, image, social }: TeamMemberProps) {
  return (
    <div className="group">
      <div className="relative overflow-hidden rounded-2xl">
        <img
          src={image}
          alt={name}
          className="w-full aspect-square object-cover transform group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-center space-x-4">
            {social.linkedin && (
              <a href={social.linkedin} target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
                <Linkedin className="w-5 h-5" />
              </a>
            )}
            {social.twitter && (
              <a href={social.twitter} target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
                <Twitter className="w-5 h-5" />
              </a>
            )}
            {social.github && (
              <a href={social.github} target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
                <Github className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="mt-4 text-center">
        <h3 className="text-xl font-bold text-blue-900">{name}</h3>
        <p className="text-gray-600">{role}</p>
      </div>
    </div>
  );
}
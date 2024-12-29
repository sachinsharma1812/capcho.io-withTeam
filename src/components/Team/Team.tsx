import TeamMember from './TeamMember';

const teamMembers = [
  {
    name: 'Sachin Sharma',
    role: 'CEO & Founder',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a',
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      github: 'https://github.com'
    }
  },
  {
    name: 'Sarah Chen',
    role: 'CTO',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2',
    social: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com'
    }
  },
  {
    name: 'Michael Rodriguez',
    role: 'Lead Developer',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
    social: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com'
    }
  },
  {
    name: 'Emily Thompson',
    role: 'UI/UX Designer',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956',
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com'
    }
  },
  {
    name: 'David Kim',
    role: 'Marketing Director',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7',
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com'
    }
  },
  {
    name: 'Lisa Patel',
    role: 'Project Manager',
    image: 'https://images.unsplash.com/photo-1598550874175-4d0ef436c909',
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com'
    }
  }
];

export default function Team() {
  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text mb-4">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600">
            The talented people behind our success
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <TeamMember key={member.name} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
}
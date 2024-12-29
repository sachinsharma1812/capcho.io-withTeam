import { MapPin, Phone, Mail } from 'lucide-react';

interface ContactItemProps {
  icon: React.ReactNode;
  title: string;
  content: string;
  href?: string;
}

function ContactItem({ icon, title, content, href }: ContactItemProps) {
  return (
    <div className="flex items-start space-x-4 p-4 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow">
      <div className="text-blue-600">{icon}</div>
      <div>
        <h3 className="font-semibold text-gray-900">{title}</h3>
        {href ? (
          <a 
            href={href}
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            {content}
          </a>
        ) : (
          <p className="text-gray-600">{content}</p>
        )}
      </div>
    </div>
  );
}
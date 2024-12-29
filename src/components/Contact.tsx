import { FormEvent, useState } from 'react';
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

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Address",
      content: "Mansarovar Sector 7, Shipra Path, Barh Devariya, Mansarovar, Jaipur, Rajasthan 302020"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      content: "+91 7339799364",
      href: "tel:+917339799364"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      content: "sachinsharma75012@gmail.com",
      href: "mailto:sachinsharma75012@gmail.com"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text mb-12">
          Get in Touch
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-blue-900 mb-6">Contact Information</h3>
            {contactInfo.map((item) => (
              <ContactItem key={item.title} {...item} />
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-2xl shadow-lg">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-colors"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-colors"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                required
                rows={6}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-colors resize-none"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
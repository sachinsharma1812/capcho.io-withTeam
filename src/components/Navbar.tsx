import { Menu } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="text-white text-xl font-bold">Capcho.io</a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="#about">About Us</NavLink>
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#testimonials">Testimonials</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-gray-300 focus:outline-none"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavLink href="#about">About Us</MobileNavLink>
            <MobileNavLink href="#services">Services</MobileNavLink>
            <MobileNavLink href="#testimonials">Testimonials</MobileNavLink>
            <MobileNavLink href="#contact">Contact</MobileNavLink>
          </div>
        </div>
      )}
    </nav>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium transition-colors"
    >
      {children}
    </a>
  );
}

function MobileNavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="text-white hover:bg-blue-800 block px-3 py-2 rounded-md text-base font-medium"
    >
      {children}
    </a>
  );
}
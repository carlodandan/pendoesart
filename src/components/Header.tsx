import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Featured', path: '/featured' },
    { name: 'Commissions', path: '/commission' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-600 ${
        isScrolled 
          ? 'bg-black/85 backdrop-blur-sm py-4' 
          : 'bg-black py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className={`transition-transform duration-600 ${
            isScrolled ? 'scale-85' : 'scale-100'
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <h1 className="text-white font-light text-2xl tracking-widest">
            pen<span className="text-gray-400">does</span>art
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`text-white hover:text-gray-300 transition-colors duration-300 tracking-widest text-sm font-light relative group ${
                location.pathname === item.path ? 'text-gray-300' : ''
              }`}
            >
              {item.name}
              <span className={`absolute -bottom-1 left-0 h-px bg-white transition-all duration-300 group-hover:w-full ${
                location.pathname === item.path ? 'w-full' : 'w-0'
              }`}></span>
            </Link>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white z-60"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-95 z-40 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {/* Mobile Menu Content */}
            <div 
              className="fixed top-0 left-0 right-0 bg-black pt-24 pb-8 z-50"
              onClick={(e) => e.stopPropagation()}
            >
              <nav className="container mx-auto px-6">
                <ul className="space-y-6">
                  {navItems.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.path}
                        className={`block py-4 text-xl tracking-widest font-light transition-all duration-300 border-b border-gray-800 ${
                          location.pathname === item.path 
                            ? 'text-white border-white' 
                            : 'text-gray-400 hover:text-white hover:border-gray-500'
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                        {location.pathname === item.path && (
                          <span className="ml-4 text-sm text-gray-400">●</span>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>

                {/* Additional mobile-only info */}
                <div className="mt-12 pt-8 border-t border-gray-800">
                  <div className="text-gray-400 text-sm">
                    <p className="mb-2">pendoesart@gmail.com</p>
                    <p>Based in Manila, Philippines</p>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
// src/components/common/HeroSection.jsx
import { useState } from 'react';
import MobileNav from './MobileNav';
import logo from '@/assets/images/company.jpg';
import nyscFlyer from '@/assets/images/nysc.png'; // Ensure this matches the uploaded flyer
import { NAV_LINKS } from '@/utils/constants';

const HeroSection = ({ mediaType = 'image', mediaSrc = nyscFlyer, altText = 'De Kasio NYSC Registration Flyer' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <section className="relative w-full h-screen overflow-hidden" role="banner">
      {/* Media (Image or Video) */}
      {mediaType === 'video' ? (
        <video
          className="absolute inset-0 w-full h-full object-contain" // Changed to object-contain
          src={mediaSrc}
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true"
        />
      ) : (
        <img
          className="absolute inset-0 w-full h-full object-contain" // Changed to object-contain
          src={mediaSrc}
          alt={altText}
          loading="lazy"
        />
      )}

      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Logo Overlay (Top-Left) */}
      <div className="absolute top-4 left-4 z-20">
        <img
          src={logo}
          alt="De Kasio Cybercafe Logo"
          className="w-24 md:w-32 opacity-90"
        />
      </div>

      {/* Hamburger Menu (Top-Right) */}
      <button
        className="absolute top-4 right-4 z-20 p-2 text-white focus:outline-none focus:ring-2 focus:ring-primary"
        onClick={toggleMenu}
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isMenuOpen}
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
          />
        </svg>
      </button>

      {/* Mobile Navigation (Toggled by Hamburger) */}
      <MobileNav isOpen={isMenuOpen} onClose={toggleMenu} navLinks={NAV_LINKS} />
    </section>
  );
};

export default HeroSection;
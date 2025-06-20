// src/utils/constants.js
export const COLORS = {
  primary: '#007BFF',
  secondary: '#FFFFFF',
  accent: '#28A745',
  neutral: '#6C757D',
  primaryHover: '#0056b3',
};

export const BREAKPOINTS = {
  mobile: 320,
  tablet: 577,
  desktop: 769,
  xl: 1440,
};

export const SERVICES = [
  { id: 'printing', name: 'Typing & Printing', path: '/services/printing', image: 'service-printing.png' },
  { id: 'registration', name: 'JAMB/WAEC/NYSC Registration', path: '/services/registration', image: 'service-jamb.png' },
  { id: 'training', name: 'Computer Training', path: '/services/training', image: 'service-training.png' },
  { id: 'other', name: 'Other Services', path: '/services/other', image: 'placeholder.webp' },
];

export const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
  { name: 'Blog', path: '/blog' },
];
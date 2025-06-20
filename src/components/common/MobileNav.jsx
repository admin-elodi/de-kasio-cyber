// src/components/common/MobileNav.jsx
const MobileNav = ({ isOpen, onClose, navLinks }) => {
  return (
    <nav
      className={`fixed top-0 right-0 h-full w-64 bg-white text-neutral z-30 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } md:w-80`}
      role="navigation"
      aria-label="Mobile navigation"
    >
      <div className="flex justify-end p-4">
        <button
          onClick={onClose}
          className="text-neutral focus:outline-none focus:ring-2 focus:ring-primary"
          aria-label="Close menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <ul className="flex flex-col p-4 space-y-4">
        {navLinks.map((link) => (
          <li key={link.path}>
            <a
              href={link.path}
              className="font-poppins text-lg text-neutral hover:text-primary"
              onClick={onClose}
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MobileNav;
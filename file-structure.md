de-kasio/
├── public/                             # Public assets (non-optimized, minimal)
│   ├── favicon.ico                     # Browser favicon
│   ├── manifest.json                   # Web manifest for PWA (optional)
│   └── robots.txt                      # SEO robots configuration
├── src/                                # Source code
│   ├── assets/                         # Static assets
│   │   ├── images/                     # Images (optimized, imported in components)
│   │   │   ├── logo.png                # De Kasio logo
│   │   │   ├── hero.jpg                # Homepage hero image
│   │   │   ├── staff.jpg               # Staff photo (real or stock)
│   │   │   ├── equipment.jpg           # Cybercafe equipment photo
│   │   │   ├── service-printing.png    # Icon/image for printing service
│   │   │   ├── service-jamb.png        # Icon/image for JAMB/WAEC/NYSC
│   │   │   ├── service-training.png    # Icon/image for computer training
│   │   │   └── placeholder.webp        # Fallback image (WebP for performance)
│   │   └── fonts/                      # Custom fonts (if Poppins not via CDN)
│   ├── components/                     # Reusable UI components
│   │   ├── common/                     # Generic, reusable components
│   │   │   ├── Button.jsx              # Primary/Secondary buttons (Tailwind-styled)
│   │   │   ├── Card.jsx                # Service/testimonial card (300x200px)
│   │   │   ├── Footer.jsx              # Footer with links, socials, contact
│   │   │   ├── Header.jsx              # Sticky header with nav
│   │   │   ├── Input.jsx               # Form input field (with validation)
│   │   │   ├── Modal.jsx               # Modal for form confirmations
│   │   │   ├── Spinner.jsx             # Loading spinner for forms
│   │   │   └── Testimonial.jsx         # Testimonial slider item
│   │   ├── forms/                      # Form-specific components
│   │   │   ├── ContactForm.jsx         # Inquiry form (name, phone, email, etc.)
│   │   │   ├── FileUploadForm.jsx      # File upload form (PDF/DOCX, 5MB max)
│   │   │   └── FormError.jsx           # Error message component
│   │   └── layout/                     # Layout components
│   │       ├── MainLayout.jsx          # Main layout (header, footer, content)
│   │       └── MobileNav.jsx           # Hamburger menu for mobile
│   ├── hooks/                          # Custom React hooks
│   │   ├── useFormValidation.js        # Form validation logic
│   │   ├── useMediaQuery.js            # Responsive breakpoint detection
│   │   └── useModal.js                 # Modal state management
│   ├── pages/                          # Page components
│   │   ├── About.jsx                   # About Us page
│   │   ├── Contact.jsx                 # Contact page (form, WhatsApp, map)
│   │   ├── Home.jsx                    # Homepage (hero, services, testimonials)
│   │   ├── Services.jsx                # Services page (tabbed layout)
│   │   ├── ServiceDetail.jsx           # Subpage for specific service (e.g., JAMB)
│   │   ├── Blog.jsx                    # Blog page (optional)
│   │   ├── BlogPost.jsx                # Single blog post (optional)
│   │   └── NotFound.jsx                # 404 error page
│   ├── styles/                         # Tailwind and global styles
│   │   ├── globals.css                 # Global CSS (resets, custom styles)
│   │   └── tailwind.css                # Tailwind directives
│   ├── utils/                          # Utility functions
│   │   ├── constants.js                # Constants (colors, breakpoints, services)
│   │   ├── api.js                      # API fetch functions (for future backend)
│   │   ├── formatters.js               # Formatting helpers (e.g., phone validation)
│   │   └── seo.js                      # SEO meta tag helpers
│   ├── App.jsx                         # Main app component (router setup)
│   ├── main.jsx                        # Entry point
│   └── vite-env.d.ts                   # Vite environment types (for IDE support)
├── .eslintrc.json                      # ESLint configuration
├── .gitignore                          # Git ignore file
├── package.json                        # Dependencies and scripts
├── postcss.config.js                   # PostCSS for Tailwind
├── tailwind.config.js                  # Tailwind v4 configuration
├── vite.config.js                      # Vite configuration
└── README.md                           # Project documentation
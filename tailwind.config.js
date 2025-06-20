/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#007BFF',
        secondary: '#FFFFFF',
        accent: '#28A745',
        neutral: '#6C757D',
        primaryHover: '#0056b3',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        h1: '32px',
        h2: '24px',
        h3: '18px',
        body: '16px',
      },
      lineHeight: {
        body: '1.5',
      },
      borderRadius: {
        button: '8px',
      },
      screens: {
        mobile: '320px',
        tablet: '577px',
        desktop: '769px',
        xl: '1440px',
      },
    },
  },
}
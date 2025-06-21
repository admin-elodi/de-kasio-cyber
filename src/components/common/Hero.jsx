// src/components/common/Hero.jsx
import React, { useState, useEffect } from 'react';
import nysc from '@/assets/images/nysc.jpg';
import company from '@/assets/images/company.jpg';
import desktop from '@/assets/images/desktop.jpg';
import logo from '@/assets/images/globe.png';

const Hero = () => {
  const images = [nysc, company, desktop];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, images.length]);

  const togglePlayPause = () => setIsPlaying(!isPlaying);

  return (
    <div className="relative w-[90vw] h-screen left-1/2 -translate-x-1/2 overflow-hidden border-8 border-black">
      {/* Header overlay */}
      <div className="absolute top-0 left-0 w-full h-[15vh] bg-black flex items-center justify-between px-5 box-border z-20">
        <img
          src={logo}
          alt="De-Kasio Logo"
          className="h-4/5 object-contain ml-auto" // Added ml-auto for left margin from parent
        />

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[21] flex flex-col items-center">
          <div className="bg-[#f0f0f0] w-[300px] text-center px-10 py-8 rounded-md font-bold text-[clamp(1rem,2vw,1.5rem)] uppercase shadow-md border border-black">
            De-Kasio Cyber
          </div>
          <div className="text-white text-lg text-center mt-2">Ongoing & Upcoming Registrations!</div>
        </div>

        <div className="cursor-pointer mr-auto"> {/* Added mr-auto for right margin from parent */}
          <svg width="30" height="30" viewBox="0 0 100 80" fill="white">
            <rect width="100" height="15"></rect>
            <rect y="30" width="100" height="15"></rect>
            <rect y="60" width="100" height="15"></rect>
          </svg>
        </div>
      </div>

      {/* Image carousel */}
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Announcement ${index + 1}`}
          className={`absolute top-0 w-full h-full object-cover transition-all duration-500 ease-in-out ${
            index === currentIndex ? 'left-0' : 'left-full'
          }`}
        />
      ))}

      {/* Status Bar */}
      <div className="absolute bottom-0 w-full h-[7.5vh] bg-black flex items-center justify-center px-8 z-30">
        <button
          className="bg-gray-400 text-black w-36 h-10 flex items-center justify-center rounded-md font-bold border-[3px] border-black outline outline-2 outline-white transition-colors duration-300 hover:bg-gray-500"
          onClick={togglePlayPause}
          aria-label={isPlaying ? 'Pause carousel' : 'Play carousel'}
        >
          {isPlaying ? 'Pause' : 'Play'}
        </button>
      </div>
    </div>
  );
};

export default Hero;
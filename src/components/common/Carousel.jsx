import { useState, useEffect } from 'react';

const announcementImages = [
  '/@assets/images/desktop.jpg',
  '/@assets/images/logo.jpg',
  '/@assets/images/nysc.png',
 
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    let interval = null;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % announcementImages.length);
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const togglePlay = () => setIsPlaying(!isPlaying);

  return (
    <div className="carousel-container relative w-full max-w-md mx-auto">
      <img
        src={announcementImages[currentIndex]}
        alt={`Announcement ${currentIndex + 1}`}
        className="w-full h-auto rounded-lg shadow-lg"
      />
      <button
        onClick={togglePlay}
        className="absolute bottom-2 right-2 bg-black/70 text-white px-3 py-1 rounded-full text-sm"
        aria-label={isPlaying ? 'Pause carousel' : 'Play carousel'}
      >
        {isPlaying ? '⏸️' : '▶️'}
      </button>
    </div>
  );
};

export default Carousel;

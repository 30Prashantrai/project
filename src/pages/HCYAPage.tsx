import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../hooks/useLanguage';

const activities = [
  {
    name: 'Praise and Worship',
    description: (
      <>
        Praise and worship at Home Church is where young adults get real with God—full of passion, purpose, and powerful moments.{' '}
        <em>It’s not just music, it’s a movement of hearts lifting up Jesus together.</em>
      </>
    ),
  },
  {
    name: 'Fun & Games',
    description: (
      <>
        From icebreakers to group challenges, there’s always laughter and excitement.{' '}
        <em>A great way to loosen up and build connections.</em>
      </>
    ),
  },
  {
    name: 'Snacks & Photos',
    description: (
      <>
        Grab a bite, snap a moment.{' '}
        <em>Because who doesn’t love good food and great memories?</em>
      </>
    ),
  },
  {
    name: 'Building Relationships',
    description: (
      <>
        We’re all about real talks and meaningful moments.{' '}
        <em>Come as strangers, leave as friends.</em>
      </>
    ),
  },
  {
    name: 'Prayer Time',
    description: (
      <>
        We believe in the power of prayer.{' '}
        <em>It’s a space to pause, reflect, and lift each other up.</em>
      </>
    ),
  },
  {
    name: 'Knowing Each Other',
    description: (
      <>
        Get to know stories, backgrounds, and dreams.{' '}
        <em>It’s not just an event—it’s family.</em>
      </>
    ),
  },
];

const initialImages = [
  '/images/1.jpg',
  '/images/2.jpg',
  '/images/3.jpg',
  '/images/4.jpg',
  '/images/5.jpg',
  '/images/6.jpg',
  '/images/7.jpg',
  '/images/8.jpg',
  '/images/9.jpg',
  '/images/10.jpg',
];

export const HCYAPage: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t } = useLanguage();
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartX = useRef<number | null>(null);

  const startAutoPlay = () => {
    stopAutoPlay();
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % initialImages.length);
    }, 5000);
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const goToPrevious = () => {
    stopAutoPlay();
    setCurrentIndex((prev) => (prev === 0 ? initialImages.length - 1 : prev - 1));
    startAutoPlay();
  };

  const goToNext = () => {
    stopAutoPlay();
    setCurrentIndex((prev) => (prev + 1) % initialImages.length);
    startAutoPlay();
  };

  useEffect(() => {
    startAutoPlay();
    return stopAutoPlay;
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') goToPrevious();
      if (e.key === 'ArrowRight') goToNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    if (deltaX > 50) goToPrevious();
    else if (deltaX < -50) goToNext();
    touchStartX.current = null;
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="text-center py-8 bg-gray-800">
        <h1 className="text-5xl font-bold">{t('HOME CHURCH YOUNG ADULTS')}</h1>
        <p className="mt-2 text-lg">{t('Praise, Fun and Build Relationship')}</p>
        <div className="mt-4 text-lg">
          <p className="font-semibold">{t('YOUNG ADULTS EVERY THURSDAY')}</p>
          <p>{t("Don't forget to join us @ 7:30 AM")}</p>
          <p>{t('3rd floor, Bhavani Mansion,  Nungambakkam, Chennai')}</p>
        </div>
      </header>

      {/* Gospel Section */}
      <p className="mb-8 text-lg italic text-gray-300 px-8">
        At Home Church, we’re all about the gospel—and it’s seriously good news!
      </p>
      <p className="mb-8 text-lg italic text-gray-300 px-8">
        So, what’s the gospel, exactly? It’s the ultimate game-changer. God became a person in Jesus, lived the perfect life we all dream about,
        and then took on the weight of all our mistakes by dying for us. But the story doesn’t end there—He came back to life three days later,
        proving He’s the Son of God and offering us a fresh start. All you have to do is believe and choose to follow Him.
      </p>
      <p className="mb-8 text-lg italic text-gray-300 px-8">
        Why does it matter? We’re all looking for purpose, meaning, and connection. And honestly, we all need Jesus. But we also need a place where we
        can be real, grow, and build relationships that matter. At Home Church, we’re not just about Sundays—we’re about creating a community
        where you can connect, have fun, and walk through life with others who get it.
      </p>

      <main className="p-8">
        <div
          className="relative h-screen overflow-hidden flex items-center justify-center mb-8"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 z-20 bg-gray-800 text-white p-4 rounded-full transform transition-transform hover:scale-125 hover:bg-gray-700"
            aria-label="Previous slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 z-20 bg-gray-800 text-white p-4 rounded-full transform transition-transform hover:scale-125 hover:bg-gray-700"
            aria-label="Next slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Image Slides */}
          {initialImages.map((src, index) => (
            <img
              key={index}
              src={src}
              loading="lazy"
              alt={`Activity ${index + 1}`}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-in-out ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ zIndex: index === currentIndex ? 10 : 0 }}
            />
          ))}

          {/* Dots */}
          <div className="absolute bottom-4 flex space-x-2 z-20">
            {initialImages.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  stopAutoPlay();
                  setCurrentIndex(index);
                  startAutoPlay();
                }}
                className={`h-3 w-3 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-500'}`}
              />
            ))}
          </div>
        </div>

        {/* Activities */}
        <section className="bg-black text-white p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">WHAT WE DO</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-sm">
            {activities.map((activity, index) => (
              <div
                key={index}
                className="p-4 bg-white rounded-lg shadow-md text-black transition-colors duration-300 hover:bg-black hover:text-white"
              >
                <h3 className="text-xl font-semibold">{activity.name}</h3>
                <p className="mt-2">{activity.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Closing Statement */}
      <div className="text-center py-8 italic text-2xl font-bold text-white">
        Everyone Needs Jesus, Everyone Needs a Home
      </div>
    </div>
  );
};

export default HCYAPage;

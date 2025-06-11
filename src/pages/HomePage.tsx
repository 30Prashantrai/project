import React from 'react';
import { Hero } from '../components/sections/Hero';
import { FaInstagram, FaYoutube, FaFacebookF } from 'react-icons/fa';
import { SiGoogleplay } from 'react-icons/si';

export const HomePage: React.FC = () => {
  const pastors = [
    {
      name: 'Youth Pastor Barkha Dewan',
      img: '/images/Barkha.jpg',
    },
    {
      name: 'Youth Pastor Nabin Limbu',
      img: '/images/Nabin.jpg',
    },
    {
      name: 'Worship Pastor Niraj Gadaily',
      img: '/images/Niraj.jpg',
    },
  ];

  return (
    <div className="bg-gray-900 min-h-screen text-gray-100">
      <Hero />

      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Meet our Head Pastor at Home Church Chennai Nepali Location</h2>
          <img
            src="/images/pastor-Raju.jpg"
            alt="Head Pastor's Family"
            className="w-full max-w-4xl mx-auto rounded-lg border border-gray-700 shadow-lg mb-4"
          />
          <p className="italic text-gray-500 font-medium text-lg tracking-wide">
            Meet our head pastor Raju Tamang and his wonderful wife Romila Tamang, who leads our church with love,
            faith, and dedication.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-900">
        {/* Container with full width padding */}
        <div className="max-w-full mx-auto flex flex-col lg:flex-row gap-12 px-6 lg:px-16">
          {/* LEFT: HCYA Pastors */}
          <div className="lg:w-1/2 flex flex-col">
            <h2 className="text-4xl font-bold mb-8 text-left">MEET OUR HCYA PASTORS</h2>
            <div className="flex space-x-8">
              {pastors.map((pastor, index) => (
                <div key={index} className="w-56 flex flex-col items-center">
                  <img
                    src={pastor.img}
                    alt={pastor.name}
                    className="w-60 h-80 object-cover rounded-lg border border-gray-700 shadow-lg mb-2"
                  />
                  <p className="italic text-gray-500 font-medium text-lg text-center tracking-wide">
                    {pastor.name}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Social Media + YouTube Live */}
          <div className="lg:w-1/2 flex flex-col items-center space-y-4">
            <h2 className="text-2xl font-bold mb-2">FOLLOW US ON SOCIAL MEDIA</h2>

            <div className="flex justify-center space-x-6 text-3xl">
              <a
                href="https://www.instagram.com/hcyachennainepali/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-600 hover:text-pink-800"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.youtube.com/@homechurchnepali"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 hover:text-red-800"
                aria-label="YouTube"
              >
                <FaYoutube />
              </a>
              <a
                href="https://www.facebook.com/HomeChurchChennaiNepalilocation/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.youversion.com/the-bible-app/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Bible App"
                className="hover:opacity-80 transition-opacity"
              >
                <img
                  src="/images/bible.png"
                  alt="Bible App"
                  className="w-10 h-10 object-contain"
                />
              </a>

            </div>

            <div className="w-full max-w-full" style={{ height: '450px' }}>
              <iframe
                className="w-full h-full rounded-lg shadow-lg border border-gray-700"
                src="https://www.youtube.com/embed/9CObEMVml60?autoplay=0&mute=0"
                title="YouTube Live Stream"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

import React from 'react';
import { Clock, Calendar } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';

export const Services: React.FC = () => {
  const { t } = useLanguage();

  const services = [
    {
      titleKey: '1st ervices.sunday.Morning',
      day: 'Sunday',
      time: '6:30 AM',
      description: 'Main worship service with sermon and communion'
    },
    {
      titleKey: '2nd services.sunday.Morning',
      day: 'Sunday', 
      time: '8:30 AM',
      description: 'Praise and worship service'
    },
    {
      titleKey: 'Bible study',
      day: 'Tuesday and Thursday',
      time: '7:00 PM',
      description: 'Bible study and discipleship training'
    },
    {
      titleKey: 'HCYA',
      day: 'Thursday',
      time: '7:30 AM',
      description: 'Fun, worship and fellowship for youth and young adults'
    }
  ];

  return (
    <>
      {/* Hero Video Section */}
      <section className="relative h-[600px] overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src="/video/Video-home.mp4"
          autoPlay
          loop
          muted
        />
        <div className="relative z-10 h-full w-full flex items-center justify-center bg-black/50">
          {/*<h1 className="text-white text-5xl font-bold text-center">
            {t('services.title')}
          </h1>*/}
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 font-sans tracking-tight">
              {t('services.title')}
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-800 font-medium italic tracking-wide max-w-2xl mx-auto">
              Join us for our regular worship services and fellowship opportunities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2"
              >
                <div className="flex items-center gap-2 text-blue-600 mb-4">
                  <Calendar size={20} />
                  <span className="font-bold">{service.day}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {t(service.titleKey)}
                </h3>

                <div className="flex items-center gap-2 text-gray-700 mb-3">
                  <Clock size={16} />
                  <span className="font-medium">{service.time}</span>
                </div>

                <p className="text-gray-600 text-sm">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

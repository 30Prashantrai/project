import React from 'react';
import { Heart, Users, Book } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';

export const About: React.FC = () => {
  const { t } = useLanguage();

  const features = [
    { icon: Heart, title: 'Love & Care', color: 'text-red-500' },
    { icon: Users, title: 'Community', color: 'text-blue-500' },
    { icon: Book, title: 'Bible Study', color: 'text-green-500' }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t('about.title')}
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {t('about.description')}
            </p>

            <div className="grid sm:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-lg mb-4 ${feature.color}`}>
                    <feature.icon size={24} />
                  </div>
                  <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/worship.jpg"
                alt="Church Community"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-yellow-500 rounded-full opacity-20"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-500 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
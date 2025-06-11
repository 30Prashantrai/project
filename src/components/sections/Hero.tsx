import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-[url('/images/church-background.jpg')] bg-cover bg-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%227%22 cy=%227%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>


      <div className="relative z-100 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto mt-40 sm:mt-50 lg:mt-60">
        <h1 className="text-4xl sm:text-5xl lg:text-8xl font-bold text-white mb-5 leading-tight">
          {t('hero.welcome')}
        </h1>
        
        <p className="text-xl sm:text-2xl text-blue-100 mb-8 leading-relaxed">
          {t('hero.subtitle')}
        </p>

        <button className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
          {t('hero.cta')}
          <ArrowRight size={20} />
        </button>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
};
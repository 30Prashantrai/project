import React from 'react';
import { MessageCircle, Heart, SprayCan as Pray } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';

export const Contact: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            {t('contact.title')}
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8"></div>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            {t('contact.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300">
            <div className="bg-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="text-blue-900" size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Join Us</h3>
            <p className="text-blue-100">Come worship with our church family every Sunday</p>
          </div>

          <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300">
            <div className="bg-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="text-blue-900" size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Connect</h3>
            <p className="text-blue-100">Build meaningful relationships in our community</p>
          </div>

          <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300">
            <div className="bg-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Pray className="text-blue-900" size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Pray</h3>
            <p className="text-blue-100">Share your prayer requests with our prayer team</p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-16 text-center bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-4">Contact Information</h3>
          <ul className="text-blue-100 space-y-2">
            <li>Name: Pastor Raju Tamang, Phone: +91-9884163755</li>
            <li>Name: Kamal Kandel Phone: +91-9094192692</li>
            <li>Name: Pastor Dinesh, Phone: +91-8015993807</li>
            <li>Name: Prashant Rai, Phone: +91-8248824026</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

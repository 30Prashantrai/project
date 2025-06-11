import React, { useState, useRef, useEffect } from 'react';
import { MapPin, Phone, Mail, Navigation } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';

export const Location: React.FC = () => {
  const { t } = useLanguage();
  const [customAddress, setCustomAddress] = useState('');
  const [currentLocation, setCurrentLocation] = useState({
    address: '3rd floor, Bhavani Mansion, 4th Lane, Nungambakkam High Rd, Nungambakkam, Chennai, Tamil Nadu 600034',
    coordinates: { lat: 13.0422, lng: 80.2460 }
  });
  const mapRef = useRef<HTMLDivElement>(null);

  const contactInfo = {
    phone: '+91 98841 63755',
    email: 'Homechurch@gmail.com'
  };

  useEffect(() => {
    initializeMap();
  }, [currentLocation]);

  const initializeMap = () => {
    if (!mapRef.current) return;

    // Simple map placeholder - In production, you would integrate with Google Maps API
    const mapHTML = `
      <div class="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center">
        <div class="text-center">
          <div class="text-blue-600 mb-2">
            <svg class="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
          </div>
          <p class="text-gray-600 font-medium">Interactive Map</p>
          <p class="text-gray-500 text-sm">${currentLocation.address}</p>
        </div>
      </div>
    `;
    
    mapRef.current.innerHTML = mapHTML;
  };

  const updateLocation = () => {
    if (customAddress.trim()) {
      // In production, you would geocode the address
      setCurrentLocation({
        address: customAddress,
        coordinates: { lat: 13.0422 + Math.random() * 0.01, lng: 80.2460 + Math.random() * 0.01 }
      });
      setCustomAddress('');
    }
  };

  return (
    <section id="location" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t('location.title')}
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <MapPin className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{t('location.address')}</h4>
                    <p className="text-gray-600">{currentLocation.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Phone className="text-green-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{t('location.phone')}</h4>
                    <p className="text-gray-600">{contactInfo.phone}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <Mail className="text-purple-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{t('location.email')}</h4>
                    <p className="text-gray-600">{contactInfo.email}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Custom Address Input */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {t('location.customAddress')}
              </h3>
              <div className="flex gap-3">
                <input
                  type="text"
                  value={customAddress}
                  onChange={(e) => setCustomAddress(e.target.value)}
                  placeholder="Enter new address..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button
                  onClick={updateLocation}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center gap-2"
                >
                  <Navigation size={16} />
                  {t('location.updateMap')}
                </button>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div ref={mapRef} className="w-full h-96 rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
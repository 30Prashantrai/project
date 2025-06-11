import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

interface LocationInfo {
  name: string;
  churchTeamImage: string;
  pastorFamilyImage: string;
  pastorName: string;
  description: string;
  address: string;
  phone: string;
  email: string;
}

const LOCATION_DETAILS: Record<string, LocationInfo> = {
  'nungambakkam-chennai': {
    name: 'Nungambakkam, Chennai',
    churchTeamImage: '/images/churches/nungambakkam-team.jpg', // Full Church Team Image
    pastorFamilyImage: '/images/pastors/nungambakkam-family.jpg', // Pastor's Family Image
    pastorName: 'Pastor Michael Joseph',
    description: 'Serving the Nungambakkam community with faith and dedication.',
    address: '3rd floor, Bhavani Mansion, 4th Lane, Nungambakkam High Rd, Nungambakkam, Chennai, Tamil Nadu 600034',
    phone: '+91 98841 63755',
    email: 'nungambakkam@homechurch.com',
  },
  'chennai-omr': {
    name: 'Chennai OMR',
    churchTeamImage: '/images/churches/chennai-omr-team.jpg', // Full Church Team Image
    pastorFamilyImage: '/images/pastors/chennai-family.jpg', // Pastor's Family Image
    pastorName: 'Pastor Raj Kumar',
    description: 'Serving the Chennai OMR area with love and leadership since 2018...',
    address: 'OMR Road, Chennai, Tamil Nadu',
    phone: '+91 91234 56789',
    email: 'omr@homechurch.com',
  },
  'bangalore': {
    name: 'Bangalore',
    churchTeamImage: '/images/churches/bangalore-team.jpg', // Full Church Team Image
    pastorFamilyImage: '/images/pastors/bangalore-family.jpg', // Pastor's Family Image
    pastorName: 'Pastor Samuel Jacob',
    description: 'Leading the Bangalore branch with a focus on youth and discipleship...',
    address: 'MG Road, Bangalore, Karnataka',
    phone: '+91 98765 43210',
    email: 'bangalore@homechurch.com',
  },
  'kerala': {
    name: 'Kerala',
    churchTeamImage: '/images/churches/kerala-team.jpg', // Full Church Team Image
    pastorFamilyImage: '/images/pastors/kerala-family.jpg', // Pastor's Family Image
    pastorName: 'Pastor Anil George',
    description: 'Located in the heart of Kerala, known for its strong worship team...',
    address: 'Kochi, Kerala',
    phone: '+91 91234 56700',
    email: 'kerala@homechurch.com',
  },
  'thiruvananthapuram': {
    name: 'Thiruvananthapuram',
    churchTeamImage: '/images/churches/tvm-team.jpg', // Full Church Team Image
    pastorFamilyImage: '/images/pastors/tvm-family.jpg', // Pastor's Family Image
    pastorName: 'Pastor Binoy Varghese',
    description: 'Ministering to the southern tip of India with compassion and community work...',
    address: 'Palayam, Thiruvananthapuram, Kerala',
    phone: '+91 98765 43200',
    email: 'tvm@homechurch.com',
  },
  'surkhet-nepal': {
    name: 'Surkhet, Nepal',
    churchTeamImage: '/images/churches/surkhet-team.jpg', // Full Church Team Image
    pastorFamilyImage: '/images/pastors/surkhet-family.jpg', // Pastor's Family Image
    pastorName: 'Pastor Dinesh Rai',
    description: 'Bringing the Gospel to the hills of Nepal and shepherding a growing flock...',
    address: 'Surkhet, Nepal',
    phone: '+977 98412 34567',
    email: 'surkhet@homechurch.com',
  },
};

export const LocationDetails: React.FC = () => {
  const { locationName } = useParams<{ locationName: string }>();
  const { t } = useLanguage();

  const location = LOCATION_DETAILS[locationName ?? ''];

  useEffect(() => {
    if (!location) {
      console.error("Location not found");
    }
  }, [location]);

  if (!location) {
    return <div className="p-10 text-red-500">Location not found.</div>;
  }

  return (
    <section className="max-w-6xl mx-auto py-20 px-4">
      {/* Location Name at the top */}
      <h1 className="text-4xl font-bold text-center mb-6">{location.name}</h1>

      {/* Full Church Team Image */}
      <div className="mb-12">
        <img
          src={location.churchTeamImage}
          alt="Church Team"
          className="w-full h-[50vh] object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Pastor's Info Layout */}
      <div className="flex flex-col lg:flex-row items-center justify-between mb-12">
        {/* Pastor's Family Image on Left */}
        <div className="lg:w-1/3 mb-6 lg:mb-0">
          <img
            src={location.pastorFamilyImage}
            alt="Pastor Family"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Pastor's Name & Description on Right */}
        <div className="lg:w-2/3 text-center lg:text-left">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">{location.pastorName}</h2>
          <p className="text-gray-600 italic mb-6">{location.description}</p>
        </div>
      </div>

      {/* Address and Contact Info Section */}
      <div className="flex justify-center mb-12">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
          <h3 className="text-xl font-semibold text-center mb-4">{t('location.contactInformation')}</h3>

          {/* Address */}
          <div className="flex items-start gap-4 mb-4">
            <div className="bg-blue-100 p-3 rounded-lg">
              <MapPin className="text-blue-600" size={20} />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">{t('location.address')}</h4>
              <p className="text-gray-600">{location.address}</p>
            </div>
          </div>

          {/* Phone Number */}
          <div className="flex items-start gap-4 mb-4">
            <div className="bg-green-100 p-3 rounded-lg">
              <Phone className="text-green-600" size={20} />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">{t('location.phone')}</h4>
              <p className="text-gray-600">{location.phone}</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4">
            <div className="bg-purple-100 p-3 rounded-lg">
              <Mail className="text-purple-600" size={20} />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">{t('location.email')}</h4>
              <p className="text-gray-600">{location.email}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { About } from '../components/sections/About';

export const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <About />

      <section className="py-20 bg-gray-900 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-extrabold text-red-600 mb-8">"Everyone Needs Jesus Everyone Needs a Home"</h1>
          <h2 className="text-4xl font-extrabold text-white mb-4">Our Locations</h2>
          <ul className="text-lg text-gray-300 max-w-4xl mx-auto space-y-4">
            <li><strong>Chennai:</strong> 3rd floor, Bhavani Mansion, 4th Lane, Nungambakkam High Rd, Nungambakkam, Chennai, Tamil Nadu 600034</li>
            <li><strong>Surkhet Nepal:</strong> Surkhet, Nepal</li>
            <li><strong>Bangalore:</strong> Koramangala 1A Block, S T Bed Layout, Koramangala, Bengaluru, Karnataka 560095</li>
            <li><strong>Chennai:</strong> No.1, Gerizim street, OMR, Main Road, Seevaram Salai, Seevaram, Perungudi, Chennai, Tamil Nadu 600096</li>
            <li><strong>Kerala:</strong> 2nd floor, Gilgal building, Palarivattom - Edappally Rd, opp. Modern Food Industries Limited, Devankulangara, Mamangalam, Edappally, Ernakulam, Kerala 682024</li>
            <li><strong>Thiruvananthapuram:</strong> Aristo, Thampanoor, Thiruvananthapuram, Kerala 695014</li>
          </ul>
        </div>
      </section>

      <section className="py-20 bg-gray-800 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-extrabold text-white mb-8">Our Values</h2>
          <ul className="text-lg text-gray-300 max-w-4xl mx-auto space-y-4 text-left">
            <li><strong>1. Engage the Culture:</strong> We interact with and influence the world around us in meaningful ways.</li>
            <li><strong>2. Live in Authentic Relationships:</strong> We value honest, transparent, and supportive relationships.</li>
            <li><strong>3. Empower the Potential of People:</strong> We invest in others to help them realize their God-given potential.</li>
            <li><strong>4. Driven by Compassion:</strong> We act from a heart of mercy and kindness towards others.</li>
            <li><strong>5. For all Generations:</strong> We build with a vision that includes and values every age group.</li>
          </ul>
        </div>
      </section>

      <section className="py-20 bg-gray-900 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-extrabold text-white mb-8">Culture Targets</h2>
          <ul className="text-lg text-gray-300 max-w-5xl mx-auto space-y-6 text-left">
            <li>
              <strong>1. Volunteer Culture:</strong> Everyone has a part and everyone contributes.
            </li>
            <li>
              <strong>2. Worship Experience Culture:</strong> We always come expecting God to move, creating an atmosphere where people can be changed in His presence.
            </li>
            <li>
              <strong>3. Honor Culture:</strong><br />
              <strong>People:</strong> We treat everyone with honor regardless of age or position.<br />
              <strong>God’s House:</strong> We honor by being on time, checking our children into the Nursery and Kids Ministry, and by not moving during the altar call when people are making eternal decisions.
            </li>
            <li>
              <strong>4. Giving Culture:</strong> We give God our first and our best with tithes and offerings. We love to give whenever and however we can.
            </li>
            <li>
              <strong>5. Relational Culture:</strong> We are building authentic, lasting friendships and always have room for someone new to become part of our life.
            </li>
            <li>
              <strong>6. Bringing Culture:</strong> We bring as many people as we can to God’s house to see their lives changed by Jesus. Inviting is good; bringing is better.
            </li>
            <li>
              <strong>7. Life Giving Culture:</strong> We encourage one another and together we believe God for greater things.
            </li>
          </ul>
        </div>
      </section>

      <section className="py-20 bg-gray-800 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-extrabold text-white mb-8">Vision</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            To inspire and empower individuals to live a life of purpose and faith, creating a positive impact in the world.
          </p>
        </div>
      </section>
    </div>
  );
};

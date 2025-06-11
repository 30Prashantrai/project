import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/images/logo.png" alt="Home Church Logo" className="h-8 w-8" />
              <span className="text-xl font-bold">Home Church</span>
            </div>

            {/* NEW: Bold, Big, Italic Message */}
            <p className="text-2xl font-bold italic text-white mb-4">
              THIS IS YOUR HOME WHERE YOU BELONG.
            </p>

            <p className="text-gray-400 mb-4">
              Home Church is a multi-site church based in Alberta Canada, with locations in many nations of the world. The heartbeat of our church is "Everyone needs Jesus, Everyone needs a home." Our hope is that everyone who walks into any of our locations would feel right at H-O-M-E. Our mission is to connect everyone to Jesus and His Church.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/location" className="hover:text-white transition-colors">Location</Link></li>
              <li><Link to="/giving" className="hover:text-white transition-colors">Giving</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2 text-gray-400">
              <p>3rd floor, Bhavani Mansion, 4th Lane</p>
              <p>Nungambakkam High Rd, Nungambakkam</p>
              <p>Chennai, Tamil Nadu 600034</p>
              <p>Tamil Nadu, India</p>
              <p className="mt-4">Phone: +91 98841 63755</p>
              <p>Email: Homechurch@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            © 2026 Home Church Chennai Nepali Location. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

// components/common/LocationDropdown.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const LOCATIONS = [
  { name: 'Nungambakkam, Chennai', slug: 'nungambakkam-chennai' },
  { name: 'Chennai OMR', slug: 'chennai-omr' },
  { name: 'Bangalore', slug: 'bangalore' },
  { name: 'Kerala', slug: 'kerala' },
  { name: 'Thiruvananthapuram', slug: 'thiruvananthapuram' },
  { name: 'Surkhet, Nepal', slug: 'surkhet-nepal' },
];

export const LocationDropdown: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        className="flex items-center gap-1 text-white hover:text-blue-300"
        onClick={() => setOpen(!open)}
      >
        Location <ChevronDown size={16} />
      </button>
      {open && (
        <div className="absolute z-50 mt-2 bg-white text-black rounded shadow-lg">
          {LOCATIONS.map((loc) => (
            <Link
              key={loc.slug}
              to={`/location/${loc.slug}`}
              className="block px-4 py-2 hover:bg-blue-100"
              onClick={() => setOpen(false)}
            >
              {loc.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

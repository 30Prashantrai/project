import React, { useState } from 'react';
import { Menu, X, LogIn, LogOut, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../../hooks/useLanguage';
import { useAuth } from '../../hooks/useAuth';
import { LanguageToggle } from '../common/LanguageToggle';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const { t } = useLanguage();
  const { user, signOut } = useAuth();
  const location = useLocation();

  const navigation = [
    { key: 'nav.home', href: '/' },
    { key: 'nav.about', href: '/about' },
    { key: 'nav.services', href: '/services' },
    { key: 'nav.events', href: '/events' },
    // Location handled separately as dropdown
    { key: 'nav.giving', href: '/giving' },
    { key: 'nav.registration', href: '/registration' },
    { key: 'nav.contact', href: '/contact' }
  ];

  const churchLocations = [
    { name: 'Chennai OMR', path: '/location/chennai-omr' },
    { name: 'Bangalore', path: '/location/bangalore' },
    { name: 'Kerala', path: '/location/kerala' },
    { name: 'Thiruvananthapuram', path: '/location/thiruvananthapuram' },
    { name: 'Surkhet Nepal', path: '/location/surkhet-nepal' }
  ];

  const isActive = (href: string) => location.pathname === href;
  const isLocationActive = () => location.pathname.startsWith('/location');

  const handleSignOut = async () => {
    await signOut();
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    setIsLocationOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm shadow-lg">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 whitespace-nowrap" onClick={handleLinkClick}>
            <img src="/images/logo.png" alt="Home Church Logo" className="h-8 w-8" />
            <span className="text-xl font-bold text-white whitespace-nowrap">HOME CHURCH</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 relative">
            {navigation.map((item) => (
              <Link
                key={item.key}
                to={item.href}
                className={`transition-colors duration-200 font-medium ${
                  isActive(item.href)
                    ? 'text-yellow-300 border-b-2 border-yellow-300'
                    : 'text-white hover:text-blue-200'
                }`}
                onClick={handleLinkClick}
              >
                {t(item.key)}
              </Link>
            ))}
            <Link
              to="/hcya"
              className="transition-colors duration-200 font-medium text-white hover:text-blue-200"
              onClick={handleLinkClick}
            >
              {t('nav.hcya')}
            </Link>

            {/* Location Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsLocationOpen(!isLocationOpen)}
                className={`font-medium ${
                  isLocationActive()
                    ? 'text-yellow-300 border-b-2 border-yellow-300'
                    : 'text-white hover:text-blue-200'
                }`}
              >
                {t('nav.location')} +
              </button>

              {isLocationOpen && (
                <div className="absolute top-full mt-2 w-48 bg-white rounded-md shadow-lg z-50">
                  {churchLocations.map(({ name, path }) => (
                    <Link
                      key={path}
                      to={path}
                      className="block px-4 py-2 text-gray-800 hover:bg-blue-100"
                      onClick={() => {
                        setIsLocationOpen(false);
                        setIsMenuOpen(false);
                      }}
                    >
                      {name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Right Side - Auth, Lang, Mobile Menu */}
          <div className="flex items-center gap-4">
            {/* Auth + Language Toggle */}
            <div className="hidden md:flex items-center gap-6 ml-16">
              {user ? (
                <>
                  <div className="flex items-center gap-2 text-white">
                    <User size={16} />
                    <span className="text-sm">{user.email}</span>
                  </div>
                  <button
                    onClick={handleSignOut}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-red-600 hover:bg-red-700 transition-colors duration-200 text-white text-sm"
                  >
                    <LogOut size={16} />
                    {t('auth.signOut')}
                  </button>
                </>
              ) : (
                <Link
                  to="/login"
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-green-600 hover:bg-green-700 transition-colors duration-200 text-white text-sm"
                >
                  <LogIn size={16} />
                  {t('auth.signIn')}
                </Link>
              )}
              <LanguageToggle />
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-blue-700/95 backdrop-blur-sm">
            <nav className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.key}
                  to={item.href}
                  className={`block px-3 py-2 rounded-md transition-colors duration-200 ${
                    isActive(item.href)
                      ? 'bg-blue-500 text-yellow-300'
                      : 'text-white hover:bg-blue-600'
                  }`}
                  onClick={handleLinkClick}
                >
                  {t(item.key)}
                </Link>
              ))}

              {/* Location dropdown in mobile */}
              <div>
                <button
                  onClick={() => setIsLocationOpen(!isLocationOpen)}
                  className={`w-full text-left px-3 py-2 rounded-md transition-colors duration-200 font-medium ${
                    isLocationActive()
                      ? 'bg-blue-500 text-yellow-300'
                      : 'text-white hover:bg-blue-600'
                  }`}
                >
                  {t('nav.location')} +
                </button>
                {isLocationOpen && (
                  <div className="pl-4">
                    {churchLocations.map(({ name, path }) => (
                      <Link
                        key={path}
                        to={path}
                        className="block px-3 py-2 rounded-md text-white hover:bg-blue-600"
                        onClick={() => {
                          setIsLocationOpen(false);
                          setIsMenuOpen(false);
                        }}
                      >
                        {name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Auth */}
              <div className="border-t border-blue-600 pt-2 mt-2">
                {user ? (
                  <div className="space-y-2">
                    <div className="px-3 py-2 text-white text-sm">{user.email}</div>
                    <button
                      onClick={handleSignOut}
                      className="w-full text-left px-3 py-2 text-white hover:bg-blue-600 rounded-md"
                    >
                      {t('auth.signOut')}
                    </button>
                  </div>
                ) : (
                  <Link
                    to="/login"
                    className="block px-3 py-2 text-white hover:bg-blue-600 rounded-md"
                    onClick={handleLinkClick}
                  >
                    {t('auth.signIn')}
                  </Link>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

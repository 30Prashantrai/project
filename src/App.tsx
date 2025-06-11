import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './components/providers/LanguageProvider';
import { AuthProvider } from './components/providers/AuthProvider';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { LocationPage } from './pages/LocationPage';
import { LocationDetails } from './pages/LocationDetails'; // <-- New import
import { GivingPage } from './pages/GivingPage';
import { ContactPage } from './pages/ContactPage';
import { EventsPage } from './pages/EventsPage';
import { RegistrationPage } from './pages/RegistrationPage';
import { LoginPage } from './pages/LoginPage';
import { HCYAPage } from './pages/HCYAPage';

function App() {
  return (
    <LanguageProvider>
      <AuthProvider>
        <Router>
          <div className="min-h-screen">
            <Header />
            <main className="pt-16">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/location" element={<LocationPage />} />
                <Route path="/location/:locationName" element={<LocationDetails />} /> {/* Dynamic location route */}
                <Route path="/giving" element={<GivingPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/events" element={<EventsPage />} />
                <Route path="/registration" element={<RegistrationPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/hcya" element={<HCYAPage />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AuthProvider>
    </LanguageProvider>
  );
}

export default App;

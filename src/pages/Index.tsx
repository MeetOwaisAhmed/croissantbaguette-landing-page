
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Clients from '../components/Clients';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import Pricing from '@/components/Pricing';
import Team from '@/components/Team';
import Result from '@/components/Results';
import ContactSection from '@/components/ContactSection';
import { Link } from 'react-router-dom';
import Background from '@/assets/Gradient+Blur.svg';

const Index = () => {
  return (
    <div className="min-h-screen bg-white font-space">
      <Navbar />
      <Hero />
      <Clients />
      <Services />
      <Projects />
      <Pricing />
      <Team />
      <Result />
      <ContactSection />
      
      
      
       {/* Updated Footer with rounded corners and padding */}
       <div className="w-full px-6 py-10 md:px-10 md:py-14 lg:px-20 lg:py-16">
        <footer className="w-full bg-black text-white rounded-3xl overflow-hidden">
          <div className="max-w-screen-xl mx-auto grid gap-8 px-8 py-16 md:grid-cols-2 lg:grid-cols-4">
            {/* Column 1: Logo and Company Info */}
            <div className="space-y-4">
              <div className="font-space text-2xl font-medium">
                C&B.
              </div>
              <p className="text-sm text-gray-400">
                © 2025 C&B Marketing Pty. Ltd.<br />
                ABN 31 635 268 352
              </p>
            </div>
            
            {/* Column 2: Pages */}
            <div className="space-y-4">
              <h3 className="font-space text-lg font-medium">Pages</h3>
              <div className="flex flex-col space-y-3">
                <a href="/pricing" className="font-space text-sm text-gray-400 hover:text-white transition-colors">Pricing Calculator</a>
                <a href="/work" className="font-space text-sm text-gray-400 hover:text-white transition-colors">Our work</a>
                <Link to="/contact" className="font-space text-sm text-gray-400 hover:text-white transition-colors">Contact Us</Link>
              </div>
            </div>
            
            {/* Column 3: Resources */}
            <div className="space-y-4">
              <h3 className="font-space text-lg font-medium">Resources</h3>
              <div className="flex flex-col space-y-3">
                <a href="/blog/wordpress" className="font-space text-sm text-gray-400 hover:text-white transition-colors">Why we don't code on Wordpress</a>
                <a href="/blog/cms" className="font-space text-sm text-gray-400 hover:text-white transition-colors">CMS integration with our website</a>
                <a href="/blog/headless" className="font-space text-sm text-gray-400 hover:text-white transition-colors">What is headless ecommerce?</a>
              </div>
            </div>
            
            {/* Column 4: Contact */}
            <div className="space-y-4">
              <h3 className="font-space text-lg font-medium">Contact</h3>
              <div className="flex flex-col space-y-3">
                <a href="mailto:meetowaisahmed@gmail.com" className="font-space text-sm text-gray-400 hover:text-white transition-colors">meetowaisahmed@gmail.com</a>
                <a href="tel:+61412345678" className="font-space text-sm text-gray-400 hover:text-white transition-colors">+61 4 1234 5678</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;

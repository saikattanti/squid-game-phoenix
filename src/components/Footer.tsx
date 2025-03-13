import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Github, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-squid-black border-t border-squid-lightgray/20">
      <div className="container mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-xl font-bold text-gradient mb-4">Phoenix 25</h3>
            <p className="text-squid-white/70 mb-6 max-w-md">
              The most thrilling technical festival, where innovation meets challenge in a Squid Game-inspired competition.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-squid-white/70 hover:text-squid-pink transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-squid-white/70 hover:text-squid-pink transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-squid-white/70 hover:text-squid-pink transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-squid-white/70 hover:text-squid-pink transition-colors duration-300">
                <Github size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-squid-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['About', 'Events', 'Sponsors', 'Team', 'Contact', 'Gallery'].map((item) => (
                <li key={item}>
                  <Link 
                    to={`/${item.toLowerCase()}`} 
                    className="text-squid-white/70 hover:text-squid-pink transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-squid-white mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Mail size={20} className="text-squid-pink mt-0.5" />
                <span className="text-squid-white/70">info@phoenix25.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone size={20} className="text-squid-pink mt-0.5" />
                <span className="text-squid-white/70">+1 (555) 123-4567</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-squid-lightgray/20 text-center text-squid-white/50 text-sm">
          <p>© {new Date().getFullYear()} Phoenix 25. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

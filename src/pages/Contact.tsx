
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import { MapPin, Mail, Phone, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <section className="section-padding container mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Contact Us</h1>
            <p className="text-lg text-squid-white/70 max-w-3xl mx-auto">
              Want to join the games or have questions? Reach out to us using the form below.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="glass-panel p-8 relative">
              {/* Squid Game invitation card styling */}
              <div className="absolute top-4 right-4 flex space-x-2">
                <div className="w-4 h-4 bg-squid-pink rounded-full"></div>
                <div className="w-4 h-4 border border-squid-pink"></div>
                <div className="w-4 h-4 border border-squid-pink transform rotate-45"></div>
              </div>
              
              <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-squid-white/70 mb-2">Your Name</label>
                    <input 
                      type="text" 
                      className="w-full rounded-md bg-squid-lightgray/10 border border-squid-lightgray/20 focus:border-squid-pink text-squid-white p-3 focus:outline-none"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-squid-white/70 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      className="w-full rounded-md bg-squid-lightgray/10 border border-squid-lightgray/20 focus:border-squid-pink text-squid-white p-3 focus:outline-none"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-squid-white/70 mb-2">Subject</label>
                  <input 
                    type="text" 
                    className="w-full rounded-md bg-squid-lightgray/10 border border-squid-lightgray/20 focus:border-squid-pink text-squid-white p-3 focus:outline-none"
                    placeholder="How can we help?"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-squid-white/70 mb-2">Message</label>
                  <textarea 
                    className="w-full rounded-md bg-squid-lightgray/10 border border-squid-lightgray/20 focus:border-squid-pink text-squid-white p-3 focus:outline-none h-32"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                
                <div className="flex items-center">
                  <input id="consent" type="checkbox" className="h-4 w-4 rounded border-squid-lightgray/20 text-squid-pink focus:ring-squid-pink" />
                  <label htmlFor="consent" className="ml-2 block text-sm text-squid-white/70">
                    I agree to the terms and conditions
                  </label>
                </div>
                
                <div>
                  <Button variant="primary" className="w-full">
                    Send Message
                  </Button>
                </div>
              </form>
            </div>
            
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="glass-panel p-8">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="text-squid-pink w-5 h-5 mt-1 mr-3" />
                    <div>
                      <h3 className="font-medium">Our Location</h3>
                      <p className="text-squid-white/70">123 Tech Street, Innovation District, City, Country</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="text-squid-pink w-5 h-5 mt-1 mr-3" />
                    <div>
                      <h3 className="font-medium">Email Us</h3>
                      <p className="text-squid-white/70">info@phoenix25.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="text-squid-pink w-5 h-5 mt-1 mr-3" />
                    <div>
                      <h3 className="font-medium">Call Us</h3>
                      <p className="text-squid-white/70">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="text-squid-pink w-5 h-5 mt-1 mr-3" />
                    <div>
                      <h3 className="font-medium">Working Hours</h3>
                      <p className="text-squid-white/70">Monday - Friday: 9:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Google Maps Placeholder */}
              <div className="glass-panel p-4" style={{ height: '250px' }}>
                <div className="w-full h-full bg-squid-lightgray/10 flex items-center justify-center rounded-md">
                  <span className="text-squid-white/40">Google Maps Integration</span>
                </div>
              </div>
              
              {/* Social Media */}
              <div className="glass-panel p-8">
                <h2 className="text-xl font-bold mb-4">Connect With Us</h2>
                <div className="flex space-x-4">
                  {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                    <a 
                      key={index}
                      href="#" 
                      className="w-10 h-10 rounded-full bg-squid-lightgray/10 flex items-center justify-center transition-colors duration-300 hover:bg-squid-pink/20"
                    >
                      <Icon className="w-5 h-5 text-squid-white/70 hover:text-squid-pink" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;

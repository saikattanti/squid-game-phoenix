import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import { MapPin, Mail, Phone, Facebook, Instagram, Linkedin } from 'lucide-react';

const teamMembers = [
  { name: 'Member 1', role: 'Working Committee', education: '2nd Year CSE Student', contact: '+91 98765 43210', email: 'member1@example.com', image: '/assets/member1.jpg', social: { fb: '#', insta: '#', linkedin: '#' } },
  { name: 'Member 2', role: 'Core Committee', education: '3rd Year CSE Student', contact: '+91 98765 43211', email: 'member2@example.com', image: '/assets/member2.jpg', social: { fb: '#', insta: '#', linkedin: '#' } },
  { name: 'Member 3', role: 'Working Committee', education: '2nd Year CSE Student', contact: '+91 98765 43212', email: 'member3@example.com', image: '/assets/member3.jpg', social: { fb: '#', insta: '#', linkedin: '#' } },
];

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col bg-squid-dark text-white">
      <Navbar />
      <main className="flex-grow pt-24 relative">
        <section className="relative z-10 container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-white uppercase tracking-wide">Contact Us</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {teamMembers.map((member, index) => (
              <div key={index} className="squid-card p-6 hover:translate-y-[-5px] cursor-pointer relative overflow-hidden group">
                <div className="h-[200px] mb-4 bg-squid-lightgray/10 flex items-center justify-center rounded-md relative">
                  <img src={member.image} alt={member.name} className="rounded-full w-24 h-24 object-cover" />
                </div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-squid-pink mb-1">{member.role}</p>
                <p className="text-squid-white/70 mb-2">{member.education}</p>
                <p className="text-squid-white/80 text-sm">{member.contact}</p>
                <p className="text-squid-white/80 text-sm">{member.email}</p>
                <div className="flex gap-3 mt-3">
                  <a href={member.social.fb} target="_blank" rel="noopener noreferrer"><Facebook className="text-squid-white w-5 h-5 hover:text-squid-pink" /></a>
                  <a href={member.social.insta} target="_blank" rel="noopener noreferrer"><Instagram className="text-squid-white w-5 h-5 hover:text-squid-pink" /></a>
                  <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin className="text-squid-white w-5 h-5 hover:text-squid-pink" /></a>
                  <a href={`mailto:${member.email}`}><Mail className="text-squid-white w-5 h-5 hover:text-squid-pink" /></a>
                  <a href={`tel:${member.contact}`}><Phone className="text-squid-white w-5 h-5 hover:text-squid-pink" /></a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Form and Map */}
        <section className="relative z-10 container mx-auto px-6 mt-16 flex flex-col md:flex-row gap-8">
          <div className="bg-squid-panel p-8 rounded-xl shadow-lg w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" placeholder="Your Name" className="w-full rounded-md bg-gray-800 border border-gray-600 focus:border-squid-pink text-white p-3 focus:outline-none" />
                <input type="email" placeholder="Your Email" className="w-full rounded-md bg-gray-800 border border-gray-600 focus:border-squid-pink text-white p-3 focus:outline-none" />
              </div>
              <textarea placeholder="Your Message" className="w-full rounded-md bg-gray-800 border border-gray-600 focus:border-squid-pink text-white p-3 focus:outline-none h-32"></textarea>
              <Button variant="primary" className="w-full bg-squid-pink text-white py-3 rounded-md hover:bg-squid-pink-dark transition">Send Message</Button>
            </form>
          </div>
          
          {/* Contact Info & Map */}
          <div className="w-full md:w-1/2 space-y-6">
            <div className="bg-squid-panel p-6 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
              <p className="flex items-center gap-2"><MapPin /> Future Institute of Engineering and Management, Kolkata</p>
              <p className="flex items-center gap-2"><Mail /> info@phoenix25.com</p>
              <p className="flex items-center gap-2"><Phone /> +91 98765 43210</p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <iframe src="https://www.google.com/maps/embed?" className="w-full h-64"></iframe>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
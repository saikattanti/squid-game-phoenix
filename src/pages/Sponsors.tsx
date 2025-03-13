
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Button from '@/components/Button';

const tiers = [
  {
    name: 'VIP (001)',
    price: '$10,000+',
    features: [
      'Prime logo placement on all event materials',
      'Dedicated company booth at the event',
      'Opportunity to judge competitions',
      'Company presentation opportunity',
      'Social media promotion',
      'Access to participant resumes',
      'VIP tickets to all events'
    ],
    highlighted: true
  },
  {
    name: 'Gold (067)',
    price: '$5,000+',
    features: [
      'Logo on event materials',
      'Shared company booth',
      'Social media mentions',
      'Company banner at venue',
      'Access to participant resumes',
      'Tickets to main events'
    ],
    highlighted: false
  },
  {
    name: 'Silver (218)',
    price: '$2,500+',
    features: [
      'Logo on website',
      'Social media mentions',
      'Company banner at venue',
      'Tickets to selected events'
    ],
    highlighted: false
  }
];

const Sponsors = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <section className="section-padding container mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Our Sponsors</h1>
            <p className="text-lg text-squid-white/70 max-w-3xl mx-auto">
              Phoenix 25 is made possible by our generous sponsors who believe in fostering innovation and technical excellence.
            </p>
          </div>
          
          {/* Sponsor Logos Carousel (Placeholder) */}
          <div className="glass-panel p-8 mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="h-20 bg-squid-lightgray/10 flex items-center justify-center rounded-md">
                  <span className="text-squid-white/40">Sponsor Logo</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Sponsorship Tiers */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Sponsorship Tiers</h2>
            <p className="text-squid-white/70 max-w-3xl mx-auto">
              Join our list of sponsors and gain visibility among the brightest technical minds.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {tiers.map((tier) => (
              <div 
                key={tier.name}
                className={`squid-card p-6 ${tier.highlighted ? 'border-squid-pink/50 shadow-[0_0_25px_-5px_rgba(255,0,119,0.3)]' : ''}`}
              >
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold mb-2">{tier.name}</h3>
                  <div className="text-2xl font-bold text-gradient">{tier.price}</div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-squid-pink mr-2">✓</span>
                      <span className="text-squid-white/80">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-auto">
                  <Button
                    variant={tier.highlighted ? 'primary' : 'secondary'}
                    className="w-full"
                  >
                    Select
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          {/* Contact Form */}
          <div className="glass-panel p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">Interested in Sponsoring?</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-squid-white/70 mb-2">Company Name</label>
                  <input 
                    type="text" 
                    className="w-full rounded-md bg-squid-lightgray/10 border border-squid-lightgray/20 focus:border-squid-pink text-squid-white p-3 focus:outline-none"
                    placeholder="Your company"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-squid-white/70 mb-2">Contact Person</label>
                  <input 
                    type="text" 
                    className="w-full rounded-md bg-squid-lightgray/10 border border-squid-lightgray/20 focus:border-squid-pink text-squid-white p-3 focus:outline-none"
                    placeholder="Your name"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-squid-white/70 mb-2">Email Address</label>
                <input 
                  type="email" 
                  className="w-full rounded-md bg-squid-lightgray/10 border border-squid-lightgray/20 focus:border-squid-pink text-squid-white p-3 focus:outline-none"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-squid-white/70 mb-2">Message</label>
                <textarea 
                  className="w-full rounded-md bg-squid-lightgray/10 border border-squid-lightgray/20 focus:border-squid-pink text-squid-white p-3 focus:outline-none h-32"
                  placeholder="Tell us about your sponsorship interests"
                ></textarea>
              </div>
              
              <div>
                <Button variant="primary" className="w-full">
                  Send Inquiry
                </Button>
              </div>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Sponsors;

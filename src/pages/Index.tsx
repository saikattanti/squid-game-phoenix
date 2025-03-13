
import React from 'react';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        
        {/* Featured Events Section */}
        <section className="section-padding container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Events</h2>
            <p className="text-squid-white/70 max-w-2xl mx-auto">
              Challenge yourself in our Squid Game-inspired competitions and emerge victorious.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Hackathon', description: 'Code or be eliminated!' },
              { title: 'Technical Events', description: 'Crack the challenge to proceed.' },
              { title: 'Gaming', description: 'Inspired by deadly competitions.' }
            ].map((event, index) => (
              <div 
                key={event.title}
                className="squid-card p-6 hover:translate-y-[-5px]"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <p className="text-squid-white/70 mb-4">{event.description}</p>
                <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                  <div className="bg-squid-pink text-white text-xs font-bold text-center rotate-45 transform origin-bottom-right py-1 px-5 translate-y-2 translate-x-2">
                    {index + 1}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* About Preview Section */}
        <section className="section-padding bg-gradient-to-b from-squid-black to-squid-darkgray">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="md:w-1/2 order-2 md:order-1">
                <div className="inline-block mb-2 rounded-full px-3 py-1 border border-squid-pink/30 text-xs font-medium text-squid-pink">
                  About Phoenix 25
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience the Thrill</h2>
                <p className="text-squid-white/70 mb-6">
                  Phoenix 25 is an annual technical festival that brings together the brightest minds and the most daring competitors. This year, we're inspired by the tension and strategy of Squid Game.
                </p>
                <p className="text-squid-white/70 mb-6">
                  Join us for an unforgettable experience where technology meets challenge in an atmosphere of high stakes and higher rewards.
                </p>
              </div>
              
              <div className="md:w-1/2 order-1 md:order-2">
                <div className="glass-panel h-[300px] md:h-[400px] flex items-center justify-center">
                  <span className="text-squid-white/50 italic">About image placeholder</span>
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

export default Index;

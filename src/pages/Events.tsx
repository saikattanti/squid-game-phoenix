
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CountdownTimer from '@/components/CountdownTimer';
import Button from '@/components/Button';
import { eventCategories } from '@/data/eventData';

const Events = () => {
  // Setting target date to April 4th of the current year or next year if April 4th has passed
  const now = new Date();
  const currentYear = now.getFullYear();
  const targetDate = new Date(currentYear, 3, 4); // Month is 0-indexed, so 3 = April
  
  // If April 4th has already passed this year, set to next year
  if (now > targetDate) {
    targetDate.setFullYear(currentYear + 1);
  }

  return (
    <div className="min-h-screen flex flex-col bg-squid-black">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <section className="section-padding container mx-auto px-6">
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Events</h1>
            <p className="text-lg text-squid-white/70 max-w-3xl mx-auto">
              Enter our arena of competitions, each inspired by the thrilling challenges of Squid Game. 
              Do you have what it takes to survive and claim victory?
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-16">
            <div className="max-w-sm w-full">
              <CountdownTimer targetDate={targetDate} />
            </div>
            <div className="max-w-md">
              <div className="glass-panel p-6 md:p-8">
                <h2 className="text-2xl font-bold text-squid-pink mb-4">The Games Begin</h2>
                <p className="text-squid-white/80 mb-6">
                  Mark your calendar for April 4th. All players must be registered before the timer reaches zero.
                  Elimination begins immediately after the countdown ends.
                </p>
                <Button variant="green" className="w-full">Register Now</Button>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eventCategories.map((event, index) => (
              <Link 
                key={event.id}
                to={`/events/${event.id}`}
                className="squid-event-card group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Player number tag */}
                <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                  <div className="bg-squid-green text-squid-black text-xs font-bold text-center rotate-45 transform origin-bottom-right py-1 px-5 translate-y-2 translate-x-2">
                    {event.number}
                  </div>
                </div>
                
                {/* Red guard mask overlay (hidden by default, shown on hover) */}
                <div className="absolute inset-0 bg-squid-black/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 rounded-xl overflow-hidden">
                  <div className="w-32 h-32 relative">
                    <svg viewBox="0 0 100 100" className="w-full h-full text-squid-red">
                      <circle cx="50" cy="35" r="22" fill="currentColor" />
                      <rect x="28" y="35" width="44" height="45" fill="currentColor" />
                    </svg>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-lg">
                      JOIN
                    </div>
                  </div>
                </div>
                
                <div className="relative z-0 p-6 h-full">
                  <div className={`w-12 h-12 rounded-full ${event.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <event.icon size={24} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-squid-pink transition-colors duration-300">
                    {event.title}
                  </h3>
                  <p className="text-squid-white/70">{event.description}</p>
                  
                  <div className="mt-4 pt-4 border-t border-squid-lightgray/20">
                    <span className="text-squid-green font-semibold text-sm">
                      Click to join the game
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Events;

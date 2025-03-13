
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import { ArrowLeft } from 'lucide-react';
import { eventCategories, EventCategory } from '@/data/eventData';

const EventDetail = () => {
  const { eventId } = useParams<{ eventId: string }>();
  
  // Find the event category that matches the eventId
  const eventCategory = eventCategories.find(
    (category) => category.id === eventId
  ) as EventCategory;

  // If event category is not found, show an error message
  if (!eventCategory) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow container mx-auto px-6 pt-24 pb-16">
          <div className="glass-panel p-8 my-12">
            <h1 className="text-3xl font-bold text-squid-pink mb-4">Event Not Found</h1>
            <p className="text-squid-white/70 mb-6">
              The event you're looking for doesn't exist or has been eliminated.
            </p>
            <Link to="/events">
              <Button variant="secondary">
                <ArrowLeft size={16} />
                Back to Events
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-squid-black">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <section className="section-padding container mx-auto px-6">
          <div className="mb-8">
            <Link to="/events" className="inline-flex items-center text-squid-white/70 hover:text-squid-pink transition-colors">
              <ArrowLeft size={16} className="mr-2" />
              Back to all events
            </Link>
          </div>

          <div className="glass-panel p-8 mb-12 relative overflow-hidden">
            {/* Red guard mask watermark */}
            <div className="absolute right-0 bottom-0 opacity-5 w-64 h-64">
              <svg viewBox="0 0 100 100" className="w-full h-full text-squid-red">
                <circle cx="50" cy="35" r="22" fill="currentColor" />
                <rect x="28" y="35" width="44" height="45" fill="currentColor" />
              </svg>
            </div>
            
            <div className="relative z-10">
              <div className={`w-16 h-16 rounded-full ${eventCategory.color} flex items-center justify-center mb-6`}>
                <eventCategory.icon size={32} />
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
                {eventCategory.title}
              </h1>
              
              <div className="inline-block mb-6 rounded-full px-3 py-1 border border-squid-green/30 text-xs font-medium text-squid-green">
                PLAYER {eventCategory.number}
              </div>
              
              <p className="text-lg text-squid-white/70 max-w-3xl mb-8">
                {eventCategory.description}
              </p>
              
              <Button variant="green">Register For This Event</Button>
            </div>
          </div>
          
          {/* Specific events in this category */}
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Upcoming {eventCategory.title} Events</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {eventCategory.subEvents.map((event, index) => (
                <div 
                  key={index}
                  className="squid-card p-6 transition-all duration-300 hover:translate-y-[-5px]"
                >
                  <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                    <div className="bg-squid-green text-squid-black text-xs font-bold text-center rotate-45 transform origin-bottom-right py-1 px-5 translate-y-2 translate-x-2">
                      {String(index + 1).padStart(3, '0')}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 text-squid-white">{event.title}</h3>
                  <p className="text-squid-white/70 mb-4">{event.description}</p>
                  
                  <div className="flex items-center text-xs text-squid-white/60 mb-4">
                    <span className="mr-3">
                      <span className="font-medium">Date:</span> {event.date}
                    </span>
                    <span>
                      <span className="font-medium">Prize:</span> ₹{event.prize.toLocaleString()}
                    </span>
                  </div>
                  
                  <Button variant="secondary" size="sm" className="w-full">Join Event</Button>
                </div>
              ))}
            </div>
          </div>
          
          <div className="glass-panel p-8">
            <h2 className="text-2xl font-bold mb-4">Rules & Guidelines</h2>
            <ul className="list-disc list-inside space-y-2 text-squid-white/70">
              <li>All participants must register before the countdown ends.</li>
              <li>Teams must consist of {eventCategory.teamSize} members unless specified otherwise.</li>
              <li>Elimination rules apply - participants not meeting checkpoints will be eliminated.</li>
              <li>All submissions must be original and created during the event.</li>
              <li>The Front Man's (judges') decision is final and cannot be challenged.</li>
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default EventDetail;

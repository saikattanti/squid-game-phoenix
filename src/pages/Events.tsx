
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Code, Gamepad, Camera, Briefcase, Ticket, Cpu, Users } from 'lucide-react';

const events = [
  {
    id: 'hackathon',
    title: 'Hackathon',
    description: 'Code or be eliminated! A 24-hour coding marathon where only the best solutions survive.',
    icon: Code,
    color: 'bg-blue-500/20 text-blue-400'
  },
  {
    id: 'technical',
    title: 'Technical Events',
    description: 'Crack the challenge to proceed. A series of technical puzzles that will test your skills to the limit.',
    icon: Cpu,
    color: 'bg-purple-500/20 text-purple-400'
  },
  {
    id: 'non-technical',
    title: 'Non-Technical Events',
    description: 'Fun games with high stakes. These events focus on creativity, teamwork, and thinking outside the box.',
    icon: Users,
    color: 'bg-yellow-500/20 text-yellow-400'
  },
  {
    id: 'gaming',
    title: 'Gaming',
    description: 'Inspired by deadly competitions. Show your gaming prowess in our high-intensity tournaments.',
    icon: Gamepad,
    color: 'bg-red-500/20 text-red-400'
  },
  {
    id: 'photography',
    title: 'Photography',
    description: 'Capture the best moment or be eliminated! A contest where your lens becomes your weapon.',
    icon: Camera,
    color: 'bg-emerald-500/20 text-emerald-400'
  },
  {
    id: 'management',
    title: 'Management',
    description: 'Plan like the Front Man, execute like the players. Test your management and leadership skills.',
    icon: Briefcase,
    color: 'bg-amber-500/20 text-amber-400'
  },
  {
    id: 'carnival',
    title: 'Carnival',
    description: 'A more lively, fun zone inspired by the Squid Game playground. Games, food, and festivities await.',
    icon: Ticket,
    color: 'bg-pink-500/20 text-pink-400'
  }
];

const Events = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <section className="section-padding container mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Events</h1>
            <p className="text-lg text-squid-white/70 max-w-3xl mx-auto">
              Enter our arena of competitions, each inspired by the thrilling challenges of Squid Game. 
              Do you have what it takes to survive and claim victory?
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <Link 
                key={event.id}
                to={`/events/${event.id}`}
                className="squid-card p-6 hover:translate-y-[-5px] group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-12 h-12 rounded-full ${event.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <event.icon size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-squid-pink transition-colors duration-300">
                  {event.title}
                </h3>
                <p className="text-squid-white/70">{event.description}</p>
                <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                  <div className="bg-squid-pink text-squid-black text-xs font-bold text-center rotate-45 transform origin-bottom-right py-1 px-5 translate-y-2 translate-x-2">
                    {(index + 1).toString().padStart(2, '0')}
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

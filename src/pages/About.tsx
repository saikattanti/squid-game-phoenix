import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Navbar />
      <main className="flex-grow pt-24 relative">
        <section className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-red-500 neon-glow">
              About Phoenix 25
            </h1>
            <p className="text-lg text-gray-300 mb-8 italic">
              "Where innovation meets challenge in a high-stakes Squid Game-inspired battleground."
            </p>
          </div>

          <div className="glass-panel p-8 md:p-10 mb-10 bg-gray-900/80 backdrop-blur-lg border border-red-500 shadow-red-500 shadow-lg">
            <h2 className="text-3xl font-semibold mb-4 text-red-400">
              Our Mission
            </h2>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Phoenix is the annual Techno-Management fest of Future Institute of Engineering and Management, organized by XplOriCa. The 19th edition of Phoenix is scheduled on <span className="text-red-400 font-bold">April 12-14</span>, bringing high-energy challenges and immersive experiences inspired by Squid Game.
            </p>
          </div>

          <div className="glass-panel p-8 md:p-10 mb-10 bg-gray-900/80 backdrop-blur-lg border border-green-500 shadow-green-500 shadow-lg">
            <h2 className="text-3xl font-semibold mb-4 text-green-400">
              Past Achievements
            </h2>
            <p className="text-gray-300 mb-4">Over the years, Phoenix has evolved into one of the most anticipated technical fests in the region. Highlights include:</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              <li className="hover:text-green-400 transition">5,000+ participants from 100+ colleges</li>
              <li className="hover:text-green-400 transition">Workshops led by industry experts</li>
              <li className="hover:text-green-400 transition">Showcased cutting-edge technological innovations</li>
              <li className="hover:text-green-400 transition">Startup pitch events for emerging entrepreneurs</li>
              <li className="hover:text-green-400 transition">Networking opportunities for students & professionals</li>
            </ul>
          </div>

          <div className="glass-panel p-8 md:p-10 bg-gray-900/80 backdrop-blur-lg border border-blue-500 shadow-blue-500 shadow-lg">
            <h2 className="text-3xl font-semibold mb-4 text-blue-400">
              Phoenix 25: The New Chapter
            </h2>
            <p className="text-gray-300 mb-4">
              This year, Phoenix 25 takes on the psychological elements of Squid Game, pushing limits and testing strategic thinking.
            </p>
            <p className="text-gray-300 font-semibold">
              Every event is a challenge, every challenge is a battle. Only the most strategic will emerge victorious.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;

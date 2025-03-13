
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <section className="section-padding container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">About Phoenix 25</h1>
            <p className="text-lg text-squid-white/70 mb-8">
              Phoenix 25 - Where innovation meets challenge in a Squid Game-inspired environment.
            </p>
            
            <div className="glass-panel p-6 md:p-8 mb-10">
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <p className="text-squid-white/80 mb-4">
                To create an unforgettable technical festival that pushes participants to their limits while fostering innovation, teamwork, and technical excellence.
              </p>
              <p className="text-squid-white/80">
                Inspired by the high-stakes challenges of Squid Game, we've designed Phoenix 25 to test not just technical skills but also strategy, determination, and the ability to perform under pressure.
              </p>
            </div>
            
            <div className="glass-panel p-6 md:p-8 mb-10">
              <h2 className="text-2xl font-semibold mb-4">Past Achievements</h2>
              <p className="text-squid-white/80 mb-4">
                Over the years, Phoenix has grown from a small college event to one of the most anticipated technical festivals in the region. Our past editions have:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-squid-white/80">
                <li>Hosted over 5,000 participants from 100+ colleges</li>
                <li>Featured workshops led by industry experts</li>
                <li>Showcased cutting-edge technological innovations</li>
                <li>Provided a platform for startups to present their ideas</li>
                <li>Created networking opportunities for students and professionals</li>
              </ul>
            </div>
            
            <div className="glass-panel p-6 md:p-8">
              <h2 className="text-2xl font-semibold mb-4">Phoenix 25: The New Chapter</h2>
              <p className="text-squid-white/80 mb-4">
                This year, we're taking inspiration from the psychological elements of Squid Game to create an event that tests not just what you know, but how you think.
              </p>
              <p className="text-squid-white/80">
                Join us for a festival where each event is a new game, each challenge a new opportunity to prove yourself, and where only the most determined will emerge victorious.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;

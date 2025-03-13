
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const teamMembers = [
  {
    id: 1,
    name: 'Alex Johnson',
    role: 'Event Director',
    bio: 'Responsible for overall event planning and execution. Has 5+ years of experience organizing tech festivals.',
    playerNumber: '001'
  },
  {
    id: 2,
    name: 'Sophia Chen',
    role: 'Technical Lead',
    bio: 'Oversees all technical events and workshops. Full-stack developer with expertise in AI and machine learning.',
    playerNumber: '067'
  },
  {
    id: 3,
    name: 'Marcus Williams',
    role: 'Marketing Director',
    bio: 'Handles event promotion and social media campaigns. Background in digital marketing and brand strategy.',
    playerNumber: '218'
  },
  {
    id: 4,
    name: 'Priya Patel',
    role: 'Sponsorship Coordinator',
    bio: 'Manages sponsor relationships and partnerships. Has secured major sponsorships for past tech events.',
    playerNumber: '456'
  },
  {
    id: 5,
    name: 'James Rodriguez',
    role: 'Creative Director',
    bio: 'Designs event themes and visual elements. Expert in UX/UI design with a passion for innovative concepts.',
    playerNumber: '199'
  },
  {
    id: 6,
    name: 'Aisha Mohammed',
    role: 'Operations Manager',
    bio: 'Coordinates logistics and venue arrangements. Known for attention to detail and flawless execution.',
    playerNumber: '212'
  }
];

const Team = () => {
  const [activeId, setActiveId] = useState<number | null>(null);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <section className="section-padding container mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Our Team</h1>
            <p className="text-lg text-squid-white/70 max-w-3xl mx-auto">
              Meet the masterminds behind Phoenix 25. Our dedicated team works tirelessly to create an unforgettable experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div 
                key={member.id}
                className="squid-card p-6 hover:translate-y-[-5px] cursor-pointer relative overflow-hidden group"
                onClick={() => setActiveId(activeId === member.id ? null : member.id)}
              >
                {/* Player jumper with number */}
                <div className="h-[200px] mb-4 bg-squid-lightgray/10 flex items-center justify-center rounded-md relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-squid-lightgray/0 to-squid-black/80"></div>
                  <div className="text-squid-white/40">Team Member Photo</div>
                  <div className="absolute bottom-3 left-3 bg-squid-pink text-white text-xs font-bold rounded-full h-8 w-8 flex items-center justify-center">
                    {member.playerNumber}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-squid-pink mb-3">{member.role}</p>
                
                <div 
                  className={`
                    absolute inset-0 bg-squid-black/95 p-6 transform transition-transform duration-300 flex flex-col justify-center
                    ${activeId === member.id ? 'translate-y-0' : 'translate-y-full'}
                  `}
                >
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-squid-pink mb-4">{member.role}</p>
                  <p className="text-squid-white/80">{member.bio}</p>
                </div>
                
                {/* Red masked guard behind member */}
                <div 
                  className="absolute -right-10 top-1/3 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 delay-200"
                  style={{ height: '100px', width: '100px' }}
                >
                  <div className="w-full h-full bg-squid-pink rounded-full flex items-center justify-center">
                    <div className="w-8 h-8 border-2 border-squid-black rounded-full"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Team;

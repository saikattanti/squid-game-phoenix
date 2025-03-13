import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Facebook, Instagram, Linkedin, Mail, Phone } from 'lucide-react';

const teamMembers = [
  // Facilitators (3)
  { id: 1, name: 'Dr. Priya Patel', role: 'Facilitator', education: 'College Faculty (Professor)', contact: '+91 99000 11223', email: 'priya@example.com', social: { fb: '#', insta: '#', linkedin: '#' } },
  { id: 2, name: 'Dr. Rahul Mehta', role: 'Facilitator', education: 'College Faculty (Professor)', contact: '+91 99000 33445', email: 'rahul@example.com', social: { fb: '#', insta: '#', linkedin: '#' } },
  { id: 3, name: 'Dr. Ananya Sharma', role: 'Facilitator', education: 'College Faculty (Professor)', contact: '+91 99000 55667', email: 'ananya@example.com', social: { fb: '#', insta: '#', linkedin: '#' } },
  
  // Mentors (5)
  { id: 4, name: 'Sophia Chen', role: 'Mentor', education: '4th Year CSE Student', contact: '+91 91234 56789', email: 'sophia@example.com', social: { fb: '#', insta: '#', linkedin: '#' } },
  { id: 5, name: 'Rahul Singh', role: 'Mentor', education: '4th Year CSE Student', contact: '+91 98765 43212', email: 'rahul@example.com', social: { fb: '#', insta: '#', linkedin: '#' } },
  { id: 6, name: 'Emma Watson', role: 'Mentor', education: '4th Year CSE Student', contact: '+91 87654 32109', email: 'emma@example.com', social: { fb: '#', insta: '#', linkedin: '#' } },
  { id: 7, name: 'Arjun Verma', role: 'Mentor', education: '4th Year CSE Student', contact: '+91 76543 21098', email: 'arjun@example.com', social: { fb: '#', insta: '#', linkedin: '#' } },
  { id: 8, name: 'Lily Parker', role: 'Mentor', education: '4th Year CSE Student', contact: '+91 65432 10987', email: 'lily@example.com', social: { fb: '#', insta: '#', linkedin: '#' } },
  
  // Core Committee (6)
  { id: 9, name: 'Alex Johnson', role: 'Core Committee', education: '3rd Year CSE Student', contact: '+91 98765 43210', email: 'alex@example.com', social: { fb: '#', insta: '#', linkedin: '#' } },
  { id: 10, name: 'Rohan Das', role: 'Core Committee', education: '3rd Year CSE Student', contact: '+91 91234 56780', email: 'rohan@example.com', social: { fb: '#', insta: '#', linkedin: '#' } },
  { id: 11, name: 'Neha Sharma', role: 'Core Committee', education: '3rd Year CSE Student', contact: '+91 99876 54321', email: 'neha@example.com', social: { fb: '#', insta: '#', linkedin: '#' } },
  { id: 12, name: 'David Miller', role: 'Core Committee', education: '3rd Year CSE Student', contact: '+91 88765 43210', email: 'david@example.com', social: { fb: '#', insta: '#', linkedin: '#' } },
  { id: 13, name: 'Sara Wilson', role: 'Core Committee', education: '3rd Year CSE Student', contact: '+91 77654 32109', email: 'sara@example.com', social: { fb: '#', insta: '#', linkedin: '#' } },
  { id: 14, name: 'Akash Gupta', role: 'Core Committee', education: '3rd Year CSE Student', contact: '+91 66543 21098', email: 'akash@example.com', social: { fb: '#', insta: '#', linkedin: '#' } },
  
  // Working Committee (10)
  { id: 15, name: 'Marcus Williams', role: 'Working Committee', education: '2nd Year CSE Student', contact: '+91 99876 54321', email: 'marcus@example.com', social: { fb: '#', insta: '#', linkedin: '#' } },
  { id: 16, name: 'Aisha Khan', role: 'Working Committee', education: '2nd Year CSE Student', contact: '+91 88765 43211', email: 'aisha@example.com', social: { fb: '#', insta: '#', linkedin: '#' } },
  { id: 17, name: 'Vikram Reddy', role: 'Working Committee', education: '2nd Year CSE Student', contact: '+91 77654 32110', email: 'vikram@example.com', social: { fb: '#', insta: '#', linkedin: '#' } },
  { id: 18, name: 'Emma Brown', role: 'Working Committee', education: '2nd Year CSE Student', contact: '+91 66543 21099', email: 'emma.b@example.com', social: { fb: '#', insta: '#', linkedin: '#' } },
  { id: 19, name: 'Ravi Patel', role: 'Working Committee', education: '2nd Year CSE Student', contact: '+91 55432 10988', email: 'ravi@example.com', social: { fb: '#', insta: '#', linkedin: '#' } },
  { id: 20, name: 'Simran Kaur', role: 'Working Committee', education: '2nd Year CSE Student', contact: '+91 44321 09877', email: 'simran@example.com', social: { fb: '#', insta: '#', linkedin: '#' } },
  { id: 21, name: 'John Doe', role: 'Working Committee', education: '2nd Year CSE Student', contact: '+91 33210 98766', email: 'john@example.com', social: { fb: '#', insta: '#', linkedin: '#' } },
  { id: 22, name: 'Anjali Mehta', role: 'Working Committee', education: '2nd Year CSE Student', contact: '+91 22109 87655', email: 'anjali@example.com', social: { fb: '#', insta: '#', linkedin: '#' } },
  { id: 23, name: 'Dev Sharma', role: 'Working Committee', education: '2nd Year CSE Student', contact: '+91 11098 76544', email: 'dev@example.com', social: { fb: '#', insta: '#', linkedin: '#' } },
  { id: 24, name: 'Maya Thomas', role: 'Working Committee', education: '2nd Year CSE Student', contact: '+91 00987 65433', email: 'maya@example.com', social: { fb: '#', insta: '#', linkedin: '#' } },
  
  // Coordinators (3)
  { id: 25, name: 'Harsh Jain', role: 'Coordinator', education: '2nd Year CSE Student', contact: '+91 98765 11122', email: 'harsh@example.com', social: { fb: '#', insta: '#', linkedin: '#' } },
  { id: 26, name: 'Pooja Rani', role: 'Coordinator', education: '2nd Year CSE Student', contact: '+91 87654 22233', email: 'pooja@example.com', social: { fb: '#', insta: '#', linkedin: '#' } },
  { id: 27, name: 'Amit Sharma', role: 'Coordinator', education: '2nd Year CSE Student', contact: '+91 76543 33344', email: 'amit@example.com', social: { fb: '#', insta: '#', linkedin: '#' } }
];

const filters = ['All', 'Facilitator', 'Mentor', 'Core Committee', 'Working Committee', 'Coordinator'];

const Team = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredMembers = activeFilter === 'All' 
    ? [...teamMembers.filter(m => m.role === 'Facilitator'), ...teamMembers.filter(m => m.role === 'Mentor'), ...teamMembers.filter(m => m.role === 'Core Committee'), ...teamMembers.filter(m => m.role === 'Working Committee'), ...teamMembers.filter(m => m.role === 'Coordinator')]
    : teamMembers.filter(member => member.role.toLowerCase() === activeFilter.toLowerCase());

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <section className="section-padding container mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Our Team</h1>
            <p className="text-lg text-squid-white/70 max-w-3xl mx-auto">
              Meet the dedicated individuals behind Phoenix 25. Each member plays a crucial role in making this event a success.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {filters.map(filter => (
              <button 
                key={filter} 
                className={`px-6 py-2 rounded-full font-semibold text-white bg-black shadow-lg transition-transform ${activeFilter === filter ? 'scale-110' : ''}`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter.toUpperCase()}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMembers.map((member) => (
              <div key={member.id} className="squid-card p-6 hover:translate-y-[-5px] cursor-pointer relative overflow-hidden group">
                <div className="h-[200px] mb-4 bg-squid-lightgray/10 flex items-center justify-center rounded-md relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-squid-lightgray/0 to-squid-black/80"></div>
                  <div className="text-squid-white/40">Team Member Photo</div>
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
      </main>
      <Footer />
    </div>
  );
};

export default Team;

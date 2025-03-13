
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import CountdownTimer from './CountdownTimer';

const Hero = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  
  // Setting target date to April 4th of the current year or next year if April 4th has passed
  const now = new Date();
  const currentYear = now.getFullYear();
  const targetDate = new Date(currentYear, 3, 4); // Month is 0-indexed, so 3 = April
  
  // If April 4th has already passed this year, set to next year
  if (now > targetDate) {
    targetDate.setFullYear(currentYear + 1);
  }
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-squid-black bg-squid-texture"></div>
      <div className="absolute inset-0 bg-gradient-radial from-transparent to-squid-black"></div>
      <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-squid-pink/10 blur-[150px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-2/3 h-2/3 bg-squid-red/10 blur-[150px] rounded-full"></div>
      
      {/* Content container */}
      <div className="container mx-auto px-6 z-10 max-w-6xl flex flex-col md:flex-row md:items-center md:justify-between gap-12 mt-20">
        <div 
          className={`md:w-3/5 transition-all duration-1000 ease-out transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
        >
          <div className="inline-block mb-2 rounded-full px-3 py-1 border border-squid-pink/30 text-xs font-medium text-squid-pink">
            Phoenix 25 Event
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Let the Game Begin</span>
          </h1>
          <p className="text-lg md:text-xl text-squid-white/70 mb-8 max-w-xl">
            Join the most thrilling tech event of the year. Will you survive the competition and claim the prize?
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button
              variant="primary"
              onClick={() => navigate('/contact')}
            >
              Register
            </Button>
            <Button
              variant="green"
              onClick={() => navigate('/events')}
            >
              Join the Game
            </Button>
          </div>
        </div>
        
        <div 
          className={`md:w-2/5 transition-all duration-1000 ease-out transform ${
            isVisible ? 'opacity-100 translate-y-0 delay-300' : 'opacity-0 translate-y-20'
          }`}
        >
          <CountdownTimer targetDate={targetDate} />
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-pulse-subtle">
        <div className="w-0.5 h-16 bg-gradient-to-b from-squid-white/0 to-squid-white/50 rounded-full"></div>
      </div>
    </section>
  );
};

export default Hero;

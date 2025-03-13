
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
    <section className="min-h-screen relative flex flex-col items-center justify-center overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-squid-black"
        style={{
          backgroundImage: `url('/lovable-uploads/5333d7ff-2882-4a1c-b528-61b83e621fb5.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-squid-black/30"></div>
      
      {/* Logo in top left */}
      <div className="absolute top-6 left-6 z-20">
        <img src="/phoenix-logo.png" alt="Phoenix 25" className="w-16 h-16" />
      </div>
      
      {/* Centered countdown timer */}
      <div 
        className={`z-10 text-center transition-all duration-1000 ease-out transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
      >
        <div className="text-7xl md:text-9xl font-mono text-squid-white mb-8 tracking-wider">
          <CountdownTimer targetDate={targetDate} />
        </div>
        
        <h1 className="text-5xl md:text-8xl font-bold text-squid-white tracking-widest uppercase mb-12">
          Phoenix'25
        </h1>
        
        <div className="flex flex-wrap justify-center gap-6 mt-8">
          <Button
            variant="primary"
            size="lg"
            onClick={() => navigate('/contact')}
            className="uppercase tracking-wider"
          >
            Register
          </Button>
          <Button
            variant="green"
            size="lg"
            onClick={() => navigate('/events')}
            className="uppercase tracking-wider"
          >
            Explore
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

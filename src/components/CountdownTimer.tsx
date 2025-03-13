
import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
  targetDate: Date;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  const [isBlinking, setIsBlinking] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();
      
      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      
      setTimeLeft({ days, hours, minutes, seconds });
      
      // Blink the eye every 5 seconds
      setIsBlinking(seconds % 5 === 0);
      
    }, 1000);
    
    return () => clearInterval(interval);
  }, [targetDate]);
  
  return (
    <div className="glass-panel p-6 md:p-8">
      <div className="flex items-center justify-center mb-6">
        <div className="relative w-16 h-16 md:w-20 md:h-20">
          <div className="absolute inset-0 bg-squid-black rounded-full border-2 border-squid-pink"></div>
          <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full ${isBlinking ? 'bg-squid-red' : 'bg-squid-green'} transition-colors duration-300`}></div>
        </div>
      </div>
      
      <div className="grid grid-cols-4 gap-4">
        <div className="flex flex-col items-center">
          <div className="text-2xl md:text-4xl font-mono font-bold text-squid-white">
            {String(timeLeft.days).padStart(2, '0')}
          </div>
          <div className="text-xs md:text-sm text-squid-white/70 mt-1">DAYS</div>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="text-2xl md:text-4xl font-mono font-bold text-squid-white">
            {String(timeLeft.hours).padStart(2, '0')}
          </div>
          <div className="text-xs md:text-sm text-squid-white/70 mt-1">HOURS</div>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="text-2xl md:text-4xl font-mono font-bold text-squid-white">
            {String(timeLeft.minutes).padStart(2, '0')}
          </div>
          <div className="text-xs md:text-sm text-squid-white/70 mt-1">MINUTES</div>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="text-2xl md:text-4xl font-mono font-bold text-squid-white">
            {String(timeLeft.seconds).padStart(2, '0')}
          </div>
          <div className="text-xs md:text-sm text-squid-white/70 mt-1">SECONDS</div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;


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
      
    }, 1000);
    
    return () => clearInterval(interval);
  }, [targetDate]);
  
  // Format the display to match the image (HH:MM:SS)
  return (
    <div className="font-mono tracking-widest">
      {String(timeLeft.days).padStart(2, '0')}
      :
      {String(timeLeft.hours).padStart(2, '0')}
      :
      {String(timeLeft.minutes).padStart(2, '0')}
      :
      {String(timeLeft.seconds).padStart(2, '0')}
    </div>
  );
};

export default CountdownTimer;

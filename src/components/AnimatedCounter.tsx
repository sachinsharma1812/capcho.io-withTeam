import { useEffect, useRef, useState } from 'react';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
}

export default function AnimatedCounter({ 
  end, 
  duration = 2000, 
  prefix = '', 
  suffix = '' 
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const frameRef = useRef(0);
  
  useEffect(() => {
    const startTime = Date.now();
    const countUp = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      
      countRef.current = Math.floor(progress * end);
      setCount(countRef.current);
      
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(countUp);
      }
    };
    
    frameRef.current = requestAnimationFrame(countUp);
    
    return () => cancelAnimationFrame(frameRef.current);
  }, [end, duration]);

  return (
    <span className="font-bold">
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
}
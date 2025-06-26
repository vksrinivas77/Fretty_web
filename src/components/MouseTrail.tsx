import React, { useEffect, useState } from 'react';

const MouseTrail = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const newPosition = { x: e.clientX, y: e.clientY, id: Date.now() };
      setMousePosition(newPosition);
      
      setTrail(prevTrail => {
        const newTrail = [...prevTrail, newPosition].slice(-8); // Keep last 8 positions
        return newTrail;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    // Clean up old trail positions
    const interval = setInterval(() => {
      setTrail(prevTrail => prevTrail.slice(1));
    }, 100);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
      {trail.map((position, index) => (
        <div
          key={position.id}
          className="absolute w-8 h-8 bg-white rounded-full opacity-10 blur-sm animate-pulse"
          style={{
            left: position.x - 16,
            top: position.y - 16,
            opacity: (index + 1) / trail.length * 0.3,
            transform: `scale(${(index + 1) / trail.length})`,
            transition: 'all 0.3s ease-out',
          }}
        />
      ))}
      
      {/* Main cursor effect */}
      <div
        className="absolute w-12 h-12 bg-gradient-radial from-white/20 to-transparent rounded-full blur-md"
        style={{
          left: mousePosition.x - 24,
          top: mousePosition.y - 24,
          transition: 'all 0.1s ease-out',
        }}
      />
    </div>
  );
};

export default MouseTrail;
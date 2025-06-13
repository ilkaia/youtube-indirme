import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const BackgroundEffects = () => {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);

  // Multiple floating orbs that avoid mouse - made more visible and slower
  const [orbs, setOrbs] = useState([
    { id: 1, x: 20, y: 30, vx: 0.3, vy: 0.2, originalVx: 0.3, originalVy: 0.2, size: 220, color: 'rgba(59, 130, 246, 0.3)' },
    { id: 2, x: 70, y: 60, vx: -0.2, vy: 0.3, originalVx: -0.2, originalVy: 0.3, size: 160, color: 'rgba(239, 68, 68, 0.28)' },
    { id: 3, x: 40, y: 80, vx: 0.25, vy: -0.15, originalVx: 0.25, originalVy: -0.15, size: 240, color: 'rgba(16, 185, 129, 0.25)' },
    { id: 4, x: 80, y: 20, vx: -0.15, vy: 0.35, originalVx: -0.15, originalVy: 0.35, size: 180, color: 'rgba(168, 85, 247, 0.3)' },
    { id: 5, x: 15, y: 70, vx: 0.2, vy: -0.25, originalVx: 0.2, originalVy: -0.25, size: 140, color: 'rgba(245, 158, 11, 0.27)' },
    { id: 6, x: 60, y: 40, vx: -0.25, vy: 0.2, originalVx: -0.25, originalVy: 0.2, size: 200, color: 'rgba(236, 72, 153, 0.28)' },
  ]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setMousePosition({ x, y });
      }
    };

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    // Add event listeners to the window for better tracking
    window.addEventListener('mousemove', handleMouseMove);
    
    const containerElement = containerRef.current;
    if (containerElement) {
      containerElement.addEventListener('mouseenter', handleMouseEnter);
      containerElement.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (containerElement) {
        containerElement.removeEventListener('mouseenter', handleMouseEnter);
        containerElement.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  // Animate orbs and make them avoid mouse - improved logic
  useEffect(() => {
    const animateOrbs = () => {
      setOrbs(prevOrbs => 
        prevOrbs.map(orb => {
          let newX = orb.x + orb.vx;
          let newY = orb.y + orb.vy;
          let newVx = orb.vx;
          let newVy = orb.vy;

          // Bounce off walls
          if (newX <= 5 || newX >= 95) {
            newVx = -newVx;
            newX = Math.max(5, Math.min(95, newX));
          }
          if (newY <= 5 || newY >= 95) {
            newVy = -newVy;
            newY = Math.max(5, Math.min(95, newY));
          }

          // Mouse avoidance - improved detection and response
          const dx = mousePosition.x - newX;
          const dy = mousePosition.y - newY;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 25 && distance > 0) { // Avoidance radius
            const avoidanceForce = 1.2; // Stronger force for better visibility
            const normalizedDx = dx / distance;
            const normalizedDy = dy / distance;
            
            // Push away from mouse
            newVx -= normalizedDx * avoidanceForce;
            newVy -= normalizedDy * avoidanceForce;
            
            // Limit velocity
            const maxVelocity = 1.5;
            const currentVelocity = Math.sqrt(newVx * newVx + newVy * newVy);
            if (currentVelocity > maxVelocity) {
              newVx = (newVx / currentVelocity) * maxVelocity;
              newVy = (newVy / currentVelocity) * maxVelocity;
            }
          } else {
            // Gradually return to original velocity when far from mouse
            const returnForce = 0.02;
            newVx += (orb.originalVx - newVx) * returnForce;
            newVy += (orb.originalVy - newVy) * returnForce;
          }

          return {
            ...orb,
            x: newX,
            y: newY,
            vx: newVx,
            vy: newVy
          };
        })
      );
    };

    const interval = setInterval(animateOrbs, 50); // Faster for smoother movement
    return () => clearInterval(interval);
  }, [mousePosition]);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{
        // Clip the background to create a clean cutoff
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
        maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 85%, rgba(0,0,0,0) 100%)',
        WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 85%, rgba(0,0,0,0) 100%)'
      }}
    >
      {/* Base subtle gradient - more visible */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-red-500/10"></div>
      
      {/* Animated floating orbs that avoid mouse - more visible */}
      {orbs.map((orb) => (
        <motion.div
          key={orb.id}
          className="absolute rounded-full"
          style={{
            width: `${orb.size}px`,
            height: `${orb.size}px`,
            background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
            left: `${orb.x}%`,
            top: `${orb.y}%`,
            transform: 'translate(-50%, -50%)',
            filter: 'blur(30px)',
          }}
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Subtle mesh gradient overlay - more visible */}
      <div 
        className="absolute inset-0 opacity-50"
        style={{
          background: `
            radial-gradient(circle at 25% 75%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 75% 25%, rgba(239, 68, 68, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)
          `
        }}
      />

      {/* Animated gradient waves - slower and more visible */}
      <motion.div
        className="absolute inset-0 opacity-40"
        animate={{
          background: [
            'radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.18) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 20%, rgba(239, 68, 68, 0.18) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 80%, rgba(16, 185, 129, 0.18) 0%, transparent 50%)',
          ]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
};

export default BackgroundEffects;
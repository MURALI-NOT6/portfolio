import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  speed: number;
  axis: 'x' | 'y';
}

interface ActiveCell {
  x: number;
  y: number;
  life: number;
  maxLife: number;
  color: string;
}

const CyberpunkCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    let activeCells: ActiveCell[] = [];
    const gridSize = 40; // Size of grid squares

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      const particleCount = Math.floor((canvas.width * canvas.height) / 20000);
      particles = [];
      
      for (let i = 0; i < particleCount; i++) {
        spawnParticle();
      }
    };

    const spawnParticle = () => {
      // Snap to grid
      const x = Math.floor(Math.random() * (canvas.width / gridSize)) * gridSize;
      const y = Math.floor(Math.random() * (canvas.height / gridSize)) * gridSize;
      const axis = Math.random() > 0.5 ? 'x' : 'y';
      const color = Math.random() > 0.5 ? '#ff003c' : '#00f3ff'; // Red or Cyan
      
      particles.push({
        x,
        y,
        vx: axis === 'x' ? (Math.random() > 0.5 ? 2 : -2) : 0,
        vy: axis === 'y' ? (Math.random() > 0.5 ? 2 : -2) : 0,
        size: Math.random() * 2 + 1,
        color,
        speed: 2 + Math.random(),
        axis
      });
    };

    const spawnActiveCell = () => {
      const x = Math.floor(Math.random() * (canvas.width / gridSize)) * gridSize;
      const y = Math.floor(Math.random() * (canvas.height / gridSize)) * gridSize;
      const color = Math.random() > 0.7 ? 'rgba(0, 243, 255, 0.1)' : 'rgba(255, 0, 60, 0.1)';
      
      activeCells.push({
        x,
        y,
        life: 0,
        maxLife: 30 + Math.random() * 50,
        color
      });
    };

    const draw = () => {
      // Clear with trail effect for "warp speed" feel if desired, but here specific clear
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'; // Slight trail?
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw Grid
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
      ctx.lineWidth = 1;
      
      for (let x = 0; x <= canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      
      for (let y = 0; y <= canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Draw Active Cells (System Activity)
      if (Math.random() > 0.9) spawnActiveCell();

      activeCells.forEach((cell, index) => {
        cell.life++;
        if (cell.life > cell.maxLife) {
          activeCells.splice(index, 1);
          return;
        }
        
        // Fade in/out
        const opacity = cell.life < 10 
          ? cell.life / 10 
          : (cell.maxLife - cell.life) / 20;

        ctx.fillStyle = cell.color.replace('0.1)', `${Math.max(0, opacity * 0.2)})`);
        ctx.fillRect(cell.x, cell.y, gridSize, gridSize);
        
        // Border highlight
        ctx.strokeStyle = cell.color.replace('0.1)', `${Math.max(0, opacity * 0.5)})`);
        ctx.strokeRect(cell.x + 2, cell.y + 2, gridSize - 4, gridSize - 4);
      });

      // Update and Draw Data Particles
      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        // Random chance to change axis at intersection
        if (p.x % gridSize === 0 && p.y % gridSize === 0 && Math.random() > 0.95) {
            p.axis = p.axis === 'x' ? 'y' : 'x';
            if (p.axis === 'x') {
                p.vx = Math.random() > 0.5 ? p.speed : -p.speed;
                p.vy = 0;
            } else {
                p.vx = 0;
                p.vy = Math.random() > 0.5 ? p.speed : -p.speed;
            }
        }

        // Wrap around edges
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        // Draw 'Data Packet' Head
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 5;
        ctx.shadowColor = p.color;
        ctx.beginPath();
        ctx.rect(p.x - 1, p.y - 1, 3, 3);
        ctx.fill();
        ctx.shadowBlur = 0;
        
        
        // Draw Trail
        // (Optional: keep simple for performance)
      });
      
      // Maintain particle count
      if (particles.length < (canvas.width * canvas.height) / 20000) {
          spawnParticle();
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    draw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 0, // Behind content but visible
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        opacity: 0.6 // Blend with background
      }}
    />
  );
};

export default CyberpunkCanvas;

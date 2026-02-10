import React, { useEffect, useState } from 'react';

const CyberpunkBorder: React.FC = () => {
  const [dimensions, setDimensions] = useState({ 
    width: 0, 
    height: 0 
  });

  useEffect(() => {
    // Set initial dimensions on mount (client-side)
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight
    });

    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { width: w, height: h } = dimensions;
  const isMobile = w < 768;
  const p = isMobile ? 8 : 20; // Padding
  const c = isMobile ? 15 : 30; // Corner cut size
  const tabW = isMobile ? 120 : 300; // Top left tab width for logo

  // Calculate path for the main frame border
  // Starting closely under the logo tab area
  const borderPath = `
    M ${p + c} ${p} 
    L ${p + tabW} ${p} 
    L ${p + tabW + c} ${p + c/2} 
    L ${w - p - c} ${p + c/2} 
    L ${w - p} ${p + c + c/2} 
    L ${w - p} ${h - p - c} 
    L ${w - p - c} ${h - p} 
    L ${p + c} ${h - p} 
    L ${p} ${h - p - c} 
    L ${p} ${p + c} 
    Z
  `;

  // Decorative lines or accents
  const topLine = `M ${p + tabW + c + 10} ${p - 5} L ${w - p - c} ${p - 5}`;

  return (
    <svg 
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%', 
        zIndex: 40, 
        pointerEvents: 'none' 
      }}
    >
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      {/* Main Border Frame */}
      <path
        d={borderPath}
        fill="none"
        stroke="rgba(255, 255, 255, 0.2)"
        strokeWidth="1.5"
        style={{ filter: 'url(#glow)' }}
      />

      {/* Top Left Accent (Logo Container Hinge) */}
      <path
        d={`M ${p} ${p + c} L ${p + c} ${p}`}
        fill="none"
        stroke="var(--accent-red)"
        strokeWidth="2"
      />
      
      {/* Bottom Right Accent */}
      <path
        d={`M ${w - p - c} ${h - p} L ${w - p} ${h - p - c}`}
        fill="none"
        stroke="var(--accent-red)"
        strokeWidth="2"
      />

      {/* Tech Details/Deco */}
      <rect x={w-p-100} y={h-p-15} width="60" height="4" fill="var(--text-dim)" opacity="0.5" />
      <rect x={w-p-30} y={h-p-15} width="10" height="4" fill="var(--accent-red)" />

    </svg>
  );
};

export default CyberpunkBorder;

import React, { useState, useEffect, useRef } from 'react';

interface DecipherTextProps {
  text: string;
  className?: string; // Additional classes for styling
  style?: React.CSSProperties; // Inline styles
  revealSpeed?: number; // Speed in ms per character update
  revealStep?: number; // How many characters to reveal per cycle (float)
  initialDelay?: number; // Delay before starting the effect
  animateOnHover?: boolean; // Whether to trigger animation on hover
  colors?: string[]; // Optional array of colors for the scrambling characters
}

const DecipherText: React.FC<DecipherTextProps> = ({ 
  text, 
  className, 
  style, 
  revealSpeed = 50, 
  revealStep = 0.3, 
  initialDelay = 0,
  animateOnHover = false,
  colors = ['#FF003C', '#00F3FF', '#FFFFFF'] // Cyberpunk defaults
}) => {
  const [displayText, setDisplayText] = useState(text);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Expanded character set for richer matrix effect
  const chars = 'AZ0123456789!@#$%^&*()_+={}[]|:;<>,.?/~`';

  useEffect(() => {
    let iteration = 0;
    
    const runAnimation = () => {
      if (intervalRef.current) clearInterval(intervalRef.current);

      intervalRef.current = setInterval(() => {
        setDisplayText(prev => 
          text
            .split('')
            .map((char, index) => {
              if (index < iteration) {
                return text[index];
              }
              // Return random character
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join('')
        );

        if (iteration >= text.length) {
          if (intervalRef.current) clearInterval(intervalRef.current);
          setDisplayText(text); // Ensure final text is exact
        }

        iteration += revealStep;
      }, revealSpeed);
    };

    let timeoutId: ReturnType<typeof setTimeout>;

    if (!animateOnHover) {
      if (initialDelay > 0) {
        // Start with scrambled text immediately if delayed
        setDisplayText(
           text.split('').map(() => chars[Math.floor(Math.random() * chars.length)]).join('')
        );
        timeoutId = setTimeout(runAnimation, initialDelay);
      } else {
        runAnimation();
      }
    } else {
        // Reset to original text if not hovering and animOnHover is true
        if (!isHovered) {
             setDisplayText(text);
             if (intervalRef.current) clearInterval(intervalRef.current);
        } else {
             // Only animate if hovered
             runAnimation();
        }
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [text, revealSpeed, revealStep, initialDelay, animateOnHover, isHovered]);

  return (
    <span 
      className={className} 
      style={{ display: 'inline-block', ...style }} // inline-block helps with layout stability during width changes
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {displayText}
    </span>
  );
};

export default DecipherText;

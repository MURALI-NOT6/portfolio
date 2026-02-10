import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { playLoadingSound } from '../utils/sound';

const LoadingScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('Initializing System...');

  const techPhrases = [
    'ENCRYPTING CONNECTION...',
    'VERIFYING IDENTITY...',
    'BYPASSING FIREWALL...',
    'ESTABLISHING SECURE LINK...',
    'ACCESS GRANTED',
    'LOADING SYSTEM...',
  ];

  useEffect(() => {
    let currentProgress = 0;
    const audio = playLoadingSound();
    
    const interval = setInterval(() => {
      currentProgress += Math.random() * 15;
      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(interval);
        audio.pause();
        setTimeout(onComplete, 800);
      }
      setProgress(currentProgress);
      
      const phraseIndex = Math.min(
        Math.floor((currentProgress / 100) * techPhrases.length),
        techPhrases.length - 1
      );
      setLoadingText(techPhrases[phraseIndex]);
    }, 200);

    return () => {
      clearInterval(interval);
      audio.pause();
    };
  }, [onComplete]);

  return (
    <motion.div 
      className="loading-container"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="flex flex-col items-center">
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0.5, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <span style={{ 
            fontFamily: 'var(--font-ui)', 
            fontSize: '1.5rem', 
            fontWeight: 800,
            letterSpacing: '10px'
          }}>
            MURALIDHARAN
          </span>
        </motion.div>

        <div className="loading-text">{loadingText}</div>
        
        <div className="loading-bar-wrapper">
          <motion.div 
            className="loading-bar-fill"
            animate={{ width: `${progress}%` }}
          />
        </div>

        <div className="mt-4 flex justify-between w-[300px]">
          <span className="loading-text text-[10px]">{Math.floor(progress)}%</span>
          <span className="loading-text text-[10px]">VER 2.0.26</span>
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;

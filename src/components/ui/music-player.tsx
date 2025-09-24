"use client";

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const PlayingIcon = () => (
  <motion.div
    className="flex items-end justify-center h-6 w-6"
    initial="paused"
    animate="playing"
    variants={{
      paused: {
        opacity: 1,
      },
      playing: {
        opacity: 1,
      },
    }}
  >
    <motion.span
      className="w-1 h-2 bg-white mx-px"
      variants={{ paused: { height: '0.5rem' }, playing: { height: ['0.25rem', '1rem', '0.25rem'] } }}
      transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
    />
    <motion.span
      className="w-1 h-4 bg-white mx-px"
      variants={{ paused: { height: '1rem' }, playing: { height: ['0.75rem', '0.25rem', '0.75rem'] } }}
      transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
    />
    <motion.span
      className="w-1 h-2 bg-white mx-px"
      variants={{ paused: { height: '0.5rem' }, playing: { height: ['0.25rem', '1rem', '0.25rem'] } }}
      transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
    />
  </motion.div>
);

const PausedIcon = () => (
    <div className="flex items-center justify-center h-6 w-6">
        <span className="w-1.5 h-1.5 bg-white rounded-full mx-px"></span>
        <span className="w-1.5 h-1.5 bg-white rounded-full mx-px"></span>
        <span className="w-1.5 h-1.5 bg-white rounded-full mx-px"></span>
    </div>
);

interface MusicPlayerProps {
    isPlaying: boolean;
    togglePlayPause: () => void;
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({ isPlaying, togglePlayPause }) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.loop = true;
      if (isPlaying) {
        audioRef.current.play().catch(() => {
            // Autoplay was blocked
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  return (
    <div className="fixed bottom-4 right-4 z-40">
      <audio ref={audioRef} src="/music/bgm.mp3" />
      <button
        onClick={(e) => {
          e.stopPropagation();
          togglePlayPause();
        }}
        className="p-3 rounded-lg bg-primary text-primary-foreground shadow-lg"
      >
        {isPlaying ? <PlayingIcon /> : <PausedIcon />}
      </button>
    </div>
  );
};

export default MusicPlayer;

"use client";

import { useState } from 'react';
import MusicPlayer from '@/components/ui/music-player';
import WelcomeOverlay from '@/components/ui/welcome-overlay';
import { Toaster } from '@/components/ui/toaster';

export default function AppWrapper({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [hasEntered, setHasEntered] = useState(false);

    const handleEnter = () => {
      setIsPlaying(true);
      setHasEntered(true);
    };

    const togglePlayPause = () => {
      setIsPlaying(!isPlaying);
    };

    return (
        <>
            {!hasEntered && <WelcomeOverlay onEnter={handleEnter} />}
            {children}
            <Toaster />
            {/* <MusicPlayer isPlaying={isPlaying} togglePlayPause={togglePlayPause} /> */}
        </>
    );
}

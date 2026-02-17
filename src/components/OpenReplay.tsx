'use client';

import { useEffect } from 'react';

export default function OpenReplay() {
  useEffect(() => {
    const projectKey = process.env.NEXT_PUBLIC_OPENREPLAY_PROJECT_KEY;
    
    // Check if project key exists and is not the placeholder
    if (
      typeof window !== 'undefined' && 
      projectKey && 
      projectKey !== 'your_project_key_here'
    ) {
      // Respect 'Do Not Track' setting
      if (navigator.doNotTrack === '1') {
        return;
      }

      // Dynamically import the tracker to avoid SSR issues
      import('@openreplay/tracker').then(({ default: Tracker }) => {
        try {
          const tracker = new Tracker({
            projectKey: projectKey,
            __DISABLE_SECURE_MODE: process.env.NODE_ENV === 'development',
          });
          
          tracker.start().catch((err) => {
            // Log errors only in development
            if (process.env.NODE_ENV === 'development') {
              console.error('OpenReplay: Startup error:', err);
            }
          });
        } catch (err) {
          if (process.env.NODE_ENV === 'development') {
            console.error('OpenReplay: Tracker initialization failed:', err);
          }
        }
      });
    }
  }, []);

  return null;
}

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { playLoadingSound, playClickSound } from '../utils/sound';

interface SecurityGateProps {
  onUnlock: () => void;
}

const SecurityGate: React.FC<SecurityGateProps> = ({ onUnlock }) => {
  const [msg, setMsg] = useState('SYSTEM_IDLE');
  const [progress, setProgress] = useState(0);
  const [isGranted, setIsGranted] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!hasStarted) return;

    const startTime = Date.now();
    const audio = playLoadingSound();
    
    const steps = [
      { msg: 'ENCRYPTING CONNECTION...', time: 0 },
      { msg: 'VERIFYING IDENTITY...', time: 1500 },
      { msg: 'BYPASSING FIREWALL...', time: 3000 },
      { msg: 'ESTABLISHING SECURE TUNNEL...', time: 4500 },
      { msg: 'ACCESS GRANTED', time: 5500 },
    ];

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      
      // Update Progress
      const newProgress = Math.min((elapsed / 6000) * 100, 100);
      setProgress(newProgress);

      // Update Message
      const step = steps.slice().reverse().find(s => elapsed >= s.time);
      if (step) {
        setMsg(step.msg);
        if (step.msg === 'ACCESS GRANTED' && !isGranted) {
            setIsGranted(true);
        }
      }

      // Completion
      if (elapsed > 6500) {
        clearInterval(interval);
        audio.pause();
        onUnlock();
      }
    }, 50);

    return () => {
      clearInterval(interval);
      audio.pause();
    };
  }, [hasStarted, onUnlock]);

  return (
    <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(0, 0, 0, 0.95)',
        backdropFilter: 'blur(10px)',
        zIndex: 50,
        fontFamily: 'var(--font-mono)',
      }}>
      {!hasStarted ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{ textAlign: 'center' }}
        >
          <motion.div
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ repeat: Infinity, duration: 2 }}
            style={{ 
              color: 'var(--accent-red)', 
              fontSize: '0.8rem', 
              marginBottom: '2rem',
              letterSpacing: '5px'
            }}
          >
            TERMINAL_IDLE // AWAITING_INPUT
          </motion.div>
          <button
            onClick={() => {
              playClickSound();
              setHasStarted(true);
              setMsg('ENCRYPTING CONNECTION...');
            }}
            className="tech-border"
            style={{
              background: 'transparent',
              color: 'var(--text-white)',
              border: '1px solid var(--accent-red)',
              padding: '1.5rem 3rem',
              fontSize: '1.2rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              textTransform: 'uppercase',
              letterSpacing: '4px',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            INITIALIZE INTERFACE
          </button>
        </motion.div>
      ) : (
        <div style={{ width: '300px', textAlign: 'center', position: 'relative', zIndex: 10 }}>
          <motion.div
            animate={{ color: isGranted ? '#00ff00' : 'var(--accent-red)' }}
            style={{ 
              fontSize: '1.2rem', 
              marginBottom: '1rem', 
              fontWeight: 'bold',
              textShadow: isGranted ? '0 0 10px #00ff00' : '0 0 10px var(--accent-red)',
              letterSpacing: '2px'
            }}
          >
            {msg}
          </motion.div>

          {/* Progress Bar Container */}
          <div style={{ 
            width: '100%', 
            height: '4px', 
            background: '#1a1a1a',
            position: 'relative',
            overflow: 'hidden',
            border: '1px solid #333'
          }}>
            {/* Progress Bar Fill */}
            <motion.div 
              style={{
                width: `${progress}%`,
                height: '100%',
                background: isGranted ? '#00ff00' : 'var(--accent-red)',
                boxShadow: isGranted ? '0 0 10px #00ff00' : '0 0 10px var(--accent-red)'
              }}
            />
          </div>
          
          {/* Footer Details */}
          <div style={{ 
            marginTop: '0.5rem', 
            fontSize: '0.7rem', 
            color: 'var(--text-dim)', 
            opacity: 0.7,
            display: 'flex',
            justifyContent: 'space-between',
            fontFamily: 'var(--font-mono)'
          }}>
             <span>SECURE_LAYER_V2</span>
             <span>{Math.floor(progress)}%</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default SecurityGate;

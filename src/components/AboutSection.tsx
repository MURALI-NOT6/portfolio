import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, X } from 'lucide-react';
import { playClickSound } from '../utils/sound';

interface AboutSectionProps {
  onClose?: () => void;
  onMinimize?: () => void;
}

const AboutSection: React.FC<AboutSectionProps> = ({ onClose, onMinimize }) => {
  return (
    <div className="section-wrapper" style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      zIndex: 10,
      padding: '20px'
    }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="cyber-border-animated about-container-inner"
        style={{
          background: 'rgba(0, 0, 0, 0.85)',
          backdropFilter: 'blur(10px)',
          maxWidth: '1280px',
          width: 'min(98%, 1280px)',
          position: 'relative',
          clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 30px 100%, 0 calc(100% - 30px))',
          height: 'min(76vh, 700px)',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        {/* Scrollbar hide for Chrome/Safari */}
        <style>{`
          div::-webkit-scrollbar { display: none; }
          @media (max-width: 1024px) {
            .section-wrapper { padding: 0 !important; }
            .about-container-inner {
              width: 100% !important;
              height: auto !important;
              min-height: auto !important;
              padding: 0 !important;
              clip-path: none !important;
              overflow: visible !important;
            }
            .section-scroll-container {
               overflow: visible !important;
               height: auto !important;
               padding-bottom: 4rem !important;
            }
          }
          @media (max-width: 768px) {
            .hud-header {
              padding: 10px 10px !important;
            }
            .hud-timer {
              display: none !important;
            }
             .section-scroll-container {
               padding: 1rem !important;
            }
            .hud-decoration {
              display: none !important;
            }
            .terminate-text {
              display: none !important;
            }
            .terminate-button {
              padding: 5px !important;
              border: none !important;
              background: transparent !important;
            }
          }
        `}</style>

        {/* HUD Top Bar */}
        <div className="hud-header" style={{
          padding: '12px 30px', 
          background: 'rgba(255, 0, 60, 0.15)', 
          borderBottom: '1px solid rgba(255, 0, 60, 0.4)', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          position: 'relative', 
          zIndex: 30 
        }}> 
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}> 
            <div style={{ padding: '4px 10px', background: 'var(--accent-red)', color: '#000', fontFamily: 'var(--font-mono)', fontSize: '0.7rem', fontWeight: 900 }}> 
                PERSONNEL_DATA 
            </div> 
            <div className="hud-timer" style={{ color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)', fontSize: '0.7rem', letterSpacing: '2px', opacity: 0.8 }}> 
                SEC_LEVEL_RESTRICTED // {new Date().getHours()}:{new Date().getMinutes() < 10 ? '0' + new Date().getMinutes() : new Date().getMinutes()} 
            </div> 
          </div> 
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}> 
            <div className="hud-decoration" style={{ width: '10px', height: '2px', background: 'var(--accent-cyan)' }} /> 
            <div className="hud-decoration" style={{ width: '30px', height: '2px', background: 'var(--accent-red)' }} /> 
            <div  
                className="terminate-button"
                style={{ 
                    cursor: 'pointer', 
                    opacity: 0.8,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                    border: '1px solid rgba(255, 0, 60, 0.5)',
                    padding: '2px 8px',
                    background: 'rgba(255, 0, 60, 0.1)',
                    fontSize: '0.6rem',
                    color: 'var(--accent-red)',
                    fontFamily: 'var(--font-mono)'
                }}  
                onClick={() => { playClickSound(); onClose?.(); }} 
            > 
                <span className="terminate-text">TERMINATE</span> <X size={14} color="var(--accent-red)" /> 
            </div> 
          </div> 
        </div>

        {/* Inner Scrollable Container */}
        <div className="section-scroll-container" style={{
            flex: 1,
            minHeight: 0,
            overflowY: 'auto',
            padding: 'max(1rem, 4vw)',
            scrollbarWidth: 'none'
        }}>
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              style={{ marginBottom: '2rem' }}
            >
              <h2 style={{
                  fontFamily: 'var(--font-ui)',
                  fontSize: 'clamp(1.8rem, 6vw, 3.5rem)',
                  color: 'var(--text-white)',
                  textTransform: 'uppercase',
                  lineHeight: 1,
                  letterSpacing: '2px',
                  position: 'relative',
                  display: 'inline-block'
              }}>
                <span style={{ color: 'var(--accent-red)' }}>SYSTEM</span> ARCHITECT
              </h2>
            </motion.div>

            <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '1rem',
                lineHeight: 1.8,
                color: 'var(--text-dim)',
                marginBottom: '2rem'
            }}
            >
            <p style={{ marginBottom: '1rem' }}>
                I am a Frontend developer with 6+ years of experience in building scalable, user-friendly 
                web applications and UI/Frontend in a startup environment. My expertise spans HTML, CSS, SASS, 
                JavaScript, and React.js, with a strong focus on delivering seamless user experiences.
            </p>
            <p style={{ marginBottom: '1rem' }}>
                Beyond frontend, I specialize in automation and AI-driven development, leveraging tools like 
                n8n for workflow automation and Gemini AI for building intelligent, efficient, and modern 
                applications. I also have hands-on knowledge in AWS deployment and cloud setup.
            </p>
            <p>
                I am passionate about scalable UI solutions, automation, and AI integration, and thrive 
                in dynamic environments where innovation and problem-solving drive business growth.
            </p>
            </motion.div>

            {/* Stats Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
              gap: '1.5rem',
              marginTop: '3rem'
            }}>
            {[
                { label: 'EXPERIENCE', val: '6+ YEARS' },
                { label: 'PROJECTS', val: '20+ DEPLOYED' },
                { label: 'STACK', val: 'MERN / AI' },
                { label: 'STATUS', val: 'AVAILABLE' }
            ].map((stat, i) => (
                <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + (i * 0.1) }}
                whileHover={{ y: -5, borderColor: 'var(--accent-cyan)' }}
                style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    padding: '1.5rem 1rem',
                    textAlign: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.3s ease'
                }}
                >
                  {/* Corner Accent */}
                  <div style={{ position: 'absolute', top: 0, right: 0, width: '15px', height: '15px', borderRight: '2px solid var(--accent-red)', borderTop: '2px solid var(--accent-red)' }} />
                  
                  <div style={{ 
                    fontFamily: 'var(--font-mono)', 
                    color: 'var(--accent-red)', 
                    fontSize: '0.7rem', 
                    marginBottom: '0.7rem',
                    letterSpacing: '1px',
                    opacity: 0.8
                  }}>
                    {stat.label}
                  </div>
                  <div style={{ 
                    fontFamily: 'var(--font-ui)', 
                    color: 'var(--text-white)', 
                    fontSize: '1.3rem', 
                    fontWeight: 800,
                    letterSpacing: '1px'
                  }}>
                    {stat.val}
                  </div>
                </motion.div>
            ))}
            </div>
        </div>

      </motion.div>
    </div>
  );
};

export default AboutSection;

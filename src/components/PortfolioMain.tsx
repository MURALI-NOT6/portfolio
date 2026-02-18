import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, ChevronRight, BarChart3, Menu, X, Home, User, Cpu, Briefcase, Mail, Shield, Zap } from 'lucide-react';

import CyberpunkCanvas from './CyberpunkCanvas';
const bannerVideo = '/assets/image/banner.mp4';
import CyberpunkBorder from './CyberpunkBorder';
import AboutSection from './AboutSection';
import SkillsSection from './SkillsSection';
import ProjectsSection from './ProjectsSection';
import ContactSection from './ContactSection';
import SecurityGate from './SecurityGate';
import DecipherText from './DecipherText';
const resumePdf = '/assets/pdf/muralidharan.pdf';
import { playClickSound, playTechSound } from '../utils/sound';

const PortfolioMain: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState('HOME');
  const [securityCleared, setSecurityCleared] = React.useState(true);
  const [showAbout, setShowAbout] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);

  useEffect(() => {
    // Play tech sound once on initial load of the portfolio interface
    playTechSound();
  }, []);

  // Handle Tab Change
  const handleTabChange = (tab: string) => {
    playClickSound();
    setActiveTab(tab);
    setMenuOpen(false); // Close menu after selection
  };

  return (
    <div className="portfolio-container">
      <CyberpunkBorder />

      {/* Background Video Layer */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -2,
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1,
          background: `
            linear-gradient(to right, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 20%, rgba(0,0,0,0) 40%, rgba(0,0,0,0) 60%, rgba(0,0,0,0.4) 80%, rgba(0,0,0,0.9) 100%),
            linear-gradient(to right, rgba(0, 255, 128, 0.1), rgba(255, 0, 60, 0.1))
          `,
        }} />
        <video
          src={bannerVideo}
          muted
          playsInline
          autoPlay
          preload="auto"
          onLoadedMetadata={(e) => {
            const video = e.currentTarget;
            if (video.duration > 4) {
              video.currentTime = video.duration - 4;
            }
          }}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'brightness(0.8)',
          }}
        />
      </div>
      <CyberpunkCanvas />

      {/* GLOBAL Loading Screen Transition */}
      {!securityCleared && (
        <SecurityGate onUnlock={() => setSecurityCleared(true)} />
      )}

      {/* Header Navigation Area */}
      <nav className="main-header-nav" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '2rem',
        marginTop: '0.5rem',
        padding: '0.5rem 1.5rem',
        flexShrink: 0,
        position: 'relative',
        zIndex: 100,
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span className="glitch-text" style={{ fontFamily: 'var(--font-ui)', fontWeight: 900, fontSize: '1.4rem', color: 'var(--accent-red)', textShadow: '0 0 10px rgba(255, 0, 60, 0.5)' }}>PORTFOLIO</span>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="mobile-menu-toggle" style={{ display: 'none' }} onClick={() => { setMenuOpen(!menuOpen); playClickSound(); }}>
          {menuOpen ? <X color="var(--accent-red)" /> : <Menu color="var(--accent-red)" />}
        </div>

        <div
          className={`navigation-bar ${menuOpen ? 'mobile-open' : ''}`}
          style={{
            display: 'flex',
            gap: '4px',
            alignItems: 'center'
          }}>

          {/* Mobile-only Sidebar Header */}
          {menuOpen && (
            <div className="mobile-only-header" style={{ width: '100%', marginBottom: '2rem', padding: '0 1rem' }}>
              <div style={{ color: 'var(--accent-red)', fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '3px', opacity: 0.8, marginBottom: '5px' }}>
                <Shield size={10} style={{ marginRight: '5px', verticalAlign: 'middle' }} /> SYSTEM_NAVIGATOR_v2.1
              </div>
              <div style={{ height: '1px', width: '100%', background: 'linear-gradient(90deg, var(--accent-red), transparent)' }} />
            </div>
          )}

          {[
            { id: 'HOME', icon: <Home size={16} /> },
            { id: 'ABOUT', icon: <User size={16} /> },
            { id: 'SKILLS', icon: <Cpu size={16} /> },
            { id: 'PROJECTS', icon: <Briefcase size={16} /> },
            { id: 'CONTACT', icon: <Mail size={16} /> }
          ].map((item, i) => {
            const isActive = activeTab === item.id;
            return (
              <motion.button
                key={item.id}
                className={`nav-button ${isActive ? 'active' : ''}`}
                initial={{ opacity: 0, x: menuOpen ? 20 : 0 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  backgroundColor: isActive ? 'rgba(255, 255, 255, 0.25)' : 'rgba(0, 0, 0, 0.4)',
                  color: isActive ? 'var(--text-white)' : 'rgba(255, 255, 255, 0.9)',
                  border: isActive ? '1px solid var(--accent-red)' : '1px solid rgba(255, 255, 255, 0.1)',
                }}
                transition={{
                  delay: menuOpen ? 0.1 + (i * 0.05) : 0,
                  duration: 0.3
                }}
                whileHover={{
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  color: 'var(--text-white)',
                  scale: 1.02
                }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleTabChange(item.id)}
                style={{
                  padding: '0.4rem 1.2rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  clipPath: menuOpen
                    ? 'polygon(0 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%)'
                    : 'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  minWidth: menuOpen ? '100%' : 'auto',
                  margin: menuOpen ? '2px 0' : '0 4px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  transition: 'all 0.2s ease',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <span style={{ display: 'flex', alignItems: 'center', opacity: 0.8 }}>{item.icon}</span>
                {item.id}
                {isActive && menuOpen && (
                  <motion.div
                    layoutId="activeGlow"
                    style={{ position: 'absolute', left: 0, width: '3px', height: '100%', background: 'var(--accent-red)', boxShadow: '0 0 10px var(--accent-red)' }}
                  />
                )}
              </motion.button>
            );
          })}

          {/* Mobile-only Sidebar Footer */}
          {menuOpen && (
            <div className="mobile-only-footer" style={{ marginTop: 'auto', width: '100%', padding: '2rem 1rem 0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'rgba(255, 255, 255, 0.4)', fontFamily: 'var(--font-mono)', fontSize: '0.55rem' }}>
                <Zap size={10} color="var(--accent-cyan)" /> NETWORK_LATENCY: 24ms
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'rgba(255, 255, 255, 0.4)', fontFamily: 'var(--font-mono)', fontSize: '0.55rem', marginTop: '5px' }}>
                <Shield size={10} color="var(--accent-red)" /> CORE_TEMP: OPTIMAL
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content Area - Only visible after loading */}
      <div className="main-layout" style={{
        position: 'relative',
        zIndex: 10,
        opacity: securityCleared ? 1 : 0,
        transition: 'opacity 0.5s',
        display: (activeTab === 'ABOUT' || activeTab === 'SKILLS' || activeTab === 'PROJECTS' || activeTab === 'CONTACT') ? 'block' : 'grid',
        width: '100%'
      }}>
        {activeTab === 'HOME' && (
          <>
            {/* ... (Hero Code - no changes here, just referenced context) ... */}
            {/* Hero Section */}
            <motion.div
              className="hero-content"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <motion.h1
                animate={{ skewX: [0, -10, 0, 10, 0], opacity: [1, 0.8, 1, 0.9, 1] }}
                transition={{ repeat: Infinity, duration: 3, times: [0, 0.1, 0.2, 0.3, 1] }}
                style={{
                  fontFamily: 'var(--font-ui)',
                  fontSize: 'clamp(1.5rem, 6vw, 4rem)',
                  lineHeight: 1,
                  fontWeight: 900,
                  marginBottom: '0.8rem',
                  textTransform: 'uppercase',
                  letterSpacing: '-0.02em',
                  background: 'linear-gradient(to right, #FFFFFF 0%, #B0B0B0 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  filter: 'drop-shadow(0 0 15px rgba(255, 255, 255, 0.3))'
                }}
              >
                MURALIDHARAN
              </motion.h1>
              <p style={{
                maxWidth: '600px',
                color: 'var(--text-white)',
                lineHeight: 1.4,
                fontSize: 'clamp(0.8rem, 3vw, 1rem)',
                opacity: 0.9,
                marginBottom: '1.5rem',
                textShadow: '0 2px 4px rgba(0,0,0,0.8)'
              }}>
                Frontend Developer specializing in modern web technologies, scalable systems, and user-centric digital solutions
              </p>
              <div
                className="hero-buttons"
                style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}
              >
                <a
                  href={resumePdf}
                  download="muralidharan.pdf"
                  className="tech-border"
                  onClick={() => playClickSound()}
                  style={{
                    background: 'var(--text-white)',
                    color: 'black',
                    padding: '0.8rem 1.8rem',
                    border: 'none',
                    fontFamily: 'var(--font-ui)',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                    fontSize: '0.9rem'
                  }}
                >
                  Download Resume
                </a>
                <button
                  className="tech-border"
                  onClick={() => handleTabChange('CONTACT')}
                  style={{
                    background: 'transparent',
                    color: 'var(--text-white)',
                    padding: '0.8rem 1.8rem',
                    border: '1px solid var(--text-white)',
                    fontFamily: 'var(--font-ui)',
                    fontWeight: 700,
                    cursor: 'pointer',
                    textTransform: 'uppercase',
                    fontSize: '0.9rem'
                  }}
                >
                  Contact Me
                </button>
              </div>
            </motion.div>

            {/* Right Side Content - Hidden on very small screens to save space */}
            <motion.div
              className="hidden-mobile"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              style={{ position: 'relative' }}
            >
              <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', maxWidth: '400px', marginLeft: 'auto' }}>
                <div style={{ marginTop: '1rem', opacity: 0.8, fontSize: '0.9rem', textAlign: 'right', fontFamily: 'var(--font-mono)', color: 'var(--accent-red)' }}>
                  SYSTEM STATUS: ONLINE <br />
                  LOCATION: SALEM, IND <br />
                  ROLE: FRONTEND DEVELOPER
                </div>
              </div>
            </motion.div>
          </>
        )}

        {activeTab === 'ABOUT' && (
          <AboutSection onClose={() => setActiveTab('HOME')} onMinimize={() => setActiveTab('HOME')} />
        )}

        {activeTab === 'SKILLS' && (
          <SkillsSection onClose={() => setActiveTab('HOME')} onMinimize={() => setActiveTab('HOME')} />
        )}

        {activeTab === 'PROJECTS' && (
          <ProjectsSection onClose={() => setActiveTab('HOME')} onMinimize={() => setActiveTab('HOME')} />
        )}

        {activeTab === 'CONTACT' && (
          <ContactSection onClose={() => setActiveTab('HOME')} onMinimize={() => setActiveTab('HOME')} />
        )}
      </div>



      <div className="bottom-signal-indicator" style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        display: 'flex',
        alignItems: 'flex-end',
        gap: '4px'
      }}>
        {[0.4, 0.7, 0.2, 0.9, 0.5, 0.8, 0.3].map((delay, i) => (
          <motion.div
            key={i}
            animate={{ height: ['8px', '24px', '12px', '28px', '8px'] }}
            transition={{ repeat: Infinity, duration: 1, delay: delay }}
            style={{ width: '4px', background: 'var(--accent-red)', borderRadius: '2px' }}
          />
        ))}
        <div style={{ marginLeft: '12px', fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--accent-red)', letterSpacing: '1px' }}>
          SIGNAL ACTIVE
        </div>
      </div>
    </div>
  );
};

export default PortfolioMain;

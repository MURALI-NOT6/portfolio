import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Terminal, Database, Sparkles, Box, Info, Activity, ShieldCheck, Zap, X } from 'lucide-react';
import DecipherText from './DecipherText';
import { playClickSound } from '../utils/sound';

interface SkillsSectionProps {
  onClose?: () => void;
  onMinimize?: () => void;
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ onClose, onMinimize }) => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skillCategories = [
    {
      title: 'CORE_ENGINE (FRONTEND)',
      icon: <Cpu size={16} />,
      skills: [
        { name: 'React', level: 95, desc: 'Architecting high-performance UI systems with advanced state patterns.' },
        { name: 'Next.js', level: 90, desc: 'Optimizing data delivery via SSR, ISR, and edge computing.' },
        { name: 'TypeScript', level: 85, desc: 'Implementing strict type systems for mission-critical stability.' },
        { name: 'JavaScript', level: 95, desc: 'Core logic execution and asynchronous memory management.' },
        { name: 'Tailwind CSS', level: 90, desc: 'Rapid deployment of utility-first visual frameworks.' },
        { name: 'SASS/CSS3', level: 90, desc: 'Quantum-level styling and kinetic animation sequences.' },
        { name: 'Webpack', level: 80, desc: 'Compiling complex modules into optimized system payloads.' }
      ]
    },
    {
      title: 'DATA_STRUCTURE (BACKEND)',
      icon: <Database size={16} />,
      skills: [
        { name: 'Node.js', level: 85, desc: 'Server-side runtime optimization and event-loop management.' },
        { name: 'Express', level: 85, desc: 'Middleware pipeline construction for high-traffic API routing.' },
        { name: 'MongoDB', level: 80, desc: 'Non-relational data modeling and high-speed retrieval.' }
      ]
    },
    {
      title: 'NEURAL_LINK (AI & AUTOMATION)',
      icon: <Sparkles size={16} />,
      skills: [
        { name: 'Gemini AI', level: 90, desc: 'LLM orchestration and advanced generative integration.' },
        { name: 'n8n', level: 85, desc: 'Automating complex business logic via node-based workflows.' }
      ]
    },
    {
      title: 'SYSTEM_TOOLS',
      icon: <Box size={16} />,
      skills: [
        { name: 'Git & GitHub', level: 90, desc: 'Distributed version control and repository synchronization.' },
        { name: 'AWS', level: 75, desc: 'Deploying robust infrastructure across global cloud nodes.' },
        { name: 'Docker', level: 70, desc: 'Encapsulating system environments for consistent execution.' }
      ]
    }
  ];

  const currentSkillData = skillCategories.flatMap(c => c.skills).find(s => s.name === hoveredSkill);

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
        initial={{ opacity: 0, scale: 0.98, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="cyber-border-animated skills-container-inner"
        style={{
          background: 'rgba(0, 0, 0, 0.85)',
          backdropFilter: 'blur(10px)',
          maxWidth: '1280px',
          width: 'min(98%, 1280px)',
          position: 'relative',
          clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 30px 100%, 0 calc(100% - 30px))',
          height: 'min(76vh, 700px)',
          display: 'flex',
          flexDirection: 'column',
          border: '1px solid rgba(255, 0, 60, 0.2)',
          boxShadow: '0 0 30px rgba(0,0,0,0.5)'
        }}
      >
        <style>{`
          .skill-item-container {
            padding: 12px 16px;
            background: rgba(255, 255, 255, 0.02);
            border: 1px solid rgba(255, 255, 255, 0.03);
            margin-bottom: 8px;
            transition: all 0.2s ease;
            position: relative;
            overflow: hidden;
            cursor: pointer;
          }
          .skill-item-container:hover {
            background: rgba(255, 0, 60, 0.05);
            border-color: rgba(255, 0, 60, 0.3);
            transform: translateX(5px);
          }
          .skill-progress-bar {
            height: 2px;
            background: rgba(255, 255, 255, 0.05);
            margin-top: 10px;
            position: relative;
          }
          .skill-progress-segment {
            height: 100%;
            background: var(--accent-red);
            box-shadow: 0 0 10px var(--accent-red);
            position: relative;
          }
          .skill-progress-segment::after {
            content: '';
            position: absolute;
            right: 0;
            top: -2px;
            width: 4px;
            height: 6px;
            background: var(--text-white);
            box-shadow: 0 0 5px var(--text-white);
          }
          .tech-grid {
            columns: 2 380px;
            column-gap: 40px;
          }
          .skill-category-wrapper {
            break-inside: avoid;
            margin-bottom: 40px;
          }
          @media (max-width: 1024px) {
            .tech-grid { columns: 1; column-gap: 0; }
            .section-layout { 
              display: flex !important; 
              flex-direction: column !important; 
              overflow-y: auto !important;
              gap: 20px;
            }
            .custom-scroll { 
                border-right: none !important; 
                border-bottom: 1px solid rgba(255, 255, 255, 0.05);
                overflow-y: visible !important;
                flex: none !important;
                padding: 20px !important;
            }
            .info-panel { 
                height: auto !important; 
                min-height: 350px;
                order: 1 !important; 
                padding: 20px !important;
                margin-top: 10px;
            }
            .skills-container-inner {
              width: 100% !important;
              height: 100% !important;
              min-height: 0 !important;
              clip-path: none !important;
              padding: 0 !important;
            }
            .section-wrapper {
               padding: 0 !important;
            }
          }
          .custom-scroll::-webkit-scrollbar {
            width: 4px;
          }
          .custom-scroll::-webkit-scrollbar-track {
            background: rgba(0,0,0,0.2);
          }
          .custom-scroll::-webkit-scrollbar-thumb {
            background: var(--accent-red);
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
                CRITICAL_ASSETS
            </div>
            <div className="hud-timer" style={{ color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)', fontSize: '0.7rem', letterSpacing: '2px', opacity: 0.8 }}>
                SEC_LEVEL_UNRESTRICTED // {new Date().getHours()}:{new Date().getMinutes() < 10 ? '0' + new Date().getMinutes() : new Date().getMinutes()}
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
                    padding: '2px 8px',
                    border: '1px solid rgba(255, 0, 60, 0.5)',
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

        {/* Main Content Layout */}
        <div className="section-layout" style={{
            flex: 1,
            display: 'grid',
            gridTemplateColumns: '70% 30%',
            overflow: 'hidden'
        }}>
            
            {/* Scrollable Matrix */}
            <div className="custom-scroll" style={{
                overflowY: 'auto',
                padding: '3rem 2rem',
                borderRight: '1px solid rgba(255, 255, 255, 0.05)'
            }}>
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  style={{ marginBottom: '2.5rem' }}
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
                    <span style={{ color: 'var(--accent-red)' }}>TECHNICAL</span> STACK
                  </h2>
                </motion.div>

                <div className="tech-grid">
                    {skillCategories.map((cat, i) => (
                        <div key={cat.title} className="skill-category-wrapper">
                            <h3 style={{ 
                                display: 'flex', 
                                alignItems: 'center', 
                                gap: '10px', 
                                color: 'rgba(255, 255, 255, 0.4)', 
                                fontFamily: 'var(--font-mono)', 
                                fontSize: '0.7rem',
                                letterSpacing: '2px',
                                marginBottom: '20px',
                                paddingLeft: '5px'
                            }}>
                                <div style={{ width: '4px', height: '12px', background: 'var(--accent-red)' }} />
                                {cat.icon} {cat.title}
                            </h3>
                            
                            {cat.skills.map((skill, idx) => (
                                <motion.div
                                    key={skill.name}
                                    className="skill-item-container"
                                    onMouseEnter={() => { setHoveredSkill(skill.name); playClickSound(); }}
                                    onMouseLeave={() => setHoveredSkill(null)}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 + (i * 0.1) + (idx * 0.05) }}
                                >
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <span style={{ 
                                            fontFamily: 'var(--font-ui)', 
                                            fontSize: '0.95rem', 
                                            color: hoveredSkill === skill.name ? 'var(--accent-cyan)' : 'var(--text-white)',
                                            fontWeight: 600,
                                            letterSpacing: '1px'
                                        }}>
                                            {skill.name}
                                        </span>
                                        <span style={{ 
                                            fontFamily: 'var(--font-mono)', 
                                            fontSize: '0.65rem', 
                                            color: 'var(--accent-red)',
                                            opacity: 0.6
                                        }}>
                                            MOD_{100+idx}
                                        </span>
                                    </div>
                                    <div className="skill-progress-bar">
                                        <motion.div 
                                            className="skill-progress-segment"
                                            initial={{ width: 0 }}
                                            animate={{ width: `${skill.level}%` }}
                                            transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
                                            style={{ 
                                                backgroundColor: hoveredSkill === skill.name ? 'var(--accent-cyan)' : 'var(--accent-red)',
                                                boxShadow: hoveredSkill === skill.name ? '0 0 15px var(--accent-cyan)' : '0 0 10px var(--accent-red)'
                                            }}
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            {/* Sidebar Inspector */}
            <div className="info-panel" style={{
                background: 'rgba(5, 5, 5, 0.4)',
                padding: '30px',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px'
            }}>
                <div style={{ 
                    fontFamily: 'var(--font-mono)', 
                    fontSize: '0.65rem', 
                    color: 'var(--accent-red)', 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '10px' 
                }}>
                    <Activity size={14} /> MODULE_INSPECTOR_v4.0
                </div>

                <div style={{ 
                    flex: 1, 
                    border: '1px solid rgba(255, 255, 255, 0.05)', 
                    padding: '20px', 
                    position: 'relative',
                    background: 'rgba(0,0,0,0.2)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center'
                }}>
                    {/* Panel Corner Decos */}
                    <div style={{ position: 'absolute', top: -1, left: -1, width: '15px', height: '15px', borderLeft: '1px solid var(--accent-cyan)', borderTop: '1px solid var(--accent-cyan)' }} />
                    <div style={{ position: 'absolute', bottom: -1, right: -1, width: '15px', height: '15px', borderRight: '1px solid var(--accent-cyan)', borderBottom: '1px solid var(--accent-cyan)' }} />

                    <AnimatePresence mode="wait">
                        {hoveredSkill ? (
                            <motion.div
                                key={hoveredSkill}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.3 }}
                                style={{ width: '100%' }}
                            >
                                <div style={{ 
                                    fontFamily: 'var(--font-mono)', 
                                    fontSize: '0.6rem', 
                                    color: 'var(--accent-cyan)', 
                                    marginBottom: '5px',
                                    textAlign: 'left',
                                    letterSpacing: '2px'
                                }}>
                                    TARGET_IDENTIFIED:
                                </div>
                                <motion.h2 style={{ 
                                    fontFamily: 'var(--font-ui)', 
                                    color: 'var(--text-white)', 
                                    fontSize: '1.8rem', 
                                    margin: '0 0 20px 0',
                                    textTransform: 'uppercase',
                                    fontWeight: 900,
                                    textAlign: 'left',
                                    textShadow: '0 0 10px rgba(255,255,255,0.2)'
                                }}>
                                    {hoveredSkill}
                                </motion.h2>

                                {/* UX Metric Metrics */}
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginBottom: '25px' }}>
                                    {[
                                        { label: 'VISUAL_FIDELITY', val: 90 + Math.random() * 10 },
                                        { label: 'USER_EXPERIENCE', val: 85 + Math.random() * 10 },
                                        { label: 'LOGIC_STRUCTURE', val: 95 + Math.random() * 5 }
                                    ].map((metric, mi) => (
                                        <div key={mi}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                                                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', color: 'rgba(255,255,255,0.4)' }}>{metric.label}</span>
                                                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', color: 'var(--accent-cyan)' }}>{Math.floor(metric.val)}%</span>
                                            </div>
                                            <div style={{ height: '2px', background: 'rgba(0, 243, 255, 0.1)', position: 'relative' }}>
                                                <motion.div 
                                                    initial={{ width: 0 }}
                                                    animate={{ width: `${metric.val}%` }}
                                                    style={{ height: '100%', background: 'var(--accent-cyan)' }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div style={{ 
                                    background: 'rgba(255, 0, 60, 0.05)', 
                                    padding: '15px', 
                                    border: '1px solid rgba(255, 0, 60, 0.1)',
                                    textAlign: 'left'
                                }}>
                                    <p style={{ 
                                        fontFamily: 'var(--font-mono)', 
                                        color: 'rgba(255,255,255,0.8)', 
                                        fontSize: '0.75rem', 
                                        lineHeight: 1.5,
                                        margin: 0
                                    }}>
                                        <span style={{ color: 'var(--accent-red)', fontWeight: 'bold' }}>// ANALYZING_ITEM: </span>
                                        {currentSkillData?.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="idle"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}
                            >
                                <div style={{ position: 'relative' }}>
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                                        style={{ border: '2px dashed rgba(255, 0, 60, 0.2)', borderRadius: '50%', padding: '20px' }}
                                    >
                                        <motion.div
                                            animate={{ rotate: -360 }}
                                            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                                            style={{ border: '1px solid var(--accent-red)', borderRadius: '50%', padding: '15px', opacity: 0.5 }}
                                        >
                                            <Box size={40} color="var(--accent-red)" style={{ opacity: 0.8 }} />
                                        </motion.div>
                                    </motion.div>
                                    <motion.div 
                                        animate={{ opacity: [0.3, 1, 0.3] }}
                                        transition={{ repeat: Infinity, duration: 2 }}
                                        style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '100px', height: '1px', background: 'var(--accent-cyan)', boxShadow: '0 0 10px var(--accent-cyan)' }} 
                                    />
                                </div>
                                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '2px', color: 'rgba(255,255,255,0.4)' }}>
                                    ESTABLISHING_LINK...<br/>
                                    <DecipherText text="NEURAL_INTERFACE_READY" />
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--text-dim)' }}>
                        <span>SYSTEM_HEALTH</span>
                        <span style={{ color: 'var(--accent-cyan)' }}>OPTIMAL</span>
                    </div>
                    <div style={{ height: '4px', background: 'rgba(255,255,255,0.05)', display: 'flex' }}>
                        <div style={{ width: '90%', background: 'var(--accent-cyan)', boxShadow: '0 0 10px var(--accent-cyan)' }} />
                    </div>
                    <div style={{ display: 'flex', gap: '5px', marginTop: '10px' }}>
                        <Zap size={12} color="var(--accent-red)" />
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--accent-red)' }}>OVERCLOCK_ACTIVE</span>
                    </div>
                </div>
            </div>
        </div>

      </motion.div>
    </div>
  );
};

export default SkillsSection;

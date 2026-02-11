import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Linkedin, MapPin, Send, Terminal, ShieldCheck, ShieldAlert, X, Box, Activity, Lock, WifiOff, Globe, Cpu, Database, Zap } from 'lucide-react';
import { playClickSound } from '../utils/sound';

import { useForm } from 'react-hook-form';

interface ContactSectionProps {
  onClose?: () => void;
  onMinimize?: () => void;
}

type FormData = {
  name: string;
  email: string;
  message: string;
};

const TacticalLoading: React.FC = () => (
  <div style={{ position: 'relative', width: '180px', height: '180px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    {/* Animated Background Rings */}
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        border: '1px dashed rgba(0, 243, 255, 0.2)',
      }}
    />
    
    {/* Central Pulsing Sphere */}
    <motion.div
      animate={{ 
        scale: [1, 1.2, 1],
        boxShadow: [
          '0 0 10px rgba(0, 243, 255, 0.2)',
          '0 0 30px rgba(0, 243, 255, 0.5)',
          '0 0 10px rgba(0, 243, 255, 0.2)'
        ]
      }}
      transition={{ duration: 2, repeat: Infinity }}
      style={{
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        background: 'rgba(0, 243, 255, 0.1)',
        border: '1px solid var(--accent-cyan)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 5
      }}
    >
        <Cpu size={30} color="var(--accent-cyan)" />
    </motion.div>

    {/* Orbiting Particles */}
    {[0, 90, 180, 270].map((angle, i) => (
        <motion.div
            key={i}
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            style={{
                position: 'absolute',
                width: '140px',
                height: '140px',
                transform: `rotate(${angle}deg)`
            }}
        >
            <div style={{
                width: '6px',
                height: '6px',
                background: 'var(--accent-cyan)',
                borderRadius: '50%',
                boxShadow: '0 0 10px var(--accent-cyan)',
                position: 'absolute',
                top: 0,
                left: '50%',
                transform: 'translateX(-50%)'
            }} />
        </motion.div>
    ))}

    {/* Scanning Line */}
    <motion.div
      animate={{ 
        top: ['10%', '90%', '10%'],
        opacity: [0, 1, 0]
      }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      style={{
        position: 'absolute',
        left: '10%',
        right: '10%',
        height: '2px',
        background: 'rgba(255, 255, 255, 0.5)',
        boxShadow: '0 0 15px white',
        zIndex: 10
      }}
    />
  </div>
);

const TransmissionLogs: React.FC = () => {
    const [logs, setLogs] = useState<string[]>([]);
    const possibleLogs = [
        "ENCRYPTING_PACKETS...",
        "ESTABLISHING_VPN_TUNNEL...",
        "SOURCE_HANDSHAKE_INITIATED",
        "ROUTING_THROUGH_SECURE_NODES",
        "PARITY_CHECK_VALIDATED",
        "BUFFERING_PAYLOAD_DATA",
        "UPLINK_STRENGTH_OPTIMAL",
        "BYPASSING_FIREWALL_PROTOCOL"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setLogs(prev => [possibleLogs[Math.floor(Math.random() * possibleLogs.length)], ...prev].slice(0, 5));
        }, 800);
        return () => clearInterval(interval);
    }, []);

    return (
        <div style={{ 
            fontFamily: 'var(--font-mono)', 
            fontSize: '0.65rem', 
            color: 'var(--accent-cyan)', 
            textAlign: 'left',
            opacity: 0.6,
            height: '80px',
            overflow: 'hidden',
            marginTop: '1.5rem',
            padding: '10px',
            background: 'rgba(0, 243, 255, 0.05)',
            borderLeft: '2px solid var(--accent-cyan)'
        }}>
            {logs.map((log, i) => (
                <div key={i} style={{ marginBottom: '4px' }}>{`> ${log}`}</div>
            ))}
        </div>
    );
};

const ContactSection: React.FC<ContactSectionProps> = ({ onClose, onMinimize }) => {
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ 
    type: 'success' | 'error' | 'loading' | null, 
    show: boolean,
    customMsg?: string 
  }>({ type: null, show: false });
  const [progress, setProgress] = useState(0);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

  useEffect(() => {
      let interval: any;
      if (statusMessage.type === 'loading' && statusMessage.show) {
          setProgress(0);
          interval = setInterval(() => {
              setProgress(prev => (prev < 95 ? prev + Math.random() * 5 : prev));
          }, 100);
      } else {
          setProgress(0);
      }
      return () => clearInterval(interval);
  }, [statusMessage.type, statusMessage.show]);

  const onSubmit = async (data: FormData) => {
    playClickSound();
    
    setIsSending(true);
    setStatusMessage({ type: 'loading', show: true });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setStatusMessage({ type: 'success', show: true });
      reset();
      
      setTimeout(() => setStatusMessage(prev => ({ ...prev, show: false })), 5000);
    } catch (error) {
      console.error('Email Error:', error);
      setStatusMessage({ type: 'error', show: true, customMsg: 'TRANSMISSION_FAILED: SERVER_RELAY_ERROR' });
    } finally {
      setIsSending(false);
    }
  };

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
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="cyber-border-animated contact-container-inner"
        style={{
          background: 'rgba(5, 5, 5, 0.95)',
          backdropFilter: 'blur(15px)',
          maxWidth: '1280px',
          width: 'min(98%, 1280px)',
          position: 'relative',
          clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 30px 100%, 0 calc(100% - 30px))',
          height: 'min(72vh, 750px)',
          display: 'flex',
          flexDirection: 'column',
          border: '1px solid rgba(255, 0, 60, 0.2)',
          top:"20px",
        }}
      >
         <style>{`
          div::-webkit-scrollbar { display: none; }
          @media (max-width: 1024px) {
            .section-wrapper { padding: 1rem !important; }
            .contact-container-inner {
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
               padding-bottom: 6rem !important;
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
            .submit-btn {
              padding: 0.8rem !important;
              font-size: 0.8rem !important;
            }
          }
          @media (max-width: 465px) {
            .contact-container-inner {
              height: auto !important;
              max-height: none !important;
              overflow: visible !important;
            }
            .section-scroll-container {
               overflow: visible !important;
               height: auto !important;
               padding-bottom: 4rem !important;
            }
          }
          .error-text {
            color: #ff003c;
            font-size: 0.7rem;
            font-family: var(--font-mono);
            margin-top: 0.2rem;
            text-transform: uppercase;
            letter-spacing: 1px;
            display: flex;
            alignItems: center;
            gap: 5px;
          }
          /* ... other styles ... */
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
          zIndex: 50 
        }}> 
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}> 
            <div style={{ 
                padding: '4px 15px', 
                background: 'var(--accent-red)', 
                color: '#000', 
                fontFamily: 'var(--font-mono)', 
                fontSize: '0.7rem', 
                fontWeight: 900,
                clipPath: 'polygon(0 0, 100% 0, 95% 100%, 0% 100%)',
                boxShadow: '0 0 15px rgba(255, 0, 60, 0.4)'
            }}> 
                COMMS_INTERFACE
            </div> 
            <div className="hud-timer" style={{ color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)', fontSize: '0.7rem', letterSpacing: '2px', opacity: 0.8 }}> 
                ENCRYPTED_LINK // {new Date().getHours()}:{new Date().getMinutes() < 10 ? '0' + new Date().getMinutes() : new Date().getMinutes()}
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
            padding: 'max(2rem, 5vw)',
            scrollbarWidth: 'none',
            position: 'relative'
        }}>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                gap: '4rem'
            }}>
                {/* Contact Info (Left Side) */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                >
                    <h2 style={{
                        fontFamily: 'var(--font-ui)',
                        fontSize: 'clamp(1.8rem, 6vw, 3.5rem)',
                        color: 'var(--text-white)',
                        textTransform: 'uppercase',
                        lineHeight: 1.2,
                        letterSpacing: '2px',
                        position: 'relative',
                        display: 'inline-block',
                        marginBottom: '2rem',
                        marginTop: '1rem',
                        paddingTop: '0.2em'
                    }}>
                        <span style={{ color: 'var(--accent-red)' }}>INITIATE</span> UPLINK
                    </h2>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <ContactItem 
                            icon={<Mail color="var(--accent-cyan)" />} 
                            label="P2P_MAIL" 
                            value="muralinot6@gmail.com" 
                            href="mailto:muralinot6@gmail.com"
                            delay={0.1}
                        />
                        <ContactItem 
                            icon={<Linkedin color="var(--accent-cyan)" />} 
                            label="LINKED_ID" 
                            value="linkedin.com/in/murali..." 
                            href="https://linkedin.com/in/murali-dharan-m-897243195"
                            delay={0.2}
                        />
                        <ContactItem 
                            icon={<MapPin color="var(--accent-cyan)" />} 
                            label="GEO_COORD" 
                            value="Salem, Tamil Nadu, IN." 
                            delay={0.3}
                        />
                    </div>
                </motion.div>

                {/* Form (Right Side) */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    style={{
                        background: 'rgba(10, 10, 10, 0.4)',
                        padding: '2.5rem',
                        border: '1px solid rgba(0, 243, 255, 0.1)',
                        position: 'relative'
                    }}
                >
                    <div style={{ position: 'absolute', top: -1, left: -1, width: 20, height: 20, borderTop: '2px solid var(--accent-cyan)', borderLeft: '2px solid var(--accent-cyan)' }} />
                    <div style={{ position: 'absolute', bottom: -1, right: -1, width: 20, height: 20, borderBottom: '2px solid var(--accent-cyan)', borderRight: '2px solid var(--accent-cyan)' }} />

                    <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                            <label style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--accent-red)', letterSpacing: '2px' }}>
                                // ORIGIN_ID
                            </label>
                            <input
                                {...register('name', { required: 'REQUIRED' })}
                                type="text"
                                placeholder="ENTER_NAME"
                                className={`cyber-input ${errors.name ? 'error' : ''}`}
                                autoComplete="off"
                            />
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                            <label style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--accent-red)', letterSpacing: '2px' }}>
                                // COMMS_ADDR
                            </label>
                            <input
                                {...register('email', { 
                                  required: 'REQUIRED',
                                  pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: 'INVALID'
                                  }
                                })}
                                type="email"
                                placeholder="USER@TECH.COM"
                                className={`cyber-input ${errors.email ? 'error' : ''}`}
                                autoComplete="off"
                            />
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                            <label style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--accent-red)', letterSpacing: '2px' }}>
                                // DATA_PAYLOAD
                            </label>
                            <textarea
                                {...register('message', { 
                                  required: 'REQUIRED',
                                  minLength: { value: 10, message: 'SHORT' }
                                })}
                                rows={5}
                                placeholder="INPUT_MESSAGE..."
                                className={`cyber-input ${errors.message ? 'error' : ''}`}
                                style={{ resize: 'none' }}
                            />
                        </div>

                        <motion.button
                            type="submit"
                            disabled={isSending}
                            style={{
                                marginTop: '1rem',
                                padding: '1.2rem',
                                background: isSending ? 'rgba(255, 0, 60, 0.05)' : 'rgba(255, 0, 60, 0.1)',
                                border: '1px solid var(--accent-red)',
                                color: 'var(--accent-red)',
                                fontFamily: 'var(--font-mono)',
                                fontWeight: 'bold',
                                cursor: isSending ? 'not-allowed' : 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '15px',
                                textTransform: 'uppercase',
                                letterSpacing: '3px'
                            }}
                        >
                            {isSending ? 'BUFFERING...' : 'INITIATE_UPLINK'}
                            <Send size={18} />
                        </motion.button>
                    </form>
                </motion.div>
            </div>
        </div>

        {/* Status Mode Overlays */}
        <AnimatePresence mode="wait">
            {statusMessage.show && (
                /* Unified Holographic Modal for All States */
                <motion.div
                    key="status-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    style={{
                        position: 'absolute',
                        inset: 0,
                        zIndex: 1000,
                        background: 'rgba(0, 0, 0, 0.7)',
                        backdropFilter: 'blur(5px)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        style={{
                            width: 'min(90%, 450px)',
                            padding: '2px', // Border width
                            background: `linear-gradient(45deg, transparent 5%, ${statusMessage.type === 'error' ? 'var(--accent-red)' : 'var(--accent-cyan)'} 5%, ${statusMessage.type === 'error' ? 'var(--accent-red)' : 'var(--accent-cyan)'} 10%, transparent 10%, transparent 90%, ${statusMessage.type === 'error' ? 'var(--accent-red)' : 'var(--accent-cyan)'} 90%, ${statusMessage.type === 'error' ? 'var(--accent-red)' : 'var(--accent-cyan)'} 95%, transparent 95%)`,
                            position: 'relative'
                        }}
                    >
                         <div style={{
                            background: 'rgba(10, 15, 20, 0.95)',
                            padding: '2rem',
                            border: `1px solid ${statusMessage.type === 'error' ? 'rgba(255, 0, 60, 0.3)' : 'rgba(0, 243, 255, 0.3)'}`,
                            boxShadow: `0 0 30px ${statusMessage.type === 'error' ? 'rgba(255, 0, 60, 0.15)' : 'rgba(0, 243, 255, 0.15)'}`,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '1.5rem',
                            position: 'relative',
                            overflow: 'hidden'
                        }}>
                            {/* Animated Scanner Line (Only for Loading) */}
                            {statusMessage.type === 'loading' && (
                                <motion.div 
                                    style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '2px',
                                        background: 'var(--accent-cyan)',
                                        boxShadow: '0 0 10px var(--accent-cyan)',
                                        zIndex: 10
                                    }}
                                    animate={{ top: ['0%', '100%', '0%'] }}
                                    transition={{ duration: 3, ease: "linear", repeat: Infinity }}
                                />
                            )}

                            <div style={{ position: 'relative' }}>
                                {statusMessage.type === 'loading' ? (
                                    <>
                                        <TacticalLoading />
                                        <motion.div
                                            style={{
                                                position: 'absolute',
                                                inset: -10,
                                                border: '2px dashed rgba(0, 243, 255, 0.3)',
                                                borderRadius: '50%'
                                            }}
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 10, ease: "linear", repeat: Infinity }}
                                        />
                                    </>
                                ) : (
                                    statusMessage.type === 'success' ? (
                                        <ShieldCheck size={80} color="var(--accent-cyan)" />
                                    ) : (
                                        <ShieldAlert size={80} color="var(--accent-red)" />
                                    )
                                )}
                            </div>
                            
                            <div style={{ textAlign: 'center', width: '100%' }}>
                                <div style={{ 
                                    fontFamily: 'var(--font-ui)', 
                                    fontSize: '1.2rem', 
                                    color: 'white', 
                                    letterSpacing: '3px',
                                    marginBottom: '0.5rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '10px',
                                    textTransform: 'uppercase'
                                }}>
                                    {statusMessage.type === 'loading' ? (
                                        <>
                                            <div style={{ width: '8px', height: '8px', background: 'var(--accent-cyan)', borderRadius: '50%' }} className="blinking-cursor" />
                                            PROCESSING_DATA
                                        </>
                                    ) : (
                                        statusMessage.type === 'success' ? 'UPLINK_ESTABLISHED' : 'CONNECTION_FAILED'
                                    )}
                                </div>
                                <div style={{ 
                                    fontFamily: 'var(--font-mono)', 
                                    fontSize: '0.8rem', 
                                    color: 'rgba(255,255,255,0.6)',
                                    marginBottom: '1rem',
                                    lineHeight: '1.5'
                                }}>
                                    {statusMessage.type === 'loading' 
                                        ? 'Encrypting payload packet...' 
                                        : (statusMessage.customMsg || (statusMessage.type === 'success' ? 'Message transmission complete. Secure channel closed.' : 'Transmission interrupted. Signal lost.'))}
                                </div>
                                
                                {statusMessage.type === 'loading' ? (
                                    <>
                                        {/* Tech Progress Bar */}
                                        <div style={{
                                            width: '100%',
                                            height: '6px',
                                            background: 'rgba(255,255,255,0.1)',
                                            borderRadius: '3px',
                                            overflow: 'hidden',
                                            position: 'relative'
                                        }}>
                                            <motion.div 
                                                style={{ 
                                                    height: '100%', 
                                                    background: 'var(--accent-cyan)',
                                                    boxShadow: '0 0 10px var(--accent-cyan)'
                                                }}
                                                animate={{ width: `${progress}%` }}
                                            />
                                        </div>
                                        <div style={{ 
                                            display: 'flex', 
                                            justifyContent: 'space-between', 
                                            marginTop: '5px',
                                            fontFamily: 'var(--font-mono)',
                                            fontSize: '0.7rem',
                                            color: 'var(--accent-cyan)'
                                        }}>
                                            <span>PKT_00{Math.floor(progress / 10)}</span>
                                            <span>{Math.floor(progress)}%</span>
                                        </div>
                                    </>
                                ) : (
                                    <button
                                        onClick={() => setStatusMessage({ ...statusMessage, show: false })}
                                        style={{
                                            marginTop: '1rem',
                                            padding: '0.8rem 2rem',
                                            background: 'transparent',
                                            border: `1px solid ${statusMessage.type === 'success' ? 'var(--accent-cyan)' : 'var(--accent-red)'}`,
                                            color: statusMessage.type === 'success' ? 'var(--accent-cyan)' : 'var(--accent-red)',
                                            fontFamily: 'var(--font-mono)',
                                            fontSize: '0.8rem',
                                            cursor: 'pointer',
                                            textTransform: 'uppercase',
                                            letterSpacing: '2px',
                                            transition: 'all 0.2s ease'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.background = statusMessage.type === 'success' ? 'rgba(0, 243, 255, 0.1)' : 'rgba(255, 0, 60, 0.1)';
                                            e.currentTarget.style.boxShadow = `0 0 15px ${statusMessage.type === 'success' ? 'rgba(0, 243, 255, 0.2)' : 'rgba(255, 0, 60, 0.2)'}`;
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.background = 'transparent';
                                            e.currentTarget.style.boxShadow = 'none';
                                        }}
                                    >
                                        ACKNOWLEDGE
                                    </button>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

const ContactItem: React.FC<{ icon: React.ReactNode, label: string, value: string, href?: string, delay: number }> = ({ icon, label, value, href, delay }) => {
    const Component = href ? motion.a : motion.div;
    // @ts-ignore - motion.a accepts href, motion.div does not, but TypeScript might complain about conditional types in this strict setup
    const extraProps = href ? { href, target: "_blank", rel: "noopener noreferrer" } : {};

    return (
        <Component
            {...extraProps}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay, duration: 0.5 }}
            whileHover={{ x: 5, backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
            style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '1.2rem',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                padding: '1.2rem',
                position: 'relative',
                textDecoration: 'none',
                cursor: href ? 'pointer' : 'default',
                width: '100%'
            }}
        >
            <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: 'var(--accent-red)' }} />
            <div style={{ color: 'var(--accent-cyan)' }}>{icon}</div>
            <div>
                <div style={{ color: 'var(--accent-red)', fontSize: '0.65rem', fontFamily: 'var(--font-mono)', letterSpacing: '1px' }}>{label}</div>
                <div style={{ color: 'white', fontFamily: 'var(--font-ui)', fontWeight: 700, fontSize: '0.95rem' }}>{value}</div>
            </div>
        </Component>
    );
};

export default ContactSection;

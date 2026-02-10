import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code, ChevronRight, Terminal, X } from 'lucide-react';
import DecipherText from './DecipherText';
import { playClickSound } from '../utils/sound';

const metadeskImage = '/assets/image/metadesk.webp';
const nfticketImage = '/assets/image/nfticket.webp';
const fenceImage = '/assets/image/fence.webp';
const easImage = '/assets/image/eas.webp';
const vikaasaImage = '/assets/image/vikaasa.webp';
const heathhouseImage = '/assets/image/heathhouse.webp';
const alphaImage = '/assets/image/alpha.webp';
const govtImage = '/assets/image/govt.webp';
const autopostImage = '/assets/image/autopost.webp';
const humAineImage = '/assets/image/humAine.webp';
const speedTreadImage = '/assets/image/speed-tread.webp';

interface ProjectsSectionProps {
  onClose?: () => void;
  onMinimize?: () => void;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onClose, onMinimize }) => {
  const projects = [
    {
      title: 'Renzy',
      year: '2025',
      category: 'NestJS application',
      description: 'Developed a web-based FinTech application that allows users to pay rent using credit cards. Enabled rent payments via direct bank transfers to landlord accounts or by mailing physical rent checks.',
      responsibilities: [
        'Designed and developed a responsive frontend using React.js.',
        'Integrated frontend with NestJS backend APIs for secure and reliable transaction processing.',
        'Owned UI implementation, API integration, and frontend feature development.',
        'Collaborated closely with the QA team to identify, debug, and resolve functional and performance issues.',
        'Worked with cross-functional teams (backend, QA, product, stakeholders) to ensure smooth delivery within timelines and scope.',
        'Contributed to improving user experience and payment flow reliability through iterative enhancements.'
      ],
      tech: ['React.js', 'NestJS', 'FinTech', 'Payments', 'Agile'],
      image: null,
      links: { demo: '', github: '#' }
    },
    {
      title: 'CyberSafe Advisor',
      year: '2025',
      category: 'Next and AI web application',
      description: 'Built an AI-driven web application that helps individuals who face cyber scams or online incidents and are unsure about the next steps to take. Provides users with step-by-step guidance on incident response, prevention of future attacks, and how to report cyber crimes. Includes sample FIR (First Information Report) formats and official reporting guidance to support users during real-world cyber incidents.',
      responsibilities: [
        'Designed and developed the frontend application using Next.js, ensuring a user-friendly and accessible experience.',
        'Integrated the application with Gemini AI models to generate contextual, real-time advice based on the user’s reported issue.',
        'Built AI interaction flows to provide: Recommended next actions, Preventive measures to avoid future incidents, Guidance on legal reporting procedures.',
        'Owned frontend architecture, UI development, and AI model integration.',
        'Led testing, debugging, and issue resolution to ensure reliability and accuracy of AI-generated responses.',
        'Designed the end-to-end technical architecture, enabling scalable and modular AI pipelines for real-time content analysis.',
        'Led deployment and delivery, aligning technical outcomes with stakeholder and industry-specific requirements.',
        'Delivered a high-impact solution supporting digital trust, misinformation prevention, and cyber safety across multiple sectors.'
      ],
      tech: ['Next.js', 'TypeScript', 'TailwindCSS', 'Gemini AI', 'Genkit'],
      image: null,
      links: { demo: '', github: '#' }
    },
    {
      title: 'Speed Tread',
      year: '2025',
      category: 'Next.js application',
      description: 'Developed a web-based application to manage financial transactions, currency conversions, and training workflows for users across multiple time zones. Designed to support role-based access control, allowing different user roles to access specific screens, modules, and features. Enabled seamless usage by global users, handling time-zone differences and real-time data consistency.',
      responsibilities: [
        'Designed and developed the frontend UI using React.js, ensuring usability across regions and time zones.',
        'Implemented API integration to support transaction processing, currency conversion, and training data management.',
        'Built role-based access control (RBAC), restricting screens and features based on user roles.',
        'Led and coordinated Frontend, Backend, and QA teams, ensuring smooth collaboration and timely delivery.',
        'Planned and delivered sprint tasks, collected QA feedback, and resolved issues aligned with release timelines.',
        'Provided production support, quickly addressing live issues and ensuring system stability.',
        'Collaborated with DevOps teams to support deployments across development, staging, and production environments.',
        'Contributed to AWS-based deployments, supporting scalability and reliability.'
      ],
      tech: ['React.js', 'API Integration', 'RBAC', 'AWS', 'CI/CD', 'Agile'],
      image: speedTreadImage,
      links: { demo: '', github: '#' }
    },
    {
      title: 'HumAine',
      year: '2025',
      category: 'Next.js application',
      description: 'Built a powerful AI-driven platform that detects and verifies the authenticity of multiple content types—including text, images, and videos—to support industries such as media, marketing, education, cybersecurity, and HR. The platform was developed using Next.js as a web application.',
      responsibilities: [
        'Led R&D efforts focused on AI-based detection of fake or manipulated content (text, images, and videos), ensuring high accuracy and reliability.',
        'Designed the architecture and end-to-end technical strategy to support scalable and modular AI pipelines for real-time content analysis.',
        'Integrated Gemini AI (via Google Genkit) to handle advanced detection tasks such as: AI-generated text classification, Deepfake or altered image detection, Video authenticity analysis.',
        'Developed core application features using Next.js, TypeScript, and TailwindCSS, ensuring a responsive and user-friendly interface.',
        'Led deployment and delivery of the project, aligning technical outcomes with stakeholder and industry-specific needs.',
        'Delivered a high-value solution used across various sectors to combat misinformation, ensure content integrity, and support digital trust.'
      ],
      tech: ['Next.js', 'Gemini AI', 'TypeScript', 'TailwindCSS', 'Shadcn UI'],
      image: humAineImage,
      links: { demo: '', github: '#' }
    },
    {
      title: 'Auto Post',
      year: '2025',
      category: 'Next.js application',
      description: 'Built a web application for social media automation that integrates AI (Gemini) and n8n workflows. The application can generate content and images automatically, or allow users to manually add post details, and then schedule or post directly to multiple social networks.',
      responsibilities: [
        'Led the research and development (R&D) efforts for this project, focusing on the integration of AI and automation to create a seamless user experience.',
        'Architected the application and designed its overall flow, ensuring an efficient, scalable, and intuitive system for users.',
        'Developed the AI-powered features using Gemini AI, enabling automatic content generation, including text and images, based on user-defined themes or keywords.',
        'Integrated n8n to automate backend workflows, allowing the application to schedule and post directly to platforms like Facebook, Twitter, LinkedIn, etc., without manual intervention.',
        'Managed project progress by tracking development milestones, ensuring alignment with business objectives, and delivering iterative improvements.',
        'Oversaw testing and debugging phases, addressing issues related to integration between AI and social media APIs, as well as enhancing the overall user experience.',
        'Delivered regular updates and progress reports, ensuring stakeholders were aligned on the status and improvements made to the platform.'
      ],
      tech: ['Next.js', 'Gemini AI', 'n8n', 'AWS', 'TypeScript', 'TailwindCSS'],
      image: autopostImage,
      links: { demo: '', github: '#' }
    },
    {
      title: 'GOVT',
      year: '2024',
      category: 'Web Site',
      description: 'Developed a dynamic, responsive, and animation-rich website that delivered real-time content updates with smooth transitions and user interactions. The website focused on delivering a modern, interactive experience. Key features included content loader animations, scroll-based effects, and transition components to enhance user engagement. The project was built using a Gsap for animations and Wordpress as a headless CMS to manage and deliver content efficiently.',
      responsibilities: [
        'Led the end-to-end development of the project, guiding a frontend team to implement advanced UI animations and real-time content delivery.',
        'Architected and built a responsive design that dynamically loads content from APIs and displays it with smooth UI animations to enhance user engagement.',
        'Implemented content loader animations, scroll-based effects, and transition components to create a modern, engaging user experience.',
        'Ensured cross-browser compatibility and mobile responsiveness using best practices in CSS and component-based frontend frameworks.',
        'Managed project timelines, delegated tasks to the team, and ensured the project met performance, accessibility, and design standards.',
        'Collaborated with backend developers and designers to create a cohesive, scalable frontend system for ongoing content updates.'
      ],
      tech: ['Wordpress', 'CSS', 'GSAP', 'Javascript'],
      image: govtImage,
      links: { demo: '', github: '#' }
    },
    {
      title: 'Alpha Deserve',
      year: '2024',
      category: 'Web Site',
      description: 'Alpha Deserve, a responsive, multi-page static website using React.js. This project combines modern design with seamless functionality, ensuring optimal performance and adaptability across devices. Built with a focus on user experience, the website efficiently showcases content while leveraging React.js for enhanced interactive elements.',
      responsibilities: [
        'Developed UI for all screens Figma to web screen with responsive screen.',
        'Conducted testing, identified issues, and implemented fixes.',
        'Guided team members and provided training to maintain code standards.'
      ],
      tech: ['React JS', 'HTML', 'CSS', 'Javascript'],
      image: alphaImage,
      links: { demo: 'https://alphadeserve.com/', github: '#' }
    },
    {
      title: 'Heathhouseprepschool',
      year: '2024',
      category: 'Web Site',
      description: 'Developed a multi-page CMS website for Heathhouseprepschool, ensuring it was fully mobile responsive. The project involved creating technical designs, developing the site with Wordpress and the Divi builder, and conducting thorough testing and debugging.',
      responsibilities: [
        'Development of technical designs for a single-page CMS website.',
        'Ensured the website was fully mobile responsive.',
        'Conducted testing and debugging to ensure a high-quality, bug-free launch.'
      ],
      tech: ['WordPress', 'Divi Builder', 'HTML', 'CSS', 'UI Developer'],
      image: heathhouseImage,
      links: { demo: 'https://heathhouseprepschool.com/', github: '#' }
    },
    {
      title: 'Vikaasa',
      year: '2024',
      category: 'Web Site',
      description: 'Developed a multi-page CMS website for Vikaasa, ensuring it was fully mobile responsive. The project involved creating technical designs, developing the site with Wordpress and the Divi builder, and conducting thorough testing and debugging.',
      responsibilities: [
        'Development of technical designs for multiple pages CMS website development.',
        'Ensured the website was fully mobile responsive.',
        'Conducted testing and debugging to ensure a high-quality, bug-free launch.'
      ],
      tech: ['Wordpress', 'Divi Builder', 'UI Developer'],
      image: vikaasaImage,
      links: { demo: 'https://vikaasa.org/', github: '#' }
    },
    {
      title: 'Emirates American School',
      year: '2024',
      category: 'Web Site',
      description: 'Developed a single-page website for Emirates American School, ensuring it was fully mobile responsive. The project involved creating technical designs, developing the site with HTML, CSS, JQuery, and Git, and conducting thorough testing and debugging.',
      responsibilities: [
        'Development of technical designs for single page website development.',
        'Ensured the website was fully mobile responsive.',
        'Conducted testing and debugging to ensure a high-quality, bug-free launch.'
      ],
      tech: ['HTML', 'CSS', 'JQuery', 'Git', 'UI Developer'],
      image: easImage,
      links: { demo: 'https://eas.deweyolivia.work/', github: '#' }
    },
    {
      title: 'Fenceabroad',
      year: '2024',
      category: 'Web Site',
      description: 'Developed a multi-page CMS website for Fenceabroad, ensuring it was fully mobile responsive. The project involved creating technical designs, developing the site with Wordpress and the Divi builder, and conducting thorough testing and debugging.',
      responsibilities: [
        'Development of technical designs for multiple pages CMS website development.',
        'Ensured the website was fully mobile responsive.',
        'Conducted testing and debugging to ensure a high-quality, bug-free launch.'
      ],
      tech: ['Wordpress', 'Divi Builder', 'UI Developer'],
      image: fenceImage,
      links: { demo: 'https://www.fenceabroad.com/', github: '#' }
    },
    {
      title: 'NFTICKET',
      year: '2023',
      category: 'Web3-Web Site',
      description: 'The NFTicket event ticket was designed for a digital event. The website is built on React and Mindbase blockchain technology. Users can use cryptocurrency tokens (NEAR) to purchase tickets and create event tokens on the website.',
      responsibilities: [
        'Developed user interfaces for multiple pages, translating designs from Figma into responsive web layouts.',
        'Conducted thorough testing of the application, identified issues, and implemented fixes to ensure smooth functionality.',
        'Integrated the web application with Mind-based blockchain technology for seamless interaction and data management.'
      ],
      tech: ['React.js', 'Redux', 'Mindbase', 'Metamask'],
      image: nfticketImage,
      links: { demo: '', github: '#' }
    },
    {
      title: 'Metadesk',
      year: '2023',
      category: 'Web Application',
      description: 'Metadesk is a platform for managing internal communications and materials activities, tracking our progress and ensuring all team members are aligned.',
      responsibilities: [
        'Developed the responsive web application, ensuring a consistent user experience across all devices.',
        'Conducted thorough testing, identified issues, and implemented fixes to maintain smooth functionality.',
        'Connected the backend to a centralized WooCommerce database, ensuring seamless data synchronization and unified management.'
      ],
      tech: ['React.js', 'SASS', 'Redux'],
      image: metadeskImage,
      links: { demo: '', github: '#' }
    }
  ];

  const [selectedProject, setSelectedProject] = useState<any>(null);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        playClickSound();
        setSelectedProject(null);
      }
    };
    if (selectedProject) {
      window.addEventListener('keydown', handleEsc);
    }
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [selectedProject]);

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
        className="cyber-border-animated projects-container-inner"
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
            .projects-container-inner {
              width: 100% !important;
              height: 100% !important;
              min-height: 0 !important;
              clip-path: none !important;
              padding: 0 !important;
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
                PROJECT_ARCHIVE
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
              style={{ marginBottom: '1rem' }}
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
                <span style={{ color: 'var(--accent-red)' }}>SELECTED</span> PROJECTS
              </h2>
            </motion.div>

            <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            style={{ 
                color: 'var(--text-dim)', 
                marginBottom: '2rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.9rem'
            }}
            >
            Deploying scalable solutions across the digital frontier.
            </motion.p>

            <style>{`
          .custom-scroll::-webkit-scrollbar { display: none; }
          .projects-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 2rem;
          }
          @media (max-width: 1024px) {
            .projects-container-inner {
              height: 100% !important;
              min-height: 0 !important;
              clip-path: none !important;
            }
          }
        `}</style>
            <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 'max(1rem, 2vw)',
            }}>
            {projects.map((project, i) => (
                <ProjectCard key={i} project={project} index={i} onClick={() => setSelectedProject(project)} />
            ))}
            </div>
        </div>

      </motion.div>

      {/* Project Details Modal */}
      {selectedProject && createPortal(
          <div 
            onClick={() => { playClickSound(); setSelectedProject(null); }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'rgba(0, 0, 0, 0.92)',
              backdropFilter: 'blur(20px)',
              zIndex: 200,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1.5rem'
          }}>
              <motion.div
                  onClick={(e) => e.stopPropagation()}
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="cyber-border-animated"
                  style={{
                      background: 'linear-gradient(135deg, rgba(8, 8, 8, 0.98) 0%, rgba(15, 15, 15, 0.99) 100%)',
                      maxWidth: '1000px',
                      width: '100%',
                      maxHeight: '90vh',
                      overflow: 'hidden',
                      position: 'relative',
                      display: 'flex',
                      flexDirection: 'column',
                      clipPath: 'polygon(30px 0, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0 100%, 0 30px)',
                      boxShadow: '0 0 100px rgba(255, 0, 60, 0.1), inset 0 0 40px rgba(0, 243, 255, 0.03)'
                  }}
              >
                  {/* Decorative Elements */}
                  <div className="corner-bracket tl" style={{ position: 'absolute', top: '15px', left: '15px' }}></div>
                  <div className="corner-bracket tr" style={{ position: 'absolute', top: '15px', right: '15px' }}></div>
                  <div className="corner-bracket bl" style={{ position: 'absolute', bottom: '15px', left: '15px' }}></div>
                  <div className="corner-bracket br" style={{ position: 'absolute', bottom: '15px', right: '15px' }}></div>

                  {/* Sticky Header inside Modal */}
                  <div style={{
                      position: 'relative',
                      padding: 'clamp(0.8rem, 2vw, 1.5rem) clamp(1rem, 3vw, 3rem)',
                      background: 'rgba(10, 10, 10, 0.6)',
                      borderBottom: '1px solid rgba(0, 243, 255, 0.15)',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      zIndex: 10,
                      backdropFilter: 'blur(10px)',
                      flexDirection: window.innerWidth < 640 ? 'column' : 'row',
                      gap: '1rem'
                  }}>
                      <div style={{ 
                          fontFamily: 'var(--font-mono)', 
                          color: 'var(--accent-cyan)', 
                          fontSize: window.innerWidth < 640 ? '0.7rem' : '0.85rem', 
                          letterSpacing: '3px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px'
                      }}>
                          <span style={{ width: '4px', height: '4px', background: 'var(--accent-red)', display: 'inline-block' }}></span>
                          CORE_SYSTEM_INTERFACE // {selectedProject.year || '2025'}
                      </div>
                      <button 
                          onClick={() => { playClickSound(); setSelectedProject(null); }}
                          style={{
                              background: 'transparent',
                              border: '1px solid var(--accent-red)',
                              color: 'var(--accent-red)',
                              fontFamily: 'var(--font-mono)',
                              padding: '0.5rem 1rem',
                              cursor: 'pointer',
                              fontSize: '0.7rem',
                              textTransform: 'uppercase',
                              letterSpacing: '2px',
                              transition: 'all 0.3s ease',
                              clipPath: 'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)'
                          }}
                          onMouseEnter={(e) => {
                              e.currentTarget.style.background = 'rgba(255, 0, 60, 0.1)';
                              e.currentTarget.style.boxShadow = '0 0 15px rgba(255, 0, 60, 0.2)';
                          }}
                          onMouseLeave={(e) => {
                              e.currentTarget.style.background = 'transparent';
                              e.currentTarget.style.boxShadow = 'none';
                          }}
                      >
                          DISCONNECT [ESC]
                      </button>
                  </div>

                  {/* Scrollable Content */}
                   <div 
                    className="custom-scrollbar"
                    style={{ 
                        flex: 1, 
                        overflowY: 'auto', 
                        padding: 'clamp(1rem, 3vw, 2rem) clamp(1rem, 4vw, 3rem)',
                        position: 'relative' 
                    }}
                  >
                    {/* Scanline overlay for the whole content */}
                    <div style={{
                        position: 'absolute',
                        top: 0, left: 0, right: 0, bottom: 0,
                        background: 'repeating-linear-gradient(transparent 0, rgba(0, 243, 255, 0.01) 1px, transparent 2px)',
                        pointerEvents: 'none',
                        zIndex: 2,
                        opacity: 0.5
                    }} />

                    {selectedProject.image && (
                        <div className="image-tech-wrapper" style={{ 
                            marginBottom: '2.5rem',
                            border: '1px solid rgba(0, 243, 255, 0.1)',
                            boxShadow: '0 0 30px rgba(0, 243, 255, 0.05)'
                        }}>
                            <img 
                            src={selectedProject.image && typeof selectedProject.image === 'object' ? selectedProject.image.src : selectedProject.image} 
                            alt={selectedProject.title} 
                            style={{ 
                                width: '100%', 
                                height: 'auto', 
                                display: 'block',
                                opacity: 0.9,
                                transition: 'opacity 0.3s ease'
                            }} 
                            />
                            
                            <div className="scanline-anim"></div>
                            <div className="corner-bracket tl"></div>
                            <div className="corner-bracket tr"></div>
                            <div className="corner-bracket bl"></div>
                            <div className="corner-bracket br"></div>
                            
                            <div className="system-status-overlay" style={{ opacity: 1, transform: 'none' }}>
                                <span style={{ color: 'var(--accent-red)' }}>TARGET_ID:</span> {selectedProject.title.toUpperCase()}<br/>
                                <span style={{ color: 'var(--accent-cyan)' }}>ACCESS:</span> GRANTED<br/>
                                <span style={{ color: 'var(--text-dim)' }}>ENCRYPT:</span> 256-BIT
                            </div>
                        </div>
                    )}

                    <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr)', gap: '2.5rem' }}>
                        <div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '2rem' }}>
                                <motion.h2 
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    style={{
                                        fontFamily: 'var(--font-ui)',
                                        fontSize: 'clamp(2rem, 8vw, 4rem)',
                                        color: 'var(--text-white)',
                                        margin: 0,
                                        textTransform: 'uppercase',
                                        lineHeight: '1.1',
                                        letterSpacing: '2px',
                                        textShadow: '0 0 30px rgba(0, 243, 255, 0.4)',
                                        wordBreak: 'break-word'
                                    }}
                                >
                                    {selectedProject.title}
                                </motion.h2>
                                {selectedProject.category && (
                                    <div style={{ 
                                        display: 'flex', 
                                        alignItems: 'center', 
                                        gap: '12px' 
                                    }}>
                                        <div style={{ width: '40px', height: '1px', background: 'var(--accent-cyan)' }}></div>
                                        <span style={{ 
                                            fontFamily: 'var(--font-mono)', 
                                            color: 'var(--accent-cyan)', 
                                            fontSize: '0.9rem', 
                                            letterSpacing: '4px',
                                            textTransform: 'uppercase',
                                            opacity: 0.8
                                        }}>
                                            {selectedProject.category}
                                        </span>
                                    </div>
                                )}
                            </div>

                            <div style={{
                                display: 'flex',
                                gap: '1rem',
                                marginBottom: '2.5rem',
                                flexWrap: 'wrap'
                            }}>
                                {selectedProject.tech.map((t: string) => (
                                    <span key={t} style={{
                                        background: 'rgba(0, 243, 255, 0.05)',
                                        border: '1px solid rgba(0, 243, 255, 0.25)',
                                        padding: '0.5rem 1.2rem',
                                        fontFamily: 'var(--font-mono)',
                                        fontSize: '0.85rem',
                                        color: 'var(--accent-cyan)',
                                        position: 'relative',
                                        overflow: 'hidden',
                                        boxShadow: '0 0 15px rgba(0, 243, 255, 0.05)'
                                    }}>
                                        <div style={{
                                            position: 'absolute',
                                            top: 0, left: 0,
                                            width: '4px', height: '4px',
                                            background: 'var(--accent-red)'
                                        }}></div>
                                        {t}
                                    </span>
                                ))}
                            </div>

                            <div style={{ 
                                background: 'rgba(255, 255, 255, 0.02)', 
                                padding: '2rem', 
                                borderLeft: '4px solid var(--accent-red)',
                                position: 'relative',
                                marginBottom: '2.5rem'
                            }}>
                                <h3 style={{ 
                                    color: 'var(--text-white)', 
                                    fontFamily: 'var(--font-ui)', 
                                    fontSize: '1.2rem', 
                                    marginBottom: '1rem',
                                    textTransform: 'uppercase',
                                    letterSpacing: '2px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '10px'
                                }}>
                                    <Code size={18} color="var(--accent-red)" /> MISSION_METADATA.LOG
                                </h3>
                                <p style={{
                                    color: 'rgba(255, 255, 255, 0.7)',
                                    lineHeight: '1.8',
                                    fontSize: '1.1rem',
                                    margin: 0,
                                    fontFamily: 'var(--font-main)'
                                }}>
                                    {selectedProject.description}
                                </p>
                            </div>

                            {selectedProject.responsibilities && (
                                <div style={{ marginBottom: '2.5rem' }}>
                                    <h3 style={{ 
                                        color: 'var(--text-white)', 
                                        fontFamily: 'var(--font-ui)', 
                                        fontSize: '1.2rem', 
                                        marginBottom: '1.5rem',
                                        textTransform: 'uppercase',
                                        letterSpacing: '2px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '12px'
                                    }}>
                                        <Github size={18} color="var(--accent-cyan)" /> SYSTEM_DIRECTIVES
                                    </h3>
                                    <div style={{ 
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '1rem'
                                    }}>
                                        {selectedProject.responsibilities.map((resp: string, idx: number) => (
                                        <motion.div 
                                            key={idx}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: idx * 0.1 }}
                                            style={{ 
                                                color: 'rgba(255, 255, 255, 0.65)', 
                                                lineHeight: '1.7',
                                                padding: '1rem',
                                                background: 'rgba(255, 255, 255, 0.02)',
                                                border: '1px solid rgba(255, 255, 255, 0.05)',
                                                fontSize: '1rem',
                                                display: 'flex',
                                                gap: '15px'
                                            }}
                                        >
                                            <span style={{ 
                                                color: 'var(--accent-cyan)', 
                                                fontFamily: 'var(--font-mono)',
                                                fontSize: '0.8rem',
                                                opacity: 0.5
                                            }}>
                                                [0{idx + 1}]
                                            </span>
                                            {resp}
                                        </motion.div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            <div style={{ display: 'flex', gap: '1.5rem', marginTop: '3rem' }}>
                                {selectedProject.links && selectedProject.links.demo && selectedProject.links.demo !== '#' && (
                                    <motion.a 
                                        href={selectedProject.links.demo} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        onClick={() => playClickSound()}
                                        whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(255, 0, 60, 0.5)' }}
                                        whileTap={{ scale: 0.95 }}
                                        style={{
                                            padding: '1.2rem 3rem',
                                            background: 'var(--accent-red)',
                                            color: '#000',
                                            textDecoration: 'none',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '15px',
                                            fontWeight: 900,
                                            fontFamily: 'var(--font-ui)',
                                            textTransform: 'uppercase',
                                            letterSpacing: '2px',
                                            clipPath: 'polygon(15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 15px)'
                                        }}
                                    >
                                        <ExternalLink size={20} /> INITIALIZE_LIVE_SYSTEM
                                    </motion.a>
                                )}
                            </div>
                        </div>
                    </div>
                  </div>
              </motion.div>
          </div>,
          document.body
      )}
    </div>
  );
};

const ProjectCard: React.FC<{ project: any, index: number, onClick: () => void }> = ({ project, index, onClick }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + (index * 0.1) }}
            whileHover={{ y: -5, borderColor: 'var(--accent-red)' }}
            onClick={() => { playClickSound(); onClick(); }}
            style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                padding: '1.5rem',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                overflow: 'hidden'
            }}
        >
           {/* Scanline Effect */}
           <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '1px', background: 'rgba(0, 243, 255, 0.1)', zIndex: 1 }} />
           
           <div>
               <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                    <h3 style={{
                        color: 'var(--text-white)',
                        fontFamily: 'var(--font-ui)',
                        fontSize: '1.2rem',
                        textTransform: 'uppercase',
                        wordBreak: 'break-word',
                        letterSpacing: '1px'
                    }}>
                        {project.title}
                    </h3>
                    <span style={{ 
                        fontFamily: 'var(--font-mono)', 
                        color: 'var(--accent-red)', 
                        fontSize: '0.7rem',
                        opacity: 0.6
                    }}>{project.year}</span>
               </div>
               
               <p style={{
                   color: 'rgba(255, 255, 255, 0.6)',
                   fontFamily: 'var(--font-main)',
                   fontSize: '0.9rem',
                   lineHeight: 1.6,
                   marginBottom: '1.5rem',
                   display: '-webkit-box',
                   WebkitLineClamp: 3,
                   WebkitBoxOrient: 'vertical',
                   overflow: 'hidden'
               }}>
                   {project.description}
               </p>
           </div>

           <div>
               <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                    {project.tech.slice(0, 3).map((t: string) => (
                        <span key={t} style={{
                            fontSize: '0.65rem',
                            color: 'var(--accent-cyan)',
                            background: 'rgba(0, 243, 255, 0.05)',
                            padding: '0.2rem 0.5rem',
                            border: '1px solid rgba(0, 243, 255, 0.1)',
                            fontFamily: 'var(--font-mono)',
                            letterSpacing: '0.5px'
                        }}>
                            {t}
                        </span>
                    ))}
                    {project.tech.length > 3 && (
                         <span style={{ fontSize: '0.7rem', color: 'var(--text-dim)', alignSelf: 'center', opacity: 0.5 }}>+{project.tech.length - 3}</span>
                    )}
               </div>

                <div 
                  className="tech-link"
                  style={{ 
                    color: 'var(--accent-red)', 
                    fontSize: '0.8rem', 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '5px', 
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '1.5px',
                    fontFamily: 'var(--font-mono)'
                  }}
                >
                    Initialize_System <ChevronRight size={14} />
                </div>
           </div>
        </motion.div>
    );
};

export default ProjectsSection;

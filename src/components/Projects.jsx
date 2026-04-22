import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Monitor, Shield, X, CheckCircle2, Cpu, Globe, Layout, Database, FileText } from 'lucide-react';

const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(3, 7, 18, 0.95)', backdropFilter: 'blur(12px)' }}
          />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            style={{ 
              position: 'relative', 
              width: '100%', 
              maxWidth: '1000px', 
              maxHeight: '90vh', 
              backgroundColor: '#0a0f1e', 
              borderRadius: 'clamp(16px, 4vw, 28px)', 
              border: '1px solid rgba(255,255,255,0.08)',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: `0 40px 80px rgba(0,0,0,0.6), 0 0 120px ${project.color}08`
            }}
          >
            {/* Header */}
            <div style={{ position: 'relative', height: 'clamp(200px, 40vh, 320px)', flexShrink: 0 }}>
              <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 20%, #0a0f1e 100%)' }} />
              <motion.button 
                whileHover={{ scale: 1.1, backgroundColor: 'rgba(251, 113, 133, 0.2)' }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                style={{ position: 'absolute', top: '1rem', right: '1rem', backgroundColor: 'rgba(3,7,18,0.6)', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', width: '40px', height: '40px', borderRadius: '50%', cursor: 'pointer', backdropFilter: 'blur(12px)', transition: 'all 0.3s', zIndex: 30, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <X size={20} />
              </motion.button>
              <div style={{ position: 'absolute', bottom: '1.5rem', left: 'clamp(1rem, 5vw, 3rem)', right: 'clamp(1rem, 5vw, 3rem)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: project.color, fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.5rem' }}>
                  {project.icon} {project.type}
                </div>
                <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.8rem)', fontWeight: 900, color: '#fff', fontFamily: 'var(--font-heading)', letterSpacing: '-0.03em', lineHeight: 1.1 }}>{project.title}</h2>
              </div>
            </div>

            {/* Scrollable Content */}
            <div style={{ padding: 'clamp(1.5rem, 5vw, 4rem)', overflowY: 'auto', flex: 1, scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              <style>{`
                div::-webkit-scrollbar { display: none; }
              `}</style>
              <div style={{ marginBottom: '4rem' }}>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.15rem', lineHeight: 1.9, whiteSpace: 'pre-line', maxWidth: '850px' }}>
                  {project.longDescription}
                </p>
              </div>

              {/* Features */}
              <div style={{ marginBottom: '4rem' }}>
                <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#fff', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.8rem', letterSpacing: '-0.02em' }}>
                  <Layout size={24} color={project.color} /> Core Project Features
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                  {project.detailedFeatures?.map((feature, i) => (
                    <div key={i} style={{ display: 'flex', gap: '1rem', backgroundColor: 'rgba(255,255,255,0.02)', padding: '1.25rem', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
                      <CheckCircle2 size={18} color={project.color} style={{ marginTop: '0.2rem', flexShrink: 0 }} />
                      <div>
                        <strong style={{ color: '#f1f5f9', display: 'block', marginBottom: '0.3rem', fontSize: '1rem', letterSpacing: '-0.01em' }}>{feature.title}</strong>
                        <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.5 }}>{feature.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div style={{ paddingBottom: '3rem' }}>
                <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#fff', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.8rem', letterSpacing: '-0.02em' }}>
                  <Cpu size={24} color={project.color} /> Technical Stack & Specifications
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                  {project.techSpecs?.map((spec, i) => (
                    <div key={i} style={{ backgroundColor: 'rgba(255,255,255,0.03)', padding: '1.5rem', borderRadius: '18px', border: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
                      <div style={{ color: project.color, fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.6rem' }}>{spec.label}</div>
                      <div style={{ color: '#f1f5f9', fontSize: '1.05rem', fontWeight: 600 }}>{spec.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {
      title: "HexaCore (Lumina A1)",
      type: "AI Ecosystem",
      icon: <Monitor size={20} />,
      image: "/Hexacore img.png",
      color: "#38bdf8",
      description: "A modular multi-dimensional AI platform integrating six core modules: Global Study, CodeForge, Career Launchpad, PolyArguMind, Professional Network, and Digital Library.",
      longDescription: "HexaCore (formerly known as Penta-App) is a sophisticated, unified digital ecosystem designed to bridge the gap between learning, competitive technical development, and professional career advancement. Built as a multi-dimensional platform, it offers an immersive, high-performance environment where users can transition seamlessly from mastering new skills to building industry-standard resumes and securing verified employment. The project prioritizes a \"tech-noir\" aesthetic with sleek, high-end UI/UX, leveraging advanced web technologies to provide a high-fidelity experience that feels more like a professional operating system than a standard web application. \n\n At its core, the platform is divided into six distinct \"dimensions,\" each serving a specific phase of a professional's journey. From the Global Study Platform, which fosters borderless learning and mentorship, to the Elite Coding Arena for high-stakes algorithm battles, every module is interconnected. The Resume Architect stands out as a powerful tool for career narrative optimization, featuring real-time ATS (Applicant Tracking System) scoring and live editing. This ecosystem is rounded out by a Verified Job Network, a semantic Knowledge Library, and an AI Innovation Lab, creating a complete lifecycle for talent development and placement.",
      detailedFeatures: [
        { title: "Multi-Dimensional Ecosystem", desc: "A unified hub featuring six specialized platforms: Global Study, Coding Arena, Resume Architect, Job Network, Knowledge Library, and AI Innovation Lab." },
        { title: "Resume Architect (ATS-Optimized)", desc: "A professional WYSIWYG resume builder with real-time editing, ATS-friendly formatting, and \"Fortress\" security rules for data privacy." },
        { title: "Intelligent Authentication", desc: "Integrated Firebase Authentication (Google/GitHub supported) with an \"Enter Hub\" smart-redirect system that remembers user sessions." },
        { title: "Adaptive UI/UX", desc: "A high-end visual design using a \"tech-noir\" palette, featuring 3D tilt effects, smooth motion-state transitions, and responsive \"Bento Grid\" layouts." },
        { title: "Real-Time Data Sync", desc: "Live synchronization of user profiles and dimensions using Google Firestore, ensuring progress is never lost." },
        { title: "Professional PDF Reporting", desc: "Advanced styling filters that translate browser-based designs into sharp, perfectly justified, industry-standard PDF documents." }
      ],
      techSpecs: [
        { label: "Frontend", value: "React 18+ (Vite)" },
        { label: "Styling", value: "Tailwind CSS (v4)" },
        { label: "Animations", value: "Framer Motion" },
        { label: "Backend", value: "Firebase (NoSQL)" },
        { label: "Security", value: "ABAC (Security Rules)" },
        { label: "Iconography", value: "Lucide-React" }
      ],
      tags: ["React 18", "Firebase", "Tailwind v4", "Framer Motion", "Vite"],
    },
    {
      title: "VeriTrust Unified",
      type: "Enterprise Security",
      icon: <Shield size={20} />,
      image: "/Employee Verification Img.png",
      color: "#fb7185",
      description: "A next-generation employee screening and background verification ecosystem designed to automate and secure the high-stakes hiring lifecycle.",
      longDescription: "The VeriTrust Unified platform is a next-generation employee screening and background verification ecosystem designed to automate and secure the high-stakes hiring lifecycle. By centralizing the authentication of employment history, educational credentials, and legal records, the application eliminates the friction and inaccuracy of traditional, manual background checks. It serves as a single source of truth for HR departments and recruitment agencies, providing a high-integrity environment where data privacy and administrative oversight are paramount. The platform is built on a \"Trust-First\" philosophy, ensuring that every piece of candidate-submitted information is systematically cross-referenced against authenticated industry and government databases. \n\n Beyond simple data entry, the system features a robust, AI-powered verification engine that utilizes Optical Character Recognition (OCR) to automatically extract and validate information from official documents such as passports, university degrees, and professional licenses. Administrators can manage thousands of concurrent verification requests through a sleek, centralized dashboard that tracks the status of every screening in real-time, from \"Initiated\" to \"Verified.\" With audit-ready reporting and an immutable log of verification actions, the application provides organizations with the confidence needed to make informed hiring decisions while maintaining full compliance with global data protection regulations.",
      detailedFeatures: [
        { title: "Automated Background Screening", desc: "Real-time integration with global databases to verify criminal records, credit history, and professional standing." },
        { title: "AI-Enhanced Document OCR", desc: "Advanced Optical Character Recognition for instant data extraction and digital tampering detection across candidate-submitted documents." },
        { title: "Smart Identity Verification", desc: "A secure KYC (Know Your Customer) module that utilizes biometric liveness checks to match candidates against government-issued IDs." },
        { title: "Administrative Command Center", desc: "A high-level dashboard for HR teams to monitor the verification pipeline, manage multi-tier approvals, and generate batch reports." },
        { title: "Secure Candidate Portal", desc: "An encrypted, user-friendly environment where prospective employees can upload sensitive documents with end-to-end data protection." },
        { title: "Immutable Audit Trails", desc: "A chronological and untamperable record of every verification step taken, ensuring a transparent and legally defensible recruitment process." }
      ],
      techSpecs: [
        { label: "Frontend", value: "React 18+ (Vite)" },
        { label: "Styling", value: "Tailwind CSS" },
        { label: "Analysis", value: "OCR & NLP Engines" },
        { label: "Backend", value: "Firebase / Node.js" },
        { label: "Security", value: "AES-256 / TLS 1.3" },
        { label: "Integrations", value: "RESTful API" }
      ],
      tags: ["Enterprise", "Security", "AI/OCR", "Node.js", "Firebase"],
    },
  ];

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <section id="projects" style={{ 
      padding: 'var(--section-padding)', 
      backgroundColor: 'transparent', 
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ marginBottom: '5rem', textAlign: 'center' }}
        >
          <p style={{ color: '#fb7185', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.8rem' }}>
            Featured Work
          </p>
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}>
            Software <span className="text-gradient-accent">Innovations</span>
          </h2>
        </motion.div>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem' 
        }}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              style={{ height: '100%' }}
            >
              <div
                style={{ 
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  backdropFilter: 'blur(10px)',
                  overflow: 'hidden',
                  position: 'relative'
                }}
              >
                <div style={{ position: 'relative', width: '100%', height: '220px', backgroundColor: '#000', overflow: 'hidden' }}>
                  <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} />
                  <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to top, rgba(3,7,18,0.8) 0%, transparent 100%)` }} />
                  <div style={{ 
                    position: 'absolute', top: '1rem', left: '1rem', 
                    backgroundColor: 'rgba(3, 7, 18, 0.8)', backdropFilter: 'blur(8px)', 
                    padding: '0.4rem 1rem', borderRadius: '10px', 
                    border: `1px solid ${project.color}30`, 
                    fontSize: '0.65rem', fontWeight: 700, color: project.color, 
                    letterSpacing: '0.1em', display: 'flex', alignItems: 'center', gap: '0.4rem'
                  }}>
                    {project.icon} {project.type}
                  </div>
                </div>

                <div style={{ padding: '1.8rem', display: 'flex', flexDirection: 'column', flex: 1, position: 'relative', zIndex: 10 }}>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.8rem', letterSpacing: '-0.02em', fontFamily: 'var(--font-heading)' }}>
                    {project.title}
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '1.5rem', flex: 1 }}>
                    {project.description}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.8rem' }}>
                    {project.tags.map((tag, i) => (
                      <span key={i} style={{ fontSize: '0.68rem', fontWeight: 600, color: project.color, backgroundColor: `${project.color}10`, padding: '0.25rem 0.75rem', borderRadius: '6px', border: `1px solid ${project.color}20` }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div style={{ position: 'relative', zIndex: 20 }}>
                    <motion.button 
                      whileHover={{ scale: 1.02, y: -2, boxShadow: `0 8px 25px ${project.color}30` }} 
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleOpenModal(project)}
                      style={{ 
                        width: '100%', textAlign: 'center', padding: '0.8rem', 
                        background: `linear-gradient(135deg, ${project.color}, ${project.color}cc)`, 
                        color: '#030712', borderRadius: '10px', fontSize: '0.85rem', fontWeight: 700, 
                        display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem',
                        boxShadow: `0 4px 12px ${project.color}20`,
                        transition: 'all 0.3s',
                        cursor: 'pointer',
                        border: 'none',
                        outline: 'none'
                      }}>
                      <ExternalLink size={16} /> View Details
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <ProjectModal 
        project={selectedProject} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
};

export default Projects;

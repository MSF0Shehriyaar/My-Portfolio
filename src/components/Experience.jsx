import React, { useRef, useCallback, useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Code2, Award, GraduationCap, ExternalLink, ChevronRight, Zap, Trophy, Coffee, Terminal, ShieldCheck } from 'lucide-react';

/* ── 3D Tilt Card ────────────────────────────────────── */
const TiltCard = ({ children, style, maxTilt = 8, glowColor = '#38bdf8' }) => {
  const cardRef = useRef(null);
  const [transform, setTransform] = useState('perspective(900px) rotateX(0deg) rotateY(0deg)');
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });

  const handleMouseMove = useCallback((e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * maxTilt;
    const rotateX = ((rect.height / 2 - y) / (rect.height / 2)) * maxTilt;
    setTransform(`perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01,1.01,1.01)`);
    setGlowPos({ x: (x / rect.width) * 100, y: (y / rect.height) * 100 });
  }, [maxTilt]);

  const handleMouseLeave = useCallback(() => {
    setTransform('perspective(900px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)');
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        ...style,
        transform,
        transition: 'transform 0.5s cubic-bezier(0.03, 0.98, 0.52, 0.99)',
        transformStyle: 'preserve-3d',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{
        position: 'absolute', inset: 0,
        background: `radial-gradient(500px circle at ${glowPos.x}% ${glowPos.y}%, ${glowColor}08, transparent 60%)`,
        pointerEvents: 'none', zIndex: 0, borderRadius: 'inherit',
      }} />
      <div style={{ position: 'relative', zIndex: 1 }}>{children}</div>
    </div>
  );
};

const Experience = () => {
  const sectionVariant = {
    hidden: { opacity: 0, y: 60, rotateX: 8 },
    visible: { 
      opacity: 1, y: 0, rotateX: 0,
      transition: { type: 'spring', bounce: 0.2, duration: 1 }
    }
  };

  const certifications = [
    { title: "Using Python to Access Web Data", sub: "University of Michigan", pdfUrl: "/Using Python to Access Web Data.pdf", color: "#38bdf8", icon: <Terminal size={24} /> },
    { title: "Data Structures and Algorithms (C)", sub: "University of Colorado Boulder", pdfUrl: "/Data Structures and Algorithms (C).pdf", color: "#818cf8", icon: <ShieldCheck size={24} /> },
    { title: "Go Full Stack With Spring Boot and React", sub: "Infosys", pdfUrl: "/Go Full Stack With Spring Boot and React.pdf", color: "#34d399", icon: <Coffee size={24} /> },
    { title: "Internship Completion Certificate", sub: "Torus Solutions", pdfUrl: "/Internship Certificate.pdf", color: "#fb7185", icon: <Trophy size={24} /> }
  ];

  const skillCategories = [
    { category: "Languages", color: "#38bdf8", skills: ['Java', 'Python', 'JavaScript', 'TypeScript', 'C', 'C++'] },
    { category: "Frontend", color: "#818cf8", skills: ['React', 'HTML5', 'CSS3'] },
    { category: "Backend", color: "#34d399", skills: ['Spring Boot', 'Node.js', 'Express', 'REST APIs'] },
    { category: "Databases", color: "#fbbf24", skills: ['Firebase', 'SQL', 'PostgreSQL', 'MongoDB'] },
    { category: "Tools", color: "#fb7185", skills: ['Git', 'GitHub'] }
  ];

  const experiences = [
    {
      title: 'Intern - Full Stack Developer',
      company: 'Torus Solutions',
      duration: '6 Months',
      color: '#38bdf8',
      points: [
        'Architected and deployed high-performance full-stack web applications utilizing Java, Spring Boot, and React, resulting in a 15% improvement in system stability.',
        'Optimized backend performance by designing highly efficient RESTful APIs, reducing average latency and response times by 20%.',
        'Consistently met all production milestones through rigorous adherence to Agile methodologies and collaborative sprint planning.',
      ]
    },
    {
      title: 'Team Leader',
      company: 'Hackathons',
      duration: '6+ Participations',
      color: '#818cf8',
      points: [
        'Built rapid prototypes under tight deadlines with modern tech stacks.',
        'Strengthened problem-solving, teamwork, and adaptability.',
      ]
    }
  ];

  const education = [
    { name: 'Vidyavardhaka College of Engineering', degree: 'B.E. (Lateral Entry)', score: 'CGPA: 7.25', color: '#38bdf8' },
    { name: "D Banumaiah's Polytechnic", degree: 'Diploma', score: 'CGPA: 8.86', color: '#818cf8' },
    { name: 'Regional International High School', degree: 'SSLC', score: '65.28%', color: '#34d399' },
  ];

  return (
    <section id="experience" className="section" style={{ backgroundColor: 'transparent', position: 'relative', overflow: 'hidden', perspective: '1200px' }}>
      
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40, rotateX: -12 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8, type: 'spring' }}
          style={{ textAlign: 'center', marginBottom: '5rem', transformStyle: 'preserve-3d' }}
        >
          <p style={{ color: '#38bdf8', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.8rem' }}>
            Background & Skills
          </p>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.03em', fontFamily: 'var(--font-heading)' }}>
            Experience & <span className="text-gradient-accent">Expertise</span>
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '4rem' }}>
          
          {/* Left Column */}
          <motion.div variants={sectionVariant} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.05 }} style={{ transformStyle: 'preserve-3d' }}>
            
            {/* Experience */}
            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'linear-gradient(135deg, rgba(56,189,248,0.2), rgba(129,140,248,0.2))', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 15px rgba(56,189,248,0.1)' }}>
                <Briefcase size={18} color="#38bdf8" />
              </div>
              Work Experience
            </h3>
            
            <div style={{ position: 'relative', paddingLeft: '2rem', borderLeft: '2px solid transparent', borderImage: 'linear-gradient(to bottom, #38bdf8, #818cf8, var(--border-color)) 1', marginBottom: '3rem' }}>
              {experiences.map((exp, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -30, rotateY: -10 }}
                  whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: idx * 0.15, type: 'spring' }}
                  style={{ marginBottom: idx < experiences.length - 1 ? '2rem' : 0 }}
                >
                  <div style={{ position: 'absolute', left: '-0.55rem', width: '16px', height: '16px', background: `linear-gradient(135deg, ${exp.color}, ${exp.color}aa)`, borderRadius: '50%', border: '3px solid var(--bg-primary)', boxShadow: `0 0 12px ${exp.color}50` }} />
                  <TiltCard maxTilt={5} glowColor={exp.color} style={{ background: 'var(--bg-card)', borderRadius: '16px', border: '1px solid var(--border-color)', padding: '1.5rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                      <div>
                        <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)' }}>{exp.title}</h4>
                        <p style={{ color: exp.color, fontWeight: 600, fontSize: '0.88rem', marginTop: '0.1rem' }}>{exp.company}</p>
                      </div>
                      <span style={{ fontSize: '0.72rem', background: `linear-gradient(135deg, ${exp.color}18, ${exp.color}10)`, padding: '0.3rem 0.9rem', borderRadius: '50px', border: `1px solid ${exp.color}25`, color: exp.color, fontWeight: 600 }}>{exp.duration}</span>
                    </div>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                      {exp.points.map((item, i) => (
                        <li key={i} style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.65, position: 'relative', paddingLeft: '1.2rem' }}>
                          <ChevronRight size={12} color={exp.color} style={{ position: 'absolute', left: 0, top: '0.3rem' }} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </TiltCard>
                </motion.div>
              ))}
            </div>

            {/* Education */}
            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'linear-gradient(135deg, rgba(52,211,153,0.2), rgba(251,191,36,0.2))', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 15px rgba(52,211,153,0.1)' }}>
                <GraduationCap size={18} color="#34d399" />
              </div>
              Education
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              {education.map((edu, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20, rotateY: -8 }}
                  whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: i * 0.1, type: 'spring' }}
                  whileHover={{ x: 5, borderColor: edu.color, boxShadow: `0 8px 25px ${edu.color}10` }}
                  style={{ 
                    display: 'flex', alignItems: 'center', gap: '1rem', 
                    background: 'var(--bg-card)', padding: '1.2rem 1.5rem', 
                    borderRadius: '14px', border: '1px solid var(--border-color)',
                    transition: 'all 0.4s cubic-bezier(0.03, 0.98, 0.52, 0.99)',
                    transformStyle: 'preserve-3d',
                  }}
                >
                  <GraduationCap size={20} color={edu.color} style={{ flexShrink: 0 }} />
                  <div style={{ flex: 1 }}>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-primary)', fontWeight: 600 }}>{edu.name}</p>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{edu.degree}</p>
                  </div>
                  <span style={{ 
                    fontSize: '0.82rem', 
                    fontWeight: 800, 
                    color: edu.color, 
                    background: `${edu.color}15`, 
                    padding: '0.4rem 1rem', 
                    borderRadius: '10px', 
                    border: `1px solid ${edu.color}30`,
                    boxShadow: i === 0 ? `0 0 15px ${edu.color}15` : 'none'
                  }}>
                    {edu.score}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div variants={sectionVariant} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.05 }} style={{ transformStyle: 'preserve-3d' }}>
            
            {/* Certifications */}
            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'linear-gradient(135deg, rgba(251,113,133,0.2), rgba(251,191,36,0.2))', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 15px rgba(251,113,133,0.1)' }}>
                <Award size={18} color="#fb7185" />
              </div>
              Certifications
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', marginBottom: '2.5rem' }}>
              {certifications.map((cert, idx) => (
                <motion.a 
                  href={cert.pdfUrl} target="_blank" rel="noopener noreferrer"
                  key={idx}
                  initial={{ opacity: 0, x: 30, rotateY: 10 }}
                  whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: idx * 0.1, type: 'spring' }}
                  whileHover={{ 
                    x: 5, scale: 1.02,
                    borderColor: cert.color,
                    boxShadow: `0 8px 30px ${cert.color}15`
                  }}
                  style={{ 
                    display: 'flex', alignItems: 'center', gap: '1rem', 
                    background: 'var(--bg-card)', padding: '1.2rem 1.5rem', 
                    borderRadius: '14px', border: '1px solid var(--border-color)',
                    transition: 'all 0.4s cubic-bezier(0.03, 0.98, 0.52, 0.99)',
                    cursor: 'pointer', textDecoration: 'none',
                    transformStyle: 'preserve-3d',
                  }}
                >
                  <span style={{ color: cert.color, display: 'flex', transform: 'translateZ(20px)' }}>{cert.icon}</span>
                  <div style={{ flex: 1 }}>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-primary)', fontWeight: 600 }}>{cert.title}</p>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{cert.sub}</p>
                  </div>
                  <ExternalLink size={16} color={cert.color} style={{ opacity: 0.5, flexShrink: 0 }} />
                </motion.a>
              ))}
            </div>

            {/* Skills */}
            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'linear-gradient(135deg, rgba(56,189,248,0.2), rgba(52,211,153,0.2))', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 15px rgba(251,191,36,0.1)' }}>
                <Zap size={18} color="#fbbf24" />
              </div>
              Technical Arsenal
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              {skillCategories.map((cat, catIdx) => (
                <motion.div
                  key={catIdx}
                  initial={{ opacity: 0, x: 20, rotateY: 8 }}
                  whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: catIdx * 0.08, type: 'spring' }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <p style={{ fontSize: '0.72rem', fontWeight: 700, color: cat.color, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.5rem' }}>
                    {cat.category}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {cat.skills.map(skill => (
                      <motion.span 
                        whileHover={{ 
                          y: -3, scale: 1.08,
                          borderColor: cat.color,
                          boxShadow: `0 6px 20px ${cat.color}20`,
                          color: cat.color,
                        }} 
                        key={skill} 
                        style={{ 
                          backgroundColor: 'rgba(255,255,255,0.02)', 
                          border: '1px solid var(--border-color)', 
                          padding: '0.35rem 0.9rem', borderRadius: '10px', 
                          fontSize: '0.82rem', fontWeight: 500, 
                          color: 'var(--text-primary)', 
                          transition: 'all 0.3s cubic-bezier(0.03, 0.98, 0.52, 0.99)',
                          cursor: 'default',
                        }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Experience;

import React, { useRef, useCallback, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Download, GraduationCap, Sparkles, MapPin, Mail, Phone } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

/* ── 3D Tilt Card ────────────────────────────────────── */
const TiltCard = ({ children, style, maxTilt = 10, ...props }) => {
  const cardRef = useRef(null);
  const [transform, setTransform] = useState('perspective(800px) rotateX(0deg) rotateY(0deg)');

  const handleMouseMove = useCallback((e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * maxTilt;
    const rotateX = ((rect.height / 2 - y) / (rect.height / 2)) * maxTilt;
    setTransform(`perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02,1.02,1.02)`);
  }, [maxTilt]);

  const handleMouseLeave = useCallback(() => {
    setTransform('perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)');
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        ...style,
        transform,
        transition: 'transform 0.4s cubic-bezier(0.03, 0.98, 0.52, 0.99)',
        transformStyle: 'preserve-3d',
      }}
      {...props}
    >
      {children}
    </div>
  );
};


const Hero = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const layer1Y = useTransform(scrollYProgress, [0, 1], ['0%', '60%']);
  const layer2Y = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const layer3Y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 0.5, 0]);

  const statCards = [
    { value: '8.86', label: 'Diploma CGPA', color: '#38bdf8', icon: '🎓' },
    { value: '6+', label: 'Hackathons', color: '#818cf8', icon: '🏆' },
    { value: '6mo', label: 'Internship', color: '#fb7185', icon: '💼' },
  ];

  return (
    <section 
      id="about" 
      ref={containerRef}
      className="section" 
      style={{ 
        paddingTop: 'clamp(6rem, 15vh, 10rem)',
        paddingBottom: 'clamp(4rem, 10vh, 6rem)',
        backgroundColor: 'transparent',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        perspective: '1200px',
      }}
    >
      {/* Gradient overlay for readability */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: 'linear-gradient(180deg, rgba(3,7,18,0.7) 0%, rgba(3,7,18,0.4) 40%, rgba(3,7,18,0.8) 100%)',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div style={{ 
          display: 'flex', flexDirection: 'row', alignItems: 'center',
          justifyContent: 'space-between', gap: 'clamp(2rem, 5vw, 4rem)', flexWrap: 'wrap-reverse'
        }}>
          
          {/* Left Content */}
          <motion.div 
            style={{ y: layer3Y, flex: '1 1 320px' }}
            initial={{ opacity: 0, x: -80, rotateY: -15 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ type: 'spring', bounce: 0.2, duration: 1.5 }}
          >
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, type: 'spring' }}
              style={{ 
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem', 
                background: 'linear-gradient(135deg, rgba(56,189,248,0.12), rgba(129,140,248,0.12))',
                border: '1px solid rgba(56,189,248,0.25)',
                color: '#38bdf8', padding: '0.5rem 1.2rem', borderRadius: '50px', 
                fontSize: '0.82rem', fontWeight: 600, marginBottom: '2rem', 
                textTransform: 'uppercase', letterSpacing: '0.08em',
                boxShadow: '0 0 20px rgba(56,189,248,0.1)'
              }}
            >
              <Sparkles size={14} /> Open to Opportunities
            </motion.div>
            
            <h1 style={{ 
              fontSize: 'clamp(2.8rem, 5.5vw, 4.5rem)', fontWeight: 800, 
              letterSpacing: '-0.04em', marginBottom: '0.5rem', lineHeight: 1.1,
              color: 'var(--text-primary)', fontFamily: 'var(--font-heading)'
            }}>
              Hi, I'm
            </h1>
            <motion.h1 
              initial={{ opacity: 0, y: 30, rotateX: -20 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ delay: 0.2, duration: 1, type: 'spring' }}
              className="text-gradient-accent" 
              style={{ 
                fontSize: 'clamp(3rem, 6vw, 5rem)', fontWeight: 900,
                lineHeight: 1.1, marginBottom: '1.5rem',
                fontFamily: 'var(--font-heading)', letterSpacing: '-0.03em',
                transformStyle: 'preserve-3d',
              }}
            >
              Mohammed Shehriyaar F.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--accent-cyan)', marginBottom: '1rem', letterSpacing: '0.02em' }}
            >
              Full Stack Developer • B.E. Student
            </motion.p>
            
            <p style={{ 
              color: 'var(--text-secondary)', fontSize: '1.05rem', maxWidth: '650px', 
              marginBottom: '2rem', lineHeight: 1.8, fontWeight: 400
            }}>
              Passionate Full Stack Developer and Undergraduate Engineering Student (B.E.) with a strong academic foundation (Diploma CGPA: 8.86). 
              Specialized in architecting scalable applications using <strong style={{color: 'var(--text-primary)'}}>Java, Python, React, and Spring Boot</strong>. 
              Dedicated to solving complex problems through innovative software solutions and hands-on project leadership.
            </p>

            {/* Contact Info */}
            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
              {[
                { icon: <MapPin size={14} />, text: 'Mysuru, Karnataka', color: '#38bdf8' },
                { icon: <Mail size={14} />, text: 'MOHAMMEDSHEHRIYAARF4@gmail.com', color: '#818cf8' },
                { icon: <Phone size={14} />, text: '+91 9972809609', color: '#fb7185' },
              ].map((info, i) => (
                <motion.span 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-tertiary)', fontSize: '0.88rem' }}
                >
                  <span style={{ color: info.color }}>{info.icon}</span> {info.text}
                </motion.span>
              ))}
            </div>

            {/* CTA */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center', position: 'relative', zIndex: 20 }}>
              <motion.a 
                whileHover={{ y: -4, boxShadow: '0 15px 40px rgba(56,189,248,0.25)', scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#projects" 
                style={{ 
                  padding: '0.9rem 2.2rem', 
                  background: 'linear-gradient(135deg, #38bdf8, #818cf8)', 
                  color: '#030712', borderRadius: '12px', fontWeight: 700, fontSize: '0.92rem', 
                  display: 'flex', alignItems: 'center', gap: '0.5rem', 
                  boxShadow: '0 4px 20px rgba(56,189,248,0.2)',
                  transition: 'all 0.3s',
                  textDecoration: 'none',
                  cursor: 'pointer'
                }}
              >
                Explore My Work <ArrowRight size={16} />
              </motion.a>
              <motion.a 
                whileHover={{ y: -4, borderColor: 'rgba(56,189,248,0.5)', scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="/Mohammed_Shehriyaar_F_Resume.pdf" target="_blank" rel="noopener noreferrer"
                style={{ 
                  padding: '0.9rem 2rem', backgroundColor: 'transparent', 
                  color: 'var(--text-primary)', border: '1px solid var(--border-hover)', 
                  borderRadius: '12px', fontWeight: 600, fontSize: '0.92rem', 
                  display: 'flex', alignItems: 'center', gap: '0.5rem', 
                  backdropFilter: 'blur(10px)', transition: 'all 0.3s',
                  textDecoration: 'none',
                  cursor: 'pointer'
                }}
              >
                <Download size={16} /> Resume
              </motion.a>
              <div style={{ display: 'flex', gap: '0.6rem' }}>
                <motion.a whileHover={{ y: -4, scale: 1.1, color: '#38bdf8' }} href="https://github.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', padding: '0.7rem', backgroundColor: 'rgba(255,255,255,0.03)', borderRadius: '10px', border: '1px solid var(--border-color)', display: 'flex', transition: 'all 0.3s' }}><FaGithub size={18} /></motion.a>
                <motion.a whileHover={{ y: -4, scale: 1.1, color: '#818cf8' }} href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', padding: '0.7rem', backgroundColor: 'rgba(255,255,255,0.03)', borderRadius: '10px', border: '1px solid var(--border-color)', display: 'flex', transition: 'all 0.3s' }}><FaLinkedin size={18} /></motion.a>
              </div>
            </div>
          </motion.div>

          {/* Right: Profile + Stats */}
          <motion.div 
            style={{ 
              flex: '1 1 380px', display: 'flex', flexDirection: 'column',
              alignItems: 'center', gap: '2rem',
              scale: imageScale, opacity: imageOpacity,
            }}
            initial={{ opacity: 0, scale: 0.7, rotateY: 20 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ type: 'spring', bounce: 0.3, duration: 1.5, delay: 0.3 }}
          >
            {/* 3D Profile Image */}
            <TiltCard maxTilt={12} style={{ position: 'relative', width: '100%', maxWidth: '340px' }}>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                style={{
                  position: 'absolute', inset: '-5px', borderRadius: '50%',
                  background: 'conic-gradient(from 0deg, #38bdf8, #818cf8, #fb7185, #fbbf24, #34d399, #38bdf8)',
                  opacity: 0.5, filter: 'blur(10px)', zIndex: 0
                }}
              />
              <img 
                src="/Profile.jpeg" alt="Mohammed Shehriyaar F"
                style={{ 
                  width: '100%', height: 'auto', position: 'relative', zIndex: 10,
                  borderRadius: '50%', objectFit: 'cover', aspectRatio: '1/1',
                  border: '4px solid var(--bg-primary)',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.4)'
                }} 
              />
              {/* 3D depth shadow */}
              <div style={{
                position: 'absolute', bottom: '-10px', left: '10%', width: '80%', height: '30px',
                background: 'radial-gradient(ellipse, rgba(56,189,248,0.2), transparent)',
                filter: 'blur(15px)', zIndex: 5, borderRadius: '50%',
              }} />
            </TiltCard>

            {/* 3D Stat Cards */}
            <div style={{ display: 'flex', gap: '0.8rem', width: '100%', maxWidth: '340px' }}>
              {statCards.map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30, rotateX: -30 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ delay: 0.6 + i * 0.15, type: 'spring' }}
                  whileHover={{ 
                    y: -6, rotateY: 5, scale: 1.05,
                    borderColor: stat.color,
                    boxShadow: `0 15px 30px ${stat.color}20`
                  }}
                  style={{ 
                    flex: 1, textAlign: 'center', padding: '1.2rem 0.5rem', 
                    background: 'rgba(15, 23, 42, 0.7)', borderRadius: '16px', 
                    border: '1px solid var(--border-color)',
                    transition: 'all 0.4s cubic-bezier(0.03, 0.98, 0.52, 0.99)',
                    backdropFilter: 'blur(10px)',
                    transformStyle: 'preserve-3d',
                    cursor: 'default',
                  }}
                >
                  <span style={{ fontSize: '1.2rem', display: 'block', marginBottom: '0.3rem' }}>{stat.icon}</span>
                  <p style={{ fontSize: '1.5rem', fontWeight: 800, color: stat.color, fontFamily: 'var(--font-heading)' }}>{stat.value}</p>
                  <p style={{ fontSize: '0.68rem', color: 'var(--text-tertiary)', fontWeight: 500, marginTop: '0.2rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;

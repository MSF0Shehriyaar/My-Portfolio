import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Menu, X } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        padding: scrolled ? '0.8rem 1rem' : '1.25rem 1.5rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: scrolled ? 'rgba(3, 7, 18, 0.92)' : 'rgba(3, 7, 18, 0.6)',
        borderBottom: `1px solid ${scrolled ? 'var(--border-hover)' : 'transparent'}`,
        zIndex: 1000,
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
        <motion.a 
          href="#about"
          whileHover={{ scale: 1.05 }}
          style={{ fontWeight: 800, fontSize: '1.3rem', letterSpacing: '-0.03em', cursor: 'pointer', fontFamily: 'var(--font-heading)', background: 'var(--gradient-primary)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
        >
          MSF.
        </motion.a>

        {/* Desktop Nav */}
        <nav className="desktop-only" style={{ display: 'flex', alignItems: 'center' }}>
          <ul style={{ display: 'flex', gap: '2rem', fontSize: '0.88rem', fontWeight: 600 }}>
            {navLinks.map((link, i) => (
              <motion.li 
                key={link.label}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i, duration: 0.4 }}
                whileHover={{ y: -2 }} 
                style={{ color: 'var(--text-secondary)' }}
              >
                <a href={link.href} style={{ transition: 'color 0.2s' }}>{link.label}</a>
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <div className="desktop-only" style={{ display: 'flex', gap: '0.8rem', color: 'var(--text-secondary)' }}>
          <motion.a href="https://github.com" target="_blank" rel="noopener noreferrer" whileHover={{ color: '#38bdf8', y: -2, scale: 1.1 }} transition={{ duration: 0.2 }}><FaGithub size={18} /></motion.a>
          <motion.a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" whileHover={{ color: '#818cf8', y: -2, scale: 1.1 }} transition={{ duration: 0.2 }}><FaLinkedin size={18} /></motion.a>
        </div>
        
        <motion.a 
          whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(56, 189, 248, 0.3)' }}
          whileTap={{ scale: 0.95 }}
          href="/Mohammed_Shehriyaar_F_Resume.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="desktop-only"
          style={{ 
            fontSize: '0.85rem', 
            padding: '0.5rem 1.2rem', 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.5rem', 
            borderRadius: '8px',
            background: 'linear-gradient(135deg, rgba(56,189,248,0.15), rgba(129,140,248,0.15))',
            border: '1px solid rgba(56,189,248,0.3)',
            color: '#38bdf8',
            fontWeight: 600,
            transition: 'all 0.3s'
          }}
        >
          Resume <Download size={14} />
        </motion.a>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setMobileOpen(!mobileOpen)}
          className="mobile-only"
          style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', padding: '0.5rem' }}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              width: '100%',
              height: '100vh',
              backgroundColor: 'rgba(3, 7, 18, 0.98)',
              backdropFilter: 'blur(20px)',
              zIndex: 999,
              display: 'flex',
              flexDirection: 'column',
              padding: '6rem 2rem 2rem'
            }}
          >
            <nav>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {navLinks.map((link, i) => (
                  <motion.li 
                    key={link.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <a 
                      href={link.href} 
                      onClick={() => setMobileOpen(false)}
                      style={{ fontSize: '2rem', fontWeight: 800, color: '#fff', fontFamily: 'var(--font-heading)' }}
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>
            
            <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div style={{ display: 'flex', gap: '1.5rem', color: '#fff' }}>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub size={28} /></a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin size={28} /></a>
              </div>
              <a 
                href="/Mohammed_Shehriyaar_F_Resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ 
                  padding: '1.2rem', 
                  textAlign: 'center',
                  borderRadius: '12px',
                  background: 'var(--gradient-primary)',
                  color: '#030712',
                  fontWeight: 800,
                  fontSize: '1.1rem'
                }}
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;

import React from 'react';
import { motion } from 'framer-motion';
import { Send, Heart, Mail, Phone } from 'lucide-react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id="contact" style={{ 
      backgroundColor: 'transparent', 
      padding: '8rem 2rem 4rem 2rem', 
      borderTop: '1px solid var(--border-color)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background glow */}
      <div style={{
        position: 'absolute',
        bottom: '-10%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '80vw',
        height: '40vw',
        background: 'radial-gradient(circle, rgba(251, 113, 133, 0.05) 0%, transparent 70%)',
        filter: 'blur(100px)',
        zIndex: 0
      }} />

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
        className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '1000px' }}
      >
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', marginBottom: '6rem', textAlign: 'left' }}>
          
          <div>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '3rem', fontWeight: 900, marginBottom: '1.5rem', letterSpacing: '-0.04em', color: 'var(--text-primary)' }}>
              Let's <span className="text-gradient-accent">Connect</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.1rem', lineHeight: 1.7, maxWidth: '400px' }}>
              I am currently open to new opportunities and collaborations where I can contribute my expertise in high-performance web architecture and AI integration. Let's build something exceptional together.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <a href="mailto:MOHAMMEDSHEHRIYAARF4@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-secondary)', transition: 'color 0.3s' }} className="contact-link">
                <div style={{ width: '40px', height: '40px', borderRadius: '12px', backgroundColor: 'rgba(56, 189, 248, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Mail size={18} color="#38bdf8" />
                </div>
                MOHAMMEDSHEHRIYAARF4@gmail.com
              </a>
              <a href="tel:+919972809609" style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-secondary)', transition: 'color 0.3s' }} className="contact-link">
                <div style={{ width: '40px', height: '40px', borderRadius: '12px', backgroundColor: 'rgba(129, 140, 248, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Phone size={18} color="#818cf8" />
                </div>
                +91 9972809609
              </a>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start' }}>
            <motion.a 
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(251, 113, 133, 0.2)' }}
              whileTap={{ scale: 0.95 }}
              href="mailto:MOHAMMEDSHEHRIYAARF4@gmail.com" 
              style={{ 
                padding: '1.2rem 3rem', 
                fontSize: '1.1rem', 
                fontWeight: 700,
                background: 'linear-gradient(135deg, #fb7185, #fb923c)',
                color: '#030712',
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '0.8rem', 
                borderRadius: '16px',
                boxShadow: '0 10px 25px rgba(251, 113, 133, 0.15)'
              }}
            >
              Send Message <Send size={20} />
            </motion.a>
            <div style={{ display: 'flex', gap: '1.5rem', marginTop: '3rem' }}>
              <motion.a whileHover={{ color: '#38bdf8', y: -5, scale: 1.2 }} href="#" style={{ color: 'var(--text-secondary)', transition: 'all 0.3s' }}><FaLinkedin size={26} /></motion.a>
              <motion.a whileHover={{ color: '#f1f5f9', y: -5, scale: 1.2 }} href="#" style={{ color: 'var(--text-secondary)', transition: 'all 0.3s' }}><FaGithub size={26} /></motion.a>
              <motion.a whileHover={{ color: '#1da1f2', y: -5, scale: 1.2 }} href="#" style={{ color: 'var(--text-secondary)', transition: 'all 0.3s' }}><FaTwitter size={26} /></motion.a>
            </div>
          </div>

        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '3rem', borderTop: '1px solid var(--border-color)' }}>
          <p style={{ color: 'var(--text-tertiary)', fontSize: '0.9rem', fontWeight: 500 }}>
            &copy; {new Date().getFullYear()} Mohammed Shehriyaar F. — Crafting Digital Excellence.
          </p>
          <p style={{ color: 'var(--text-tertiary)', fontSize: '0.9rem', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            Engineered with Precision & <Heart size={14} color="#fb7185" fill="#fb7185" style={{ opacity: 0.8 }} /> Passion
          </p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;

import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring, useTransform } from 'framer-motion';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';
import IntroScreen from './components/IntroScreen';

/* ── Portfolio Background Video ──────────────────────── */
const PortfolioBackground = () => {
  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 0,
      background: '#000',
      pointerEvents: 'none',
      overflow: 'hidden'
    }}>
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: 0.5,
        }}
      >
        <source src="/for porfolio.mp4" type="video/mp4" />
      </video>
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(circle, transparent 0%, rgba(3,7,18,0.8) 100%)',
      }} />
    </div>
  );
};

/* ── Scroll Progress Bar ─────────────────────────────── */
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      style={{
        scaleX,
        transformOrigin: '0%',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '3px',
        background: 'linear-gradient(90deg, #38bdf8, #818cf8, #fb7185)',
        zIndex: 200,
      }}
    />
  );
};

/* ── Scroll To Top Button ────────────────────────────── */
const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          whileHover={{ scale: 1.15, boxShadow: '0 0 30px rgba(56,189,248,0.4)' }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{
            position: 'fixed',
            bottom: '2rem',
            right: '2rem',
            width: '50px',
            height: '50px',
            borderRadius: '14px',
            border: '1px solid rgba(56,189,248,0.3)',
            background: 'linear-gradient(135deg, rgba(56,189,248,0.15), rgba(129,140,248,0.15))',
            backdropFilter: 'blur(20px)',
            color: '#38bdf8',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.3rem',
            fontWeight: 800,
            zIndex: 100,
          }}
        >
          ↑
        </motion.button>
      )}
    </AnimatePresence>
  );
};

/* ── Section Divider ─────────────────────────────────── */
const SectionDivider = () => (
  <div style={{ display: 'flex', justifyContent: 'center', padding: '0.5rem 0', position: 'relative', zIndex: 2 }}>
    <motion.div
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      style={{
        width: '120px',
        height: '2px',
        background: 'linear-gradient(90deg, transparent, #38bdf8, #818cf8, transparent)',
        transformOrigin: 'center',
      }}
    />
  </div>
);

/* ── Main App ────────────────────────────────────────── */
function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [hasEntered, setHasEntered] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (hasEntered) {
      window.scrollTo(0, 0);
    }
  }, [hasEntered]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollTop / docHeight : 0;
      setScrollProgress(Math.min(Math.max(progress, 0), 1));
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <AnimatePresence>
        {!hasEntered && <IntroScreen onEnter={() => setHasEntered(true)} key="intro" />}
      </AnimatePresence>

      {hasEntered && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          ref={scrollRef}
        >
          <ScrollProgress />
          
          {/* 3D Background Layers */}
          <PortfolioBackground />

          <Navbar />
          <main style={{ position: 'relative', zIndex: 2 }}>
            <Hero />
            <SectionDivider />
            <Experience />
            <SectionDivider />
            <Projects />
          </main>
          <Footer />
          <ScrollToTop />
        </motion.div>
      )}
    </>
  );
}

export default App;

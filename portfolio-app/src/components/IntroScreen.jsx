import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const IntroScreen = ({ onEnter }) => {
  const [isEntering, setIsEntering] = useState(false);
  const [isFlashing, setIsFlashing] = useState(false);
  const [hideVideo, setHideVideo] = useState(false);
  const videoRef = useRef(null);

  const handleEnter = () => {
    if (isEntering) return;
    setIsEntering(true);
    
    // 1. Fast forward video
    if (videoRef.current) {
      videoRef.current.playbackRate = 8.0; 
    }

    // 2. Wait for fast forward effect
    setTimeout(() => {
      setIsFlashing(true);
      
      // 3. Hide video shortly after flash starts to ensure seamless cover
      setTimeout(() => {
        setHideVideo(true);
      }, 300);

      // 4. Switch page after flash is solid white
      setTimeout(() => {
        onEnter();
      }, 600); 
    }, 1000); 
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.0;
    }
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9999,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#000',
          cursor: 'pointer',
          overflow: 'hidden',
        }}
        onClick={handleEnter}
      >
        {/* Intro Background Video */}
        {!hideVideo && (
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: isEntering ? 1 : 0.7,
              transition: 'opacity 0.5s ease-in-out, transform 1.5s cubic-bezier(0.4, 0, 0.2, 1)',
              transform: isEntering ? 'scale(1.5)' : 'scale(1)',
            }}
          >
            <source src="/for intro.mp4" type="video/mp4" />
          </video>
        )}

        {/* Cinematic Overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: isEntering 
            ? 'radial-gradient(circle, transparent 0%, rgba(0,0,0,0.9) 100%)'
            : 'radial-gradient(circle, transparent 0%, rgba(0,0,0,0.4) 100%)',
          zIndex: 1,
          transition: 'background 1s ease-in-out',
          opacity: hideVideo ? 0 : 1
        }} />

        {/* Content */}
        <motion.div
          animate={{ opacity: isEntering ? 0 : 1, y: isEntering ? -100 : 0 }}
          transition={{ duration: 0.4, ease: 'easeIn' }}
          style={{ zIndex: 2, textAlign: 'center' }}
        >
          <motion.h1
            initial={{ opacity: 0, letterSpacing: '0.5em' }}
            animate={{ opacity: 1, letterSpacing: '0.2em' }}
            transition={{ duration: 2, ease: 'easeOut' }}
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(3rem, 8vw, 6rem)',
              fontWeight: 900,
              color: '#fff',
              textTransform: 'uppercase',
              textShadow: '0 0 30px rgba(255,255,255,0.5)',
              marginBottom: '2rem'
            }}
          >
            Welcome
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              fontSize: '1.2rem',
              color: '#38bdf8',
              fontWeight: 600,
              letterSpacing: '0.3em',
              textTransform: 'uppercase'
            }}
          >
            Click to Begin Journey
          </motion.div>
        </motion.div>

        {/* Transition Flash */}
        <motion.div
          animate={{
            opacity: isFlashing ? 1 : 0,
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{
            position: 'absolute',
            inset: 0,
            background: '#fff',
            zIndex: 10,
            pointerEvents: 'none'
          }}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default IntroScreen;

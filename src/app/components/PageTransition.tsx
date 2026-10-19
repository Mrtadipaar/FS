import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';

interface PageTransitionProps {
  children: React.ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Check if loading screen has already been shown in this session
    const hasShownLoading = sessionStorage.getItem('fynest_loading_shown');
    
    // Only show loading screen once per session
    if (!hasShownLoading) {
      setIsLoading(true);
      
      // Mark as shown in session storage
      sessionStorage.setItem('fynest_loading_shown', 'true');
      
      // Roll up after 1.2 seconds
      const timer1 = setTimeout(() => {
        setIsLoading(false);
      }, 1200);

      // Show content after 1.6 seconds
      const timer2 = setTimeout(() => {
        setShowContent(true);
      }, 1600);

      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
      };
    } else {
      // If already shown, immediately show content
      setShowContent(true);
    }
  }, []);

  return (
    <>
      {/* Single Loading Screen Layer - Rolls Up */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="loader"
            initial={{ y: 0, opacity: 1 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.8, ease: [0.83, 0, 0.17, 1] }}
            className="fixed inset-0 z-[9999] flex items-center justify-center"
            style={{ backgroundColor: '#0E0E0E' }}
          >
            <motion.div className="flex flex-col items-center gap-3 px-4">
              {/* FYNEST STUDIO Text */}
              <motion.h1
                style={{
                  fontFamily: "'Bebas Neue', 'Arial Black', sans-serif",
                  fontWeight: 400,
                  fontSize: 'clamp(2.5rem, 12vw, 7rem)',
                  letterSpacing: '0.15em',
                  color: '#FFFFFF',
                  marginBottom: '0',
                  textAlign: 'center',
                  lineHeight: 1
                }}
              >
                FYNEST STUDIO
              </motion.h1>

              {/* Slogan */}
              <motion.p
                style={{
                  fontFamily: "'Inter', 'Arial', sans-serif",
                  fontWeight: 300,
                  fontSize: 'clamp(0.75rem, 2.5vw, 1.125rem)',
                  letterSpacing: '0.05em',
                  color: '#FFFFFF',
                  opacity: 0.6,
                  marginTop: '0',
                  textAlign: 'center'
                }}
              >
                Because average isn't fynest
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Website Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showContent ? 1 : 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{ visibility: showContent ? 'visible' : 'hidden' }}
      >
        {children}
      </motion.div>
    </>
  );
}
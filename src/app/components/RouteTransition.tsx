import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';

interface RouteTransitionProps {
  children: React.ReactNode;
}

export function RouteTransition({ children }: RouteTransitionProps) {
  const location = useLocation();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const isFirstRender = useRef(true);

  useEffect(() => {
    // Skip transition on first render (initial page load - handled by PageTransition)
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    // Show transition screen when navigating between pages
    setIsTransitioning(true);
    
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isTransitioning && (
          <motion.div
            key={`transition-${location.pathname}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ y: '-100%', opacity: 1 }}
            transition={{ 
              opacity: { duration: 0.2, ease: "easeOut" },
              y: { duration: 0.8, ease: [0.83, 0, 0.17, 1] }
            }}
            className="fixed inset-0 z-[9998] flex items-center justify-center"
            style={{ backgroundColor: '#0E0E0E' }}
          >
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
              className="flex flex-col items-center gap-4"
            >
              {/* FYNEST STUDIO Text */}
              <h1
                style={{
                  fontFamily: "'Bebas Neue', 'Arial Black', sans-serif",
                  fontWeight: 400,
                  fontSize: 'clamp(3rem, 8vw, 7rem)',
                  letterSpacing: '0.15em',
                  color: '#FFFFFF',
                  marginBottom: '0'
                }}
              >
                FYNEST STUDIO
              </h1>

              {/* Slogan */}
              <p
                style={{
                  fontFamily: "'Inter', 'Arial', sans-serif",
                  fontWeight: 300,
                  fontSize: 'clamp(0.875rem, 1.5vw, 1.125rem)',
                  letterSpacing: '0.05em',
                  color: '#FFFFFF',
                  opacity: 0.6,
                  marginTop: '0'
                }}
              >
                Because average isn't fynest
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </>
  );
}
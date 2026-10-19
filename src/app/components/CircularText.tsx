import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';

const words = [
  { text: 'GUIDING BRANDS', color: '#FFFFFF' },
  { text: 'CONTENT', color: '#FFFFFF' },
  { text: 'CREATIVE', color: '#FFFFFF' },
  { text: 'GROWTH', color: '#FFFFFF' }
];

export function CircularText() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const currentWord = words[currentIndex];
  const letters = currentWord.text.split('');

  return (
    <div className="relative min-h-[180px] sm:min-h-[220px] md:min-h-[260px] flex items-center justify-center overflow-visible py-8">
      {/* Animated background rings */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{ willChange: 'transform' }}
      >
        <div className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] border border-white/5 rounded-full" />
      </motion.div>
      
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{ willChange: 'transform' }}
      >
        <div className="w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[450px] border border-white/5 rounded-full" />
      </motion.div>

      {/* Glowing orbs */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`orb-${currentIndex}`}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 2 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="w-32 h-32 sm:w-40 sm:h-40 rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)',
            }}
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Main text with advanced animations - FIXED BASELINE ALIGNMENT */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="inline-flex items-baseline justify-center whitespace-nowrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ willChange: 'opacity' }}
          >
            {letters.map((letter, index) => (
              <motion.span
                key={`${currentIndex}-${index}`}
                className="inline-block"
                style={{
                  fontSize: 'clamp(2.5rem, 7vw, 7rem)',
                  fontWeight: 900,
                  color: currentWord.color,
                  textShadow: `
                    0 0 20px rgba(255, 255, 255, 0.3),
                    0 0 40px rgba(255, 255, 255, 0.2),
                    0 0 60px rgba(255, 255, 255, 0.1),
                    0 10px 30px rgba(0, 0, 0, 0.5)
                  `,
                  letterSpacing: letter === ' ' ? '0.5em' : '-0.02em',
                  lineHeight: 1,
                  WebkitTextStroke: '1px rgba(255, 255, 255, 0.1)',
                  willChange: 'transform, opacity, filter',
                }}
                initial={{
                  opacity: 0,
                  y: 80,
                  rotateX: 90,
                  scale: 0.5,
                  filter: 'blur(20px)',
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  rotateX: 0,
                  scale: 1,
                  filter: 'blur(0px)',
                }}
                exit={{
                  opacity: 0,
                  y: -80,
                  rotateX: -90,
                  scale: 0.5,
                  filter: 'blur(20px)',
                }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.04,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {letter === ' ' ? '\u00A0' : letter}
              </motion.span>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Particle effects - Optimized */}
      <AnimatePresence>
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`${currentIndex}-particle-${i}`}
            className="absolute w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white rounded-full pointer-events-none"
            style={{
              left: '50%',
              top: '50%',
              willChange: 'transform, opacity',
            }}
            initial={{
              opacity: 0,
              scale: 0,
              x: 0,
              y: 0,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              x: Math.cos((i / 8) * Math.PI * 2) * 150,
              y: Math.sin((i / 8) * Math.PI * 2) * 150,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 1.5,
              delay: 0.2 + i * 0.05,
              ease: "easeOut",
            }}
          />
        ))}
      </AnimatePresence>

      {/* Scan line effect - Optimized */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`scan-${currentIndex}`}
          className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none"
          initial={{ top: '50%', opacity: 0 }}
          animate={{ 
            top: ['40%', '60%'],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
          }}
          style={{ willChange: 'top, opacity' }}
        />
      </AnimatePresence>
    </div>
  );
}
import { Menu, X } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLogoHovered, setIsLogoHovered] = useState(false);
  const [isNavHovered, setIsNavHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isMobileExpanded, setIsMobileExpanded] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  // Detect mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 80);
          // Reset mobile expansion when scrolling
          setIsMobileExpanded(false);
          // Close mobile menu when scrolling
          if (window.scrollY > 80 && isMenuOpen) {
            setIsMenuOpen(false);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    if (currentPath !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    setIsMenuOpen(false);
  };

  // Compression logic
  const isExpanded = !isScrolled || isNavHovered;

  return (
    <>
      {/* Mobile-specific optimizations */}
      <style>{`
        /* iOS Safe Area Support */
        @supports (padding: env(safe-area-inset-top)) {
          .mobile-nav-wrapper {
            padding-top: max(32px, calc(env(safe-area-inset-top) + 20px)) !important;
          }
        }
        
        /* Mobile-only optimizations */
        @media (max-width: 767px) {
          .mobile-nav-wrapper {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            padding-top: 32px;
            padding-left: max(16px, env(safe-area-inset-left));
            padding-right: max(16px, env(safe-area-inset-right));
            padding-bottom: 8px;
            z-index: 9999;
            transform: translate3d(0, 0, 0);
            -webkit-transform: translate3d(0, 0, 0);
            will-change: transform;
            display: flex;
            justify-content: center;
            align-items: flex-start;
            pointer-events: none;
          }
          
          .mobile-nav-pill {
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            transform-origin: top center;
            will-change: transform, width;
            margin: 0 auto;
            pointer-events: auto;
            max-width: calc(100vw - 32px);
          }
          
          .mobile-nav-pill.scrolled {
            width: 70px !important;
            padding: 0 !important;
            transform: scale(0.95);
          }
          
          .mobile-nav-pill.expanded {
            width: 100% !important;
            max-width: calc(100% - 32px) !important;
            padding: 0 16px !important;
            transform: scale(1);
          }
          
          .mobile-nav-container {
            background: rgba(255, 255, 255, 0.98);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border-radius: 50px;
            box-shadow: 0 8px 32px -8px rgba(0, 0, 0, 0.18), 
                        0 0 0 1px rgba(0, 0, 0, 0.05);
            padding: 14px 0;
            position: relative;
            overflow: hidden;
            transform: translateZ(0);
            -webkit-transform: translateZ(0);
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          }
          
          .mobile-nav-container.scrolled {
            border-radius: 35px;
            padding: 10px 0;
            box-shadow: 0 12px 40px -10px rgba(0, 0, 0, 0.25),
                        0 0 0 1px rgba(0, 0, 0, 0.08);
          }
          
          .mobile-nav-container.menu-open {
            border-radius: 30px;
            box-shadow: 0 16px 48px -12px rgba(0, 0, 0, 0.3),
                        0 0 0 1px rgba(0, 0, 0, 0.1);
          }
          
          .mobile-menu-button {
            transition: opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1), 
                        transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          }
          
          .mobile-menu-button.hidden {
            opacity: 0;
            transform: scale(0.7) translateX(-8px);
            pointer-events: none;
          }
          
          .mobile-logo-wrapper {
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          }
          
          .mobile-logo-circle {
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          }
          
          .mobile-logo-circle.scrolled {
            width: 54px !important;
            height: 54px !important;
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
          }
          
          .mobile-logo-circle.expanded {
            width: 48px !important;
            height: 48px !important;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
          }
          
          /* Prevent content from going under nav */
          body {
            padding-top: env(safe-area-inset-top);
          }
        }
        
        /* iPhone X and newer notch support */
        @media only screen 
          and (device-width: 375px) 
          and (device-height: 812px) 
          and (-webkit-device-pixel-ratio: 3) {
          .mobile-nav-wrapper {
            padding-top: 56px !important;
          }
        }
        
        /* iPhone XR, 11 */
        @media only screen 
          and (device-width: 414px) 
          and (device-height: 896px) 
          and (-webkit-device-pixel-ratio: 2) {
          .mobile-nav-wrapper {
            padding-top: 56px !important;
          }
        }
        
        /* iPhone 12, 13, 14 */
        @media only screen 
          and (device-width: 390px) 
          and (device-height: 844px) 
          and (-webkit-device-pixel-ratio: 3) {
          .mobile-nav-wrapper {
            padding-top: 56px !important;
          }
        }
        
        /* iPhone 14 Pro, 15 Pro */
        @media only screen 
          and (device-width: 393px) 
          and (device-height: 852px) 
          and (-webkit-device-pixel-ratio: 3) {
          .mobile-nav-wrapper {
            padding-top: 60px !important;
          }
        }
        
        /* iPhone 14 Pro Max, 15 Pro Max */
        @media only screen 
          and (device-width: 430px) 
          and (device-height: 932px) 
          and (-webkit-device-pixel-ratio: 3) {
          .mobile-nav-wrapper {
            padding-top: 60px !important;
          }
        }
      `}</style>

      <motion.nav 
        className={isMobile ? "mobile-nav-wrapper" : "fixed top-0 left-0 right-0 z-50 pt-4 sm:pt-6 px-4 sm:px-6 flex justify-center items-start"}
        initial={{ y: isMobile ? 0 : -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Mobile Navigation - Completely separate implementation */}
        {isMobile ? (
          <div 
            className={`mobile-nav-pill ${(isScrolled && !isMobileExpanded) ? 'scrolled' : 'expanded'}`}
            onClick={(e) => {
              // Only expand if clicking the container itself when compressed, not child buttons
              if (isScrolled && !isMobileExpanded && e.target === e.currentTarget) {
                setIsMobileExpanded(true);
              }
            }}
          >
            <div className={`mobile-nav-container ${isMenuOpen ? 'menu-open' : ''} ${(isScrolled && !isMobileExpanded) ? 'scrolled' : ''}`}>
              {/* Mobile Header */}
              <div className="flex justify-between items-center px-6 relative">
                {/* Mobile Menu Button - Left */}
                <button 
                  className={`mobile-menu-button p-2 text-gray-700 hover:text-[#000000] transition-colors active:scale-95 ${(isScrolled && !isMobileExpanded) ? 'hidden' : ''}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsMenuOpen(!isMenuOpen);
                  }}
                  style={{
                    transition: 'transform 0.15s ease, color 0.2s ease, opacity 0.3s ease',
                  }}
                >
                  <AnimatePresence mode="wait">
                    {isMenuOpen ? (
                      <motion.div
                        key="close"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.15 }}
                      >
                        <X className="h-6 w-6" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="menu"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.15 }}
                      >
                        <Menu className="h-6 w-6" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>

                {/* Mobile Logo - Center (Absolute) */}
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    
                    // If compressed, just expand (don't navigate)
                    if (isScrolled && !isMobileExpanded) {
                      setIsMobileExpanded(true);
                      return;
                    }
                    
                    // If menu is open, just close it (don't scroll)
                    if (isMenuOpen) {
                      setIsMenuOpen(false);
                      return;
                    }
                    
                    // If menu is closed and we're on homepage, scroll to top
                    if (!isMenuOpen && currentPath === '/') {
                      window.scrollTo({ 
                        top: 0, 
                        behavior: 'smooth' 
                      });
                      return;
                    }
                    
                    // If we're on a different page, navigate to home
                    if (!isMenuOpen && currentPath !== '/') {
                      navigate('/');
                      setTimeout(() => {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }, 100);
                    }
                  }}
                  className="absolute left-1/2 -translate-x-1/2 active:scale-90 mobile-logo-wrapper"
                  style={{
                    transition: 'transform 0.15s ease',
                  }}
                >
                  <div 
                    className={`mobile-logo-circle rounded-full bg-gradient-to-br from-[#000000] to-[#2A2A2A] flex items-center justify-center shadow-lg ${(isScrolled && !isMobileExpanded) ? 'scrolled' : 'expanded'}`}
                  >
                    <span 
                      className="text-white"
                      style={{ 
                        fontFamily: 'Georgia, "Times New Roman", "Bodoni MT", "Didot", serif',
                        fontWeight: 700,
                        fontSize: (isScrolled && !isMobileExpanded) ? '1.2rem' : '1.15rem',
                        letterSpacing: '-0.05em',
                        lineHeight: 1,
                        transition: 'font-size 0.3s ease',
                      }}
                    >
                      FS
                    </span>
                  </div>
                </button>
                
                {/* Spacer for layout balance */}
                <div className="w-10 h-10"></div>
              </div>

              {/* Mobile Menu Dropdown */}
              <AnimatePresence>
                {isMenuOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 space-y-2 border-t border-gray-100 pt-4 mt-4">
                      <motion.button
                        onClick={() => { navigate('/about'); setIsMenuOpen(false); }}
                        className="block w-full text-left text-gray-600 text-sm uppercase tracking-wider hover:text-gray-900 transition-colors py-3 px-4 rounded-lg hover:bg-gray-50 active:scale-98"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0, duration: 0.2 }}
                      >
                        About
                      </motion.button>

                      <motion.button
                        onClick={() => { navigate('/services'); setIsMenuOpen(false); }}
                        className="block w-full text-left text-gray-600 text-sm uppercase tracking-wider hover:text-gray-900 transition-colors py-3 px-4 rounded-lg hover:bg-gray-50 active:scale-98"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.05, duration: 0.2 }}
                      >
                        Services
                      </motion.button>

                      <motion.button
                        onClick={() => { navigate('/pricing'); setIsMenuOpen(false); }}
                        className="block w-full text-left text-gray-600 text-sm uppercase tracking-wider hover:text-gray-900 transition-colors py-3 px-4 rounded-lg hover:bg-gray-50 active:scale-98"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1, duration: 0.2 }}
                      >
                        Pricing
                      </motion.button>

                      <motion.button
                        onClick={() => { navigate('/contact'); setIsMenuOpen(false); }}
                        className="block w-full text-left text-gray-600 text-sm uppercase tracking-wider hover:text-gray-900 transition-colors py-3 px-4 rounded-lg hover:bg-gray-50 active:scale-98"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.15, duration: 0.2 }}
                      >
                        Contact
                      </motion.button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        ) : (
          /* Desktop Navigation - Original implementation */
          <motion.div 
            className="w-[90%] sm:w-[85%] md:w-full bg-white backdrop-blur-xl shadow-lg relative"
            onMouseEnter={() => setIsNavHovered(true)}
            onMouseLeave={() => setIsNavHovered(false)}
            style={{
              transition: 'all 0.3s ease',
              maxHeight: isMenuOpen ? 'none' : '70px',
              overflow: isMenuOpen ? 'visible' : 'hidden',
            }}
            animate={{
              maxWidth: isExpanded ? '1200px' : '64px',
              borderRadius: isExpanded ? '50px' : '32px',
              paddingTop: '16px',
              paddingBottom: '16px',
              paddingLeft: '0px',
              paddingRight: '0px',
              boxShadow: isExpanded
                ? '0 10px 30px -12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0, 0, 0, 0.03)'
                : '0 20px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.05)',
            }}
            transition={{ 
              duration: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center justify-center relative">
              
              {/* Left Section - Services & Pricing */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div 
                    className="absolute right-[calc(50%+80px)] flex items-center gap-4"
                    initial={{ opacity: 0, x: 30, scale: 0.9 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: 30, scale: 0.9 }}
                    transition={{ 
                      duration: 0.4, 
                      ease: [0.34, 1.56, 0.64, 1],
                      opacity: { duration: 0.2 }
                    }}
                  >
                    <motion.button
                      onClick={() => navigate('/services')}
                      className="text-gray-600 text-sm uppercase tracking-wider relative group whitespace-nowrap"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="relative z-10 transition-colors duration-300 group-hover:text-gray-900">
                        Services
                      </span>
                      <motion.div
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#000000] to-[#FF6B35]"
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.button>

                    <motion.button
                      onClick={() => navigate('/pricing')}
                      className="text-gray-600 text-sm uppercase tracking-wider relative group whitespace-nowrap"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="relative z-10 transition-colors duration-300 group-hover:text-gray-900">
                        Pricing
                      </span>
                      <motion.div
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#000000] to-[#FF6B35]"
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Center - Logo */}
              <motion.button 
                onClick={() => {
                  navigate('/');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                onMouseEnter={() => setIsLogoHovered(true)}
                onMouseLeave={() => setIsLogoHovered(false)}
                className="cursor-pointer flex-shrink-0 relative z-10"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative">
                  {/* Animated gradient background on hover */}
                  <motion.div
                    className="absolute inset-0 rounded-lg blur-xl opacity-0"
                    animate={{
                      opacity: isLogoHovered ? 0.3 : 0,
                    }}
                    transition={{ duration: 0.4 }}
                    style={{
                      background: 'linear-gradient(45deg, #000000, #FF6B35, #000000)',
                      backgroundSize: '200% 200%',
                    }}
                  />
                  
                  <motion.span 
                    className="text-[#000000] relative block"
                    style={{ 
                      fontFamily: 'Georgia, "Times New Roman", "Bodoni MT", "Didot", serif',
                      fontWeight: 700,
                      fontSize: '2.25rem',
                      letterSpacing: '-0.08em',
                      lineHeight: 1,
                      textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
                    }}
                    animate={{
                      textShadow: isLogoHovered 
                        ? '0 2px 8px rgba(0, 0, 0, 0.15)' 
                        : '0 1px 2px rgba(0, 0, 0, 0.1)',
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* F Letter */}
                    <motion.span
                      className="inline-block"
                      animate={{
                        rotateY: isLogoHovered ? [0, 180, 360] : 0,
                      }}
                      transition={{
                        duration: 0.8,
                        ease: [0.34, 1.56, 0.64, 1]
                      }}
                      style={{
                        display: 'inline-block',
                        transformStyle: 'preserve-3d',
                      }}
                    >
                      F
                    </motion.span>
                    
                    {/* S Letter */}
                    <motion.span
                      className="inline-block"
                      style={{ 
                        marginLeft: '-0.12em',
                        display: 'inline-block',
                        transformStyle: 'preserve-3d',
                      }}
                      animate={{
                        rotateY: isLogoHovered ? [0, -180, -360] : 0,
                      }}
                      transition={{
                        duration: 0.8,
                        ease: [0.34, 1.56, 0.64, 1],
                        delay: 0.1
                      }}
                    >
                      S
                    </motion.span>
                  </motion.span>
                  
                  {/* Shimmer effect overlay */}
                  <motion.div
                    className="absolute inset-0 overflow-hidden pointer-events-none"
                    style={{
                      maskImage: 'linear-gradient(to right, transparent, black, transparent)',
                    }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                      animate={{
                        x: isLogoHovered ? ['-200%', '200%'] : '-200%',
                      }}
                      transition={{
                        duration: 1,
                        ease: "easeInOut",
                      }}
                    />
                  </motion.div>
                </div>
              </motion.button>

              {/* Right Section - About & Contact */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div 
                    className="absolute left-[calc(50%+80px)] flex items-center gap-4"
                    initial={{ opacity: 0, x: -30, scale: 0.9 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: -30, scale: 0.9 }}
                    transition={{ 
                      duration: 0.4, 
                      ease: [0.34, 1.56, 0.64, 1],
                      opacity: { duration: 0.2 }
                    }}
                  >
                    <motion.button
                      onClick={() => { navigate('/about'); setIsMenuOpen(false); }}
                      className="text-gray-600 text-sm uppercase tracking-wider relative group whitespace-nowrap"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="relative z-10 transition-colors duration-300 group-hover:text-gray-900">
                        About
                      </span>
                      <motion.div
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#000000] to-[#FF6B35]"
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.button>

                    <motion.button
                      onClick={() => { navigate('/contact'); setIsMenuOpen(false); }}
                      className="text-gray-600 text-sm uppercase tracking-wider relative group whitespace-nowrap"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="relative z-10 transition-colors duration-300 group-hover:text-gray-900">
                        Contact
                      </span>
                      <motion.div
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#000000] to-[#FF6B35]"
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </motion.nav>
    </>
  );
}
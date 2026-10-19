import { Button } from './ui/button';
import { motion } from 'motion/react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ScrollReveal } from './ScrollReveal';
import { CircularText } from './CircularText';

export function Hero() {
  const navigate = useNavigate();
  
  const scrollToContact = () => {
    navigate('/contact');
  };

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (!element) return;
    
    // Get the element's position
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - 100; // 100px offset for better viewing
    
    // Smooth scroll to the position
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-8 px-4">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1758873268663-5a362616b5a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGFnZW5jeSUyMHRlYW0lMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYyNDQwMDg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Creative workspace"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#000000]/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full py-12 text-center">
        <div className="space-y-4 mb-6">
          <ScrollReveal delay={0.2}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white max-w-5xl mx-auto leading-tight px-4">
              We Grow Brands That People Remember
            </h1>
          </ScrollReveal>

          {/* Animated Words - Premium Effect */}
          <div className="py-2 sm:py-3 md:py-4">
            <CircularText />
          </div>
          
          <ScrollReveal delay={0.4}>
            <p className="text-lg sm:text-xl text-[#FFFFFF]/90 max-w-2xl mx-auto pt-2 px-4">
              Creative digital marketing solutions tailored for small to premium brands. 
              From strategy to execution, we make your brand stand out.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.6}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6 px-4">
              <Button 
                size="lg"
                onClick={scrollToContact}
                className="bg-[#FFFFFF] text-[#000000] hover:bg-[#FFFFFF]/90 px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg group w-full sm:w-auto"
              >
                Let's Grow Together
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={() => navigate('/pricing')}
                className="border-2 border-[#FFFFFF] text-[#FFFFFF] hover:bg-[#FFFFFF] hover:text-[#000000] px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg bg-transparent w-full sm:w-auto"
              >
                View Our Plans
              </Button>
            </div>
          </ScrollReveal>

          {/* Scroll Indicator - Positioned below buttons */}
          <ScrollReveal delay={0.8}>
            <div className="flex justify-center mt-6 sm:mt-8">
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                onClick={scrollToAbout}
                className="cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center hover:border-white transition-colors">
                  <div className="w-1.5 h-3 bg-white/50 rounded-full mt-2"></div>
                </div>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
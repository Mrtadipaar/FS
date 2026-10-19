import { motion } from 'motion/react';
import { Button } from './ui/button';
import { ArrowRight, Instagram, Film, Palette, TrendingUp, Target, Users } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ImageWithFallback } from './figma/ImageWithFallback';

const services = [
  {
    icon: Instagram,
    title: 'Social Media Management',
    description: 'Full-service Instagram, Facebook & LinkedIn management with daily posting and engagement.',
    color: '#E1306C',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMG1hcmtldGluZ3xlbnwxfHx8fDE3NjI0MjQwMTJ8MA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    icon: Film,
    title: 'Content Creation & Reels',
    description: 'Eye-catching posts, trending reels, engaging stories, and custom designs.',
    color: '#FF6B35',
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMGVkaXRpbmclMjBjcmVhdGl2ZXxlbnwxfHx8fDE3NjI0NTgxMjF8MA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    icon: Palette,
    title: 'Website Designing',
    description: 'Modern, responsive & high-converting websites that represent your brand perfectly.',
    color: '#6366F1',
    image: 'https://images.unsplash.com/photo-1677469684112-5dfb3aa4d3df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWJzaXRlJTIwZGVzaWdufGVufDF8fHx8MTc2MjM0MTQ5MHww&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    icon: TrendingUp,
    title: 'SEO & SEM',
    description: 'Boost your visibility on search engines with comprehensive optimization strategies.',
    color: '#10B981',
    image: 'https://images.unsplash.com/photo-1593437955835-fc8c51725430?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW8lMjBzZWFyY2glMjBhbmFseXRpY3N8ZW58MXx8fHwxNzYyNDU4MTIxfDA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    icon: TrendingUp,
    title: 'Paid Promotions',
    description: 'Strategic Meta & Google Ads campaigns that maximize ROI and drive results.',
    color: '#4285F4',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwYWR2ZXJ0aXNpbmd8ZW58MXx8fHwxNzYyNDUwNzYzfDA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    icon: Target,
    title: 'Google My Business',
    description: 'Local SEO & business optimization to attract local customers and dominate search.',
    color: '#EA4335',
    image: 'https://images.unsplash.com/photo-1726066012699-1c843dad5fd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb29nbGUlMjBidXNpbmVzcyUyMHByb2ZpbGV8ZW58MXx8fHwxNzYyNTQ5MTc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    icon: Palette,
    title: 'Brand Strategy & Identity',
    description: 'Build a brand people remember with cohesive identity and strategic positioning.',
    color: '#D4A574',
    image: 'https://images.unsplash.com/photo-1542744095-291d1f67b221?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGRlc2lnbnxlbnwxfHx8fDE3NjI0NTgxMjF8MA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    icon: Users,
    title: 'Lead Generation Campaigns',
    description: 'Turn audience into customers with targeted campaigns and lead nurturing.',
    color: '#00D9FF',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWFkJTIwZ2VuZXJhdGlvbnxlbnwxfHx8fDE3NjI0NTgxMjF8MA&ixlib=rb-4.1.0&q=80&w=1080'
  },
];

export function Services() {
  const [activeService, setActiveService] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const navigate = useNavigate();

  const handleServiceClick = (index: number) => {
    // Store the service index in sessionStorage
    sessionStorage.setItem('scrollToService', index.toString());
    // Navigate to services page
    navigate('/services');
  };

  const handleViewAllClick = () => {
    // Navigate to services page
    navigate('/services');
  };

  return (
    <section id="services" className="py-20 bg-[#0E0E0E] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 opacity-0 animate-[fadeInUp_0.8s_ease-out_forwards]">
          <span className="text-gray-500 tracking-wider mb-4 block">
            <span className="text-[#FF6B35]">//</span>
            <span className="ml-3 text-[#E6E6E6]" style={{ letterSpacing: '0.3em' }}>OUR SERVICES</span>
          </span>
        </div>

        {/* Split Screen Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side - Dynamic Image */}
          <div className="relative h-[500px] lg:h-[600px] rounded-2xl overflow-hidden bg-black/50 opacity-0 animate-[fadeInLeft_1s_ease-out_0.3s_forwards]">
            {services.map((service, index) => (
              <div
                key={index}
                className="absolute inset-0 transition-all duration-700 ease-in-out"
                style={{ 
                  opacity: activeService === index ? 1 : 0,
                  transform: activeService === index ? 'scale(1)' : 'scale(1.05)',
                }}
              >
                <ImageWithFallback
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                {/* Service Title Overlay on Image */}
                <div className="absolute bottom-8 left-8 right-8">
                  <h4 
                    className="text-white text-3xl lg:text-4xl uppercase tracking-tight transition-all duration-500"
                    style={{ 
                      fontFamily: '"Neue Haas Grotesk Display Pro", "Bebas Neue", "Arial Black", sans-serif',
                      fontWeight: 700,
                      opacity: activeService === index ? 1 : 0,
                      transform: activeService === index ? 'translateY(0)' : 'translateY(20px)',
                    }}
                  >
                    {service.title}
                  </h4>
                </div>
              </div>
            ))}
            
            {/* Glow Effect - Simplified */}
            <div 
              className="absolute -inset-2 bg-gradient-to-r from-[#00BFD6]/20 to-[#FF7A00]/20 blur-xl transition-opacity duration-500"
              style={{ opacity: isHovering ? 0.3 : 0 }}
            ></div>
          </div>

          {/* Right Side - Services List */}
          <div className="space-y-2">
            {services.map((service, index) => (
              <div
                key={index}
                className="relative group cursor-pointer py-6 border-b border-white/10 transition-all duration-300 opacity-0 animate-[fadeInRight_0.8s_ease-out_forwards]"
                style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                onMouseEnter={() => {
                  setActiveService(index);
                  setIsHovering(true);
                }}
                onMouseLeave={() => setIsHovering(false)}
                onClick={() => handleServiceClick(index)}
              >
                {/* Number Badge */}
                <div 
                  className="absolute -left-2 top-1/2 -translate-y-1/2 text-[#00BFD6] transition-all duration-500"
                  style={{
                    fontSize: '3rem',
                    fontWeight: 900,
                    opacity: activeService === index ? 0.15 : 0,
                    transform: activeService === index ? 'translateX(0) translateY(-50%)' : 'translateX(-20px) translateY(-50%)',
                  }}
                >
                  {String(index + 1).padStart(2, '0')}
                </div>

                {/* Service Title */}
                <h3 
                  className="text-2xl sm:text-3xl lg:text-4xl transition-all duration-500 uppercase tracking-tight relative z-10"
                  style={{ 
                    fontFamily: '"Neue Haas Grotesk Display Pro", "Bebas Neue", "Arial Black", "Poppins", sans-serif',
                    fontWeight: 700,
                    color: activeService === index ? '#00BFD6' : '#E6E6E6',
                    transform: activeService === index ? 'translateX(8px)' : 'translateX(0)',
                    textShadow: activeService === index ? '0 0 30px rgba(0, 191, 214, 0.3)' : 'none',
                  }}
                >
                  {service.title}
                </h3>

                {/* Animated Line - Bottom */}
                <div 
                  className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#00BFD6] to-[#FF7A00] transition-all duration-700 ease-out"
                  style={{
                    width: activeService === index ? '100%' : '0%',
                    opacity: activeService === index ? 1 : 0,
                  }}
                ></div>

                {/* Animated Line - Top (subtle) */}
                <div 
                  className="absolute top-0 right-0 h-[1px] bg-[#00BFD6] transition-all duration-500 ease-out delay-100"
                  style={{
                    width: activeService === index ? '30%' : '0%',
                    opacity: activeService === index ? 0.5 : 0,
                  }}
                ></div>

                {/* Hover Background Gradient */}
                <div 
                  className="absolute inset-0 bg-gradient-to-r from-[#00BFD6]/5 to-transparent transition-opacity duration-500 -z-0"
                  style={{
                    opacity: activeService === index ? 1 : 0,
                  }}
                ></div>
              </div>
            ))}

            {/* View All Services Button */}
            <div className="pt-8 opacity-0 animate-[fadeInUp_0.8s_ease-out_1.2s_forwards]">
              <button 
                className="group relative inline-flex items-center gap-3 px-8 py-4 border-2 border-[#FF7A00] text-white uppercase tracking-wider transition-all duration-500 hover:bg-[#FF7A00] hover:text-white hover:scale-105 hover:shadow-[0_0_30px_rgba(255,122,0,0.5)] overflow-hidden"
                style={{ 
                  fontFamily: '"Neue Haas Grotesk Display Pro", "Bebas Neue", "Poppins", sans-serif',
                  fontWeight: 600,
                  letterSpacing: '0.1em'
                }}
                onClick={handleViewAllClick}
              >
                {/* Button Shine Effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                
                <span className="relative z-10">View All Services</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-2 transition-transform duration-500" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Keyframes */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
}
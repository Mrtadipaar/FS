import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion, useScroll, useTransform } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';

export function About() {
  const navigate = useNavigate();
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section ref={sectionRef} id="about" className="relative bg-[#000000] py-20 sm:py-32 overflow-hidden">
      
      {/* Animated background gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px]"
          animate={{
            y: [0, 50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-pink-500/10 rounded-full blur-[120px]"
          animate={{
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Hero Section */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-white/30" />
              <span className="text-sm text-white/50 uppercase tracking-[0.25em]">Who We Are</span>
            </div>
            
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white mb-8 leading-[1.1]" style={{ fontWeight: 900 }}>
              We Create Digital
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/40 to-white/80">
                Experiences
              </span>
            </h2>
            
            <p className="text-xl sm:text-2xl text-white/60 leading-relaxed mb-10 max-w-2xl">
              A creative digital marketing studio based in India, transforming brands through 
              strategic creativity and measurable results.
            </p>

            <motion.button
              onClick={() => navigate('/about')}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full hover:bg-white/90 transition-colors"
              style={{ fontWeight: 600 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Discover More</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>

        {/* Image + Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          
          {/* Image */}
          <motion.div
            style={{ y }}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative group">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-white/5">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1542744095-291d1f67b221?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
                  alt="Fynest Studio"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              
              {/* Floating label */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-black/60 backdrop-blur-2xl border border-white/10 rounded-2xl p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-white/60 mb-1">Since</div>
                      <div className="text-3xl text-white" style={{ fontWeight: 700 }}>2023</div>
                    </div>
                    <div className="w-px h-12 bg-white/20" />
                    <div>
                      <div className="text-sm text-white/60 mb-1">Brands</div>
                      <div className="text-3xl text-white" style={{ fontWeight: 700 }}>10+</div>
                    </div>
                    <div className="w-px h-12 bg-white/20" />
                    <div>
                      <div className="text-sm text-white/60 mb-1">Retention</div>
                      <div className="text-3xl text-white" style={{ fontWeight: 700 }}>95%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl sm:text-4xl text-white mb-6 leading-tight" style={{ fontWeight: 700 }}>
                Full-Service Digital Marketing
              </h3>
              <div className="space-y-4 text-lg text-white/70 leading-relaxed">
                <p>
                  We offer complete digital marketing solutions—from social media management 
                  to paid advertising, content creation to brand strategy.
                </p>
                <p>
                  Our data-driven approach ensures every campaign delivers real, 
                  measurable results for your business.
                </p>
              </div>
            </div>

            {/* Simple feature list */}
            <div className="space-y-4">
              {[
                'Social media management across all platforms',
                'Creative content & viral campaigns',
                'Strategic paid advertising (Meta, Google)',
                'Brand building & market positioning',
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-4 group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-white/40 group-hover:bg-white transition-colors" />
                  <span className="text-white/70 group-hover:text-white transition-colors">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="border-t border-white/10 pt-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '10+', label: 'Happy Clients' },
              { value: '5M+', label: 'Content Reach' },
              { value: '50+', label: 'Projects Done' },
              { value: '95%', label: 'Retention Rate' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="text-center group"
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl sm:text-5xl text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all" style={{ fontWeight: 800 }}>
                  {stat.value}
                </div>
                <div className="text-sm text-white/50 uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
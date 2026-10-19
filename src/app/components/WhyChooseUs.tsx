import { BarChart3, Headphones, Boxes, FileText } from 'lucide-react';
import { ScrollReveal, ScrollRevealStagger, staggerItemVariants } from './ScrollReveal';
import { motion } from 'framer-motion';

const reasons = [
  {
    icon: BarChart3,
    title: 'Data-Driven Growth Strategies',
    description: 'We don\'t just post content – we analyze, optimize, and grow your brand using real insights and metrics.',
  },
  {
    icon: Headphones,
    title: 'Dedicated Account Managers',
    description: 'Get a personal point of contact who understands your business and is always available to help.',
  },
  {
    icon: Boxes,
    title: 'Customized Plans for Every Size',
    description: 'Whether you\'re a startup or an established brand, we have flexible plans that fit your needs and budget.',
  },
  {
    icon: FileText,
    title: 'Transparent Communication',
    description: 'Monthly performance reports, regular updates, and complete transparency in everything we do.',
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-[#000000] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section - Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Left Column */}
          <ScrollReveal>
            <div>
              <span className="text-white/60 tracking-wider mb-4 block">
                <span className="text-[#FF6B35]">//</span>
                <span className="ml-3 text-white" style={{ letterSpacing: '0.3em' }}>WHY CHOOSE US</span>
              </span>
              <h2 className="text-4xl sm:text-5xl mb-8 text-white uppercase tracking-tight">
                MEET YOUR MARKETING SECRET WEAPON
              </h2>
              
              {/* Decorative Dots */}
              <div className="flex gap-3 mb-8">
                <div className="w-2 h-2 rounded-full bg-[#FF6B35]"></div>
                <div className="w-2 h-2 rounded-full bg-[#FF6B35]"></div>
                <div className="w-2 h-2 rounded-full bg-[#FF6B35]"></div>
                <div className="w-2 h-2 rounded-full bg-[#FF6B35]"></div>
              </div>
              
              <p className="text-lg text-white/80 leading-relaxed">
                We are a multicultural, diverse team of{' '}
                <span className="text-[#D4A574]">creative digital marketing experts</span>
                {' '}who take aim at your targets through strategic creativity powered by data-informed decision making.
              </p>
            </div>
          </ScrollReveal>
          
          {/* Right Column */}
          <ScrollReveal delay={0.2}>
            <div className="flex items-center">
              <p className="text-lg text-white/80 leading-relaxed">
                We help organizations solve capacity and capability challenges in their revenue operation programs. Your success is our success.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Reasons Grid */}
        <ScrollRevealStagger staggerDelay={0.15} className="grid md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div 
                key={index}
                variants={staggerItemVariants}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-8 hover:bg-white/10 transition-all duration-300 border border-white/10"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-lg flex-shrink-0">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl mb-2 text-white">
                      {reason.title}
                    </h3>
                    <p className="text-white/70">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </ScrollRevealStagger>
      </div>
    </section>
  );
}
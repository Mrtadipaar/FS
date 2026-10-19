import { Check, X, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardHeader, CardContent } from './ui/card';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ScrollReveal, ScrollRevealStagger, staggerItemVariants } from './ScrollReveal';

const plans = [
  {
    name: 'STARTER',
    price: '8K',
    period: '/month',
    description: 'Perfect for small businesses looking to build an online presence',
    bestFor: 'Small Businesses',
    features: [
      '5 reels per month',
      '1 content shoot per month',
      '8 stories per month',
      'Full platform management (Instagram + Facebook)',
      'Post boosting & promotion',
    ],
    notIncluded: [
      'Printed materials',
      'Performance reports',
    ],
    popular: false,
    gradient: 'from-gray-50 to-white',
    borderGradient: 'from-gray-400 to-gray-500',
  },
  {
    name: 'GROWTH',
    price: '15K',
    period: '/month',
    description: 'Ideal for growing brands that want to increase engagement and visibility',
    bestFor: 'Growing Brands',
    features: [
      '8 reels per month',
      '2 content shoots per month',
      '10 stories per month',
      'Full platform management (Instagram + Facebook)',
      'Monthly performance report + strategy suggestions',
    ],
    notIncluded: [],
    popular: true,
    gradient: 'from-orange-50 to-white',
    borderGradient: 'from-purple-500 via-pink-500 to-orange-500',
  },
  {
    name: 'PREMIUM',
    price: '23K',
    period: '/month',
    description: 'Best for established brands aiming for strong online growth and leads',
    bestFor: 'Enterprise Level',
    features: [
      '12 reels per month',
      '3 content shoots per month',
      '12 stories per month',
      'Full management of 3 platforms (Insta + FB + LinkedIn)',
      'Dedicated account manager',
      'Lead generation campaigns',
      'SEO optimization',
    ],
    notIncluded: [],
    popular: false,
    gradient: 'from-blue-50 to-white',
    borderGradient: 'from-blue-400 to-blue-600',
  },
];

export function PlansPreview() {
  const navigate = useNavigate();

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-0 left-0 w-full h-full" 
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)',
            backgroundSize: '48px 48px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-block px-6 py-2 rounded-full border border-black/10 bg-black/5 text-black/60 uppercase tracking-[0.3em] text-sm mb-6"
            >
              Our Plans
            </motion.span>
            
            <h2 className="text-4xl sm:text-5xl text-gray-900 mb-6">
              Choose Your Growth Path
            </h2>
            <p className="text-xl text-gray-600">
              Transparent pricing with no hidden fees. Pick a plan that matches your ambitions.
            </p>
          </div>
        </ScrollReveal>

        <ScrollRevealStagger staggerDelay={0.15} className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <motion.div 
              key={index} 
              variants={staggerItemVariants}
              whileHover={{ y: -12 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative h-full">
                {/* Gradient border for popular plan */}
                {plan.popular && (
                  <div className={`absolute -inset-[2px] bg-gradient-to-r ${plan.borderGradient} rounded-3xl opacity-100`} />
                )}
                
                <Card 
                  className={`relative h-full overflow-hidden rounded-3xl transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-white shadow-2xl border-0' 
                      : 'border-2 border-gray-200 hover:border-gray-300 hover:shadow-xl'
                  }`}
                >
                  {/* Most Popular Badge */}
                  {plan.popular && (
                    <div className="absolute top-0 left-0 right-0 flex justify-center z-20">
                      <motion.div 
                        className="bg-gradient-to-r from-[#FF4B2B] to-[#FF416C] text-white px-8 py-2.5 rounded-xl text-sm shadow-2xl flex items-center gap-2.5 -translate-y-3"
                        style={{ 
                          fontWeight: 600,
                          fontSize: '0.85rem',
                          filter: 'drop-shadow(0 4px 20px rgba(255, 65, 108, 0.5))',
                        }}
                        whileHover={{ 
                          scale: 1.05,
                          filter: 'drop-shadow(0 6px 25px rgba(255, 65, 108, 0.7))',
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <Sparkles className="w-4 h-4" />
                        Most Popular
                      </motion.div>
                    </div>
                  )}
                  
                  <CardHeader className={`text-center pb-6 ${plan.popular ? 'pt-12' : 'pt-8'}`}>
                    {/* Best For Badge */}
                    <div className={`inline-block px-4 py-1.5 rounded-full text-sm mb-6 ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-orange-500/10 text-gray-700 border border-purple-200'
                        : 'bg-gray-100 text-gray-700'
                    }`}>
                      {plan.bestFor}
                    </div>
                    
                    {/* Plan Name */}
                    <h3 className="text-3xl text-gray-900 mb-4" style={{ fontWeight: 900 }}>
                      {plan.name}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-600 text-base leading-relaxed px-4">
                      {plan.description}
                    </p>
                  </CardHeader>

                  {/* Divider */}
                  <div className="px-8">
                    <div className={`h-px ${plan.popular ? 'bg-gradient-to-r from-transparent via-purple-300 to-transparent' : 'bg-gray-200'}`} />
                  </div>

                  <CardContent className="pt-8 pb-8 px-8">
                    {/* Features */}
                    <div className="space-y-4 mb-8">
                      {plan.features.map((feature, idx) => (
                        <motion.div 
                          key={idx} 
                          className="flex items-start gap-3"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: idx * 0.1 }}
                        >
                          <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                            plan.popular 
                              ? 'bg-gradient-to-r from-purple-500 to-pink-500' 
                              : 'bg-green-500'
                          }`}>
                            <CheckCircle2 className="h-3 w-3 text-white" />
                          </div>
                          <span className="text-gray-700 leading-relaxed">{feature}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Not Included */}
                    {plan.notIncluded.length > 0 && (
                      <div className="space-y-4 mb-8">
                        {plan.notIncluded.map((feature, idx) => (
                          <motion.div 
                            key={idx} 
                            className="flex items-start gap-3"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: idx * 0.1 }}
                          >
                            <div className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 bg-red-500">
                              <X className="h-3 w-3 text-white" />
                            </div>
                            <span className="text-gray-500 leading-relaxed line-through">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    )}

                    {/* CTA Button */}
                    <Button 
                      onClick={() => navigate('/pricing')}
                      className={`w-full h-12 text-base relative overflow-hidden group ${
                        plan.popular
                          ? 'bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:opacity-90 text-white border-0'
                          : 'bg-black hover:bg-gray-800 text-white'
                      }`}
                      style={{ fontWeight: 700 }}
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        View Full Details
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                      
                      {/* Shine effect on hover */}
                      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </ScrollRevealStagger>

        <ScrollReveal delay={0.4}>
          <div className="text-center">
            <p className="text-gray-600 mb-6 text-lg">
              Need something more tailored to your business?
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="outline"
                size="lg"
                onClick={() => navigate('/pricing')}
                className="border-2 border-[#000000] text-[#000000] hover:bg-[#000000] hover:text-[#FFFFFF] px-8 h-14 text-base rounded-full group"
                style={{ fontWeight: 700 }}
              >
                View All Pricing Options
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
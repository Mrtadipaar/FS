import { ArrowRight, Instagram, Film, TrendingUp, Palette, Users, CheckCircle2, Sparkles, Target, Zap, ArrowUpRight, Minus } from 'lucide-react';
import { Button } from './ui/button';
import { ScrollReveal, ScrollRevealStagger, staggerItemVariants } from './ScrollReveal';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { SEO } from './SEO';

const services = [
  {
    title: 'Social Media Management',
    subtitle: 'Full-Service Instagram, Facebook & LinkedIn Management',
    description: 'We handle everything from content planning to daily posting, engagement, and community building. Your social presence, fully managed.',
    features: [
      'Daily content posting & scheduling',
      'Community engagement & DM management',
      'Hashtag research & optimization',
      'Monthly analytics & reporting',
      'Profile optimization',
    ],
    icon: Instagram,
    color: '#E1306C',
    gradient: 'from-pink-500 via-rose-500 to-purple-600',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMG1hcmtldGluZ3xlbnwxfHx8fDE3NjI0MjQwMTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Content Creation & Reels',
    subtitle: 'Scroll-Stopping Content That Converts',
    description: 'Eye-catching posts, trending reels, engaging stories, and custom designs that make your brand unforgettable.',
    features: [
      'Custom-designed posts & carousels',
      'Viral-worthy reel editing',
      'Instagram & Facebook stories',
      'Trend research & implementation',
      'Flyers & marketing materials',
    ],
    icon: Film,
    color: '#FF6B35',
    gradient: 'from-orange-500 via-red-500 to-pink-600',
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMGVkaXRpbmclMjBjcmVhdGl2ZXxlbnwxfHx8fDE3NjI0NTgxMjF8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Website Designing',
    subtitle: 'Modern, Responsive & High-Converting Websites',
    description: 'Beautiful, user-friendly websites that represent your brand perfectly and drive conversions.',
    features: [
      'Custom website design & development',
      'Mobile-responsive layouts',
      'SEO-friendly architecture',
      'E-commerce solutions',
      'Website maintenance & updates',
    ],
    icon: Palette,
    color: '#6366F1',
    gradient: 'from-indigo-500 via-purple-500 to-pink-600',
    image: 'https://images.unsplash.com/photo-1677469684112-5dfb3aa4d3df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWJzaXRlJTIwZGVzaWdufGVufDF8fHx8MTc2MjM0MTQ5MHww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'SEO & SEM',
    subtitle: 'Boost Your Visibility on Search Engines',
    description: 'Comprehensive search engine optimization and marketing strategies that put your business on top of search results.',
    features: [
      'Keyword research & optimization',
      'On-page & technical SEO',
      'Link building strategies',
      'Search engine marketing campaigns',
      'Monthly SEO reports & rankings',
    ],
    icon: TrendingUp,
    color: '#10B981',
    gradient: 'from-emerald-500 via-green-500 to-teal-600',
    image: 'https://images.unsplash.com/photo-1593437955835-fc8c51725430?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW8lMjBzZWFyY2glMjBhbmFseXRpY3N8ZW58MXx8fHwxNzYyNDU4MTIxfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Paid Promotions',
    subtitle: 'Strategic Ad Campaigns That Drive Results',
    description: 'Data-driven Meta & Google Ads that maximize ROI and bring qualified leads to your business.',
    features: [
      'Facebook & Instagram Ads',
      'Google Ads campaigns',
      'Audience targeting & segmentation',
      'A/B testing & optimization',
      'Conversion tracking & reporting',
    ],
    icon: TrendingUp,
    color: '#4285F4',
    gradient: 'from-blue-500 via-indigo-500 to-purple-600',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwYWR2ZXJ0aXNpbmd8ZW58MXx8fHwxNzYyNDUwNzYzfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Google My Business',
    subtitle: 'Local SEO & Business Optimization',
    description: 'Optimize your Google Business Profile to attract local customers and dominate local search results.',
    features: [
      'Complete profile optimization',
      'Review management & responses',
      'Regular posts & updates',
      'Local SEO strategies',
      'Performance tracking & insights',
    ],
    icon: Target,
    color: '#EA4335',
    gradient: 'from-red-500 via-orange-500 to-yellow-600',
    image: 'https://images.unsplash.com/photo-1726066012699-1c843dad5fd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb29nbGUlMjBidXNpbmVzcyUyMHByb2ZpbGV8ZW58MXx8fHwxNzYyNTQ5MTc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    title: 'Brand Strategy & Identity',
    subtitle: 'Build a Brand People Remember',
    description: 'From visual identity to strategic positioning, we create cohesive brands that stand out in the market.',
    features: [
      'Brand identity development',
      'Logo & visual design system',
      'Brand voice & messaging',
      'Competitor analysis',
      'Market positioning strategy',
    ],
    icon: Palette,
    color: '#D4A574',
    gradient: 'from-amber-500 via-orange-500 to-red-500',
    image: 'https://images.unsplash.com/photo-1542744095-291d1f67b221?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGRlc2lnbnxlbnwxfHx8fDE3NjI0NTgxMjF8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Lead Generation Campaigns',
    subtitle: 'Turn Audience into Customers',
    description: 'Targeted campaigns designed to capture quality leads and grow your customer base effectively.',
    features: [
      'Landing page optimization',
      'Lead magnet creation',
      'Email capture campaigns',
      'CRM integration',
      'Lead nurturing strategies',
    ],
    icon: Users,
    color: '#00D9FF',
    gradient: 'from-cyan-500 via-teal-500 to-emerald-600',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWFkJTIwZ2VuZXJhdGlvbnxlbnwxfHx8fDE3NjI0NTgxMjF8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

const stats = [
  { value: '10+', label: 'Brands Served', icon: Sparkles },
  { value: '5M+', label: 'Content Reach', icon: Target },
  { value: '95%', label: 'Client Retention', icon: Zap },
];

export function ServicesPage() {
  const [activeService, setActiveService] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, 100]);

  // Check if we need to scroll to a specific service
  useEffect(() => {
    const scrollToServiceIndex = sessionStorage.getItem('scrollToService');
    if (scrollToServiceIndex !== null) {
      const index = parseInt(scrollToServiceIndex, 10);
      sessionStorage.removeItem('scrollToService');
      
      // Wait for the page to render
      setTimeout(() => {
        const element = document.getElementById(`service-detail-${index}`);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 500);
    }
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Services Page Schema
  const servicesSchema = [
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "itemListElement": services.map((service, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "Service",
          "name": service.title,
          "description": service.description,
          "provider": {
            "@type": "Organization",
            "name": "FynestStudio"
          }
        }
      }))
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://fyneststudio.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Services",
          "item": "https://fyneststudio.com/services"
        }
      ]
    }
  ];

  return (
    <>
      <SEO
        title="Digital Marketing Services in Surat - Social Media, SEO, Website Design | FynestStudio"
        description="Complete digital marketing services in Surat, Gujarat. Expert social media management, SEO services, website design, Google Ads, branding & lead generation. Get your free consultation today!"
        keywords="digital marketing services surat, social media marketing surat, seo services surat, website design surat, google ads surat, content creation surat, brand strategy surat, lead generation surat, digital marketing agency gujarat, instagram marketing surat, facebook marketing surat"
        canonical="/services"
        schema={servicesSchema}
      />
      
      <div ref={containerRef} className="bg-[#000000] min-h-screen">
        {/* Hero Section - Ultra Modern */}
        <motion.section 
          style={{ opacity: heroOpacity, y: heroY }}
          className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-48 pb-32 relative overflow-hidden"
        >
          {/* Dynamic Gradient Background */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute -top-1/2 -left-1/4 w-[800px] h-[800px] bg-gradient-to-br from-purple-600/20 via-pink-500/20 to-transparent rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                scale: [1.2, 1, 1.2],
                rotate: [0, -90, 0],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute -bottom-1/2 -right-1/4 w-[800px] h-[800px] bg-gradient-to-br from-blue-600/20 via-cyan-500/20 to-transparent rounded-full blur-3xl"
            />
          </div>

          {/* Floating Grid Lines */}
          <div className="absolute inset-0 opacity-[0.03]">
            <div className="absolute inset-0" style={{
              backgroundImage: `
                linear-gradient(to right, white 1px, transparent 1px),
                linear-gradient(to bottom, white 1px, transparent 1px)
              `,
              backgroundSize: '80px 80px'
            }}></div>
          </div>

          <div className="max-w-7xl mx-auto relative z-10 w-full">
            {/* Main Heading */}
            <ScrollReveal delay={0.1}>
              <h1 
                className="uppercase text-[#7A7D80] leading-none tracking-tight mb-32 opacity-60"
                style={{
                  fontFamily: '"Neue Haas Grotesk Display Pro", "Arial Black", "Bebas Neue", "Anton", "League Spartan", "Impact", sans-serif',
                  fontWeight: 900,
                  letterSpacing: '-0.02em',
                  lineHeight: '90%',
                  fontSize: 'clamp(3.5rem, 15vw, 18rem)',
                }}
              >
                Services
              </h1>
            </ScrollReveal>

            <div className="grid lg:grid-cols-[1.2fr_1fr] gap-20 items-start">
              {/* Left Content */}
              <div className="space-y-12">
                <ScrollReveal delay={0.2}>
                  <div className="text-3xl sm:text-4xl md:text-5xl text-white leading-tight">
                    Transform your brand with{' '}
                    <span className="relative inline-block">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] via-[#E1306C] to-[#00D9FF]">
                        digital excellence
                      </span>
                      <motion.div
                        className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#FF6B35] via-[#E1306C] to-[#00D9FF] opacity-30"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                      />
                    </span>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.3}>
                  <p className="text-xl text-gray-400 leading-relaxed max-w-xl">
                    We combine strategy, creativity, and data to deliver measurable results. 
                    From social media management to paid campaigns, we've got you covered.
                  </p>
                </ScrollReveal>

                <ScrollReveal delay={0.4}>
                  <div className="flex flex-wrap gap-4">
                    <Button
                      onClick={scrollToContact}
                      size="lg"
                      className="bg-white text-black hover:bg-gray-100 px-10 py-7 text-lg rounded-full group relative overflow-hidden"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        Start Your Project
                        <ArrowUpRight className="h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </span>
                    </Button>
                    
                    <Button
                      variant="outline"
                      size="lg"
                      onClick={() => {
                        const element = document.getElementById('services-grid');
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                      }}
                      className="border-2 border-white/40 bg-white/5 text-white hover:bg-white/10 hover:border-white/60 px-10 py-7 text-lg rounded-full backdrop-blur-sm transition-all"
                    >
                      Explore Services
                    </Button>
                  </div>
                </ScrollReveal>
              </div>

              {/* Right - Stats with Modern Design */}
              <ScrollRevealStagger staggerDelay={0.1} className="space-y-6">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div 
                      key={index} 
                      variants={staggerItemVariants}
                      whileHover={{ x: 10, scale: 1.02 }}
                      className="relative group"
                    >
                      {/* Glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                      
                      <div className="relative bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-8 group-hover:border-white/20 transition-all">
                        <div className="flex items-center justify-between mb-4">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Icon className="h-6 w-6 text-white" />
                          </div>
                          <ArrowUpRight className="h-5 w-5 text-white/30 group-hover:text-white/60 transition-colors" />
                        </div>
                        <div className="text-5xl text-white mb-2" style={{ fontWeight: 700 }}>{stat.value}</div>
                        <div className="text-sm text-gray-500 uppercase tracking-wider">{stat.label}</div>
                      </div>
                    </motion.div>
                  );
                })}
              </ScrollRevealStagger>
            </div>
          </div>
        </motion.section>

        {/* Services Bento Grid - Ultra Modern */}
        <section id="services-grid" className="py-32 px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-24">
                <motion.div
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#FF6B35] to-[#E1306C] animate-pulse" />
                  <span className="text-gray-400 uppercase tracking-[0.3em] text-sm">What We Offer</span>
                </motion.div>
                
                <h2 className="text-5xl sm:text-6xl md:text-7xl text-white mb-6 leading-tight">
                  Full-Stack Digital <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500">
                    Marketing Services
                  </span>
                </h2>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                  End-to-end solutions tailored to your business goals
                </p>
              </div>
            </ScrollReveal>

            {/* Bento Grid Layout */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => {
                const Icon = service.icon;
                const isLarge = index === 0 || index === 4;
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`${isLarge ? 'md:col-span-2 lg:col-span-2' : ''} group cursor-pointer`}
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                    onClick={() => {
                      setActiveService(index);
                      const element = document.getElementById(`service-detail-${index}`);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    }}
                  >
                    <div className="relative h-full min-h-[400px] rounded-3xl overflow-hidden">
                      {/* Background Image */}
                      <div className="absolute inset-0">
                        <ImageWithFallback
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40" />
                      </div>

                      {/* Gradient Border on Hover */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 mix-blend-overlay`} />

                      {/* Content */}
                      <div className="relative h-full p-8 flex flex-col justify-between">
                        {/* Top */}
                        <div className="flex items-start justify-between">
                          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform`}>
                            <Icon className="h-8 w-8 text-white" />
                          </div>
                          
                          <motion.div
                            animate={{ rotate: hoveredCard === index ? 45 : 0 }}
                            className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:bg-white/20 transition-colors"
                          >
                            <ArrowUpRight className="h-5 w-5 text-white" />
                          </motion.div>
                        </div>

                        {/* Bottom */}
                        <div>
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                          >
                            <div className="text-sm text-white/60 uppercase tracking-wider mb-3">
                              0{index + 1} — Service
                            </div>
                            <h3 className="text-3xl sm:text-4xl text-white mb-4 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all" style={{ fontWeight: 700 }}>
                              {service.title}
                            </h3>
                            <p className="text-gray-300 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              {service.description}
                            </p>
                          </motion.div>
                        </div>
                      </div>

                      {/* Hover Indicator */}
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Detailed Service Sections - Minimalist Modern */}
        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <section
              key={index}
              id={`service-detail-${index}`}
              className="py-32 px-4 sm:px-6 lg:px-8 relative"
            >
              <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-[1fr_1.3fr] gap-20 items-start">
                  {/* Left - Info */}
                  <ScrollReveal delay={0.1}>
                    <div className="lg:sticky lg:top-32 space-y-10">
                      {/* Number & Icon */}
                      <div className="flex items-center gap-6">
                        <div className="text-8xl text-white/5" style={{ fontWeight: 900 }}>
                          0{index + 1}
                        </div>
                        <motion.div
                          whileHover={{ rotate: 180, scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                          className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center`}
                        >
                          <Icon className="h-10 w-10 text-white" />
                        </motion.div>
                      </div>

                      {/* Title */}
                      <div>
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-12 h-px bg-gradient-to-r from-white/50 to-transparent" />
                          <span className="text-white/40 uppercase tracking-wider text-sm">Service</span>
                        </div>
                        
                        <h2 className="text-5xl sm:text-6xl text-white mb-6 leading-tight" style={{ fontWeight: 700 }}>
                          {service.title}
                        </h2>
                        
                        <p className={`text-2xl mb-6 bg-gradient-to-r ${service.gradient} text-transparent bg-clip-text`}>
                          {service.subtitle}
                        </p>
                        
                        <p className="text-lg text-gray-400 leading-relaxed">
                          {service.description}
                        </p>
                      </div>

                      {/* CTA */}
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                          onClick={scrollToContact}
                          className={`bg-gradient-to-r ${service.gradient} hover:opacity-90 text-white px-8 py-6 text-lg rounded-full group w-full`}
                        >
                          Get Started
                          <ArrowUpRight className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </Button>
                      </motion.div>
                    </div>
                  </ScrollReveal>

                  {/* Right - Features & Image */}
                  <ScrollReveal delay={0.2}>
                    <div className="space-y-8">
                      {/* Image Card */}
                      <motion.div 
                        className="relative group rounded-3xl overflow-hidden aspect-[16/10]"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                      >
                        {/* Gradient Border */}
                        <div className={`absolute -inset-[2px] bg-gradient-to-br ${service.gradient} rounded-3xl opacity-50`} />
                        
                        <div className="relative h-full rounded-3xl overflow-hidden">
                          <ImageWithFallback
                            src={service.image}
                            alt={service.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                          
                          {/* Floating Badge */}
                          <div className="absolute top-6 right-6">
                            <div className={`px-6 py-3 rounded-full bg-gradient-to-r ${service.gradient} backdrop-blur-sm text-white text-sm font-semibold`}>
                              Popular Choice
                            </div>
                          </div>
                        </div>
                      </motion.div>

                      {/* Features Grid */}
                      <div className="grid sm:grid-cols-2 gap-4">
                        {service.features.map((feature, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ x: 5 }}
                            className="group/item"
                          >
                            <div className="relative bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl p-6 group-hover/item:border-white/20 transition-all">
                              {/* Gradient on Hover */}
                              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover/item:opacity-5 rounded-2xl transition-opacity`} />
                              
                              <div className="relative flex items-start gap-4">
                                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform`}>
                                  <CheckCircle2 className="h-5 w-5 text-white" />
                                </div>
                                <div>
                                  <p className="text-white leading-relaxed group-hover/item:text-white transition-colors">
                                    {feature}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </ScrollReveal>
                </div>
              </div>

              {/* Divider */}
              {index < services.length - 1 && (
                <div className="max-w-7xl mx-auto mt-32">
                  <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                </div>
              )}
            </section>
          );
        })}
      </div>
    </>
  );
}
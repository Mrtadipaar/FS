import { motion } from 'motion/react';
import { Target, Users, Lightbulb, Award, Heart, Zap, TrendingUp, Sparkles, Rocket, Brain, Palette, BarChart3, ArrowRight, Star } from 'lucide-react';
import { SEO } from './SEO';

export function AboutPage() {
  // About Page Schema
  const aboutSchema = [
    {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "mainEntity": {
        "@type": "Organization",
        "name": "FynestStudio",
        "description": "FynestStudio is a creative digital marketing agency based in Surat, Gujarat, India. We specialize in helping brands grow through strategic social media management, content creation, SEO, and paid advertising.",
        "foundingDate": "2023",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "304 Shilalekh Residency, Opp Vaishali Rowhouse, Pal",
          "addressLocality": "Surat",
          "addressRegion": "Gujarat",
          "postalCode": "395009",
          "addressCountry": "IN"
        }
      }
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
          "name": "About Us",
          "item": "https://fyneststudio.com/about"
        }
      ]
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Passion-Driven',
      description: 'We pour our heart into every project, treating your brand as our own.'
    },
    {
      icon: Lightbulb,
      title: 'Creative Excellence',
      description: 'Innovation and creativity are at the core of everything we create.'
    },
    {
      icon: Users,
      title: 'Client-Centric',
      description: 'Your success is our success. We build lasting partnerships, not just projects.'
    },
    {
      icon: Award,
      title: 'Quality First',
      description: 'We never compromise on quality. Every detail matters to us.'
    }
  ];

  const stats = [
    { number: '10+', label: 'Happy Clients', icon: Users },
    { number: '15+', label: 'Projects Completed', icon: Target },
    { number: '3+', label: 'Years Experience', icon: Award },
    { number: '98%', label: 'Client Satisfaction', icon: Star }
  ];

  return (
    <>
      <SEO
        title="About FynestStudio - Best Digital Marketing Agency in Surat, Gujarat | Our Story"
        description="Learn about FynestStudio, Surat's leading digital marketing agency. Founded in 2023, we specialize in social media management, SEO, website design & brand strategy. Discover our mission, vision & values."
        keywords="about fyneststudio, digital marketing agency surat about, surat marketing company, fyneststudio team, digital marketing experts gujarat, best agency surat, about us fynest studio"
        canonical="/about"
        schema={aboutSchema}
      />
      
      <div className="min-h-screen bg-white">
        {/* Revolutionary Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#000000]">
        {/* Animated Background Grid */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Grid Lines */}
          <svg className="absolute inset-0 w-full h-full opacity-10">
            <defs>
              <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
          
          {/* Gradient Orbs */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-[120px] opacity-20"
            style={{ background: 'radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, transparent 70%)' }}
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-[120px] opacity-20"
            style={{ background: 'radial-gradient(circle, rgba(255, 255, 255, 0.25) 0%, transparent 70%)' }}
            animate={{
              scale: [1.2, 1, 1.2],
              x: [0, -50, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </div>

        {/* Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
          {/* Main Headline with Split Animation */}
          <div className="text-center mb-12 overflow-hidden">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="uppercase mb-4"
              style={{
                fontFamily: '"Neue Haas Grotesk Display Pro", "Arial Black", "Bebas Neue", "Anton", "League Spartan", Impact, sans-serif',
                fontWeight: 900,
                letterSpacing: '-0.02em',
                lineHeight: '90%',
                fontSize: 'clamp(4rem, 12vw, 12rem)',
                color: '#FFFFFF',
              }}
            >
              <span className="block">We Are</span>
              <span className="block text-[#FFFFFF]">
                Fynest Studio
              </span>
            </motion.h1>
            
            {/* Animated Underline */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="h-1 w-32 mx-auto bg-[#FFFFFF] rounded-full"
            />
          </div>

          {/* Subtitle with Typewriter Effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-white/70 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              A creative digital marketing agency crafting
              <span className="text-white"> extraordinary brand experiences </span>
              for ambitious businesses across India
            </p>
          </motion.div>

          {/* Animated Stats with Modern Design */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 1.2 + (index * 0.1),
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: 'rgba(255, 255, 255, 0.08)'
                  }}
                  className="relative group p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm text-center cursor-pointer overflow-hidden"
                >
                  {/* Gradient on hover */}
                  <motion.div
                    className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  
                  <div className="relative z-10">
                    <Icon className="w-8 h-8 mx-auto mb-3 text-white/40 group-hover:text-white/70 transition-colors" />
                    <motion.div 
                      className="text-4xl md:text-5xl mb-2 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent"
                      style={{ fontWeight: 900 }}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ 
                        duration: 0.6, 
                        delay: 1.4 + (index * 0.1),
                        type: "spring"
                      }}
                    >
                      {stat.number}
                    </motion.div>
                    <div className="text-sm text-white/60 uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>

                  {/* Shine effect on hover */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100"
                    initial={false}
                    whileHover={{
                      background: [
                        'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)',
                        'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0) 50%, transparent 100%)',
                      ],
                    }}
                    transition={{ duration: 0.6 }}
                  />
                </motion.div>
              );
            })}
          </motion.div>

          {/* CTA Button with Arrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="text-center mt-16"
          >
            <motion.a
              href="#mission"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#FFFFFF] text-[#000000] hover:bg-[#FFFFFF]/90 uppercase tracking-wider relative overflow-hidden group border-2 border-white"
              style={{ fontWeight: 900 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Discover Our Story</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-5 h-5 relative z-10" />
              </motion.div>
              
              {/* Shine effect */}
              <motion.div
                className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-black/10 to-transparent"
              />
            </motion.a>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-white/40"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
          </motion.div>
        </motion.div>
      </section>

      {/* Mission & Vision - Revolutionary Design */}
      <section id="mission" className="relative py-32 px-6 bg-[#000000] overflow-hidden">
        {/* Floating gradient orbs */}
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 rounded-full blur-[150px] opacity-20"
          style={{ background: 'radial-gradient(circle, rgba(139, 92, 246, 0.6) 0%, transparent 70%)' }}
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 
              className="uppercase mb-4"
              style={{
                fontFamily: '"Neue Haas Grotesk Display Pro", "Arial Black", "Bebas Neue", "Anton", "League Spartan", Impact, sans-serif',
                fontWeight: 900,
                letterSpacing: '-0.02em',
                lineHeight: '90%',
                fontSize: 'clamp(3rem, 8vw, 7rem)',
                color: '#FFFFFF',
                opacity: 0.15,
              }}
            >
              What Drives Us
            </h2>
          </motion.div>

          {/* Mission Card - Large & Immersive */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <div className="relative group">
              {/* Background card */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-pink-600/10 to-orange-600/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
              
              <div className="relative p-12 md:p-16 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden">
                {/* Animated corner accent */}
                <motion.div
                  className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 90, 0],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                <div className="relative z-10">
                  {/* Icon badge */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, type: "spring" }}
                    className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 mb-8 shadow-2xl"
                  >
                    <Target className="w-10 h-10 text-white" />
                  </motion.div>

                  {/* Label */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex items-center gap-3 mb-6"
                  >
                    <div className="h-px w-12 bg-gradient-to-r from-purple-400 to-pink-400" />
                    <span className="text-purple-300 uppercase tracking-[0.3em] text-sm">Our Mission</span>
                  </motion.div>

                  {/* Main content */}
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-4xl md:text-5xl lg:text-6xl text-white mb-8 leading-tight"
                    style={{ fontWeight: 900 }}
                  >
                    Empowering brands through
                    <span className="block mt-2 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                      innovative digital solutions
                    </span>
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-xl text-white/70 leading-relaxed max-w-4xl"
                  >
                    We believe every business deserves to shine online. Our mission is to transform brands with creativity, 
                    strategy, and dedication—delivering results that matter. From startups to premium enterprises, 
                    we're here to make your digital presence unforgettable.
                  </motion.p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Vision Card - Large & Immersive */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative group">
              {/* Background card */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-600/10 via-pink-600/10 to-purple-600/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
              
              <div className="relative p-12 md:p-16 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden">
                {/* Animated corner accent */}
                <motion.div
                  className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-orange-500/20 to-pink-500/20 rounded-full blur-3xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, -90, 0],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                <div className="relative z-10">
                  {/* Icon badge */}
                  <motion.div
                    initial={{ scale: 0, rotate: 180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, type: "spring" }}
                    className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-500 to-pink-500 mb-8 shadow-2xl"
                  >
                    <Zap className="w-10 h-10 text-white" />
                  </motion.div>

                  {/* Label */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex items-center gap-3 mb-6"
                  >
                    <div className="h-px w-12 bg-gradient-to-r from-orange-400 to-pink-400" />
                    <span className="text-orange-300 uppercase tracking-[0.3em] text-sm">Our Vision</span>
                  </motion.div>

                  {/* Main content */}
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-4xl md:text-5xl lg:text-6xl text-white mb-8 leading-tight"
                    style={{ fontWeight: 900 }}
                  >
                    Becoming India's most
                    <span className="block mt-2 bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                      trusted digital partner
                    </span>
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-xl text-white/70 leading-relaxed max-w-4xl"
                  >
                    We envision a future where every brand we touch becomes a market leader. Through creative excellence 
                    and measurable impact, we're redefining what's possible in digital marketing—one success story at a time.
                  </motion.p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values - Revolutionary Grid Design */}
      <section className="relative py-32 px-6 bg-[#000000] overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute top-0 left-0 w-full h-full" 
            style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-block px-6 py-2 rounded-full border border-white/10 bg-white/5 text-white/60 uppercase tracking-[0.3em] text-sm mb-10"
            >
              Core Values
            </motion.span>
            
            <h2 
              className="uppercase mb-6"
              style={{
                fontFamily: '"Neue Haas Grotesk Display Pro", "Arial Black", "Bebas Neue", "Anton", "League Spartan", Impact, sans-serif',
                fontWeight: 900,
                letterSpacing: '-0.02em',
                lineHeight: '90%',
                fontSize: 'clamp(3rem, 8vw, 7rem)',
                color: '#ffffff',
                opacity: 1,
              }}
            >
              What We Stand For
            </h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-400 max-w-2xl mx-auto text-xl"
            >
              The fundamental principles that shape our work and relationships
            </motion.p>
          </motion.div>

          {/* Values Grid - Bento Box Style */}
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              const gradients = [
                { from: 'from-purple-500', to: 'to-blue-600', bg: 'bg-gradient-to-br from-purple-950/30 to-blue-950/30' },
                { from: 'from-pink-500', to: 'to-rose-600', bg: 'bg-gradient-to-br from-pink-950/30 to-rose-950/30' },
                { from: 'from-orange-500', to: 'to-red-600', bg: 'bg-gradient-to-br from-orange-950/30 to-red-950/30' },
                { from: 'from-green-500', to: 'to-emerald-600', bg: 'bg-gradient-to-br from-green-950/30 to-emerald-950/30' }
              ];
              const gradient = gradients[index];

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ 
                    y: -8,
                    boxShadow: '0 30px 80px -15px rgba(255, 255, 255, 0.1)'
                  }}
                  className={`relative p-10 rounded-3xl border border-gray-800 ${gradient.bg} overflow-hidden group cursor-pointer`}
                >
                  {/* Animated gradient overlay */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${gradient.from} ${gradient.to} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`}
                  />

                  <div className="relative z-10">
                    {/* Icon with rotating animation */}
                    <motion.div
                      className={`inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-gradient-to-br ${gradient.from} ${gradient.to} mb-6 shadow-lg`}
                      whileHover={{ 
                        rotate: [0, -10, 10, -10, 0],
                        scale: 1.05 
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className="w-12 h-12 text-white" />
                    </motion.div>

                    {/* Number indicator */}
                    <div className="absolute top-8 right-8 text-8xl text-white opacity-5" style={{ fontWeight: 900 }}>
                      0{index + 1}
                    </div>

                    {/* Content */}
                    <h3 className="text-3xl mb-4 uppercase tracking-tight text-white" style={{ fontWeight: 900 }}>
                      {value.title}
                    </h3>
                    
                    {/* Decorative line */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                      className={`h-1 w-20 bg-gradient-to-r ${gradient.from} ${gradient.to} rounded-full mb-6 origin-left`}
                    />
                    
                    <p className="text-gray-300 leading-relaxed text-lg">
                      {value.description}
                    </p>

                    {/* Decorative corner element */}
                    <motion.div
                      className="absolute bottom-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-20"
                      style={{ background: `linear-gradient(135deg, ${gradient.from}, ${gradient.to})` }}
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.1, 0.2, 0.1],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Fynest Studio - Revolutionary Design */}
      <section className="relative py-32 px-6 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute top-0 left-0 w-full h-full" 
            style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)',
              backgroundSize: '50px 50px'
            }}
          />
        </div>

        <motion.div
          className="absolute top-40 right-40 w-96 h-96 rounded-full blur-[150px] opacity-20"
          style={{ background: 'radial-gradient(circle, rgba(236, 72, 153, 0.4) 0%, transparent 70%)' }}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-block px-6 py-2 rounded-full border border-black/10 bg-black/5 text-black/60 uppercase tracking-[0.3em] text-sm mb-8"
            >
              Why Choose Us
            </motion.span>
            
            <h2 
              className="uppercase mb-8"
              style={{
                fontFamily: '"Neue Haas Grotesk Display Pro", "Arial Black", "Bebas Neue", "Anton", "League Spartan", Impact, sans-serif',
                fontWeight: 900,
                letterSpacing: '-0.02em',
                lineHeight: '90%',
                fontSize: 'clamp(3rem, 10vw, 8rem)',
                color: '#000000',
                opacity: 1,
              }}
            >
              Why Fynest Studio?
            </h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-600 max-w-3xl mx-auto text-xl leading-relaxed"
            >
              We're not just another agency. Here's what makes us the perfect partner for your brand's digital journey.
            </motion.p>
          </motion.div>

          {/* Main Features Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: TrendingUp,
                title: 'Proven Results',
                description: 'Track record of delivering measurable growth and ROI for our clients across industries.',
                stat: '3x',
                statLabel: 'Avg ROI',
                gradient: { from: 'from-purple-500', to: 'to-blue-600', bg: 'bg-gradient-to-br from-purple-50 to-blue-50', border: 'border-purple-200' }
              },
              {
                icon: Sparkles,
                title: 'Creative Excellence',
                description: 'Fresh, innovative strategies that make your brand stand out from the competition.',
                stat: '100%',
                statLabel: 'Original',
                gradient: { from: 'from-pink-500', to: 'to-rose-600', bg: 'bg-gradient-to-br from-pink-50 to-rose-50', border: 'border-pink-200' }
              },
              {
                icon: Users,
                title: 'Dedicated Support',
                description: 'Experienced team committed to your success every step of the way.',
                stat: '24/7',
                statLabel: 'Support',
                gradient: { from: 'from-orange-500', to: 'to-red-600', bg: 'bg-gradient-to-br from-orange-50 to-red-50', border: 'border-orange-200' }
              }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.15 }}
                  whileHover={{ 
                    y: -12,
                    boxShadow: '0 40px 100px -20px rgba(0, 0, 0, 0.25)'
                  }}
                  className={`relative p-10 rounded-3xl border ${item.gradient.border} ${item.gradient.bg} overflow-hidden group cursor-pointer`}
                >
                  {/* Hover gradient overlay */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${item.gradient.from} ${item.gradient.to} opacity-0 group-hover:opacity-[0.05] transition-opacity duration-500`}
                  />

                  <div className="relative z-10">
                    {/* Icon Badge */}
                    <motion.div
                      className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${item.gradient.from} ${item.gradient.to} mb-6 shadow-xl`}
                      whileHover={{ 
                        scale: 1.1,
                        rotate: [0, -5, 5, -5, 0]
                      }}
                      transition={{ duration: 0.4 }}
                    >
                      <Icon className="w-10 h-10 text-white" />
                    </motion.div>

                    {/* Stat Badge - Top Right */}
                    <div className="absolute top-8 right-8 text-right">
                      <motion.div 
                        className={`text-5xl bg-gradient-to-br ${item.gradient.from} ${item.gradient.to} bg-clip-text text-transparent mb-1`}
                        style={{ fontWeight: 900 }}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.15 + 0.3, type: "spring" }}
                      >
                        {item.stat}
                      </motion.div>
                      <div className="text-xs text-gray-500 uppercase tracking-wider">
                        {item.statLabel}
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-3xl mb-4 uppercase tracking-tight text-black" style={{ fontWeight: 900 }}>
                      {item.title}
                    </h3>
                    
                    {/* Decorative line */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
                      className={`h-1 w-20 bg-gradient-to-r ${item.gradient.from} ${item.gradient.to} rounded-full mb-6 origin-left`}
                    />
                    
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {item.description}
                    </p>

                    {/* Decorative corner */}
                    <motion.div
                      className="absolute bottom-0 right-0 w-40 h-40 rounded-full blur-3xl opacity-20"
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.15, 0.25, 0.15],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      style={{ background: `linear-gradient(135deg, ${item.gradient.from}, ${item.gradient.to})` }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Additional Benefits - Compact Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                icon: Brain,
                title: 'Strategic Thinking',
                description: 'Data-driven strategies aligned with your business goals'
              },
              {
                icon: Rocket,
                title: 'Fast Delivery',
                description: 'Quick turnarounds without compromising quality'
              },
              {
                icon: Palette,
                title: 'Creative Design',
                description: 'Stunning visuals that capture attention'
              },
              {
                icon: BarChart3,
                title: 'Transparent Reports',
                description: 'Clear metrics and regular performance updates'
              }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 + (index * 0.1) }}
                  whileHover={{ 
                    scale: 1.05,
                    y: -4
                  }}
                  className="relative p-8 rounded-2xl bg-white border border-gray-200 text-center group cursor-pointer overflow-hidden"
                >
                  {/* Gradient on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />

                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 mb-4 group-hover:from-purple-500 group-hover:to-pink-500 transition-all duration-300"
                    >
                      <Icon className="w-8 h-8 text-gray-700 group-hover:text-white transition-colors duration-300" />
                    </motion.div>
                    
                    <h4 className="text-lg mb-2 uppercase tracking-tight text-black" style={{ fontWeight: 900 }}>
                      {item.title}
                    </h4>
                    
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </div>
    </>
  );
}
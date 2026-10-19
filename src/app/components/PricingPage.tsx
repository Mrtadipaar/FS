import { Briefcase, Rocket, Crown, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { SEO } from './SEO';

const plans = [
  {
    icon: Briefcase,
    name: 'STARTER',
    price: '8,000',
    fullPrice: '₹8,000/Month',
    title: 'STARTER Digital Package',
    description: 'Perfect for small businesses looking to build an online presence. Build consistency and visibility for your brand online with essential social media management.',
    details: 'This package focuses on establishing your brand\'s digital footprint with consistent posting, professional designs, and strategic engagement. Ideal for businesses taking their first steps into social media marketing.',
    features: [
      '5 reels per month',
      '1 content shoot per month',
      '8 stories per month',
      'Including festival posts and all',
      'Strategic hashtag research for better reach',
      '1 custom flyer design',
      'Full platform management (Instagram + Facebook)',
      'Scheduling, posting & engagement support',
      'Post boosting & promotion (ad spend according to client\'s budget)',
    ],
    gradient: 'from-blue-500/20 to-purple-500/20',
    accentColor: 'text-blue-500',
    borderColor: 'border-blue-500/50',
  },
  {
    icon: Rocket,
    name: 'GROWTH',
    price: '15,000',
    fullPrice: '₹15,000/Month',
    title: 'GROWTH Digital Package',
    description: 'Ideal for growing brands that want to increase engagement and visibility. Strengthen your brand identity and grow audience engagement with data-backed strategies.',
    details: 'The growth package includes enhanced content creation, performance tracking, and Google My Business optimization.',
    features: [
      '8 reels per month',
      '2 content shoots per month',
      '10 stories per month',
      'Including festival posts and all',
      'Strategic hashtag research + trend optimization',
      '1 custom flyer design per month',
      'Full platform management (Instagram + Facebook)',
      'Scheduling, posting & engagement management',
      'Post boosting & promotion (ad spend according to client\'s budget)',
      'Monthly performance report + strategy suggestions',
      '2 marketing posters',
      'Google My Business optimization (basic)',
      'Priority customer support',
    ],
    gradient: 'from-orange-500/20 to-red-500/20',
    accentColor: 'text-orange-500',
    borderColor: 'border-orange-500/50',
    popular: true,
  },
  {
    icon: Crown,
    name: 'PREMIUM',
    price: '23,000',
    fullPrice: '₹23,000/Month',
    title: 'PREMIUM Digital Package',
    description: 'Best for established brands aiming for strong online growth, leads, and multi-platform dominance. Maximize brand reach, generate leads, and create a strong digital presence across platforms.',
    details: 'The premium package includes multi-platform management, dedicated account manager, lead generation, and SEO optimization.',
    features: [
      '12 reels per month',
      '3 content shoots per month',
      '12 stories per month',
      'Festival posts included',
      'Strategic hashtag research & trend optimization',
      '3 custom flyer designs per month (for promotions, launches, or events)',
      'Full management of 3 platforms (Instagram + Facebook + LinkedIn)',
      'Daily posting, scheduling & engagement optimization',
      'Post boosting & promotion (ad spend according to client\'s budget)',
      'Dedicated account manager',
      '4 marketing posters',
      'Lead generation campaigns',
      'SEO optimization',
      'Priority customer support',
    ],
    gradient: 'from-purple-500/20 to-pink-500/20',
    accentColor: 'text-purple-500',
    borderColor: 'border-purple-500/50',
  },
];

export function PricingPage() {
  // Pricing Page Schema
  const pricingSchema = [
    {
      "@context": "https://schema.org",
      "@type": "OfferCatalog",
      "name": "FynestStudio Digital Marketing Pricing Packages",
      "description": "Flexible digital marketing packages for businesses in Surat, Gujarat",
      "itemListElement": plans.map((plan, index) => ({
        "@type": "Offer",
        "position": index + 1,
        "itemOffered": {
          "@type": "Service",
          "name": plan.title,
          "description": plan.description,
          "provider": {
            "@type": "Organization",
            "name": "FynestStudio"
          }
        },
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": plan.price,
          "priceCurrency": "INR",
          "billingDuration": "P1M"
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
          "name": "Pricing",
          "item": "https://fyneststudio.com/pricing"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does digital marketing cost in Surat?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "FynestStudio offers three flexible digital marketing packages: STARTER at ₹8,000/month for small businesses, GROWTH at ₹15,000/month for growing brands, and PREMIUM at ₹23,000/month for established businesses. Each package includes social media management, content creation, and platform management."
          }
        },
        {
          "@type": "Question",
          "name": "What's included in the FynestStudio pricing packages?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "All packages include Instagram & Facebook management, reels creation, stories posting, content shoots, flyer designs, hashtag research, scheduling, posting, engagement support, and ad campaign management. Higher tiers include additional platforms, lead generation, SEO optimization, and dedicated account managers."
          }
        },
        {
          "@type": "Question",
          "name": "Which FynestStudio package is best for small businesses?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The STARTER package at ₹8,000/month is perfect for small businesses. It includes 5 reels, 1 content shoot, 8 stories, festival posts, hashtag research, 1 custom flyer, and full Instagram + Facebook management to build your online presence."
          }
        },
        {
          "@type": "Question",
          "name": "Can I customize my digital marketing package?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! FynestStudio offers flexible packages that can be customized based on your specific business needs. Contact us for a free consultation to discuss a tailored solution for your brand."
          }
        }
      ]
    }
  ];

  return (
    <>
      <SEO
        title="Digital Marketing Pricing & Packages in Surat | FynestStudio - ₹8,000 to ₹23,000"
        description="Affordable digital marketing packages in Surat starting at ₹8,000/month. STARTER, GROWTH & PREMIUM plans with social media management, SEO, content creation & more. Get free consultation!"
        keywords="digital marketing pricing surat, social media packages surat, digital marketing cost gujarat, affordable marketing packages, social media management pricing, seo pricing surat, content creation packages, instagram marketing cost, facebook marketing pricing surat, marketing agency rates"
        canonical="/pricing"
        schema={pricingSchema}
      />
      
      <div className="bg-[#000000] min-h-screen overflow-hidden">
        {/* Hero Section */}
        <section className="min-h-[50vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-48 pb-32">
          <motion.div 
            className="w-full mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 
              className="uppercase text-[#7A7D80] leading-none tracking-tight opacity-60" 
              style={{ 
                fontFamily: '"Neue Haas Grotesk Display Pro", "Arial Black", "Bebas Neue", "Anton", "League Spartan", "Impact", sans-serif',
                fontWeight: 900,
                fontSize: 'clamp(3.5rem, 15vw, 18rem)',
                letterSpacing: '-0.02em',
                lineHeight: '90%',
              }}
            >
              Pricing
            </h1>
            <motion.p 
              className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Flexible plans designed to scale with your business. Choose the package that fits your goals.
            </motion.p>
          </motion.div>
        </section>

        {/* Pricing Plans */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32 pt-20 space-y-24 sm:space-y-32">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <motion.div 
                key={index} 
                className="space-y-12 relative"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <motion.div 
                    className="absolute -top-12 left-1/2 -translate-x-1/2 z-10"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                  >
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full text-sm tracking-wider shadow-lg shadow-orange-500/50">
                      MOST POPULAR
                    </div>
                  </motion.div>
                )}

                {/* Top Section - Plan Card and Title */}
                <div className="grid lg:grid-cols-[400px_1fr] gap-8 sm:gap-12 items-start">
                  {/* Left - Plan Card */}
                  <div className="space-y-8">
                    <motion.div 
                      className={`relative bg-gradient-to-br ${plan.gradient} backdrop-blur-xl border ${plan.borderColor} rounded-3xl p-8 sm:p-12 flex flex-col items-start space-y-6 overflow-hidden group cursor-pointer`}
                      whileHover={{ scale: 1.02, y: -5 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Glow effect */}
                      <div className={`absolute -inset-1 bg-gradient-to-r ${plan.gradient} rounded-3xl blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10`}></div>
                      
                      <div className="relative z-10 w-full">
                        <motion.div 
                          className="w-16 h-16 flex items-center justify-center"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <Icon className={`w-12 h-12 ${plan.accentColor} drop-shadow-lg`} strokeWidth={1.5} />
                        </motion.div>
                        <div className="space-y-4 mt-6">
                          <h3 className={`text-2xl ${plan.accentColor} uppercase tracking-wider`}>
                            {plan.name}
                          </h3>
                          <div className="flex items-baseline gap-1 pt-2">
                            <span className="text-gray-400 text-xl">₹</span>
                            <motion.span 
                              className="text-5xl text-white"
                              initial={{ scale: 1 }}
                              whileHover={{ scale: 1.05 }}
                            >
                              {plan.price}
                            </motion.span>
                            <span className="text-gray-400 text-xl">/Mo</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                    
                    {/* Animated Dots indicator */}
                    <div className="flex gap-2 pl-8 sm:pl-12">
                      {[0, 1, 2].map((i) => (
                        <motion.div
                          key={i}
                          className={`w-2 h-2 rounded-full ${i === 0 ? plan.accentColor.replace('text-', 'bg-') : 'bg-gray-700'}`}
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: i * 0.1 }}
                          whileHover={{ scale: 1.5 }}
                        ></motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Right - Title & Price */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white mb-3 leading-tight">
                      {plan.title}
                    </h2>
                    <p className={`text-2xl sm:text-3xl ${plan.accentColor}`}>
                      {plan.fullPrice}
                    </p>
                  </motion.div>
                </div>

                {/* Bottom Section - Description & Features */}
                <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                  {/* Description */}
                  <motion.div 
                    className="space-y-6"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <p className="text-gray-400 leading-relaxed text-base sm:text-lg">
                      {plan.description}
                    </p>
                    <p className="text-gray-500 leading-relaxed text-sm sm:text-base">
                      {plan.details}
                    </p>
                  </motion.div>

                  {/* Features */}
                  <motion.div 
                    className={`relative bg-[#0A0A0A] backdrop-blur-xl border border-gray-800 rounded-3xl p-6 sm:p-10 space-y-5 sm:space-y-6 overflow-hidden group`}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    whileHover={{ borderColor: plan.borderColor.replace('border-', '').replace('/50', '') }}
                  >
                    {/* Subtle gradient overlay on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`}></div>
                    
                    <div className="relative z-10">
                      {plan.features.map((feature, idx) => (
                        <motion.div 
                          key={idx} 
                          className="flex items-start gap-3 group/item py-1"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 0.5 + idx * 0.05 }}
                          whileHover={{ x: 4 }}
                        >
                          <motion.div
                            whileHover={{ scale: 1.2, rotate: 360 }}
                            transition={{ duration: 0.3 }}
                          >
                            <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 flex-shrink-0 mt-0.5" />
                          </motion.div>
                          <span className="text-gray-300 text-sm sm:text-base leading-relaxed group-hover/item:text-white transition-colors duration-200">
                            {feature}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </>
  );
}
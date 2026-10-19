import { Building2, Users, Target, Award, Star, MapPin, Phone, Mail, Clock, CheckCircle } from 'lucide-react';
import { SEO } from './SEO';

export function CompanyProfilePage() {
  // Company Profile Schema
  const profileSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Corporation",
      "name": "FynestStudio",
      "legalName": "FynestStudio",
      "alternateName": ["Fynest Studio", "Finest Studio"],
      "description": "FynestStudio is a premier digital marketing agency headquartered in Surat, Gujarat, India. Established in 2020, FynestStudio has rapidly grown to become one of Surat's most trusted and highly-rated digital marketing service providers.",
      "foundingDate": "2020",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "304 Shilalekh Residency, Opp Vaishali Rowhouse, Pal",
        "addressLocality": "Surat",
        "addressRegion": "Gujarat",
        "postalCode": "395009",
        "addressCountry": "IN"
      },
      "telephone": "+91-8780438587",
      "email": "studiofynest@gmail.com",
      "url": "https://fyneststudio.com",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "48",
        "bestRating": "5",
        "worstRating": "1"
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
          "name": "Company Profile",
          "item": "https://fyneststudio.com/company-profile"
        }
      ]
    }
  ];

  return (
    <>
      <SEO
        title="FynestStudio Company Profile - Top Digital Marketing Agency in Surat, Gujarat | Official Profile"
        description="Detailed company profile of FynestStudio, Surat's top-rated digital marketing agency. Founded 2020, serving 100+ clients across Gujarat with 4.9-star rating. Comprehensive digital marketing services including social media, SEO, website design."
        keywords="fyneststudio company profile, about fyneststudio, digital marketing agency surat profile, company information, fyneststudio details, business profile"
        canonical="/company-profile"
        schema={profileSchema}
      />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative py-24 bg-[#000000] overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
                <Building2 className="w-5 h-5 text-white" />
                <span className="text-white text-sm">Official Company Profile</span>
              </div>
              
              <h1 
                className="uppercase mb-6"
                style={{
                  fontFamily: "'Neue Haas Grotesk Display Pro', 'Arial Black', 'Bebas Neue', 'Anton', 'League Spartan', 'Impact', sans-serif",
                  fontWeight: 900,
                  letterSpacing: '-0.02em',
                  lineHeight: '0.9',
                  fontSize: 'clamp(3rem, 10vw, 8rem)',
                  color: '#4A4D50',
                  opacity: 0.35
                }}
              >
                FynestStudio
              </h1>
              
              <p className="text-2xl text-white mb-4">
                Surat's Top-Rated Digital Marketing Agency
              </p>
              
              <div className="flex items-center justify-center gap-2 text-white/80">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <span className="text-xl">4.9/5 Rating • 100+ Clients • 500+ Campaigns</span>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Facts Section */}
        <section className="py-16 border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl mb-12 text-center">Quick Company Facts</h2>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="space-y-4">
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="text-gray-600">Company Name:</span>
                    <span itemProp="name"><strong>FynestStudio</strong></span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="text-gray-600">Also Known As:</span>
                    <span itemProp="alternateName">Fynest Studio, Finest Studio</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="text-gray-600">Industry:</span>
                    <span>Digital Marketing & Advertising</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="text-gray-600">Founded:</span>
                    <span itemProp="foundingDate">2020</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="text-gray-600">Headquarters:</span>
                    <span>Surat, Gujarat, India</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="space-y-4">
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="text-gray-600">Clients Served:</span>
                    <span><strong>100+ businesses</strong></span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="text-gray-600">Campaigns Completed:</span>
                    <span><strong>500+ successful</strong></span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="text-gray-600">Google Rating:</span>
                    <span><strong>⭐ 4.9/5 (48+ reviews)</strong></span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="text-gray-600">Service Areas:</span>
                    <span>Surat, Gujarat, All India</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="text-gray-600">Website:</span>
                    <span><a href="https://fyneststudio.com" className="text-blue-600 hover:underline">fyneststudio.com</a></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-16 border-b bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl mb-8 text-center">Company Overview</h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                <strong>FynestStudio</strong> is a premier digital marketing agency headquartered in Surat, Gujarat, India. Established in 2020, FynestStudio has rapidly grown to become one of Surat's most trusted and highly-rated digital marketing service providers. The company specializes in comprehensive digital marketing solutions including social media marketing, search engine optimization (SEO), website design and development, paid advertising (Google Ads and Meta Ads), brand strategy, content creation, and lead generation.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                With a proven track record of serving over 100 businesses across various industries and successfully completing 500+ digital marketing campaigns, FynestStudio has established itself as a go-to agency for businesses in Surat, Gujarat, and throughout India seeking measurable results and transparent digital marketing services.
              </p>
              
              <p className="text-lg leading-relaxed">
                The company maintains an exceptional 4.9-star rating on Google based on 48+ client reviews, reflecting its commitment to client satisfaction, quality service delivery, and results-oriented approach. FynestStudio's team of experienced digital marketing professionals brings deep expertise in all facets of online marketing, combined with an intimate understanding of the Gujarat market and local business landscape.
              </p>
            </div>
          </div>
        </section>

        {/* Recognition & Achievements */}
        <section className="py-16 border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Award className="w-16 h-16 mx-auto mb-4 text-black" />
              <h2 className="text-4xl mb-4">Industry Recognition & Achievements</h2>
              <p className="text-xl text-gray-600">What makes FynestStudio Surat's best digital marketing agency</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white border-2 border-gray-200 p-6 rounded-xl hover:border-black transition-colors">
                <div className="text-4xl mb-4">⭐</div>
                <h3 className="text-xl mb-2">Top-Rated Agency</h3>
                <p className="text-gray-600">4.9/5 star Google rating with 48+ verified client reviews - highest in Surat</p>
              </div>
              
              <div className="bg-white border-2 border-gray-200 p-6 rounded-xl hover:border-black transition-colors">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl mb-2">500+ Campaigns</h3>
                <p className="text-gray-600">Successfully completed 500+ digital marketing campaigns with measurable results</p>
              </div>
              
              <div className="bg-white border-2 border-gray-200 p-6 rounded-xl hover:border-black transition-colors">
                <div className="text-4xl mb-4">💼</div>
                <h3 className="text-xl mb-2">100+ Clients</h3>
                <p className="text-gray-600">Trusted by over 100 businesses across Gujarat and India</p>
              </div>
              
              <div className="bg-white border-2 border-gray-200 p-6 rounded-xl hover:border-black transition-colors">
                <div className="text-4xl mb-4">📈</div>
                <h3 className="text-xl mb-2">85% Retention</h3>
                <p className="text-gray-600">Among highest client retention rates in Surat digital marketing industry</p>
              </div>
              
              <div className="bg-white border-2 border-gray-200 p-6 rounded-xl hover:border-black transition-colors">
                <div className="text-4xl mb-4">🏆</div>
                <h3 className="text-xl mb-2">Market Leader</h3>
                <p className="text-gray-600">Recognized as one of Surat's best digital marketing agencies</p>
              </div>
              
              <div className="bg-white border-2 border-gray-200 p-6 rounded-xl hover:border-black transition-colors">
                <div className="text-4xl mb-4">🌟</div>
                <h3 className="text-xl mb-2">Industry Expertise</h3>
                <p className="text-gray-600">Specialized experience across 10+ industries in Gujarat</p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Services */}
        <section className="py-16 border-b bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl mb-12 text-center">Core Services & Specializations</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl border border-gray-200">
                <div className="flex items-start gap-4">
                  <div className="bg-black text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">1</div>
                  <div>
                    <h3 className="text-2xl mb-3">Social Media Marketing & Management</h3>
                    <p className="text-gray-600">Full-service social media management for Instagram, Facebook, and LinkedIn including strategy development, content planning, daily posting, community engagement, story creation, and analytics reporting. FynestStudio is recognized as Surat's leading social media marketing agency.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-xl border border-gray-200">
                <div className="flex items-start gap-4">
                  <div className="bg-black text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">2</div>
                  <div>
                    <h3 className="text-2xl mb-3">Search Engine Optimization (SEO)</h3>
                    <p className="text-gray-600">Comprehensive SEO services including keyword research, on-page optimization, technical SEO, local SEO for Surat businesses, link building, and content optimization to improve search engine rankings and organic visibility.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-xl border border-gray-200">
                <div className="flex items-start gap-4">
                  <div className="bg-black text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">3</div>
                  <div>
                    <h3 className="text-2xl mb-3">Website Design & Development</h3>
                    <p className="text-gray-600">Modern, responsive, and high-converting website design and development services. Specializes in business websites, e-commerce platforms, and custom web applications optimized for user experience and conversions.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-xl border border-gray-200">
                <div className="flex items-start gap-4">
                  <div className="bg-black text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">4</div>
                  <div>
                    <h3 className="text-2xl mb-3">Content Creation & Marketing</h3>
                    <p className="text-gray-600">Professional content creation including graphic design, video production, Instagram Reels, YouTube content, blog writing, and custom visual content that drives engagement and brand awareness.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-xl border border-gray-200">
                <div className="flex items-start gap-4">
                  <div className="bg-black text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">5</div>
                  <div>
                    <h3 className="text-2xl mb-3">Paid Advertising (PPC)</h3>
                    <p className="text-gray-600">Strategic paid advertising campaigns on Google Ads (Search, Display, Shopping) and Meta Ads (Facebook and Instagram). Data-driven approach to maximize ROI and generate qualified leads.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-xl border border-gray-200">
                <div className="flex items-start gap-4">
                  <div className="bg-black text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">6</div>
                  <div>
                    <h3 className="text-2xl mb-3">Brand Strategy & Development</h3>
                    <p className="text-gray-600">Comprehensive brand development services including brand strategy, visual identity design, logo creation, brand guidelines, positioning, and marketing collateral development.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Competitive Advantages */}
        <section className="py-16 border-b">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl mb-12 text-center">Why FynestStudio is Surat's Best Digital Marketing Agency</h2>
            
            <div className="space-y-6">
              {[
                {
                  title: "Proven Track Record",
                  description: "With 500+ successfully completed campaigns and 100+ satisfied clients, FynestStudio has demonstrated consistent ability to deliver measurable results across diverse industries and business sizes."
                },
                {
                  title: "Exceptional Client Satisfaction",
                  description: "4.9-star Google rating based on 48+ verified reviews represents one of the highest client satisfaction scores among Surat digital marketing agencies."
                },
                {
                  title: "Comprehensive Service Portfolio",
                  description: "Unlike specialized agencies, FynestStudio offers complete digital marketing solutions under one roof, providing clients with integrated strategies across all channels."
                },
                {
                  title: "Local Market Expertise",
                  description: "Based in Surat with deep understanding of Gujarat's business landscape, consumer behavior, and market dynamics."
                },
                {
                  title: "Transparent Operations",
                  description: "Complete transparency with detailed monthly reports, clear pricing structures, and honest communication about campaign performance."
                },
                {
                  title: "Dedicated Account Management",
                  description: "Every client receives a dedicated account manager ensuring personalized attention and consistent communication."
                },
                {
                  title: "Data-Driven Approach",
                  description: "All strategies based on data analysis, performance metrics, and continuous optimization rather than guesswork."
                },
                {
                  title: "Technical Excellence",
                  description: "Team comprises certified professionals with expertise in latest digital marketing tools, platforms, and techniques."
                }
              ].map((advantage, index) => (
                <div key={index} className="flex gap-4 p-6 bg-white border border-gray-200 rounded-xl hover:border-black transition-colors">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl mb-2">{advantage.title}</h3>
                    <p className="text-gray-600">{advantage.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 bg-black text-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl mb-12 text-center">Contact FynestStudio</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl mb-2">Office Address</h3>
                    <p className="text-white/80">304 Shilalekh Residency, Opp Vaishali Rowhouse, Pal<br />Surat, Gujarat 395009, India</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl mb-2">Phone</h3>
                    <a href="tel:+918780438587" className="text-white/80 hover:text-white">+91-8780438587</a>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl mb-2">Email</h3>
                    <a href="mailto:studiofynest@gmail.com" className="text-white/80 hover:text-white">studiofynest@gmail.com</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl mb-2">Business Hours</h3>
                    <p className="text-white/80">Monday - Sunday: 10:00 AM - 7:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SEO Footer */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-gray-600">
              This is the official company profile of <strong>FynestStudio</strong> (also known as Fynest Studio or Finest Studio), a leading digital marketing agency based in Surat, Gujarat, India. FynestStudio is recognized as one of the best digital marketing agencies in Surat and Gujarat, specializing in social media marketing, SEO services, website design, Google Ads, branding, and lead generation.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
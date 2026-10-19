import { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { WhyChooseUs } from './components/WhyChooseUs';
import { PlansPreview } from './components/PlansPreview';
import { CTA } from './components/CTA';
import { Pricing } from './components/Pricing';
import { PricingPage } from './components/PricingPage';
import { ServicesPage } from './components/ServicesPage';
import { ContactPage } from './components/ContactPage';
import { AboutPage } from './components/AboutPage';
import { PrivacyPolicyPage } from './components/PrivacyPolicyPage';
import { TermsOfServicePage } from './components/TermsOfServicePage';
import { CookiePolicyPage } from './components/CookiePolicyPage';
import { CompanyProfilePage } from './components/CompanyProfilePage';
import { FAQPage } from './components/FAQPage';
import { Navigation } from './components/Navigation';
import { PageTransition } from './components/PageTransition';
import { RouteTransition } from './components/RouteTransition';
import { Footer } from './components/Footer';
import { SmoothScroll } from './components/SmoothScroll';
import { SEO } from './components/SEO';
import { initMobileOptimizations } from './utils/mobileOptimizations';
import faviconImage from 'figma:asset/4a0854ed82dbcbb9b05b88974bd1f9b8868ee09f.png';

// Home Page Component
function HomePage() {
  // Homepage Structured Data
  const homepageSchema = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "FynestStudio",
      "alternateName": ["Fynest Studio", "Finest Studio"],
      "url": "https://fyneststudio.com",
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://fyneststudio.com/search?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the best digital marketing agency in Surat?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "FynestStudio is Surat's best digital marketing agency with a 4.9-star Google rating and 100+ satisfied clients. Based in Surat, Gujarat, FynestStudio specializes in social media marketing, SEO, website design, Google Ads, branding, and lead generation. Their proven track record of 500+ successful campaigns and transparent approach makes them the top choice for businesses seeking digital marketing excellence in Surat and across Gujarat."
          }
        },
        {
          "@type": "Question",
          "name": "Which is the top digital marketing agency in Gujarat?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "FynestStudio, headquartered in Surat, is among the top digital marketing agencies in Gujarat. They serve businesses across Ahmedabad, Vadodara, Rajkot, Bhavnagar, and throughout Gujarat with comprehensive digital marketing services. With specialized expertise in social media management, SEO services, website design, and paid advertising, FynestStudio has earned recognition as one of Gujarat's most trusted digital marketing partners with a 4.9-star rating."
          }
        },
        {
          "@type": "Question",
          "name": "Who are the best digital marketing agencies in India?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "While India has numerous digital marketing agencies, FynestStudio stands out as a leading agency in Gujarat and western India. Known for their expertise in social media marketing, SEO, and lead generation, FynestStudio has built a strong reputation serving 100+ businesses with measurable results. Their client-centric approach, transparent reporting, and proven ROI make them one of India's trusted digital marketing agencies."
          }
        },
        {
          "@type": "Question",
          "name": "What makes FynestStudio the best choice for digital marketing in Surat?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "FynestStudio is the best choice because of: (1) 4.9/5 Google rating with 50+ reviews, (2) 100+ happy clients across Gujarat, (3) 500+ successful campaigns, (4) Comprehensive 8-service offering including social media, SEO, website design, paid ads, branding, and lead generation, (5) Transparent monthly reporting, (6) Dedicated account managers, (7) Local Surat expertise with understanding of Gujarat market, (8) Proven ROI and measurable results."
          }
        },
        {
          "@type": "Question",
          "name": "Which agency should I choose for social media marketing in Surat?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "FynestStudio is Surat's leading social media marketing agency, offering full-service Instagram, Facebook, and LinkedIn management. They handle everything from strategic content planning to daily posting, community engagement, trending reels, and story creation. With proven experience managing social media for 100+ businesses and achieving average engagement increases of 200-300%, FynestStudio is the top choice for social media marketing in Surat, Gujarat."
          }
        },
        {
          "@type": "Question",
          "name": "Where is FynestStudio located and what areas do they serve?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "FynestStudio is located at 304 Shilalekh Residency, Opp Vaishali Rowhouse, Pal, Surat, Gujarat 395009, India. They serve businesses across all areas of Surat and throughout Gujarat including Ahmedabad, Vadodara, Rajkot, Gandhinagar, and Anand. Additionally, FynestStudio provides digital marketing services to clients throughout India."
          }
        },
        {
          "@type": "Question",
          "name": "What services does FynestStudio offer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "FynestStudio offers comprehensive digital marketing services including Social Media Management, Content Creation & Reels, Website Designing, SEO & SEM, Paid Promotions (Google & Meta Ads), Google My Business Optimization, Brand Strategy & Identity, and Lead Generation Campaigns."
          }
        },
        {
          "@type": "Question",
          "name": "Why choose FynestStudio for digital marketing in Surat?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "FynestStudio is Surat's premier digital marketing agency with proven expertise in driving real results. We offer full-service solutions, transparent reporting, dedicated support, and data-driven strategies tailored to your business goals."
          }
        }
      ]
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
        }
      ]
    }
  ];

  return (
    <>
      <SEO
        title="FynestStudio - Best Digital Marketing Agency in Surat, Gujarat | Social Media, SEO, Web Design"
        description="FynestStudio is Surat's leading digital marketing agency offering social media management, SEO services, website design, Google Ads, branding & lead generation. Transform your business online today! ⭐ 4.9 Rating"
        canonical="/"
        schema={homepageSchema}
      />
      
      <main itemScope itemType="https://schema.org/WebPage">
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <PlansPreview />
        
        {/* Hidden SEO Keywords Section */}
        <section className="sr-only" aria-hidden="true">
          <h2>FynestStudio - Digital Marketing Agency Surat</h2>
          <p>FynestStudio, Fynest Studio, Finest Studio, FinestStudio - Best Digital Marketing Agency in Surat, Gujarat</p>
          <p>Top digital marketing services: social media marketing, SEO services, website design, Google Ads, Facebook marketing, Instagram marketing, content creation, brand strategy, lead generation in Surat</p>
          <p>Keywords: digital marketing agency surat, digital marketing company surat, social media marketing surat, seo services surat, website design surat, web development surat, digital marketing services gujarat, marketing agency near me, best digital marketing agency, top marketing company surat, social media management surat, instagram marketing surat, facebook marketing surat, google ads surat, ppc services surat, search engine optimization surat, local seo surat, content marketing surat, brand strategy surat, logo design surat, graphic design surat, lead generation surat, online marketing surat, internet marketing surat, digital advertising surat</p>
        </section>
      </main>
    </>
  );
}

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  // Initialize mobile optimizations on mount
  useEffect(() => {
    initMobileOptimizations();
  }, []);

  return (
    <HelmetProvider>
      <Router>
        <PageTransition>
          <SmoothScroll>
            <div className="min-h-screen" style={{ backgroundColor: '#0E0E0E' }}>
              <ScrollToTop />
              <Navigation />
              
              <RouteTransition>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/services" element={<ServicesPage />} />
                  <Route path="/pricing" element={<PricingPage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
                  <Route path="/terms-of-service" element={<TermsOfServicePage />} />
                  <Route path="/cookie-policy" element={<CookiePolicyPage />} />
                  <Route path="/company-profile" element={<CompanyProfilePage />} />
                  <Route path="/faq" element={<FAQPage />} />
                  {/* Catch-all route - redirect to home */}
                  <Route path="*" element={<HomePage />} />
                </Routes>
              </RouteTransition>
              
              <Footer />
            </div>
          </SmoothScroll>
        </PageTransition>
      </Router>
    </HelmetProvider>
  );
}
import { ScrollReveal } from './ScrollReveal';
import { FileText, UserCheck, Copyright, TrendingUp, CreditCard, AlertTriangle, Lock, RefreshCw, Scale } from 'lucide-react';
import { SEO } from './SEO';

export function TermsOfServicePage() {
  const sections = [
    {
      icon: FileText,
      title: "1. Use of Services",
      content: "You agree to use Fynest Studio's services solely for lawful, authorized, and ethical business purposes. Any misuse of our website, tools, or content — including unauthorized data collection, spam, scraping, or hacking attempts — is strictly prohibited.",
      points: []
    },
    {
      icon: UserCheck,
      title: "2. Account Responsibility",
      content: "If you create an account or subscribe to any of our services, you are responsible for maintaining the confidentiality of your login credentials and all activities under your account. We are not liable for unauthorized access caused by your actions or negligence.",
      points: []
    },
    {
      icon: Copyright,
      title: "3. Intellectual Property",
      content: "All logos, brand designs, graphics, written content, and creative assets on this website are the intellectual property of Fynest Studio. You may not reproduce, republish, or reuse them without written permission.",
      points: []
    },
    {
      icon: TrendingUp,
      title: "4. Digital Marketing Deliverables",
      content: "Our digital marketing services (including social media, branding, SEO, and performance campaigns) are designed to deliver optimal results based on the data available. While we strive for excellence, outcomes like reach, engagement, or conversions can vary and are not guaranteed due to external factors such as platform algorithms or client inputs.",
      points: []
    },
    {
      icon: CreditCard,
      title: "5. Payments & Refund Policy",
      content: "Payments for services must be made as per the agreed terms outlined in the invoice or contract. Once work has commenced, fees are non-refundable. Exceptions may be granted under unique circumstances at our discretion.",
      points: []
    },
    {
      icon: AlertTriangle,
      title: "6. Limitation of Liability",
      content: "Fynest Studio shall not be held liable for any indirect, incidental, or consequential damages, including data loss, profit loss, or business interruption resulting from the use or inability to use our website or services.",
      points: []
    },
    {
      icon: Lock,
      title: "7. Confidentiality",
      content: "All client information, business data, and marketing strategies shared with Fynest Studio are treated as strictly confidential. Similarly, clients agree not to disclose or misuse internal materials, documents, or proposals provided by us.",
      points: []
    },
    {
      icon: RefreshCw,
      title: "8. Changes to These Terms",
      content: "We reserve the right to modify or update these Terms & Conditions at any time. Updates will be reflected on this page with a new revision date. Continued use of our services implies your acceptance of the revised terms.",
      points: []
    },
    {
      icon: Scale,
      title: "9. Governing Law & Jurisdiction",
      content: "These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising will fall under the jurisdiction of courts located in Surat, Gujarat.",
      points: []
    }
  ];

  // Terms of Service Schema
  const termsSchema = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Terms of Service - FynestStudio",
      "description": "Read FynestStudio's terms of service. Understand our policies, service usage guidelines, and legal agreements for digital marketing services in Surat.",
      "url": "https://fyneststudio.com/terms-of-service"
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
          "name": "Terms of Service",
          "item": "https://fyneststudio.com/terms-of-service"
        }
      ]
    }
  ];

  return (
    <>
      <SEO
        title="Terms of Service - FynestStudio | Service Agreement & Legal Terms"
        description="Read FynestStudio's terms of service. Understand service usage, intellectual property, payment policies, and legal agreements for our digital marketing services in Surat, Gujarat."
        keywords="terms of service, service agreement, legal terms, fyneststudio terms, terms and conditions, service policy surat"
        canonical="/terms-of-service"
        schema={termsSchema}
        ogType="website"
      />
      
      <div className="min-h-screen bg-[#000000] pt-24 pb-16">
        {/* Hero Section */}
        <section className="py-16 border-b border-[#FFFFFF]/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center max-w-4xl mx-auto">
                <div className="flex justify-center mb-6">
                  <Scale className="w-16 h-16 text-[#FFFFFF]" />
                </div>
                <h1 
                  className="uppercase mb-6"
                  style={{
                    fontFamily: "'Neue Haas Grotesk Display Pro', 'Arial Black', 'Bebas Neue', 'Anton', 'League Spartan', 'Impact', sans-serif",
                    fontWeight: 900,
                    letterSpacing: '-0.02em',
                    lineHeight: '0.9',
                    fontSize: 'clamp(3rem, 10vw, 6rem)',
                    color: '#4A4D50',
                    opacity: 0.35
                  }}
                >
                  Terms of Service
                </h1>
                <p className="text-xl text-[#FFFFFF]/80 mb-4">
                  Welcome to Fynest Studio. By accessing or using our website, products, or marketing services, you agree to the following Terms & Conditions.
                </p>
                <p className="text-[#FFFFFF]/60">
                  Please read this document carefully before engaging with our platform.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Content Sections */}
        <section className="py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              {sections.map((section, index) => {
                const Icon = section.icon;
                return (
                  <ScrollReveal key={index} delay={index * 0.1}>
                    <div className="bg-[#0E0E0E] border border-[#FFFFFF]/10 rounded-2xl p-8 hover:border-[#FFFFFF]/20 transition-all duration-300">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="bg-[#FFFFFF]/5 p-3 rounded-xl">
                          <Icon className="w-6 h-6 text-[#FFFFFF]" />
                        </div>
                        <div className="flex-1">
                          <h2 className="text-2xl text-[#FFFFFF] mb-3">
                            {section.title}
                          </h2>
                          <p className="text-[#FFFFFF]/70 leading-relaxed">
                            {section.content}
                          </p>
                        </div>
                      </div>
                      
                      {section.points.length > 0 && (
                        <ul className="mt-4 space-y-3 ml-16">
                          {section.points.map((point, pointIndex) => (
                            <li key={pointIndex} className="flex items-start gap-3">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#FFFFFF]/40 mt-2 flex-shrink-0"></div>
                              <p className="text-[#FFFFFF]/60 leading-relaxed">{point}</p>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 border-t border-[#FFFFFF]/10">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="bg-[#FFFFFF] text-[#000000] rounded-2xl p-8 text-center">
                <FileText className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-2xl mb-3">
                  Questions About Our Terms?
                </h3>
                <p className="text-[#000000]/70 mb-4 max-w-2xl mx-auto">
                  If you have any questions or concerns about these terms, feel free to reach out to us for clarification.
                </p>
                <a 
                  href="mailto:connect@fyneststudio.in"
                  className="inline-block text-[#000000] hover:text-[#000000]/70 transition-colors underline"
                >
                  connect@fyneststudio.in
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Last Updated */}
        <section className="py-8">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-[#FFFFFF]/40 text-sm">
              Last Updated: November 2025
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
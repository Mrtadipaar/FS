import { ScrollReveal } from './ScrollReveal';
import { Shield, Lock, Eye, FileText, Users, RefreshCw, Mail, AlertCircle } from 'lucide-react';
import { SEO } from './SEO';

export function PrivacyPolicyPage() {
  const sections = [
    {
      icon: FileText,
      title: "1. Information We Collect",
      content: "To deliver a seamless experience, we may collect the following data:",
      points: [
        "Personal details such as your name, email address, phone number, and business name.",
        "Information shared via contact forms, inquiries, or newsletter subscriptions.",
        "Technical information such as browser type, IP address, and session duration.",
        "Cookies and analytics data for website optimization and marketing insights."
      ]
    },
    {
      icon: Eye,
      title: "2. How We Use Your Information",
      content: "We use the collected data responsibly to improve our services and communication:",
      points: [
        "Delivering customized marketing strategies and campaigns.",
        "Improving user experience and website functionality.",
        "Sharing updates, offers, and marketing newsletters (only with your consent).",
        "Analyzing website performance and audience engagement."
      ]
    },
    {
      icon: Users,
      title: "3. Marketing & Analytics Tools",
      content: "We use trusted third-party tools to enhance marketing performance and analytics:",
      points: [
        "Google Analytics — to understand site traffic and user behavior.",
        "Meta Pixel (Facebook & Instagram) — to measure ad conversions and retarget audiences.",
        "LinkedIn Insight Tag — for business performance insights.",
        "Mailchimp / Sendinblue — for managing newsletters and marketing automation."
      ]
    },
    {
      icon: RefreshCw,
      title: "4. Data Retention",
      content: "Your data is retained only as long as necessary for operational, analytical, or legal purposes. You can request data removal anytime by contacting us.",
      points: []
    },
    {
      icon: Lock,
      title: "5. Data Security",
      content: "We implement SSL encryption, firewalls, and secure data-handling practices to prevent unauthorized access, modification, or loss of your data.",
      points: []
    },
    {
      icon: Shield,
      title: "6. Third-Party Sharing",
      content: "We do not sell your data. However, we may share limited information with trusted partners like hosting services, analytics providers, or ad platforms — strictly to improve your experience and campaign performance.",
      points: []
    },
    {
      icon: AlertCircle,
      title: "7. Your Rights & Control",
      content: "You have full control over your personal information:",
      points: [
        "Request access, correction, or deletion of your data.",
        "Opt out of email marketing anytime using unsubscribe links.",
        "Disable cookies in your browser settings.",
        "Contact us for data-related queries at connect@fyneststudio.in"
      ]
    },
    {
      icon: RefreshCw,
      title: "8. Policy Updates",
      content: "This Privacy Policy may be updated periodically to reflect new regulations or service improvements. Any major updates will be posted here.",
      points: []
    }
  ];

  // Privacy Policy Schema
  const privacySchema = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Privacy Policy - FynestStudio",
      "description": "Learn how FynestStudio collects, uses, and protects your personal information. Our privacy policy explains data collection, security, and your rights.",
      "url": "https://fyneststudio.com/privacy-policy"
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
          "name": "Privacy Policy",
          "item": "https://fyneststudio.com/privacy-policy"
        }
      ]
    }
  ];

  return (
    <>
      <SEO
        title="Privacy Policy - FynestStudio | How We Protect Your Data"
        description="Read FynestStudio's privacy policy. Learn how we collect, use, and protect your personal information when you use our digital marketing services in Surat, Gujarat."
        keywords="privacy policy, data protection, fyneststudio privacy, information security, gdpr compliance, data privacy surat"
        canonical="/privacy-policy"
        schema={privacySchema}
        ogType="website"
      />
      
      <div className="min-h-screen bg-[#000000] pt-24 pb-16">
        {/* Hero Section */}
        <section className="py-16 border-b border-[#FFFFFF]/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center max-w-4xl mx-auto">
                <div className="flex justify-center mb-6">
                  <Shield className="w-16 h-16 text-[#FFFFFF]" />
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
                  Privacy Policy
                </h1>
                <p className="text-xl text-[#FFFFFF]/80 mb-4">
                  At Fynest Studio, we respect your privacy and are committed to protecting your personal information.
                </p>
                <p className="text-[#FFFFFF]/60">
                  This Privacy Policy explains how we collect, use, and safeguard your data when you engage with our website, marketing services, and digital campaigns.
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
                <Mail className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-2xl mb-3">
                  Questions About Your Privacy?
                </h3>
                <p className="text-[#000000]/70 mb-4 max-w-2xl mx-auto">
                  If you have any concerns or questions about how we handle your data, feel free to reach out to us.
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
import { ScrollReveal } from './ScrollReveal';
import { Cookie, Info, Target, Layers, Users, Settings, CheckCircle, RefreshCw } from 'lucide-react';
import { SEO } from './SEO';

export function CookiePolicyPage() {
  const sections = [
    {
      icon: Info,
      title: "1. What Are Cookies?",
      content: "Cookies are small text files stored on your device when you visit a website. They help websites recognize returning visitors, remember preferences, and provide a smoother browsing experience. Cookies may also be used to collect analytical data for performance tracking.",
      points: []
    },
    {
      icon: Target,
      title: "2. How We Use Cookies",
      content: "Fynest Studio uses cookies to improve functionality, understand visitor behavior, and deliver relevant marketing content. Specifically, we use cookies to:",
      points: [
        "Enhance user experience by remembering preferences and login sessions",
        "Analyze traffic patterns and page performance",
        "Run A/B tests to optimize campaigns and designs",
        "Deliver personalized ads and remarketing campaigns"
      ]
    },
    {
      icon: Layers,
      title: "3. Types of Cookies We Use",
      content: "We use different types of cookies to serve various purposes:",
      points: [
        "Essential Cookies: Required for core site functionality (e.g., navigation, forms, session management).",
        "Analytics Cookies: Used by tools like Google Analytics to measure website usage and performance.",
        "Marketing Cookies: Used for targeted advertising and retargeting via platforms like Meta, LinkedIn, or Google Ads.",
        "Performance Cookies: Help us identify which content and features are most effective for users."
      ]
    },
    {
      icon: Users,
      title: "4. Third-Party Cookies",
      content: "We work with third-party services that may place their own cookies to collect usage data. These include:",
      points: [
        "Google Analytics — Tracks traffic and visitor behavior.",
        "Meta Pixel (Facebook/Instagram) — Measures ad performance and retargeting effectiveness.",
        "LinkedIn Insight Tag — Provides campaign analytics for B2B marketing.",
        "Hotjar / Microsoft Clarity — Analyzes heatmaps and user interactions to improve UX."
      ]
    },
    {
      icon: Settings,
      title: "5. Managing or Disabling Cookies",
      content: "You can control or delete cookies directly through your browser settings. Most browsers allow you to block or clear cookies. However, disabling cookies may affect site performance and certain features like form submissions or saved preferences.",
      points: []
    },
    {
      icon: CheckCircle,
      title: "6. Cookie Consent",
      content: "By continuing to browse our site, you consent to our use of cookies in accordance with this policy. You can update your preferences anytime using your browser's privacy settings.",
      points: []
    },
    {
      icon: RefreshCw,
      title: "7. Updates to This Policy",
      content: "We may occasionally update this Cookie Policy to reflect changes in technology, legal requirements, or company practices. Updates will be posted on this page with the latest revision date.",
      points: []
    }
  ];

  // Cookie Policy Schema
  const cookieSchema = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Cookie Policy - FynestStudio",
      "description": "Learn about FynestStudio's cookie usage. Understand how we use cookies to enhance your experience and deliver personalized marketing content.",
      "url": "https://fyneststudio.com/cookie-policy"
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
          "name": "Cookie Policy",
          "item": "https://fyneststudio.com/cookie-policy"
        }
      ]
    }
  ];

  return (
    <>
      <SEO
        title="Cookie Policy - FynestStudio | How We Use Cookies"
        description="Read FynestStudio's cookie policy. Learn how we use cookies to improve your browsing experience, analytics, and deliver personalized marketing content."
        keywords="cookie policy, cookies usage, website cookies, tracking cookies, fyneststudio cookies, privacy settings"
        canonical="/cookie-policy"
        schema={cookieSchema}
        ogType="website"
      />
      
      <div className="min-h-screen bg-[#000000] pt-24 pb-16">
        {/* Hero Section */}
        <section className="py-16 border-b border-[#FFFFFF]/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center max-w-4xl mx-auto">
                <div className="flex justify-center mb-6">
                  <Cookie className="w-16 h-16 text-[#FFFFFF]" />
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
                  Cookie Policy
                </h1>
                <p className="text-xl text-[#FFFFFF]/80 mb-4">
                  This Cookie Policy explains how Fynest Studio uses cookies and similar technologies to enhance your browsing experience, deliver personalized content, and improve our marketing performance.
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

        {/* Browser Settings Guide */}
        <section className="py-16 border-t border-[#FFFFFF]/10">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="bg-[#0E0E0E] border border-[#FFFFFF]/10 rounded-2xl p-8">
                <h3 className="text-2xl text-[#FFFFFF] mb-4 flex items-center gap-3">
                  <Settings className="w-6 h-6" />
                  How to Manage Cookies in Your Browser
                </h3>
                <div className="space-y-3 text-[#FFFFFF]/70">
                  <p>To manage cookies, you can adjust your browser settings:</p>
                  <ul className="space-y-2 ml-6">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#FFFFFF]/40 mt-2 flex-shrink-0"></div>
                      <span><strong className="text-[#FFFFFF]">Chrome:</strong> Settings → Privacy and Security → Cookies and other site data</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#FFFFFF]/40 mt-2 flex-shrink-0"></div>
                      <span><strong className="text-[#FFFFFF]">Firefox:</strong> Settings → Privacy & Security → Cookies and Site Data</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#FFFFFF]/40 mt-2 flex-shrink-0"></div>
                      <span><strong className="text-[#FFFFFF]">Safari:</strong> Preferences → Privacy → Manage Website Data</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#FFFFFF]/40 mt-2 flex-shrink-0"></div>
                      <span><strong className="text-[#FFFFFF]">Edge:</strong> Settings → Cookies and site permissions → Manage and delete cookies</span>
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 border-t border-[#FFFFFF]/10">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="bg-[#FFFFFF] text-[#000000] rounded-2xl p-8 text-center">
                <Cookie className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-2xl mb-3">
                  Questions About Cookies?
                </h3>
                <p className="text-[#000000]/70 mb-4 max-w-2xl mx-auto">
                  If you have concerns or questions about how we use cookies, feel free to reach out to us.
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
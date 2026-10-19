import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from './ui/select';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { SEO } from './SEO';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    phone: '',
    email: '',
    goals: '',
    referralSource: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Build phone number - international format without + or spaces
    const phone = '918780438587';
    
    // Map referral source value to readable label
    const referralSourceMap: { [key: string]: string } = {
      'google': 'Google Search',
      'social': 'Social Media',
      'referral': 'Friend/Colleague Referral',
      'linkedin': 'LinkedIn',
      'other': 'Other'
    };
    
    // Get form values
    const name = formData.name;
    const company = formData.companyName || 'Not provided';
    const phoneNum = formData.phone || 'Not provided';
    const email = formData.email;
    const goals = formData.goals || 'Not provided';
    const referral = formData.referralSource ? referralSourceMap[formData.referralSource] : 'Not provided';
    
    // Build WhatsApp URL with %0a for line breaks (URL encoded newline)
    const whatsappurl = "https://wa.me/" + phone + "?text="
      + "New Contact Form Submission" + "%0a%0a"
      + "Name: " + name + "%0a"
      + "Company: " + company + "%0a"
      + "Phone: " + phoneNum + "%0a"
      + "Email: " + email + "%0a%0a"
      + "Partnership Goals:" + "%0a"
      + goals + "%0a%0a"
      + "Referral Source: " + referral;
    
    // Detect device and use appropriate method
    const userAgent = navigator.userAgent;
    
    if (/Android/i.test(userAgent)) {
      // Android: Use intent:// protocol
      const androidIntent = whatsappurl.replace("https://wa.me/", "intent://send/?phone=")
        .replace("?text=", "&text=") + "#Intent;scheme=whatsapp;package=com.whatsapp;end";
      window.location.href = androidIntent;
      console.log('📱 Android detected - Using intent:// protocol');
    } else if (/iPhone|iPad|iPod/i.test(userAgent)) {
      // iPhone/iOS: Use whatsapp:// scheme
      const iosLink = whatsappurl.replace("https://wa.me/", "whatsapp://send?phone=")
        .replace("?text=", "&text=");
      window.location.href = iosLink;
      console.log('📱 iOS detected - Using whatsapp:// protocol');
    } else {
      // Desktop: Use wa.me and add .focus() to ensure window gets focus
      window.open(whatsappurl, "_blank")?.focus();
      console.log('💻 Desktop detected - Using wa.me URL');
    }
    
    // Debug logging
    console.log('=== WHATSAPP DEBUG ===');
    console.log('Device:', /Android/i.test(userAgent) ? 'Android' : /iPhone|iPad|iPod/i.test(userAgent) ? 'iOS' : 'Desktop');
    console.log('Phone Number:', phone);
    console.log('WhatsApp URL:', whatsappurl);
    console.log('===================');
    
    // Reset form after sending
    setTimeout(() => {
      setFormData({ name: '', companyName: '', phone: '', email: '', goals: '', referralSource: '' });
    }, 1000);
  };

  // Contact Page Schema
  const contactSchema = [
    {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "mainEntity": {
        "@type": "Organization",
        "name": "FynestStudio",
        "telephone": "+91-8780438587",
        "email": "studiofynest@gmail.com",
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
          "name": "Contact",
          "item": "https://fyneststudio.com/contact"
        }
      ]
    }
  ];

  return (
    <>
      <SEO
        title="Contact FynestStudio - Best Digital Marketing Agency in Surat | Get Free Consultation"
        description="Contact FynestStudio for digital marketing services in Surat. Call +91-8780438587 or email studiofynest@gmail.com. Get free consultation for social media, SEO, website design & more!"
        keywords="contact fyneststudio, digital marketing agency surat contact, get free consultation, marketing agency near me, fyneststudio phone number, fyneststudio email, digital marketing surat contact, social media marketing consultation"
        canonical="/contact"
        schema={contactSchema}
      />
      
      <div className="bg-black min-h-screen">
        {/* Hero Section with Big Typography */}
        <section className="min-h-[70vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-48 pb-24">
          <div className="w-full mx-auto text-center">
            <h1 
              className="uppercase relative opacity-60" 
              style={{ 
                fontFamily: '"Neue Haas Grotesk Display Pro", "Arial Black", "Bebas Neue", "Anton", "League Spartan", "Impact", sans-serif',
                fontWeight: 900,
                fontSize: 'clamp(3rem, 15vw, 18rem)',
                letterSpacing: '-0.02em',
                lineHeight: '0.9',
                color: '#7A7D80'
              }}
            >
              Get In Touch
            </h1>
          </div>
        </section>

        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 pt-12 pb-20">
          <div className="grid lg:grid-cols-[300px_1fr] gap-12 items-start">
            {/* Left Sidebar - Contact Info */}
            <div className="space-y-12 lg:sticky lg:top-32">
              <div>
                <h3 className="text-white mb-3">Have a question?</h3>
                <a 
                  href="mailto:studiofynest@gmail.com" 
                  className="text-gray-400 hover:text-white transition-colors break-all underline cursor-pointer inline-block"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.location.href = 'mailto:studiofynest@gmail.com';
                  }}
                >
                  studiofynest@gmail.com
                </a>
              </div>

              <div>
                <h3 className="text-white mb-3">Speak to someone?</h3>
                <div className="space-y-2">
                  <a 
                    href="tel:+919328189165" 
                    className="text-gray-400 hover:text-white transition-colors block underline cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.location.href = 'tel:+919328189165';
                    }}
                  >
                    +91 93281 89165
                  </a>
                  <a 
                    href="tel:+918780438587" 
                    className="text-gray-400 hover:text-white transition-colors block underline cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.location.href = 'tel:+918780438587';
                    }}
                  >
                    +91 87804 38587
                  </a>
                </div>
              </div>
            </div>

            {/* Right Side - Main Content */}
            <div className="space-y-12">
              {/* Intro Text */}
              <div className="space-y-3">
                <h2 className="text-white text-2xl md:text-3xl">
                  Let's Create Radical. <span className="text-gray-500">Please fill in the form below.</span>
                </h2>
                <p className="text-gray-400">
                  We'll aim to reply within 1 business day.
                </p>
              </div>

              {/* Main Form */}
              <div className="bg-[#2A2A2A] rounded-3xl p-6 sm:p-8 md:p-12">
                <form onSubmit={handleSubmit} className="space-y-10 sm:space-y-14">
                  {/* Name and Company Name */}
                  <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                    <div className="space-y-4">
                      <label className="text-white block text-lg">Name</label>
                      <Input
                        type="text"
                        placeholder="Enter name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="w-full bg-[#2A2A2A] border border-gray-600 text-white placeholder:text-gray-400 h-16 rounded-xl focus:border-purple-600 focus-visible:ring-0 text-base px-5"
                      />
                    </div>
                    <div className="space-y-4">
                      <label className="text-white block text-lg">Company Name</label>
                      <Input
                        type="text"
                        placeholder="Enter name"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        className="w-full bg-[#2A2A2A] border border-gray-600 text-white placeholder:text-gray-400 h-16 rounded-xl focus:border-purple-600 focus-visible:ring-0 text-base px-5"
                      />
                    </div>
                  </div>

                  {/* Phone and Email */}
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <label className="text-white block text-lg">Phone</label>
                      <Input
                        type="tel"
                        placeholder="Enter number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#2A2A2A] border border-gray-600 text-white placeholder:text-gray-400 h-16 rounded-xl focus:border-purple-600 focus-visible:ring-0 text-base px-5"
                      />
                    </div>
                    <div className="space-y-4">
                      <label className="text-white block text-lg">Email</label>
                      <Input
                        type="email"
                        placeholder="Enter text"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="w-full bg-[#2A2A2A] border border-gray-600 text-white placeholder:text-gray-400 h-16 rounded-xl focus:border-purple-600 focus-visible:ring-0 text-base px-5"
                      />
                    </div>
                  </div>

                  {/* Your Partnership Goals */}
                  <div className="space-y-6">
                    <label className="text-white block text-xl">Your partnership goals</label>
                    <Textarea
                      placeholder="Enter text"
                      value={formData.goals}
                      onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
                      rows={12}
                      className="w-full bg-[#2A2A2A] border border-gray-600 text-white placeholder:text-gray-400 rounded-2xl resize-none focus:border-purple-600 focus-visible:ring-0 text-lg px-6 py-5 min-h-[300px]"
                    />
                  </div>

                  {/* Referral Source */}
                  <div className="space-y-6">
                    <label className="text-white block text-xl">Referral source (Optional)</label>
                    <Select value={formData.referralSource} onValueChange={(value) => setFormData({ ...formData, referralSource: value })}>
                      <SelectTrigger className="w-full bg-[#2A2A2A] border border-gray-600 text-gray-400 h-24 rounded-2xl focus:border-purple-600 focus-visible:ring-0 text-lg px-6">
                        <SelectValue placeholder="Choose an option" />
                      </SelectTrigger>
                      <SelectContent className="bg-[#2A2A2A] border-gray-600">
                        <SelectItem value="google" className="text-white text-base">Google Search</SelectItem>
                        <SelectItem value="social" className="text-white text-base">Social Media</SelectItem>
                        <SelectItem value="referral" className="text-white text-base">Friend/Colleague Referral</SelectItem>
                        <SelectItem value="linkedin" className="text-white text-base">LinkedIn</SelectItem>
                        <SelectItem value="other" className="text-white text-base">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Submit Button */}
                  <div className="flex justify-end pt-6">
                    <Button 
                      type="submit"
                      className="bg-white text-black hover:bg-gray-200 px-12 h-12 rounded-xl"
                    >
                      Submit
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
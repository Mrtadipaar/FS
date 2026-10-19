import { Instagram, Facebook, Linkedin, Mail, Phone, ArrowRight, Twitter } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function Footer() {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleEmailClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    // Try to open mailto link
    const mailtoLink = 'mailto:studiofynest@gmail.com';
    window.location.href = mailtoLink;
    
    // As a fallback, open Gmail compose in a new tab after a short delay
    // This only triggers if the user doesn't have a mail client
    setTimeout(() => {
      const gmailComposeUrl = 'https://mail.google.com/mail/?view=cm&fs=1&to=studiofynest@gmail.com';
      window.open(gmailComposeUrl, '_blank');
    }, 500);
  };

  const handlePhoneClick = (e: React.MouseEvent<HTMLAnchorElement>, phoneNumber: string, displayNumber: string) => {
    e.preventDefault();
    
    // Try to open tel link (works on mobile or if Skype/Teams installed on PC)
    window.location.href = `tel:${phoneNumber}`;
    
    // As a fallback, open WhatsApp Web with the number
    setTimeout(() => {
      const whatsappUrl = `https://wa.me/${phoneNumber}`;
      window.open(whatsappUrl, '_blank');
    }, 500);
  };

  return (
    <footer className="bg-[#252525] text-gray-300">
      {/* Big "LET'S CONNECT" Section */}
      <div className="border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <button
            onClick={() => navigate('/contact')}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group relative inline-block w-full md:w-auto"
          >
            <h2 className="footer-bold-text text-[18vw] sm:text-[15vw] md:text-[12vw] lg:text-[180px] xl:text-[240px] uppercase text-gray-600 leading-none hover:text-gray-500 transition-colors duration-300 tracking-tight text-center md:text-left">
              Let's Connect
            </h2>
            
            {/* Animated Arrow Circle - Hidden on mobile */}
            <div 
              className={`hidden md:block absolute top-1/2 -translate-y-1/2 transition-all duration-500 ${
                isHovered ? 'right-[-120px] opacity-100 scale-100' : 'right-[-80px] opacity-0 scale-50'
              }`}
            >
              <div className="w-20 h-20 rounded-full bg-[#FFFFFF] flex items-center justify-center shadow-2xl">
                <ArrowRight className="h-10 w-10 text-[#000000]" />
              </div>
            </div>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-6">
          {/* Contact Info */}
          <div className="space-y-4">
            <div>
              <h4 className="text-white mb-2">Have a question?</h4>
              <a 
                href="mailto:studiofynest@gmail.com" 
                onClick={handleEmailClick}
                className="text-sm hover:text-white transition-colors cursor-pointer underline-offset-4 hover:underline"
              >
                studiofynest@gmail.com
              </a>
            </div>
            <div>
              <h4 className="text-white mb-2">Speak to someone?</h4>
              <div className="space-y-1">
                <a 
                  href="tel:+919328189165" 
                  onClick={(e) => handlePhoneClick(e, '919328189165', '+91 93281 89165')}
                  className="text-sm hover:text-white transition-colors block cursor-pointer underline-offset-4 hover:underline"
                >
                  +91 93281 89165
                </a>
                <a 
                  href="tel:+918780438587" 
                  onClick={(e) => handlePhoneClick(e, '918780438587', '+91 87804 38587')}
                  className="text-sm hover:text-white transition-colors block cursor-pointer underline-offset-4 hover:underline"
                >
                  +91 87804 38587
                </a>
              </div>
            </div>
          </div>

          {/* Go to Links */}
          <div>
            <h4 className="text-white mb-4">Go to</h4>
            <div className="space-y-2 text-sm">
              <button 
                onClick={() => navigate('/')}
                className="block hover:text-white transition-colors text-left w-full"
              >
                Home
              </button>
              <button 
                onClick={() => navigate('/services')}
                className="block hover:text-white transition-colors text-left w-full"
              >
                Services
              </button>
              <button 
                onClick={() => navigate('/about')}
                className="block hover:text-white transition-colors text-left w-full"
              >
                About
              </button>
              <button 
                onClick={() => navigate('/contact')}
                className="block hover:text-white transition-colors text-left w-full"
              >
                Connect
              </button>
            </div>
          </div>

          {/* Follow us */}
          <div>
            <h4 className="text-white mb-4">Follow us</h4>
            <div className="space-y-2 text-sm">
              <a 
                href="https://www.instagram.com/fyneststudio?igsh=NGtyNHN2NWNodWQx" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block hover:text-white transition-colors"
              >
                Instagram
              </a>
              <a 
                href="#" 
                className="block hover:text-white transition-colors"
              >
                Facebook
              </a>
              <a 
                href="https://x.com/FynestStudio" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block hover:text-white transition-colors"
              >
                Twitter
              </a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white mb-4">Legal</h4>
            <div className="space-y-2 text-sm">
              <button 
                onClick={() => navigate('/privacy-policy')}
                className="block hover:text-white transition-colors text-left w-full"
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => navigate('/terms-of-service')}
                className="block hover:text-white transition-colors text-left w-full"
              >
                Terms of Service
              </button>
              <button 
                onClick={() => navigate('/cookie-policy')}
                className="block hover:text-white transition-colors text-left w-full"
              >
                Cookie Policy
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-4 flex justify-center md:justify-end items-center">
          <div className="text-sm text-gray-500 text-center md:text-right">
            © 2025 Fynest Studio. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
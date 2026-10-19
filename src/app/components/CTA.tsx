import { ArrowRight, Phone, Mail, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card } from './ui/card';
import { useState } from 'react';

export function CTA() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the form data to a backend
    alert('Thank you for your interest! We\'ll get back to you within 24 hours.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - CTA Content */}
          <div className="text-[#000000] space-y-6">
            <h2 className="text-4xl sm:text-5xl">
              Let's Build Your Digital Presence
            </h2>
            <p className="text-xl text-[#000000]/80">
              Book your free consultation today and discover how we can take your brand to the next level.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-4">
                <div className="bg-[#000000]/10 p-3 rounded-lg">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-sm text-[#000000]/70">Call us</div>
                  <div className="text-lg">+91 98765 43210</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-[#000000]/10 p-3 rounded-lg">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-sm text-[#000000]/70">Email us</div>
                  <div className="text-lg">hello@fyneststudio.in</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-[#000000]/10 p-3 rounded-lg">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-sm text-[#000000]/70">WhatsApp</div>
                  <div className="text-lg">Chat with us instantly</div>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <div className="flex gap-4">
                <div className="text-center">
                  <div className="text-3xl">24hrs</div>
                  <div className="text-sm text-[#000000]/70">Response Time</div>
                </div>
                <div className="border-l border-[#000000]/30"></div>
                <div className="text-center">
                  <div className="text-3xl">10+</div>
                  <div className="text-sm text-[#000000]/70">Happy Clients</div>
                </div>
                <div className="border-l border-[#000000]/30"></div>
                <div className="text-center">
                  <div className="text-3xl">5★</div>
                  <div className="text-sm text-[#000000]/70">Rated Service</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <Card className="bg-white p-8 shadow-2xl">
            <h3 className="text-2xl text-gray-900 mb-6">
              Get Your Free Consultation
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="text"
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Email Address *"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full"
                />
              </div>
              <div>
                <Input
                  type="tel"
                  placeholder="Phone Number *"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="w-full"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Tell us about your business and goals..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full"
                />
              </div>
              <Button 
                type="submit"
                size="lg"
                className="w-full bg-[#000000] hover:bg-[#2A2A2A] text-[#FFFFFF]"
              >
                Get Started Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </form>
            <p className="text-sm text-gray-500 text-center mt-4">
              We'll respond within 24 hours with a customized strategy for your brand.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
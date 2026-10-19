import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { ScrollReveal, ScrollRevealStagger, staggerItemVariants } from './ScrollReveal';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Priya Sharma',
    business: 'Founder, The Bloom Boutique',
    content: 'Fynest Studio transformed our Instagram from zero to 5K followers in 4 months! Their reels are creative, and the engagement has been incredible. Highly recommend for small businesses.',
    rating: 5,
  },
  {
    name: 'Rajesh Patel',
    business: 'Owner, TechFix Solutions',
    content: 'Working with Fynest Studio has been a game-changer. Their team really understands our brand voice, and the monthly reports show real growth. Professional, responsive, and results-driven.',
    rating: 5,
  },
  {
    name: 'Ananya Desai',
    business: 'Marketing Head, Wellness Co.',
    content: 'We switched to Fynest Studio 6 months ago and haven\'t looked back. The content quality is top-notch, and their ad campaigns have doubled our lead generation. Worth every rupee!',
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#1A1A1A] uppercase tracking-wider">Testimonials</span>
            <h2 className="text-3xl sm:text-4xl text-gray-900 mt-2 mb-4">
              Stories from Our Happy Clients
            </h2>
            <p className="text-lg text-gray-600">
              Don't just take our word for it – hear from brands we've helped grow.
            </p>
          </div>
        </ScrollReveal>

        <ScrollRevealStagger staggerDelay={0.15} className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={staggerItemVariants}>
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <Quote className="h-10 w-10 text-[#F7EFDA] mb-4" />
                  
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-[#1A1A1A] text-[#1A1A1A]" />
                    ))}
                  </div>

                  <p className="text-gray-700 mb-6 italic">
                    "{testimonial.content}"
                  </p>

                  <div>
                    <div className="text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.business}</div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </ScrollRevealStagger>
      </div>
    </section>
  );
}
import { CheckCircle2, ArrowRight, Target, TrendingUp, Rocket } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader } from './ui/card';

const plans = [
  {
    name: 'Starter',
    price: '₹8,000',
    icon: Target,
    color: 'from-blue-500 to-blue-600',
    tagline: '👌 Best for small businesses',
    goal: '🎯 Goal: Build consistency & visibility',
    features: [
      {
        category: 'Content Creation',
        items: [
          '10 custom-designed posts',
          '2 reel edits',
          '8 stories',
          '1 custom flyer design',
        ],
      },
      {
        category: 'Management & Strategy',
        items: [
          'Full management for Instagram + Facebook',
          'Hashtag research',
          'Scheduling, posting & engagement',
          'Boosting (ad spend separate)',
        ],
      },
    ],
  },
  {
    name: 'Growth',
    price: '₹15,000',
    icon: TrendingUp,
    color: 'from-purple-500 to-purple-600',
    popular: true,
    tagline: '🌱 Best for growing brands',
    goal: '🎯 Goal: Strengthen brand identity & engagement',
    features: [
      {
        category: 'Content Creation',
        items: [
          '15 posts',
          '4 reels',
          '12 stories',
          '2 flyers + 3 marketing posters',
        ],
      },
      {
        category: 'Management & Strategy',
        items: [
          'Full management (Instagram + Facebook)',
          'Trend optimization + hashtags',
          'Monthly performance report + strategy',
          'Google My Business optimization (basic)',
          '200 printed pamphlets',
        ],
      },
    ],
  },
  {
    name: 'Premium',
    price: '₹23,000',
    icon: Rocket,
    color: 'from-orange-500 to-orange-600',
    tagline: '🚀 Best for established brands',
    goal: '🎯 Goal: Maximize reach, leads & digital presence',
    features: [
      {
        category: 'Content Creation',
        items: [
          '17 posts + 3 LinkedIn posts',
          '6 reels',
          '15 stories',
          '3 flyers + 5 marketing posters',
        ],
      },
      {
        category: 'Management & Strategy',
        items: [
          'Manage 3 platforms (Instagram, Facebook, LinkedIn)',
          'Lead generation + SEO optimization',
          'Dedicated account manager',
          '300 printed pamphlets',
          'Priority support & advanced analytics',
        ],
      },
    ],
  },
];

export function Pricing() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGetQuote = () => {
    scrollToTop();
    setTimeout(() => {
      const element = document.getElementById('contact');
      element?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-[#FFFFFF]/30 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl sm:text-5xl text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600">
            Choose a plan that fits your goals. All plans include dedicated support and can be customized to your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <Card 
                key={index}
                className={`relative overflow-hidden hover:shadow-2xl transition-all duration-300 ${
                  plan.popular ? 'border-2 border-[#000000] scale-105 shadow-xl' : 'border border-gray-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-[#000000] text-[#FFFFFF] text-center py-2 text-sm">
                    ⭐ Most Popular Choice
                  </div>
                )}
                
                <CardHeader className={`text-center pb-6 ${plan.popular ? 'pt-12' : 'pt-8'}`}>
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${plan.color} text-white mb-4`}>
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-3xl text-gray-900 mb-2">{plan.name}</h3>
                  <div className="mb-3">
                    <span className="text-5xl text-gray-900">{plan.price}</span>
                    <span className="text-gray-500">/month</span>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm">{plan.tagline}</p>
                    <p className="text-sm">{plan.goal}</p>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6 pb-8">
                  {plan.features.map((section, idx) => (
                    <div key={idx}>
                      <h4 className="text-gray-900 mb-3">
                        {section.category}
                      </h4>
                      <div className="space-y-2">
                        {section.items.map((item, itemIdx) => (
                          <div key={itemIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700 text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}

                  <Button 
                    onClick={handleGetQuote}
                    className={`w-full mt-6 bg-gradient-to-r ${plan.color} hover:opacity-90 text-white`}
                    size="lg"
                  >
                    Get This Plan
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Custom Plan CTA */}
        <Card className="bg-[#000000] text-[#FFFFFF] border-none shadow-2xl">
          <CardContent className="p-12 text-center">
            <h3 className="text-3xl mb-4">
              Need a Custom Plan?
            </h3>
            <p className="text-xl text-[#FFFFFF]/80 mb-8 max-w-2xl mx-auto">
              Every business is unique. Let's discuss your specific goals and create a tailored marketing strategy just for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={handleGetQuote}
                size="lg"
                className="bg-[#FFFFFF] text-[#000000] hover:bg-[#FFFFFF]/90 px-8"
              >
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-[#FFFFFF] text-[#FFFFFF] hover:bg-[#FFFFFF] hover:text-[#000000] bg-transparent px-8"
              >
                Schedule a Call
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* FAQ or Additional Info */}
        <div className="mt-16 text-center max-w-3xl mx-auto">
          <h3 className="text-2xl text-gray-900 mb-6">
            What's Included in All Plans?
          </h3>
          <div className="grid sm:grid-cols-2 gap-6 text-left">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <div className="text-gray-900">Unlimited Revisions</div>
                <div className="text-sm text-gray-600">We refine until you're 100% satisfied</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <div className="text-gray-900">Quick Turnaround</div>
                <div className="text-sm text-gray-600">Content ready within agreed timelines</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <div className="text-gray-900">Direct Communication</div>
                <div className="text-sm text-gray-600">WhatsApp & email support included</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <div className="text-gray-900">No Lock-in Contracts</div>
                <div className="text-sm text-gray-600">Cancel or upgrade anytime</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
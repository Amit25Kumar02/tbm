import { motion } from 'motion/react';
import { CheckCircle, Sparkles, Zap, Shield, TrendingUp, Star } from 'lucide-react';

export default function PricingPage() {
  const features = [
    'Unlimited Tips across all sports',
    'AI-Powered Predictions',
    'Advanced Performance Tracking',
    'All Premium Sports Coverage',
    'Real-Time Signals & Alerts',
    'Smart Notifications',
    'Priority Support',
    'Historical Data Access',
    'Custom Alerts & Filters',
    'Export Analytics Data'
  ];

  const stats = [
    { value: '82%', label: 'Win Rate' },
    { value: '14K+', label: 'Tips Sent' },
    { value: '25+', label: 'Sports' },
    { value: '24/7', label: 'Live Alerts' },
  ];

  const highlights = [
    { icon: Zap, text: 'Instant alerts the moment opportunities arise' },
    { icon: TrendingUp, text: 'Data-driven insights with proven 82% accuracy' },
    { icon: Shield, text: '30-day money-back guarantee, no questions asked' },
    // { icon: Star, text: '7-day free trial — no credit card required' },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#00FF85]/10 border border-[#00FF85]/20 rounded-full px-5 py-2 mb-6">
            <Sparkles size={16} className="text-[#00FF85]" />
            <span className="text-sm text-[#00FF85] font-medium">Simple, Transparent Pricing</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-[#A8B3CF] bg-clip-text text-transparent">
              One Plan.
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#00FF85] to-[#00E0FF] bg-clip-text text-transparent">
              Everything Included.
            </span>
          </h1>
          <p className="text-xl text-[#A8B3CF] max-w-2xl mx-auto">
            No tiers, no upsells, no confusion. Get full access to every feature from day one.
          </p>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16"
        >
          {stats.map((stat, i) => (
            <div key={i} className="bg-[#0B1220] border border-[#00FF85]/20 rounded-2xl p-5 text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-[#00FF85] to-[#00E0FF] bg-clip-text text-transparent mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-[#A8B3CF]">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Main Content — two column on lg */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">

          {/* Left — value proposition */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white to-[#A8B3CF] bg-clip-text text-transparent">
                Why serious bettors choose Go Pro
              </span>
            </h2>
            <p className="text-[#A8B3CF] mb-8 leading-relaxed">
              Stop guessing. Start winning with real-time AI-powered insights, live data analysis, and a platform built for players who take their game seriously.
            </p>

            <div className="space-y-4 mb-10">
              {highlights.map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-start gap-4 bg-[#0B1220] border border-[#00FF85]/10 rounded-xl p-4"
                >
                  <div className="w-10 h-10 bg-[#00FF85]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <h.icon size={20} className="text-[#00FF85]" />
                  </div>
                  <p className="text-[#A8B3CF] text-sm leading-relaxed pt-1">{h.text}</p>
                </motion.div>
              ))}
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-3">
              {['30-Day Guarantee', 'Cancel Anytime', 'No Hidden Fees'].map((badge, i) => (
                <span key={i} className="flex items-center gap-1.5 text-xs text-[#00FF85] bg-[#00FF85]/10 border border-[#00FF85]/20 px-3 py-1.5 rounded-full">
                  <CheckCircle size={12} />
                  {badge}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right — pricing card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#00FF85]/20 to-[#00E0FF]/10 blur-3xl rounded-3xl" />

            <div className="relative bg-[#0B1220] rounded-3xl p-8 border-2 border-[#00FF85] shadow-2xl shadow-[#00FF85]/20">
              {/* Badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#00FF85] to-[#00E0FF] text-[#060B12] px-6 py-2 rounded-full font-semibold text-sm flex items-center gap-2 whitespace-nowrap">
                <Sparkles size={14} />
                Go Pro
              </div>

              {/* Plan name & price */}
              <div className="text-center mb-8 pt-2">
                <h3 className="text-3xl font-bold mb-1">Unlimited Tips</h3>
                <p className="text-[#A8B3CF] text-sm mb-6">Full access to all premium features</p>
                <div className="flex items-baseline gap-2 justify-center">
                  <span className="text-6xl font-bold bg-gradient-to-r from-[#00FF85] to-[#00E0FF] bg-clip-text text-transparent">
                    $0.99
                  </span>
                  <span className="text-[#A8B3CF] text-lg">/month</span>
                </div>
                <p className="text-xs text-[#A8B3CF] mt-2">Full access. No limits.</p>
              </div>

              {/* Divider */}
              <div className="border-t border-[#00FF85]/10 mb-6" />

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle size={18} className="text-[#00FF85] flex-shrink-0" />
                    <span className="text-[#A8B3CF] text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <motion.a
                href="https://apps.apple.com/us/app/the-betting-matrix/id6760174152"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="cursor-pointer w-full py-4 rounded-xl font-semibold flex items-center justify-center gap-2 bg-gradient-to-r from-[#00FF85] to-[#00E0FF] text-[#060B12] shadow-lg shadow-[#00FF85]/25 text-base"
              >
                <Sparkles size={18} />
                Start Go Pro Trial
              </motion.a>

              {/* <p className="text-center text-xs text-[#A8B3CF] mt-4">
                No credit card required · Cancel anytime
              </p> */}
            </div>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <FAQSection />
      </div>
    </div>
  );
}

function FAQSection() {
  const faqs = [
    {
      question: 'Can I cancel at any time?',
      answer: 'Yes! You can cancel your subscription at any time. You\'ll retain access to Go Pro features until the end of your current billing period.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, debit cards, and PayPal. All payments are processed securely.'
    },
    {
      question: 'Is there a free trial for Go Pro?',
      answer: 'Yes! New Go Pro subscribers get a 7-day free trial with full access to all premium features. No credit card required.'
    },
    {
      question: 'Do you offer refunds?',
      answer: 'We offer a 30-day money-back guarantee. If you\'re not satisfied, contact our support team.'
    },
    {
      question: 'How accurate are your predictions?',
      answer: 'Our current accuracy rate is 82.4% across all sports. We maintain full transparency with all historical results available in the app.'
    },
    {
      question: 'What sports do you cover?',
      answer: 'We cover 25+ sports including NFL, NBA, MLB, NHL, Soccer, Tennis, Golf, MMA, Boxing, and many more.'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mt-16 sm:mt-32"
    >
      <h2 className="text-4xl font-bold text-center mb-4">
        <span className="bg-gradient-to-r from-white to-[#A8B3CF] bg-clip-text text-transparent">
          Frequently Asked Questions
        </span>
      </h2>
      <p className="text-center text-[#A8B3CF] mb-12">Everything you need to know before getting started</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-[#0B1220] border border-[#00FF85]/20 rounded-2xl p-6 hover:border-[#00FF85]/40 transition-colors"
          >
            <h3 className="font-semibold mb-3 text-white">{faq.question}</h3>
            <p className="text-[#A8B3CF] text-sm">{faq.answer}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

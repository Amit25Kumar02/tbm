import { motion } from 'motion/react';
import { Bell, TrendingUp, Star, Brain, BarChart3, Zap, Target, Shield, Activity, Sparkles } from 'lucide-react';

export default function FeaturesPage() {
  const features = [
    {
      icon: Bell,
      title: 'Future Tips',
      description: 'Real-Time Betting Insights',
      details: 'Get instant notifications when high-probability opportunities are detected across 25+ sports. Our system analyzes live data 24/7 to deliver actionable insights directly to your device.',
      benefits: [
        'Push notifications for time-sensitive opportunities',
        'Detailed analysis and reasoning for each tip',
        'Confidence scores based on historical data',
        'Multi-sport coverage including NFL, NBA, MLB, NHL, Soccer, and more'
      ],
      image: 'future-tips',
      color: 'from-[#00FF85] to-[#00E0FF]'
    },
    {
      icon: BarChart3,
      title: 'Past Results',
      description: 'Complete Performance History',
      details: 'Track every tip we\'ve ever sent with full transparency. Review historical performance, analyze trends, and verify our track record with comprehensive data.',
      benefits: [
        'Complete win/loss tracking for all tips',
        'ROI calculations and profit/loss analysis',
        'Filter by sport, date range, and confidence level',
        'Export data for your own analysis'
      ],
      image: 'past-results',
      color: 'from-[#00E0FF] to-[#7B61FF]'
    },
    {
      icon: Star,
      title: 'Favorites',
      description: 'Personalized Alerts',
      details: 'Customize your experience by selecting your favorite teams, sports, and leagues. Receive priority notifications for the matchups you care about most.',
      benefits: [
        'Follow specific teams and leagues',
        'Custom notification preferences',
        'Priority alerts for favorited matchups',
        'Quick access to relevant tips'
      ],
      image: 'favorites',
      color: 'from-[#7B61FF] to-[#FF6B9D]'
    },
    {
      icon: Zap,
      title: 'Smart Notifications',
      description: 'Intelligent Alert System',
      details: 'Never miss a valuable opportunity with our smart notification system. Receive alerts based on your preferences, schedule, and betting patterns.',
      benefits: [
        'Customizable quiet hours',
        'Confidence threshold settings',
        'Sport-specific notification rules',
        'Priority alerts for high-value opportunities'
      ],
      image: 'notifications',
      color: 'from-[#FF6B9D] to-[#FFA726]'
    },
    {
      icon: Activity,
      title: 'Live Tracking',
      description: 'Real-Time Updates',
      details: 'Monitor your active tips in real-time with live score updates and status tracking. See how your bets are performing as games unfold.',
      benefits: [
        'Live score integration',
        'Real-time win probability updates',
        'Active bet tracking dashboard',
        'Push notifications for bet outcomes'
      ],
      image: 'live-tracking',
      color: 'from-[#FFA726] to-[#00FF85]'
    },
    {
      icon: Brain,
      title: 'AI Insights',
      description: 'Machine Learning Analysis',
      details: 'Powered by advanced AI algorithms that analyze thousands of data points to identify patterns and opportunities invisible to human analysis.',
      benefits: [
        'Pattern recognition across historical data',
        'Real-time odds movement analysis',
        'Injury and lineup impact assessment',
        'Weather and venue factor analysis'
      ],
      image: 'ai-insights',
      color: 'from-[#00FF85] to-[#00E0FF]'
    },
    {
      icon: Sparkles,
      title: 'Go Pro Features',
      description: 'Premium Intelligence',
      details: 'Unlock advanced features with Go Pro subscription including unlimited tips, priority support, and exclusive access to high-confidence predictions.',
      benefits: [
        'Unlimited daily tips across all sports',
        'Advanced filtering and search',
        'Historical data exports',
        'Priority customer support'
      ],
      image: 'g-pro',
      color: 'from-[#00E0FF] to-[#7B61FF]'
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-[#A8B3CF] bg-clip-text text-transparent">
              Powerful Features
            </span>
          </h1>
          <p className="text-xl text-[#A8B3CF] max-w-3xl mx-auto">
            Everything you need to make smarter, data-driven betting decisions
          </p>
        </motion.div>

        {/* Feature Sections */}
        <div className="space-y-16 sm:space-y-32">
          {features.map((feature, index) => (
            <FeatureSection key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

interface Feature {
  icon: any;
  title: string;
  description: string;
  details: string;
  benefits: string[];
  image: string;
  color: string;
}

function FeatureSection({ feature, index }: { feature: Feature; index: number }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}
    >
      {/* Content */}
      <div className={isEven ? 'lg:order-1' : 'lg:order-2'}>
        <div className="flex items-center gap-4 mb-6">
          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center`}>
            <feature.icon size={32} className="text-[#060B12]" />
          </div>
          <div>
            <h2 className="text-3xl font-bold">{feature.title}</h2>
            <p className="text-[#A8B3CF]">{feature.description}</p>
          </div>
        </div>

        <p className="text-lg text-[#A8B3CF] mb-8 leading-relaxed">
          {feature.details}
        </p>

        <div className="space-y-3">
          {feature.benefits.map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-start gap-3"
            >
              <div className="w-6 h-6 rounded-full bg-[#00FF85]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <div className="w-2 h-2 rounded-full bg-[#00FF85]" />
              </div>
              <span className="text-[#A8B3CF]">{benefit}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Visual Mockup */}
      <div className={isEven ? 'lg:order-2' : 'lg:order-1'}>
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="relative"
        >
          <div className="relative bg-[#0B1220] border border-[#00FF85]/20 rounded-3xl p-4 sm:p-8 overflow-hidden">
            {/* Glow Effect */}
            <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-10 blur-3xl`} />

            {/* Mockup Content */}
            <div className="relative md:aspect-[4/3] flex items-center justify-center py-4">
              <FeatureMockup feature={feature} />
            </div>
          </div>

          {/* Floating Accent */}
          <div className={`absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br ${feature.color} rounded-full blur-3xl opacity-30`} />
        </motion.div>
      </div>
    </motion.div>
  );
}

function FeatureMockup({ feature }: { feature: Feature }) {
  // Different mockup for each feature
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full max-w-[18rem] h-80 sm:h-96 bg-[#060B12] rounded-2xl border border-[#00FF85]/30 p-5 shadow-2xl">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-bold">{feature.title}</h3>
          <feature.icon size={20} className="text-[#00FF85]" />
        </div>

        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
              className={`bg-[#0B1220] border border-[#00FF85]/20 rounded-lg p-4`}
            >
              <div className="h-4 bg-[#00FF85]/20 rounded w-3/4 mb-2" />
              <div className="h-3 bg-[#00E0FF]/10 rounded w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

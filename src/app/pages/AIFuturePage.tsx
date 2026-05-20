import { motion } from 'motion/react';
import { Brain, Zap, Target, Activity, Sparkles, TrendingUp, Database, Cpu, Network, Eye, Lock, Rocket } from 'lucide-react';

export default function AIFuturePage() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <HeroSection />

        {/* AI Capabilities */}
        <AICapabilities />

        {/* Technology Stack */}
        <TechnologyStack />

        {/* Roadmap */}
        <Roadmap />

        {/* Vision Section */}
        <VisionSection />
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <div className="relative mb-16 sm:mb-32">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute inset-0" style={{
          background: `
            radial-gradient(circle at 20% 50%, rgba(0,255,133,0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 50%, rgba(0,224,255,0.15) 0%, transparent 50%)
          `
        }} />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative text-center py-4 md:py-10"
      >
        <div className="inline-flex items-center gap-2 bg-[#00FF85]/10 border border-[#00FF85]/20 rounded-full px-6 py-3 mb-8">
          <Sparkles size={20} className="text-[#00FF85]" />
          <span className="text-[#00FF85] font-medium">Coming Soon</span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-8">
          <span className="bg-gradient-to-r from-white to-[#A8B3CF] bg-clip-text text-transparent">
            The Future of
          </span>
          <br />
          <span className="bg-gradient-to-r from-[#00FF85] to-[#00E0FF] bg-clip-text text-transparent">
            Sports Intelligence
          </span>
        </h1>

        <p className="text-xl text-[#A8B3CF] max-w-3xl mx-auto mb-12">
          Advanced AI and machine learning capabilities that will revolutionize how you analyze and predict sports outcomes
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://apps.apple.com/us/app/the-betting-matrix/id6760174152"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer px-8 py-4 bg-gradient-to-r from-[#00FF85] to-[#00E0FF] text-[#060B12] rounded-lg font-semibold"
          >
            App Store
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.bettingmatrix"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer px-8 py-4 bg-[#0B1220] border border-[#00FF85]/20 text-white rounded-lg font-semibold hover:bg-[#00FF85]/10"
          >
            Google Play
          </a>
        </div>
      </motion.div>
    </div>
  );
}

function AICapabilities() {
  const capabilities = [
    {
      icon: Brain,
      title: 'Neural Network Analysis',
      description: 'Deep learning models trained on millions of historical games to identify winning patterns',
      features: ['Pattern recognition', 'Predictive modeling', 'Anomaly detection', 'Continuous learning']
    },
    {
      icon: Activity,
      title: 'Real-Time Market Intelligence',
      description: 'Live odds movement tracking and instant analysis of market inefficiencies',
      features: ['Odds movement alerts', 'Value identification', 'Line prediction', 'Market sentiment']
    },
    {
      icon: Target,
      title: 'Predictive Probability Engine',
      description: 'Advanced algorithms calculate win probabilities with unprecedented accuracy',
      features: ['Dynamic probability', 'Confidence scoring', 'Risk assessment', 'Expected value']
    },
    {
      icon: Zap,
      title: 'Automated Edge Detection',
      description: 'Automatically identify betting edges before the market catches up',
      features: ['Auto-scanning', 'Edge alerts', 'Value ranking', 'Opportunity scoring']
    },
    {
      icon: Database,
      title: 'Big Data Processing',
      description: 'Process millions of data points in real-time for instant insights',
      features: ['Historical analysis', 'Trend detection', 'Correlation analysis', 'Statistical modeling']
    },
    {
      icon: Eye,
      title: 'Computer Vision Analysis',
      description: 'Analyze game footage and player movements for deeper insights',
      features: ['Player tracking', 'Formation analysis', 'Injury detection', 'Performance metrics']
    }
  ];

  return (
    <div className="mb-16 sm:mb-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="bg-gradient-to-r from-white to-[#A8B3CF] bg-clip-text text-transparent">
            AI-Powered Capabilities
          </span>
        </h2>
        <p className="text-xl text-[#A8B3CF] max-w-3xl mx-auto">
          Next-generation technology for unparalleled sports analysis
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {capabilities.map((capability, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative bg-[#0B1220] border border-[#00FF85]/20 rounded-2xl p-6 hover:border-[#00FF85]/40 transition-all group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#00FF85]/5 to-[#00E0FF]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="relative">
              <div className="w-14 h-14 bg-[#00FF85]/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <capability.icon size={28} className="text-[#00FF85]" />
              </div>

              <h3 className="text-xl font-bold mb-2">{capability.title}</h3>
              <p className="text-[#A8B3CF] mb-4 text-sm">{capability.description}</p>

              <ul className="space-y-2">
                {capability.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-[#A8B3CF]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00FF85]" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function TechnologyStack() {
  const technologies = [
    { icon: Brain, name: 'TensorFlow', description: 'Deep learning framework' },
    { icon: Cpu, name: 'PyTorch', description: 'Neural networks' },
    { icon: Database, name: 'Apache Spark', description: 'Big data processing' },
    { icon: Network, name: 'Kubernetes', description: 'Scalable infrastructure' },
    { icon: Zap, name: 'Redis', description: 'Real-time caching' },
    { icon: Lock, name: 'Encryption', description: 'Secure data handling' }
  ];

  return (
    <div className="mb-16 sm:mb-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="bg-gradient-to-r from-white to-[#A8B3CF] bg-clip-text text-transparent">
            Built on Cutting-Edge Technology
          </span>
        </h2>
        <p className="text-xl text-[#A8B3CF] max-w-3xl mx-auto">
          Enterprise-grade infrastructure powering our AI platform
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {technologies.map((tech, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.1 }}
            className="bg-[#0B1220] border border-[#00FF85]/20 rounded-xl p-6 text-center hover:border-[#00FF85]/40 transition-all"
          >
            <tech.icon size={32} className="text-[#00FF85] mx-auto mb-3" />
            <div className="font-semibold mb-1 text-sm">{tech.name}</div>
            <div className="text-xs text-[#A8B3CF]">{tech.description}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function Roadmap() {
  const phases = [
    {
      phase: 'Phase 1',
      quarter: 'Q2 2026',
      title: 'Foundation',
      items: ['Basic AI predictions', 'Historical data integration', 'Pattern recognition engine', 'Beta testing program'],
      status: 'In Progress'
    },
    {
      phase: 'Phase 2',
      quarter: 'Q3 2026',
      title: 'Enhancement',
      items: ['Real-time odds analysis', 'Multi-sport AI models', 'Advanced probability scoring', 'API access'],
      status: 'Planned'
    },
    {
      phase: 'Phase 3',
      quarter: 'Q4 2026',
      title: 'Intelligence',
      items: ['Computer vision analysis', 'Player performance AI', 'Injury prediction models', 'Market sentiment analysis'],
      status: 'Planned'
    },
    {
      phase: 'Phase 4',
      quarter: 'Q1 2027',
      title: 'Revolution',
      items: ['Autonomous betting suggestions', 'Portfolio optimization', 'Risk management AI', 'Full automation suite'],
      status: 'Future'
    }
  ];

  return (
    <div className="mb-16 sm:mb-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="bg-gradient-to-r from-white to-[#A8B3CF] bg-clip-text text-transparent">
            Development Roadmap
          </span>
        </h2>
        <p className="text-xl text-[#A8B3CF] max-w-3xl mx-auto">
          Our path to revolutionizing sports intelligence
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {phases.map((phase, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative bg-[#0B1220] border border-[#00FF85]/20 rounded-2xl p-6"
          >
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-4 ${
              phase.status === 'In Progress'
                ? 'bg-[#00FF85]/10 text-[#00FF85]'
                : phase.status === 'Planned'
                ? 'bg-[#00E0FF]/10 text-[#00E0FF]'
                : 'bg-[#A8B3CF]/10 text-[#A8B3CF]'
            }`}>
              {phase.status}
            </div>

            <div className="text-sm text-[#A8B3CF] mb-1">{phase.phase}</div>
            <div className="text-xs text-[#00E0FF] mb-2">{phase.quarter}</div>
            <h3 className="text-xl font-bold mb-4">{phase.title}</h3>

            <ul className="space-y-2">
              {phase.items.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-[#A8B3CF]">
                  <Rocket size={14} className="text-[#00FF85] flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function VisionSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative bg-gradient-to-br from-[#00FF85]/10 to-[#00E0FF]/10 border border-[#00FF85]/20 rounded-3xl p-6 sm:p-12 text-center overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0,255,133,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,133,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative">
        <div className="w-20 h-20 bg-gradient-to-br from-[#00FF85] to-[#00E0FF] rounded-2xl flex items-center justify-center mx-auto mb-6">
          <Brain size={40} className="text-[#060B12]" />
        </div>

        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="bg-gradient-to-r from-white to-[#A8B3CF] bg-clip-text text-transparent">
            Our Vision
          </span>
        </h2>

        <p className="text-xl text-[#A8B3CF] max-w-3xl mx-auto mb-8 leading-relaxed">
          We're building the world's most advanced sports intelligence platform. By combining cutting-edge AI,
          real-time data processing, and decades of sports analytics expertise, we're creating tools that don't
          just analyze data — they understand the game at a level previously thought impossible.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-[#0B1220] border border-[#00FF85]/20 rounded-xl p-6">
            <div className="text-3xl font-bold text-[#00FF85] mb-2">95%+</div>
            <div className="text-sm text-[#A8B3CF]">Target Accuracy</div>
          </div>
          <div className="bg-[#0B1220] border border-[#00FF85]/20 rounded-xl p-6">
            <div className="text-3xl font-bold text-[#00E0FF] mb-2">100+</div>
            <div className="text-sm text-[#A8B3CF]">Sports Covered</div>
          </div>
          <div className="bg-[#0B1220] border border-[#00FF85]/20 rounded-xl p-6">
            <div className="text-3xl font-bold text-[#7B61FF] mb-2">24/7</div>
            <div className="text-sm text-[#A8B3CF]">AI Analysis</div>
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="cursor-pointer mt-8 px-8 py-4 bg-gradient-to-r from-[#00FF85] to-[#00E0FF] text-[#060B12] rounded-lg font-semibold"
        >
          Be Part of the Future
        </motion.button>
      </div>
    </motion.div>
  );
}

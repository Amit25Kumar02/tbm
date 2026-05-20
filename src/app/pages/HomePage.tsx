import { motion } from 'motion/react';
import { ArrowRight, Download, TrendingUp, Target, Zap, Brain, BarChart3, Bell, Star, Shield, Sparkles, Activity, CheckCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import MatrixRain from '../components/MatrixRain';
import PhoneMockup from '../components/PhoneMockup';
import StatsCard from '../components/StatsCard';
import BentoCard from '../components/BentoCard';
import PerformanceChart from '../components/PerformanceChart';

export default function HomePage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <HeroSection />

      {/* How It Works Section */}
      <HowItWorksSection />

      {/* Why TBM Section */}
      <WhyTBMSection />

      {/* Live Results Section */}
      <LiveResultsSection />

      {/* G Pro Section */}
      <GProSection />

      {/* AI Future Section */}
      <AIFutureSection />

      {/* Download CTA Section */}
      <DownloadCTASection />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Matrix Rain Background */}
      <MatrixRain />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#060B12] via-transparent to-[#060B12]" />

      {/* Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0,255,133,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,133,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-[#00FF85]/10 border border-[#00FF85]/20 rounded-full px-4 py-2 mb-8"
            >
              <Sparkles size={16} className="text-[#00FF85]" />
              <span className="text-sm text-[#00FF85]">AI-Powered Sports Intelligence</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white to-[#A8B3CF] bg-clip-text text-transparent">
                Real-Time
              </span>
              <br />
              <span className="bg-gradient-to-r from-white to-[#A8B3CF] bg-clip-text text-transparent">
                Betting Insights.
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#00FF85] to-[#00E0FF] bg-clip-text text-transparent md:whitespace-nowrap ">
                Delivered Instantly.
              </span>
            </h1>

            <p className="text-xl text-[#A8B3CF] mb-8 leading-relaxed">
              Get high-probability sports insights powered by live data, automation, and future AI intelligence.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <motion.a
                href="https://apps.apple.com/us/app/the-betting-matrix/id6760174152"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="cursor-pointer flex items-center justify-center gap-2 bg-gradient-to-r from-[#00FF85] to-[#00E0FF] text-[#060B12] px-8 py-4 rounded-lg font-semibold shadow-lg shadow-[#00FF85]/25 hover:shadow-[#00FF85]/40 transition-all"
              >
                <Download size={20} />
                Download on App Store
              </motion.a>

              <motion.a
                href='/features'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                // onClick={() => document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' })}
                className="cursor-pointer flex items-center justify-center gap-2 bg-[#0B1220] border border-[#00FF85]/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#00FF85]/10 transition-all"
              >

                Explore Features

                <ArrowRight size={20} />
              </motion.a>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <StatsCard value="82%" label="Accuracy" />
              <StatsCard value="14K+" label="Tips Sent" />
              <StatsCard value="25" label="Sports" />
              <StatsCard value="24/7" label="Live Alerts" />
            </div>
          </motion.div>

          {/* Right Side - Phone Mockups */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative h-[500px] hidden lg:flex lg:items-center lg:justify-end"
          >
            <div className="scale-[0.82] origin-right -translate-y-8">
              <PhoneMockup />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  const steps = [
    {
      icon: Bell,
      title: 'Get Instant Alerts',
      description: 'Receive real-time notifications when high-probability opportunities are detected.'
    },
    {
      icon: Target,
      title: 'View High-Probability Tips',
      description: 'Access detailed insights with confidence scores and data-driven analysis.'
    },
    {
      icon: BarChart3,
      title: 'Track Results in Real Time',
      description: 'Monitor your performance with comprehensive analytics and historical tracking.'
    }
  ];

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#060B12] via-[#0B1220] to-[#060B12]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-[#A8B3CF] bg-clip-text text-transparent">
              How It Works
            </span>
          </h2>
          <p className="text-xl text-[#A8B3CF] max-w-2xl mx-auto">
            Three simple steps to start winning smarter
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#00FF85]/20 to-transparent -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                <div className="relative bg-[#0B1220] border border-[#00FF85]/20 rounded-2xl p-8 hover:border-[#00FF85]/40 transition-all group">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00FF85]/10 to-[#00E0FF]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />

                  <div className="relative">
                    {/* Step Number */}
                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-[#00FF85] to-[#00E0FF] rounded-full flex items-center justify-center font-bold text-[#060B12]">
                      {index + 1}
                    </div>

                    {/* Icon */}
                    <div className="w-16 h-16 bg-[#00FF85]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <step.icon size={32} className="text-[#00FF85]" />
                    </div>

                    <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                    <p className="text-[#A8B3CF]">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyTBMSection() {
  const features = [
    {
      icon: Bell,
      title: 'Real-Time Notifications',
      description: 'Get instant alerts when opportunities arise',
      gradient: 'from-[#00FF85] to-[#00E0FF]'
    },
    {
      icon: TrendingUp,
      title: 'Multi-Sport Coverage',
      description: '25+ sports tracked continuously',
      gradient: 'from-[#00E0FF] to-[#7B61FF]'
    },
    {
      icon: Brain,
      title: 'AI-Powered Predictions',
      description: 'Machine learning analysis for better insights',
      gradient: 'from-[#7B61FF] to-[#FF6B9D]'
    },
    {
      icon: BarChart3,
      title: 'Performance Tracking',
      description: 'Detailed analytics and historical data',
      gradient: 'from-[#FF6B9D] to-[#FFA726]'
    },
    {
      icon: Star,
      title: 'Favorites & Custom Alerts',
      description: 'Personalize your experience',
      gradient: 'from-[#FFA726] to-[#00FF85]'
    },
    {
      icon: Sparkles,
      title: 'Go Pro Intelligence',
      description: 'Premium features for serious players',
      gradient: 'from-[#00FF85] to-[#00E0FF]'
    },
    {
      icon: Zap,
      title: 'Automated Insights',
      description: 'No manual research required',
      gradient: 'from-[#00E0FF] to-[#7B61FF]'
    },
    {
      icon: Shield,
      title: 'Data-Driven Decisions',
      description: 'Make informed choices with confidence',
      gradient: 'from-[#7B61FF] to-[#FF6B9D]'
    }
  ];

  return (
    <section className="relative py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-[#A8B3CF] bg-clip-text text-transparent">
              Why Choose TBM
            </span>
          </h2>
          <p className="text-xl text-[#A8B3CF] max-w-2xl mx-auto">
            Premium features designed for winning
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <BentoCard key={index} {...feature} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function LiveResultsSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#060B12] via-[#0B1220] to-[#060B12]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-[#A8B3CF] bg-clip-text text-transparent">
              Live Performance Dashboard
            </span>
          </h2>
          <p className="text-xl text-[#A8B3CF] max-w-2xl mx-auto">
            Track our proven track record in real-time
          </p>
        </motion.div>

        <PerformanceChart />
      </div>
    </section>
  );
}

function GProSection() {
  const features = [
    'Unlimited Tips',
    'AI Predictions',
    'Advanced Tracking',
    'Premium Sports',
    'Real-Time Signals',
    'Smart Notifications',
    'Priority Support',
    'Historical Data Access'
  ];

  const highlights = [
    { icon: Zap, text: 'Instant alerts the moment opportunities arise' },
    { icon: Shield, text: '30-day money-back guarantee, no questions asked' },
    { icon: Star, text: 'Full access to all premium features' },
  ];

  return (
    <section className="relative py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-[#A8B3CF] bg-clip-text text-transparent">
              Unlock Premium Features
            </span>
          </h2>
          <p className="text-xl text-[#A8B3CF] max-w-2xl mx-auto">
            One plan. Everything included. No hidden fees.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left — value proposition */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white to-[#A8B3CF] bg-clip-text text-transparent">
                Why serious bettors choose Go Pro
              </span>
            </h3>
            <p className="text-[#A8B3CF] mb-8 leading-relaxed">
              Stop guessing. Start winning with real-time AI-powered insights, live data analysis, and a platform built for players who take their game seriously.
            </p>

            <div className="space-y-4 mb-8">
              {highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-4 bg-[#0B1220] border border-[#00FF85]/10 rounded-xl p-4">
                  <div className="w-10 h-10 bg-[#00FF85]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <h.icon size={20} className="text-[#00FF85]" />
                  </div>
                  <p className="text-[#A8B3CF] text-sm leading-relaxed pt-1">{h.text}</p>
                </div>
              ))}
            </div>

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
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#00FF85]/20 to-[#00E0FF]/10 blur-3xl rounded-3xl" />
            <div className="relative bg-[#0B1220] rounded-3xl p-8 border-2 border-[#00FF85] shadow-2xl shadow-[#00FF85]/20">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#00FF85] to-[#00E0FF] text-[#060B12] px-6 py-2 rounded-full font-semibold text-sm flex items-center gap-2 whitespace-nowrap">
                <Sparkles size={14} />
                Go Pro
              </div>

              <div className="text-center mb-6 pt-2">
                <h3 className="text-3xl font-bold mb-1">Unlimited Tips</h3>
                <p className="text-[#A8B3CF] text-sm mb-4">Full access to all premium features</p>
                <div className="flex items-baseline gap-2 justify-center">
                  <span className="text-6xl font-bold bg-gradient-to-r from-[#00FF85] to-[#00E0FF] bg-clip-text text-transparent">$0.99</span>
                  <span className="text-[#A8B3CF] text-lg">/month</span>
                </div>
                <p className="text-xs text-[#A8B3CF] mt-2">Full access. No limits.</p>
              </div>

              <div className="border-t border-[#00FF85]/10 mb-6" />

              <ul className="space-y-3 mb-8">
                {features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle size={18} className="text-[#00FF85] flex-shrink-0" />
                    <span className="text-[#A8B3CF] text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.a
                href="https://apps.apple.com/us/app/the-betting-matrix/id6760174152"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="cursor-pointer w-full py-4 rounded-xl font-semibold flex items-center justify-center gap-2 bg-gradient-to-r from-[#00FF85] to-[#00E0FF] text-[#060B12] shadow-lg shadow-[#00FF85]/25"
              >
                <Sparkles size={18} />
                Start Go Pro Trial
              </motion.a>
              {/* <p className="text-center text-xs text-[#A8B3CF] mt-4">No credit card required · Cancel anytime</p> */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function AIFutureSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#060B12] via-[#0B1220] to-[#060B12]" />

      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          background: `
            radial-gradient(circle at 20% 50%, rgba(0,255,133,0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 50%, rgba(0,224,255,0.1) 0%, transparent 50%)
          `
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-[#A8B3CF] bg-clip-text text-transparent">
              The Future of Sports Intelligence
            </span>
          </h2>
          <p className="text-xl text-[#A8B3CF] max-w-2xl mx-auto">
            Next-generation AI capabilities coming soon
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: Brain, title: 'AI-Powered Betting Insights', description: 'Advanced neural networks analyzing patterns' },
            { icon: Activity, title: 'Real-Time Market Analysis', description: 'Live odds movement tracking and prediction' },
            { icon: Target, title: 'Predictive Intelligence', description: 'Forecast outcomes before they happen' },
            { icon: Zap, title: 'Automated Edge Detection', description: 'Find value opportunities automatically' },
            { icon: Sparkles, title: 'Smart Probability Engine', description: 'Dynamic confidence scoring system' },
            { icon: TrendingUp, title: 'Expanded Sports Markets', description: 'Coverage across all major leagues' }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative bg-[#0B1220] border border-[#00FF85]/20 rounded-xl p-6 hover:border-[#00FF85]/40 transition-all group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#00FF85]/5 to-[#00E0FF]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative">
                <div className="w-12 h-12 bg-[#00FF85]/10 rounded-lg flex items-center justify-center mb-4">
                  <item.icon size={24} className="text-[#00FF85]" />
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-[#A8B3CF]">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DownloadCTASection() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#00FF85]/10 to-[#00E0FF]/10" />
      <div className="absolute inset-0 backdrop-blur-3xl" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-[#A8B3CF] bg-clip-text text-transparent">
              Start Winning Smarter
            </span>
          </h2>
          <p className="text-xl text-[#A8B3CF] mb-12 max-w-2xl mx-auto">
            Download TBM and receive real-time sports insights instantly.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="https://apps.apple.com/us/app/the-betting-matrix/id6760174152"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer flex items-center justify-center gap-2 bg-gradient-to-r from-[#00FF85] to-[#00E0FF] text-[#060B12] px-10 py-5 rounded-lg font-semibold shadow-lg shadow-[#00FF85]/25 text-lg"
            >
              <Download size={24} />
              App Store
            </motion.a>

            <motion.a
              href="/pricing"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer flex items-center justify-center gap-2 bg-gradient-to-r from-[#00FF85] to-[#00E0FF] text-[#060B12] px-10 py-5 rounded-lg font-semibold shadow-lg shadow-[#00FF85]/25 text-lg"
            >
              Join Go Pro
              <ArrowRight size={24} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from 'motion/react';
import { Mail, MessageCircle, Phone, Clock, HelpCircle, Book, Video, Users } from 'lucide-react';
import { useState } from 'react';

export default function SupportPage() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-[#A8B3CF] bg-clip-text text-transparent">
              How Can We Help?
            </span>
          </h1>
          <p className="text-xl text-[#A8B3CF] max-w-3xl mx-auto">
            Get the support you need, when you need it
          </p>
        </motion.div>

        {/* Support Options */}
        <SupportOptions />

        {/* Contact Form */}
        <ContactForm />

        {/* FAQ Section */}
        <FAQSection />

        {/* Resources */}
        <ResourcesSection />
      </div>
    </div>
  );
}

function SupportOptions() {
  const options = [
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Chat with our support team',
      availability: 'Available 24/7',
      color: 'from-[#00FF85] to-[#00E0FF]',
      // action: 'Start Chat'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us a detailed message',
      availability: 'Response within 2 hours',
      color: 'from-[#00E0FF] to-[#7B61FF]',
      // action: 'Send Email'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Talk to our team directly',
      availability: 'Mon-Fri, 9AM-6PM EST',
      color: 'from-[#7B61FF] to-[#FF6B9D]',
      // action: 'Call Now'
    },
    {
      icon: Book,
      title: 'Documentation',
      description: 'Browse our knowledge base',
      availability: 'Always available',
      color: 'from-[#FF6B9D] to-[#FFA726]',
      // action: 'View Docs'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 sm:mb-20">
      {options.map((option, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="relative bg-[#0B1220] border border-[#00FF85]/20 rounded-2xl p-6 hover:border-[#00FF85]/40 transition-all group"
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${option.color} opacity-0 group-hover:opacity-10 transition-opacity rounded-2xl`} />

          <div className="relative">
            <div className={`w-14 h-14 bg-gradient-to-br ${option.color} rounded-xl flex items-center justify-center mb-4`}>
              <option.icon size={28} className="text-[#060B12]" />
            </div>

            <h3 className="text-xl font-bold mb-2">{option.title}</h3>
            <p className="text-[#A8B3CF] text-sm mb-4">{option.description}</p>

            <div className="flex items-center gap-2 mb-4">
              <Clock size={14} className="text-[#00FF85]" />
              <span className="text-xs text-[#A8B3CF]">{option.availability}</span>
            </div>

            {/* <button className="cursor-pointer w-full py-2 bg-[#00FF85]/10 border border-[#00FF85]/20 rounded-lg text-[#00FF85] font-medium hover:bg-[#00FF85]/20 transition-colors">
              {option.action}
            </button> */}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: 'general',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[TBM Support] ${formData.category} - ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nCategory: ${formData.category}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:amitchitain@gmail.com?subject=${subject}&body=${body}`;
    setFormData({ name: '', email: '', category: 'general', message: '' });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-[#0B1220] border border-[#00FF85]/20 rounded-3xl p-6 sm:p-8 mb-12 sm:mb-20"
    >
      <h2 className="text-3xl font-bold mb-2">Send Us a Message</h2>
      <p className="text-[#A8B3CF] mb-8">Fill out the form below and we'll get back to you as soon as possible</p>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium mb-2">Your Name</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full bg-[#060B12] border border-[#00FF85]/20 rounded-lg px-4 py-3 text-white placeholder-[#A8B3CF]/50 focus:border-[#00FF85]/40 focus:outline-none transition-colors"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Email Address</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full bg-[#060B12] border border-[#00FF85]/20 rounded-lg px-4 py-3 text-white placeholder-[#A8B3CF]/50 focus:border-[#00FF85]/40 focus:outline-none transition-colors"
            placeholder="john@example.com"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium mb-2">Category</label>
          <select
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            className="w-full bg-[#060B12] border border-[#00FF85]/20 rounded-lg px-4 py-3 text-white focus:border-[#00FF85]/40 focus:outline-none transition-colors"
          >
            <option value="general">General Inquiry</option>
            <option value="technical">Technical Support</option>
            <option value="billing">Billing Question</option>
            <option value="feature">Feature Request</option>
            <option value="bug">Bug Report</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium mb-2">Message</label>
          <textarea
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            rows={6}
            className="w-full bg-[#060B12] border border-[#00FF85]/20 rounded-lg px-4 py-3 text-white placeholder-[#A8B3CF]/50 focus:border-[#00FF85]/40 focus:outline-none transition-colors resize-none"
            placeholder="Tell us how we can help you..."
          />
        </div>

        <div className="md:col-span-2">
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="cursor-pointer w-full py-4 bg-gradient-to-r from-[#00FF85] to-[#00E0FF] text-[#060B12] rounded-lg font-semibold shadow-lg shadow-[#00FF85]/25"
          >
            Send Message
          </motion.button>
        </div>
      </form>
    </motion.div>
  );
}

function FAQSection() {
  const faqs = [
    {
      question: 'How do I download the TBM app?',
      answer: 'You can download TBM from the App Store for iOS devices or Google Play Store for Android devices. Simply search for "TBM - The Betting Machine" and click install.'
    },
    {
      question: 'What sports do you cover?',
      answer: 'We cover 25+ sports including NFL, NBA, MLB, NHL, Soccer, Tennis, Golf, MMA, Boxing, and many more. Our G Pro plan includes access to all sports.'
    },
    {
      question: 'How accurate are your predictions?',
      answer: 'Our current accuracy rate is 82.4% across all sports. We maintain full transparency with all our historical results available in the app.'
    },
    {
      question: 'Can I cancel my G Pro subscription anytime?',
      answer: 'Yes, you can cancel your subscription at any time from your account settings. You\'ll retain access until the end of your current billing period.'
    },
    {
      question: 'How do notifications work?',
      answer: 'You\'ll receive push notifications when new tips are available. You can customize notification preferences in the app settings, including quiet hours and confidence thresholds.'
    },
    {
      question: 'Do you offer refunds?',
      answer: 'We offer a 30-day money-back guarantee for annual G Pro subscriptions. Monthly plans are non-refundable, but you can cancel anytime.'
    },
    {
      question: 'Is my data secure?',
      answer: 'Yes, we use industry-standard encryption and security practices to protect your data. We never share your personal information with third parties.'
    },
    {
      question: 'What makes TBM different from other services?',
      answer: 'TBM combines real-time data analysis, AI-powered predictions, and complete transparency with historical results. We focus on data-driven insights, not gambling promotion.'
    }
  ];

  return (
    <div className="mb-12 sm:mb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold mb-4">
          <span className="bg-gradient-to-r from-white to-[#A8B3CF] bg-clip-text text-transparent">
            Frequently Asked Questions
          </span>
        </h2>
        <p className="text-[#A8B3CF]">Quick answers to common questions</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="bg-[#0B1220] border border-[#00FF85]/20 rounded-2xl p-6 hover:border-[#00FF85]/40 transition-colors"
          >
            <div className="flex items-start gap-3 mb-3">
              <HelpCircle size={20} className="text-[#00FF85] flex-shrink-0 mt-1" />
              <h3 className="font-semibold text-white">{faq.question}</h3>
            </div>
            <p className="text-[#A8B3CF] text-sm pl-8">{faq.answer}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function ResourcesSection() {
  const resources = [
    {
      icon: Book,
      title: 'Documentation',
      description: 'Comprehensive guides and tutorials',
      link: 'Browse Docs'
    },
    {
      icon: Video,
      title: 'Video Tutorials',
      description: 'Watch step-by-step walkthroughs',
      link: 'Watch Videos'
    },
    {
      icon: Users,
      title: 'Community Forum',
      description: 'Connect with other TBM users',
      link: 'Join Community'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold mb-8 text-center">
        <span className="bg-gradient-to-r from-white to-[#A8B3CF] bg-clip-text text-transparent">
          Additional Resources
        </span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {resources.map((resource, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-[#0B1220] border border-[#00FF85]/20 rounded-2xl p-6 text-center hover:border-[#00FF85]/40 transition-all group"
          >
            <div className="w-16 h-16 bg-[#00FF85]/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <resource.icon size={32} className="text-[#00FF85]" />
            </div>

            <h3 className="font-semibold mb-2">{resource.title}</h3>
            <p className="text-[#A8B3CF] text-sm mb-4">{resource.description}</p>

            <button className="cursor-pointer text-[#00FF85] text-sm font-medium hover:text-[#00E0FF] transition-colors">
              {resource.link} →
            </button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

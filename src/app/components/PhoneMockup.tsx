import { motion } from 'motion/react';
import { Bell, TrendingUp, CheckCircle, Activity } from 'lucide-react';

export default function PhoneMockup() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Phone 1 - Center */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative z-10"
      >
        <div className="w-72 h-[580px] bg-[#0B1220] rounded-[3rem] border-4 border-[#00FF85]/30 shadow-2xl shadow-[#00FF85]/20 overflow-hidden">
          {/* Phone Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-[#060B12] rounded-b-2xl z-20" />

          {/* Screen Content */}
          <div className="relative h-full p-6 pt-12 overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold">Future Tips</h3>
              <Bell size={20} className="text-[#00FF85]" />
            </div>

            {/* Tip Cards */}
            <div className="space-y-4">
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="bg-[#060B12] border border-[#00FF85]/30 rounded-xl p-4"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-[#A8B3CF]">NBA</span>
                  <span className="text-xs bg-[#00FF85]/20 text-[#00FF85] px-2 py-1 rounded">82%</span>
                </div>
                <div className="font-semibold mb-2">Lakers vs Celtics</div>
                <div className="flex items-center gap-2 text-sm text-[#00E0FF]">
                  <TrendingUp size={14} />
                  <span>Over 215.5</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                className="bg-[#060B12] border border-[#00E0FF]/30 rounded-xl p-4"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-[#A8B3CF]">NFL</span>
                  <span className="text-xs bg-[#00E0FF]/20 text-[#00E0FF] px-2 py-1 rounded">75%</span>
                </div>
                <div className="font-semibold mb-2">Chiefs vs Bills</div>
                <div className="flex items-center gap-2 text-sm text-[#00FF85]">
                  <Activity size={14} />
                  <span>Chiefs -3.5</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                className="bg-[#060B12] border border-[#7B61FF]/30 rounded-xl p-4"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-[#A8B3CF]">Soccer</span>
                  <span className="text-xs bg-[#7B61FF]/20 text-[#7B61FF] px-2 py-1 rounded">88%</span>
                </div>
                <div className="font-semibold mb-2">Man City vs Arsenal</div>
                <div className="flex items-center gap-2 text-sm text-[#00FF85]">
                  <TrendingUp size={14} />
                  <span>BTTS Yes</span>
                </div>
              </motion.div>
            </div>

            {/* Floating notification */}
            <motion.div
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.5 }}
              className="absolute bottom-6 left-6 right-6 bg-[#00FF85] text-[#060B12] rounded-xl p-3 shadow-lg"
            >
              <div className="flex items-center gap-2">
                <Bell size={16} />
                <span className="text-sm font-semibold">New high-value tip available!</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#00FF85]/20 to-[#00E0FF]/20 blur-3xl -z-10" />
      </motion.div>

      {/* Phone 2 - Left (Results) */}
      <motion.div
        initial={{ x: -100, y: 100, opacity: 0 }}
        animate={{ x: -40, y: 40, opacity: 0.6 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="absolute left-0 top-1/4"
      >
        <div className="w-56 h-[460px] bg-[#0B1220] rounded-[2.5rem] border-2 border-[#00E0FF]/20 shadow-xl overflow-hidden transform -rotate-6">
          <div className="h-full p-4 pt-8">
            <h4 className="text-sm font-bold mb-4">Past Results</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs">
                <CheckCircle size={14} className="text-[#00FF85]" />
                <span>Won +$450</span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <CheckCircle size={14} className="text-[#00FF85]" />
                <span>Won +$320</span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <CheckCircle size={14} className="text-[#00FF85]" />
                <span>Won +$580</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Phone 3 - Right (Stats) */}
      <motion.div
        initial={{ x: 100, y: -100, opacity: 0 }}
        animate={{ x: 40, y: -40, opacity: 0.6 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="absolute right-0 top-1/3"
      >
        <div className="w-56 h-[460px] bg-[#0B1220] rounded-[2.5rem] border-2 border-[#00FF85]/20 shadow-xl overflow-hidden transform rotate-6">
          <div className="h-full p-4 pt-8">
            <h4 className="text-sm font-bold mb-4">Your Stats</h4>
            <div className="space-y-4">
              <div>
                <div className="text-2xl font-bold text-[#00FF85]">82%</div>
                <div className="text-xs text-[#A8B3CF]">Win Rate</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#00E0FF]">$2,340</div>
                <div className="text-xs text-[#A8B3CF]">Total Profit</div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

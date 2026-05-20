import { motion } from 'motion/react';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, TrendingDown, Activity } from 'lucide-react';

const performanceData = [
  { id: 'jan', month: 'Jan', roi: 45, wins: 28, losses: 6 },
  { id: 'feb', month: 'Feb', roi: 62, wins: 35, losses: 8 },
  { id: 'mar', month: 'Mar', roi: 78, wins: 42, losses: 7 },
  { id: 'apr', month: 'Apr', roi: 85, wins: 48, losses: 9 },
  { id: 'may', month: 'May', roi: 92, wins: 52, losses: 5 },
  { id: 'jun', month: 'Jun', roi: 105, wins: 58, losses: 6 },
];

const recentTips = [
  { id: 'tip1', sport: 'NBA', match: 'Lakers vs Celtics', result: 'Won', profit: '+$450', time: '2h ago' },
  { id: 'tip2', sport: 'NFL', match: 'Chiefs vs Bills', result: 'Won', profit: '+$320', time: '5h ago' },
  { id: 'tip3', sport: 'Soccer', match: 'Man City vs Arsenal', result: 'Won', profit: '+$580', time: '8h ago' },
  { id: 'tip4', sport: 'MLB', match: 'Yankees vs Red Sox', result: 'Won', profit: '+$210', time: '12h ago' },
  { id: 'tip5', sport: 'NHL', match: 'Bruins vs Rangers', result: 'Lost', profit: '-$100', time: '15h ago' },
];

export default function PerformanceChart() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Stats Cards */}
      <div className="lg:col-span-1 space-y-6">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-[#0B1220] border border-[#00FF85]/20 rounded-2xl p-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-[#00FF85]/10 rounded-xl flex items-center justify-center">
              <TrendingUp className="text-[#00FF85]" size={24} />
            </div>
            <div>
              <div className="text-sm text-[#A8B3CF]">Total ROI</div>
              <div className="text-3xl font-bold text-[#00FF85]">+105%</div>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm text-[#00FF85]">
            <TrendingUp size={16} />
            <span>+15% this month</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-[#0B1220] border border-[#00E0FF]/20 rounded-2xl p-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-[#00E0FF]/10 rounded-xl flex items-center justify-center">
              <Activity className="text-[#00E0FF]" size={24} />
            </div>
            <div>
              <div className="text-sm text-[#A8B3CF]">Win Rate</div>
              <div className="text-3xl font-bold text-[#00E0FF]">82.4%</div>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm text-[#00E0FF]">
            <span>223 wins / 48 losses</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-[#0B1220] border border-[#7B61FF]/20 rounded-2xl p-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-[#7B61FF]/10 rounded-xl flex items-center justify-center">
              <TrendingUp className="text-[#7B61FF]" size={24} />
            </div>
            <div>
              <div className="text-sm text-[#A8B3CF]">Avg Confidence</div>
              <div className="text-3xl font-bold text-[#7B61FF]">78.5%</div>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm text-[#7B61FF]">
            <span>High accuracy predictions</span>
          </div>
        </motion.div>
      </div>

      {/* Charts */}
      <div className="lg:col-span-2 space-y-6">
        {/* ROI Chart */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#0B1220] border border-[#00FF85]/20 rounded-2xl p-6"
        >
          <h3 className="font-semibold mb-6">ROI Growth Over Time</h3>
          <ResponsiveContainer width="100%" height={250}>
            <AreaChart data={performanceData}>
              <defs>
                <linearGradient id="homeRoiGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#00FF85" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#00FF85" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,255,133,0.1)" />
              <XAxis dataKey="month" stroke="#A8B3CF" />
              <YAxis stroke="#A8B3CF" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#0B1220',
                  border: '1px solid rgba(0,255,133,0.2)',
                  borderRadius: '8px',
                  color: '#fff'
                }}
              />
              <Area
                type="monotone"
                dataKey="roi"
                stroke="#00FF85"
                strokeWidth={3}
                fill="url(#homeRoiGradient)"
                id="home-roi-area"
              />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Recent Tips Table */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-[#0B1220] border border-[#00FF85]/20 rounded-2xl p-6"
        >
          <h3 className="font-semibold mb-6">Recent Tips</h3>
          <div className="space-y-3">
            {recentTips.map((tip) => (
              <div
                key={tip.id}
                className="flex items-center justify-between p-3 bg-[#060B12] border border-[#00FF85]/10 rounded-lg hover:border-[#00FF85]/30 transition-colors gap-2"
              >
                <div className="flex items-center gap-2 sm:gap-4 min-w-0">
                  <div className="w-10 h-10 bg-[#00FF85]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-bold text-[#00FF85]">{tip.sport}</span>
                  </div>
                  <div className="min-w-0">
                    <div className="font-medium text-sm truncate">{tip.match}</div>
                    <div className="text-xs text-[#A8B3CF]">{tip.time}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
                  <div className={`font-semibold ${tip.result === 'Won' ? 'text-[#00FF85]' : 'text-red-400'}`}>
                    {tip.profit}
                  </div>
                  <div className={`text-xs px-3 py-1 rounded-full ${
                    tip.result === 'Won'
                      ? 'bg-[#00FF85]/10 text-[#00FF85]'
                      : 'bg-red-400/10 text-red-400'
                  }`}>
                    {tip.result}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

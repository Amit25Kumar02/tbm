import { motion } from 'motion/react';
import { TrendingUp, Activity, Target, Calendar, Filter } from 'lucide-react';
import { useState } from 'react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

export default function ResultsPage() {
  const [timeFilter, setTimeFilter] = useState<'daily' | 'weekly' | 'monthly'>('monthly');
  const [sportFilter, setSportFilter] = useState('all');

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-[#A8B3CF] bg-clip-text text-transparent">
              Performance Dashboard
            </span>
          </h1>
          <p className="text-xl text-[#A8B3CF]">
            Complete transparency. Verified results. Real data.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-12">
          <div className="flex flex-wrap items-center gap-2 bg-[#0B1220] border border-[#00FF85]/20 rounded-lg p-2">
            <Calendar size={20} className="text-[#00FF85] ml-2" />
            <button
              onClick={() => setTimeFilter('daily')}
              className={`cursor-pointer px-4 py-2 rounded-lg font-medium transition-all ${
                timeFilter === 'daily'
                  ? 'bg-[#00FF85]/10 text-[#00FF85]'
                  : 'text-[#A8B3CF] hover:text-white'
              }`}
            >
              Daily
            </button>
            <button
              onClick={() => setTimeFilter('weekly')}
              className={`cursor-pointer px-4 py-2 rounded-lg font-medium transition-all ${
                timeFilter === 'weekly'
                  ? 'bg-[#00FF85]/10 text-[#00FF85]'
                  : 'text-[#A8B3CF] hover:text-white'
              }`}
            >
              Weekly
            </button>
            <button
              onClick={() => setTimeFilter('monthly')}
              className={`cursor-pointer px-4 py-2 rounded-lg font-medium transition-all ${
                timeFilter === 'monthly'
                  ? 'bg-[#00FF85]/10 text-[#00FF85]'
                  : 'text-[#A8B3CF] hover:text-white'
              }`}
            >
              Monthly
            </button>
          </div>

          <select
            value={sportFilter}
            onChange={(e) => setSportFilter(e.target.value)}
            className="bg-[#0B1220] border border-[#00FF85]/20 rounded-lg px-4 py-2 text-white w-full sm:w-auto"
          >
            <option value="all">All Sports</option>
            <option value="nba">NBA</option>
            <option value="nfl">NFL</option>
            <option value="mlb">MLB</option>
            <option value="nhl">NHL</option>
            <option value="soccer">Soccer</option>
          </select>
        </div>

        {/* Stats Overview */}
        <StatsOverview />

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8 sm:mb-12">
          <ROIChart />
          <WinRateChart />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8 sm:mb-12">
          <SportDistribution />
          <ProfitByMonth />
        </div>

        {/* Historical Tips Table */}
        <HistoricalTipsTable />
      </div>
    </div>
  );
}

function StatsOverview() {
  const stats = [
    {
      icon: TrendingUp,
      label: 'Total ROI',
      value: '+142%',
      change: '+12% vs last month',
      color: 'from-[#00FF85] to-[#00E0FF]',
      positive: true
    },
    {
      icon: Activity,
      label: 'Win Rate',
      value: '82.4%',
      change: '223W / 48L',
      color: 'from-[#00E0FF] to-[#7B61FF]',
      positive: true
    },
    {
      icon: Target,
      label: 'Total Profit',
      value: '$14,250',
      change: '+$2,340 this month',
      color: 'from-[#7B61FF] to-[#FF6B9D]',
      positive: true
    },
    {
      icon: TrendingUp,
      label: 'Avg Confidence',
      value: '78.5%',
      change: 'High accuracy',
      color: 'from-[#FF6B9D] to-[#FFA726]',
      positive: true
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="relative bg-[#0B1220] border border-[#00FF85]/20 rounded-2xl p-6 overflow-hidden group hover:border-[#00FF85]/40 transition-all"
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity`} />

          <div className="relative">
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4`}>
              <stat.icon size={24} className="text-[#060B12]" />
            </div>

            <div className="text-sm text-[#A8B3CF] mb-1">{stat.label}</div>
            <div className="text-3xl font-bold bg-gradient-to-r from-white to-[#A8B3CF] bg-clip-text text-transparent mb-2">
              {stat.value}
            </div>
            <div className={`text-xs ${stat.positive ? 'text-[#00FF85]' : 'text-red-400'}`}>
              {stat.change}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function ROIChart() {
  const data = [
    { id: 'jan', month: 'Jan', roi: 45 },
    { id: 'feb', month: 'Feb', roi: 62 },
    { id: 'mar', month: 'Mar', roi: 78 },
    { id: 'apr', month: 'Apr', roi: 95 },
    { id: 'may', month: 'May', roi: 112 },
    { id: 'jun', month: 'Jun', roi: 142 }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-[#0B1220] border border-[#00FF85]/20 rounded-2xl p-6"
    >
      <h3 className="font-semibold mb-6">ROI Growth Over Time</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <defs>
            <linearGradient id="resultsRoiGradient" x1="0" y1="0" x2="0" y2="1">
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
          <Line
            type="monotone"
            dataKey="roi"
            stroke="#00FF85"
            strokeWidth={3}
            fill="url(#resultsRoiGradient)"
            dot={{ fill: '#00FF85', r: 6 }}
            id="results-roi-line"
          />
        </LineChart>
      </ResponsiveContainer>
    </motion.div>
  );
}

function WinRateChart() {
  const data = [
    { id: 'jan', month: 'Jan', wins: 28, losses: 6 },
    { id: 'feb', month: 'Feb', wins: 35, losses: 8 },
    { id: 'mar', month: 'Mar', wins: 42, losses: 7 },
    { id: 'apr', month: 'Apr', wins: 48, losses: 9 },
    { id: 'may', month: 'May', wins: 52, losses: 5 },
    { id: 'jun', month: 'Jun', wins: 58, losses: 6 }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-[#0B1220] border border-[#00FF85]/20 rounded-2xl p-6"
    >
      <h3 className="font-semibold mb-6">Wins vs Losses</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
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
          <Legend />
          <Bar dataKey="wins" fill="#00FF85" radius={[8, 8, 0, 0]} name="Wins" id="wins-bar" />
          <Bar dataKey="losses" fill="#FF4444" radius={[8, 8, 0, 0]} name="Losses" id="losses-bar" />
        </BarChart>
      </ResponsiveContainer>
    </motion.div>
  );
}

function SportDistribution() {
  const data = [
    { id: 'nba', name: 'NBA', value: 35, color: '#00FF85' },
    { id: 'nfl', name: 'NFL', value: 25, color: '#00E0FF' },
    { id: 'mlb', name: 'MLB', value: 20, color: '#7B61FF' },
    { id: 'nhl', name: 'NHL', value: 12, color: '#FF6B9D' },
    { id: 'soccer', name: 'Soccer', value: 8, color: '#FFA726' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-[#0B1220] border border-[#00FF85]/20 rounded-2xl p-6"
    >
      <h3 className="font-semibold mb-6">Tips by Sport</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
            id="sport-distribution-pie"
          >
            {data.map((entry) => (
              <Cell key={`cell-${entry.id}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: '#0B1220',
              border: '1px solid rgba(0,255,133,0.2)',
              borderRadius: '8px',
              color: '#fff'
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </motion.div>
  );
}

function ProfitByMonth() {
  const data = [
    { id: 'jan', month: 'Jan', profit: 1200 },
    { id: 'feb', month: 'Feb', profit: 1850 },
    { id: 'mar', month: 'Mar', profit: 2100 },
    { id: 'apr', month: 'Apr', profit: 2450 },
    { id: 'may', month: 'May', profit: 2890 },
    { id: 'jun', month: 'Jun', profit: 3340 }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-[#0B1220] border border-[#00FF85]/20 rounded-2xl p-6"
    >
      <h3 className="font-semibold mb-6">Monthly Profit Trend</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <defs>
            <linearGradient id="resultsProfitGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#00E0FF" stopOpacity={1}/>
              <stop offset="95%" stopColor="#00E0FF" stopOpacity={0.3}/>
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
          <Bar dataKey="profit" fill="url(#resultsProfitGradient)" radius={[8, 8, 0, 0]} id="profit-bar" />
        </BarChart>
      </ResponsiveContainer>
    </motion.div>
  );
}

function HistoricalTipsTable() {
  const tips = [
    { id: 'tip1', date: '2026-05-14', sport: 'NBA', match: 'Lakers vs Celtics', tip: 'Over 215.5', confidence: '82%', result: 'Won', profit: '+$450' },
    { id: 'tip2', date: '2026-05-14', sport: 'NFL', match: 'Chiefs vs Bills', tip: 'Chiefs -3.5', confidence: '75%', result: 'Won', profit: '+$320' },
    { id: 'tip3', date: '2026-05-13', sport: 'Soccer', match: 'Man City vs Arsenal', tip: 'BTTS Yes', confidence: '88%', result: 'Won', profit: '+$580' },
    { id: 'tip4', date: '2026-05-13', sport: 'MLB', match: 'Yankees vs Red Sox', tip: 'Under 9.5', confidence: '71%', result: 'Won', profit: '+$210' },
    { id: 'tip5', date: '2026-05-12', sport: 'NHL', match: 'Bruins vs Rangers', tip: 'Over 5.5', confidence: '68%', result: 'Lost', profit: '-$100' },
    { id: 'tip6', date: '2026-05-12', sport: 'NBA', match: 'Warriors vs Suns', tip: 'Warriors -7.5', confidence: '85%', result: 'Won', profit: '+$390' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-[#0B1220] border border-[#00FF85]/20 rounded-2xl p-6"
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-semibold">Historical Tips</h3>
        <button className="cursor-pointer text-sm text-[#00FF85] hover:text-[#00E0FF] transition-colors">
          Export Data
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[#00FF85]/20">
              <th className="text-left py-3 px-4 text-sm text-[#A8B3CF] hidden sm:table-cell">Date</th>
              <th className="text-left py-3 px-4 text-sm text-[#A8B3CF]">Sport</th>
              <th className="text-left py-3 px-4 text-sm text-[#A8B3CF]">Match</th>
              <th className="text-left py-3 px-4 text-sm text-[#A8B3CF] hidden md:table-cell">Tip</th>
              <th className="text-left py-3 px-4 text-sm text-[#A8B3CF] hidden md:table-cell">Confidence</th>
              <th className="text-left py-3 px-4 text-sm text-[#A8B3CF]">Result</th>
              <th className="text-left py-3 px-4 text-sm text-[#A8B3CF]">Profit/Loss</th>
            </tr>
          </thead>
          <tbody>
            {tips.map((tip) => (
              <tr key={tip.id} className="border-b border-[#00FF85]/10 hover:bg-[#00FF85]/5 transition-colors">
                <td className="py-3 px-4 text-sm hidden sm:table-cell">{tip.date}</td>
                <td className="py-3 px-4">
                  <span className="text-xs bg-[#00FF85]/10 text-[#00FF85] px-2 py-1 rounded">
                    {tip.sport}
                  </span>
                </td>
                <td className="py-3 px-4 text-sm">{tip.match}</td>
                <td className="py-3 px-4 text-sm text-[#A8B3CF] hidden md:table-cell">{tip.tip}</td>
                <td className="py-3 px-4 hidden md:table-cell">
                  <span className="text-sm text-[#00E0FF]">{tip.confidence}</span>
                </td>
                <td className="py-3 px-4">
                  <span className={`text-xs px-3 py-1 rounded-full ${
                    tip.result === 'Won'
                      ? 'bg-[#00FF85]/10 text-[#00FF85]'
                      : 'bg-red-400/10 text-red-400'
                  }`}>
                    {tip.result}
                  </span>
                </td>
                <td className={`py-3 px-4 font-semibold ${
                  tip.profit.startsWith('+') ? 'text-[#00FF85]' : 'text-red-400'
                }`}>
                  {tip.profit}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}

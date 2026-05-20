import { motion } from 'motion/react';

interface StatsCardProps {
  value: string;
  label: string;
}

export default function StatsCard({ value, label }: StatsCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      className="relative bg-[#0B1220] border border-[#00FF85]/20 rounded-xl p-4 backdrop-blur-sm"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#00FF85]/5 to-transparent rounded-xl" />
      <div className="relative">
        <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#00FF85] to-[#00E0FF] bg-clip-text text-transparent mb-1">
          {value}
        </div>
        <div className="text-xs text-[#A8B3CF]">{label}</div>
      </div>
    </motion.div>
  );
}

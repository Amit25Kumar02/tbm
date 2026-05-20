import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';

interface BentoCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
  delay?: number;
}

export default function BentoCard({ icon: Icon, title, description, gradient, delay = 0 }: BentoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      whileHover={{ scale: 1.05, y: -10 }}
      className="relative bg-[#0B1220] border border-[#00FF85]/20 rounded-2xl p-6 overflow-hidden group cursor-pointer"
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#00FF85]/0 to-[#00E0FF]/0 group-hover:from-[#00FF85]/10 group-hover:to-[#00E0FF]/10 transition-all duration-500" />

      {/* Border Glow on Hover */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `linear-gradient(${gradient}, transparent)`,
          padding: '2px',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude'
        }}
      />

      <div className="relative">
        {/* Icon */}
        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
          <Icon size={28} className="text-[#060B12]" />
        </div>

        {/* Content */}
        <h3 className="font-semibold mb-2 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#00FF85] group-hover:to-[#00E0FF] group-hover:bg-clip-text transition-all duration-300">
          {title}
        </h3>
        <p className="text-sm text-[#A8B3CF]">{description}</p>
      </div>

      {/* Animated corner accent */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#00FF85]/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
}

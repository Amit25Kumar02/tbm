import { motion, AnimatePresence } from 'motion/react';
import { Download } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function MobileCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show CTA after scrolling down 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-40 md:hidden"
        >
          <div className="bg-[#0B1220]/95 backdrop-blur-xl border-t border-[#00FF85]/20 p-4">
            <a
              href="https://apps.apple.com/us/app/the-betting-matrix/id6760174152"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#00FF85] to-[#00E0FF] text-[#060B12] py-4 rounded-lg font-semibold shadow-lg shadow-[#00FF85]/25"
            >
              <Download size={20} />
              Download TBM App
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

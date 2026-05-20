import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Download, Menu, X } from 'lucide-react';
import logoImage from '../../imports/The_betting_matrix.png';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Features', path: '/features' },
    { name: 'Results', path: '/results' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'AI Future', path: '/ai-future' },
    { name: 'Support', path: '/support' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#060B12]/80 backdrop-blur-xl border-b border-[#00FF85]/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={logoImage}
              alt="The Betting Matrix"
              className="h-10 w-auto object-contain"
              style={{ mixBlendMode: 'screen' }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="relative group"
              >
                <span className={`text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'text-[#00FF85]'
                    : 'text-[#A8B3CF] hover:text-white'
                }`}>
                  {link.name}
                </span>
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#00FF85] to-[#00E0FF]"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: location.pathname === link.path ? 1 : 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </Link>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' })}
            className="cursor-pointer hidden lg:flex items-center gap-2 bg-gradient-to-r from-[#00FF85] to-[#00E0FF] text-[#060B12] px-6 py-3 rounded-lg font-semibold shadow-lg shadow-[#00FF85]/25 hover:shadow-[#00FF85]/40 transition-all"
          >
            <Download size={18} />
            Download App
          </motion.button>

          {/* Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="cursor-pointer lg:hidden text-white p-2"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden py-4 border-t border-[#00FF85]/20 bg-[#060B12]"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-3 px-4 rounded-lg mb-2 ${
                  location.pathname === link.path
                    ? 'bg-[#00FF85]/10 text-[#00FF85]'
                    : 'text-[#A8B3CF] hover:bg-[#00FF85]/5 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex flex-col gap-2 mt-4">
              <a
                href="https://apps.apple.com/us/app/the-betting-matrix/id6760174152"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="cursor-pointer flex items-center justify-center gap-2 bg-gradient-to-r from-[#00FF85] to-[#00E0FF] text-[#060B12] px-6 py-3 rounded-lg font-semibold"
              >
                <Download size={18} />
                App Store
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.bettingmatrix"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="cursor-pointer flex items-center justify-center gap-2 bg-[#0B1220] border border-[#00FF85]/20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#00FF85]/10 transition-colors"
              >
                <Download size={18} />
                Google Play
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}

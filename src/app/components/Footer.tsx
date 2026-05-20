import { Link } from 'react-router-dom';
import { Twitter, Instagram, Facebook, Mail, Download } from 'lucide-react';
import logoImage from '../../imports/The_betting_matrix.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="relative bg-[#0B1220] border-t border-[#00FF85]/20 overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0,255,133,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,133,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <img
                src={logoImage}
                alt="The Betting Matrix"
                className="h-10 w-auto object-contain"
                style={{ mixBlendMode: 'screen' }}
              />
            </div>
            <p className="text-[#A8B3CF] text-sm mb-6">
              Real-time betting insights powered by live data, automation, and AI intelligence.
            </p>
            <div className="flex gap-4">
              <a href="#" className="cursor-pointer w-10 h-10 rounded-lg bg-[#00FF85]/10 border border-[#00FF85]/20 flex items-center justify-center hover:bg-[#00FF85]/20 transition-colors">
                <Twitter size={18} className="text-[#00FF85]" />
              </a>
              <a href="#" className="cursor-pointer w-10 h-10 rounded-lg bg-[#00FF85]/10 border border-[#00FF85]/20 flex items-center justify-center hover:bg-[#00FF85]/20 transition-colors">
                <Instagram size={18} className="text-[#00FF85]" />
              </a>
              <a href="#" className="cursor-pointer w-10 h-10 rounded-lg bg-[#00FF85]/10 border border-[#00FF85]/20 flex items-center justify-center hover:bg-[#00FF85]/20 transition-colors">
                <Facebook size={18} className="text-[#00FF85]" />
              </a>
              <a href="#" className="cursor-pointer w-10 h-10 rounded-lg bg-[#00FF85]/10 border border-[#00FF85]/20 flex items-center justify-center hover:bg-[#00FF85]/20 transition-colors">
                <Mail size={18} className="text-[#00FF85]" />
              </a>
            </div>
          </div>

          {/* Product Column */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Product</h4>
            <ul className="space-y-3">
              <li><Link to="/features" className="text-[#A8B3CF] hover:text-[#00FF85] transition-colors text-sm">Features</Link></li>
              <li><Link to="/pricing" className="text-[#A8B3CF] hover:text-[#00FF85] transition-colors text-sm">Pricing</Link></li>
              <li><Link to="/results" className="text-[#A8B3CF] hover:text-[#00FF85] transition-colors text-sm">Results</Link></li>
              <li><Link to="/ai-future" className="text-[#A8B3CF] hover:text-[#00FF85] transition-colors text-sm">AI Future</Link></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-3">
              <li><a href="/results" className="text-[#A8B3CF] hover:text-[#00FF85] transition-colors text-sm">About Us</a></li>
              <li><a href="/features" className="text-[#A8B3CF] hover:text-[#00FF85] transition-colors text-sm">Blog</a></li>
              <li><a href="/pricing" className="text-[#A8B3CF] hover:text-[#00FF85] transition-colors text-sm">Careers</a></li>
              <li><Link to="/support" className="text-[#A8B3CF] hover:text-[#00FF85] transition-colors text-sm">Support</Link></li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Legal</h4>
            <ul className="space-y-3">
              <li><a href="https://api.thebettingmatrix.app/cms/privacy-policy" target='blank' className="text-[#A8B3CF] hover:text-[#00FF85] transition-colors text-sm">Privacy Policy</a></li>
              <li><a href="https://api.thebettingmatrix.app/cms/terms-and-conditions" target='blank' className="text-[#A8B3CF] hover:text-[#00FF85] transition-colors text-sm">Terms of Service</a></li>
              {/* <li><a href="https://api.thebettingmatrix.app/cms/cookie-policy" target='blank' className="text-[#A8B3CF] hover:text-[#00FF85] transition-colors text-sm">Cookie Policy</a></li> */}
              {/* <li><a href="https://api.thebettingmatrix.app/cms/disclaimer" target='blank' className="text-[#A8B3CF] hover:text-[#00FF85] transition-colors text-sm">Disclaimer</a></li> */}
            </ul>
          </div>
        </div>

        {/* Download Section */}
        <div className="border-t border-[#00FF85]/20 pt-8 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[#A8B3CF] text-sm">Download TBM and start winning smarter</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://apps.apple.com/us/app/the-betting-matrix/id6760174152"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer flex items-center justify-center gap-2 bg-[#0B1220] border border-[#00FF85]/20 text-white px-6 py-3 rounded-lg hover:bg-[#00FF85]/10 transition-colors"
              >
                <Download size={18} />
                <span className="text-sm">App Store</span>
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.bettingmatrix"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer flex items-center justify-center gap-2 bg-[#0B1220] border border-[#00FF85]/20 text-white px-6 py-3 rounded-lg hover:bg-[#00FF85]/10 transition-colors"
              >
                <Download size={18} />
                <span className="text-sm">Google Play</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#00FF85]/20 pt-8">
          <p className="text-center text-[#A8B3CF] text-sm">
            © {currentYear} TBM - The Betting Machine. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

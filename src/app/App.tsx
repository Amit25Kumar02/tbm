import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MobileCTA from './components/MobileCTA';
import HomePage from './pages/HomePage';
import FeaturesPage from './pages/FeaturesPage';
import PricingPage from './pages/PricingPage';
import ResultsPage from './pages/ResultsPage';
import AIFuturePage from './pages/AIFuturePage';
import SupportPage from './pages/SupportPage';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#060B12] text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/results" element={<ResultsPage />} />
          <Route path="/ai-future" element={<AIFuturePage />} />
          <Route path="/support" element={<SupportPage />} />
        </Routes>
        <Footer />
        <MobileCTA />
      </div>
    </Router>
  );
}

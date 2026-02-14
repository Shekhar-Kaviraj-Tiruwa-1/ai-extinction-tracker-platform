import { useState } from 'react';
import { Activity, Send, Github, Twitter, Mail } from 'lucide-react';

export function FooterSection() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => {
        setEmail('');
        setIsSubmitted(false);
      }, 3000);
    }
  };

  return (
    <footer className="relative w-full bg-[#0A0F1A] border-t border-white/5">
      {/* CTA Section */}
      <div className="section-padding pb-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#F9FAFB] mb-4">
            Stay Informed
          </h2>
          <p className="text-lg text-[#9CA3AF] mb-8">
            Get updates on AI, agriculture, and extinction research. No spam—just evidence-based analysis.
          </p>

          {/* Email Form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-[#F9FAFB] placeholder:text-[#9CA3AF]/50 focus:outline-none focus:border-[#EF4444]/50 transition-colors"
              required
            />
            <button
              type="submit"
              disabled={isSubmitted}
              className="px-6 py-3 bg-[#EF4444] text-white font-medium rounded-lg hover:bg-[#EF4444]/90 transition-colors disabled:opacity-70 flex items-center justify-center gap-2"
            >
              {isSubmitted ? (
                <span>Subscribed!</span>
              ) : (
                <>
                  <span>Subscribe</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          <p className="mt-4 text-xs text-[#9CA3AF]/60">
            By subscribing, you agree to receive research updates. Unsubscribe at any time.
          </p>
        </div>
      </div>

      {/* Footer Links */}
      <div className="border-t border-white/5 py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full border-2 border-[#EF4444]/60 flex items-center justify-center">
                <Activity className="w-4 h-4 text-[#EF4444]" />
              </div>
              <span className="font-bold text-[#F9FAFB]">AI Extinction Accelerator</span>
            </div>

            {/* Links */}
            <div className="flex items-center gap-6 text-sm text-[#9CA3AF]">
              <a href="#hero" className="hover:text-[#F9FAFB] transition-colors">Pathway</a>
              <a href="#evidence" className="hover:text-[#F9FAFB] transition-colors">Evidence</a>
              <a href="#mechanisms" className="hover:text-[#F9FAFB] transition-colors">AI Impact</a>
              <a href="#action" className="hover:text-[#F9FAFB] transition-colors">Action</a>
            </div>

            {/* Social */}
            <div className="flex items-center gap-4">
              <a href="#" className="text-[#9CA3AF] hover:text-[#F9FAFB] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-[#9CA3AF] hover:text-[#F9FAFB] transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-[#9CA3AF] hover:text-[#F9FAFB] transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-8 border-t border-white/5 text-center">
            <p className="text-xs text-[#9CA3AF]">
              © 2025 AI Extinction Accelerator Framework. Data sourced from IPBES, IUCN, WWF, FAO, and peer-reviewed research.
            </p>
            <p className="text-xs text-[#9CA3AF]/60 mt-2">
              This framework traces a plausible causal chain rather than claiming AI is the only driver of biodiversity loss.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

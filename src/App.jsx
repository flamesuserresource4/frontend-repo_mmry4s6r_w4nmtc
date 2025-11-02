import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import CTA from './components/CTA';

const App = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="sticky top-0 z-20 w-full border-b border-white/10 bg-black/70 backdrop-blur">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-500" />
            <span className="font-semibold">Lumae Co</span>
          </div>
          <nav className="hidden gap-6 text-sm text-white/70 md:flex">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#" className="hover:text-white">Pricing</a>
            <a href="#get-started" className="hover:text-white">Get Started</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <CTA />
      </main>

      <footer className="border-t border-white/10 bg-black/80">
        <div className="mx-auto max-w-7xl px-6 py-8 text-sm text-white/60">
          © {new Date().getFullYear()} Lumae Co. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default App;

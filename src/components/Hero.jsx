import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Bot } from 'lucide-react';

const Hero = () => {
  return (
    <section className="w-full bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
              <Bot className="h-4 w-4 text-cyan-400" />
              <span>AI Receptionist Agent</span>
            </div>
            <h1 className="font-extrabold leading-tight tracking-tight text-4xl md:text-6xl">
              Meet your always-on, friendly{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">front-desk agent</span>
            </h1>
            <p className="mt-4 max-w-xl text-white/70 md:text-lg">
              A smart virtual receptionist that greets, routes, schedules, and answers FAQs across phone, chat, and web — so you never miss a customer again.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#get-started"
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-400 to-fuchsia-500 px-5 py-3 font-medium text-black transition hover:opacity-90"
              >
                Try the Agent
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="#features"
                className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-3 font-medium text-white/90 transition hover:bg-white/10"
              >
                See Features
              </a>
            </div>
          </div>

          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/40 shadow-2xl">
            <div className="absolute inset-0">
              <Spline
                scene="https://prod.spline.design/AeAqaKLmGsS-FPBN/scene.splinecode"
                style={{ width: '100%', height: '100%' }}
              />
            </div>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/40" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-fuchsia-500/10 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

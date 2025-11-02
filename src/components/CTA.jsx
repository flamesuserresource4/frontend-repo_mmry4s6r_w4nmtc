import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section id="get-started" className="w-full bg-zinc-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/15 via-fuchsia-500/10 to-transparent p-8 md:p-12">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(6,182,212,0.25),transparent_50%)]" />
          <div className="relative">
            <h3 className="text-2xl font-bold md:text-3xl">Put your front desk on autopilot — with a human touch</h3>
            <p className="mt-2 max-w-2xl text-white/80">Start a free pilot and see how many calls answered, appointments booked, and leads captured in your first week.</p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-400 to-fuchsia-500 px-5 py-3 font-medium text-black transition hover:opacity-90"
              >
                Start Free Pilot
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-transparent px-5 py-3 font-medium text-white/90 hover:bg-white/10"
              >
                Book a Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;

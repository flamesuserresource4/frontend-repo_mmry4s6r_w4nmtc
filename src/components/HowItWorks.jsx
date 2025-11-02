import React from 'react';
import { Check, Bot, Calendar, Phone } from 'lucide-react';

const steps = [
  {
    icon: Bot,
    title: 'Train the Agent',
    desc: 'Connect FAQs, policies, and tone. The agent learns your brand voice and procedures.'
  },
  {
    icon: Phone,
    title: 'Connect Channels',
    desc: 'Plug into phone, chat, and web widgets. Start greeting customers instantly.'
  },
  {
    icon: Calendar,
    title: 'Automate Tasks',
    desc: 'From appointment booking to lead capture and call routing — all on autopilot.'
  }
];

const HowItWorks = () => {
  return (
    <section className="w-full bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold md:text-4xl">How it works</h2>
          <p className="mt-3 text-white/70">Set up in minutes, measurable impact in days.</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400/20 to-fuchsia-500/20 text-cyan-300">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-white/70">{desc}</p>
              <div className="mt-4 flex items-center gap-2 text-sm text-white/60">
                <Check className="h-4 w-4 text-fuchsia-400" />
                <span>Guided setup with best practices</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

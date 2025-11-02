import React from 'react';
import { Phone, Calendar, Mail, Shield, Zap, Headphones } from 'lucide-react';

const features = [
  {
    icon: Phone,
    title: 'Call Routing & IVR',
    desc: 'Greets callers, understands intent, and routes them to the right place — powered by natural language understanding.'
  },
  {
    icon: Calendar,
    title: 'Smart Scheduling',
    desc: 'Books, reschedules, and confirms appointments with real-time availability checks.'
  },
  {
    icon: Mail,
    title: 'FAQ & Lead Capture',
    desc: 'Instant answers to common questions and collects qualified leads from chat or voice.'
  },
  {
    icon: Shield,
    title: 'Secure & Compliant',
    desc: 'Built with security best practices and configurable data retention settings.'
  },
  {
    icon: Zap,
    title: '24/7 Availability',
    desc: 'Always-on coverage so you never miss a customer, even after hours.'
  },
  {
    icon: Headphones,
    title: 'Human Handoff',
    desc: 'Seamlessly hands off to your team with full conversation context when needed.'
  }
];

const Features = () => {
  return (
    <section id="features" className="w-full bg-zinc-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            <span className="bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">Everything your receptionist does</span> — turbocharged
          </h2>
          <p className="mt-3 text-white/70">Crafted to greet, guide, and get things done across every channel.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-fuchsia-400/30 hover:bg-white/10">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400/20 to-fuchsia-500/20 text-cyan-300">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

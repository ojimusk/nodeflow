'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function NodeFlowHome() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <main className="min-h-screen bg-[#0A0B14] text-white">
      {/* Navbar */}
      <nav className="border-b border-white/10 bg-[#0A0B14]/95 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-2xl flex items-center justify-center">
                <span className="text-white font-bold text-2xl tracking-[-2px]">N</span>
              </div>
              <span className="font-semibold text-2xl tracking-tight">NodeFlow</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-9 text-sm">
              <Link href="#features" className="text-zinc-400 hover:text-white transition">Features</Link>
              <Link href="#how" className="text-zinc-400 hover:text-white transition">How it works</Link>
              <button 
                onClick={() => alert('Authentication & Dashboard coming next!')}
                className="px-6 py-2.5 bg-white text-[#0A0B14] rounded-2xl text-sm font-semibold hover:bg-zinc-100 active:scale-[0.985] transition"
              >
                Deploy Validator
              </button>
            </div>

            {/* Mobile Hamburger */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-white/10 bg-[#0A0B14] px-6 py-6 space-y-4 text-sm">
            <Link href="#features" className="block py-2 text-zinc-400 hover:text-white" onClick={() => setIsMenuOpen(false)}>Features</Link>
            <Link href="#how" className="block py-2 text-zinc-400 hover:text-white" onClick={() => setIsMenuOpen(false)}>How it works</Link>
            <button 
              onClick={() => { setIsMenuOpen(false); alert('Authentication & Dashboard coming next!') }}
              className="w-full mt-2 px-6 py-3 bg-white text-[#0A0B14] rounded-2xl font-semibold"
            >
              Deploy Validator
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 pt-16 md:pt-24 pb-16 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm mb-8">
          <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse" />
          Trusted by validators worldwide
        </div>

        <h1 className="text-5xl md:text-7xl font-semibold tracking-tighter leading-[1.05] mb-6">
          The easiest way<br />to run validators
        </h1>
        
        <p className="max-w-lg mx-auto text-lg md:text-xl text-zinc-400 mb-10">
          Deploy, monitor, and manage blockchain validators in minutes.<br />
          No servers to manage. No infrastructure headaches.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => alert('We will build authentication & dashboard next!')}
            className="px-8 py-4 bg-white text-[#0A0B14] rounded-3xl text-lg font-semibold hover:bg-zinc-100 active:scale-[0.985] transition"
          >
            Start Deploying Free
          </button>
          <a 
            href="#how"
            className="px-8 py-4 border border-white/20 hover:bg-white/5 rounded-3xl text-lg font-medium transition flex items-center justify-center"
          >
            See how it works
          </a>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="max-w-6xl mx-auto px-6 pb-20">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">Built for validators.<br />Designed for simplicity.</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "One-Click Deployment",
              desc: "Instantly spin up optimized validator infrastructure on Solana and other networks. No manual server setup required.",
            },
            {
              title: "Real-time Performance Dashboard",
              desc: "Beautiful live dashboard showing uptime, voting status, stake weight, and rewards — all in one place.",
            },
            {
              title: "Automated Failover & Recovery",
              desc: "Continuous health monitoring. If your node goes down, we automatically restart or migrate it to keep you online.",
            },
            {
              title: "Stake & Reward Analytics",
              desc: "Clear insights into your earnings versus costs. Know exactly how profitable your validators are.",
            },
          ].map((feature, index) => (
            <div 
              key={index} 
              className="group border border-white/10 hover:border-white/20 bg-white/[0.025] rounded-3xl p-8 transition-all hover:-translate-y-0.5"
            >
              <h3 className="font-semibold text-2xl tracking-tight mb-4">{feature.title}</h3>
              <p className="text-zinc-400 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it Works */}
      <section id="how" className="border-t border-white/10 bg-white/[0.015] py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-semibold tracking-tight">Get started in minutes</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { number: "01", title: "Create your account", desc: "Sign up with email or connect your wallet in seconds." },
              { number: "02", title: "Choose your network", desc: "Select Solana or other supported chains and configure your validator." },
              { number: "03", title: "Deploy & monitor", desc: "One click to launch. Track performance and rewards from your dashboard." },
            ].map((step, index) => (
              <div key={index} className="text-center md:text-left">
                <div className="text-sm font-mono tracking-[3px] text-indigo-400 mb-3">{step.number}</div>
                <h4 className="text-2xl font-semibold tracking-tight mb-3">{step.title}</h4>
                <p className="text-zinc-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-white/10 py-20 text-center px-6">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">Ready to start validating?</h2>
        <p className="text-zinc-400 mb-8 max-w-md mx-auto">Join validators who are already running infrastructure the smart way.</p>
        <button 
          onClick={() => alert('Authentication & full dashboard coming in the next step!')}
          className="px-10 py-4 bg-white text-[#0A0B14] rounded-3xl text-lg font-semibold hover:bg-zinc-100 transition"
        >
          Deploy Your First Validator
        </button>
      </section>

      <footer className="border-t border-white/10 py-8 text-center text-sm text-zinc-500">
        NodeFlow • Validator infrastructure, simplified.
      </footer>
    </main>
  )
}

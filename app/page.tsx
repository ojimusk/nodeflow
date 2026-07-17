'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function NodeFlowHome() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDark, setIsDark] = useState(true)

  const toggleTheme = () => {
    const newTheme = !isDark
    setIsDark(newTheme)
    if (newTheme) {
      document.documentElement.classList.add('dark')
      document.documentElement.classList.remove('light')
    } else {
      document.documentElement.classList.add('light')
      document.documentElement.classList.remove('dark')
    }
  }

  return (
    <main className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-[#0A0B14] text-white' : 'bg-white text-zinc-900'}`}>
      
      {/* Navbar */}
      <nav className={`border-b sticky top-0 z-50 backdrop-blur-xl transition-colors ${isDark ? 'bg-[#0A0B14]/95 border-white/10' : 'bg-white/95 border-zinc-200'}`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo - Lebih Unik & Stylish */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 via-violet-600 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-3xl tracking-[-3px] drop-shadow-sm">N</span>
              </div>
              <span className={`font-semibold text-3xl tracking-[-1.5px] ${isDark ? 'text-white' : 'text-zinc-900'}`}>
                NodeFlow
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8 text-sm">
              <Link href="#features" className={`${isDark ? 'text-zinc-400 hover:text-white' : 'text-zinc-600 hover:text-zinc-900'} transition`}>Features</Link>
              <Link href="#how" className={`${isDark ? 'text-zinc-400 hover:text-white' : 'text-zinc-600 hover:text-zinc-900'} transition`}>How it works</Link>

              {/* Theme Toggle */}
              <button 
                onClick={toggleTheme}
                className={`w-9 h-9 flex items-center justify-center rounded-xl border transition ${isDark ? 'border-white/20 hover:bg-white/5' : 'border-zinc-300 hover:bg-zinc-100'}`}
              >
                {isDark ? '☀️' : '🌙'}
              </button>

              <button 
                onClick={() => alert('Authentication & Dashboard coming next!')}
                className="px-6 py-2.5 bg-white text-[#0A0B14] rounded-2xl text-sm font-semibold hover:bg-zinc-100 active:scale-[0.985] transition shadow-sm"
              >
                Deploy Validator
              </button>
            </div>

            {/* Mobile Controls */}
            <div className="md:hidden flex items-center gap-2">
              <button 
                onClick={toggleTheme}
                className={`w-9 h-9 flex items-center justify-center rounded-xl border transition ${isDark ? 'border-white/20' : 'border-zinc-300'}`}
              >
                {isDark ? '☀️' : '🌙'}
              </button>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="w-10 h-10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`md:hidden border-t px-6 py-6 space-y-4 text-sm ${isDark ? 'bg-[#0A0B14] border-white/10' : 'bg-white border-zinc-200'}`}>
            <Link href="#features" className="block py-2" onClick={() => setIsMenuOpen(false)}>Features</Link>
            <Link href="#how" className="block py-2" onClick={() => setIsMenuOpen(false)}>How it works</Link>
            <button 
              onClick={() => { setIsMenuOpen(false); alert('Authentication & Dashboard coming next!') }}
              className="w-full mt-3 px-6 py-3 bg-white text-[#0A0B14] rounded-2xl font-semibold shadow-sm"
            >
              Deploy Validator
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative max-w-5xl mx-auto px-6 pt-16 md:pt-24 pb-16 text-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-[-30%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-br from-indigo-500/20 via-violet-500/10 to-transparent rounded-full blur-3xl" />
        </div>

        <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm mb-8 ${isDark ? 'bg-white/5 border border-white/10' : 'bg-zinc-100 border border-zinc-200'}`}>
          <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse" />
          Trusted by validators worldwide
        </div>

        <h1 className="text-5xl md:text-7xl font-semibold tracking-[-2.5px] leading-[1.05] mb-6">
          <span className={isDark ? "bg-gradient-to-r from-white via-white to-white/90 bg-clip-text text-transparent" : "text-zinc-900"}>
            The easiest way
          </span>
          <br />
          <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-blue-400 bg-clip-text text-transparent">
            to run validators
          </span>
        </h1>

        {/* Running Text (Marquee) */}
        <div className="overflow-hidden whitespace-nowrap mb-10">
          <div className="inline-flex animate-marquee text-base md:text-lg">
            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-blue-400 bg-clip-text text-transparent font-medium mx-4">
              Deploy • Monitor • Manage validators in minutes — No servers. No infrastructure headaches.
            </span>
            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-blue-400 bg-clip-text text-transparent font-medium mx-4">
              Deploy • Monitor • Manage validators in minutes — No servers. No infrastructure headaches.
            </span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => alert('We will build authentication & dashboard next!')}
            className="px-9 py-4 bg-white text-[#0A0B14] rounded-3xl text-lg font-semibold hover:bg-zinc-100 active:scale-[0.985] transition shadow-sm"
          >
            Start Deploying Free
          </button>
          <a 
            href="#how"
            className={`px-9 py-4 border rounded-3xl text-lg font-medium transition flex items-center justify-center ${isDark ? 'border-white/20 hover:bg-white/5' : 'border-zinc-300 hover:bg-zinc-100'}`}
          >
            See how it works
          </a>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="max-w-6xl mx-auto px-6 pb-20">
        <div className="text-center mb-14">
          <h2 className={`text-4xl md:text-5xl font-semibold tracking-tight ${isDark ? 'text-white' : 'text-zinc-900'}`}>
            Built for validators.<br />Designed for simplicity.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            { title: "One-Click Deployment", desc: "Instantly spin up optimized validator infrastructure on Solana and other networks." },
            { title: "Real-time Performance Dashboard", desc: "Live monitoring of uptime, voting status, stake performance, and rewards." },
            { title: "Automated Failover & Recovery", desc: "Health checks run continuously. Auto restart or migrate if node fails." },
            { title: "Stake & Reward Analytics", desc: "Clear view of your earnings versus infrastructure costs." },
          ].map((feature, index) => (
            <div key={index} className={`group border rounded-3xl p-8 transition-all hover:-translate-y-0.5 ${isDark ? 'border-white/10 hover:border-white/20 bg-white/[0.025]' : 'border-zinc-200 hover:border-zinc-300 bg-zinc-50'}`}>
              <h3 className={`font-semibold text-2xl tracking-tight mb-4 ${isDark ? 'text-white' : 'text-zinc-900'}`}>{feature.title}</h3>
              <p className={`${isDark ? 'text-zinc-400' : 'text-zinc-600'} leading-relaxed`}>{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it Works */}
      <section id="how" className={`border-t py-20 ${isDark ? 'border-white/10 bg-white/[0.015]' : 'border-zinc-200 bg-zinc-50'}`}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className={`text-4xl font-semibold tracking-tight ${isDark ? 'text-white' : 'text-zinc-900'}`}>Get started in minutes</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { number: "01", title: "Create your account", desc: "Sign up with email or connect your wallet in seconds." },
              { number: "02", title: "Choose your network", desc: "Select Solana or other supported chains and set preferences." },
              { number: "03", title: "Deploy & monitor", desc: "One click to launch. Track performance from your dashboard." },
            ].map((step, index) => (
              <div key={index} className="text-center md:text-left">
                <div className="text-sm font-mono tracking-[3px] text-indigo-400 mb-3">{step.number}</div>
                <h4 className={`text-2xl font-semibold tracking-tight mb-3 ${isDark ? 'text-white' : 'text-zinc-900'}`}>{step.title}</h4>
                <p className={`${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className={`border-t py-20 text-center px-6 ${isDark ? 'border-white/10' : 'border-zinc-200'}`}>
        <h2 className={`text-4xl md:text-5xl font-semibold tracking-tight mb-4 ${isDark ? 'text-white' : 'text-zinc-900'}`}>Ready to start validating?</h2>
        <p className={`mb-8 max-w-md mx-auto ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>Join validators who already run infrastructure the smart way.</p>
        <button 
          onClick={() => alert('Authentication & full dashboard coming next!')}
          className="px-10 py-4 bg-white text-[#0A0B14] rounded-3xl text-lg font-semibold hover:bg-zinc-100 transition shadow-sm"
        >
          Deploy Your First Validator
        </button>
      </section>

      <footer className={`border-t py-8 text-center text-sm ${isDark ? 'border-white/10 text-zinc-500' : 'border-zinc-200 text-zinc-500'}`}>
        NodeFlow • Validator infrastructure, simplified.
      </footer>
    </main>
  )
            }

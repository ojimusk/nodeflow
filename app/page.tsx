'use client'

import Link from 'next/link'

export default function NodeFlowHome() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      {/* Navbar */}
      <nav className="border-b border-white/10 bg-zinc-950/80 backdrop-blur-lg sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-white rounded-2xl flex items-center justify-center">
              <span className="text-zinc-950 font-bold text-xl tracking-[-2px]">N</span>
            </div>
            <span className="font-semibold text-2xl tracking-tight">NodeFlow</span>
          </div>

          <div className="flex items-center gap-8 text-sm">
            <Link href="#features" className="text-zinc-400 hover:text-white transition">Features</Link>
            <Link href="#how" className="text-zinc-400 hover:text-white transition">How it works</Link>
            <button 
              onClick={() => alert('Authentication & Dashboard coming in the next step!')}
              className="px-5 py-2.5 bg-white text-zinc-950 rounded-2xl text-sm font-semibold hover:bg-zinc-200 transition"
            >
              Deploy Validator
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 pt-24 pb-20 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm mb-8">
          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
          Validator-as-a-Service
        </div>

        <h1 className="text-7xl font-semibold tracking-tighter leading-none mb-6">
          Run blockchain validators<br />without the hassle
        </h1>
        
        <p className="max-w-lg mx-auto text-xl text-zinc-400 mb-10">
          One-click deployment, real-time monitoring, and automated failover.<br />
          Secure decentralized networks effortlessly.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => alert('We will build authentication & dashboard next!')}
            className="px-8 py-4 bg-white text-zinc-950 rounded-3xl text-lg font-semibold hover:bg-zinc-200 active:scale-[0.985] transition"
          >
            Start Deploying
          </button>
          <a 
            href="#features"
            className="px-8 py-4 border border-white/20 hover:bg-white/5 rounded-3xl text-lg font-medium transition flex items-center justify-center"
          >
            See how it works
          </a>
        </div>
      </section>

      {/* Core Features */}
      <section id="features" className="max-w-6xl mx-auto px-6 pb-24">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold tracking-tight">Everything you need to run validators</h2>
          <p className="text-zinc-400 mt-3 text-lg">Built for simplicity and reliability.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "One-Click Deployment",
              desc: "Automatically provision and configure VPS instances optimized for validator nodes. No manual server setup required.",
            },
            {
              title: "Real-time Performance Dashboard",
              desc: "Monitor uptime, voting participation, stake weight, and rewards in one clean interface.",
            },
            {
              title: "Automated Failover & Recovery",
              desc: "Health checks run continuously. If your node goes down, we automatically restart or migrate it.",
            },
            {
              title: "Stake & Reward Analytics",
              desc: "Transparent view of your rewards versus infrastructure costs with clear visualizations.",
            },
          ].map((feature, index) => (
            <div 
              key={index} 
              className="group border border-white/10 hover:border-white/20 bg-zinc-900/50 rounded-3xl p-8 transition-all hover:-translate-y-0.5"
            >
              <h3 className="font-semibold text-2xl tracking-tight mb-4 group-hover:text-white transition">{feature.title}</h3>
              <p className="text-zinc-400 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="border-t border-white/10 bg-zinc-900/30 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-semibold tracking-tight mb-12">How NodeFlow works</h2>
          
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              { step: "01", title: "Connect Wallet", desc: "Sign in with your wallet or create an account to start managing validators." },
              { step: "02", title: "Choose Network", desc: "Select Solana or other supported chains and configure your validator settings." },
              { step: "03", title: "Deploy & Monitor", desc: "One click to deploy. Track performance, rewards, and health from your dashboard." },
            ].map((item, i) => (
              <div key={i} className="space-y-3">
                <div className="text-sm font-mono text-zinc-500">{item.step}</div>
                <h4 className="text-2xl font-semibold tracking-tight">{item.title}</h4>
                <p className="text-zinc-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-10 text-center text-sm text-zinc-500">
        NodeFlow • Decentralized Validator Infrastructure
      </footer>
    </main>
  )
      }

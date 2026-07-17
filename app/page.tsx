'use client'

import Link from 'next/link'

export default function NodeFlowHome() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Navbar */}
      <nav className="border-b">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">NF</span>
            </div>
            <span className="font-semibold text-xl tracking-tight">NodeFlow</span>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <Link href="#features" className="hover:text-gray-600 transition">Fitur</Link>
            <Link href="#architecture" className="hover:text-gray-600 transition">Teknologi</Link>
            <button 
              onClick={() => alert('Fitur login & dashboard akan kita buat besok!')}
              className="px-5 py-2 bg-black text-white rounded-xl text-sm font-medium hover:bg-gray-800 transition"
            >
              Deploy Validator
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-16 text-center">
        <div className="inline-block px-4 py-1.5 bg-gray-100 rounded-full text-sm mb-6 tracking-wide">
          Validator-as-a-Service
        </div>
        <h1 className="text-6xl font-semibold tracking-tighter mb-6 leading-none">
          Jalankan Validator Blockchain<br />Tanpa Ribet
        </h1>
        <p className="text-xl text-gray-600 max-w-lg mx-auto mb-10">
          NodeFlow menyederhanakan proses menjalankan dan mengelola validator node 
          (contoh: Solana). Otomatisasi deployment, monitoring, dan failover.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => alert('Fitur auth & dashboard akan kita buat besok!')}
            className="px-8 py-4 bg-black text-white rounded-2xl text-lg font-medium hover:bg-gray-800 transition"
          >
            Mulai Deploy Validator
          </button>
          <a 
            href="#features"
            className="px-8 py-4 border border-gray-300 rounded-2xl text-lg font-medium hover:bg-gray-50 transition flex items-center justify-center"
          >
            Lihat Fitur Lengkap
          </a>
        </div>
      </section>

      {/* Core Features */}
      <section id="features" className="max-w-6xl mx-auto px-6 py-16 border-t">
        <h2 className="text-3xl font-semibold tracking-tight mb-10 text-center">Core Features</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { 
              title: "One-Click Deployment", 
              desc: "Otomatis provisioning VPS yang sudah dikonfigurasi untuk validator blockchain." 
            },
            { 
              title: "Performance Dashboard", 
              desc: "Real-time monitoring uptime, voting status, stake performance, dan reward." 
            },
            { 
              title: "Automated Failover", 
              desc: "Health check otomatis yang restart atau pindah infrastruktur jika node gagal." 
            },
            { 
              title: "Stake Analytics", 
              desc: "Visualisasi reward yang didapat vs biaya investasi secara transparan." 
            },
          ].map((feature, index) => (
            <div key={index} className="border rounded-3xl p-8 hover:shadow-sm transition-all">
              <h3 className="font-semibold text-xl mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center py-10 text-sm text-gray-500 border-t">
        NodeFlow • Decentralized Protocol Validator-as-a-Service • MVP Phase
      </footer>
    </main>
  )
}

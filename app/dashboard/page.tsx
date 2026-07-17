'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import type { User } from '@supabase/supabase-js'

export default function Dashboard() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) {
        router.push('/login')
      } else {
        setUser(user)
      }
      setLoading(false)
    }
    getUser()
  }, [router])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/login')
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0A0B14] text-white">
        <div className="animate-pulse">Loading dashboard...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#0A0B14] text-white">
      {/* Top Navbar */}
      <nav className="border-b border-white/10 bg-[#0A0B14]/95 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
          <div className="flex items-center gap-4">
            <div className="w-9 h-9 bg-gradient-to-br from-indigo-500 via-violet-600 to-blue-500 rounded-2xl flex items-center justify-center">
              <span className="text-white font-bold text-2xl tracking-[-2px]">N</span>
            </div>
            <div>
              <span className="font-semibold text-2xl tracking-tight">NodeFlow</span>
              <span className="ml-2 text-xs px-2 py-0.5 bg-white/10 rounded-full text-zinc-400">Dashboard</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:block text-right">
              <p className="text-sm font-medium">{user?.email}</p>
              <p className="text-xs text-zinc-500">Validator</p>
            </div>
            <button 
              onClick={handleLogout}
              className="px-5 py-2 text-sm border border-white/20 rounded-2xl hover:bg-white/5 transition"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Welcome Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-semibold tracking-tight">Welcome back 👋</h1>
          <p className="text-zinc-400 mt-2 text-lg">Here’s an overview of your validators.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {[
            { label: "Total Validators", value: "3", change: "+1 this week" },
            { label: "Active", value: "2", change: "Online" },
            { label: "Total Stake", value: "124.5 SOL", change: "+12.3 SOL" },
            { label: "Est. Monthly Reward", value: "4.8 SOL", change: "+0.9 SOL" },
          ].map((stat, index) => (
            <div key={index} className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:border-white/20 transition">
              <p className="text-zinc-400 text-sm">{stat.label}</p>
              <p className="text-4xl font-semibold mt-3 tracking-tight">{stat.value}</p>
              <p className="text-emerald-400 text-sm mt-1">{stat.change}</p>
            </div>
          ))}
        </div>

        {/* Validators Section */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold tracking-tight">Your Validators</h2>
          <button 
            onClick={() => alert('Fitur tambah validator akan kita buat selanjutnya')}
            className="px-6 py-2.5 bg-white text-[#0A0B14] rounded-2xl text-sm font-semibold hover:bg-zinc-200 transition flex items-center gap-2"
          >
            + Add New Validator
          </button>
        </div>

        {/* Validators List / Empty State */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
          <div className="text-center py-12">
            <div className="mx-auto w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-6">
              <span className="text-4xl">🛰️</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">No validators yet</h3>
            <p className="text-zinc-400 max-w-xs mx-auto mb-6">
              Start by adding your first validator node. It only takes a minute.
            </p>
            <button 
              onClick={() => alert('Fitur tambah validator akan kita buat selanjutnya')}
              className="px-8 py-3 bg-white text-[#0A0B14] rounded-2xl font-semibold hover:bg-zinc-200 transition"
            >
              Add Your First Validator
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import type { User } from '@supabase/supabase-js'

export default function DashboardPage() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      
      if (!user) {
        router.push('/login') // Redirect ke login jika belum login
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
        <p>Loading...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#0A0B14] text-white">
      {/* Navbar Dashboard */}
      <nav className="border-b border-white/10 bg-[#0A0B14]/95 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-2xl flex items-center justify-center">
              <span className="text-white font-bold text-2xl tracking-[-2px]">N</span>
            </div>
            <span className="font-semibold text-2xl tracking-tight">NodeFlow</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-sm text-zinc-400 hidden md:block">
              {user?.email}
            </span>
            <button 
              onClick={handleLogout}
              className="px-5 py-2 text-sm border border-white/20 rounded-xl hover:bg-white/5 transition"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>

      {/* Dashboard Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="mb-10">
          <h1 className="text-4xl font-semibold tracking-tight">Dashboard</h1>
          <p className="text-zinc-400 mt-2">Welcome back! Manage your validators here.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
            <p className="text-zinc-400 text-sm">Total Validators</p>
            <p className="text-4xl font-semibold mt-2">0</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
            <p className="text-zinc-400 text-sm">Active Validators</p>
            <p className="text-4xl font-semibold mt-2">0</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
            <p className="text-zinc-400 text-sm">Total Stake</p>
            <p className="text-4xl font-semibold mt-2">0 SOL</p>
          </div>
        </div>

        {/* Validators Section */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold">Your Validators</h2>
            <button className="px-5 py-2 bg-white text-[#0A0B14] rounded-2xl text-sm font-semibold hover:bg-zinc-200 transition">
              + Add Validator
            </button>
          </div>

          <div className="text-center py-12 text-zinc-400">
            <p>You don't have any validators yet.</p>
            <p className="mt-1">Click "Add Validator" to get started.</p>
          </div>
        </div>
      </div>
    </div>
  )
              }

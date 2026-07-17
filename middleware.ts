import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Ambil token dari cookie Supabase
  const token = request.cookies.get('sb-access-token')?.value

  // 1. Proteksi halaman /dashboard
  if (!token && request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  // 2. Jika sudah login, jangan izinkan akses ke halaman login & register
  if (token && (request.nextUrl.pathname === '/login' || request.nextUrl.pathname === '/register')) {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  return NextResponse.next()
}

// Tentukan halaman mana saja yang akan dicek oleh middleware
export const config = {
  matcher: ['/dashboard/:path*', '/login', '/register'],
}

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const token = request.cookies.get('sb-access-token')?.value

  const isAuthPage = request.nextUrl.pathname === '/login' || 
                     request.nextUrl.pathname === '/register'

  const isDashboard = request.nextUrl.pathname.startsWith('/dashboard')

  // Jika user SUDAH login
  if (token) {
    // Jangan izinkan akses ke halaman login/register
    if (isAuthPage) {
      return NextResponse.redirect(new URL('/dashboard', request.url))
    }
    return NextResponse.next()
  }

  // Jika user BELUM login dan mencoba akses dashboard
  if (!token && isDashboard) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*', '/login', '/register'],
}

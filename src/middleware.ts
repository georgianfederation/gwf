import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const intlMiddleware = createMiddleware(routing);

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. Skip middleware for static files and internal Next.js paths
  // This is the most reliable way to prevent 404s on images
  if (
    pathname.includes('.') || 
    pathname.startsWith('/_next') || 
    pathname.startsWith('/api')
  ) {
    return NextResponse.next();
  }

  // 2. Auth Gate for Dashboard
  if (pathname.startsWith("/admin") || pathname.includes("/dashboard")) {
    const sessionToken = request.cookies.get("next-auth.session-token") || request.cookies.get("__Secure-next-auth.session-token");
    
    if (!sessionToken) {
      const url = new URL("/login", request.url);
      url.searchParams.set("callbackUrl", pathname);
      return NextResponse.redirect(url);
    }
  }

  // 3. Apply Internationalization
  const response = intlMiddleware(request);

  // 4. Security Headers (Only for page requests)
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set(
    "Content-Security-Policy",
    "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src * blob: data:; font-src 'self';"
  );

  return response;
}

export const config = {
  // Use a broad matcher but handle exclusions inside the middleware function for better control
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
};

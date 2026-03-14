"use client";

import { Link, usePathname } from '@/i18n/routing';
import { useLocale, useTranslations } from 'next-intl';
import { Search, Globe, Trophy } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const t = useTranslations('Home');
  const locale = useLocale();
  const pathname = usePathname();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-[100] border-b border-primary/20 bg-background-dark/95 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="group-hover:scale-110 transition-transform">
                <img src="/logo.png" alt="Wrestling Federation Logo" className="w-12 h-12 object-contain" />
              </div>
              <div>
                <h1 className="text-sm md:text-base font-extrabold leading-tight tracking-tighter text-white uppercase italic">
                  {locale === 'ka' ? (
                    <>
                      <span className="text-primary">ს</span>აქართველოს <span className="text-primary">ჭ</span>იდაობის<br />
                      <span className="text-primary">ფ</span>ედერაცია
                    </>
                  ) : (
                    <>
                      <span className="text-primary">G</span>EORGIAN <span className="text-primary">W</span>RESTLING<br />
                      <span className="text-primary">F</span>EDERATION
                    </>
                  )}
                </h1>
              </div>
            </Link>
          </div>

          <nav className="hidden xl:flex items-center gap-8">
            <Link href="/" className="text-sm font-bold text-white hover:text-[#eab308] transition-colors">{locale === 'ka' ? 'მთავარი' : 'Home'}</Link>
            <Link href="/federation" className="text-sm font-bold text-slate-400 hover:text-[#eab308] transition-colors">{locale === 'ka' ? 'ფედერაცია' : 'Federation'}</Link>
            <Link href="/news" className="text-sm font-bold text-slate-400 hover:text-[#eab308] transition-colors">{locale === 'ka' ? 'სიახლეები' : 'News'}</Link>
            <Link href="/tournaments" className="text-sm font-bold text-slate-400 hover:text-[#eab308] transition-colors">{locale === 'ka' ? 'შეჯიბრებები' : 'Competitions'}</Link>
            <Link href="/athletes" className="text-sm font-bold text-slate-400 hover:text-[#eab308] transition-colors">{locale === 'ka' ? 'ათლეტები' : 'Athletes'}</Link>
            <Link href="/live" className="text-sm font-bold text-red-500 flex items-center gap-1">
               <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              LIVE
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <div className={`hidden md:flex items-center bg-surface px-3 py-1.5 rounded-lg border border-primary/20 transition-all ${isSearchOpen ? 'w-64' : 'w-40'}`}>
              <Search className="text-slate-400 w-4 h-4" />
              <input 
                type="text" 
                placeholder={locale === 'ka' ? "ძიება..." : "Search..."}
                className="bg-transparent border-none focus:ring-0 text-sm w-full placeholder:text-slate-500 text-white"
                onFocus={() => setIsSearchOpen(true)}
                onBlur={() => setIsSearchOpen(false)}
              />
            </div>
            
            <Link 
              href={pathname} 
              locale={locale === 'ka' ? 'en' : 'ka'}
              className="flex items-center gap-1.5 text-xs font-bold text-slate-300 hover:text-primary transition-all bg-surface px-3 py-2 rounded-lg border border-white/5"
            >
              <Globe className="w-3.5 h-3.5" />
              {locale === 'ka' ? 'English' : 'ქართული'}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

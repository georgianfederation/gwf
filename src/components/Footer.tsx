"use client";

import { useLocale } from 'next-intl';
import { Mail, Phone, MapPin, Trophy, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { Link } from '@/i18n/routing';

export default function Footer() {
  const locale = useLocale() as 'ka' | 'en';

  return (
    <footer className="bg-surface pt-20 pb-10 border-t border-primary/20">
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="group-hover:scale-110 transition-transform">
                <img src="/logo.png" alt="Wrestling Federation Logo" className="w-10 h-10 object-contain" />
              </div>
              <h1 className="text-lg font-extrabold leading-none tracking-tighter text-white uppercase italic">
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
            <p className="text-slate-400 text-sm mb-8 leading-relaxed">
              {locale === 'ka' 
                ? 'ეძღვნება ჭიდაობის ყველა სტილის პოპულარიზაციას, ორგანიზებასა და განვითარებას მთელი ქვეყნის მასშტაბით.'
                : 'Dedicated to the promotion, organization, and development of all styles of wrestling across the nation.'}
            </p>
            <div className="flex gap-4">
              <a href="#" className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"><Facebook size={18} /></a>
              <a href="#" className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"><Instagram size={18} /></a>
              <a href="#" className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"><Youtube size={18} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-black text-lg mb-6 uppercase italic">{locale === 'ka' ? 'მართვა' : 'Governance'}</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-slate-400 hover:text-primary transition-colors text-sm font-medium">{locale === 'ka' ? 'ანტი-დოპინგის პოლიტიკა' : 'Anti-Doping Policy'}</Link></li>
              <li><Link href="#" className="text-slate-400 hover:text-primary transition-colors text-sm font-medium">{locale === 'ka' ? 'უსაფრთხოების წესები' : 'Safe Sport Guidelines'}</Link></li>
              <li><Link href="#" className="text-slate-400 hover:text-primary transition-colors text-sm font-medium">{locale === 'ka' ? 'წესები და რეგულაციები' : 'Rules & Regulations'}</Link></li>
              <li><Link href="#" className="text-slate-400 hover:text-primary transition-colors text-sm font-medium">{locale === 'ka' ? 'აფილირებული კლუბები' : 'Affiliated Clubs'}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black text-lg mb-6 uppercase italic">{locale === 'ka' ? 'კონტაქტი' : 'Contact Us'}</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 items-start">
                <MapPin className="text-primary w-5 h-5 shrink-0" />
                <span className="text-slate-400 text-sm">{locale === 'ka' ? 'საქართველო, თბილისი, ვაკე.' : 'Georgia, Tbilisi, Vake.'}</span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone className="text-primary w-5 h-5 shrink-0" />
                <span className="text-slate-400 text-sm">+995 555 123 123</span>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="text-primary w-5 h-5 shrink-0" />
                <span className="text-slate-400 text-sm">info@gwf.ge</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black text-lg mb-6 uppercase italic">{locale === 'ka' ? 'სიახლეები' : 'Stay Updated'}</h4>
            <p className="text-slate-400 text-sm mb-4">{locale === 'ka' ? 'მიიღეთ ბოლო სიახლეები თქვენს მეილზე.' : 'Get the latest news and event alerts.'}</p>
            <form className="space-y-2">
              <input 
                type="email" 
                placeholder={locale === 'ka' ? "მეილი" : "Email address"}
                className="w-full bg-background-dark border-white/10 rounded-lg text-sm px-4 py-2.5 focus:border-primary focus:ring-primary text-white" 
              />
              <button className="w-full bg-primary text-background-dark font-black py-2.5 rounded-lg text-sm uppercase">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs font-medium">
            © 2024 {locale === 'ka' ? 'საქართველოს ჭიდაობის ეროვნული ფედერაცია' : 'National Wrestling Federation'}. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs font-medium text-slate-500">
            <Link href="#" className="hover:text-primary">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

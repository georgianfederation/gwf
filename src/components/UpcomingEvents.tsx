"use client";

import { useLocale, useTranslations } from 'next-intl';
import { MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const events = [
  {
    id: 1,
    date: { day: '14', month: { ka: 'აპრილი', en: 'April' }, year: '2026' },
    title: { ka: 'ეროვნული ჩემპიონატი თავისუფალ ჭიდაობაში', en: 'National Freestyle Championship' },
    location: { ka: 'თბილისი, სპორტის სასახლე', en: 'Georgia. Tbilisi, sport Palace' },
    category: { ka: 'ეროვნული სტილი', en: 'National Style' },
    accent: 'bg-primary/20 text-primary',
    image: 'https://images.unsplash.com/photo-1569498318710-d347897b2280?q=80&w=1074&auto=format&fit=crop'
  },
  {
    id: 2,
    date: { day: '03', month: { ka: 'მაისი', en: 'May' }, year: '2026' },
    title: { ka: 'ახალგაზრდული ბერძნულ-რომაული მასტერსი', en: 'Youth Greco-Roman Masters' },
    location: { ka: 'ბათუმი, ოლიმპიური ცენტრი', en: 'Batumi, Olympic Center' },
    category: { ka: 'ჭაბუკთა დივიზიონი', en: 'Youth Division' },
    accent: 'bg-accent/20 text-accent',
    image: 'https://images.unsplash.com/photo-1569498318710-d347897b2280?q=80&w=1074&auto=format&fit=crop'
  },
  {
    id: 3,
    date: { day: '02', month: { ka: 'ივნისი', en: 'June' }, year: '2026' },
    title: { ka: 'ქუთაისის ღია საერთაშორისო ტურნირი', en: 'Kutaisi Open Invitational' },
    location: { ka: 'ქუთაისი, სპორტის სასახლე', en: 'Kutaisi, Sport Palace' },
    category: { ka: 'ღია სტილი', en: 'Open Style' },
    accent: 'bg-purple-600/20 text-purple-400',
    image: 'https://images.unsplash.com/photo-1569498318710-d347897b2280?q=80&w=1074&auto=format&fit=crop'
  }
];

export default function UpcomingEvents() {
  const t = useTranslations('Home');
  const locale = useLocale() as 'ka' | 'en';

  return (
    <section className="py-20 bg-background-dark relative overflow-hidden">
      <div className="container px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-6">
          <div className="text-left">
            <h2 className="text-accent font-bold uppercase tracking-widest text-[10px] mb-2 scoreboard-font">
              {locale === 'ka' ? 'კალენდარი 2026' : 'Calendar 2026'}
            </h2>
            <h3 className="text-4xl font-black text-white italic uppercase leading-none">{t('upcomingEvents')}</h3>
          </div>
          <div className="flex bg-surface p-1 rounded-xl border border-primary/10 overflow-x-auto no-scrollbar max-w-full">
            <button className="flex-none bg-primary text-background-dark px-6 py-2 rounded-lg font-bold text-sm uppercase whitespace-nowrap">{locale === 'ka' ? 'თავისუფალი' : 'Freestyle'}</button>
            <button className="flex-none text-slate-400 hover:text-white px-6 py-2 rounded-lg font-bold text-sm uppercase whitespace-nowrap">{locale === 'ka' ? 'ბერძნულ-რომაული' : 'Greco-Roman'}</button>
            <button className="flex-none text-slate-400 hover:text-white px-6 py-2 rounded-lg font-bold text-sm uppercase whitespace-nowrap">{locale === 'ka' ? 'ქალთა' : 'Women\'s'}</button>
          </div>
        </div>

        <div className="flex gap-8 overflow-x-auto pb-8 no-scrollbar -mx-4 px-4">
          {events.map((event, idx) => (
            <motion.div 
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="flex-none w-[320px] md:w-[380px] group bg-surface rounded-2xl overflow-hidden border border-primary/10 hover:border-primary/50 transition-all shadow-2xl"
            >
              <div className="relative h-48 overflow-hidden border-b border-primary/20">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                  <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/40 to-transparent z-10"></div>
                  <img 
                    src={event.image} 
                    alt={event.location[locale]}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60"
                  />
                </div>

                <div className="relative z-20 h-full p-6 flex flex-col items-center justify-center text-center">
                  <span className="text-primary text-xs font-bold uppercase tracking-[0.3em] scoreboard-font mb-1 drop-shadow-lg">
                    {event.date.month[locale]}
                  </span>
                  <span className="text-6xl font-black text-white scoreboard-font leading-none drop-shadow-2xl">{event.date.day}</span>
                  <span className="text-slate-300 text-[11px] font-bold uppercase tracking-widest scoreboard-font mt-1">{event.date.year}</span>
                </div>
              </div>
              <div className="p-6">
                <div className={`inline-block ${event.accent} px-3 py-1 rounded-md text-[9px] font-bold mb-3 uppercase tracking-wider scoreboard-font`}>
                  {event.category[locale]}
                </div>
                <h4 className="text-lg font-bold text-white mb-4 group-hover:text-primary transition-colors h-14 overflow-hidden leading-snug">
                  {event.title[locale]}
                </h4>
                <div className="flex items-center gap-2 text-slate-400 text-xs mb-6">
                  <MapPin className="w-3.5 h-3.5 text-primary" />
                  {event.location[locale]}
                </div>
                <button className="w-full py-3 border border-primary text-primary hover:bg-primary hover:text-background-dark font-black rounded-lg transition-all text-sm uppercase scoreboard-font">
                  {t('register')}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

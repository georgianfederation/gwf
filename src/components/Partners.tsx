"use client";

import { useTranslations } from 'next-intl';
import { Dumbbell, Trophy, Shield, Timer, Activity } from 'lucide-react';

const partners = [
  { id: 1, icon: Dumbbell, name: 'Fitness Center' },
  { id: 2, icon: Activity, name: 'Staduim' },
  { id: 3, icon: Shield, name: 'Medical Services' },
  { id: 4, icon: Timer, name: 'Timer' },
  { id: 5, icon: Trophy, name: 'Sports Score' }
];

export default function Partners() {
  const t = useTranslations('Home');

  return (
    <section className="py-16 bg-background-dark">
      <div className="container px-4">
        <p className="text-center text-slate-600 text-[10px] font-black uppercase tracking-[0.4em] mb-12 scoreboard-font">
          {t('partners')}
        </p>
        <div className="flex items-center justify-start md:justify-center gap-12 lg:gap-24 overflow-x-auto no-scrollbar pb-8 px-4 -mx-4 opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
          {partners.map((partner) => (
            <div key={partner.id} className="group cursor-pointer flex-none">
               <partner.icon className="w-12 h-12 text-slate-300 group-hover:text-primary transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

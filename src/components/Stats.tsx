"use client";

import { useLocale } from 'next-intl';
import { Users, Home, Brain, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';

const stats = [
  { id: 1, label: { ka: 'ათლეტი', en: 'Athletes' }, value: '800', icon: Users, color: 'text-blue-400' },
  { id: 2, label: { ka: 'კლუბი', en: 'Clubs' }, value: '45', icon: Home, color: 'text-green-400' },
  { id: 3, label: { ka: 'მწვრთნელი', en: 'Coaches' }, value: '110', icon: Brain, color: 'text-purple-400' },
  { id: 4, label: { ka: 'მსაჯი', en: 'Referees' }, value: '12', icon: Trophy, color: 'text-yellow-400' },
];

export default function Stats() {
  const locale = useLocale() as 'ka' | 'en';

  return (
    <section className="py-12 -mt-16 relative z-50 container px-4">
      <div className="flex items-stretch gap-6 overflow-x-auto no-scrollbar pt-10 pb-10 px-4 -mx-4 lg:grid lg:grid-cols-4 lg:p-0 lg:m-0 lg:overflow-visible">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -16, zIndex: 50 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            style={{ opacity: 0 }}
            className="flex-none w-72 lg:w-auto bg-surface border border-primary/10 p-8 rounded-2xl shadow-2xl flex items-center gap-6 hover:border-primary/30 transition-all relative will-change-transform"
          >
            <div className="bg-primary/10 p-4 rounded-xl text-primary">
              <stat.icon className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-3xl font-black text-white scoreboard-font">{stat.value}</h3>
              <p className="text-slate-500 font-bold uppercase text-[10px] tracking-[0.2em] scoreboard-font">
                {stat.label[locale]}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

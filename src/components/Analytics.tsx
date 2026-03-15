"use client";

import { useLocale, useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Filter, Download, Printer } from 'lucide-react';

const tableData = [
  {
    rank: '1ST',
    name: { ka: 'გიორგი დვალი', en: 'Giorgi Dvali' },
    club: { ka: 'ელიტ ჭიდაობის აკადემია', en: 'Elite Wrestling Academy' },
    score: '8 - 2',
    highlights: { ka: '3x ეროვნული ჩემპიონი', en: '3x National Champion' },
    status: 'CHAMPION'
  },
  {
    rank: '2ND',
    name: { ka: 'სანდრო დვალი', en: 'Sandro Dvali' },
    club: { ka: 'დედაქალაქის მოჭიდავეები', en: 'Capital City Grapplers' },
    score: '2 - 8',
    highlights: { ka: 'რეგიონალური ფინალისტი', en: 'Regional Finalist' },
    status: 'FINALIST'
  },
  {
    rank: '3RD',
    name: { ka: 'ნიკო დვალი', en: 'Niko Dvali' },
    club: { ka: 'ტიტანების საჭიდაო აკადემია', en: 'Titan Wrestling Academy' },
    score: '6 - 4',
    highlights: { ka: 'ეროვნული ბრინჯაოს პრიზიორი', en: 'National Bronze Medalist' },
    status: 'QUALIFIED'
  }
];

const weights = ['74 kg', '57 kg', '65 kg', '86 kg', '125 kg'];

export default function Analytics() {
  const locale = useLocale() as 'ka' | 'en';
  const t = useTranslations('Home');

  return (
    <section className="py-12 md:py-20 bg-background-dark relative overflow-hidden">
      {/* Saint George Background Overlay - Right Side Only */}
      <div 
        className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none z-0"
        style={{
          backgroundImage: `url('/st-george.png')`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right center',
          // Calculated to be exactly 3% lighter than #101022
          filter: 'brightness(0) saturate(100%) invert(6%) sepia(15%) saturate(3000%) hue-rotate(210deg) brightness(150%) contrast(100%)',
          opacity: 0.5,
        }}
      />
      <div className="container px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ opacity: 0 }}
          className="will-change-transform"
        >
          <div className="flex flex-col lg:flex-row justify-between items-start mb-12 gap-10">
          <div className="max-w-md">
            <h2 className="text-accent font-bold uppercase tracking-[0.2em] text-[10px] mb-3 scoreboard-font">
              {locale === 'ka' ? 'შესრულების მეტრიკა' : 'Performance Metrics'}
            </h2>
            <h3 className="text-4xl font-black text-white mb-4 italic tracking-tight uppercase">
              {locale === 'ka' ? 'ტურნირის შედეგები' : 'Tournament Results'}
            </h3>
            <p className="text-slate-400 text-sm scoreboard-font leading-relaxed">
              {locale === 'ka' 
                ? '74 კგ თავისუფალი სტილის დეტალური მიმოხილვა. ტოპ მედალისტების შედარებითი მონაცემების ანალიზი.'
                : 'Detailed breakdown of the 74kg Freestyle division. Comparative data analysis of top-seeded medalists.'}
            </p>
          </div>
          
          <div className="w-full lg:w-auto space-y-6">
            <div className="flex flex-col gap-2">
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 scoreboard-font">
                {locale === 'ka' ? 'ღონისძიების ფილტრი' : 'Event Filter'}
              </p>
              <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar max-w-full">
                <button className="flex-none whitespace-nowrap bg-primary text-background-dark px-5 py-2 rounded-md text-[11px] font-bold uppercase tracking-wider scoreboard-font">National Freestyle 2024</button>
                <button className="flex-none whitespace-nowrap bg-surface border border-primary/20 text-slate-400 hover:text-white px-5 py-2 rounded-md text-[11px] font-bold uppercase tracking-wider scoreboard-font">Youth Greco-Roman</button>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 scoreboard-font">
                {t('weightCategory')}
              </p>
              <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar max-w-full">
                {weights.map((w, idx) => (
                  <motion.button 
                    key={w} 
                    whileTap={{ scale: 0.95 }}
                    className={`flex-none whitespace-nowrap px-4 py-1.5 rounded text-[11px] font-bold scoreboard-font transition-all ${idx === 0 ? 'bg-slate-700 text-white' : 'bg-surface border border-slate-700 text-slate-400 hover:text-white'}`}
                  >
                    {w}
                  </motion.button>
                ))}
            </div>
          </div>
        </div>

        <div className="bg-stats-bg border border-stats-border rounded-xl shadow-2xl overflow-hidden">
          <div className="overflow-x-auto no-scrollbar">
            <table className="w-full text-left scoreboard-font border-collapse">
              <thead>
                <tr className="bg-surface/50 border-b border-white/5">
                  <th className="py-4 px-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Rank / {locale === 'ka' ? 'ათლეტი' : 'Athlete'}</th>
                  <th className="py-4 px-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest">{t('club')}</th>
                  <th className="py-4 px-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest text-center">{locale === 'ka' ? 'ანგარიში' : 'Score'}</th>
                  <th className="py-4 px-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest">{locale === 'ka' ? 'მიღწევები' : 'Highlights'}</th>
                  <th className="py-4 px-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {tableData.map((row) => (
                  <motion.tr 
                    key={row.name.en} 
                    whileHover={{ backgroundColor: "rgba(234,179,8,0.05)" }}
                    className="transition-colors group cursor-default"
                  >
                    <td className="py-5 px-6">
                      <div className="flex items-center gap-4">
                        <div className="relative size-10 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold text-xs ring-2 ring-primary/20">
                          {row.rank}
                        </div>
                        <div>
                          <p className="text-white font-bold text-sm leading-none mb-1">{row.name[locale]}</p>
                          <p className="text-primary text-[9px] font-bold uppercase tracking-wider">{row.status}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-5 px-6">
                      <p className="text-slate-400 text-xs font-medium">{row.club[locale]}</p>
                    </td>
                    <td className="py-5 px-6 text-center">
                      <span className="stat-val text-lg text-white font-bold">{row.score}</span>
                    </td>
                    <td className="py-5 px-6">
                      <p className="text-slate-400 text-[11px] max-w-[200px] leading-tight">{row.highlights[locale]}</p>
                    </td>
                    <td className="py-5 px-6 text-right">
                       <span className={`text-[9px] font-bold px-2 py-1 rounded border ${row.status === 'CHAMPION' ? 'bg-primary/10 text-primary border-primary/30' : 'bg-slate-400/10 text-slate-400 border-slate-400/30'}`}>
                        {row.status}
                       </span>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="bg-surface/30 px-6 py-4 border-t border-white/5 flex justify-between items-center">
            <p className="text-[9px] text-slate-500 font-bold uppercase tracking-widest scoreboard-font">
              {locale === 'ka' ? 'ვერიფიცირებული მონაცემები • განახლდა: 2 წუთის წინ' : 'Verified Official Data • Last Updated: 2 mins ago'}
            </p>
            <div className="flex gap-4">
              <motion.button 
                whileTap={{ scale: 0.9 }}
                className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors text-[10px] font-bold scoreboard-font uppercase cursor-pointer"
              >
                <Download className="w-3 h-3" /> Export
              </motion.button>
              <motion.button 
                whileTap={{ scale: 0.9 }}
                className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors text-[10px] font-bold scoreboard-font uppercase cursor-pointer"
              >
                <Printer className="w-3 h-3" /> Print
              </motion.button>
            </div>
          </div>
        </div>
        </motion.div>
      </div>
    </section>
  );
}

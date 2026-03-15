"use client";

import { useTranslations, useLocale } from 'next-intl';
import { Calendar, Info } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  const t = useTranslations('Home');
  const locale = useLocale();

  return (
    <section className="relative min-h-[500px] flex items-center overflow-hidden py-20">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-background-dark via-background-dark/80 to-transparent z-10"></div>
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzOsJPz7cMbv1jsrlvuiM8qavYf46pr8PWvcj1g3-ujQ4bdaJ6zAOnwq5hlTKdxBROsxYQwGPAxx3bE-0uh1BN4useSi1L5h0TUu200GqkRJDs5S-RBB3-3iB0yo2CEAp38oNwzB_1R2HQEaMXEtFzoVtAtr1VjOojGZUePZSIgzqssNRToDIxGcud2dRyuQrnukUEFoQarAaehsaiXYSgOrdlZK2WV1-BGn6bHoXvmdCI7rwFjvZuN54BNGBHogkUy3tK3cVvQSe1" 
          alt="Wrestling Action"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container relative z-20">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ opacity: 0 }}
          className="max-w-2xl will-change-transform"
        >
          <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-600/30 text-red-500 px-4 py-1.5 rounded-full mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            <span className="text-[10px] font-bold uppercase tracking-widest scoreboard-font">
              {locale === 'ka' ? 'პირდაპირი ეთერი: რეგიონალური შესარჩევი' : 'Live: Regional Qualifiers'}
            </span>
          </div>

          <h1 className="text-4xl xs:text-5xl md:text-7xl font-black text-white leading-[1.1] mb-6 tracking-tight italic uppercase break-words">
            {locale === 'ka' ? 'საქართველოს ჭიდაობის ფედერაცია' : 'GEORGIAN WRESTLING FEDERATION'}
          </h1>
          
          <p className="text-base md:text-xl text-slate-300 mb-8 max-w-xl font-medium leading-relaxed">
            {t('description')} {locale === 'ka' 
              ? 'საქართველოს ოფიციალური მმართველი ორგანო ჭიდაობაში. მხარდაჭერა 2,400-ზე მეტი ათლეტისათვის სხვადასხვა სტილში.' 
              : 'The official governing body for wrestling in Georgia. Supporting over 2,400 athletes across multiple styles from grassroots to olympic level.'}
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-background-dark px-8 py-2.5 rounded-xl font-black text-lg flex items-center gap-2 shadow-[0_0_20px_rgba(234,179,8,0.3)] transition-colors hover:bg-white active:bg-white"
            >
              {t('competitions')} <Calendar className="w-5 h-5" />
            </motion.button>
          </div>

          <div className="grid grid-cols-2 gap-12 border-t border-white/10 pt-4 max-w-lg">
            <div>
              <p className="text-slate-500 text-[10px] uppercase font-bold tracking-widest mb-1 scoreboard-font">{locale === 'ka' ? 'შემდეგი ღონისძიება' : 'Next Major Event'}</p>
              <p className="text-white font-bold">{locale === 'ka' ? '14 აპრილი, თბილისი' : 'April 14, National Arena'}</p>
            </div>
            <div>
              <p className="text-slate-500 text-[10px] uppercase font-bold tracking-widest mb-1 scoreboard-font">{locale === 'ka' ? 'მსოფლიო რეიტინგი' : 'World Rank'}</p>
              <p className="text-primary font-bold">TOP 10</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

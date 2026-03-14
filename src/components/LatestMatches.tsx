"use client";

import { useLocale } from 'next-intl';
import { motion } from 'framer-motion';

const matches = [
  {
    id: 1,
    athlete1: { nameKa: 'გიორგი გიორგაძე', nameEn: 'Giorgi Giorgadze', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDDQDTblZAwKoFE_wvcZd7MkwMr0t17XAiZBcTmU5VNpttkt5R8bl_n3hN8sy_q6WmOU34q6lbCHdfkMj8F9a-zrOSv3JFWsEVfNvsKLz5fheQpfDGsGM7aFGThYdwqE8D9KJY8nFoG-8YIQ0hOphHQdxGe7hkH3sNfI6K-_V6Hh2yBbXbSadn_hg639gynWd6LZiZYff_WM7WFo-erE3vioM3c-HA-CtH43Y5dBVFecRbLuoxd7QCm8HqB2cZtovQ0ofvZBKxfHiaR' },
    athlete2: { nameKa: 'ჯონ სტერლინგი', nameEn: 'John Sterling', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA_YnPlbOl7WNVJffMQ1vURsc1Lssrdd9pUosYbwUZPbjU115D7V6j7kFEXJtbf2Jf7tjlbJBliECrApT78nrDAi7FtzupVRDq3rfjQL4T2Ve5cD9j0JUAvrE8SNiJDDahUwW1US_ppYRDPzDrZCKND0uxMVV8L9UVApcTF8DcHgZvFm5_vgf6_gfXGTm2-64IDni9gGMfhfRZyoVkHFx_QAMvP4-RR2j_EqgCeV3GzmUJwg6DNi05G4BcytLaUUc8094aZdgZvAage' },
    score: '8 - 2',
    weight: { ka: 'მძიმე წონა', en: 'Heavyweight' },
    style: { ka: 'თავისუფალი', en: 'Freestyle' },
    tournament: { ka: 'ეროვნული ჩემპიონატი', en: 'National Championship' }
  },
  {
    id: 2,
    athlete1: { nameKa: 'ანა დოლიძე', nameEn: 'Ana Dolidze', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAnfQf09jX0tDqB45v4D0r3q3rY26vX9e-0u1r2v3y4z5' },
    athlete2: { nameKa: 'მაია ტომპსონი', nameEn: 'Maya Thompson', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDoJZK2Lgn8rTGBb5FbXFSHkZZbx8nBmvgGvHKZ5AP3ChjtBa0GWaHlLZXaJGe955e0bMO_OJibqSzbEsskvv5nes5WD-u0KJ4ErqCV2mSBpSabrZ-vYYecPYFOxtIxcdxiINbBDvUPkOE-NQy7y94i9t0ZleF9gnVtIoe_xwerV5dD-tjl-9UQ_hFVEh7ao5nfgy1hQXSL09XI57pA-w49_3dn7FRm0LaH2vwhNPTTfbJxbzFC9KuKHWV1WsDXmWMcz89BN7lxDmsu' },
    score: '5 - 4',
    weight: { ka: 'მსუბუქი წონა', en: 'Lightweight' },
    style: { ka: 'ქალთა ღია', en: 'Women\'s Open' },
    tournament: { ka: 'საერთაშორისო ტურნირი', en: 'Open Invitational' }
  },
  {
    id: 3,
    athlete1: { nameKa: 'სანდრო გეგაძე', nameEn: 'Sandro Gegadze', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCzOsJPz7cMbv1jsrlvuiM8qavYf46pr8PWvcj1g3-ujQ4bdaJ6zAOnwq5hlTKdxBROsxYQwGPAxx3bE-0uh1BN4useSi1L5h0TUu200GqkRJDs5S-RBB3-3iB0yo2CEAp38oNwzB_1R2HQEaMXEtFzoVtAtr1VjOojGZUePZSIgzqssNRToDIxGcud2dRyuQrnukUEFoQarAaehsaiXYSgOrdlZK2WV1-BGn6bHoXvmdCI7rwFjvZuN54BNGBHogkUy3tK3cVvQSe1' },
    athlete2: { nameKa: 'ლეო სანტოსი', nameEn: 'Leo Santos', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAKcEuBHyqRAc0aA6E7biq7saeetQ9AMGIzV-TTNadCtkET-9SnW7w3o4f1b9mXKzIrcweQ1yBxLqBhNQmCWAHtQzjdNCS7knwYdVgjeh3MESdDrXN6k8CoJW4cdI4Hp_8CR3lkB4STV4WfM8y6JKK8Y2k65V5nzTbOiVWcQaCimdxUoX26OTVAtWO1XjkvRGhVZDpaZ4ZSqqzmW_2hchipDurdM5UBfo__QQA1wAS8BGGZSPG5ekkCxX_gkjAX5eeLtaCbtkAjGMMZ' },
    score: '6 - 2',
    weight: { ka: 'საშუალო წონა', en: 'Middleweight' },
    style: { ka: 'ბერძნულ-რომაული', en: 'Greco-Roman' },
    tournament: { ka: 'ახალგაზრდული მასტერსი', en: 'Youth Masters' }
  }
];

export default function LatestMatches() {
  const locale = useLocale() as 'ka' | 'en';

  return (
    <section className="py-20 bg-background-dark border-y border-primary/10">
      <div className="container px-4">
        <h3 className="text-3xl font-black text-white mb-12 italic uppercase tracking-tighter text-center">
          {locale === 'ka' ? 'ბოლო 1X1 მატჩების შედეგები' : 'Latest 1x1 Match Results'}
        </h3>
        
        <div className="flex gap-6 overflow-x-auto pb-8 no-scrollbar -mx-4 px-4">
          {matches.map((match) => (
            <motion.div 
              key={match.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex-none w-80 bg-surface border border-white/5 rounded-2xl p-6 hover:border-primary/40 transition-all group"
            >
              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <div className="text-center flex-1">
                    <img 
                      src={match.athlete1.img} 
                      alt={match.athlete1.nameEn} 
                      className="size-16 rounded-full mx-auto object-cover border-2 border-primary/20 mb-2 group-hover:border-primary transition-colors"
                    />
                    <p className="text-white font-bold text-xs leading-tight h-8 flex items-center justify-center">
                      {match.athlete1[locale === 'ka' ? 'nameKa' : 'nameEn']}
                    </p>
                  </div>
                  
                  <div className="px-3 text-center">
                    <p className="text-2xl font-black text-white scoreboard-font">{match.score}</p>
                    <span className="text-[10px] text-slate-500 font-bold uppercase">VS</span>
                  </div>
                  
                  <div className="text-center flex-1">
                    <img 
                      src={match.athlete2.img} 
                      alt={match.athlete2.nameEn} 
                      className="size-16 rounded-full mx-auto object-cover border-2 border-white/10 mb-2"
                    />
                    <p className="text-white font-bold text-xs leading-tight h-8 flex items-center justify-center">
                      {match.athlete2[locale === 'ka' ? 'nameKa' : 'nameEn']}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-y-4 pt-4 border-t border-white/5">
                  <div>
                    <p className="text-[9px] text-slate-500 font-bold uppercase tracking-widest mb-1 scoreboard-font">
                      {locale === 'ka' ? 'წონა' : 'Weight'}
                    </p>
                    <p className="text-primary text-xs font-bold">{match.weight[locale]}</p>
                  </div>
                  <div>
                    <p className="text-[9px] text-slate-500 font-bold uppercase tracking-widest mb-1 scoreboard-font">
                      {locale === 'ka' ? 'სტილი' : 'Style'}
                    </p>
                    <p className="text-white text-xs font-bold">{match.style[locale]}</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-[9px] text-slate-500 font-bold uppercase tracking-widest mb-1 scoreboard-font">
                      {locale === 'ka' ? 'ტურნირი' : 'Tournament'}
                    </p>
                    <p className="text-white text-[11px] font-bold">{match.tournament[locale]}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

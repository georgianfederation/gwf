"use client";

import { useLocale, useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { Link } from '@/i18n/routing';

const newsItems = [
  {
    id: 1,
    tag: { ka: 'შედეგები', en: 'Results' },
    title: { ka: 'ჩემპიონატის შედეგები: ჩრდილოეთ რეგიონის შესარჩევი ეტაპი დასრულდა', en: 'Championship Results: North Region Qualifiers Conclude' },
    excerpt: { ka: 'გაეცანით გამარჯვებულებისა და ნაციონალურ ეტაპზე გადასული ათლეტების სრულ სიას.', en: 'Read the full breakdown of winners and qualifiers moving forward to the Nationals.' },
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAVCB5cB9C-j7txn2b7S39Oz1YyJsxZopmirbgiuchHbrqDd1P5pKcD6KaLiMp4WWfFfuzA667BGXn1z_o22e-IA_IgBR6WG-5mpote-I5lPSItY-mCakGurhqj998zpSjX8RqP33d8BJy5TZSqLq1kkdrCD6PN3M-yU8FEpCpailpNAarac-FMhnrrqGJuH04lZv3wm9hbG7RzJks3vKViLW3M81KVzT8DtaCUCEn2DFcQhsrbfyDgqmwGuhLbYk8FlXW0ttNSQ7GH'
  },
  {
    id: 2,
    tag: { ka: 'გუნდის სიახლეები', en: 'Team News' },
    title: { ka: 'ეროვნული ნაკრების შერჩევა მსოფლიო ჩემპიონატისთვის', en: 'National Team Selection for World Championships' },
    excerpt: { ka: 'შემრჩევმა კომისიამ გამოაქვეყნა ფინალური შემადგენლობა მომავალი მსოფლიო ღონისძიებებისთვის.', en: 'The Selection Committee has announced the final roster for the upcoming World events.' },
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAKcEuBHyqRAc0aA6E7biq7saeetQ9AMGIzV-TTNadCtkET-9SnW7w3o4f1b9mXKzIrcweQ1yBxLqBhNQmCWAHtQzjdNCS7knwYdVgjeh3MESdDrXN6k8CoJW4cdI4Hp_8CR3lkB4STV4WfM8y6JKK8Y2k65V5nzTbOiVWcQaCimdxUoX26OTVAtWO1XjkvRGhVZDpaZ4ZSqqzmW_2hchipDurdM5UBfo__QQA1wAS8BGGZSPG5ekkCxX_gkjAX5eeLtaCbtkAjGMMZ'
  },
  {
    id: 3,
    tag: { ka: 'განვითარება', en: 'Development' },
    title: { ka: 'მაღალი მიღწევების მწვრთნელთა სემინარი: საზაფხულო სესია', en: 'High Performance Coach Seminar: Summer Session' },
    excerpt: { ka: 'სამწვრთნელო სტანდარტების ამაღლება ჩვენს აფილირებულ კლუბებში ახალი ტექნიკური გაიდლაინებით.', en: 'Elevating the standard of coaching across our affiliated clubs with new technical guidelines.' },
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDoJZK2Lgn8rTGBb5FbXFSHkZZbx8nBmvgGvHKZ5AP3ChjtBa0GWaHlLZXaJGe955e0bMO_OJibqSzbEsskvv5nes5WD-u0KJ4ErqCV2mSBpSabrZ-vYYecPYFOxtIxcdxiINbBDvUPkOE-NQy7y94i9t0ZleF9gnVtIoe_xwerV5dD-tjl-9UQ_hFVEh7ao5nfgy1hQXSL09XI57pA-w49_3dn7FRm0LaH2vwhNPTTfbJxbzFC9KuKHWV1WsDXmWMcz89BN7lxDmsu'
  }
];

export default function NewsSection() {
  const t = useTranslations('Home');
  const locale = useLocale() as 'ka' | 'en';

  return (
    <section className="py-12 md:py-20 bg-surface/30">
      <div className="container px-4">
        <div className="flex items-center justify-between mb-12">
          <h3 className="text-4xl font-black text-white italic uppercase leading-none">{t('latestNewsHeadline')}</h3>
          <Link href="/news" className="text-primary font-black text-sm uppercase flex items-center gap-2 hover:underline transition-all scoreboard-font">
            {t('allNews')} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((article, idx) => (
            <motion.article 
              key={article.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-surface rounded-xl overflow-hidden shadow-lg border border-primary/5 group"
            >
              <div className="overflow-hidden h-56">
                <img 
                  src={article.img} 
                  alt={article.title[locale]} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <p className="text-accent text-[10px] font-black uppercase mb-2 tracking-widest scoreboard-font">
                  {article.tag[locale]}
                </p>
                <h4 className="text-lg font-bold text-white mb-3 leading-tight group-hover:text-primary transition-colors">
                  {article.title[locale]}
                </h4>
                <p className="text-slate-400 text-sm mb-6 line-clamp-2 font-medium">
                  {article.excerpt[locale]}
                </p>
                <Link href={`/news/${article.id}`} className="text-primary font-black text-xs uppercase inline-flex items-center gap-1 group-hover:gap-2 transition-all scoreboard-font">
                  {t('readMore')} <ArrowUpRight className="w-3 h-3" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {Inter, Roboto_Condensed, Noto_Sans_Georgian} from 'next/font/google';
import "./globals.css";
import {routing} from '@/i18n/routing';
import {notFound} from 'next/navigation';

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const robotoCondensed = Roboto_Condensed({
  variable: "--font-roboto-condensed",
  subsets: ["latin"],
});

const notoGeorgian = Noto_Sans_Georgian({
  variable: "--font-noto-georgian",
  subsets: ["georgian"],
});

type Params = Promise<{ locale: string }>;

export async function generateMetadata({params}: {params: Params}) {
  const {locale} = await params;
  return {
    title: locale === 'ka' ? "საქართველოს ჭიდაობის ფედერაცია" : "Georgian Wrestling Federation",
    description: "Official website of the Wrestling Federation",
  };
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Params;
}) {
  const {locale} = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
 
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
 
  return (
    <html lang={locale} className="dark">
      <body
        className={`${inter.variable} ${robotoCondensed.variable} ${notoGeorgian.variable} ${locale === 'ka' ? 'font-georgian' : 'font-sans'} antialiased bg-background-dark text-slate-100`}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

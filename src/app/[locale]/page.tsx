import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import LatestMatches from '@/components/LatestMatches';
import Analytics from '@/components/Analytics';
import UpcomingEvents from '@/components/UpcomingEvents';
import NewsSection from '@/components/NewsSection';
import Partners from '@/components/Partners';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Stats />
      
      {/* Analytics Section */}
      <Analytics />

      {/* Events Section */}
      <UpcomingEvents />

      {/* News Section */}
      <NewsSection />
      
      {/* 1x1 Results Section */}
      <LatestMatches />

      {/* Partners Section */}
      <Partners />

      <Footer />
    </main>
  );
}

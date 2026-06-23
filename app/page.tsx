import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Products from '@/components/Products';
import WhyChooseUs from '@/components/WhyChooseUs';
import Values from '@/components/Values';
import GlobalMarkets from '@/components/GlobalMarkets';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <About />
      <Products />
      <WhyChooseUs />
      <Values />
      <GlobalMarkets />
      <Contact />
      <Footer />
    </main>
  );
}

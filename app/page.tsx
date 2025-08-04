import Banner from './components/Banner';
import ContactUs from './components/ContactUs';
import FAQs from './components/FAQs';
import Features from './components/Features';
import Footer from './components/Footer';
import Hero from './components/Hero';
import LogoTicker from './components/LogoTicker';
import Navbar from './components/Navbar';
import Projects from './components/Projects';

export default function Home() {
  return (
    <div>
      <Banner />
      <Navbar />
      <Hero />
      <LogoTicker />
      <Features />
      <Projects />
      <FAQs />
      <ContactUs />
      <Footer/>
    </div>
  );
}

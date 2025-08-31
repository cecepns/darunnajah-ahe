import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from './Header';
import Hero from './Hero';
import Programs from './Programs';
import WhyChooseUs from './WhyChooseUs';
import Testimonial from './Testimonial';
import Contact from './Contact';
import Footer from './Footer';

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <Hero />
      <Programs />
      <WhyChooseUs />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;

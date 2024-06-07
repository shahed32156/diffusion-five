import React, { useEffect, useState } from 'react';
import { Element } from 'react-scroll';
import Navbar from './NAVBAR/Navbar';
import Services from './SERVICES/Services';
import Pricing from './PRICING/Pricing';
import Team from './TEAM/Team';
import About from './ABOUT/About';
import Choose_us from './ABOUT/Choose_us';
import Query from './QUERY/Query';
import Footer from './FOOTER/Footer';
import Contact from './CONTACT/Contact';
import Book from './BOOK/Book';
import Portfolio from './PORTFOLIO/Portfolio';
import GridLoader from "react-spinners/GridLoader";
import Chatbot from './CHATBOT/Chatbot';
import RevealOnScroll from './HOOK/RevealOnScroll';



function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className='flex justify-center items-center h-[100vh]'>
          <GridLoader className='' color="#cb37ef" />
        </div>
      ) : (
        <div>




          <Element name="home"></Element>
          <Navbar />
          <Chatbot />

          <Element name="services"></Element>
          <RevealOnScroll>
            <Services />
          </RevealOnScroll>

          <Element name="pricing"></Element>
          <RevealOnScroll>
            <Pricing />
          </RevealOnScroll>

          <Element name="portfolio"></Element>
          <RevealOnScroll>
            <Portfolio />
          </RevealOnScroll>

          <Element name="team"></Element>
          <RevealOnScroll>
            <Team />
          </RevealOnScroll>

          <Element name="about"></Element>
          <RevealOnScroll>
            <About />
          </RevealOnScroll>
          <RevealOnScroll>
            <Choose_us />
          </RevealOnScroll>

          <Element name="contact"></Element>
          <RevealOnScroll>
            <Contact />
          </RevealOnScroll>

          <Element name="book"></Element>
          <RevealOnScroll>
            <Book />
          </RevealOnScroll>

          <Element name="query"></Element>
          <RevealOnScroll>
            <Query />
          </RevealOnScroll>

          <Footer />
        </div>
      )}
    </>
  );
}

export default App;

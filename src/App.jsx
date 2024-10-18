import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import PuffLoader from 'react-spinners/PuffLoader';
import { FaFacebook, FaWhatsapp, FaLinkedin, FaEnvelope, FaTimes,FaUser } from 'react-icons/fa';
import RevealOnScroll from './HOOK/RevealOnScroll';
import Navbar from './NAVBAR/Navbar';
import Carousel from './CAROUSEL/Carousel';
import Services from './SERVICES/Services';
import Pricing from './PRICING_RANGE/Pricing';
import About from './ABOUT_US/About';
import Mission_vision_value from './ABOUT_US/Mission_vision_value';
import Choose from './CHOOSE_US/Choose';
import Empower from './EMPOWERING/Empower';
import Completed from './ALL_COMPLETED/Completed';
import Team from './TEAM/Team';
import Review from './REVIEW/Review';
import Footer from './FOOTER/Footer';
import Portfolio from './PORTFOLIO/Projects';
import About_part from './ALL_PART_OF_COMPONENTS/About_part';
import Services_part from './ALL_PART_OF_COMPONENTS/Services_part';
import Portfolio_part from './ALL_PART_OF_COMPONENTS/Portfolio_part';
import Contact_part from './ALL_PART_OF_COMPONENTS/Contact_part';
import Team_part from './ALL_PART_OF_COMPONENTS/Team_part';
import ScrollToTop from './ScrollToTop';
import Web_development_part from './ALL_PART_OF_COMPONENTS/Web_development_part';
import Digital_marketing_part from './ALL_PART_OF_COMPONENTS/Digital_marketing_part';
import Graphix_design_part from './ALL_PART_OF_COMPONENTS/Graphix_design_part';
import Sqa_part from './ALL_PART_OF_COMPONENTS/Sqa_part';
import Video_editing_part from './ALL_PART_OF_COMPONENTS/Video_editing_part';
import Deals from './DEALS_WITH_CLIENT/Deals';
import ScrollDownIcon from './ScrollDownIcon_Folder/ScrollDownIcon';
import Pricing_part from './ALL_PART_OF_COMPONENTS/Pricing_part';
import FAQ_part from './ALL_PART_OF_COMPONENTS/FAQ_part';
import Chatbot from './ALL_PART_OF_COMPONENTS/Chatbot';
import Technology_part from './ALL_PART_OF_COMPONENTS/Technology_part';
import Seo_part from './ALL_PART_OF_COMPONENTS/Seo_part';
import Appoinment_part from './ALL_PART_OF_COMPONENTS/Appoinment_part';
import Privacy_part from './ALL_PART_OF_COMPONENTS/Privacy_part';
import TermsConditions_part from './ALL_PART_OF_COMPONENTS/TermsConditions_part';
import AI_solutions_part from './ALL_PART_OF_COMPONENTS/AI_solutions_part';
import Blog_part from './ALL_PART_OF_COMPONENTS/Blog_part';
import Blog from './BLOG/Blog';
import Subscribe from './SUBSCRIBE/Subscribe';
import Blog1 from './ALL_BLOGS/Blog1';
import Blog2 from './ALL_BLOGS/Blog2';
import Blog3 from './ALL_BLOGS/Blog3';
import Blog4 from './ALL_BLOGS/Blog4';
import OurTeam from './ALL_BLOGS/Demo';
import Blog5 from './ALL_BLOGS/Blog5';
import Blog6 from './ALL_BLOGS/Blog6';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showSocialIcons, setShowSocialIcons] = useState(false);

  useEffect(() => {
    // Simulate loading process
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const toggleSocialIcons = () => {
    setShowSocialIcons(!showSocialIcons);
  };

  return (
    <>
    <HelmetProvider>
      {isLoading ? (
        <div className='flex flex-col gap-4 justify-center items-center h-[100vh]'>
          <PuffLoader color='#3b82f6' />
          <p className='text-white text-xl'>Loading...</p>
        </div>
      ) : (
        <div>
          <BrowserRouter>
          <ScrollToTop />
          <Navbar />
          
          <Routes>


          <Route
                path="/*"
                element={
                  <>
                    <Carousel />
                    <RevealOnScroll>
                      <About />
                    </RevealOnScroll>
                    <RevealOnScroll>
                      <Mission_vision_value />
                    </RevealOnScroll>
                    <RevealOnScroll>
                      <Choose />
                    </RevealOnScroll>
                    <RevealOnScroll>
                      <Completed />
                    </RevealOnScroll>
                    <RevealOnScroll>
                      <Services />
                    </RevealOnScroll>
                    <RevealOnScroll>
                      <Team />
                    </RevealOnScroll>
                    <RevealOnScroll>
                      <Empower />
                    </RevealOnScroll>
                    <RevealOnScroll>
                      <Pricing />
                    </RevealOnScroll>
                    <RevealOnScroll>
                      <Portfolio />
                    </RevealOnScroll>
                    <RevealOnScroll>
                      <Blog />
                    </RevealOnScroll>
                    <RevealOnScroll>
                      <Review />
                    </RevealOnScroll>
                    <RevealOnScroll>
                      <Subscribe />
                    </RevealOnScroll>
                    
                  </>
                }
              
              />

          <Route
                path="/home"
                element={
                  <>
                    
                    <Helmet>
                    <title>Home | Diffusion Five</title>
                    </Helmet>
                    <Carousel />
                    <RevealOnScroll>
                      <About />
                    </RevealOnScroll>
                    <RevealOnScroll>
                      <Mission_vision_value />
                    </RevealOnScroll>
                    <RevealOnScroll>
                      <Choose />
                    </RevealOnScroll>
                    <RevealOnScroll>
                      <Completed />
                    </RevealOnScroll>
                    <RevealOnScroll>
                      <Services />
                    </RevealOnScroll>
                    <RevealOnScroll>
                      <Team />
                    </RevealOnScroll>
                    <RevealOnScroll>
                      <Empower />
                    </RevealOnScroll>
                    <RevealOnScroll>
                      <Pricing />
                    </RevealOnScroll>
                    <RevealOnScroll>
                      <Portfolio />
                    </RevealOnScroll>
                    <RevealOnScroll>
                      <Blog />
                    </RevealOnScroll>
                    <RevealOnScroll>
                      <Review />
                    </RevealOnScroll>
                    <RevealOnScroll>
                      <Subscribe />
                    </RevealOnScroll>
                    
                  </>
                }
              
              />

          
               <Route
                path="/about_us"
                element={
                  <> 

                   <Helmet>
                    <title>About Us | Diffusion Five</title>
                    </Helmet>
                   <RevealOnScroll>
                    <About_part />
                   </RevealOnScroll>
                   <RevealOnScroll>
                    <Mission_vision_value />
                   </RevealOnScroll>
                   <RevealOnScroll>
                    <Choose />
                   </RevealOnScroll>
                   <RevealOnScroll>
                    <Completed />
                   </RevealOnScroll>
                  </>
                }
                  />

               <Route
                path="/services"
                element={
                  <> 

                    <Helmet>
                    <title>Services | Diffusion Five</title>
                    </Helmet>
                   <RevealOnScroll>
                    <Services_part />
                   </RevealOnScroll>
                  </>
                }
                  />

               <Route
                path="/web_design_and_development"
                element={
                  <> 
                  <Helmet>
                    <title>Web Design & Development | Diffusion Five</title>
                    </Helmet>
                   <RevealOnScroll>
                    <Web_development_part />
                   </RevealOnScroll>
                   <RevealOnScroll>
                    <Deals />
                   </RevealOnScroll>
                  </>
                }
                  />

               <Route
                path="/ai_solutions"
                element={
                  <>
                  <Helmet>
                    <title>AI Solutions | Diffusion Five</title>
                    </Helmet> 
                   <RevealOnScroll>
                    <AI_solutions_part />
                   </RevealOnScroll>
                   <RevealOnScroll>
                    <Deals />
                   </RevealOnScroll>
                  </>
                }
                  />

               <Route
                path="/digital_marketing"
                element={
                  <> 
                   <Helmet>
                    <title>Digital Marketing | Diffusion Five</title>
                    </Helmet>
                   <RevealOnScroll>
                    <Digital_marketing_part />
                   </RevealOnScroll>
                   <RevealOnScroll>
                    <Deals />
                   </RevealOnScroll>
                  </>
                }
                  />

               <Route
                path="/graphix_design"
                element={
                  <> 
                   <Helmet>
                    <title>Graphics Design | Diffusion Five</title>
                    </Helmet>
                   <RevealOnScroll>
                    <Graphix_design_part />
                   </RevealOnScroll>
                   <RevealOnScroll>
                    <Deals />
                   </RevealOnScroll>
                  </>
                }
                  />

               <Route
                path="/software_quality_assurance"
                element={
                  <> 
                   <Helmet>
                    <title>SQA | Diffusion Five</title>
                    </Helmet>
                   <RevealOnScroll>
                    <Sqa_part />
                   </RevealOnScroll>
                   <RevealOnScroll>
                    <Deals />
                   </RevealOnScroll>
                  </>
                }
                  />
               <Route
                path="/search_engine_optimization"
                element={
                  <> 
                   <Helmet>
                    <title>SEO | Diffusion Five</title>
                    </Helmet>
                   <RevealOnScroll>
                    <Seo_part/>
                   </RevealOnScroll>
                   <RevealOnScroll>
                    <Deals />
                   </RevealOnScroll>
                  </>
                }
                  />

               <Route
                path="/video_editing"
                element={
                  <> 
                   <Helmet>
                    <title>Video Editing | Diffusion Five</title>
                    </Helmet>
                   <RevealOnScroll>
                    <Video_editing_part />
                   </RevealOnScroll>
                   <RevealOnScroll>
                    <Deals />
                   </RevealOnScroll>
                  </>
                }
                  />

               <Route
                path="/portfolio"
                element={
                  <>
                   <Helmet>
                    <title>Portfolio | Diffusion Five</title>
                    </Helmet> 
                   <RevealOnScroll>
                    <Portfolio_part />
                   </RevealOnScroll>
                   
                  </>
                }
                  />

               <Route
                path="/blog"
                element={
                  <>
                   <Helmet>
                    <title>Blog | Diffusion Five</title>
                    </Helmet> 
                   <RevealOnScroll>
                    <Blog_part />
                   </RevealOnScroll>
                   
                  </>
                }
                  />

               <Route
                path="/understanding_web_design_trends"
                element={
                  <>
                   <Helmet>
                    <title>Understanding Web Design Trends | Diffusion Five</title>
                    </Helmet> 
                   <RevealOnScroll>
                    <Blog1 />
                   </RevealOnScroll>
                   
                  </>
                }
                  />

               <Route
                path="/top_digital_marketing_strategies"
                element={
                  <>
                   <Helmet>
                    <title>Top Digital Marketing Strategies | Diffusion Five</title>
                    </Helmet> 
                   <RevealOnScroll>
                    <Blog2 />
                   </RevealOnScroll>
                   
                  </>
                }
                  />

               <Route
                path="/the_importance_of_SEO"
                element={
                  <>
                   <Helmet>
                    <title>The Importance of SEO | Diffusion Five</title>
                    </Helmet> 
                   <RevealOnScroll>
                    <Blog3 />
                   </RevealOnScroll>
                   
                  </>
                }
                  />

               <Route
                path="/graphix_design_trends"
                element={
                  <>
                   <Helmet>
                    <title>Graphix Design Trends | Diffusion Five</title>
                    </Helmet> 
                   <RevealOnScroll>
                    <Blog4 />
                   </RevealOnScroll>
                   
                  </>
                }
                  />

               <Route
                path="/how_to_achieve_high-quality_assurance_in_software"
                element={
                  <>
                   <Helmet>
                    <title>How to Achieve High-Quality Assurance in Software | Diffusion Five</title>
                    </Helmet> 
                   <RevealOnScroll>
                    <Blog5 />
                   </RevealOnScroll>
                   
                  </>
                }
                  />

               <Route
                path="/video_editing_tips"
                element={
                  <>
                   <Helmet>
                    <title>Video Editing Tips | Diffusion Five</title>
                    </Helmet> 
                   <RevealOnScroll>
                    <Blog6 />
                   </RevealOnScroll>
                   
                  </>
                }
                  />
              

               <Route
                path="/pricing_range"
                element={
                  <> 
                   <Helmet>
                    <title>Pricing Plan | Diffusion Five</title>
                    </Helmet>
                   <RevealOnScroll>
                    <Pricing_part />
                   </RevealOnScroll>
                   
                  </>
                }
                  />

               <Route
                path="/our_team"
                element={
                  <> 
                   <Helmet>
                    <title>Business Team | Diffusion Five</title>
                    </Helmet>
                   <RevealOnScroll>
                    <Team_part />
                   </RevealOnScroll>
                   
                  </>
                }
                  />

               <Route
                path="/contact_us"
                element={
                  <>
                   <Helmet>
                    <title>Contact Us | Diffusion Five</title>
                    </Helmet> 
                   <RevealOnScroll>
                    <Contact_part />
                   </RevealOnScroll>
                  </>
                }
                  />

               <Route
                path="/appoinment"
                element={
                  <>
                   <Helmet>
                    <title>Appoinment | Diffusion Five</title>
                    </Helmet> 
                   <RevealOnScroll>
                    <Appoinment_part />
                   </RevealOnScroll>
                  </>
                }
                  />

               <Route
                path="/technology_stack"
                element={
                  <> 
                   <Helmet>
                    <title>Technology Stack | Diffusion Five</title>
                    </Helmet>
                   <RevealOnScroll>
                    <Technology_part /> 
                   </RevealOnScroll>
                  </>
                }
                  />

               <Route
                path="/frequently_asked_questions"
                element={
                  <>
                   <Helmet>
                    <title>FAQ | Diffusion Five</title>
                    </Helmet> 
                   <RevealOnScroll>
                    <FAQ_part />
                   </RevealOnScroll>
                  </>
                }
                  />

               <Route
                path="/terms_&_conditions"
                element={
                  <>
                   <Helmet>
                    <title>Terms & Conditions | Diffusion Five</title>
                    </Helmet> 
                   <RevealOnScroll>
                    <TermsConditions_part />
                   </RevealOnScroll>
                  </>
                }
                  />

               <Route
                path="/privacy_policy"
                element={
                  <>
                   <Helmet>
                    <title>Privacy Policy | Diffusion Five</title>
                    </Helmet> 
                   <RevealOnScroll>
                    <Privacy_part />
                   </RevealOnScroll>
                  </>
                }
                  />



          </Routes>
          
          
          <Footer />
          <Chatbot />
          <ScrollDownIcon />
          </BrowserRouter>

          {/* Social Media Icon Button */}
          <div className='fixed top-1/2 left-2 transform -translate-y-1/2'>
            {showSocialIcons ? (
              <div className='flex flex-col items-center gap-4 bg-black z-10 animate-fade-in px-3 py-3 rounded-md'>
                <a href="https://www.facebook.com/profile.php?id=61560502701437&mibextid=ZbWKwL" target='_blank'><FaFacebook className='text-blue-500 text-2xl cursor-pointer animate-fade-in' /></a>
                <a href="https://wa.me/8801741987566?text=Hello!" target="_blank" rel="noopener noreferrer"><FaWhatsapp className='text-green-400 text-2xl cursor-pointer animate-fade-in' /></a>
                <a href="https://www.linkedin.com/company/diffusion-five/" target='_blank'><FaLinkedin className='text-blue-500 text-2xl cursor-pointer animate-fade-in' /></a>
                <a href="mailto:diffusionfive@gmail.com" target='_blank'><FaEnvelope className='text-red-500 text-2xl cursor-pointer animate-fade-in' /></a>
                <FaTimes className='text-white text-2xl cursor-pointer animate-fade-in' onClick={toggleSocialIcons} />
              </div>
            ) : (
              <FaUser className='text-white text-3xl bg-black px-2 -ml-2 cursor-pointer' onClick={toggleSocialIcons} />
            )}
          </div>

        </div>
      )}
      </HelmetProvider>
    </>

  );
}

export default App;

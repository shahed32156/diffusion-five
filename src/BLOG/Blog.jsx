// CardSlider.js
import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosTimer } from "react-icons/io";
import { NavLink } from "react-router-dom";

const Blog = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024, // Large screens
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // Medium screens
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640, // Small screens
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  // Sample card data
  const cards = [
    { id: 1, img: "./Images/blog1.png", date: "September 20, 2024", title: "Understanding Web Design Trends", description: "Explore the latest web design trends and how they can help your business stand out.", route: "/understanding_web_design_trends" },
    { id: 2, img: "./Images/blog2.png", date: "September 20, 2024", title: "Top Digital Marketing Strategies", description: "Learn about effective digital marketing strategies to boost your online presence.", route: "/top_digital_marketing_strategies" },
    { id: 3, img: "./Images/blog3.png", date: "September 20, 2024", title: "The Importance of SEO", description: "Why SEO is crucial for your website's success and how to implement it effectively.", route: "/the_importance_of_SEO" },
    { id: 4, img: "./Images/blog4.png", date: "September 20, 2024", title: "Graphic Design Trends", description: "Stay ahead with these cutting-edge graphic design trends.", route: "/graphix_design_trends" },
    { id: 5, img: "./Images/blog5.png", date: "September 20, 2024", title: "How to Achieve High-Quality Assurance in Software", description: "Ensure your software quality with these expert tips.", route: "/how_to_achieve_high-quality_assurance_in_software" },
    { id: 6, img: "./Images/blog6.png", date: "September 20, 2024", title: "Video Editing Tips", description: "Create engaging videos with these essential editing tips.", route: "/video_editing_tips" },
  ];

  return (
    <div className="mt-20">
      {/* Style tag to override slick arrow styles */}
      <style>
        {`
          .slick-prev, .slick-next {
            color: blue; /* Change arrow color to blue */
            z-index: 10; /* Keep arrows on top */
            padding-left:26px;
            padding-right:57px;
          }


          .slick-prev:before, .slick-next:before {
            font-size: 30px; /* Adjust arrow size */
            opacity: 1; /* Ensure arrows are fully visible */
            color: #ffee00;
          }

          slick-dots {
            bottom: -30px; /* Position dots */
          }

          .slick-dots li button {
            background: #007bff; /* Dot color */
            border-radius: 50%; /* Make dots round */
            width: 12px; /* Dot size */
            height: 12px; /* Dot size */
          }

          .slick-dots li.slick-active button {
            background: #ffee00; /* Active dot color */
            
          }

        `}
      </style>

      <div className="container mx-auto">
        <div className="text-white text-center flex flex-col gap-3 items-center mx-3">
          <h1 className="text-3xl sm:text-4xl font-bold">
            Our Latest <span className="text-gradient">Blogs</span>
          </h1>
          <p className="md:w-[400px]">Explore our packages or reach out to us to find the service that suits your needs.</p>
        </div>
        <Slider {...settings} className="mx-3 sm:mx-0">
          {cards.map((card) => (
            <div key={card.id} className="p-4 text-white cursor-grab">
              <div className="bg-[#4b4b4b] bg-opacity-40 overflow-hidden rounded-lg hover:shadow-2xl hover:shadow-blue-300 duration-500 border-2 hover:border-blue-300 border-gray-600 blog-part">
                <img src={card.img} alt={card.img} className="w-full h-[250px] rounded-t-lg object-cover duration-500 blog-img grayscale-[100%]" />
                <div className="flex flex-col justify-center gap-3 mt-4 p-4">
                  <p className="flex items-center gap-1"><IoIosTimer/> {card.date}</p>
                  <h3 className="text-xl font-bold">{card.title}</h3>
                  <p className="text-gray-300">{card.description}</p>
                  <NavLink to={card.route} className="mt-3 mx-auto lg:mx-0 bg-gradient-to-r hover:bg-gradient-to-l duration-500 to-blue-500 from-pink-500 h-[45px] w-[130px] rounded-lg flex justify-center items-center">Read More</NavLink>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Blog;

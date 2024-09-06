import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles

const testimonials = [
  {
    name: "Mark Johan",
    image: "./Images/Mark Johan.jpg",
    text: "The team delivered a stunning website that exceeded our expectations! Their attention to detail and commitment to creating a user-friendly interface made a significant difference. Our traffic has increased, and customer feedback has been overwhelmingly positive. Highly recommend their services for anyone looking to elevate their online presence.",
    rating: 5,
  },
  {
    name: "John Doe",
    image: "./Images/john.jpg",
    text: "Working with this web development team was a fantastic experience. They took the time to understand our needs and implemented features that made our platform both efficient and visually appealing. Their expertise in responsive design ensures that our site looks great on all devices. We're thrilled with the outcome!",
    rating: 5,
  },
  {
    name: "Joseph Smith",
    image: "./Images/richard.webp",
    text: "I am so impressed with the professionalism and creativity of this team. From the initial consultation to the final launch, they kept us informed and involved. The website not only looks amazing but also performs flawlessly. Our users love the seamless navigation and fast loading times. It's been a game-changer for our business!",
    rating: 5,
  },
];

const Review = () => {
  return (
    <>
      <div className='flex flex-col gap-3 justify-center items-center mt-20 mx-3 text-white'>
        <h1 className='text-3xl sm:text-4xl font-bold text-center'>
          What Our <span className='text-gradient'>Client</span> Says
        </h1>
        <p>Our 3 best reviews from our clients</p>
      </div>

      <div className='mt-10 bg-black bg-opacity-30 pt-[20px] pb-[40px]'>
        <Carousel
          className='mt-10 no-dots'
          showThumbs={false}
          showStatus={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={3000}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className='text-center text-white flex flex-col justify-center items-center gap-3'>
              <div className='border-[4px] border-purple-500 rounded-full'>
                <img className='h-[70px] w-[70px] rounded-full mx-auto' src={testimonial.image} alt={testimonial.name} />
              </div>
              <h4 className='text-xl font-bold'>{testimonial.name}</h4>
              <p className='w-[270px] sm:w-[450px] md:w-[550px] text-[13px] sm:text-[14px] md:text-[16px]'>
                {testimonial.text}
              </p>
              <div className='flex gap-2 mt-2'>
                {[...Array(testimonial.rating)].map((_, starIndex) => (
                  <i key={starIndex} className="fa-solid fa-star text-[15px] text-[yellow]"></i>
                ))}
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      <style jsx>{`
        .no-dots .control-dots {
          display: none;
        }
      `}</style>
    </>
  );
}

export default Review;

import React from "react";

// Blog data array
const blogData = [
  {
    id: 1,
    title: "Minimalism with a Twist",
    imgSrc: "./Images/web design trends.png",
    imgAlt: "Minimalism in Web Design",
    content:
      "In 2024, minimalism continues to dominate, but with a creative twist. Designers are focusing on bold typography, subtle animations, and strategically placed white space to create engaging user experiences without overwhelming users.",
  },
  {
    id: 2,
    title: "Dark Mode Evolution",
    imgSrc: "./Images/dark-mood.png",
    imgAlt: "Dark Mode Web Design",
    content:
      "Dark mode continues to evolve with better contrast and accessibility features. This trend not only reduces eye strain but also adds a sleek, modern look to websites, making them feel more immersive.",
  },
  {
    id: 3,
    title: "Immersive 3D Elements",
    imgSrc: "./Images/3d_model.png",
    imgAlt: "3D Elements in Web Design",
    content:
      "From 3D graphics to interactive elements, immersive design is gaining traction. These elements add depth to web pages, enhancing the overall user experience and keeping visitors engaged longer.",
  },
  {
    id: 4,
    title: "Micro-Interactions for Engagement",
    imgSrc: "./Images/micro-interactions.png",
    imgAlt: "Micro-Interactions in Web Design",
    content:
      "Micro-interactions like subtle button animations or hover effects can significantly enhance user engagement. They provide feedback and create a dynamic feel, making the website more interactive and enjoyable.",
  },
  {
    id: 5,
    title: "AI-Driven Personalization",
    imgSrc: "./Images/ai-driven.png",
    imgAlt: "AI-Driven Web Design",
    content:
      "AI-driven personalization tailors the user experience to individual preferences, creating more relevant content and a smoother navigation journey. This trend is making websites smarter and more user-centric.",
  },
  {
    id: 6,
    title: "Augmented Reality (AR) Experiences",
    imgSrc: "./Images/ar-reality.png",
    imgAlt: "Augmented Reality Web Design",
    content:
      "AR is enhancing web experiences by merging the digital and physical worlds. From virtual try-ons to interactive product demos, AR is transforming how users interact with content online.",
  },
];

const Blog1 = () => {
  return (
    <>
      <div className="mt-[94px] py-20 glass-effect rounded-b-[50px] sm:rounded-b-[70px] md:rounded-b-[90px] lg:rounded-b-[100px] px-6">
        <div className="flex flex-col items-center justify-center gap-5 text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center">
            Understanding Web Design Trends
          </h1>
          <p className="md:w-[600px] text-center">
            Thank you so much for visiting our website. Trust “Diffusion Five”
            to transform your digital presence and take your business and
            profile to new heights.
          </p>
        </div>
      </div>

      <header className="mt-10 px-3">
          <div className="bg-opacity-50 h-full flex flex-col justify-center text-white">
            <h1 className="text-3xl sm:text-4xl font-bold text-center">
              Understanding <span className="text-gradient">Web Design</span> Trends
            </h1>
            <p className="mt-4 text-sm md:text-base text-center">
              Explore the latest web design trends that are shaping the digital landscape in 2024 and beyond.
            </p>
          </div>
        </header>

      <div className="px-6 md:px-20 lg:px-40 text-white">
        <div className="max-w-4xl mx-auto rounded-lg overflow-hidden">
          {/* Blog Content */}
          <section className="sm:px-6 md:px-12">
            {blogData.map((section) => (
              <div key={section.id} className="mb-8 mt-14">
                <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
                <img
                  src={section.imgSrc}
                  alt={section.imgAlt}
                  className="w-full h-[280px] sm:h-[300px] md:h-[350px] lg:h-[450px] xl:h-[480px] 2xl:h-[500px] object-cover rounded-md mb-4"
                />
                <p className="text-gray-300 mt-12">{section.content}</p>
              </div>
            ))}

            <footer className="mb-14">
              <h3 className="text-2xl font-semibold mb-4">Conclusion</h3>
              <p className="text-gray-300">
                As we step into 2024, web design continues to evolve, driven by
                a mix of technology, creativity, and user-centric approaches. By
                staying updated with these trends, designers can create more
                engaging, functional, and aesthetically pleasing websites.
              </p>
            </footer>
          </section>
        </div>
      </div>
    </>
  );
};

export default Blog1;

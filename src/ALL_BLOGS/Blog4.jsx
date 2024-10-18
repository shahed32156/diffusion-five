import React from "react";

// Blog data array for Graphix Design Trends
const blogData = [
  {
    id: 1,
    title: "1. Minimalism in Graphic Design",
    imgSrc: "./Images/minimalism-graphic-design.png",
    imgAlt: "Minimalism in Graphic Design",
    content:
      "Minimalism continues to dominate graphic design, focusing on simplicity, clean lines, and a minimal use of colors and elements. This trend is favored for its ability to convey clear, powerful messages without unnecessary distractions.",
  },
  {
    id: 2,
    title: "2. Bold Typography",
    imgSrc: "./Images/bold-typography.png",
    imgAlt: "Bold Typography",
    content:
      "Bold and oversized typography is a trend that’s capturing attention in 2024. Designers are using type not just as a means of communication, but as a prominent visual element that can stand alone in design.",
  },
  {
    id: 3,
    title: "3. 3D and Realistic Designs",
    imgSrc: "./Images/3d-design.png",
    imgAlt: "3D Design",
    content:
      "The use of 3D elements, realistic textures, and lifelike designs is becoming increasingly popular. This trend brings more depth and engagement to designs, whether it's through product visuals, typography, or entire scenes.",
  },
  {
    id: 4,
    title: "4. Vibrant Gradients and Color Schemes",
    imgSrc: "./Images/vibrant-gradients.png",
    imgAlt: "Vibrant Gradients",
    content:
      "Vibrant gradients and eye-catching color schemes are making a huge comeback. Designers are embracing bold color transitions to create dynamic visuals that add energy and emotion to the designs.",
  },
  {
    id: 5,
    title: "5. Abstract and Geometric Patterns",
    imgSrc: "./Images/abstract-geometric.png",
    imgAlt: "Abstract and Geometric Patterns",
    content:
      "Abstract and geometric patterns continue to gain traction in graphic design. This trend blends unique shapes and forms to create visually intriguing compositions that challenge traditional design norms.",
  },
  {
    id: 6,
    title: "6. Motion Graphics and Animation",
    imgSrc: "./Images/motion-graphics.png",
    imgAlt: "Motion Graphics",
    content:
      "With the rise of video content and digital media, motion graphics and animations are now essential elements of graphic design. These bring life to visuals, making them more interactive and engaging for users.",
  },
];

const Blog4 = () => {
  return (
    <>
      <div className="mt-[94px] py-20 glass-effect rounded-b-[50px] sm:rounded-b-[70px] md:rounded-b-[90px] lg:rounded-b-[100px] px-6">
        <div className="flex flex-col items-center justify-center gap-5 text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center">
            Graphix Design Trends
          </h1>
          <p className="md:w-[600px] text-center">
            Explore the latest trends in graphic design and how they can shape your creative projects in 2024.
          </p>
        </div>
      </div>

      <header className="mt-10 px-3">
        <div className="bg-opacity-50 h-full flex flex-col justify-center text-white">
          <h1 className="text-3xl sm:text-4xl font-bold text-center">
            Emerging <span className="text-gradient">Graphix Design</span> Trends
          </h1>
          <p className="mt-4 text-sm md:text-base text-center">
            Stay ahead of the curve by incorporating these cutting-edge graphic design trends in your projects.
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
                Graphic design in 2024 is all about innovation, creativity, and pushing the boundaries. By embracing these trends, designers can create visually compelling and modern work that resonates with audiences. Keep exploring and adapting to these trends for success in the digital age.
              </p>
            </footer>
          </section>
        </div>
      </div>
    </>
  );
};

export default Blog4;

import React from "react";

// Blog data array for Video Editing Tips in 2024
const blogData = [
  {
    id: 1,
    title: "1. Utilize AI-Powered Editing Tools",
    imgSrc: "./Images/ai-editing-tools.png",
    imgAlt: "AI Editing Tools",
    content:
      "In 2024, AI-powered tools are revolutionizing the video editing process by automating repetitive tasks, improving efficiency, and offering creative suggestions. Tools like Adobe's Sensei and Runway's AI Editor help streamline workflows and allow editors to focus on storytelling.",
  },
  {
    id: 2,
    title: "2. Master 4K and 8K Resolution",
    imgSrc: "./Images/4k-8k-video.png",
    imgAlt: "4K and 8K Video Editing",
    content:
      "With the rise of ultra-high-definition video content, mastering 4K and 8K resolution has become essential. Ensure your editing software and hardware are capable of handling these formats to provide a smooth editing experience and deliver high-quality outputs.",
  },
  {
    id: 3,
    title: "3. Focus on Storytelling and Engagement",
    imgSrc: "./Images/storytelling.png",
    imgAlt: "Storytelling in Video",
    content:
      "In 2024, video editing is more than just cutting and splicing. It's about creating an emotional connection with your audience. Focus on enhancing the storytelling aspect by using cuts, transitions, and music to create a compelling narrative that keeps viewers engaged.",
  },
  {
    id: 4,
    title: "4. Incorporate Advanced Color Grading",
    imgSrc: "./Images/color-grading.png",
    imgAlt: "Advanced Color Grading",
    content:
      "Color grading plays a crucial role in setting the tone and mood of a video. In 2024, editors are incorporating more advanced color grading techniques to give their projects a cinematic look, making use of tools like DaVinci Resolve and Adobe Premiere Pro’s Lumetri Color panel.",
  },
  {
    id: 5,
    title: "5. Leverage Motion Graphics and VFX",
    imgSrc: "./Images/motion-graphics-vfx.png",
    imgAlt: "Motion Graphics and VFX",
    content:
      "Motion graphics and visual effects (VFX) are becoming more accessible, thanks to advanced tools like After Effects and Blender. Leverage these techniques to add dynamic elements to your videos, enhancing the visual appeal and professionalism of your projects.",
  },
  {
    id: 6,
    title: "6. Optimize for Social Media Platforms",
    imgSrc: "./Images/social-media-optimization.png",
    imgAlt: "Social Media Video Optimization",
    content:
      "Social media continues to dominate video content consumption. In 2024, ensure your videos are optimized for different platforms by considering aspect ratios, captions, and attention-grabbing hooks in the first few seconds to capture the audience's attention.",
  },
];

const Blog6 = () => {
  return (
    <>
      <div className="mt-[94px] py-20 glass-effect rounded-b-[50px] sm:rounded-b-[70px] md:rounded-b-[90px] lg:rounded-b-[100px] px-6">
        <div className="flex flex-col items-center justify-center gap-5 text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center">
            Video Editing Tips in 2024
          </h1>
          <p className="md:w-[600px] text-center">
            Explore the latest trends and techniques to elevate your video editing skills in 2024.
          </p>
        </div>
      </div>

      <header className="mt-10 px-3">
        <div className="bg-opacity-50 h-full flex flex-col justify-center text-white">
          <h1 className="text-3xl sm:text-4xl font-bold text-center">
            Best Practices for <span className="text-gradient">Video Editing</span>
          </h1>
          <p className="mt-4 text-sm md:text-base text-center">
            Discover the tools and strategies you need to create high-quality, engaging video content.
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
                Video editing in 2024 is more innovative and dynamic than ever. By mastering AI tools, high-resolution formats, and storytelling techniques, you can create engaging content that stands out in the crowded video landscape. Stay ahead of the curve by continually refining your skills and embracing the latest editing trends.
              </p>
            </footer>
          </section>
        </div>
      </div>
    </>
  );
};

export default Blog6;

import React from "react";

// Blog data array for Digital Marketing Strategies
const blogData = [
  {
    id: 1,
    title: "1. Search Engine Optimization (SEO)",
    imgSrc: "./Images/seo-strategies.png",
    imgAlt: "SEO Strategy",
    content:
      "SEO remains one of the most effective digital marketing strategies in 2024. By optimizing your website’s content and structure, you can improve visibility in search engine results, driving organic traffic to your site.",
  },
  {
    id: 2,
    title: "2. Content Marketing",
    imgSrc: "./Images/content-marketing.png",
    imgAlt: "Content Marketing",
    content:
      "Content marketing focuses on creating valuable, relevant content for your audience. By producing blog posts, videos, infographics, and other types of content, businesses can engage their audience and improve brand loyalty.",
  },
  {
    id: 3,
    title: "3. Social Media Marketing",
    imgSrc: "./Images/social-media-marketing.png",
    imgAlt: "Social Media Marketing",
    content:
      "In 2024, social media platforms like Instagram, LinkedIn, and TikTok play a crucial role in brand awareness. A strong social media presence allows businesses to connect with their audience, share updates, and build relationships.",
  },
  {
    id: 4,
    title: "4. Pay-Per-Click Advertising (PPC)",
    imgSrc: "./Images/ppc.png",
    imgAlt: "Pay-Per-Click Advertising",
    content:
      "PPC advertising allows businesses to display ads on search engines or social media platforms. By paying for clicks, businesses can target specific audiences and see immediate results with measurable ROI.",
  },
  {
    id: 5,
    title: "5. Email Marketing",
    imgSrc: "./Images/email-marketing.png",
    imgAlt: "Email Marketing",
    content:
      "Despite being one of the oldest digital marketing strategies, email marketing is still highly effective. Personalized email campaigns help businesses maintain direct communication with customers, promoting products and building loyalty.",
  },
  {
    id: 6,
    title: "6. Influencer Marketing",
    imgSrc: "./Images/influencer-marketing.png",
    imgAlt: "Influencer Marketing",
    content:
      "Influencer marketing is about partnering with individuals who have large followings on social media. This strategy allows businesses to reach new audiences through trusted and influential figures.",
  },
];

const Blog2 = () => {
  return (
    <>
      <div className="mt-[94px] py-20 glass-effect rounded-b-[50px] sm:rounded-b-[70px] md:rounded-b-[90px] lg:rounded-b-[100px] px-6">
        <div className="flex flex-col items-center justify-center gap-5 text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center">
            Top Digital Marketing Strategies
          </h1>
          <p className="md:w-[600px] text-center">
            Explore the latest digital marketing strategies that are driving growth and success in 2024.
          </p>
        </div>
      </div>

      <header className="mt-10 px-3">
        <div className="bg-opacity-50 h-full flex flex-col justify-center text-white">
          <h1 className="text-3xl sm:text-4xl font-bold text-center">
            Top <span className="text-gradient">Digital Marketing</span> Strategies
          </h1>
          <p className="mt-4 text-sm md:text-base text-center">
            Learn the top digital marketing strategies that will elevate your brand's online presence in 2024.
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
                Digital marketing in 2024 is more dynamic than ever. By leveraging SEO, content marketing, social media, and other strategies, businesses can connect with their target audiences and drive growth. Staying updated on these trends is essential for staying competitive in the digital age.
              </p>
            </footer>
          </section>
        </div>
      </div>
    </>
  );
};

export default Blog2;

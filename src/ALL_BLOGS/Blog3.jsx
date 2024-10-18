import React from "react";

// Blog data array for The Importance of SEO
const blogData = [
  {
    id: 1,
    title: "1. What is SEO?",
    imgSrc: "./Images/what-is-seo.png",
    imgAlt: "What is SEO",
    content:
      "SEO, or Search Engine Optimization, refers to the process of optimizing your website to improve its visibility in search engine results. By making your site more appealing to search engines like Google, you can attract more organic (non-paid) traffic.",
  },
  {
    id: 2,
    title: "2. Why SEO Matters?",
    imgSrc: "./Images/why-seo-matters.png",
    imgAlt: "Why SEO Matters",
    content:
      "SEO matters because it helps your business stand out in a crowded digital landscape. When your site ranks higher on search engines, it gains more visibility, leading to increased traffic, brand awareness, and sales opportunities.",
  },
  {
    id: 3,
    title: "3. How Search Engines Rank Websites",
    imgSrc: "./Images/search-engine-ranking.png",
    imgAlt: "Search Engine Ranking",
    content:
      "Search engines like Google use complex algorithms to rank websites based on factors such as relevance, content quality, and user experience. Understanding these factors and optimizing your site accordingly can significantly impact your ranking.",
  },
  {
    id: 4,
    title: "4. The Role of Keywords in SEO",
    imgSrc: "./Images/seo-keywords.png",
    imgAlt: "SEO Keywords",
    content:
      "Keywords play a crucial role in SEO. By identifying the terms your target audience is searching for and strategically incorporating them into your website's content, you can attract more relevant traffic.",
  },
  {
    id: 5,
    title: "5. On-Page vs Off-Page SEO",
    imgSrc: "./Images/on-page-vs-off-page-seo.png",
    imgAlt: "On-Page vs Off-Page SEO",
    content:
      "On-page SEO refers to optimizing elements on your website, such as content, meta tags, and images. Off-page SEO involves activities outside your website, like building backlinks from other sites. Both are essential for a comprehensive SEO strategy.",
  },
  {
    id: 6,
    title: "6. The Future of SEO",
    imgSrc: "./Images/future-of-seo.png",
    imgAlt: "Future of SEO",
    content:
      "As search engine algorithms evolve, so does SEO. The future of SEO will focus on user experience, voice search, and artificial intelligence. Staying ahead of these trends will help your business maintain its competitive edge.",
  },
];

const Blog3 = () => {
  return (
    <>
      <div className="mt-[94px] py-20 glass-effect rounded-b-[50px] sm:rounded-b-[70px] md:rounded-b-[90px] lg:rounded-b-[100px] px-6">
        <div className="flex flex-col items-center justify-center gap-5 text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center">
            The Importance of SEO
          </h1>
          <p className="md:w-[600px] text-center">
            Discover why Search Engine Optimization is a key factor in online success and how it can elevate your business in 2024.
          </p>
        </div>
      </div>

      <header className="mt-10 px-3">
        <div className="bg-opacity-50 h-full flex flex-col justify-center text-white">
          <h1 className="text-3xl sm:text-4xl font-bold text-center">
            Why <span className="text-gradient">SEO</span> is Essential
          </h1>
          <p className="mt-4 text-sm md:text-base text-center">
            Understanding the importance of SEO and implementing the right strategies can help your business thrive in a competitive digital world.
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
                SEO is a vital component of digital marketing success. By improving your search engine rankings, you can increase your website’s visibility and attract more customers. Staying informed about SEO trends and best practices will ensure your business remains competitive in 2024 and beyond.
              </p>
            </footer>
          </section>
        </div>
      </div>
    </>
  );
};

export default Blog3;

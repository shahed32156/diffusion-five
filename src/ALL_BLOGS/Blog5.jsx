import React from "react";

// Blog data array for How to Achieve High-Quality Assurance in Software
const blogData = [
  {
    id: 1,
    title: "1. Establish Clear Requirements",
    imgSrc: "./Images/clear-requirements.png",
    imgAlt: "Clear Requirements",
    content:
      "To achieve high-quality assurance in software, it is critical to establish clear and detailed requirements from the outset. This ensures that both developers and testers have a shared understanding of the project’s goals, reducing the chances of miscommunication and errors.",
  },
  {
    id: 2,
    title: "2. Implement Automated Testing",
    imgSrc: "./Images/automated-testing.png",
    imgAlt: "Automated Testing",
    content:
      "Automated testing is essential for ensuring consistency and efficiency in quality assurance processes. By automating repetitive tests, you can reduce human error, save time, and ensure that the software behaves as expected across various conditions.",
  },
  {
    id: 3,
    title: "3. Conduct Regular Code Reviews",
    imgSrc: "./Images/code-reviews.png",
    imgAlt: "Code Reviews",
    content:
      "Regular code reviews allow team members to identify and correct mistakes early in the development cycle. These reviews help maintain code quality, improve collaboration, and foster knowledge sharing within the team.",
  },
  {
    id: 4,
    title: "4. Perform Continuous Integration",
    imgSrc: "./Images/continuous-integration.png",
    imgAlt: "Continuous Integration",
    content:
      "Continuous integration (CI) is the practice of merging code changes frequently and automatically testing the software after each update. CI ensures that errors are caught early and helps developers build robust and scalable software.",
  },
  {
    id: 5,
    title: "5. Engage in User Acceptance Testing",
    imgSrc: "./Images/user-acceptance-testing.png",
    imgAlt: "User Acceptance Testing",
    content:
      "User acceptance testing (UAT) involves real users testing the software to ensure that it meets their needs and expectations. This final stage of testing is crucial for verifying that the software performs well in real-world scenarios.",
  },
  {
    id: 6,
    title: "6. Monitor and Maintain Software Post-Release",
    imgSrc: "./Images/post-release-monitoring.png",
    imgAlt: "Post-Release Monitoring",
    content:
      "High-quality assurance doesn’t end with software release. It’s important to monitor the software for any issues, gather user feedback, and release updates as necessary. This ongoing maintenance helps ensure long-term software performance and reliability.",
  },
];

const Blog5 = () => {
  return (
    <>
      <div className="mt-[94px] py-20 glass-effect rounded-b-[50px] sm:rounded-b-[70px] md:rounded-b-[90px] lg:rounded-b-[100px] px-6">
        <div className="flex flex-col items-center justify-center gap-5 text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center">
            How to Achieve High-Quality Assurance in Software
          </h1>
          <p className="md:w-[600px] text-center">
            Discover the best practices and methodologies for ensuring high-quality software in today's fast-paced development environment.
          </p>
        </div>
      </div>

      <header className="mt-10 px-3">
        <div className="bg-opacity-50 h-full flex flex-col justify-center text-white">
          <h1 className="text-3xl sm:text-4xl font-bold text-center">
            Best Practices for <span className="text-gradient">Software Quality Assurance</span>
          </h1>
          <p className="mt-4 text-sm md:text-base text-center">
            Learn how to enhance your software quality through rigorous testing, code reviews, and continuous monitoring.
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
                Achieving high-quality software requires diligence, collaboration, and the use of best practices. By establishing clear requirements, automating tests, and continuously monitoring your software, you can ensure a high standard of quality throughout the development lifecycle. Stay proactive and adaptive to maintain your software's excellence.
              </p>
            </footer>
          </section>
        </div>
      </div>
    </>
  );
};

export default Blog5;

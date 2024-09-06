import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FAQ = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  const faqs = [
    {
      question: "What services do you offer?",
      answer:
        "We offer web design & development, digital marketing, graphic design, SQA, and video editing services tailored to meet your business needs.",
    },
    {
      question: "How long does it take to develop a website?",
      answer:
        "The timeline depends on the complexity and size of the website, but on average, it takes 2-6 weeks from planning to deployment.",
    },
    {
      question: "What is your web development process?",
      answer:
        "Our process includes planning, designing, developing, testing, and launching, ensuring a seamless and effective web solution.",
    },
    {
      question: "Do you provide post-launch support?",
      answer:
        "Yes, we provide continuous support and maintenance to ensure your website remains up-to-date and fully functional.",
    },
    {
      question: "How do I get started with your services?",
      answer:
        "Simply contact us with your requirements, and we will guide you through the process of selecting the best solutions for your business.",
    },
  ];

  return (
    <div className="mt-20 flex flex-col justify-center items-center text-white mx-3">
      <div className='text-white text-center flex flex-col items-center gap-3 mx-3'>
        <h1 className='text-3xl sm:text-4xl font-bold'>
        Frequently Asked Questions <span className='text-gradient'>(FAQ)</span>
          
        </h1>
        <p className='md:w-[600px]'>Below are the top 5 frequently asked questions from our clients, addressing key aspects of our services.</p>
      </div>
      <div className="w-full max-w-2xl mt-10">
        {faqs.map((faq, i) => (
          <div key={i} className="mb-4">
            <div
              className="flex justify-between items-center p-4 bg-blue-500 bg-opacity-40 shadow-md shadow-blue-500 rounded-lg cursor-pointer"
              onClick={() => toggle(i)}
            >
              <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
              <span>
                {selected === i ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </div>
            <div
              className={`overflow-hidden transition-all duration-500 ${
                selected === i ? "max-h-screen p-4" : "max-h-0"
              } bg-blue-500 bg-opacity-20 rounded-b-lg`}
            >
              <p className="text-white">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;

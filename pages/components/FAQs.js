import React, { useState } from "react";

const FAQs = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  // Toggle the expanded state
  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Lorem ipsum dolor sit amet, consectetuer",
      answer:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna volutpat. Ut wisi enim adminim veniam, ",
    },
    {
      question: "Lorem ipsum dolor sit amet, consectetuer",
      answer:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna volutpat. Ut wisi enim adminim veniam, ",
    },
    {
      question: "Lorem ipsum dolor sit amet, consectetuer",
      answer:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna volutpat. Ut wisi enim adminim veniam, ",
    },
  ];

  return (
    <section id="faq" className="py-16">
      <h2 className="text-5xl font-semibold text-center mb-20 tracking-wider">
        FAQs
      </h2>
      <div className="mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <React.Fragment key={index}>
            <div
              className="p-4 cursor-pointer"
              onClick={() => toggleExpand(index)}
            >
              <div className="flex justify-between items-center">
                <h4 className="font-medium text-2xl">{faq.question}</h4>
                <div className="w-10 h-8 lg:w-10 lg:h-10 flex items-center justify-center rounded-full bg-[#b6e7ff]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`w-6 h-6 text-white transform transition-transform duration-300 ${
                      expandedIndex === index ? "rotate-180" : "rotate-0"
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#0d448c"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
              {expandedIndex === index && (
                <p className="text-gray-600 mt-2 max-w-[50%]">{faq.answer}</p>
              )}
            </div>
            {index < faqs.length - 1 && <hr className="border-gray-300" />}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default FAQs;

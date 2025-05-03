import React, { useState } from "react";
import Image from "next/image";

const HowItWorks = () => {
  // State to track which item is expanded
  const [expandedIndex, setExpandedIndex] = useState(null);

  // Toggle the expanded state
  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const items = [
    {
      title: "Lorem ipsum dolor",
      details:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna volutpat. Ut wisi enim adminim veniam, ",
      icon: "/cam2.png",
    },
    {
      title: "Lorem ipsum dolor",
      details:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna volutpat. Ut wisi enim adminim veniam, ",
      icon: "/cam2.png",
    },
    {
      title: "Lorem ipsum dolor",
      details:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna volutpat. Ut wisi enim adminim veniam, ",
      icon: "/cam2.png",
    },
    {
      title: "Lorem ipsum dolor",
      details:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna volutpat. Ut wisi enim adminim veniam, ",
      icon: "/cam2.png",
    },
  ];

  return (
    <section id="how" className="py-16">
      <h2 className="text-5xl font-semibold text-center mb-10">How It Works</h2>
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="flex-1 space-y-4 max-w-[45%]">
          {items.map((item, index) => (
            <React.Fragment key={index}>
              <div
                className="bg-white p-4 border-2 border-gray-200 rounded-2xl cursor-pointer"
                onClick={() => toggleExpand(index)}
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                    <Image
                      src={item.icon}
                      alt="icon"
                      width={32}
                      height={32}
                      className="w-8 h-8"
                    />
                    <h3 className="font-semibold text-2xl tracking-wider">
                      {item.title}
                    </h3>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`w-6 h-6 transform transition-transform duration-300 ${
                      expandedIndex === index ? "rotate-180" : "rotate-0"
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
                {expandedIndex === index && (
                  <p className="text-sm tracking-wide text-gray-600 mt-4">
                    {item.details}
                  </p>
                )}
              </div>
              {index < items.length - 1 && (
                <hr className="my-4 border-gray-400" />
              )}
            </React.Fragment>
          ))}
        </div>
        <Image
          className="w-64 md:w-[30rem]"
          src="/l2.png"
          alt="Doctor"
          width={480}
          height={480}
        />
      </div>
    </section>
  );
};

export default HowItWorks;

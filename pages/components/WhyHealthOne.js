import React from "react";
import Image from "next/image";

const WhyHealthOne = () => {
  return (
    <section id="why" className="py-16">
      <h2 className="text-5xl font-[550] text-center mb-10">Why Health One</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto">
        {[1, 2, 3, 4].map((i) => (
          <div
            className="flex flex-col gap-y-4 bg-white p-6 rounded-3xl border-2 border-gray-200"
            key={i}
          >
            <Image src="/cam.png" alt="Camera Icon" width={40} height={40} />
            <h3 className="font-semibold text-2xl">
              Lorem ipsum dolor sit amet,
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna volutpat.
              Ut wisi enim adminim veniam,
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyHealthOne;

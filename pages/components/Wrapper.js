import React from "react";

const Wrapper = ({ children }) => {
  return (
    <div className="font-sans px-20 flex flex-col py-12 space-y-12 bg-[#F7F7F7] text-gray-800">
      {children}
    </div>
  );
};

export default Wrapper;

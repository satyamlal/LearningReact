import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const ImageSlider = () => {
  const [val, setVal] = useState(false);

  return (
    <>
      <h1 className="w-full h-20 bg-zinc-400 flex items-center text-zinc-700 pl-12 font-bold">
        Image Slider!
      </h1>
      <div className="w-full h-screen flex justify-center items-center">
        <div className="relative w-150 h-84 bg-[#202124] rounded-lg flex overflow-hidden">
          <img
            className={`shrink-0 transition-transform duration-700 ease-in-out ${
              val === false ? "-translate-x-[0%]" : "-translate-x-[100%]"
            } w-full h-full object-cover`}
            src="https://images.unsplash.com/photo-1751302386326-7eb6ae7ad39a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="#"
          />
          <img
            className={`shrink-0 transition-transform duration-700 ease-in-out ${
              val === false ? "-translate-x-[0%]" : "-translate-x-[100%]"
            } w-full h-full object-cover`}
            src="https://images.unsplash.com/photo-1749497683202-d3073573d996?q=80&w=1247&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="#"
          />
          <span
            onClick={() => setVal(() => !val)}
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-[#dadada]/40 flex items-center justify-center rounded-full hover:bg-[#dadada]/70 transition"
          >
            <FaArrowRightLong size="1.6em" color="black" />
          </span>
        </div>
      </div>
    </>
  );
};

export default ImageSlider;

"use client";
import { useState } from "react";
import ToolSelector from "./ToolSelect";

const EmployeeSlider = () => {
  const [employeeCount, setEmployeeCount] = useState(0);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmployeeCount(Number(event.target.value));
  };
  

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 sm:p-8">
      <div className="text-center mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold">Save costs</h1>
        <p className="text-gray-400 text-sm sm:text-base">Do more with less</p>
      </div>

      <div className="relative w-full max-w-[90%] sm:max-w-[700px] lg:max-w-[900px] xl:max-w-[1000px]">
        <div className="relative z-20 w-full rounded-lg border-[0.5px] border-[#C8C8C8] bg-[rgba(42,46,53,0.15)] px-4 py-6 sm:px-6 sm:py-8 xl:px-12 xl:py-[54px] text-base leading-8 text-[#B5B5B5] backdrop-blur-[100px]">
          <p className="text-lg mb-4 text-center sm:text-left">How many employees do you have?</p>
          <div className="relative">
            <input
              type="range"
              min="0"
              max="500"
              value={employeeCount}
              onChange={handleChange}
              className="w-full h-2 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-lg appearance-none focus:outline-none"
            />
            <div className="absolute left-0 right-0 top-6 flex justify-between text-gray-400 text-xs sm:text-sm">
              {[0, 100, 200, 300, 400, 500].map((val) => (
                <span key={val}>{val}</span>
              ))}
            </div>
          </div>
          
        </div>

        <div className="absolute -left-10 sm:-left-16 top-2 sm:top-5 z-10 hidden xl:block h-[100px] w-[80px] sm:h-[135px] sm:w-[100px] -rotate-[18deg] p-2">
          <img
            src="https://kroolo.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frobot.a4c46d19.png&w=640&q=75"
            alt="robot"
            className="object-contain w-full h-full"
          />
        </div>
      </div>

      <ToolSelector employee={employeeCount} />
    </div>
  );
};

export default EmployeeSlider;

"use client"
import { useState } from "react";

const tools = [
  { id: 1, name: "Asana", icon: "https://kroolo.com/_next/static/media/tool-icon%20(2).379dc9e9.svg" },
  { id: 2, name: "Todoist", icon: "https://kroolo.com/_next/static/media/tool-icon%20(3).1f50d985.svg" },
  { id: 3, name: "Notion", icon: "https://kroolo.com/_next/static/media/tool-icon%20(4).938e0329.svg" },
  { id: 4, name: "Trello", icon: "https://kroolo.com/_next/static/media/tool-icon%20(5).ae75d559.svg" },
  { id: 5, name: "Slack", icon: "https://kroolo.com/_next/static/media/tool-icon%20(6).eb8a2d14.svg" },
  { id: 6, name: "Jira", icon: "https://kroolo.com/_next/static/media/tool-icon%20(7).017a106e.svg" },
  { id: 7, name: "ClickUp", icon: "https://kroolo.com/_next/static/media/tool-icon%20(8).f0fd4423.svg" },
  { id: 8, name: "Confluence", icon: "https://kroolo.com/_next/static/media/tool-icon%20(9).4f8f1b90.svg" },
  { id: 9, name: "Linear", icon: "https://kroolo.com/_next/static/media/tool-icon%20(10).1cedd9c2.svg" },
  { id: 10, name: "Monday", icon: "https://kroolo.com/_next/static/media/tool-icon%20(1).f10bca5a.svg" },
];

const ToolSelector = ({employee}) => {
  const [selectedTools, setSelectedTools] = useState([]);

  const handleSelect = (tool) => {
    setSelectedTools((prevSelected) =>
      prevSelected.includes(tool)
        ? prevSelected.filter((t) => t !== tool)
        : [...prevSelected, tool]
    );
  };

  const appCount = selectedTools.length;
  const yearlySavings = appCount * 6045 * employee;

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-8">
      <div className="mt-[40px] grid grid-cols-1 items-center gap-[40px] lg:grid-cols-2 xlg:items-start xl:mt-20 xl:items-center xl:gap-[100px]">
        {/* Left Tools Section */}
        <div className="border-[#4E4E4E)] h-full rounded-lg border bg-[#191A1D] px-4 py-5 xl:px-8 xl:py-7">
          <h1 className="text-xl font-bold mb-8">What tools are you using?</h1>
          <div className="grid grid-cols-5 gap-6">
            {tools.map((tool) => (
              <button
                key={tool.id}
                onClick={() => handleSelect(tool)}
                className={`flex flex-col items-center justify-center p-4 rounded-lg border ${
                  selectedTools.includes(tool)
                    ? "border-white bg-gray-800"
                    : "border-gray-700"
                }`}
              >
                <img
                  src={tool.icon}
                  alt={tool.name}
                  className="h-10 w-10 mb-2"
                />
                <span className="text-sm">{tool.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Right Savings Section */}
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg flex flex-col justify-between">
          <div>
            <h1 className="text-2xl font-bold">{appCount} Apps</h1>
            <p className="text-gray-400 mt-2">
              It is estimated that Kroolo can replace at least 3 of your
              existing business tools.
            </p>
            <h2 className="text-2xl font-bold  mt-4">
              Save ${yearlySavings.toLocaleString()}/year
            </h2>
            
              <p className="text-gray-400 mt-2">
                For a company of {employee} employees, Kroolo can save a total cost of
                up to ${yearlySavings.toLocaleString()} per year.
              </p>
            
          </div>
          <button className="bg-white w-48 text-black font-medium px-4 py-2 rounded-lg mt-6 ">
            Request Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToolSelector;

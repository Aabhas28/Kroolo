"use client";
import React, { useState } from "react";

const navItems = [
  { 
    name: "Projects", 
    image: "https://kroolo.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprojects11.f6c35346.png&w=3840&q=75"
  },
  { 
    name: "Tasks", 
    image: "https://kroolo.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftasks.9b008cd9.png&w=3840&q=100"
  },
  { 
    name: "Goals", 
    image: "https://kroolo.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgoals.69d99e0e.png&w=3840&q=100"
  },
  { 
    name: "Docs", 
    image: "https://kroolo.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdocs.a372f027.png&w=3840&q=100"
  },
  { 
    name: "Chat", 
    image: "https://kroolo.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fchats.efafab81.png&w=3840&q=100"
  },
  { 
    name: "Teams", 
    image: "https://kroolo.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fteams.c6fb9bb9.png&w=3840&q=100"
  },
  { 
    name: "Integrations", 
    image: "https://kroolo.com/_next/static/media/integrations12.ccf5054b.svg"
  }
];

const NavigationBar = () => {
  const [activeItem, setActiveItem] = useState<string | null>(navItems[0].name);

  return (
    <div className="flex flex-col items-center space-y-8 mt-4 w-full sm:block hidden">
      {/* Navigation Bar */}
      <nav className="flex items-center justify-center w-full px-5">
        <ul className="flex items-center w-full max-w-7xl rounded-xl border border-white bg-black/50 backdrop-blur-md">
          {navItems.map((item) => {
            const isActive = activeItem === item.name;
    
            return (
              <li key={item.name} className="flex-1 text-center">
                <button
                  onClick={() => setActiveItem(isActive ? null : item.name)}
                  className={`cursor-pointer px-4 py-5 w-full text-lg font-medium ${
                    isActive
                      ? "text-white underline decoration-2"
                      : "text-gray-400 hover:text-gray-200"
                  }`}
                >
                  {item.name}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    
      {/* Active Item Preview */}
      {activeItem && (
        <div className="w-full transition-all duration-300 rounded-2xl ease-in-out p-6 ">
          <div className="relative rounded-2xl overflow-hidden aspect-video border border-white shadow-2xl max-w-7xl mx-auto">
            <img
              src={navItems.find((item) => item.name === activeItem)?.image}
              alt={activeItem}
              className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-105 rounded-2xl p-10"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
              <div className="absolute bottom-6 left-6">
                <h3 className="text-white text-3xl font-bold">{activeItem}</h3>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavigationBar;


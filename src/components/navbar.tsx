"use client";

import Link from "next/link";
import { useState } from "react";
import PricingSection from "./pricingSection";

export function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showDropdown2, setShowDropdown2] = useState(false);
  const [showDropdown3, setShowDropdown3] = useState(false);


  return (
    <div className="relative z-40 pt-8">
      <nav className="fixed top-4 left-0 w-full h-[60px] overflow-hidden bg-[rgba(42,46,53,0.36)] rounded-lg border-[0.25px] border-[#535252] px-3 py-1 backdrop-blur-[24px] duration-300 ease-in-out md:px-5 flex items-center">
        <div className="flex w-full items-center justify-between">
          {/* Logo */}
          <Link href="/" className="block">
            <img
              src="https://kroolo.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-white.dc768579.png&w=3840&q=100"
              alt="kroolo"
              className="md:w-[90px] w-[90px] h-[30px]"
            />
          </Link>

          {/* Links - Hidden on Small Screens */}
          <ul className="hidden lg:flex space-x-6 items-center relative">
            <li
              onMouseEnter={() => {
                setShowDropdown3(false);
                setShowDropdown(true);
                setShowDropdown2(false);
              }}
              
              
              className="relative"
            >
              <Link href="#">
                <div className="font-inter text-gray-500 font-semibold duration-300 hover:text-white hover:opacity-100">
                  Products
                </div>
              </Link>
              </li>
              <li
              onMouseEnter={() => {
                setShowDropdown3(false);
                setShowDropdown(false);
                setShowDropdown2(true);
              }}
              
              
              className="relative"
            >
              <Link href="#">
                <div className="font-inter text-gray-500 font-semibold duration-300 hover:text-white hover:opacity-100">
                Solutions
                </div>
              </Link>
              </li>
            {[ "Pricing",  "Contact"].map((item) => (
              <li key={item}>
                <Link href="#">
                  <div className="font-inter text-gray-500 font-semibold duration-300 hover:text-white hover:opacity-100">
                    {item}
                  </div>
                </Link>
              </li>
            ))}
             <li
onMouseEnter={() => {
  setShowDropdown3(true);
  setShowDropdown(false);
  setShowDropdown2(false);
}}
              
              className="relative"
            >
              <Link href="#">
                <div className="font-inter text-gray-500 font-semibold duration-300 hover:text-white hover:opacity-100">
                Resources
                </div>
              </Link>
              </li>
          </ul>

          {/* Buttons - Hidden on Small Screens */}
          <div className="hidden md:flex items-center gap-6">
            <a className="block rounded-[8px] border-[0.5px] border-solid  px-8 py-2 text-base border-textGray bg-transparent font-inter text-textGray font-semibold hover:opacity-80">
              Contact Sales
            </a>
            <div className="flex items-center gap-3">
              <a className="block rounded-[8px] border-[0.5px] border-solid  px-8 py-2 text-base border-textGray bg-transparent font-inter text-textGray font-semibold hover:opacity-80">
                Login
              </a>
              <a className="block rounded-[8px] border-[0.5px] border-solid  px-8 py-2 text-base border-transparent bg-white font-inter text-black opacity-80 hover:opacity-100 font-semibold">
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Dropdown */}
      {showDropdown && (
        <div  onMouseEnter={() => setShowDropdown(true)}
        onMouseLeave={() => setShowDropdown(false)} className="absolute top-[70px] left-0 w-full h-[530px] bg-black border-t border-gray-600 shadow-lg">
          <div className="max-w-screen-lg mx-auto p-6 grid grid-cols-2 gap-6">
            
            {[
              {
                title: "Kroolo AI",
                description:
                  "The only AI productivity platform built for product, engineering, marketing",
                icon: "https://kroolo.com/_next/static/media/ai-solution.7a1c797f.svg",
              },
              {
                title: "Chat",
                description:
                  "Slack-like team collaboration software for teams",
                icon: "https://kroolo.com/_next/static/media/chat-solution.5777d1e6.svg",
              },
              {
                title: "Goal & OKRs",
                description:
                  "AI-based Goal & OKR performance management tool for teams",
                icon: "https://kroolo.com/_next/static/media/goal-solution.7c1c982d.svg",
              },
              {
                title: "Project & Sprints",
                description:
                  "Intelligent AI-based project management software for teams",
                icon: "https://kroolo.com/_next/static/media/doc-solution.41ce93fc.svg",
              },
              {
                title: "Teams",
                description:
                  "Create & manage teams using our team management software",
                icon: "https://kroolo.com/_next/static/media/project-solution.c05611fd.svg",
              },
              {
                title: "Tasks",
                description:
                  "Intuitive AI-led task management software for everyone",
                icon: "https://kroolo.com/_next/static/media/team-solution.54b54bff.svg",
              },
              {
                title: "Docs",
                description:
                  "Advanced AI-based Document management software for you",
                icon: "https://kroolo.com/_next/static/media/task-solution.5869f747.svg",
              },
            ].map((item, idx) => (
              <Link
                key={idx}
                href="#"
                className="flex flex-col gap-3 p-4 h-full hover:bg-gray-800 transition bg-[#1f1f1f] rounded-xl"
              >
                <div className="flex items-center">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-8 h-8 mr-4"
                  />
                  <h3 className="text-white font-semibold">{item.title}</h3>
                </div>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </Link>
            ))}
          </div>
        </div>
      )}
      {showDropdown2 && (
  <div
    onMouseEnter={() => setShowDropdown2(true)}
    onMouseLeave={() => setShowDropdown2(false)}
    className="absolute top-[70px] left-0 w-full h-[300px] bg-black border-t border-gray-600 shadow-lg"
  >
    <div className="max-w-screen-lg mx-auto p-6 grid grid-cols-3 gap-6">
      {/* First Column - PricingSection */}
      <div className="flex flex-col justify-center items-start  rounded-xl p-4">
        <PricingSection />
      </div>

      {/* Second and Third Columns */}
      <div className="col-span-2 grid grid-cols-2 gap-6">
        {[
          {
            title: "Product Management",
            description:
              "The only AI productivity platform built for product, engineering, marketing",
            icon: "https://kroolo.com/_next/static/media/ai-solution.7a1c797f.svg",
          },
          {
            title: "Marketing",
            description: "Slack-like team collaboration software for teams",
            icon: "https://kroolo.com/_next/static/media/chat-solution.5777d1e6.svg",
          },
          {
            title: "Engineering",
            description:
              "AI-based Goal & OKR performance management tool for teams",
            icon: "https://kroolo.com/_next/static/media/goal-solution.7c1c982d.svg",
          },
          {
            title: "Project Management",
            description:
              "Intelligent AI-based project management software for teams",
            icon: "https://kroolo.com/_next/static/media/doc-solution.41ce93fc.svg",
          },
        ].map((item, idx) => (
          <Link
            key={idx}
            href="#"
            className="flex flex-col gap-3 p-4 hover:bg-gray-800 transition bg-[#1f1f1f] rounded-xl"
          >
            <div className="flex h-[60px] items-center">
              <h3 className="text-white font-semibold">{item.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </div>
)}


{showDropdown3 && (
  
        <div onMouseLeave={() => setShowDropdown3(false)}               onMouseEnter={() => setShowDropdown3(true)}
        className="absolute top-[70px] left-0 w-full h-[200px] bg-black border-t border-gray-600 shadow-lg">
          <div className="max-w-screen-lg mx-auto p-6 grid grid-cols-3 gap-6">
            
            {[
              {
                title: "Help Center",
                description:
                  "The only AI productivity platform built for product, engineering, marketing",
                icon: "https://kroolo.com/_next/static/media/ai-solution.7a1c797f.svg",
              },
              {
                title: "Blog",
                description:
                  "Slack-like team collaboration software for teams",
                icon: "https://kroolo.com/_next/static/media/chat-solution.5777d1e6.svg",
              },
              {
                title: "Video",
                description:
                  "AI-based Goal & OKR performance management tool for teams",
                icon: "https://kroolo.com/_next/static/media/goal-solution.7c1c982d.svg",
              },
             
            ].map((item, idx) => (
              <Link
                key={idx}
                href="#"
                className="flex flex-col gap-3 p-4 h-full hover:bg-gray-800 transition bg-[#1f1f1f] rounded-xl"
              >
                <div className="flex items-center">
                 
                  <h3 className="text-white font-semibold">{item.title}</h3>
                </div>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </Link>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}

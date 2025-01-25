"use client";
import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

function ScrollSection() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  const progressBarRef = useRef(null);
  const [activeSection, setActiveSection] = useState(0);

  // Register GSAP ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    // Horizontal scrolling animation
    const horizontalScroll = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-300vw", // Move horizontally across sections
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
          onUpdate: (self) => {
            // Calculate the active section based on scroll progress
            const sectionIndex = Math.round(self.progress * 4); // 4 sections
            setActiveSection(sectionIndex);
          },
        },
      }
    );

    // Progress bar animation
    const progressBar = gsap.to(progressBarRef.current, {
      scaleX: 1, // Full scale for the progress bar
      transformOrigin: "left center", // Start scaling from the left
      ease: "none",
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top top",
        end: "2000 top",
        scrub: 0.6,
      },
    });

    ScrollTrigger.refresh();

    return () => {
      horizontalScroll.kill();
      progressBar.kill();
    };
  }, []);

  return (
    <section className="overflow-hidden relative hidden lg:block">
        
      <div ref={triggerRef} className="relative">
        {/* Horizontal Scroll Sections */}
        <div className="w-full bg-black">
        <div className="flex justify-center items-center">
        <h1 className="text-4xl">Explore custom AI Agents and </h1>
       
        </div>
        <div className="flex justify-center items-center">
        <h1 className="text-4xl"> Prompts to transform your workflow</h1>
        </div>
        </div>
        <div
          ref={sectionRef}
          className="h-screen w-[400vw] flex flex-row relative"
        >
          {/* Section 1 */}
          <div className="flex h-screen w-screen justify-center items-center bg-black">
            <h3 className="text-white tracking-wide text-3xl uppercase">
              <div className="w-[700px] ">
                <img
                  src="/Images/Scroll1.png"
                  className="p-10"
                  alt="Scroll Image 1"
                />
              </div>
            </h3>
          </div>

          {/* Section 2 */}
          <div className="flex h-screen w-screen justify-center items-center bg-black">
            <h3 className="text-white tracking-wide text-3xl uppercase mt-10">
              Create, train, and chat with your AI Agent.
              <div className="text-white tracking-wide text-3xl uppercase">
                Ask any specific question, get a specific
              </div>
              <div className="text-white tracking-wide text-3xl uppercase">
                answer
              </div>

              <div className="mt-8">
                <img
                  src="/Images/Scroll2.png"
                  className="p-10"
                  alt="Scroll Image 1"
                />
              </div>
            </h3>
          </div>

          {/* Section 3 */}
          <div className="flex h-screen w-screen justify-center items-center bg-black">
            <h3 className="text-white tracking-wide text-3xl uppercase">
              <img
                src="/Images/Scroll3.png"
                className="p-10"
                alt="Scroll Image 1"
              />
            </h3>
          </div>

          {/* Section 4 */}
          <div className="flex h-screen w-screen justify-center items-center bg-black">
            <h3 className="text-white tracking-wide text-3xl uppercase">
              <img
                src="/Images/Scroll4.png"
                className="p-10"
                alt="Scroll Image 1"
              />
            </h3>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-28 left-0 w-full h-2 bg-gray-300">
          <div
            ref={progressBarRef}
            className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 scale-x-0"
          />
        </div>

        {/* Horizontal Navigation */}
        <div className="absolute bottom-8 mt-3 left-0 right-0 flex text-lg justify-between px-10 text-white pt-4">
          <div className="cursor-pointer hover:text-gray-400 ">
            Introducing Kroolo AI
          </div>
          <div className="cursor-pointer hover:text-gray-400">
            AI Agents for Workflows
          </div>
          <div className="cursor-pointer hover:text-gray-400">Chat with PDF</div>
          <div className="cursor-pointer hover:text-gray-400">
            Generate Content with AI
          </div>
        </div>
      </div>
    </section>
  );
}

export default ScrollSection;

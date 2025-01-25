"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import TextTyping from "./TextTyping";

export default function Hero() {
  useEffect(() => {
    // GSAP Animations
    const timeline = gsap.timeline({ defaults: { duration: 1, ease: "power3.out" } });

    timeline
      .from(".hero-title", { opacity: 0, y: -50 })
      .from(".hero-subtitle", { opacity: 0, y: -40 }, "-=0.8")
      .from(".hero-description", { opacity: 0, y: -30 }, "-=0.6")
      .from(".hero-buttons button", { opacity: 0, y: 20, stagger: 0.2 }, "-=0.4")
      .from(".hero-image", { opacity: 0, scale: 0.9 }, "-=0.4");
  }, []);

  return (
    <div className="min-h-screen bg-black text-white p-8 mt-32">
      <div className="max-w-3xl">
        <h2 className="hero-title text-2xl md:text-4xl font-semibold mb-4">
          Imagine the{" "}
          <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            #futureofwork
          </span>
        </h2>

        <h1 className="hero-subtitle text-2xl md:text-4xl font-medium mb-6">
          <TextTyping />
        </h1>

        <p className="hero-description text-lg md:text-xl text-gray-300 mb-8 max-w-3xl">
          Power of AI in your Workspace to help automate content, projects, tasks, docs or create your own custom AI
          Agents.
        </p>

        <div className="flex gap-4 hero-buttons">
          <button className="px-6 py-3 text-lg border border-gray-600 rounded-lg hover:bg-gray-800 transition-colors flex items-center gap-2">
            Watch Video
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="ml-1">
              <path d="M8 5v14l11-7z" fill="currentColor" />
            </svg>
          </button>
          <button className="px-6 py-3 text-lg bg-white text-black rounded-lg hover:bg-gray-200 transition-colors">
            Book a demo
          </button>
        </div>
      </div>
      <img
        className="hero-image"
        src="https://kroolo.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsystem-text.37d9d909.png&w=3840&q=75"
        alt="img"
      />
    </div>
  );
}

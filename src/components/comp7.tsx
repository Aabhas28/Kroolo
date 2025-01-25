"use client";

import React, { useEffect, useRef, useState } from "react";
import { Sparkles, Projector as Projects } from "lucide-react";
import gsap from "gsap";

function Comp7() {
  const [isInView, setIsInView] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  const featureRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const bottomSectionRef = useRef<HTMLDivElement | null>(null);

  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    if (entry.isIntersecting && !hasScrolled) {
      setIsInView(true);
      setHasScrolled(true); // Prevent animations from replaying
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.3, // Trigger when 30% of the section is visible
    });

    if (featureRef.current) {
      observer.observe(featureRef.current);
    }

    return () => {
      if (featureRef.current) {
        observer.unobserve(featureRef.current);
      }
    };
  }, [hasScrolled]);

  useEffect(() => {
    if (isInView) {
      // Animate features
      gsap.fromTo(
        ".feature-item",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1.5, stagger: 0.3, ease: "power2.out" }
      );

      // Animate heading
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" }
      );

      // Animate image
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 1.5, ease: "power2.out" }
      );

      // Animate bottom section
      gsap.fromTo(
        bottomSectionRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1.5, delay: 0.5, ease: "power2.out" }
      );
    }
  }, [isInView]);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col lg:flex-row items-center gap-12">
        {/* Left Column */}
        <div className="flex-1 space-y-8">
          <div className="inline-flex items-center bg-zinc-900 rounded-full px-4 py-2 mb-2">
            <Projects className="w-5 h-5 mr-2" />
            <span className="text-sm">Integrations</span>
          </div>

          <h1
            ref={headingRef}
            className="text-4xl md:text-4xl font-bold leading-tight"
          >
            Seamless Integrations for Connected Workflows
          </h1>

          <div className="space-y-6" ref={featureRef}>
            <FeatureItem icon={<Sparkles />} text="30+ Apps to integrate" />
            <FeatureItem
              icon={<Sparkles />}
              text="Custom Integration workflows"
            />
            <FeatureItem icon={<Sparkles />} text="Integration marketplace" />
            <FeatureItem icon={<Sparkles />} text="Custom apps" />
            <FeatureItem icon={<Sparkles />} text="Manage integrations" />
          </div>

          <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors">
            Explore Integrations
          </button>
        </div>

        {/* Right Column - Mock UI */}
        <div className="flex-1">
          <div className="relative">
            <div className="rounded-2xl p-6 shadow-xl">
              <img
                ref={imageRef}
                src="https://kroolo.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffeatures1.5c6da633.png&w=2048&q=75"
                alt="Project Management Dashboard"
                className="rounded-lg w-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div
        ref={bottomSectionRef}
        className="container mx-auto px-4 pt-20 pb-16 text-center"
      >
        <h1 className="text-xl font-bold mb-6">
          You can choose your relevant use case and generate outputs instantly.
        </h1>
        <p className="text-5xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
          Explore custom AI agents or Personas to transform your workflow
        </p>
      </div>
    </div>
  );
}

// Feature Item Component
function FeatureItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="feature-item flex items-center space-x-3 opacity-0 transform translate-y-6">
      <div className="text-indigo-400">{icon}</div>
      <span className="text-lg text-gray-300">{text}</span>
    </div>
  );
}

export default Comp7;

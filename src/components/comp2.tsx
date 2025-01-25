import React from 'react';
import {
  Sparkles,
  Projector as Projects,
} from 'lucide-react';

function Comp2() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col gap-12 lg:flex-row lg:items-center">
        {/* Adjust layout order for small screens */}
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center">
          {/* Text Section */}
          <div className="flex-1 space-y-8 order-1 lg:order-2">
            <div className="inline-flex items-center bg-zinc-900 rounded-full px-4 py-2 mb-2">
              <Projects className="w-5 h-5 mr-2" />
              <span className="text-sm">Tasks</span>
            </div>

            <h1 className="text-4xl md:text-4xl font-bold leading-tight">
              Intuitive AI-led Task Management Software for Everyone
            </h1>

            <div className="space-y-6">
              <FeatureItem icon={<Sparkles />} text="100+ templates" />
              <FeatureItem icon={<Sparkles />} text="Generate tasks, subtasks" />
              <FeatureItem icon={<Sparkles />} text="Done & Multiple assignees" />
              <FeatureItem icon={<Sparkles />} text="Multiple views" />
            </div>

            <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors">
              Explore Projects
            </button>
          </div>

          {/* Image Section */}
          <div className="flex-1 order-2 lg:order-1">
            <div className="relative">
              <div className="rounded-2xl p-6 shadow-xl">
                <img
                  src="https://kroolo.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffeatures1.5c6da633.png&w=2048&q=75"
                  alt="Project Management Dashboard"
                  className="rounded-lg w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Feature Item Component
function FeatureItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center space-x-3">
      <div className="text-indigo-400">{icon}</div>
      <span className="text-lg text-gray-300">{text}</span>
    </div>
  );
}

export default Comp2;

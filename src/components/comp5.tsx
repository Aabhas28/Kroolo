import React from 'react';
import { Sparkles, Projector as Projects } from 'lucide-react';

function comp5() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col lg:flex-row items-center gap-12">
        {/* Left Column */}
        <div className="flex-1 space-y-8">
          <div className="inline-flex items-center bg-zinc-900 rounded-full px-4 py-2 mb-2">
            <Projects className="w-5 h-5 mr-2" />
            <span className="text-sm">Chats</span>
          </div>
          
          <h1 className="text-4xl md:text-4xl font-bold leading-tight">
          Slack-like Collaboration software for Teams
          </h1>
          
          <div className="space-y-6">
            <FeatureItem icon={<Sparkles />} text="Create multiple channels" />
            <FeatureItem icon={<Sparkles />} text="Join or leave Channel based on needs" />
            <FeatureItem icon={<Sparkles />} text="Smart notifications" />
            <FeatureItem icon={<Sparkles />} text="Embed anything (Loom, Miro, Figma, Google apps)" />
            <FeatureItem icon={<Sparkles />} text="Pin, Snooze" />
          </div>
          
          <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors">
            Explore Channels
          </button>
        </div>
        
        {/* Right Column - Mock UI */}
        <div className="flex-1">
          <div className="relative">
            <div className="rounded-2xl p-6 shadow-xl">
              <img 
                src="https://kroolo.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffeatures1.5c6da633.png&w=2048&q=75"
                alt="Project Management Dashboard"
                className="rounded-lg w-full"
              />
            </div>
            
            {/* Floating Elements */}
            
            
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

export default comp5;
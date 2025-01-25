import React from 'react';
import { Sparkles, Projector as Projects } from 'lucide-react';

function comp7() {
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
          
          <h1 className="text-4xl md:text-4xl font-bold leading-tight">
          Seamless Integrations for Connected Workflows

          </h1>
          
          <div className="space-y-6">
            <FeatureItem icon={<Sparkles />} text="30+ Apps to integrate" />
            <FeatureItem icon={<Sparkles />} text="Custom Integration workflows" />
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
                src="https://kroolo.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffeatures1.5c6da633.png&w=2048&q=75"
                alt="Project Management Dashboard"
                className="rounded-lg w-full"
              />
            </div>
            
            {/* Floating Elements */}
            
            
           
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 pt-20 pb-16 text-center">
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
    <div className="flex items-center space-x-3">
      <div className="text-indigo-400">{icon}</div>
      <span className="text-lg text-gray-300">{text}</span>
    </div>
  );
}

export default comp7;
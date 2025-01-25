export default function HeroSection() {
    return (
      <div className="min-h-screen bg-black text-white px-4 py-16 flex flex-col justify-center">
        <div className="max-w-6xl space-y-6 text-left">
          {/* Features text */}
          <h2 className="text-3xl md:text-4xl lg:text-4xl font-light tracking-tight">
            120+ features <span className="mx-2">|</span> 40+ Custom AI Agents
          </h2>
  
          {/* Main heading */}
          <h1 className="text-3xl md:text-4xl lg:text-4xl font-light tracking-tight">All in ONE Kroolo</h1>
  
          {/* Description */}
          <p className="text-lg md:text-xl font-light max-w-3xl">
            The entire workspace is managed under ONE platform, with ONE view, assisted by Kroolo AI and advanced
            automations.
          </p>
  
          {/* Workspace tag */}
          <div className="pt-32">
            <span className="inline-block border border-white/20 rounded-full px-6 py-2 text-lg">AI Workspace</span>
          </div>
  
          {/* Secondary heading */}
          <h2 className="text-3xl md:text-4xl lg:text-4xl font-light tracking-tight ">
            Automate your Workspace with AI
          </h2>
  
          {/* Secondary description */}
          <div className="flex justify-between items-start">
            <p className="text-xl md:text-xl font-light max-w-3xl">
              Automate your workspace with AI and focus on what matters—
              <br />
              innovation, collaboration, and achieving goals seamlessly.
            </p>
  
            {/* Get Started button */}
            <button className="border border-white/20 rounded-full px-8 py-3 text-lg hover:bg-white/10 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </div>
    )
  }
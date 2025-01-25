import React from 'react';

function Integrate() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header Section */}
      <div className="container mx-auto px-4 pt-20 pb-16 text-center">
        <h1 className="text-5xl font-bold mb-6">
          Integrate with your favorite Apps
        </h1>
        <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
          It doesn't matter which tools or app you use, we will bring your Workspaces, Projects, Tasks, Docs, Goals, Chats to our platform. Save hours of your time by eliminating app switching!
        </p>
      </div>

      {/* Image Section */}
      <div className="container mx-auto px-4 pb-20">
        <div className="relative max-w-7xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
          <img 
          src='https://kroolo.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffeatures-black5.b23cdb6e.png&w=3840&q=100'
            alt="Connected apps and devices"
            className="w-full h-[600px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>
      </div>
    </div>
  );
}

export default Integrate;
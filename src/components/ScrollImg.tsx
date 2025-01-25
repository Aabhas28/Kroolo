import Image from "next/image";

export default function KrooloUI() {
  return (
    <div className="relative w-screen h-screen bg-custom-black text-white flex justify-center items-center">
      {/* Grid background */}
      <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 gap-px">
        {Array.from({ length: 144 }, (_, i) => (
          <div key={i} className="bg-gray-700"></div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center">
        <div className="relative mb-10">
          {/* Character peeking */}
          <div className="absolute top-0 -right-10 w-24 h-24">
            <Image
              src="/robot-peeking.png"
              alt="Kroolo Bot"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <h1 className="text-3xl font-semibold">Hello! I'm <span className="text-purple-500">Kroo</span>...</h1>
        </div>

        {/* Interactive Elements */}
        <div className="space-y-4">
          <div className="bg-gray-800 px-4 py-2 rounded-md inline-flex items-center space-x-2">
            <Image
              src="/robot-icon.png"
              alt="Icon"
              width={24}
              height={24}
              className="rounded-full"
            />
            <span>Ask Kroolo AI to write anything...</span>
          </div>

          <div className="bg-gray-900 px-6 py-3 rounded-md text-purple-400 text-lg font-medium cursor-pointer hover:bg-gray-700">
            Use Kroolo AI
          </div>

          <div className="bg-gray-800 p-4 rounded-md text-sm">
            <p className="text-purple-400 font-semibold">Introducing</p>
            <p className="text-lg font-bold">Voice Prompting</p>
            <div className="flex space-x-2 mt-2">
              <button className="bg-gray-700 p-2 rounded-md">
                <span className="sr-only">Microphone</span>
                🎤
              </button>
              <button className="bg-gray-700 p-2 rounded-md">
                <span className="sr-only">Record</span>
                ⏺️
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4">
            <button className="bg-purple-500 px-4 py-2 rounded-md font-semibold text-black">
              Re-generate
            </button>
            <button className="bg-gray-700 px-4 py-2 rounded-md font-semibold text-white">
              Make longer
            </button>
            <button className="bg-gray-700 px-4 py-2 rounded-md font-semibold text-white">
              Make shorter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

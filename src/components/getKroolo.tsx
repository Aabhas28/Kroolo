import React from 'react'
import { Button } from './ui/button'

const getKroolo = () => {
  return (
    <div>
      
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <div className="flex flex-col items-center gap-[20px] lg:flex-row lg:justify-center lg:gap-20 xl:gap-[200px]">
        {/* Logo Section */}
        <div className="relative w-64 h-64 md:w-[400px] md:h-[400px] flex-shrink-0">
          <div className="absolute inset-0 flex items-center justify-center">
            <img src='https://kroolo.com/_next/static/media/ad-logo.e739eab4.svg' alt='img' />
          </div>
        </div>

        {/* Content Section */}
        <div className="flex max-w-[520px] flex-col items-center space-y-2.5 text-center lg:block lg:space-y-8 lg:text-start xl:space-y-12">
          <h2 className="font-inter text-[32px] font-normal leading-[48px] lg:leading-[60px] xl:text-[40px]">
            Get Kroolo, Your Smart Productivity Powerhouse!
          </h2>
          <p className="text-xl md:text-2xl text-gray-400">
            Start for Free. Upgrade anytime!
          </p>
          <Button 
            size="lg" 
            className="bg-white text-black hover:bg-gray-200 text-lg px-8 py-6 rounded-full"
          >
            Get started
          </Button>
        </div>
      </div>
    </div>


    </div>
  )
}

export default getKroolo


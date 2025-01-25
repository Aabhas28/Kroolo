
function CompL3() {
    return (
      <div className="min-h-screen ">
        <div className="container mx-auto px-4 py-16">
          <div className="flex items-start gap-4 overflow-hidden xlg:gap-8 xl:gap-4 flex-col lg:flex-row-reverse ">
            {/* Left side - Image */}
            <div className="relative h-fit w-full xl:w-[70%]">
                <div className='relative z-10 w-full xl:h-[540px]'>
              <img 
                src="https://kroolo.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffeatures-black1.e7692a2c.png&w=3840&q=75"
                alt="Team collaboration" 
                className="relative z-10 w-full xl:h-[540px]"
              />
              </div>
            </div>
            <div className="w-full xlg:w-[45%] xl:w-[30%]">
              <div className="mb-6">
                <div className=" min-w-9 max-w-9 h-9 lg:min-w-12 lg:max-w-12 lg:h-12  border border-[#E2E2E2] rounded-[6px] flex items-center justify-center">
                  <img src='https://kroolo.com/_next/static/media/explore-ai-icon%20(4).b6dd7352.svg' alt='img' />
                </div>
                <h1 className=" text-[20px] xl:text-2xl font-inter text-white leading-[46px] xl:leading-[60px]">
                Create Docs in 8 seconds
                </h1>
                <p className="font-inter text-[15px] font-normal leading-6 lg:text-[18px] lg:leading-[30px]">
                Prompt AI to create docs or wikis in seconds. Tag it and use.                </p>
              </div>
            </div>
            
            
            {/* Right side - Content */}
            
          </div>
        </div>
      </div>
    );
  }
  
  export default CompL3;
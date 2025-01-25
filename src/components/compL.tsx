
function CompL() {
    return (
      <div className="min-h-screen ">
        <div className="container mx-auto px-4 py-16">
          <div className="flex items-start gap-4 overflow-hidden xlg:gap-8 xl:gap-4 flex-col lg:flex-row-reverse ">
            {/* Left side - Image */}
            <div className="w-full xlg:w-[45%] xl:w-[30%]">
              <div className="mb-6">
                <div className=" min-w-12 max-w-12 h-9 lg:min-w-16 lg:max-w-116 lg:h-8  border border-[#E2E2E2] rounded-[6px] flex items-center justify-center">
                  <img src='https://kroolo.com/_next/static/media/explore-ai-icon%20(1).8f666219.svg' alt='img' />
                </div>
                <h1 className=" text-[20px] xl:text-2xl font-inter text-white leading-[46px] xl:leading-[60px]">
                  Seamless Collaboration
                </h1>
                <p className="font-inter text-[15px] font-normal leading-6 lg:text-[18px] lg:leading-[30px]">
                Assign tasks to multiple assignees to facilitate seamless collaboration at the same time.
                </p>
              </div>
            </div>
            <div className="relative h-fit w-full xl:w-[70%]">
                <div className='relative z-10 w-full xl:h-[540px]'>
              <img 
                src="https://kroolo.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffeatures-black4.f78a6c89.png&w=3840&q=75"
                alt="Team collaboration" 
                className="relative z-10 w-full xl:h-[540px]"
              />
              </div>
            </div>
            
            {/* Right side - Content */}
            
          </div>
        </div>
      </div>
    );
  }
  
  export default CompL;
import React from 'react';

function ComptL1() {
  return (
    <div className="relative my-[40px] p-4 flex flex-col items-start gap-8 border-[#4E4E4E] after:absolute after:left-1/2 after:top-0 after:hidden after:h-full after:w-[0.5px] after:-translate-x-1/2 after:bg-[#4E4E4E] lg:my-20 lg:flex-row lg:gap-4 xlg:gap-14 xl:my-[120px] xl:gap-[195px] xl:border-y-[0.5px] xl:after:block 2xl:my-[190px]">
      {/* Text Content Section */}
      <section className="flex flex-1 flex-col gap-6 xl:my-10 xl:gap-8 2xl:my-20 2xl:gap-y-14">
        <div className="w-full">
          <div className="space-y-3.5 xl:space-y-5">
            <div className="flex items-center gap-4 xl:gap-10">
              <div className="min-w-9 max-w-9 h-9 lg:min-w-12 lg:max-w-12 lg:h-12 border border-[#E2E2E2] rounded-[6px] flex items-center justify-center">
                <img src="https://kroolo.com/_next/static/media/explore-ai-icon%20(3).338bb010.svg" alt="icon" />
              </div>
              <div className="text-[20px] xl:text-2xl font-inter text-white leading-[46px] xl:leading-[60px]">
                Project templates
              </div>
            </div>
            <p className="font-inter text-[15px] font-normal leading-6 lg:text-[18px] lg:leading-[30px]">
              100s of project templates at your disposal to build custom projects from scratch.
            </p>
          </div>
        </div>
        <div className="relative h-[300px] w-full xl:h-[540px]">
          <div className="relative z-10 h-full w-full xlg:w-fit xl:w-full">
            <img
              src="https://kroolo.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffeatures-black2.636b604f.png&w=1920&q=75"
              alt="feature"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="explore--ai--gradient--two absolute -bottom-3 left-0 z-30 h-[20%] w-full xl:-bottom-10 xl:h-[40%]" />
        </div>
      </section>

      {/* Image Section */}
      <section className="flex flex-1 flex-col gap-6 xl:my-10 xl:gap-8 2xl:my-20 2xl:gap-y-14">
        <div className="w-full">
          <div className="space-y-3.5 xl:space-y-5">
            <div className="flex items-center gap-4 xl:gap-10">
              <div className="min-w-9 max-w-9 h-9 lg:min-w-12 lg:max-w-12 lg:h-12 border border-[#E2E2E2] rounded-[6px] flex items-center justify-center">
                <img src="https://kroolo.com/_next/static/media/explore-ai-icon%20(3).338bb010.svg" alt="icon" />
              </div>
              <div className="text-[20px] xl:text-2xl font-inter text-white leading-[46px] xl:leading-[60px]">
                Project templates
              </div>
            </div>
            <p className="font-inter text-[15px] font-normal leading-6 lg:text-[18px] lg:leading-[30px]">
              100s of project templates at your disposal to build custom projects from scratch.
            </p>
          </div>
        </div>
        <div className="relative h-[300px] w-full xl:h-[540px]">
          <div className="relative z-10 h-full w-full xlg:w-fit xl:w-full">
            <img
              src="https://kroolo.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffeatures-black3.a609bd42.png&w=1920&q=75"
              alt="feature"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="explore--ai--gradient--two absolute -bottom-3 left-0 z-30 h-[20%] w-full xl:-bottom-10 xl:h-[40%]" />
        </div>
      </section>
    </div>
  );
}

export default ComptL1;

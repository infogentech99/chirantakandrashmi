"use client";

export default function LadkiEvents() {
  return (
 <div
      id="itinerary"
      className="flex scroll-mt-6 flex-col justify-center mt-20 lg:mt-40 items-center"
    >
      <p className="md:text-2xl text-[16px] text-[#BC610A] font-cormorant-garamond">
        Three days of celebration
      </p>
      <h2
        className="text-[#BC610A] font-cormorant-garamond text-center
            md:text-5xl text-[30px] lg:text-[80px] leading-tight mt-2 font-semibold"
      >
        Wedding Events
      </h2>

      <h2 className="text-white bg-[#BC610A] font-cormorant-garamond text-[20px] md:text-xl lg:text-[30px] mt-5 border px-8 py-2 rounded-xl">
        Monday, 30th November 2026
      </h2>
      <div className="relative flex flex-col overflow-hidden bg-[url('/assets/welcome.webp')] bg-no-repeat bg-cover bg-center rounded-2xl lg:py-12 lg:px-20 px-6 py-6 md:mt-20 mt-6">
        {/* Blackish Overlay */}

        <div className="absolute inset-0 bg-black/70 rounded-2xl"></div>

        {/* Content */}

        <div className="relative z-10">
          <h2 className="text-[#F6EFE2] font-cormorant-garamond text-[28px] md:text-2xl lg:text-[50px]">
            Welcome Dinner
          </h2>

          <p className="text-[#F6EFE2] font-cormorant-garamond text-[16px] md:text-base mt-2">
            7:00 pm onwards
          </p>

          <p className="text-[#F6EFE2] font-cormorant-garamond text-sm md:text-base mt-2">
            <span className="text-[15px] md:text-base lg:text-xl font-cormorant-garamond font-semibold">
              Holymont Resort
            </span>
            <br />
            NH 8, Leelera, Kotri Ka Dhana, Rajasthan 313202
          </p>

          <a
            href="https://maps.app.goo.gl/xzAuofL2wKb5jVaY6"
            className="text-[#F6EFE2] underline md:text-sm text-[13px] mt-2 font-cormorant-garamond"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Location
          </a>
        </div>
      </div>

      <div className="flex items-center w-full mt-16 mb-13">
        <div className="flex-1">
          <div className="border-t-2 border-[#BC610A]" />
          <div className="border-t border-[#BC610A] mt-1" />
        </div>

        <span className="mx-4 text-[#BC610A] text-lg">✦</span>

        <div className="flex-1">
          <div className="border-t-2 border-[#BC610A]" />
          <div className="border-t border-[#BC610A] mt-1" />
        </div>
      </div>

      <h2 className="font-cormorant-garamond text-[20px] md:text-xl lg:text-[30px] border px-8 py-2 rounded-xl text-white bg-[#BC610A]">
        Tuesday, 1st December 2026
      </h2>

      <div className="flex flex-col relative  overflow-hidden bg-[url('/assets/haldi_n.webp')] bg-no-repeat bg-cover bg-center rounded-2xl lg:py-12 lg:px-20 px-6 py-6 md:mt-20 mt-8">
        <div className="absolute inset-0 bg-black/70 rounded-2xl"></div>
        <div className="relative z-10">
          <h2 className="text-[#F6EFE2] font-cormorant-garamond text-[28px] md:text-2xl lg:text-[50px] leading-8">
            Haldi
          </h2>
          <p className="text-[#F6EFE2]  font-cormorant-garamond text-[16px] md:text-base mt-2">
            11:00 am onwards
          </p>

          <p className="text-[#F6EFE2]  font-cormorant-garamond text-sm md:text-base mt-2">
            <span className="text-[15px] md:text-base lg:text-xl  font-cormorant-garamond font-semibold">
              Holymont Resort
            </span>
            <br />
            NH 8, Leelera, Kotri Ka Dhana, Rajasthan 313202
          </p>

          <a
            href="https://maps.app.goo.gl/xzAuofL2wKb5jVaY6"
            className="text-[#F6EFE2] underline md:text-sm text-[13px] mt-2  font-cormorant-garamond"
            target="_blank"
          >
            View Location
          </a>
        </div>
      </div>

      <div className="flex flex-col relative  overflow-hidden bg-[url('/assets/sangeet_n.webp')] bg-no-repeat bg-cover bg-center rounded-2xl lg:py-12 lg:px-20 px-6 py-6 md:mt-20 mt-8">
        <div className="absolute inset-0 bg-black/70 rounded-2xl"></div>
        <div className="relative z-10">
          <h2 className="text-[#F6EFE2] font-cormorant-garamond text-[28px] md:text-2xl lg:text-[50px]">
            Sangeet
          </h2>
          <p className="text-[#F6EFE2]  font-cormorant-garamond text-[16px] md:text-base mt-2">
            7:00 pm onwards
          </p>

          <p className="text-[#F6EFE2]  font-cormorant-garamond text-sm md:text-base mt-2">
            <span className="text-[15px] md:text-base lg:text-xl  font-cormorant-garamond font-semibold">
              Holymont Resort
            </span>
            <br />
            NH 8, Leelera, Kotri Ka Dhana, Rajasthan 313202
          </p>

          <a
            href="https://maps.app.goo.gl/xzAuofL2wKb5jVaY6"
            className="text-[#F6EFE2] underline md:text-sm text-[13px] mt-2  font-cormorant-garamond"
            target="_blank"
          >
            View Location
          </a>
        </div>
      </div>

      <div className="flex items-center w-full mt-16 mb-13">
        <div className="flex-1">
          <div className="border-t-2 border-[#BC610A]" />
          <div className="border-t border-[#BC610A] mt-1" />
        </div>

        <span className="mx-4 text-[#BC610A] text-lg">✦</span>

        <div className="flex-1">
          <div className="border-t-2 border-[#BC610A]" />
          <div className="border-t border-[#BC610A] mt-1" />
        </div>
      </div>

      <h2 className="font-cormorant-garamond text-[20px] md:text-xl lg:text-[30px] border px-6 py-2 rounded-xl text-white bg-[#BC610A]">
        Wednesday, 2nd December 2026
      </h2>

      <div className="flex flex-col relative  overflow-hidden bg-[url('/assets/mayra.webp')] bg-no-repeat bg-cover bg-center rounded-2xl lg:py-12 lg:px-20 px-6 py-6 md:mt-20 mt-8">
        <div className="absolute inset-0 bg-black/70 rounded-2xl"></div>
        <div className="relative z-10">
          <h2 className="text-[#F6EFE2] font-cormorant-garamond text-[28px] md:text-2xl lg:text-[50px]">
            Mayra
          </h2>
          <p className="text-[#F6EFE2]  font-cormorant-garamond text-[16px] md:text-base mt-2">
            9:00 am onwards
          </p>

          <p className="text-[#F6EFE2]  font-cormorant-garamond text-sm md:text-base mt-2">
            <span className="text-[15px] md:text-base lg:text-xl  font-cormorant-garamond font-semibold">
              Holymont Resort
            </span>
            <br />
            NH 8, Leelera, Kotri Ka Dhana, Rajasthan 313202
          </p>

          <a
            href="https://maps.app.goo.gl/xzAuofL2wKb5jVaY6"
            className="text-[#F6EFE2] underline md:text-sm text-[13px] mt-2  font-cormorant-garamond"
            target="_blank"
          >
            View Location
          </a>
        </div>
      </div>



       <div className="flex flex-col relative  overflow-hidden bg-[url('/assets/wedding.webp')] bg-no-repeat bg-cover bg-center rounded-2xl lg:py-12 lg:px-20 px-6 py-6 md:mt-20 mt-8">
        <div className="absolute inset-0 bg-black/70 rounded-2xl"></div>
        <div className="relative z-10">
        <h2 className="text-[#F6EFE2] font-cormorant-garamond text-[28px] md:text-2xl lg:text-[50px]">
          Wedding
        </h2>
        <p className="text-[#F6EFE2]  font-cormorant-garamond text-[16px] md:text-base mt-2">
          4:30 pm onwards
        </p>

        <p className="text-[#F6EFE2]  font-cormorant-garamond text-sm md:text-base mt-2">
          <span className="text-[15px] md:text-base lg:text-xl  font-cormorant-garamond font-semibold">
            Holymont Resort
          </span>
          <br />
          NH 8, Leelera, Kotri Ka Dhana, Rajasthan 313202
        </p>

        <a
          href="https://maps.app.goo.gl/xzAuofL2wKb5jVaY6"
          className="text-[#F6EFE2] underline md:text-sm text-[13px] mt-2  font-cormorant-garamond"
          target="_blank"
        >
          View Location
        </a>
      </div>
      </div>
    </div>
  );
}

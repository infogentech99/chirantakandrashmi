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

      <h2 className="text-white bg-[#BC610A] font-cormorant-garamond text-[20px] md:text-xl lg:text-[30px] mt-5 border px-6 py-2 rounded-xl">
        Monday, 30th November 2026
      </h2>
      <div className="relative flex flex-col text-center overflow-hidden rounded-2xl min-h-[400px] md:min-h-[600px] px-10 py-3 md:px-25 md:mt-20 mt-8">
        <div className="absolute inset-0 bg-[url('/assets/welcome_event.webp')] bg-cover bg-center bg-no-repeat"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col md:mt-15 mt-10">
          <h2 className="text-[#702B36] font-cormorant-garamond text-[28px] md:text-2xl lg:text-[50px] leading-8">
            Welcome <br />
            Dinner
          </h2>

          <p className="text-[#702B36] font-cormorant-garamond text-[16px] md:text-base mt-2">
            7:00 pm onwards
          </p>

          <p className="text-[#702B36] font-cormorant-garamond text-sm md:text-base mt-2">
            <span className="text-[15px] md:text-base lg:text-xl font-cormorant-garamond font-semibold">
              Holymont Resort
            </span>
            <br />
            NH 8, Leelera, Kotri Ka Dhana, <br/>Rajasthan 313202
          </p>

          <a
            href="https://maps.app.goo.gl/xzAuofL2wKb5jVaY6"
            className="text-[#702B36] underline md:text-sm text-[13px] mt-2 font-cormorant-garamond"
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

      <div className="relative flex flex-col text-center overflow-hidden rounded-2xl min-h-[400px] md:min-h-[600px] px-10 md:px-25 py-5 md:mt-20 mt-8">
        <div className="absolute inset-0 bg-[url('/assets/haldi_event.webp')] bg-cover bg-center bg-no-repeat"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col md:mt-15 mt-5">
          <h2 className="text-[#BC610A] font-cormorant-garamond text-[32px] md:text-4xl lg:text-[50px] leading-tight">
            Haldi
          </h2>

          <p className="text-[#BC610A] font-cormorant-garamond text-base md:text-lg mt-3">
            11:00 am onwards
          </p>

          <p className="text-[#BC610A] font-cormorant-garamond text-sm md:text-base mt-3">
            <span className="text-lg md:text-xl font-semibold">
              Holymont Resort
            </span>
            <br />
            NH 8, Leelera, Kotri Ka Dhana,
            <br />
            Rajasthan 313202
          </p>

          <a
            href="https://maps.app.goo.gl/xzAuofL2wKb5jVaY6"
            className="text-[#BC610A] underline text-sm mt-2 font-cormorant-garamond"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Location
          </a>
        </div>
      </div>

      <div className="relative flex flex-col text-center overflow-hidden rounded-2xl min-h-[400px] md:min-h-[600px] px-10 md:px-25 py-3 md:mt-20 mt-8">
        <div className="absolute inset-0 bg-[url('/assets/sangeet_event.webp')] bg-cover bg-center bg-no-repeat"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col md:mt-15 mt-10">
          <h2 className="text-[#702B36] font-cormorant-garamond text-[28px] md:text-2xl lg:text-[50px]">
            Sangeet
          </h2>
          <p className="text-[#702B36]  font-cormorant-garamond text-[16px] md:text-base mt-2">
            7:00 pm onwards
          </p>

          <p className="text-[#702B36]  font-cormorant-garamond text-sm md:text-base mt-2">
            <span className="text-[15px] md:text-base lg:text-xl  font-cormorant-garamond font-semibold">
              Holymont Resort
            </span>
            <br />
            NH 8, Leelera, Kotri Ka Dhana, <br/> Rajasthan 313202
          </p>

          <a
            href="https://maps.app.goo.gl/xzAuofL2wKb5jVaY6"
            className="text-[#702B36] underline md:text-sm text-[13px] mt-2  font-cormorant-garamond"
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

      <div className="relative flex flex-col text-center overflow-hidden rounded-2xl min-h-[400px] md:min-h-[600px] px-8 py-0 md:px-25 md:mt-20 mt-8">
        <div className="absolute inset-0 bg-[url('/assets/mayra_event.webp')] bg-cover bg-center bg-no-repeat"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col md:mt-15 mt-15 ml-5">
          <h2 className="text-[#702B36] font-cormorant-garamond text-[28px] md:text-2xl lg:text-[50px]">
            Mayra
          </h2>
          <p className="text-[#702B36]  font-cormorant-garamond text-[16px] md:text-base mt-2">
            9:00 am onwards
          </p>

          <p className="text-[#702B36]  font-cormorant-garamond text-sm md:text-base mt-2">
            <span className="text-[15px] md:text-base lg:text-xl  font-cormorant-garamond font-semibold">
              Holymont Resort
            </span>
            <br />
            NH 8, Leelera, Kotri Ka Dhana, <br/>Rajasthan 313202
          </p>

          <a
            href="https://maps.app.goo.gl/xzAuofL2wKb5jVaY6"
            className="text-[#702B36] underline md:text-sm text-[13px] mt-2  font-cormorant-garamond"
            target="_blank"
          >
            View Location
          </a>
        </div>
      </div>

      <div className="relative flex flex-col text-center overflow-hidden rounded-2xl min-h-[400px] md:min-h-[600px] px-10 py-0 md:px-25 md:mt-20 mt-8">
        <div className="absolute inset-0 bg-[url('/assets/wedding_event.webp')] bg-cover bg-center bg-no-repeat"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col md:mt-15 mt-15">
          <h2 className="text-[#702B36] font-cormorant-garamond text-[28px] md:text-2xl lg:text-[50px]">
            Wedding
          </h2>
          <p className="text-[#702B36]  font-cormorant-garamond text-[16px] md:text-base mt-2">
            4:30 pm onwards
          </p>

          <p className="text-[#702B36]  font-cormorant-garamond text-sm md:text-base mt-2">
            <span className="text-[15px] md:text-base lg:text-xl  font-cormorant-garamond font-semibold">
              Holymont Resort
            </span>
            <br />
            NH 8, Leelera, Kotri Ka Dhana, <br/> Rajasthan 313202
          </p>

          <a
            href="https://maps.app.goo.gl/xzAuofL2wKb5jVaY6"
            className="text-[#702B36] underline md:text-sm text-[13px] mt-2  font-cormorant-garamond"
            target="_blank"
          >
            View Location
          </a>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";

import Celebration from "./components/Celebration";
import Memories from "./components/Memories";

export default function Home() {
  const TARGET_DATE = new Date("2026-12-05").getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 14,
    hours: 12,
    minutes: 28,
    seconds: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const diff = TARGET_DATE - now;

      if (diff <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));

      const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );

      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
      });
    };

    updateCountdown();

    // Update every second
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* <button
        onClick={() => {
          started ? toggleMusic() : startMusic();
        }}
        className="fixed bottom-4 right-4 z-50 bg-[#FF35A1] text-white p-3 rounded-xl text-xl"
      >
        {playing ? "⏸" : "▶"}
      </button> */}

      {/* <audio
        ref={audioRef}
        src="/assets/song.mp3"
        loop
        preload="auto"
        playsInline
      /> */}

      {/* hero section */}

      <div className="relative w-full overflow-hidden bg-[url('/assets/main_bg.webp')]">
        <img
          src="/assets/hero-image.webp"
          alt="Wedding couple"
          className="block w-full h-auto"
        />

        <div className="absolute inset-x-0 top-0 md:top-10 lg:top-30 3xl:top-50 flex flex-col items-center text-center">
          <h2 className=" mt-6 lg:mt-16 flex flex-col items-center justify-center text-[#7D4E4E] text-2xl md:text-5xl lg:text-[80px]">
            <span className="font-parisienne-regular italic">Daniel</span>

            <span className="font-bodoni-moda text-base md:text-2xl lg:text-[38px] italic">
              Weds
            </span>

            <span className="font-parisienne-regular italic">Grace</span>
          </h2>
        </div>

        <div className=" top-10 md:top-20  flex flex-col items-center text-center md:mt-40 lg:mt-70 3xl:mt-90 mt-30">
          <p className="text-[#7D4E4E] tracking-wider text-4xl md:text-5xl 3xl:text-7xl font-cormorant-garamond">
            Welcome
          </p>

          <p className="text-[#7D4E4EE5] text-xl md:text-2xl lg:text-3xl 3xl:text-5xl px-12 max-w-200 font-cormorant-garamond mt-2 md:mt-6">
            TO OUR WEDDING
          </p>


<img
            src="/assets/icon.webp"
            alt="icon"
            className="md:w-1/8 w-1/4 md:mt-8 mt-4" 
          />


          <p className="text-[#2E382E] text-[14px] md:text-[20px] lg:text-[24px] 3xl:text-2xl px-12 max-w-200 mt-7 font-cormorant-garamond ">
            We have been looking forward to celebrating our marriage with you,
            surrounded by those we love.
          </p>

          <img
            src="/assets/story_image.webp"
            alt="icon"
            className=" object-contain mb-5 mt-12"
          />

          <div className="flex flex-col items-center justify-center lg:mt-50 3xl:mt-60 md:mt-40 md:mb-20 mb-12 mt-18">
            <img
            src="/assets/icon2.webp"
            alt="icon"
            className="md:w-1/8 w-1/6" 
          />
            <p className="text-[#7D4E4E] tracking-wider text-4xl md:text-5xl 3xl:text-7xl font-cormorant-garamond md:mt-6 mt-3">
              Countdown
            </p>
          </div>

          <div className="bg-[url('/assets/countdown_bg.webp')] bg-cover bg-no-repeat md:w-180 md:h-70 lg:w-230 lg:h-88 w-90  h-35 md:mb-30 mb-16 object-contain ">
            <div className="flex md:gap-45 lg:gap-58 3xl:gap-54 gap-19 justify-center items-center mt-10 md:mt-24 lg:mt-32 3xl:mt-32 md:ml-5 lg:ml-0">
              <div className="">
                <h2 className="text-[28px] md:text-5xl lg:text-[60px] 3xl:text-7xl text-center text-[#2E382E] font-cormorant-garamond">
                  {timeLeft.days}
                </h2>
                <h2 className="text-[10px] md:text-[15px] lg:text-[15px] text-center text-black font-cormorant-garamond uppercase">
                  Days
                </h2>
              </div>
              <div className="">
                <h2 className="text-[28px] md:text-5xl lg:text-[60px] 3xl:text-7xl text-center text-[#2E382E] font-cormorant-garamond">
                  {timeLeft.hours}
                </h2>
                <h2 className="text-[10px] md:text-[15px] lg:text-[15px] text-center text-black font-cormorant-garamond uppercase">
                  Hours
                </h2>
              </div>
              <div className="">
                <h2 className="text-[28px] md:text-5xl lg:text-[60px] 3xl:text-7xl text-center text-[#2E382E] font-cormorant-garamond">
                  {timeLeft.minutes}
                </h2>
                <h2 className="text-[10px] md:text-[15px] lg:text-[15px] text-center text-black font-cormorant-garamond uppercase">
                  Minutes
                </h2>
              </div>
              {/* <div className="">
                <h2 className="text-[20px] md:text-4xl lg:text-[52px] text-center text-[#2E382E] font-cormorant-garamond">
                  {timeLeft.seconds}
                </h2>
                <h2 className="text-[10px] md:text-2xl lg:text-[15px] text-center text-black font-cormorant-garamond uppercase">
                  Seconds
                </h2>
              </div> */}
            </div>
          </div>
           <img
            src="/assets/icon2.webp"
            alt="icon"
            className="lg:w-1/14 md:w-1/8 w-1/6" 
          />
          <p className="text-[#2E382E] text-[14px] md:text-[20px] lg:text-[24px] 3xl:text-2xl px-12 max-w-200 mt-6 font-cormorant-garamond ">
            Soon, the wait will turn into memories as we gather together to
            celebrate the beginning of our forever.
          </p>
           <img
            src="/assets/icon2.webp"
            alt="icon"
            className="lg:w-1/14 md:w-1/8 w-1/6 lg:mt-8 mt-6" 
          />
          <img
            src="/assets/coutdown_bg_bottom.webp"
            alt="icon"
            className=" object-contain mb-5"
          />

          <section className="w-full min-h-[620px] flex items-center justify-center px-6 py-16">
            <div className="w-full max-w-5xl mx-auto text-center text-[#4d4039]">
              {/* Top Heading */}
              <p className="text-[11px] md:text-[18px] lg:text-[20px] 3xl:text-[24px] tracking-[2px] uppercase  font-cormorant-garamond">
                Together With Their Families
              </p>

              <div className="mt-3 text-[#9b755f] text-xs">✦</div>

              {/* Parents + Couple */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-8 md:gap-12">
                {/* Groom Parents */}
                <div className="text-center">
                  <p className="text-[13px] md:text-[16px] lg:text-[18px] 3xl:text-[20px] tracking-[1.5px] uppercase text-[#725B25] font-cormorant-garamond">
                    Son Of
                  </p>

                  <p className="mt-1 text-[13px] md:text-[16px] lg:text-[18px] 3xl:text-[20px] tracking-[1.3px] uppercase  font-cormorant-garamond">
                    Mr. Michael Anderson
                  </p>

                  <p className="my-1 text-[12px]  font-cormorant-garamond">&</p>

                  <p className="text-[13px] md:text-[16px] lg:text-[18px] 3xl:text-[20px] tracking-[1.3px] uppercase  font-cormorant-garamond">
                    Mrs. Elizabeth Anderson
                  </p>
                </div>

                {/* Couple */}
                <div className="flex flex-col items-center">
                  <h1 className="text-[45px] md:text-[58px] leading-none text-[#805b50] font-parisienne-regular">
                    Daniel
                  </h1>

                  <p className="mt-4 text-[12px] md:text-[14px] tracking-[4px] uppercase  font-cormorant-garamond">
                    Weds
                  </p>

                  <h1 className="mt-3 text-[45px] md:text-[58px] leading-none text-[#805b50] font-parisienne-regular">
                    Grace
                  </h1>
                </div>

                {/* Bride Parents */}
                <div className="text-center">
                  <p className="text-[13px] md:text-[16px] lg:text-[18px] 3xl:text-[20px] tracking-[1.5px] uppercase  text-[#725B25] font-cormorant-garamond">
                    Daughter Of
                  </p>

                  <p className="mt-1 text-[13px] md:text-[16px] lg:text-[18px] 3xl:text-[20px] tracking-[1.3px] uppercase  font-cormorant-garamond">
                    Mr. William Carter
                  </p>

                  <p className="my-1 text-[12px]  font-cormorant-garamond">&</p>

                  <p className="text-[13px] md:text-[16px] lg:text-[18px] 3xl:text-[20px] tracking-[1.3px] uppercase  font-cormorant-garamond">
                    Mrs. Sophia Carter
                  </p>
                </div>
              </div>

              {/* Invitation Text */}
              <p className="mt-10 text-[13px] md:text-[16px] lg:text-[18px] 3xl:text-[20px] italic text-[#76655d]  font-cormorant-garamond">
                invite you to celebrate their marriage
              </p>

              {/* Date */}
              <div className="mt-10">
                <p className="text-[12px] md:text-[14px] lg:text-[15px] 3xl:text-[17px] tracking-[2px] text-[#725B25] uppercase  font-cormorant-garamond">
                  Saturday
                </p>

                <p className="mt-2 text-[18px] md:text-[21px] tracking-[1px]  font-cormorant-garamond text-[#302a27]">
                  12 June 2027
                </p>

                <p className="mt-1 text-[9px] md:text-[12px] tracking-[2px] uppercase  font-cormorant-garamond">
                  At 6:00 PM Onwards
                </p>
              </div>

              {/* Venue */}
              <div className="mt-8">
                <p className="text-[14px] md:text-[16px] lg:text-[17px] 3xl:text-[19px] tracking-[2px] uppercase  font-cormorant-garamond">
                  Villa Dapos;Este
                </p>

                <p className="mt-1 text-[12px] text-[#725B25] md:text-[14px] lg:text-[15px] 3xl:text-[17px] tracking-[1.8px] uppercase  font-cormorant-garamond">
                  Lake Como, Italy
                </p>
              </div>
            </div>
          </section>

          <img
            src="/assets/ornate.webp"
            alt="icon"
            className=" object-contain"
          />
        </div>
      </div>
      <Celebration />

      <Memories />
    </>
  );
}

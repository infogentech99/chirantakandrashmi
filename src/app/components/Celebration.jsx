"use state";
import { useEffect, useState } from "react";
export default function Celebration() {
  const events = [
    {
      icon: "/assets/enagement_icon.png",
      title: "Engagement Celebration",
      date: "October 12th, 2024",
      time: "11:00 AM — 3:00 PM",
      location: "The Rose Garden, Fairmont Palace",
      description:
        "An afternoon of henna, folk music, and vibrant colors amidst the blooming roses.",
    },
    {
      icon: "/assets/enagement_icon.png",
      title: "Engagement Celebration",
      date: "October 12th, 2024",
      time: "11:00 AM — 3:00 PM",
      location: "The Rose Garden, Fairmont Palace",
      description:
        "An afternoon of henna, folk music, and vibrant colors amidst the blooming roses.",
    },

    {
      icon: "/assets/enagement_icon.png",
      title: "Engagement Celebration",
      date: "October 12th, 2024",
      time: "11:00 AM — 3:00 PM",
      location: "The Rose Garden, Fairmont Palace",
      description:
        "An afternoon of henna, folk music, and vibrant colors amidst the blooming roses.",
    },

    {
      icon: "/assets/enagement_icon.png",
      title: "Engagement Celebration",
      date: "October 12th, 2024",
      time: "11:00 AM — 3:00 PM",
      location: "The Rose Garden, Fairmont Palace",
      description:
        "An afternoon of henna, folk music, and vibrant colors amidst the blooming roses.",
    },
  ];
  return (
    <div className="bg-[url('/assets/main_bg.webp')] bg-no-repeat bg-cover pt-6 md:pt-14 flex flex-col items-center justify-center ">
      <img
        src="/assets/celebration_top.webp"
        alt="icon"
        className="object-contain "
      />
      <p className="text-[#494740] tracking-widest text-[13px] md:text-[16px] lg:text-[18px] 3xl:text-[20px] font-cormorant-garamond ">
        JOIN US FOR OUR
      </p>
      <h1 className="md:mt-10 mt-2 font-bona-nova text-[#7D4E4E] tracking-wider text-4xl md:text-5xl 3xl:text-7xl font-cormorant-garamond leading-16  ">
        Wedding Celebration
      </h1>

      <p className="text-[#2E382E] text-[14px] md:text-[20px] lg:text-[24px] 3xl:text-xl px-12 font-cormorant-garamond md:mt-6 mt-2 text-center ">
        A DAY FILLED WITH LOVE, LAUGHTER AND TOGETHERNESS
      </p>

      <p className="text-[#2C2B29] text-[15px] md:text-[16px] lg:text-[24px] 3xl:text-2xl px-12 font-jost md:mt-6 mt-2  font-cormorant-garamond">
        VILLA D’ESTE
      </p>

      <p className="text-[#725B25] text-[15px] md:text-[16px] lg:text-[24px] 3xl:text-2xl px-12 font-jost md:mt-2 mt-2  font-cormorant-garamond">
        LAKE COMO, ITALY
      </p>

      <p className="text-[#5A5854] text-[14px] md:text-[16px] px-12 font-jost md:mt-6 mt-2  font-cormorant-garamond">
        SATURDAY
      </p>

      <p className="text-[#2C2B29] text-[15px] md:text-[16px] lg:text-[24px] px-12 font-jost md:mt-2 mt-1  font-cormorant-garamond">
        12 June 2027
      </p>

      <section className="w-full px-5 py-12 md:py-16">
        <div className="max-w-3xl mx-auto">
          {/* Events Card */}
          <div className="w-full border border-[#ded6c8] bg-white/50 px-6 py-8 md:px-10 md:py-9">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Ceremony */}
              <div className="text-center md:border-r md:border-[#ded6c8] md:pr-8">
                {/* Icon */}
                <div className="flex justify-center mb-3">
                  <span className="text-[#856b32] text-[20px]">♧</span>
                </div>

                <h3 className="font-serif text-[18px] md:text-[20px] tracking-[4px] text-[#34302c]">
                  CEREMONY
                </h3>

                <p className="mt-2 font-serif text-[18px] md:text-[20px] text-[#80652e]">
                  5:00 PM
                </p>

                <p className="mt-1 font-jost text-[14px] md:text-[15px] text-[#6c6a67]">
                  The Orangery Gardens
                </p>
              </div>

              {/* Reception */}
              <div className="text-center mt-8 md:mt-0 md:pl-8">
                {/* Icon */}
                <div className="flex justify-center mb-3">
                  <span className="text-[#856b32] text-[20px]">♜</span>
                </div>

                <h3 className="font-serif text-[18px] md:text-[20px] tracking-[4px] text-[#34302c]">
                  RECEPTION
                </h3>

                <p className="mt-2 font-serif text-[18px] md:text-[20px] text-[#80652e]">
                  7:00 PM
                </p>

                <p className="mt-1 font-jost text-[14px] md:text-[15px] text-[#6c6a67]">
                  The Historic Wine Cellar &amp; Terrace
                </p>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <button
              type="button"
              className="w-[207px] h-[40px] border border-[#d6cdbc] bg-white/30 font-jost text-[10px] md:text-[11px] tracking-[3px] uppercase text-[#37342f] flex items-center justify-center gap-2 transition hover:bg-white/50"
            >
              <span className="text-[#80652e] text-sm">⌖</span>
              OPEN IN MAPS
            </button>

            <button
              type="button"
              className="w-[247px] h-[40px] border border-[#d6cdbc] bg-white/30 font-jost text-[10px] md:text-[11px] tracking-[3px] uppercase text-[#37342f] flex items-center justify-center gap-2 transition hover:bg-white/50"
            >
              <span className="text-[#80652e] text-sm">□</span>
              ADD TO CALENDAR
            </button>
          </div>
        </div>
      </section>

      <img
        src="/assets/celebration_bottom.webp"
        alt="icon"
        className="object-contain mt-20 md:mt-26"
      />
      <h1 className="md:mt-4 mt-2 text-[#7D4E4E] tracking-wider text-4xl md:text-5xl 3xl:text-7xl font-cormorant-garamond">
        Attire Guide
      </h1>

      <p className="text-[#7D4E4EE5] text-xl md:text-2xl lg:text-3xl 3xl:text-5xl px-12 font-cormorant-garamond mt-2 md:mt-6">
        GARDEN FORMAL
      </p>

      <img
        src="/assets/couple_dance.webp"
        alt="icon"
        className="object-contain 3xl:px-30 mt-12"
      />

      <h1 className="md:mt-30 mt-20 text-[#7D4E4E] tracking-wider text-4xl md:text-5xl 3xl:text-7xl font-cormorant-garamond">
        Our Story
      </h1>

      <p className="text-[#2E382E] text-[13px] md:text-[18px] lg:text-[22px] 3xl:text-2xl px-4 max-w-300 mt-6 font-cormorant-garamond text-center">
        Somewhere between a simple hello and countless moments shared together,
        we found a love that felt like home. From cherished conversations and
        quiet walks to laughter, dreams, and memories we never want to forget,
        every moment has brought us closer. Now, with grateful hearts and
        endless excitement, we’re ready to begin our most beautiful chapter yet
        together.
      </p>

      <img
        src="/assets/story_bottom.webp"
        alt="icon"
        className="object-contain 3xl:px-30 px-4 3xl:mt-40 md:mt-30 mt-20"
      />

      <h1 className="md:mt-44 mt-30 text-[#7D4E4E] tracking-wider text-4xl md:text-5xl 3xl:text-7xl font-cormorant-garamond">
        Moments of the Day
      </h1>

      <div className="flex flex-col md:gap-6 lg:gap-20 items-center justify-center">
        <div className="flex flex-col items-center md:flex-row md:items-center md:justify-center mt-5 md:mt-10 lg:mt-20 gap-2 lg:gap-12">
          <img
            src="/assets/event1.webp"
            alt="tilak"
            className="w-30 h-32 md:w-42 md:h-44 lg:w-61 lg:h-65"
          />
          <div className=" flex flex-col items-center justify-center">
            <h4 className="font-eb-garamond font-medium text-xl md:text-xl lg:text-[32px] text-[#E2B441]">
              TILAK
            </h4>
            <p className="font-eb-garamond font-medium text-base md:text-base lg:text-xl text-center text-[#E1B340]">
              BLESSING HAPPINESS <br /> TO THE GROOM.
            </p>
            <p className="font-eb-garamond font-medium text-base md:text-base lg:text-xl text-[#E1B340]">
              4 PM Onwards
            </p>
          </div>
          <div className="flex justify-center items-center bg-[url('/assets/circle.webp')] bg-cover bg-no-repeat bg-center w-15 h-15 md:w-22 md:h-22 lg:w-47 lg:h-47 mt-6">
            <span className="font-eb-garamond font-normal text-center text-xs md:text-base lg:text-[52px] text-[#FFFFFF]">
              17 <br /> NOV
            </span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h4 className="font-eb-garamond font-medium text-xl md:text-xl lg:text-[32px] text-[#E2B441]">
              {" "}
              SANGEET{" "}
            </h4>
            <p className="font-eb-garamond font-medium text-base md:text-base lg:text-xl text-center text-[#E1B340]">
              DANCE TO THE BEAT <br /> OF YOUR DREAMS.
            </p>
            <p className="font-eb-garamond font-medium text-base md:text-base lg:text-xl text-[#E1B340]">
              6 PM Onwards
            </p>
          </div>
          <img
            src="/assets/sangeet.webp"
            alt="sangeet"
            className="w-35 h-33 md:w-46 md:h-44 lg:w-69 lg:h-65"
          />
        </div>
        <div className="flex flex-col items-center md:flex-row md:items-center md:justify-center mt-5 md:mt-10 gap-2 lg:gap-10">
          <img
            src="/assets/event2.webp"
            alt="haldi"
            className="w-42 h-28 md:w-50 md:h-32 lg:w-85 lg:h-56"
          />
          <div className="flex flex-col items-center justify-center">
            <h4 className="font-eb-garamond font-medium text-xl md:text-xl lg:text-[32px] text-[#E2B441]">
              HALDI
            </h4>
            <p className="font-eb-garamond font-medium text-base md:text-base lg:text-xl text-center text-[#E1B340]">
              THE WEDDING <br /> GLOW AWAITS!
            </p>
            <p className="font-eb-garamond font-medium text-base md:text-base lg:text-xl text-[#E1B340]">
              11:15 AM Onwards
            </p>
          </div>
          <div className="flex justify-center items-center bg-[url('/assets/circle.webp')] bg-cover bg-no-repeat bg-center w-15 h-15 md:w-22 md:h-22 lg:w-47 lg:h-47 mt-6">
            <span className="font-eb-garamond font-normal text-center text-xs md:text-base lg:text-[52px] text-[#FFFFFF]">
              {" "}
              18 <br /> NOV{" "}
            </span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h4 className="font-eb-garamond font-medium text-xl md:text-xl lg:text-[32px] text-[#E2B441]">
              {" "}
              MEHENDI{" "}
            </h4>
            <p className="font-eb-garamond font-medium text-base md:text-base lg:text-xl text-center text-[#E1B340]">
              LET YOUR HANDS TELL A <br /> BEAUTIFUL LOVE STORY.
            </p>
            <p className="font-eb-garamond font-medium text-base md:text-base lg:text-xl text-[#E1B340]">
              3:00 PM Onwards
            </p>
          </div>
          <img
            src="/assets/event3.webp"
            alt="mehendi"
            className="w-37 h-28 md:w-42 md:h-30 lg:w-73 lg:h-56"
          />
        </div>
        <div className="flex flex-col items-center md:flex-row md:items-center md:justify-center mt-5 md:mt-10 gap-2 lg:gap-14">
          <img
            src="/assets/event4.webp"
            alt="wedding"
            className="w-32 h-33 md:w-42 md:h-44 lg:w-63 lg:h-65"
          />
          <div className="flex flex-col items-center justify-center">
            <h4 className="font-eb-garamond font-medium text-xl md:text-xl lg:text-[32px] text-[#E2B441]">
              {" "}
              WEDDING{" "}
            </h4>
            <p className="font-eb-garamond font-medium text-base md:text-base lg:text-xl text-center text-[#E1B340]">
              READY TO TIE <br /> THE KNOT.
            </p>
            <p className="font-eb-garamond font-medium text-base md:text-base lg:text-xl text-[#E1B340]">
              7:15 PM Onwards
            </p>
          </div>
          <div className="flex justify-center items-center bg-[url('/assets/circle.webp')] bg-cover bg-no-repeat bg-center w-15 h-15 md:w-22 md:h-22 lg:w-47 lg:h-47 mt-6">
            <span className="font-eb-garamond font-normal text-center text-xs md:text-base lg:text-[52px] text-[#FFFFFF]">
              {" "}
              19 <br /> NOV{" "}
            </span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h4 className="font-eb-garamond font-medium text-xl md:text-xl lg:text-[32px] text-[#E2B441]">
              {" "}
              RECEPTION{" "}
            </h4>
            <p className="font-eb-garamond font-medium text-base md:text-base lg:text-xl text-center text-[#E1B340]">
              CELEBRATING LOVE, LAUGHTER <br /> & NEW BEGINNINGS.
            </p>
            <p className="font-eb-garamond font-medium text-base md:text-base lg:text-xl text-[#E1B340]">
              8:00 PM Onwards
            </p>
          </div>
          <img
            src="/assets/event5.webp"
            alt="reception"
            className="w-27 h-33 md:w-34 md:h-44 lg:w-53 lg:h-65"
          />
        </div>
      </div>

      <p className="text-[#2E382E] text-[14px] md:text-[16px] 3xl:text-2xl px-12 mt-16 font-cormorant-garamond   ">
        Our wedding ceremony will be held in the beautiful Orangery of Château
        de Belvent, followed by an intimate apéritif in the rose garden. As the
        evening unfolds, we’ll gather for dinner and dancing in the charming old
        wine cellar, celebrating love, laughter, and the beginning of a
        beautiful new chapter together.
      </p>
      <img
        src="/assets/moment_bg.webp"
        alt="icon"
        className=" object-contain mb-5"
      />

      <h1 className="md:mt-44 mt-2 font-bona-nova text-[30px] 3xl:text-[55px] text-[#7D4E4E] leading-16  ">
        A Day to Unwind
      </h1>
      <p className="text-[#7D4E4EE5] text-xl md:text-2xl 3xl:text-3xl px-12 font-cormorant-garamond mt-6  ">
        A QUIET DAY TOGETHER
      </p>

      <img
        src="/assets/unwind_image.webp"
        alt="icon"
        className=" object-contain mt-5"
      />

      <section className="w-full px-6 py-16 md:py-20 text-[#304139]">
        <div className="max-w-6xl mx-auto text-center">
          {/* Top Decorative Icon */}
          <div className="flex justify-center mb-10">
            <span className="text-[#87917f] text-sm">⌁</span>
          </div>

          {/* Venue Name */}
          <h2 className="font-serif text-[32px] md:text-[44px] tracking-[1px]">
            Le Comptoir des Halles
          </h2>

          {/* Subtitle */}
          <p className="mt-4 text-[12px] md:text-[14px] tracking-[5px] uppercase text-[#728276]">
            Garden Terrace
          </p>

          {/* Divider */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <span className="h-px w-24 md:w-32 bg-[#cfc8b6]" />
            <span className="text-[#b9a878] text-xs">◇</span>
            <span className="h-px w-24 md:w-32 bg-[#cfc8b6]" />
          </div>

          {/* Date */}
          <div className="mt-12">
            <h3 className="font-serif text-[24px] md:text-[29px] tracking-[1px]">
              SUNDAY · 13 JUNE 2027
            </h3>

            <p className="mt-5 text-[12px] md:text-[14px] tracking-[1.5px] uppercase text-[#718177]">
              From Twelve in the Afternoon
            </p>
          </div>

          {/* Divider */}
          <div className="flex justify-center mt-12">
            <span className="h-px w-20 md:w-28 bg-[#d4cdbb]" />
          </div>

          {/* Location */}
          <div className="mt-10">
            <p className="text-[11px] md:text-[13px] tracking-[5px] uppercase text-[#718177]">
              Join Us At
            </p>

            <p className="mt-4 font-serif text-[23px] md:text-[27px]">
              4 Rue Monge, Beaune
            </p>

            <p className="mt-3 text-[11px] md:text-[13px] tracking-[5px] uppercase text-[#718177]">
              Bourgogne, France
            </p>
          </div>

          {/* Decorative Divider */}
          <div className="flex items-center justify-center gap-4 mt-14">
            <span className="h-px w-28 md:w-40 bg-[#d4cdbb]" />

            <span className="text-[#87917f] text-lg">❧</span>

            <span className="h-px w-28 md:w-40 bg-[#d4cdbb]" />
          </div>

          {/* Description */}
          <div className="max-w-6xl mx-auto mt-12">
            <p className="font-serif text-[17px] md:text-[20px] leading-[1.8] text-[#39453f]">
              We’ll be gathering on the garden terrace of Le Comptoir des Halles
              in Beaune from 12 PM on Sunday, 13 June 2027.
              <br />
              Join us for a relaxed afternoon of delicious food, fine wine, warm
              conversations, and fond memories of the celebration.
              <br />
              We’d be delighted to have you with us, and children are warmly
              welcome.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-14">
            <button
              type="button"
              className="min-w-[205px] h-[42px] border border-[#d3cbb9] px-6 text-[10px] md:text-[11px] tracking-[3px] uppercase font-serif text-[#39433d] transition hover:bg-[#f5f0e7]"
            >
              <span className="mr-2">⌖</span>
              Open in Maps
            </button>

            <button
              type="button"
              className="min-w-[245px] h-[42px] border border-[#d3cbb9] px-6 text-[10px] md:text-[11px] tracking-[3px] uppercase font-serif text-[#39433d] transition hover:bg-[#f5f0e7]"
            >
              <span className="mr-2">▣</span>
              Add to Calendar
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

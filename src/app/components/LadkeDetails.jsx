'use client';
import { useState } from "react";
import ScratchText from "../components/ScratchText";
import MarriageCountdown from "../components/MarriageCountdown";
import Events from "../components/Events";
import Wardrobe from "../components/Wardrobe";
import PhotoGallery from "../components/PhotoGallery";
import Weather from "../components/Weather";
import Venues from "../components/Venues";

export default function LadkeDetails() {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="mx-auto w-full max-w-4xl text-center md:p-2">
      <p className="text-[17px] md:text-2xl text-[#BC610A] font-cormorant-garamond">
        With the blessings of Smt. Bhagwati Devi Dabriwal & Late Biswath Dabriwal
      </p> <br />
      <p className="text-[17px] md:text-2xl text-[#BC610A] font-cormorant-garamond">
        We cordially invite you to the wedding ceremony of their Grandson
      </p>

      <div className="mt-8 text-center">
        <h2 className="text-[#BC610A] font-pinyon-script text-center mt-14 md:text-4xl text-[38px] lg:text-[60px] leading-tight font-bold">
          Chirantak
        </h2>

        <p className="text-[#BC610A] font-cormorant-garamond lg:text-[30px] md:text-2xl mt-2 text-[16px]">
          (S/o Mr. Mahesh & Mrs. Namrata Agarwal)
        </p>

        <h2 className="text-[#BC610A] font-pinyon-script text-center text-[38px] sm:text-7xl lg:text-[60px] leading-tight font-bold">
          <span className="text-[#BC610A] font-cormorant-garamond text-center md:text-3xl text-[22px] lg:text-[36px] leading-tight font-medium">
            With
          </span>
          <br />
          Rashmi
        </h2>

        <p className="text-[#BC610A] font-cormorant-garamond lg:text-[30px] md:text-2xl mt-2 text-[16px]">
          (D/o Mr. Devendra & Mrs. Ritu Garg)
        </p>

        <ScratchText onReveal={() => setRevealed(true)} />

       {revealed && (
  <div className="countdown-fade-in">
    <MarriageCountdown />
  </div>
)}

        <Events />
        <Wardrobe />
        <PhotoGallery />
        <Weather />
        <Venues />
      </div>
    </div>
  );
}
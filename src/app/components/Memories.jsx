export default function Memories() {
  return (
    <div className="md:pt-20 pt-15 bg-[#fdf0e3] flex flex-col justify-center items-center">
      <div className="relative md:w-[412px] md:h-[640px] w-[280px] h-[450px] bg-[url('/assets/gift_bg.webp')] bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center">
        <h1 className="font-bona-nova text-[30px] md:text-[36px] 3xl:text-[36px] text-[#7D4E4E] leading-tight text-center px-20">
          Gifts & Good Wishes
        </h1>

        <p className="mt-5 text-[#667085] text-[14px] md:text-[16px] px-20 font-jost text-center leading-relaxed ">
          A collection of moments that quietly tell the story of our journey
          together.
        </p>
      </div>
      <img
        src="/assets/gift_bottom.webp"
        alt="icon"
        className=" object-contain"
      />
    </div>
  );
}

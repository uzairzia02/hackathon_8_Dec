import { Poppins } from "@next/font/google";
import Image from "next/image";
import Image1 from "../../../../public/homepage/inspiration/1.png";
import Image2 from "../../../../public/homepage/inspiration/2.png";
import Image3 from "../../../../public/homepage/inspiration/3.png";
import Arrow1 from "../../../../public/homepage/inspiration/Line.png";
import Arrowright from "../../../../public/homepage/inspiration/Vector 1.png";
import Indicator from "../../../../public/homepage/inspiration/Indicator.png";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Inspiration() {
  return (
    <>
    <div className="w-full max-w-[1440px] bg-[#FCF8F3] flex flex-col lg:flex-row m-auto gap-5 overflow-hidden mt-11 ">
  <div className="items-center flex flex-col lg:flex w-full lg:w-[574px] h-auto lg:h-[670px] my-auto px-5 lg:px-0">
    <div
      className={`${poppins.className} w-full lg:w-[504px] h-auto justify-center space-y-4 pr-8`}
    >
      <p className="text-[24px] lg:text-[40px] font-bold">
        50+ Beautiful rooms inspiration
      </p>

      <p className="text-[14px] lg:text-base">
        Our designer already made a lot of beautiful prototypes of rooms
        that inspire you
      </p>

      <button
        className={`${poppins.className} w-full sm:w-[176px] h-[48px] text-white bg-[#B88E2F] duration-200 border-[1px] border-[#B88E2F] flex items-center justify-center`}
      >
        Show More
      </button>
    </div>
  </div>

  <div className="w-full lg:w-[1196px] h-auto flex flex-wrap lg:flex-nowrap my-auto gap-5">
    {/* First Image */}
    <div className="relative items-center my-auto w-full sm:w-[404px] h-[300px] sm:h-[400px] lg:h-[582px]">
      <Image
        src={Image1}
        alt="Image 1"
        className="w-full h-full object-cover"
      ></Image>

      <div
        className={`${poppins.className} absolute bottom-4 sm:bottom-8 left-4 w-[217px] h-auto items-center grid justify-center`}
      >
        <div>
          <p>01 - Bed Room</p>
        </div>
        <div className="text-[20px] sm:text-[28px] font-semibold">
          Inner Peace
        </div>
      </div>

      <div className="absolute w-[36px] sm:w-[48px] bottom-4 sm:bottom-8 right-[50px] sm:right-[124px] h-[36px] sm:h-[48px] bg-[#B88E2F] flex">
        <Image
          src={Arrowright}
          alt="arrow right"
          className="items-center justify-center m-auto"
        ></Image>
      </div>
    </div>

    {/* Second Image */}
    <div className="relative w-full sm:w-[372px] h-[300px] sm:h-[400px] lg:h-[582px]">
      <div>
        <Image src={Image2} alt="Image 2" className="w-full h-full object-cover"></Image>
      </div>
      <div className="flex justify-center mt-5 sm:mt-10 items-center">
        <Image src={Indicator} alt="indicator"></Image>
      </div>

      <div className="absolute w-[36px] sm:w-[48px] bottom-1/2 -right-3 sm:-right-6 h-[36px] sm:h-[48px] bg-white flex rounded-full">
        <Image
          src={Arrow1}
          alt="arrow right"
          className="items-center justify-center m-auto"
        ></Image>
      </div>
    </div>

    {/* Third Image */}
    <div className="relative w-full sm:w-[372px] h-[300px] sm:h-[400px] lg:h-[582px] md:hidden lg:block  ">
      <div>
        <Image src={Image3} alt="Image 3" className="w-full h-full object-cover"></Image>
      </div>
    </div>
  </div>
</div>

    </>
  );
}

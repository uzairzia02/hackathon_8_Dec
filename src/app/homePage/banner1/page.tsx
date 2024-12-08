import Image from "next/image";
import ImageBanner1 from "../../../../public/homepage/banner1/homePageBanner1.png";

import { Poppins } from "@next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Banner1() {
  return (
    <>
    <div className="w-full h-auto flex m-auto relative">
  {/* Image */}
  <div className="w-full h-full">
    <Image
      src={ImageBanner1}
      alt="banner1"
      className="w-full h-[717px] object-cover"
    />
  </div>

  {/* Overlay Div */}
  <div
    className={`${poppins.className} absolute top-[10%] right-[5%] sm:top-[15%] sm:right-[10%] w-[90%] max-w-[643px] bg-[#FFF3E3] grid items-center rounded-[10px] p-4 sm:pl-[20px] sm:pt-[40px] sm:pb-[20px] md:pl-[39px] md:pt-[62px] md:pb-[26px]`}
  >
    {/* New Arrival */}
    <p className="text-[14px] sm:text-[16px] font-semibold tracking-[3px]">
      New Arrival
    </p>

    {/* Heading */}
    <p className="text-[28px] sm:text-[36px] md:text-[52px] font-bold text-[#B88E2F]">
      Discover Our <br /> New Collection
    </p>

    {/* Description */}
    <p className="text-[14px] sm:text-[16px] md:text-[18px] font-medium">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
      luctus nec ullamcorper mattis.
    </p>

    {/* Button */}
    <button
      className="bg-[#B88E2F] hover:bg-[#755307] w-full max-w-[222px] h-[50px] sm:h-[60px] md:h-[74px] text-[14px] sm:text-[16px] text-white duration-200 font-bold"
    >
      Buy Now
    </button>
  </div>
</div>

    </>
  );
}

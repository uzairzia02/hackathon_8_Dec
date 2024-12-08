import Image from "next/image";
import Image1 from "../../../../public/homepage/images 5 col/1.png";
import Image2 from "../../../../public/homepage/images 5 col/2.png";
import Image3 from "../../../../public/homepage/images 5 col/3.png";
import Image4 from "../../../../public/homepage/images 5 col/4.png";
import Image5 from "../../../../public/homepage/images 5 col/5.png";
import Image6 from "../../../../public/homepage/images 5 col/6.png";
import Image7 from "../../../../public/homepage/images 5 col/7.png";
import Image8 from "../../../../public/homepage/images 5 col/8.png";
import Image9 from "../../../../public/homepage/images 5 col/9.png";

import { Poppins } from "@next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});
export default function Banner5() {
  return (
    <>
<div className="relative w-full h-auto mt-10 overflow-hidden">
  {/* Text Section */}
  <div className="w-full text-center mb-6">
    <div className={`${poppins.className}`}>
      <p className="text-[16px] sm:text-[20px] font-semibold text-[#616161]">
        Share your setup with
      </p>
      <p className="text-[28px] sm:text-[40px] font-bold text-[#3A3A3A]">
        #FuniroFurniture
      </p>
    </div>
  </div>

  {/* Images Section */}
  <div className="w-full overflow-hidden">
    <div className="flex gap-3 flex-nowrap mx-auto w-[1440px]">
      {/* Left Column */}
      <div className="flex flex-col space-y-3 flex-shrink-0">
        <div className="flex justify-between gap-3">
          <Image
            src={Image1}
            alt="Image1"
            className="w-[274px] h-[382px] object-cover"
          ></Image>
          <Image
            src={Image3}
            alt="Image3"
            className="w-[451px] h-[312px] mt-auto object-cover"
          ></Image>
        </div>
        <div className="flex justify-between gap-3">
          <Image
            src={Image2}
            alt="Image2"
            className="w-[381px] h-[323px] object-cover"
          ></Image>
          <Image
            src={Image4}
            alt="Image4"
            className="w-[344px] h-[242px] mb-auto object-cover"
          ></Image>
        </div>
      </div>

      {/* Center Column */}
      <div className="w-[295px] h-auto flex-shrink-0 lg:my-auto">
        <Image
          src={Image5}
          alt="Image5"
          className="w-full h-[392px] object-cover "
        ></Image>
      </div>

      {/* Right Column */}
      <div className="flex flex-col space-y-3 flex-shrink-0">
        <div className="flex justify-between gap-3">
          <Image
            src={Image7}
            alt="Image7"
            className="w-[290px] h-[348px] mt-auto object-cover"
          ></Image>
          <Image
            src={Image9}
            alt="Image9"
            className="w-[425px] h-[433px] object-cover"
          ></Image>
        </div>
        <div className="flex gap-3">
          <Image
            src={Image6}
            alt="Image6"
            className="w-[178px] h-[242px] object-cover"
          ></Image>
          <Image
            src={Image8}
            alt="Image8"
            className="w-[258px] h-[196px] mb-auto object-cover"
          ></Image>
        </div>
      </div>
    </div>
  </div>
</div>


    </>
  );
}

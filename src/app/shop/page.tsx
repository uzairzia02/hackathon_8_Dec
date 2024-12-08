import Header from "../components/header";
import Image from "next/image";
import Image1 from "../../../public/shopPage/top1.png";
import Image2 from "../../../public/shopPage/2nd layer/1.png";
import Image3 from "../../../public/shopPage/2nd layer/2.png";
import Image4 from "../../../public/shopPage/2nd layer/3.png";
import Trophy from "../../../public/shopPage/trophy 1.png";
import Gurantee from "../../../public/shopPage/guarantee.png";
import Shipping from "../../../public/shopPage/shipping.png";
import Support from "../../../public/shopPage/customer-support.png";

import { Poppins } from "@next/font/google";
import ProductCards from "../components/ourproductco";
import Footer from "../components/footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Shop() {
  return (
    <>
      <Header />
      <div className={`${poppins.className} m-auto`}>
        {/* Banner Section */}
        <div className="w-full max-w-[1440px] h-[316px] m-auto relative">
          <Image
            src={Image1}
            alt="Image1"
            className="w-full h-full object-cover"
          ></Image>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <p className="text-[24px] sm:text-[32px] lg:text-[48px] font-medium">
              Shop
            </p>
            <p className="text-[12px] sm:text-[14px] lg:text-[16px] font-medium">
              Home {">"} <span className="font-light">Shop</span>
            </p>
          </div>
        </div>

        {/* Filter Section */}
        <div className="w-full max-w-[1440px] h-auto bg-[#F9F1E7] m-auto flex flex-col sm:flex-row items-center justify-between px-4 sm:px-10 md:px-[50px] lg:px-[100px] py-4">
          {/* Left Section */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            {/* Filter Icon */}
            <div className="flex items-center gap-2">
              <Image
                src={Image2}
                alt="Image2"
                className="w-[20px] h-[20px]"
              ></Image>
              <p className="text-[12px] sm:text-[14px] lg:text-[16px]">
                Filter
              </p>
            </div>
            {/* Grid View Icons */}
            <div className="flex items-center gap-4">
              <Image
                src={Image3}
                alt="Image3"
                className="w-[20px] h-[20px]"
              ></Image>
              <Image
                src={Image4}
                alt="Image4"
                className="w-[20px] h-[20px]"
              ></Image>
            </div>
            {/* Results Info */}
            <div className="flex items-center border-l border-[#9F9F9F] pl-4">
              <p className="text-[10px] sm:text-[14px] lg:text-[16px]">
                Showing 1 to 16 of 32 results
              </p>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-4 sm:mt-0">
            {/* Show Dropdown */}
            <div className="flex items-center overflow-hidden">
              <p className="px-4 text-[10px] sm:text-[14px] lg:text-[16px]">
                Show
              </p>
              <div className="w-[55px] h-full bg-white text-[#9f9f9f] text-[12px] sm:text-[16px] flex items-center justify-center">
                16
              </div>
            </div>
            {/* Sort Dropdown */}
            <div className="flex items-center  overflow-hidden">
              <p className="px-4 py-2 text-[10px] sm:text-[14px] lg:text-[16px] ">
                Sort by
              </p>
              <div className="w-[120px] sm:w-[188px] h-full bg-white text-[#9f9f9f] text-[12px] sm:text-[16px] flex items-center justify-center">
                Default
              </div>
            </div>
          </div>
        </div>

        <div className="w-full max-w-[1236px] m-auto px-4 sm:px-6 lg:px-8">
          <ProductCards />
          <ProductCards />
          <ProductCards />
          <ProductCards />
        </div>

        <div className="w-full max-w-[392px]  h-auto lg:h-[90px] lg:items-center m-auto flex justify-between mb-10 px-4 sm:px-6 lg:px-0">
  <div className="w-[60px] h-[60px] bg-[#B88E2F] text-center flex rounded-[10px]">
    <p className="text-[20px] text-white m-auto">1</p>
  </div>
  <div className="w-[60px] h-[60px] bg-[#F9F1E7] text-center flex rounded-[10px]">
    <p className="text-[20px] text-black m-auto">2</p>
  </div>
  <div className="w-[60px] h-[60px] bg-[#F9F1E7] text-center flex rounded-[10px]">
    <p className="text-[20px] text-black m-auto">3</p>
  </div>
  <div className="w-[98px] h-[60px] bg-[#F9F1E7] text-center flex rounded-[10px]">
    <p className="text-[20px] text-black m-auto">Next</p>
  </div>
</div>


<div className="w-full max-w-[1440px] h-auto bg-[#FAF3EA] flex justify-center px-4 lg:px-0 lg:m-auto ">
  <div className="w-full max-w-[1330px] h-auto flex flex-wrap justify-between items-start gap-6 lg:gap-0 lg:h-[270px] lg:flex-nowrap lg:m-auto lg:items-center ">
    {/* High Quality */}
    <div className="w-full sm:w-[337px] h-auto flex items-center gap-2">
      <div>
        <Image src={Trophy} alt="trophy" />
      </div>
      <div>
        <p className="text-[#242424] text-[18px] lg:text-[22px] font-semibold">
          High Quality
        </p>
        <p className="text-[#898989] text-[12px] lg:text-[14px]">
          crafted from top materials
        </p>
      </div>
    </div>

    {/* Warranty Protection */}
    <div className="w-full sm:w-[328px] h-auto flex items-center gap-2">
      <div>
        <Image src={Gurantee} alt="Gurantee" />
      </div>
      <div>
        <p className="text-[#242424] text-[18px] lg:text-[22px] font-semibold">
          Warranty Protection
        </p>
        <p className="text-[#898989] text-[12px] lg:text-[14px]">Over 2 years</p>
      </div>
    </div>

    {/* Free Shipping */}
    <div className="w-full sm:w-[244px] h-auto flex items-center gap-2">
      <div>
        <Image src={Shipping} alt="shipping" />
      </div>
      <div>
        <p className="text-[#242424] text-[18px] lg:text-[22px] font-semibold">
          Free Shipping
        </p>
        <p className="text-[#898989] text-[12px] lg:text-[14px]">
          Order over 150 $
        </p>
      </div>
    </div>

    {/* 24/7 Support */}
    <div className="w-full sm:w-[259px] h-auto flex items-center gap-2">
      <div>
        <Image src={Support} alt="support" />
      </div>
      <div>
        <p className="text-[#242424] text-[18px] lg:text-[22px] font-semibold">
          24 / 7 Support
        </p>
        <p className="text-[#898989] text-[12px] lg:text-[14px]">
          Dedicated support
        </p>
      </div>
    </div>
  </div>
</div>
<Footer />

      </div>
    </>
  );
}

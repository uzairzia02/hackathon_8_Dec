import { Poppins } from "@next/font/google";
import Footer from "../components/footer";
import Header from "../components/header";
import Image1 from "../../../public/shopPage/top1.png";
import Logo from "../../../public/contactPage/logo.png";
import BlogImage1 from "../../../public/blog/image1.png";
import BlogImage2 from "../../../public/blog/image2.png";
import BlogImage3 from "../../../public/blog/Image3.png";
import Admin from "../../../public/blog/adminIcon.png";
import Calendar from "../../../public/blog/calendar.png";
import Tag from "../../../public/blog/tag.png";
import SearchImage from "../../../public/headerImages/akar-icons_search.png";
import Right1 from "../../../public/blog/right1.png";
import Right2 from "../../../public/blog/right2.png";
import Right3 from "../../../public/blog/right3.png";
import Right4 from "../../../public/blog/right4.png";
import Right5 from "../../../public/blog/right5.png";
import Trophy from "../../../public/shopPage/trophy 1.png";
import Gurantee from "../../../public/shopPage/guarantee.png";
import Shipping from "../../../public/shopPage/shipping.png";
import Support from "../../../public/shopPage/customer-support.png";

import Image from "next/image";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Blog() {
  return (
    <>
      <Header />
      <div className={`${poppins.className}`}>
        {/* Banner Section */}
        <div className="w-full max-w-[1440px] h-[316px] mx-auto relative">
          <Image
            src={Image1}
            alt="Image1"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <Image src={Logo} alt="logo" className="items-center flex m-auto" />
            <p className="text-[20px] sm:text-[32px] lg:text-[48px] font-medium">
              Blog
            </p>
            <p className="text-[12px] sm:text-[14px] lg:text-[16px] font-medium">
              Home {">"} <span className="font-light">Blog</span>
            </p>
          </div>
        </div>

        {/* Blog Section */}
        <div className="w-full max-w-[1440px] mx-auto flex flex-col lg:flex-row justify-between px-4 sm:px-6 lg:px-10">
          {/* Left Content */}
          <div className="w-full lg:w-[60%]">
            {/* Blog Post 1 */}
            <div className="mb-10">
              <Image
                src={BlogImage1}
                alt="Blog Image 1"
                className="w-full h-auto"
              />
              <div className="flex flex-wrap justify-between items-center my-4 gap-4">
                <div className="flex items-center gap-2">
                  <Image src={Admin} alt="Admin" />
                  <p className="text-[14px] sm:text-[16px]">Admin</p>
                </div>
                <div className="flex items-center gap-2">
                  <Image src={Calendar} alt="Calendar" />
                  <p className="text-[14px] sm:text-[16px]">14 Oct 2022</p>
                </div>
                <div className="flex items-center gap-2">
                  <Image src={Tag} alt="Tag" />
                  <p className="text-[14px] sm:text-[16px]">Wood</p>
                </div>
              </div>
              <p className="text-[18px] sm:text-[24px] lg:text-[30px] font-medium">
                Going all-in with millennial design
              </p>
              <p className="text-[14px] sm:text-[16px] mt-3 text-[#9f9f9f] text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit...
              </p>
              <div className="border-b border-black mt-4">
                <p className="text-[14px] sm:text-[16px]">Read more</p>
              </div>
            </div>

            {/* Blog Post 2 */}
            <div className="mb-10">
              <Image
                src={BlogImage2}
                alt="Blog Image 2"
                className="w-full h-auto"
              />
              <div className="flex flex-wrap justify-between items-center my-4 gap-4">
                <div className="flex items-center gap-2">
                  <Image src={Admin} alt="Admin" />
                  <p className="text-[14px] sm:text-[16px]">Admin</p>
                </div>
                <div className="flex items-center gap-2">
                  <Image src={Calendar} alt="Calendar" />
                  <p className="text-[14px] sm:text-[16px]">14 Oct 2022</p>
                </div>
                <div className="flex items-center gap-2">
                  <Image src={Tag} alt="Tag" />
                  <p className="text-[14px] sm:text-[16px]">Handmade</p>
                </div>
              </div>
              <p className="text-[18px] sm:text-[24px] lg:text-[30px] font-medium">
                Exploring new ways of decorating
              </p>
              <p className="text-[14px] sm:text-[16px] mt-3 text-[#9f9f9f] text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit...
              </p>
              <div className="border-b border-black mt-4">
                <p className="text-[14px] sm:text-[16px]">Read more</p>
              </div>
            </div>

            {/* Blog Post 3 */}
            <div className="mb-10">
              <Image
                src={BlogImage3}
                alt="Blog Image 3"
                className="w-full h-auto"
              />
              <div className="flex flex-wrap justify-between items-center my-4 gap-4">
                <div className="flex items-center gap-2">
                  <Image src={Admin} alt="Admin" />
                  <p className="text-[14px] sm:text-[16px]">Admin</p>
                </div>
                <div className="flex items-center gap-2">
                  <Image src={Calendar} alt="Calendar" />
                  <p className="text-[14px] sm:text-[16px]">14 Oct 2022</p>
                </div>
                <div className="flex items-center gap-2">
                  <Image src={Tag} alt="Tag" />
                  <p className="text-[14px] sm:text-[16px]">Wood</p>
                </div>
              </div>
              <p className="text-[18px] sm:text-[24px] lg:text-[30px] font-medium">
                Handmade pieces that took time to make
              </p>
              <p className="text-[14px] sm:text-[16px] mt-3 text-[#9f9f9f] text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit...
              </p>
              <div className="border-b border-black mt-4">
                <p className="text-[14px] sm:text-[16px]">Read more</p>
              </div>
            </div>
          </div>

          <div>
            <div className="w-full lg:w-[393px] lg:h-[537px] space-y-10 pt-10 mx-auto lg:mx-0">
              {/* Search Bar */}
              <div className="w-[90%] sm:w-[311px] h-[58px] border-[1px] border-[#9f9f9f] rounded-[10px] flex mx-auto">
                <Image
                  src={SearchImage}
                  alt="search"
                  className="ml-auto my-auto"
                />
              </div>

              {/* Categories Section */}
              <div className="w-[90%] sm:w-[251px] mx-auto space-y-10">
                <p className="text-[20px] sm:text-[24px] font-medium text-center lg:text-left">
                  Categories
                </p>
                <div className="flex justify-between text-[#9f9f9f]">
                  <p>Crafts</p>
                  <p>2</p>
                </div>
                <div className="flex justify-between text-[#9f9f9f]">
                  <p>Design</p>
                  <p>8</p>
                </div>
                <div className="flex justify-between text-[#9f9f9f]">
                  <p>Handmade</p>
                  <p>7</p>
                </div>
                <div className="flex justify-between text-[#9f9f9f]">
                  <p>Interior</p>
                  <p>1</p>
                </div>
                <div className="flex justify-between text-[#9f9f9f]">
                  <p>Wood</p>
                  <p>6</p>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-[393px] lg:h-[650px] flex mx-auto lg:mx-0">
              <div className="w-[90%] sm:w-[252px] mx-auto space-y-6">
                <div>
                  <p className="text-[20px] sm:text-[24px] font-medium text-center lg:text-left">
                    Recent Posts
                  </p>
                </div>
                <div className="w-full sm:w-[211px] flex mx-auto gap-2">
                  <div className="w-[70px] sm:w-[80px]">
                    <Image src={Right1} alt="right1" />
                  </div>
                  <div className="w-full">
                    <p className="text-[14px]">
                      Going all-in with millennial design
                    </p>
                    <p className="text-[12px] text-[#9f9f9f]">03 Aug 2022</p>
                  </div>
                </div>
                <div className="w-full sm:w-[211px] flex mx-auto gap-2">
                  <div className="w-[70px] sm:w-[80px]">
                    <Image src={Right2} alt="right2" />
                  </div>
                  <div className="w-full">
                    <p className="text-[14px]">
                      Exploring new ways of decorating
                    </p>
                    <p className="text-[12px] text-[#9f9f9f]">03 Aug 2022</p>
                  </div>
                </div>
                <div className="w-full sm:w-[211px] flex mx-auto gap-2">
                  <div className="w-[70px] sm:w-[80px]">
                    <Image src={Right3} alt="right3" />
                  </div>
                  <div className="w-full">
                    <p className="text-[14px]">
                      Handmade pieces that took time to make
                    </p>
                    <p className="text-[12px] text-[#9f9f9f]">03 Aug 2022</p>
                  </div>
                </div>
                <div className="w-full sm:w-[211px] flex mx-auto gap-2">
                  <div className="w-[70px] sm:w-[80px]">
                    <Image src={Right4} alt="right4" />
                  </div>
                  <div className="w-full">
                    <p className="text-[14px]">Modern home in Milan</p>
                    <p className="text-[12px] text-[#9f9f9f]">03 Aug 2022</p>
                  </div>
                </div>
                <div className="w-full sm:w-[211px] flex mx-auto gap-2">
                  <div className="w-[70px] sm:w-[80px]">
                    <Image src={Right5} alt="right5" />
                  </div>
                  <div className="w-full">
                    <p className="text-[14px]">Colorful office redesign</p>
                    <p className="text-[12px] text-[#9f9f9f]">03 Aug 2022</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid">
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
                <p className="text-[#898989] text-[12px] lg:text-[14px]">
                  Over 2 years
                </p>
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

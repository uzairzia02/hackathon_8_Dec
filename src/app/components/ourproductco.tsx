// import { Poppins } from "@next/font/google";
import Image from "next/image";
import Image1 from "../../../public/homepage/ourproducts/1.png";
import Image2 from "../../../public/homepage/ourproducts/chair.png";
import Image3 from "../../../public/homepage/ourproducts/3.png";
import Image4 from "../../../public/homepage/ourproducts/4.png";
// import Image5 from "../../../public/homepage/ourproducts/5.png";
// import Image6 from "../../../public/homepage/ourproducts/6.png";
// import Image7 from "../../../public/homepage/ourproducts/7.png";
// import Image8 from "../../../public/homepage/ourproducts/8.png";
// import Button1 from "@/app/components/button";

// const poppins = Poppins({
//   subsets: ["latin"],
//   weight: ["400", "700"],
// });

export default function ProductCards() {
    return (
      <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my-5 px-4 md:px-10">
        {/* Product Card 1 */}
        <div className="w-full max-w-[285px] h-auto bg-[#F4F5F7] m-auto">
          <div>
            <div className="relative">
              <Image
                src={Image1}
                alt="Image 1"
                className="w-full h-[200px] object-cover"
              />
              <p className="absolute top-2 right-2 w-[45px] h-[45px] bg-red-400 m-auto flex items-center rounded-full text-center text-[16px] font-medium text-white">
                -30%
              </p>
            </div>
            <div className="grid space-y-3 mt-4 pl-4">
              <p className="text-[20px] sm:text-[24px] font-semibold text-[#3A3A3A]">
                Syltherine
              </p>
              <p className="text-[14px] sm:text-[16px] font-medium text-[#898989]">
                Stylish cafe chair
              </p>
              <div className="flex items-center justify-between pr-1 ">
                <p className="text-[18px] sm:text-[20px] font-semibold text-[#3A3A3A]">
                  Rp 2.500.000
                </p>
                <p className="text-[14px] sm:text-[16px] text-[#B0B0B0] line-through">
                  Rp 3.500.000
                </p>
              </div>
            </div>
          </div>
        </div>
  
        {/* Product Card 2 */}
        <div className="w-full max-w-[285px] h-auto bg-[#F4F5F7] m-auto">
          <div>
            <div className="relative">
              <Image
                src={Image2}
                alt="Image 2"
                className="w-full h-[200px] object-cover"
              />
            </div>
            <div className="grid space-y-3 mt-4 px-4">
              <p className="text-[20px] sm:text-[24px] font-semibold text-[#3A3A3A]">
                Leviosa
              </p>
              <p className="text-[14px] sm:text-[16px] font-medium text-[#898989]">
                Stylish cafe chair
              </p>
              <div className="flex items-center">
                <p className="text-[18px] sm:text-[20px] font-semibold text-[#3A3A3A]">
                  Rp 2.500.000
                </p>
              </div>
            </div>
          </div>
        </div>
  
        {/* Product Card 3 */}
        <div className="w-full max-w-[285px] h-auto bg-[#F4F5F7] m-auto">
          <div>
            <div className="relative">
              <Image
                src={Image3}
                alt="Image 3"
                className="w-full h-[200px] object-cover"
              />
              <p className="absolute top-2 right-2 w-[45px] h-[45px] bg-red-400 m-auto flex items-center rounded-full text-center text-[16px] font-medium text-white">
                -50%
              </p>
            </div>
            <div className="grid space-y-3 mt-4 pl-4">
              <p className="text-[20px] sm:text-[24px] font-semibold text-[#3A3A3A]">
              Lolito
              </p>
              <p className="text-[14px] sm:text-[16px] font-medium text-[#898989]">
              Luxury big sofa
              </p>
              <div className="flex items-center justify-between pr-1 ">
                <p className="text-[18px] sm:text-[20px] font-semibold text-[#3A3A3A]">
                  Rp 2.500.000
                </p>
                <p className="text-[14px] sm:text-[16px] text-[#B0B0B0] line-through">
                  Rp 3.500.000
                </p>
              </div>
            </div>
          </div>
        </div>
  
        {/* Product Card 4 */}
        <div className="w-full max-w-[285px] h-auto bg-[#F4F5F7] m-auto">
          <div>
            <div className="relative">
              <Image
                src={Image4}
                alt="Image 4"
                className="w-full h-[200px] object-cover"
              />
              <p className="absolute top-2 right-2 w-[45px] h-[45px] bg-[#25c225] m-auto flex items-center rounded-full text-center text-[16px] font-medium text-white">
                New
              </p>
            </div>
            <div className="grid space-y-3 mt-4 px-4">
              <p className="text-[20px] sm:text-[24px] font-semibold text-[#3A3A3A]">
              Respira
              </p>
              <p className="text-[14px] sm:text-[16px] font-medium text-[#898989]">
              Outdoor bar table and stool
              </p>
              <div className="flex items-center">
                <p className="text-[18px] sm:text-[20px] font-semibold text-[#3A3A3A]">
                  Rp 500.000
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  

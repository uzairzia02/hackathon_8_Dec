import { Poppins } from "@next/font/google";
import Image from "next/image";
import Image1 from "../../../../public/homepage/ourproducts/1.png";
import Image2 from "../../../../public/homepage/ourproducts/2.png";
import Image3 from "../../../../public/homepage/ourproducts/3.png";
import Image4 from "../../../../public/homepage/ourproducts/4.png";
import Image5 from "../../../../public/homepage/ourproducts/5.png";
import Image6 from "../../../../public/homepage/ourproducts/6.png";
import Image7 from "../../../../public/homepage/ourproducts/7.png";
import Image8 from "../../../../public/homepage/ourproducts/8.png";
import Button1 from "@/app/components/button";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function OurProducts() {
  return (
    <>
      <div className="w-full max-w-[1236px] mx-auto space-y-7 mb-2">
        <div className="text-center">
          <p
            className={`${poppins.className} text-[32px] sm:text-[40px] font-bold`}
          >
            Our Products
          </p>
        </div>

        <div
          className={`${poppins.className} w-full flex flex-wrap justify-between gap-6`}
        >
          {/* Product Card 1 */}
          <div className="w-full sm:w-[48%] md:w-[48%] lg:w-[23%] bg-[#F4F5F7]">
            <div className="relative">
              <Image
                src={Image1}
                alt="Image 1"
                className="w-full h-full object-cover"
              />
              <p className="absolute top-2 right-2 w-[45px] h-[45px] bg-red-400 m-auto flex items-center rounded-full pl-[2px] text-[16px] font-medium text-white">
                -30%
              </p>
            </div>
            <div className="grid m-auto space-y-3 mt-4 px-4">
              <p className="text-[24px] font-semibold text-[#3A3A3A]">
                Syltherine
              </p>
              <p className="text-[16px] font-medium text-[#898989]">
                Stylish cafe chair
              </p>
              <div className="flex">
                <p className="text-[20px] font-semibold text-[#3A3A3A]">
                  Rp 2.500.000
                </p>
                <p className="text-[16px] text-[#B0B0B0] line-through items-center m-auto">
                  Rp 3.500.000
                </p>
              </div>
            </div>
          </div>

          {/* Product Card 2 */}
          <div className="w-full sm:w-[48%] md:w-[48%] lg:w-[23%] bg-[#F4F5F7]">
            <div className="relative">
              <Image
                src={Image2}
                alt="Image 2"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Card 3 */}
          <div className="w-full sm:w-[48%] md:w-[48%] lg:w-[23%] bg-[#F4F5F7] ">
            <div className="relative">
              <Image
                src={Image3}
                alt="Image 3"
                className="w-full h-full object-cover"
              />
              <p className="absolute top-2 right-2 w-[45px] h-[45px] bg-red-400 m-auto flex items-center rounded-full pl-[2px] text-[16px] font-medium text-white">
                -50%
              </p>
            </div>
            <div className="grid m-auto space-y-3 mt-4 px-4">
              <p className="text-[24px] font-semibold text-[#3A3A3A]">Lolito</p>
              <p className="text-[16px] font-medium text-[#898989]">
                Luxury big sofa
              </p>
              <div className="flex">
                <p className="text-[20px] font-semibold text-[#3A3A3A]">
                  Rp 7.000.000
                </p>
                <p className="text-[16px] text-[#B0B0B0] line-through items-center m-auto">
                  Rp 14.000.000
                </p>
              </div>
            </div>
          </div>

          {/* Product Card 4 */}
          <div className="w-full sm:w-[48%] md:w-[48%] lg:w-[23%] bg-[#F4F5F7] ">
            <div className="relative">
              <Image
                src={Image4}
                alt="Image 4"
                className="w-full h-full object-cover"
              />
              <p className="absolute top-2 right-2 w-[45px] h-[45px] bg-[#25c225] m-auto flex items-center rounded-full pl-[5px] text-[16px] font-medium text-white">
                New
              </p>
            </div>
            <div className="grid m-auto space-y-3 mt-4 px-4">
              <p className="text-[24px] font-semibold text-[#3A3A3A]">Lolito</p>
              <p className="text-[16px] font-medium text-[#898989]">
                Luxury big sofa
              </p>
              <div className="flex">
                <p className="text-[20px] font-semibold text-[#3A3A3A]">
                  Rp 7.000.000
                </p>
                <p className="text-[16px] text-[#B0B0B0] line-through items-center m-auto">
                  Rp 14.000.000
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`${poppins.className} w-full flex flex-wrap justify-between gap-6`}
        >
          {/* Product Card 5 */}
          <div className="w-full sm:w-[48%] md:w-[48%] lg:w-[23%] bg-[#F4F5F7] ">
            <div className="relative">
              <Image
                src={Image5}
                alt="Image 5"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid m-auto space-y-3 mt-4 px-4">
              <p className="text-[24px] font-semibold text-[#3A3A3A]">Grifo</p>
              <p className="text-[16px] font-medium text-[#898989]">
                Night lamp
              </p>
              <div className="flex">
                <p className="text-[20px] font-semibold text-[#3A3A3A]">
                  Rp 1.500.000
                </p>
              </div>
            </div>
          </div>

          {/* Product Card 6 */}
          <div className="w-full sm:w-[48%] md:w-[48%] lg:w-[23%] bg-[#F4F5F7] ">
            <div className="relative">
              <Image
                src={Image6}
                alt="Image 6"
                className="w-full h-full object-cover"
              />
              <p className="absolute top-2 right-2 w-[45px] h-[45px] bg-[#25c225] m-auto flex items-center rounded-full pl-[5px] text-[16px] font-medium text-white">
                New
              </p>
            </div>
            <div className="grid m-auto space-y-3 mt-4 px-4">
              <p className="text-[24px] font-semibold text-[#3A3A3A]">Muggo</p>
              <p className="text-[16px] font-medium text-[#898989]">
                Small mug
              </p>
              <div className="flex">
                <p className="text-[20px] font-semibold text-[#3A3A3A]">
                  Rp 150.000
                </p>
              </div>
            </div>
          </div>

          {/* Product Card 7 */}
          <div className="w-full sm:w-[48%] md:w-[48%] lg:w-[23%] bg-[#F4F5F7] ">
            <div className="relative">
              <Image
                src={Image7}
                alt="Image 7"
                className="w-full h-full object-cover"
              />
              <p className="absolute top-2 right-2 w-[45px] h-[45px] bg-red-400 m-auto flex items-center rounded-full pl-[2px] text-[16px] font-medium text-white">
                -50%
              </p>
            </div>
            <div className="grid m-auto space-y-3 mt-4 px-4">
              <p className="text-[24px] font-semibold text-[#3A3A3A]">Pingky</p>
              <p className="text-[16px] font-medium text-[#898989]">
                Cute bed set
              </p>
              <div className="flex">
                <p className="text-[20px] font-semibold text-[#3A3A3A]">
                  Rp 7.000.000
                </p>
                <p className="text-[16px] text-[#B0B0B0] line-through items-center m-auto">
                  Rp 14.000.000
                </p>
              </div>
            </div>
          </div>

          {/* Product Card 8 */}
          <div className="w-full sm:w-[48%] md:w-[48%] lg:w-[23%] bg-[#F4F5F7] ">
            <div className="relative">
              <Image
                src={Image8}
                alt="Image 8"
                className="w-full h-full object-cover"
              />
              <p className="absolute top-2 right-2 w-[45px] h-[45px] bg-[#25c225] m-auto flex items-center rounded-full pl-[5px] text-[16px] font-medium text-white">
                New
              </p>
            </div>
            <div className="grid m-auto space-y-3 mt-4 px-4">
              <p className="text-[24px] font-semibold text-[#3A3A3A]">Potty</p>
              <p className="text-[16px] font-medium text-[#898989]">
                Minimalist flower pot
              </p>
              <div className="flex">
                <p className="text-[20px] font-semibold text-[#3A3A3A]">
                  Rp 500.000
                </p>
              </div>
            </div>
          </div>
        </div>

        <Button1 />
      </div>
    </>
  );
}

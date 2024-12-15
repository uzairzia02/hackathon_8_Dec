import { Poppins } from "@next/font/google";
import Header from "../../components/header";
import Image from "next/image";
import { Icon } from "@iconify/react";

import pic1 from "../../../../public/shopPage/singleproduct/Outdoor sofa set 2.png";
import pic2 from "../../../../public/shopPage/singleproduct/Group 98.png";
import pic3 from "../../../../public/shopPage/singleproduct/Group 96.png";
import pic4 from "../../../../public/shopPage/singleproduct/Group 97.png";
import Sofa from "../../../../public/shopPage/singleproduct/Asgaard sofa 3.png";
import SofaPic1 from "../../../../public/shopPage/singleproduct/pic1.png";
import SofaPic2 from "../../../../public/shopPage/singleproduct/pic3.png";
import ProductCards from "@/app/components/ourproductco";
import Button1 from "@/app/components/button";
import Footer from "@/app/components/footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function SingleProduct() {
  return (
    <>
      <Header />

      <div className={`${poppins.className} `}>
        <div className="w-full h-auto bg-[#F9F1E7] m-auto flex flex-wrap gap-4 sm:gap-6 md:gap-8 lg:gap-10 items-center justify-center sm:justify-start p-4 sm:pl-6 md:pl-10 lg:pl-20">
          <div className="text-sm sm:text-base md:text-lg lg:text-xl">Home</div>
          <div className="text-sm sm:text-base md:text-lg lg:text-xl">
            {">"}
          </div>
          <div className="text-sm sm:text-base md:text-lg lg:text-xl">Shop</div>
          <div className="text-sm sm:text-base md:text-lg lg:text-xl">
            {">"}
          </div>
          <div className="text-sm sm:text-base md:text-lg lg:text-xl">
            Asgaard sofa
          </div>
        </div>

        <div className="w-full h-auto m-auto flex flex-col lg:flex-row lg:gap-10 p-4">
          <div className="flex flex-col w-full lg:w-[76px] h-auto lg:h-[416px] grid gap-4">
            <Image
              src={pic1}
              alt="pic1"
              className="bg-[#F9F1E7] rounded-md w-[76px] h-[80px] mx-auto"
            />
            <Image
              src={pic2}
              alt="pic2"
              className="bg-[#F9F1E7] rounded-md w-[76px] h-[80px] mx-auto"
            />
            <Image
              src={pic3}
              alt="pic3"
              className="bg-[#F9F1E7] rounded-md w-[76px] h-[80px] mx-auto"
            />
            <Image
              src={pic4}
              alt="pic4"
              className="bg-[#F9F1E7] rounded-md w-[76px] h-[80px] mx-auto"
            />
          </div>

          <div className="w-full lg:w-[423px] h-auto lg:h-[500px] bg-[#F9F1E7] flex rounded-[10px] mx-auto mt-4 lg:mt-0">
            <Image src={Sofa} alt="Sofaset" className="m-auto" />
          </div>

          <div className="w-full lg:w-[697px] h-auto flex flex-col space-y-5 px-4 lg:pl-10 mt-4 lg:mt-0">
            <p className="text-[24px] sm:text-[32px] lg:text-[42px]">
              Asgaard sofa
            </p>
            <p className="text-[16px] sm:text-[20px] lg:text-[24px] text-[#9F9F9F]">
              Rs. 250,000.00
            </p>

            <div>
              <div className="flex items-center">
                <div className="flex mr-6">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10">
                    <Icon
                      icon="ic:outline-star"
                      className="w-full h-full"
                      color="gold"
                    />
                  </div>
                  <div className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10">
                    <Icon
                      icon="ic:outline-star"
                      className="w-full h-full"
                      color="gold"
                    />
                  </div>
                  <div className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10">
                    <Icon
                      icon="ic:outline-star"
                      className="w-full h-full"
                      color="gold"
                    />
                  </div>
                  <div className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10">
                    <Icon
                      icon="ic:outline-star"
                      className="w-full h-full"
                      color="gold"
                    />
                  </div>
                  <div className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10">
                    <Icon
                      icon="typcn:star-half"
                      className="w-full h-full"
                      color="gold"
                    />
                  </div>
                </div>
                <div className="flex items-center pl-4 sm:pl-6 lg:pl-10 border-l-2 border-[#9F9F9F]">
                  <p className="text-[11px] sm:text-[13px] lg:text-[16px] text-[#9F9F9F]">
                    5 Customer Reviews
                  </p>
                </div>
              </div>
            </div>

            <p className="text-[12px] sm:text-[14px] lg:text-[16px] pr-4 lg:pr-48">
              Setting the bar as one of the loudest speakers in its class, the
              Kilburn is a compact, stout-hearted hero with a well-balanced
              audio which boasts a clear midrange and extended highs for a
              sound.
            </p>

            <div>
              <p className="text-[12px] sm:text-[14px] lg:text-[16px] text-[#9F9F9F]">
                Size
              </p>
            </div>
            <div className="flex items-center gap-2">
              <p className="w-[30px] h-[30px] bg-[#B88E2F] text-white rounded-[5px] text-center flex items-center justify-center text-[12px] sm:text-[13px]">
                L
              </p>
              <p className="w-[30px] h-[30px] bg-[#F9F1E7] text-black rounded-[5px] text-center flex items-center justify-center text-[12px] sm:text-[13px]">
                XL
              </p>
              <p className="w-[30px] h-[30px] bg-[#F9F1E7] text-black rounded-[5px] text-center flex items-center justify-center text-[12px] sm:text-[13px]">
                XS
              </p>
            </div>

            <p className="text-[#9F9F9F] text-[12px] sm:text-[14px]">Color</p>
            <div className="flex items-center gap-2">
              <div className="w-[30px] h-[30px] bg-[#816DFA] rounded-full hover:opacity-50 duration-300 cursor-pointer"></div>
              <div className="w-[30px] h-[30px] bg-[#000000] rounded-full hover:opacity-50 duration-300 cursor-pointer"></div>
              <div className="w-[30px] h-[30px] bg-[#B88E2F] rounded-full hover:opacity-50 duration-300 cursor-pointer"></div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between gap-4 lg:gap-6">
              <div className="w-full sm:w-[123px] h-[64px] rounded-[10px] px-4 border border-[#000000] flex justify-between items-center">
                <p>-</p>
                <p>1</p>
                <p>+</p>
              </div>
              <div className="w-full sm:w-[215px] h-[64px] rounded-[15px] px-4 border border-[#000000] hover:bg-black hover:text-white duration-300 cursor-pointer flex justify-center items-center">
                <p>Add to Cart</p>
              </div>
              <div className="w-full sm:w-[215px] h-[64px] rounded-[15px] px-4 border border-[#000000] hover:bg-black hover:text-white duration-300 cursor-pointer flex justify-center items-center">
                <p>+ Compare</p>
              </div>
            </div>

            <div className="h-auto w-full flex flex-wrap gap-4 pt-4 lg:pt-10">
              <div className="space-y-2">
                <p>SKU : SS001</p>
                <p>Categories : Sofas</p>
                <p>Tags : Sofa, Chair, Home, Shop</p>
                <div>Share:<div className="flex gap-3">
                  <Icon icon="ic:baseline-facebook" width="20" height="20" />
                  <Icon icon="mdi:linkedin" width="20" height="20" />
                  <Icon icon="proicons:x-twitter" width="20" height="20" />
                </div> </div>
                
              </div>
              {/* <div className="space-y-2">
                <p>:</p>
                <p>:</p>
                <p>:</p>
                <p>:</p>
              </div>
              <div className="space-y-2">
                <p>SS001</p>
                <p>Sofas</p>
                <p>Sofa, Chair, Home, Shop</p>
                <div className="flex gap-3">
                  <Icon icon="ic:baseline-facebook" width="20" height="20" />
                  <Icon icon="mdi:linkedin" width="20" height="20" />
                  <Icon icon="proicons:x-twitter" width="20" height="20" />
                </div>
              </div> */}
            </div>
          </div>
        </div>

        <div className="w-full max-w-[1440px] pt-12 m-auto">
          {/* Navigation Tabs */}
          <div className="w-full max-w-[90%] md:max-w-[649px] h-[36px] m-auto flex items-center justify-between text-[16px] sm:text-[18px] lg:text-[24px]">
            <p className="text-black border-transparent hover:border-2 hover:border-b-black cursor-pointer duration-300">
              Description
            </p>
            <p className="text-[#9F9F9F] border-transparent hover:border-2 hover:border-b-black cursor-pointer duration-300">
              Additional Information
            </p>
            <p className="text-[#9F9F9F] border-transparent hover:border-2 hover:border-b-black cursor-pointer duration-300">
              Reviews [5]
            </p>
          </div>

          {/* Description Section */}
          <div className="w-full max-w-[90%] md:max-w-[1026px] h-auto m-auto text-[#9f9f9f] space-y-4 sm:space-y-6 mt-7 text-[14px] sm:text-[16px] lg:text-[18px]">
            <p>
              Embodying the raw, wayward spirit of rock n roll, the Kilburn
              portable active stereo speaker takes the unmistakable look and
              sound of Marshall, unplugs the chords, and takes the show on the
              road.
            </p>
            <p>
              Weighing in under 7 pounds, the Kilburn is a lightweight piece of
              vintage-styled engineering. Setting the bar as one of the loudest
              speakers in its class, the Kilburn is a compact, stout-hearted
              hero with a well-balanced audio which boasts a clear midrange and
              extended highs for a sound that is both articulate and pronounced.
              The analogue knobs allow you to fine-tune the controls to your
              personal preferences while the guitar-influenced leather strap
              enables easy and stylish travel.
            </p>
          </div>

          {/* Image Section */}
          <div className="w-full max-w-[90%] md:max-w-[1239px] h-auto m-auto mt-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="w-full h-[200px] sm:h-[348px] bg-[#F9F1E7] flex justify-center items-center">
              <Image
                src={SofaPic1}
                alt="sofa pic 1"
                className="object-cover max-w-full max-h-full"
              />
            </div>
            <div className="w-full h-[200px] sm:h-[348px] bg-[#F9F1E7] flex justify-center items-center">
              <Image
                src={SofaPic2}
                alt="sofa pic 2"
                className="object-cover max-w-full max-h-full"
              />
            </div>
          </div>
        </div>

        <div className="w-full max-w-[1440px] h-auto m-auto space-y-12 sm:space-y-16 lg:space-y-24 pt-10 sm:pt-16 lg:pt-20">
          {/* Title Section */}
          <div>
            <p className="text-black text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] text-center">
              Related Products
            </p>
          </div>

          {/* Product Cards Section */}
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <ProductCards />
          </div>

          {/* Button Section */}
          <div className="w-full flex justify-center">
            <Button1 />
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

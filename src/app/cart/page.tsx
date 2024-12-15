import Header from "../components/header";
import Image1 from "../../../public/shopPage/top1.png";
import { Poppins } from "@next/font/google";
import Image from "next/image";
import Logo from "../../../public/contactPage/logo.png";
import SofaSmallImage from "../../../public/cart/Asgaard sofa 5.png";
import { Icon } from "@iconify/react";
import Trophy from "../../../public/shopPage/trophy 1.png";
import Gurantee from "../../../public/shopPage/guarantee.png";
import Shipping from "../../../public/shopPage/shipping.png";
import Support from "../../../public/shopPage/customer-support.png";
import Footer from "../components/footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Cart() {
  return (
    <>
      <Header />
      <div className={`${poppins.className} m-auto `}>
        <div className={` w-full max-w-[1440px] h-[316px] m-auto relative`}>
          <Image
            src={Image1}
            alt="Image1"
            className="w-full h-full object-cover"
          ></Image>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center ">
            <Image
              src={Logo}
              alt="logo"
              className="items-center flex m-auto "
            ></Image>

            <p className="text-[24px] sm:text-[32px] lg:text-[48px] font-medium">
              Cart
            </p>
            <p className="text-[12px] sm:text-[14px] lg:text-[16px] font-medium">
              Home {">"} <span className="font-light">Cart</span>
            </p>
          </div>
        </div>

        <div className="w-full max-w-[1440px] h-auto m-auto px-4 lg:px-0 mb-6">
          <div className="w-full max-w-[1270px] h-auto flex flex-col lg:flex-row lg:justify-between m-auto gap-8 lg:gap-0 lg:my-10">
            {/* Product Details */}
            <div className="w-full max-w-[817px] h-auto flex flex-wrap lg:flex-nowrap  ">
              {/* Product Section */}
              <div className="w-full max-w-[300px] h-auto">
                <div className="w-full h-[55px] bg-[#F9F1E7] flex items-center justify-center text-[14px] sm:text-[16px]">
                  <p>Product</p>
                </div>
                <div className="w-full h-auto flex items-center justify-between px-3 py-4">
                  <div className="w-[111px] h-[90px] bg-[#F9F1E7] rounded-md flex items-center justify-center">
                    <Image src={SofaSmallImage} alt="Sofa" />
                  </div>
                  <div>
                    <p className="text-[#9F9F9F]">Asgaard sofa</p>
                  </div>
                </div>
              </div>
              {/* Price Section */}
              <div className="w-full max-w-[150px] h-auto">
                <div className="w-full h-[55px] bg-[#F9F1E7] flex items-center justify-center text-[14px] sm:text-[16px]">
                  <p>Price</p>
                </div>
                <div className="w-full h-auto lg:h-[120px] flex items-center justify-center py-4">
                  <p className="text-[#9F9F9F]">Rs. 250,000.00</p>
                </div>
              </div>
              {/* Quantity Section */}
              <div className="w-full max-w-[100px] h-auto">
                <div className="w-full h-[55px] bg-[#F9F1E7] flex items-center justify-center text-[14px] sm:text-[16px]">
                  <p>Quantity</p>
                </div>
                <div className="w-full h-auto flex items-center justify-center py-4 lg:h-[120px]">
                  <div className="w-[32px] h-[32px]  border border-[#9f9f9f] rounded flex items-center justify-center">
                    <p className="text-black">1</p>
                  </div>
                </div>
              </div>
              {/* Subtotal Section */}
              <div className="w-full max-w-[150px] h-auto">
                <div className="w-full h-[55px] bg-[#F9F1E7] flex items-center justify-center text-[14px] sm:text-[16px]">
                  <p>Subtotal</p>
                </div>
                <div className="w-full h-auto flex items-center lg:h-[120px] justify-center py-4">
                  <p className="text-black">Rs. 250,000.00</p>
                </div>
              </div>
              {/* Delete Section */}
              <div className="w-full max-w-[50px] h-auto">
                <div className="w-full h-[55px] bg-[#F9F1E7]"></div>
                <div className="w-full h-auto flex items-center justify-center lg:h-[120px] py-4">
                  <Icon icon="charm:bin" width="28" height="28" />
                </div>
              </div>
            </div>

            {/* Cart Totals Section */}
            <div className="w-full max-w-[393px] h-auto bg-[#F9F1E7] p-6 ">
              <p className="font-semibold text-[24px] sm:text-[28px] lg:text-[32px] text-center mt-4">
                Cart Totals
              </p>
              <div className="flex justify-between mt-10">
                <p>Subtotal</p>
                <p className="text-[#9f9f9f]">Rs. 250,000.00</p>
              </div>
              <div className="flex justify-between mt-10 items-center">
                <p>Total</p>
                <p className="text-[#B88E2F] text-[18px] sm:text-[20px] text-center">
                  Rs. 250,000.00
                </p>
              </div>
              <button className="w-full max-w-[222px] h-[59px] border border-black rounded-[15px] flex mt-14 m-auto justify-center items-center text-[18px] sm:text-[20px] hover:bg-black hover:text-[#F9F1E7] duration-200">
                Check Out
              </button>
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

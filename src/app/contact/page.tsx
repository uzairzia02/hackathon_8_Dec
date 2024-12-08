import Header from "../components/header";
import Image from "next/image";
import Image1 from "../../../public/shopPage/top1.png";
import Logo from "../../../public/contactPage/logo.png";
import Address from "../../../public/contactPage/address.png";
import Phone from "../../../public/contactPage/phone.png";
import Time from "../../../public/contactPage/time.png";
import Trophy from "../../../public/shopPage/trophy 1.png";
import Gurantee from "../../../public/shopPage/guarantee.png";
import Shipping from "../../../public/shopPage/shipping.png";
import Support from "../../../public/shopPage/customer-support.png";

import { Poppins } from "@next/font/google";
import Button1 from "../components/button";
import Footer from "../components/footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Contact() {
  return (
    <>
      <Header />
      <div className={`${poppins.className}`}>
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
              Contact
            </p>
            <p className="text-[12px] sm:text-[14px] lg:text-[16px] font-medium">
              Home {">"} <span className="font-light">Contact</span>
            </p>
          </div>
        </div>

        <div className="w-full max-w-[1440px] h-auto m-auto mt-10 px-4 lg:px-0">
          {/* Header Section */}
          <div className="grid items-center justify-center text-center gap-4 mb-10">
            <p className="text-[28px] sm:text-[36px] font-semibold">
              Get In Touch With Us
            </p>
            <p className="w-full max-w-[644px] text-[#9f9f9f]">
              For More Information About Our Product & Services. Please Feel
              Free To Drop Us An Email. Our Staff Always Be There To Help You
              Out. Do Not Hesitate!
            </p>
          </div>

          {/* Main Content */}
          <div className="flex flex-wrap lg:flex-nowrap gap-8 justify-center items-start">
            {/* Contact Details */}
            <div className="w-full max-w-[393px] h-auto my-auto flex flex-col gap-10">
              {/* Address */}
              <div className="flex flex-col items-center text-center lg:items-start lg:text-left gap-2">
                <Image src={Address} alt="address" />
                <div className="px-4 lg:px-10">
                  <p className="text-[20px] lg:text-[24px] font-semibold">
                    Address
                  </p>
                  <p>236 5th SE Avenue, New York NY10000, United States</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex flex-col items-center text-center lg:items-start lg:text-left gap-2">
                <Image src={Phone} alt="Phone" />
                <div className="px-4 lg:px-10">
                  <p className="text-[20px] lg:text-[24px] font-semibold">
                    Phone
                  </p>
                  <p>Mobile: +(84) 546-6789</p>
                  <p>Hotline: +(84) 456-6789</p>
                </div>
              </div>

              {/* Working Time */}
              <div className="flex flex-col items-center text-center lg:items-start lg:text-left gap-2">
                <Image src={Time} alt="Timing" />
                <div className="px-4 lg:px-10">
                  <p className="text-[20px] lg:text-[24px] font-semibold">
                    Working Time
                  </p>
                  <p>Monday-Friday: 9:00 - 22:00</p>
                  <p>Saturday-Sunday: 9:00 - 21:00</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="w-full max-w-[635px] h-auto flex items-center justify-center">
              <form action="" className="w-full flex flex-col gap-6">
                <div>
                  <p className="mt-4">Your Name</p>
                  <input
                    type="text"
                    placeholder="abc"
                    className="mt-2 w-full h-[55px] lg:h-[75px] rounded-[10px] border-[1px] border-[#9f9f9f] px-4 lg:px-10"
                  />
                </div>
                <div>
                  <p className="mt-4">Email Address</p>
                  <input
                    type="text"
                    placeholder="abc@gmail.com"
                    className="mt-2 w-full h-[55px] lg:h-[75px] rounded-[10px] border-[1px] border-[#9f9f9f] px-4 lg:px-10"
                  />
                </div>
                <div>
                  <p className="mt-4">Subject</p>
                  <input
                    type="text"
                    placeholder="This is optional"
                    className="mt-2 w-full h-[55px] lg:h-[75px] rounded-[10px] border-[1px] border-[#9f9f9f] px-4 lg:px-10"
                  />
                </div>
                <div>
                  <p className="mt-4">Message</p>
                  <textarea
                    placeholder="Hi! I would like to ask about"
                    className="mt-2 w-full h-[135px] lg:h-[175px] rounded-[10px] border-[1px] border-[#9f9f9f] px-4 lg:px-10 pt-4"
                  />
                </div>
                <div className="mt-6 mb-6 ">
                  <Button1 />
                </div>
              </form>
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

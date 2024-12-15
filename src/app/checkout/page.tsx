"use client";
import Header from "../components/header";
import { Poppins } from "@next/font/google";
import Image from "next/image";
import Image1 from "../../../public/shopPage/top1.png";
import Logo from "../../../public/contactPage/logo.png";
import React, { useState } from "react";
import Trophy from "../../../public/shopPage/trophy 1.png";
import Gurantee from "../../../public/shopPage/guarantee.png";
import Shipping from "../../../public/shopPage/shipping.png";
import Support from "../../../public/shopPage/customer-support.png";
import Footer from "../components/footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function CheckOut() {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [cities, setCities] = useState<string[]>([]);

  const countryCityMap: { [key: string]: string[] } = {
    pk: ["Islamabad", "Karachi", "Lahore", "Others"],
    uk: ["London", "Manchaster", "Liverpool", "Others"],
    ca: ["Toronto", "Montreal", "Vancouver", "Others"],
    us: ["Now Tork", "Chicago", "Los Nageles", "Others"],
    au: ["Sydney", "Melbourne", "Brisbane", "Others"],
  };

  const handleCountryChange = (x: any) => {
    const country = x.target.value;
    setSelectedCountry(country);
    setCities(countryCityMap[country] || []);
  };
  return (
    <>
      <Header />
      <div className={`${poppins.className} `}>
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
              Checkout
            </p>
            <p className="text-[12px] sm:text-[14px] lg:text-[16px] font-medium">
              Home {">"} <span className="font-light">Checkout</span>
            </p>
          </div>
        </div>

        <div className="w-full h-full flex flex-wrap justify-center m-auto">
        <div className="w-[1242px] h-[1714px] m-auto flex flex-col lg:flex-row lg:justify-between">
        <div className="w-full lg:w-[608px] h-auto lg:h-[1714px] flex flex-col justify-center px-5 lg:px-0 mb-10"> 
        <p className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-semibold text-center">
                Billing details
              </p>

              <div className="w-full lg:w-[454px] h-auto flex flex-col lg:flex-row justify-between m-auto space-y-5 lg:space-y-0 mt-5">
                <div className="w-full lg:w-[212px] h-auto flex flex-col space-y-2">
                  <p>First Name</p>
                  <input
                    type="text"
                    className="w-full lg:w-[211px] h-[50px] lg:h-[75px] rounded-[10px] border-[1px] border-[#9F9F9F]"
                  />
                </div>
                <div className="w-full lg:w-[212px] h-auto flex flex-col space-y-2">
                  <p>Last Name</p>
                  <input
                    type="text"
                    className="w-full lg:w-[211px] h-[50px] lg:h-[75px] rounded-[10px] border-[1px] border-[#9F9F9F]"
                  />
                </div>
              </div>

              <div className="w-full lg:w-[454px] h-auto flex flex-col space-y-2 m-auto mt-5">
                <p>Company Name (Optional)</p>
                <input
                  type="text"
                  className="w-full lg:w-[453px] h-[50px] lg:h-[75px] rounded-[10px] border-[1px] border-[#9F9F9F]"
                />
              </div>

              <div className="w-full lg:w-[454px] h-auto flex flex-col space-y-2 m-auto mt-5">
                <p>Country / Region</p>
                <select
                  className="w-full lg:w-[453px] h-[50px] lg:h-[75px] rounded-[10px] border-[1px] border-[#9F9F9F] text-black px-3"
                  onChange={handleCountryChange}
                  value={selectedCountry}
                >
                  <option value="" disabled>
                    Select Country / Region
                  </option>
                  <option value="pk">Pakistan</option>
                  <option value="uk">United Kingdom</option>
                  <option value="ca">Canada</option>
                  <option value="us">United States</option>
                  <option value="au">Australia</option>
                  <option value="ot">Others</option>
                </select>
              </div>

              <div className="w-full lg:w-[454px] h-auto flex flex-col space-y-2 m-auto mt-5">
                <p>Town / City</p>
                <select
                  className="w-full lg:w-[453px] h-[50px] lg:h-[75px] rounded-[10px] border-[1px] border-[#9F9F9F] text-black px-3"
                  disabled={!selectedCountry}
                >
                  <option value="" disabled>
                    {selectedCountry
                      ? "Select City"
                      : "Please select a country first"}
                  </option>
                  {cities.map((city, index) => (
                    <option key={index} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>

              <div className="w-full lg:w-[454px] h-auto flex flex-col space-y-2 m-auto mt-5">
                <p>Province</p>
                <select className="w-full lg:w-[453px] h-[50px] lg:h-[75px] rounded-[10px] border-[1px] border-[#9F9F9F] text-black px-3">
                  <option value="" disabled selected>
                    Select Province / Region
                  </option>
                  <option value="ws">Western</option>
                  <option value="nr">Northern</option>
                  <option value="es">Eastern</option>
                  <option value="ar">Southern</option>
                  <option value="cr">Central</option>
                  <option value="oth">Others</option>
                </select>
              </div>

              <div className="w-full lg:w-[454px] h-auto flex flex-col space-y-2 m-auto mt-5">
                <p>Zip Code</p>
                <input
                  type="text"
                  className="w-full lg:w-[453px] h-[50px] lg:h-[75px] rounded-[10px] border-[1px] border-[#9F9F9F]"
                />
              </div>

              <div className="w-full lg:w-[454px] h-auto flex flex-col space-y-2 m-auto mt-5">
                <p>Phone</p>
                <input
                  type="text"
                  className="w-full lg:w-[453px] h-[50px] lg:h-[75px] rounded-[10px] border-[1px] border-[#9F9F9F]"
                />
              </div>

              <div className="w-full lg:w-[454px] h-auto flex flex-col space-y-2 m-auto mt-5">
                <p>Email address</p>
                <input
                  type="text"
                  className="w-full lg:w-[453px] h-[50px] lg:h-[75px] rounded-[10px] border-[1px] border-[#9F9F9F]"
                />
              </div>

              <div className="w-full lg:w-[454px] h-auto flex flex-col space-y-2 m-auto mt-10">
                <input
                  type="text"
                  placeholder="Additional Information"
                  className="px-5 w-full lg:w-[453px] h-[50px] lg:h-[75px] rounded-[10px] border-[1px] border-[#9F9F9F]"
                />
              </div>
            </div>

            <div className="w-full lg:w-[608px] h-auto lg:h-[789px] flex mb-10">
            <div className="w-full lg:w-[533px] h-auto lg:h-[616px] m-auto pb-10">
                <div className="w-full lg:w-[533px] h-auto lg:h-[180px] m-auto flex flex-col lg:flex-row justify-between border-b-2 border-[#D9D9D9] px-2 ">
                  <div className="w-full lg:w-[216px] h-auto lg:h-[180px] space-y-4 items-center flex-row">
                    <p className="text-[20px] lg:text-[24px]">Product</p>
                    <p className="text-[#9f9f9f]">
                      Asgaard sofa{" "}
                      <span className="text-[12px] text-black">X 1</span>
                    </p>
                    <p>Subtotal</p>
                    <p>Total</p>
                  </div>
                  <div className="w-full lg:w-[216px] h-auto lg:h-[180px] flex-row space-y-4">
                    <p className="text-[20px] lg:text-[24px] text-right">
                      Subtotal
                    </p>
                    <p className="text-right">Rs. 250,000.00</p>
                    <p className="text-right">Rs. 250,000.00</p>
                    <p className="text-[#B88E2F] text-[20px] lg:text-[24px] font-bold text-right">
                      Rs. 250,000.00
                    </p>
                  </div>
                </div>

                <div className="flex w-full lg:w-[191px] mt-7 justify-start lg:justify-between items-center">
                  <div className="w-[14px] h-[14px] rounded-full bg-black my-auto"></div>
                  <p className="my-auto">Direct Bank Transfer</p>
                </div>
                <p className="text-justify mt-3 text-[#9f9f9f]">
                  Make your payment directly into our bank account. Please use
                  your Order ID as the payment reference. Your order will not be
                  shipped until the funds have cleared in our account.
                </p>

                <div className="flex w-full lg:w-[191px] mt-5 justify-start lg:justify-between">
                  <div className="w-[14px] h-[14px] rounded-full bg-transparent border-[#9F9F9F] border-[1px] my-auto"></div>
                  <p className="text-[#9F9F9F]">Direct Bank Transfer</p>
                </div>

                <div className="flex w-full lg:w-[167px] mt-5 justify-start lg:justify-between">
                  <div className="w-[14px] h-[14px] rounded-full bg-transparent border-[#9F9F9F] border-[1px] my-auto"></div>
                  <p className="text-[#9F9F9F]">Cash On Delivery</p>
                </div>

                <p className="text-justify mt-5">
                  Your personal data will be used to support your experience
                  throughout this website, to manage access to your account, and
                  for other purposes described in our{" "}
                  <span className="font-semibold">privacy policy.</span>
                </p>

                <div className="flex m-auto items-start justify-center mt-10">
                  <button className="w-full lg:w-[318px] h-[64px] border-[1px] rounded-[10px] border-black hover:text-white hover:bg-black duration-300">
                    Place order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full max-w-[1440px] h-auto bg-[#FAF3EA] flex flex-wrap justify-center px-4 lg:px-0 lg:m-auto mt-64">
        <div className="w-full max-w-[1330px] h-auto flex flex-wrap justify-between items-start gap-6 lg:gap-0 lg:h-[270px] lg:flex-nowrap lg:m-auto lg:items-center">
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

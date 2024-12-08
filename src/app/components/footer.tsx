import { Poppins } from "@next/font/google";
import Link from "next/link";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Footer() {
  return (
    <>
<div className={`${poppins.className} w-full h-auto mt-10`}>
  <div className="w-full max-w-[1440px] h-auto m-auto px-4 sm:px-6 lg:px-10 flex flex-col border-t border-[#9f9f9f]">
    {/* Top Section */}
    <div className="w-full max-w-[1240px] m-auto flex flex-col lg:flex-row justify-between items-start lg:items-center mt-10 gap-10">
      {/* Company Info */}
      <div className="w-full lg:w-[35%] space-y-6 lg:space-y-16 pr-0 lg:pr-20">
        <p className="text-[20px] sm:text-[24px] font-bold">Funiro.</p>
        <p className="text-[#9f9f9f] text-[14px] sm:text-[16px] ">
          400 University Drive Suite 200 Coral Gables,
          <br />
          FL 33134 USA
        </p>
      </div>

      {/* Links Section */}
      <div className="flex flex-wrap justify-between lg:justify-start gap-10 lg:gap-20">
        {/* Links */}
        <div>
          <ul className="space-y-8">
            <li className="text-[#9f9f9f] font-semibold">Links</li>
            
            <li><Link href={"/"}>Home</Link></li>
            
            
            <li><Link href={"shop"}>Shop</Link></li>
            
            
            <li><Link href={"/"} >About</Link></li>
                        
            
            <li><Link href={"contact"} >Contact</Link></li>
            
          </ul>
        </div>

        {/* Help */}
        <div>
          <ul className="space-y-8">
            <li className="text-[#9f9f9f] font-semibold">Help</li>
            <li>Payment Options</li>
            <li>Returns</li>
            <li>Privacy Policies</li>
          </ul>
        </div>
      </div>

      {/* Newsletter */}
      <div className="w-full lg:w-[310px] space-y-8 ">
        <p className="text-[#9f9f9f] font-semibold">Newsletter</p>
        <div className="flex items-center gap-2  ">
          <input
            type="text"
            placeholder="Enter Your Email Address"
            className="text-[14px] w-full lg:w-[210px] px-2 border-b-[1px] border-black"
          />
          <button className="px-2 border-b-[1px] border-black">SUBSCRIBE</button>
        </div>
      </div>
    </div>

    {/* Bottom Section */}
    <div className="w-full border-t border-[#9f9f9f] mt-8 mb-8">
      <p className="text-[14px] sm:text-[16px] mt-4">
        2023 Funiro. All rights reserved.
      </p>
    </div>
  </div>
</div>

    </>
  );
}

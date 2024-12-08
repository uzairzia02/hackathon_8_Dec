import { Poppins } from "@next/font/google";
import Image from "next/image";
import Image1 from "../../../../public/homepage/ranges/image1.png";
import Image2 from "../../../../public/homepage/ranges/image2.png";
import Image3 from "../../../../public/homepage/ranges/image3.png";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Ranges() {
  return (
    <>
        <div className="w-full max-w-[1183px] h-auto m-auto mb-5 mt-10">
  {/* Title Section */}
  <div className={`${poppins.className} grid items-center text-center`}>
    <p className="text-[24px] md:text-[32px] font-bold mx-auto">
      Browse The Range
    </p>
    <p className="text-[16px] md:text-[20px] text-[#666666] mx-auto">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
  </div>

  {/* Image Grid Section */}
  <div className="grid gap-6 mt-8 sm:grid-cols-1 lg:grid-cols-3">
    {/* Card 1 */}
    <div className="w-full h-auto grid">
      <Image
        src={Image1}
        alt="1st Image"
        className="h-[300px] sm:h-[400px] md:h-[480px] w-full object-cover rounded-md"
      />
      <p
        className={`${poppins.className} font-semibold text-[20px] md:text-[24px] mx-auto mt-4 text-[#333333]`}
      >
        Dining
      </p>
    </div>

    {/* Card 2 */}
    <div className="w-full h-auto grid">
      <Image
        src={Image2}
        alt="2nd Image"
        className="h-[300px] sm:h-[400px] md:h-[480px] w-full object-cover rounded-md"
      />
      <p
        className={`${poppins.className} font-semibold text-[20px] md:text-[24px] mx-auto mt-4 text-[#333333]`}
      >
        Living
      </p>
    </div>

    {/* Card 3 */}
    <div className="w-full h-auto grid">
      <Image
        src={Image3}
        alt="3rd Image"
        className="h-[300px] sm:h-[400px] md:h-[480px] w-full object-cover rounded-md"
      />
      <p
        className={`${poppins.className} font-semibold text-[20px] md:text-[24px] mx-auto mt-4 text-[#333333]`}
      >
        Bedroom
      </p>
    </div>
  </div>
</div>


    </>
  );
}

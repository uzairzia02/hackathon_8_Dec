import { Poppins } from "@next/font/google";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Button1() {
  return (
    <>
     <button
          className={`${poppins.className} w-[200px] sm:w-[254px] h-[40px] sm:h-[48px] text-[#B88E2F] hover:text-white hover:bg-[#B88E2F] duration-200 border-[1px] border-[#B88E2F] flex mx-auto items-center justify-center`}
        >
          Show More
        </button>
    </>
  );
}

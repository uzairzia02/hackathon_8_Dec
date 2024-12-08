import Image from "next/image";
import LogoImage from "../../../public/headerImages/logo.png"
import AccountImage from "../../../public/headerImages/mdi_account-alert-outline.png"
import SearchImage from "../../../public/headerImages/akar-icons_search.png"
import HeartImage from "../../../public/headerImages/akar-icons_heart.png"
import ShoppingImage from "../../../public/headerImages/ant-design_shopping-cart-outlined.png"
import Link from "next/link";

export default function Header () {
    return (
        <>
        <div className="w-full h-[100px] flex items-center ">
  <div className="w-full max-w-[1286px] flex px-4 lg:px-[54px] my-[29px] justify-between mx-auto">
    
    {/* Logo */}
    <div className="flex items-center">
      <Image src={LogoImage} alt="Logo Image" className="w-auto h-auto" />
    </div>

    {/* Navigation Menu */}
    <div className="hidden lg:flex w-[380px] items-center justify-center">
      <ul className="flex w-full justify-between">
        <Link href={"/"} >
        <li className="text-sm md:text-base hover:text-blue-600 cursor-pointer">Home</li>
        </Link>
        <Link href={"shop"} >
        <li className="text-sm md:text-base hover:text-blue-600 cursor-pointer">Shop</li>
        </Link>
        <Link href={"blog"} >
        <li className="text-sm md:text-base hover:text-blue-600 cursor-pointer">Blog</li>
        </Link>
        <Link href={"contact"} >
        <li className="text-sm md:text-base hover:text-blue-600 cursor-pointer">Contact</li>
        </Link>
      </ul>
    </div>

    {/* Account/Icons */}
    <div className="flex h-[28px] w-[250px] items-center justify-between">
      <Image src={AccountImage} alt="Account Icon" className="h-6 w-6 md:h-8 md:w-8" />
      <Image src={SearchImage} alt="Search Icon" className="h-6 w-6 md:h-8 md:w-8" />
      <Image src={HeartImage} alt="Heart Icon" className="h-6 w-6 md:h-8 md:w-8" />
      <Image src={ShoppingImage} alt="Shopping Icon" className="h-6 w-6 md:h-8 md:w-8" />
    </div>

    {/* Mobile Menu Button */}
    <div className="lg:hidden flex items-center">
      <button className="text-gray-700 text-2xl">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>
    </div>

  </div>
</div>


        </>
    )
}
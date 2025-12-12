import Image from "next/image";
import { NavImages } from "../constants/Images";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="fixed inset-x-0 top-0 z-50">
      {/* Free shipping banner - always solid */}
      <p className="text-center capitalize bg-primary-600 text-white overline-sm py-[7.5px]">
        Enjoy Free shopping on all orders
      </p>

      <div className="lg:px-[120px] md:px-12 px-5 flex items-center justify-between py-2 bg-white/60 backdrop-blur-sm transition-all duration-300">
        {/* Mobile navigation */}
        <div className="lg:hidden flex items-center gap-2">
          <Image
            src={NavImages?.hamburgerMenu}
            alt="Search icon"
            width={24}
            height={24}
            className="flex lg:hidden cursor-pointer"
          />

          <Image
            src={NavImages?.headerSearch}
            alt="Search icon"
            width={24}
            height={24}
            className="flex lg:hidden cursor-pointer"
          />
        </div>

        {/* Logo */}
        <div className="py-[11px] flex flex-col">
          <div className="flex items-center gap-1">
            <Image
              src={NavImages?.navLogo}
              alt="forever navigation logo"
              width={30}
              height={20}
              className="w-5 h-5 sm:w-6 sm:h-6"
            />

            <h1 className="lg:text-[32px] text-2xl font-black text-Gray_404040 leading-3 tracking-wider">
              Forever
            </h1>
          </div>
          <p className="lg:text-[10px] text-[7.5px] ml-9">women clothing</p>
        </div>

        {/* Desktop Navigation links */}
        <ul className="hidden lg:flex lg:items-center md:gap-6">
          <Link href="/app" className="text-Gray_404040 body-lg cursor-pointer">
            Collection
          </Link>
          <Link href="/" className="text-Gray_404040 body-lg">
            New In
          </Link>
          <Link href="/" className="text-Gray_404040 body-lg">
            Forever Week
          </Link>
          <Link href="/" className="text-Gray_404040 body-lg">
            Plus Size
          </Link>
          <Link href="/" className="text-Gray_404040 body-lg">
            Sustainability
          </Link>
        </ul>

        {/* Icons */}
        <ul className="flex items-center gap-6">
          <Image
            src={NavImages?.headerSearch}
            alt="Search icon"
            width={24}
            height={24}
            className="lg:flex hidden cursor-pointer"
          />
          <Image
            src={NavImages?.headerProfile}
            alt="Profile icon"
            width={24}
            height={24}
            className="lg:flex hidden cursor-pointer"
          />
          <Image
            src={NavImages?.headerFavorite}
            alt="Favorites icon"
            width={24}
            height={24}
            className="cursor-pointer"
          />
          <Image
            src={NavImages?.headerBag}
            alt="Cart icon"
            width={24}
            height={24}
            className="cursor-pointer"
          />
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;

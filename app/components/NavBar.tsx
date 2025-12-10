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

      <div className="px-[120px] flex items-center justify-between py-2 bg-white/60 backdrop-blur-sm transition-all duration-300">
        {/* Logo */}
        <div className="py-[11px] flex flex-col">
          <div className="flex items-center gap-1">
            <Image
              src={NavImages?.navLogo}
              alt="forever navigation logo"
              width={30}
              height={20}
            />
            <h1 className="text-[32px] font-black text-Gray_404040 leading-3 tracking-wider">
              Forever
            </h1>
          </div>
          <p className="text-[10px] ml-9">women clothing</p>
        </div>

        {/* Navigation links */}
        <ul className="flex items-center gap-6">
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
            className="cursor-pointer"
          />
          <Image
            src={NavImages?.headerProfile}
            alt="Profile icon"
            width={24}
            height={24}
            className="cursor-pointer"
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

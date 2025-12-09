import Image from "next/image";
import { Images } from "../constants/Images.ts";

const NavBar = () => {
  return (
    <nav className="">
      <p className="text-center capitalize bg-primary-600 text-white overline-sm py-[7.5px]">
        Enjoy Free shopping on all orders
      </p>

      <div className="px-[120px] flex items-center justify-between py-2">
        <div className="py-[11px] flex flex-col">
          <div className="flex items-center  gap-1">
            <Image
              src={Images?.navLogo}
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

        <ul className="">Link list</ul>
        <div>icons</div>
      </div>
    </nav>
  );
};

export default NavBar;

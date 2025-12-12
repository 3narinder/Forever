import Image from "next/image";
import { footerInfo, socialIcons } from "../constants/Static";
import { footerImages } from "../constants/Images";

const Footer = () => {
  return (
    <footer className="grid md:grid-cols-2 bg-Gray_404040 lg:px-[120px] px-5 lg:pt-12 pt-8 lg:pb-8 pb-12 relative">
      {/* Join club left side*/}
      <div className="flex flex-col lg:w-[496px] lg:mb-0 mb-6">
        <h5 className="lg:h5 hm4 text-white lg:mb-6 mb-4">
          Join our club, get 15% off for your Birthday
        </h5>

        {/* email input */}
        <div className="relative lg:mb-4 mb-3">
          <input
            type="email"
            placeholder="Enter Your Email Address"
            className="outline-none border px-4 py-2 border-primary-50 placeholder:text-primary-50 body-xs w-full"
          />

          <Image
            src={footerImages?.arrow_forward}
            alt="footer input arrow logo"
            width={16}
            height={16}
            className="absolute top-2 right-4 cursor-pointer"
          />
        </div>

        {/* checkbox */}
        <div className="flex items-center gap-2 lg:mb-[104px]">
          <label className="relative flex items-center cursor-pointer group">
            {/* Hidden native checkbox */}
            <input
              type="checkbox"
              id="marketing-checkbox"
              className="sr-only"
            />

            {/* Custom checkbox box */}
            <div
              className="
                w-4 h-4 border-2 border-white/60
                bg-white
                group-has-checked:bg-Gray_404040
                group-has-checked:border-white
                transition duration-200
                flex items-center justify-center
              "
            >
              {/* ✅ CHECKMARK NOW VISIBLE */}
              <svg
                className="
                  w-4 h-4 text-white opacity-0
                  group-has-checked:opacity-100
                  transition-opacity
                "
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </label>

          <label
            htmlFor="marketing-checkbox"
            className="lg:overline-sm overlay-mb  text-white cursor-pointer leading-tight capitalize"
          >
            By submitting your email, you agree to receive advertising emails
            from forever.
          </label>
        </div>

        {/* Desktop social icon list */}
        <div className="lg:flex hidden flex-col gap-11">
          <div className="flex items-center gap-4">
            {socialIcons?.map((icon) => (
              <Image
                key={icon?.name}
                src={icon?.image}
                alt="Instagram"
                width={24}
                height={24}
              />
            ))}
          </div>

          <div className="text-Gray_cbcbcb flex items-center gap-2">
            <span className="text-xl font-semibold">&copy;</span>
            <span className="caption-md">
              2023 forever. All right reserved.
            </span>
          </div>
        </div>
      </div>

      {/* support footer links right side */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:gap-8 gap-4">
        {footerInfo.map((section) => (
          <div key={section?.id} className="flex flex-col lg:gap-6 gap-2">
            <h5 className="lg:h5 hm4 text-white capitalize">{section.title}</h5>

            <ul className="flex flex-col lg:gap-3 gap-2">
              {section.links.map((link) => (
                <li
                  key={link.id}
                  className="lg:body-lg body-m-lg text-white cursor-pointer"
                >
                  {link.label}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* mobile social media */}
      <div className="flex lg:hidden flex-col gap-6 mt-6">
        <div className="flex items-center gap-4">
          {socialIcons?.map((icon) => (
            <Image
              key={icon?.name}
              src={icon?.image}
              alt="Instagram"
              width={24}
              height={24}
            />
          ))}
        </div>

        <div className="text-Gray_cbcbcb flex items-center gap-2">
          <span className="text-xl font-semibold">&copy;</span>
          <span className="caption-md">2023 forever. All right reserved.</span>
        </div>
      </div>

      {/* chat box */}

      <div className="absolute flex items-center justify-center lg:bottom-14 bottom-20 lg:right-28 right-8 bg-primary-600 w-14 h-12 border border-white cursor-pointer">
        <Image
          src={footerImages?.chatBox}
          alt="Chat box of forever"
          width={24}
          height={24}
        />
      </div>
    </footer>
  );
};

export default Footer;

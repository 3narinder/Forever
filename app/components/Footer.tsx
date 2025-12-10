import Image from "next/image";
import { footerImages } from "../constants/Images";
import { footerInfo } from "../constants/Static";

const Footer = () => {
  return (
    <footer className="grid md:grid-cols-2 bg-Gray_404040 md:px-[120px] md:pt-12 pb-8">
      {/* Join club */}
      <div className="flex flex-col lg:w-[496px]">
        <h5 className="h5 text-white mb-6">
          Join our club, get 15% off for your Birthday
        </h5>

        <div className="relative mb-4">
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

        <div className="flex items-start gap-2 lg:mb-[104px]">
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
                w-5 h-5 border-2 border-white/60
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
            className="overline-sm text-white cursor-pointer leading-tight"
          >
            By submitting your email, you agree to receive advertising emails
            from forever.
          </label>
        </div>

        <div className="flex flex-col gap-11">
          <div className="flex items-center gap-4">
            <Image
              src={footerImages?.instagram}
              alt="Instagram"
              width={24}
              height={24}
            />
            <Image
              src={footerImages?.facebook}
              alt="facebook"
              width={24}
              height={24}
            />
            <Image
              src={footerImages?.tikTok}
              alt="tikTok"
              width={24}
              height={24}
            />
            <Image
              src={footerImages?.pinterest}
              alt="pinterest"
              width={24}
              height={24}
            />
          </div>

          <div className="text-Gray_cbcbcb flex items-center gap-2">
            <span className="text-xl font-semibold">&copy;</span>
            <span className="caption-md">
              2023 forever. All right reserved.
            </span>
          </div>
        </div>
      </div>

      {/* support footer links */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {footerInfo.map((section) => (
          <div key={section?.id} className="flex flex-col gap-6">
            <h5 className="h5 text-white capitalize">{section.title}</h5>

            <ul className="flex flex-col gap-3">
              {section.links.map((link) => (
                <li key={link.id} className="body-lg text-white cursor-pointer">
                  {link.label}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;

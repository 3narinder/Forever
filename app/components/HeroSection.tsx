import React from "react";
import { landingPageImages } from "../constants/Images";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="h-screen">
      <Image
        src={landingPageImages?.heroImage}
        alt="Forever hero page image"
        height={1000}
        width={1000}
        className="w-full h-auto"
      />
    </div>
  );
};

export default HeroSection;

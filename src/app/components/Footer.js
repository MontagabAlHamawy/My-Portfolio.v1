"use client";
import { FaCopyright } from "react-icons/fa6";

function Footer() {
  return (
    <div className="static bottom-0 left-0">
      <div className="flex flex-col xl:flex-row justify-between items-center pb-28 pt-5 xl:pb-5 xl:py-5 px-10 gap-y-3 bg-white/10 text-center">
        <p className="font-extralight text-white/80 ">Copyright <FaCopyright className="inline"/> 2023 All Rights Reserved</p>
        <p className="text-sm xl:text-base font-extralight text-white/80">
          Made with love <span className="text-red-500">❤</span> by Montagab
          AL-Hamawy
        </p>
      </div>
    </div>
  );
}

export default Footer;

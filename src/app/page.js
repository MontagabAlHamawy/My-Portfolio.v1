"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "./utils/motion";
import { Roboto_Mono } from "next/font/google";
export const roboto = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }}
      className=" flex flex-col-reverse xl:flex-row justify-center xl:justify-between items-center mt-20 xl:mt-0 xl:pl-40 xl:pr-32 h-[90vh] gap-y-10 gap-x-20"
    >
      <div className="flex-1 flex justify-center items-start gap-y-5 flex-col px-4 xl:px-0 mb-44 xl:mb-0 xl:pl-0 text-white/80 text-xl xl:text-lg font-extralight">
        <motion.h1
          variants={fadeIn("up", "tween", 0.2, 1)}
          className={`text-2xl xl:text-4xl text-white font-500 uppercase ${roboto.className}`}
          // className={}
        >
          Front-End Developer
        </motion.h1>
        <motion.p
          variants={fadeIn("up", "tween", 0.4, 1)}
          className="font-500 text-white/80"
        >
          Hi , I am{" "}
          <span className="text-accent font-normal">Montagab Al-Hamawy</span>, a
          seasoned Front-End Developer with a passion for creative
          problem-solving. My expertise lies in crafting elegant and responsive
          web designs, where coding is not just a task but a form of artistic
          expression.
        </motion.p>
        <Link
          href={"/about"}
          aria-label="About"
          className="flex justify-center items-center"
        >
          <motion.div
            variants={fadeIn("up", "tween", 0.2, 1)}
            className="btn btn-sm btn-accent w-[164px] xl:mb-0"
          >
            <p className="text-base font-400 text-white">about</p>
          </motion.div>
        </Link>
      </div>
      <div className="mx-auto">
        <motion.div
          variants={fadeIn("down", "tween", 0.6, 1)}
          className="bg-accent shadow-sm w-[270px]   flex items-center justify-center rounded-tl-full "
        >
          <img
            src={"/m2.png"}
            width={300}
            height={300}
            alt="montagab"
            // className=" rounded-br-md"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

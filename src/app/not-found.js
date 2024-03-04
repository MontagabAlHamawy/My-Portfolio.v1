"use client";


import Link from "next/link";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "./utils/motion";

export default function NotFound() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }}
      className="w-full xl:h-[90vh] flex flex-col justify-center items-center"
    >
      <motion.div variants={fadeIn("down", "tween", 0.1, 1)}>
        <img
          src={"/error.png"}
          width={600}
          className=" md:mt-[-100px] xl:mt-[-150px] ml-[-10px]"
        />
      </motion.div>
      {/* <motion.div > */}
        <motion.span variants={fadeIn("up", "tween", 0.2, 1)} className="text-accent text-xl md:text-2xl xl:text-2xl font-normal mt-[-50px] md:mt-[-100px] xl:mt-[-100px]">
          Page not Found
        </motion.span>
      {/* </motion.div> */}
      <Link
        href={"/"}
        aria-label="home"
        className="flex justify-center items-center"
      >
        <motion.div
          variants={fadeIn("up", "tween", 0.1, 1)}
          className="btn btn-sm btn-accent w-[164px] mt-5 xl:mb-0"
        >
          <p className="text-base font-400 text-white">Home</p>
        </motion.div>
      </Link>
    </motion.div>
  );
}

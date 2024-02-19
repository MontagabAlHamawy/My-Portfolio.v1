"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "../utils/motion";
import {
  FaBootstrap,
  FaHtml5,
  FaCss3,
  FaReact,
  FaSquareJs,
  FaWordpress,
  FaGit,
} from "react-icons/fa6";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
export const ProgramS = [
  { name: "HTML", Experience: 93, icone: <FaHtml5 /> },
  { name: "CSS", Experience: 90, icone: <FaCss3 /> },
  { name: "JS", Experience: 68, icone: <FaSquareJs /> },
  { name: "React", Experience: 20, icone: <FaReact /> },
  { name: "Next.js", Experience: 35, icone: <SiNextdotjs /> },
  { name: "Bootstrap", Experience: 55, icone: <FaBootstrap /> },
  { name: "Tailwind Css", Experience: 67, icone: <SiTailwindcss /> },
  { name: "WordPress", Experience: 40, icone: <FaWordpress /> },
  { name: "Git", Experience: 53, icone: <FaGit /> },
];
export const Languages = [
  { name: "Arabic", Experience: 70, icone: <div>Ar</div> },
  { name: "English", Experience: 1, icone: <div>En</div> },
];

function Skills() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }}
      className="flex flex-col justify-between items-center gap-y-8 xl:mt-20 "
    >
      <div className="xl:mt-10">
        <motion.h1
          variants={fadeIn("down", "tween", 0.2, 1)}
          className="text-2xl text-white font-extralight uppercase "
        >
          Programing Skills
        </motion.h1>
      </div>
      <div className="grid grid-cols-2 xl:grid-cols-3 gap-x-5 gap-y-5 xl:gap-x-16 xl:gap-y-10">
        {ProgramS.map((link, index) => {
          const conicGradient = `conic-gradient(#ededed ${
            100 - link.Experience
          }deg,#707afe 0deg)`
          return (
            <motion.div
            variants={fadeIn("up", "tween", 0.2, 1)}
            key={index} href={link.path} className={``}>
              <div
                className="text-2xl bg-white/10 px-7 pt-3 pb-12 rounded-lg  xl:text-xl text-white hover:text-accent transition-all"
              >
                <div>
                  <div
                    className="relative h-[90px] w-[90px] rounded-full flex items-center justify-center before:content-[''] before:absolute before:h-[75px] before:w-[75px] before:bg-body before:rounded-[50%]"
                    style={{ background: conicGradient }}
                  >
                    <span className="relative font-bold text-white transition-all hover:text-accent text-4xl">
                      {link.icone}
                    </span>
                    {/* <p className="text-base font-medium absolute bottom-[6px]">
                      {link.Experience}%
                    </p> */}
                    <p className="text-base font-extralight text-white/80 mr-[-10px]  ml-[-10px] absolute -bottom-10 ">
                      {link.name}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
      <motion.div variants={fadeIn("down", "tween", 0.1, 1)} className="mt-20">
        <h1 className="text-2xl text-white font-extralight uppercase">Languages</h1>
      </motion.div>
      <div className="grid grid-cols-2 gap-x-5 gap-y-5 xl:gap-x-16 xl:gap-y-10 mb-20">
        {Languages.map((link, index) => {
          const conicGradient = `conic-gradient(#ededed ${
            100 - link.Experience
          }deg,#707afe 0deg)`;
          return (
            <motion.div
            variants={fadeIn("up", "tween", 0.8, 1)}
            key={index} href={link.path} className={``}>
              <div
                className=" bg-white/10 px-7 pt-3 pb-12 rounded-lg text-2xl xl:text-xl text-white hover:text-accent transition-all"
              >
                <div>
                  <div
                    className="relative h-[90px] w-[90px] rounded-full flex items-center justify-center before:content-[''] before:absolute before:h-[75px] before:w-[75px] before:bg-body before:rounded-[50%]"
                    style={{ background: conicGradient }}
                  >
                    <div className="relative  font-bold text-white hover:text-accent text-2xl  xl:text-3xl">
                      {link.icone}
                    </div>
                    {/* <span className="text-base font-medium absolute bottom-[6px]">
                      {link.Experience}%
                    </span> */}
                    <p className="text-base font-extralight text-white/80 absolute -bottom-10">
                      {link.name}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}

export default Skills;

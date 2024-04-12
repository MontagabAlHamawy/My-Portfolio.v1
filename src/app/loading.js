"use client"
import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex flex-col justify-center items-center  w-full  md:h-[90vh]">
      <img
            src={"/logo.png"}
            width={200}
            height={200}
            alt="montagab"
            // className="rotate-[7deg]"
          />
      <p className="text-accent">Loading...</p>
    </div>
  )
}

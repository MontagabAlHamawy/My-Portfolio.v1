"use client"
import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex flex-col justify-center items-center  w-full  md:h-[90vh]">
      <img
     src={"/icon.png"}
     width={300}
     height={300}
     alt="montagab"
      />
      <p className="text-accent">Loading...</p>
    </div>
  )
}

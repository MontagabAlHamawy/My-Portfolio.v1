import React from "react";

export default function NotFound() {
  return (
    <div className="w-full xl:h-[90vh] flex flex-col justify-center items-center">
      <img src={"/error.png"} width={600} className="xl:mt-[-150px] ml-[-10px]"/>
      <p className="text-xl xl:text-3xl font-medium text-accent mt-[-50px] xl:mt-[-100px] text-center uppercase">Page not Found </p>
    </div>
  );
}

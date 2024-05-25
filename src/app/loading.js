"use client"
import Image from "next/image";
import { useEffect, useState } from 'react';

export default function Loading() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // تعيين المدة الزمنية لعرض صفحة التحميل هنا (على سبيل المثال، 3 ثواني)
    const timer = setTimeout(() => {
      setShow(false);
    }, 30000); // 3000 ملي ثانية = 3 ثواني

    return () => clearTimeout(timer); // تنظيف المؤقت عند إلغاء التثبيت
  }, []);

  if (!show) return null;

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

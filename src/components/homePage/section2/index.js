'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


export default function Section2() {

  const [imgSrc, setImgSrc] = useState("Arian");
  const [buttonclass, setButtonClass] = useState("ring-[5px] ring-inset px-6 py-2 rounded-full ring-[#017848] text-[#017848]")

  function handleClick(name) {
    setImgSrc(name);
  }

  return (
    <div className="flex flex-col-reverse md:flex-row justify-between items-center px-5 sm:px-10 md:px-20 lg:px-40 xl:px-60 w-[100vw] py-20">
      <div className="flex flex-col-reverse md:flex-col w-[300px]">
        <Image src={`/still-quote-${imgSrc}.webp`} width={341} height={606} className="rounded-2xl" alt="card" />
        <div className="flex justify-between gap-2 md:gap-4 py-6">
          <button onClick={() => handleClick('Arian')} className={imgSrc === 'Arian' ? buttonclass : `ring-[1px] px-6 py-3 rounded-full ring-inset ring-gray-300 transition-all duration-300 hover:ring-[5px] hover:ring-[#017848] hover:text-[#017848] `}>Arian</button>
          <button onClick={() => handleClick('Amanda')} className={imgSrc === 'Amanda' ? buttonclass : `ring-[1px] px-6 py-3 rounded-full ring-inset ring-gray-300 transition-all duration-300 hover:ring-[5px] hover:ring-[#017848] hover:text-[#017848] `}>Amanda</button>
          <button onClick={() => handleClick('Paul')} className={imgSrc === 'Paul' ? buttonclass : `ring-[1px] px-6 py-3 rounded-full ring-inset ring-gray-300 transition-all duration-300 hover:ring-[5px] hover:ring-[#017848] hover:text-[#017848] `}>Paul</button>
        </div>
      </div>
      <div className="md:w-[30vw] flex-col">
        <h1 className="text-5xl lg:text-7xl text-green-950 font-semibold">Find out why we’re better.</h1>
        <button className="w-full md:w-auto py-5 my-4 px-8 rounded-full bg-[#004733] text-white hover:bg-[#017848] transition-all duration-300"><Link href="/about-us">See all our stories</Link></button>
        <p className="flex justify-center md:justify-normal items-center space-x-2 text-sm">
          <Image src="/green-star.png" width={30} height={30} alt="star" />
          <span>Trustpilot</span>
          <span className="text-green-900">Excellent &nbsp; 4.4 out of 5</span>
        </p>


      </div>
    </div>
  )
}

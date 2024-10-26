'use client'
import Link from "next/link"
import { useState } from "react"
import './index.css'

export default function Hammenu({ setHam }) {

  const [link1 , setLink1] = useState(false)
  const [link2 , setLink2] = useState(false)
  const [link3 , setLink3] = useState(false)
  const [link4 , setLink4] = useState(false)
  const [link5 , setLink5] = useState(false)

  const Bettersvg = () => {
    return (
      <svg role="img" class="icon icon-LogoBetter2021" width="80px" height="40px" viewBox="0 0 495 133" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>Better</title><path d="M427.207 129.574H457.274V70.2463C460.072 61.2943 473.189 52.9226 492.108 57.1085V28.0354C476.38 28.0354 462.848 38.3964 457.274 54.9119V30.0247H427.207V129.574ZM378.24 49.7521C387.399 49.7521 391.979 54.7254 391.979 59.5122C391.979 66.4749 386.405 73.4582 355.342 77.0224C355.342 60.6934 365.703 49.7521 378.24 49.7521ZM416.659 120.414V93.9316C406.712 102.303 393.367 106.883 382.613 106.883C371.464 106.883 362.512 100.915 358.119 91.3621C397.532 88.5853 416.845 75.0331 416.845 55.9273C416.845 40.593 401.117 27.6624 379.214 27.6624C350.141 27.6624 326.663 48.9647 326.663 80.0271C326.663 109.287 350.742 130.983 381.017 130.983C393.968 130.962 407.106 127.191 416.659 120.414ZM304.78 98.7184V49.7521H325.275V30.2526L304.78 30.4599V6.56731L247.836 46.7889V11.7478L200.258 47.5763V49.7728H218.183V104.313C218.183 121.637 230.927 130.796 248.251 130.796C255.814 130.796 262.197 129.408 267.957 126.03V105.515C265.16 107.111 261.782 108.313 258.011 108.313C251.649 108.313 247.857 105.122 247.857 99.5473V49.7728H275.127V104.127C275.127 121.637 287.871 130.796 305.381 130.796C313.152 130.796 319.514 129.802 325.689 126.03V105.329C323.099 106.924 319.12 108.313 315.141 108.313C308.759 108.271 304.78 104.894 304.78 98.7184ZM159.664 49.7521C168.823 49.7521 173.402 54.7254 173.402 59.5122C173.402 66.4749 167.828 73.4582 136.766 77.0224C136.766 60.6934 147.106 49.7521 159.664 49.7521ZM198.082 120.414V93.9316C188.136 102.303 174.791 106.883 164.036 106.883C152.888 106.883 143.936 100.915 139.543 91.3621C178.956 88.5853 198.269 75.0331 198.269 55.9273C198.269 40.593 182.541 27.6624 160.638 27.6624C131.564 27.6624 108.086 48.9647 108.086 80.0271C108.086 109.287 132.165 130.983 162.44 130.983C175.392 130.962 188.53 127.191 198.082 120.414ZM53.5459 76.0277C62.8915 76.0277 70.6623 81.8092 70.6623 91.5486C70.6623 100.708 62.8915 106.282 53.5459 106.282H30.8552V76.0277H53.5459ZM51.9502 25.0721C60.9022 25.0721 68.072 30.6464 68.072 39.2046C68.072 48.3638 60.9022 53.938 51.9502 53.938H30.8552V25.0721H51.9502ZM0 1.967V129.574H60.1147C83.1991 129.574 101.331 115.441 101.331 93.9316C101.331 80.1929 92.5655 69.2516 79.8215 64.0711C91.3637 58.8906 99.1345 48.7367 99.1345 36.5936C99.1345 15.685 80.8161 1.94629 57.5245 1.94629H0V1.967Z" fill="currentColor"></path></svg>
    )
  }

  const Crossvg = () => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x "><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
    )
  }

  const Arrowsvg = () => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down ml-2 inline-block group-open:rotate-180 fill-black stroke-none"><path d="m6 9 6 6 6-6"></path></svg>
    )
  }

  return (
    <div className="z-[2000] w-[100vw] min-h-screen bg-white p-8 flex flex-col justify-between animate">
      <div>
        <div className="flex justify-between items-center">
          <Bettersvg />
          <span onClick={() => setHam(false)}><Crossvg /></span>
        </div>

        <ul className="flex flex-col justify-center items-start font-thin">
  {/* Buy */}
  <li onClick={() => setLink1(!link1)} className="py-2 px-4 mx-5 mt-5 w-full font-extralight rounded-full hover:text-[#004733]">
    <div className="flex justify-between items-center">
      <span>Buy</span><Arrowsvg />
    </div>
    <ul className={`${link1 ? 'flex flex-col' : 'hidden'} rounded-lg mt-3`}>
      {[
        "Apply now",
        "Purchase rates",
        "Affordability calculator",
        "Mortgage calculator",
        "Rent vs buy calculator",
        "Find an agent",
        "VA loans",
        "Learning center"
      ].map((item) => (
        <li key={item} className="w-full py-3 px-2 rounded-md hover:bg-[#f6f6f3] group">{item}</li>
      ))}
    </ul>
  </li>

  {/* Refinance */}
  <li onClick={() => setLink2(!link2)} className="py-2 px-4 mx-5 mt-5 w-full font-extralight rounded-full hover:text-[#004733]">
    <div className="flex justify-between items-center">
      <span>Refinance</span><Arrowsvg />
    </div>
    <ul className={`${link2 ? 'flex flex-col' : 'hidden'} rounded-lg mt-3`}>
      {[
        "Apply Now",
        "Refinance rates",
        "Cash-out refinance calculator",
        "Learning Center"
      ].map((item) => (
        <li key={item} className="w-full py-3 px-2 rounded-md hover:bg-[#f6f6f3] group">{item}</li>
      ))}
    </ul>
  </li>

  {/* HELOC */}
  <li onClick={() => setLink3(!link3)} className="py-2 px-4 mx-5 mt-5 w-full font-extralight rounded-full hover:text-[#004733]">
    <div className="flex justify-between items-center">
      <span>HELOC</span><Arrowsvg />
    </div>
    <ul className={`${link3 ? 'flex flex-col' : 'hidden'} rounded-lg mt-3`}>
      {[
        "Apply Now",
        "Calculate your Cash 💵",
        "HELOC vs. Cash-out Refinance",
        "Learning Center"
      ].map((item) => (
        <li key={item} className="w-full py-3 px-2 rounded-md hover:bg-[#f6f6f3] group">{item}</li>
      ))}
    </ul>
  </li>

  {/* Rates */}
  <li onClick={() => setLink4(!link4)} className="py-2 px-4 mx-5 mt-5 w-full font-extralight rounded-full hover:text-[#004733]">
    <div className="flex justify-between items-center">
      <span>Rates</span><Arrowsvg />
    </div>
    <ul className={`${link4 ? 'flex flex-col' : 'hidden'} rounded-lg mt-3`}>
      {[
        "Purchase mortgage rates",
        "Refinance rates",
        "Refinance cash-out rates",
        "HELOC rates",
        "Purchase VA rates"
      ].map((item) => (
        <li key={item} className="w-full py-3 px-2 rounded-md hover:bg-[#f6f6f3] group">{item}</li>
      ))}
    </ul>
  </li>

  {/* Better+ */}
  <li onClick={() => setLink5(!link5)} className="py-2 px-4 mx-5 mt-5 w-full font-extralight rounded-full hover:text-[#004733]">
    <div className="flex justify-between items-center">
      <span>Better+</span><Arrowsvg />
    </div>
    <ul className={`${link5 ? 'flex flex-col' : 'hidden'} rounded-lg mt-3`}>
      {[
        "Get Insurance",
        "Title and Closing",
        "Better Attorney Match",
        "Learning Center",
        "Better Agent Match",
        "Better Duo"
      ].map((item) => (
        <li key={item} className="w-full py-3 px-2 rounded-md hover:bg-[#f6f6f3] group">{item}</li>
      ))}
    </ul>
  </li>
  <li className="py-2 px-4 mx-5 mt-5 w-full font-extralight rounded-full hover:text-[#004733]"><div className="flex justify-center items-center cursor-pointer bg-[#f0f7f1] rounded-full py-2">
            <span className="mr-[0.7rem]"><svg fill="none" height="21" viewBox="0 0 20 21" width="20" xmlns="http://www.w3.org/2000/svg"><title>Phone</title><path clip-rule="evenodd" d="M1.1116 0.0151367H5.00049C5.6116 0.0151367 6.1116 0.516439 6.1116 1.12914C6.1116 2.52165 6.33382 3.85845 6.74493 5.10614C6.86715 5.49604 6.77827 5.9305 6.46715 6.24242L4.02271 8.69323C5.62271 11.8459 8.20049 14.4192 11.3449 16.0345L13.7894 13.5837C14.0116 13.3721 14.2894 13.2607 14.5783 13.2607C14.6894 13.2607 14.8116 13.2718 14.9227 13.3164C16.1672 13.7285 17.5116 13.9513 18.8894 13.9513C19.5005 13.9513 20.0005 14.4526 20.0005 15.0653V18.9532C20.0005 19.5659 19.5005 20.0672 18.8894 20.0672C8.45604 20.0672 0.000488281 11.5896 0.000488281 1.12914C0.000488281 0.516439 0.500488 0.0151367 1.1116 0.0151367ZM3.93382 2.24315C4.00049 3.23461 4.16715 4.20379 4.43382 5.12842L3.10049 6.46522C2.64493 5.12842 2.35604 3.71363 2.25604 2.24315H3.93382ZM14.8894 15.6335C15.8338 15.9008 16.8005 16.0679 17.7783 16.1348V17.7947C16.3116 17.6944 14.9005 17.4047 13.556 16.9591L14.8894 15.6335Z" fill="#017848" fill-rule="evenodd"></path></svg></span>
            <span className="">Need help? Call <u>(415) 523 8837</u></span>
          </div></li>
</ul>


      </div>
      <div>
        <button className="w-full font-thin text-center text-lg rounded-full p-4 mb-5 bg-[#017848] text-white hover:bg-[#004733] transition-all duration-300">Continue</button>
        <button className="flex font-thin justify-center items-center w-full rounded-full p-4 text-lg border-[1px] border-gray-300 hover:ring-[5px] ring-inset ring-[#004733] transition-all duration-300 hover:text-[#004733]">Sign in &nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user "><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></button>
      </div>
    </div>
  )
}

'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Hammenu from "@/components/hammenu";
import ReactPlayer from "react-player";
import Section4 from "@/components/homePage/section4";
import Footer from "@/components/homePage/footer";


export default function Aboutus() {

   const [popUp, setpopUp] = useState(false);

   function handlepop() {
      setpopUp(true)
   }

   function handlepopClose() {
      setpopUp(false)
   }

   const events = [
      {
         year: '2014',
         description: "After Vishal Garg&#39;s first attempt to purchase his own dream home...",
      },
      {
         year: '2015',
         description: "Better Mortgage funds its first mortgage loan entirely online...",
      },
      {
         year: '2016',
         description: "Another major event in 2016...",
      },
   ];


   const Playsvg = () => {
      return (
         <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-play absolute text-center"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
      )
   }




   const [ham, setHam] = useState(false);

  function handleHam() {
    setHam(true)
  }

  const Bettersvg = () => {
    return (
      <svg role="img" class="icon icon-LogoBetter2021" width="65px" height="20px" viewBox="0 0 495 133" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>Better</title><path d="M427.207 129.574H457.274V70.2463C460.072 61.2943 473.189 52.9226 492.108 57.1085V28.0354C476.38 28.0354 462.848 38.3964 457.274 54.9119V30.0247H427.207V129.574ZM378.24 49.7521C387.399 49.7521 391.979 54.7254 391.979 59.5122C391.979 66.4749 386.405 73.4582 355.342 77.0224C355.342 60.6934 365.703 49.7521 378.24 49.7521ZM416.659 120.414V93.9316C406.712 102.303 393.367 106.883 382.613 106.883C371.464 106.883 362.512 100.915 358.119 91.3621C397.532 88.5853 416.845 75.0331 416.845 55.9273C416.845 40.593 401.117 27.6624 379.214 27.6624C350.141 27.6624 326.663 48.9647 326.663 80.0271C326.663 109.287 350.742 130.983 381.017 130.983C393.968 130.962 407.106 127.191 416.659 120.414ZM304.78 98.7184V49.7521H325.275V30.2526L304.78 30.4599V6.56731L247.836 46.7889V11.7478L200.258 47.5763V49.7728H218.183V104.313C218.183 121.637 230.927 130.796 248.251 130.796C255.814 130.796 262.197 129.408 267.957 126.03V105.515C265.16 107.111 261.782 108.313 258.011 108.313C251.649 108.313 247.857 105.122 247.857 99.5473V49.7728H275.127V104.127C275.127 121.637 287.871 130.796 305.381 130.796C313.152 130.796 319.514 129.802 325.689 126.03V105.329C323.099 106.924 319.12 108.313 315.141 108.313C308.759 108.271 304.78 104.894 304.78 98.7184ZM159.664 49.7521C168.823 49.7521 173.402 54.7254 173.402 59.5122C173.402 66.4749 167.828 73.4582 136.766 77.0224C136.766 60.6934 147.106 49.7521 159.664 49.7521ZM198.082 120.414V93.9316C188.136 102.303 174.791 106.883 164.036 106.883C152.888 106.883 143.936 100.915 139.543 91.3621C178.956 88.5853 198.269 75.0331 198.269 55.9273C198.269 40.593 182.541 27.6624 160.638 27.6624C131.564 27.6624 108.086 48.9647 108.086 80.0271C108.086 109.287 132.165 130.983 162.44 130.983C175.392 130.962 188.53 127.191 198.082 120.414ZM53.5459 76.0277C62.8915 76.0277 70.6623 81.8092 70.6623 91.5486C70.6623 100.708 62.8915 106.282 53.5459 106.282H30.8552V76.0277H53.5459ZM51.9502 25.0721C60.9022 25.0721 68.072 30.6464 68.072 39.2046C68.072 48.3638 60.9022 53.938 51.9502 53.938H30.8552V25.0721H51.9502ZM0 1.967V129.574H60.1147C83.1991 129.574 101.331 115.441 101.331 93.9316C101.331 80.1929 92.5655 69.2516 79.8215 64.0711C91.3637 58.8906 99.1345 48.7367 99.1345 36.5936C99.1345 15.685 80.8161 1.94629 57.5245 1.94629H0V1.967Z" fill="currentColor"></path></svg>
    )
  }

  const Arrowsvg = () => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#004733" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right text-transparent group-hover/sub-menu:text-accentPrimary"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
    )
  }

  const Hamsvg = () => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu "><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
    )
  }


   const content = (
      <div className="bg-[#f6f6f3] relative">

         <div onClick={handlepopClose} className={popUp ? `bg-white opacity-60 absolute top-0 bottom-0 left-0 right-0 z-10` : ``}></div>
         {
  popUp ? (
    <div className={`fixed z-20 top-[20%] left-[7%]  sm:left-[10%] md:left-[15%] w-[350px] h-[300px] sm:w-[550px] sm:h-[300px] md:w-[650px] md:h-[300px] lg:w-[800px] lg:h-[350px] xl:w-[1000px] xl:h-[500px]`}>
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=1KjYlLBM9j4`}
        controls
        playing={true}
        width="100%"
        height="100%"
      />
    </div>
  ) : null
}


         {/*HEADER*/ }

<div className="flex justify-between items-center bg-[#eefaf5] px-5 sm:px-10 md:px-24 py-6 fixed top-0 left-0 right-0 z-[1000]">
   <div className="flex justify-center items-center">
        <Link href='/'><Bettersvg /></Link>
        <ul className="hidden justify-center items-center font-thin xl:flex">
          <li className="relative group py-2 px-4 mx-5 font-extralight rounded-full hover:bg-[#d9e2dc] hover:text-[#004733]">Buy
            <ul className="absolute hidden left-0 bg-white top-full rounded-lg shadow-md p-4 group-hover:flex group-hover:flex-col ">
              {
                ["Apply now",
                  "Purchase rates",
                  "Affordability calculator",
                  "Mortgage calculator",
                  "Rent vs buy calculator",
                  "Find an agent",
                  "VA loans",
                  "Learning center"].map((item) => {
                    return (
                      <li key={item} className="text-nowrap py-3 px-2 rounded-md flex gap-8 justify-between hover:bg-[#f6f6f3] group"><span>{item}</span><span><Arrowsvg /></span></li>
                    )
                  })
              }
            </ul>
          </li>
          <li className="relative group py-2 px-4 mx-5 font-extralight rounded-full hover:bg-[#d9e2dc] hover:text-[#004733]">Refinance
            <ul className="absolute hidden left-0 bg-white top-full rounded-lg shadow-md p-4 group-hover:flex group-hover:flex-col ">
              {
                ["Apply Now",
                  "Refinance rates",
                  "Cash-out refinance calculator",
                  "Learning Center"].map((item) => {
                    return (
                      <li key={item} className="text-nowrap py-3 px-2 rounded-md flex gap-8 justify-between hover:bg-[#f6f6f3] group"><span>{item}</span><span><Arrowsvg /></span></li>
                    )
                  })
              }
            </ul>
          </li>
          <li className="relative group py-2 px-4 mx-5 font-extralight rounded-full hover:bg-[#d9e2dc] hover:text-[#004733]">HILOC
            <ul className="absolute hidden left-0 bg-white top-full rounded-lg shadow-md p-4 group-hover:flex group-hover:flex-col ">
              {
                ["Apply Now",
                  "Calculate your Cash 💵",
                  "HELOC vs. Cash-out Refinance",
                  "Learning Center"].map((item) => {
                    return (
                      <li key={item} className="text-nowrap py-3 px-2 rounded-md flex gap-8 justify-between hover:bg-[#f6f6f3] group"><span>{item}</span><span><Arrowsvg /></span></li>
                    )
                  })
              }
            </ul>
          </li>
          <li className="relative group py-2 px-4 mx-5 font-extralight rounded-full hover:bg-[#d9e2dc] hover:text-[#004733]">Rates
            <ul className="absolute hidden left-0 bg-white top-full rounded-lg shadow-md p-4 group-hover:flex group-hover:flex-col">
              {
                ["Purchase mortgage rates",
                  "Refinance rates",
                  "Refinance cash-out rates",
                  "HELOC rates",
                  "Purchase VA rates"].map((item) => {
                    return (
                      <li key={item} className="text-nowrap py-3 px-2 rounded-md flex gap-8 justify-between hover:bg-[#f6f6f3] group"><span>{item}</span><span><Arrowsvg /></span></li>
                    )
                  })
              }
            </ul>
          </li>
          <li className="relative group py-2 px-4 mx-5 font-extralight rounded-full hover:bg-[#d9e2dc] hover:text-[#004733]">Better+
            <ul className="absolute hidden left-0 bg-white top-full rounded-lg shadow-md p-4 group-hover:flex group-hover:flex-col">
              {
                ["Get Insurance",
                  "Title and Closing",
                  "Better Attorney Match",
                  "Learning Center",
                  "Better Agent Match",
                  "Better Duo"].map((item) => {
                    return (
                      <li key={item} className="text-nowrap py-3 px-2 rounded-md flex gap-8 justify-between hover:bg-[#f6f6f3] group"><span>{item}</span><span><Arrowsvg /></span></li>
                    )
                  })
              }
            </ul>
          </li>
        </ul>
        </div>
        <ul className="flex justify-center items-center gap-2 lg:gap-6">
          <li className="rounded-full p-2 sm:p-4 border-[1px] border-[#143e2d] "><svg width="19" height="18" viewBox="0 0 19 18" className="transition-all ease-in-out fill-[#017848] h-3 w-3 md:h-4 md:w-4" fill="#017848" xmlns="http://www.w3.org/2000/svg"><path d="M18.5 13.5L18.5 17C18.5 17.55 18.05 18 17.5 18C8.11 18 0.500002 10.39 0.500002 1C0.500002 0.450001 0.950003 0 1.5 0L4.99 0C5.54 0 5.99 0.450001 5.99 1C5.99 2.24 6.19 3.45 6.56 4.57C6.6 4.67 6.61 4.78 6.61 4.88C6.61 5.14 6.51 5.39 6.32 5.59L4.12 7.79C5.57 10.62 7.88 12.94 10.71 14.38L12.91 12.18C13.19 11.9 13.58 11.82 13.93 11.93C15.05 12.3 16.25 12.5 17.5 12.5C18.05 12.5 18.5 12.95 18.5 13.5Z" fill="#143e2d"></path></svg></li>
          <li className=" hidden md:block rounded-full py-3 px-5 transition-all duration-300 text-gray-500 hover:bg-[#d9e2dc]">Sign in</li>
          <li className="text-white text-sm sm:text-base bg-[#017848] rounded-full py-2 sm:py-3 px-3 sm:px-5 transition-all duration-300 hover:bg-[#004733] hover:text-white">Continue</li>
          <li onClick={handleHam} className=" xl:hidden"><Hamsvg /></li>
        </ul>
      </div>


         <div className="py-60 lg:h-[95vh] px-10 sm:px-20 md:px-40 lg:px-80 flex flex-col gap-8 justify-center items-center">
            <h3 className="text-3xl text-[#017848]">Our mission</h3>
            <h1 className="text-[1.75rem] sm:text-3xl md:text-[2.4rem] font-medium text-center">
               We&#39;re making homeownership simpler, faster — and most importantly, more accessible for all Americans.
            </h1>
         </div>

         <div className="flex flex-col-reverse md:flex-row gap-20 justify-center items-center pb-40 md:py-40 lg:py-0 lg:h-[60vh] px-16 sm:px-20 md:px-40 lg:px-60">
            <div className="flex-1 flex flex-col sm:px-10">
               <h1 className="text-[1.75rem] font-medium">The status quo is broken</h1>
               <p className="text-sm text-[#565d5a] font-thin py-8">The traditional processes around homeownership are opaque and stressful. Fees aren&#39;t transparent and some are simply outrageous in size. Traditional mortgage lending is rife with unnecessary fees and slow, painful processes. It&#39;s a system set up to benefit insiders — not you. Better.com CEO, Vishal Garg, set out to change that.</p>
               <div>
                  <button className="text-white bg-[#017848] p-5 rounded-md hover:bg-[#004733] transition-all duration-300">Read Vishal&#39;s story</button>
               </div>
            </div>
            <div onClick={handlepop} className="flex-1 relative">
               <Image src='/about-us/vishal-mission.jpg' className="h-[380px] border-1 border-black" height={500} width={450} alt="hello" />
               <div className="absolute z-2 top-[40%] left-[40%]"><Playsvg /></div>
            </div>
         </div>

         <div className="bg-[#017848]">
            <div className="px-10 sm:px-20 md:px-40 lg:px-80 py-20 text-white">
               <h1 className="text-[2.5rem] py-2">How we&#39;re changing things</h1>
               <p className="text-[0.9rem] font-thin py-4">Homeownership is a huge part of our economy. Housing overall is a $33 trillion business, and mortgages account for $15 trillion. Yet home finance operates in the same way it has for decades — through opaque systems and expensive intermediaries whose interests are misaligned with consumers&#39;.</p>
               <p className="text-[0.9rem] font-thin py-4">That&#39;s why Better.com is redefining the homeownership process from the ground up. We&#39;re using technology to make it faster and more efficient, and humans to help make it friendly and enjoyable.</p>
            </div>
         </div>

         <div className="px-10 sm:px-20 lg:px-40 py-40">
            <h1 className="text-center text-3xl mb-10">Backed By</h1>
            <div className="flex gap-4 xl:gap-1 flex-wrap justify-evenly items-center">

               <Image src="/about-us/sbg-logo.svg" height={120} width={100} alt="hello" />

               <svg fill="none" height="50" viewBox="0 0 150 90" width="120" xmlns="http://www.w3.org/2000/svg"><path d="M68.929 26.703h6.64v29.28h-6.64v-29.28Z" fill="#292B29"></path><path d="M78.737 26.703h6.64v29.28h-6.64v-29.28Z" fill="#292B29"></path><path d="M87.187 34.729h7.243l4.376 12.931 4.376-12.931h7.243l-11.317 29.43h-7.243l3.462-8.322-8.14-21.108Z" fill="#292B29"></path><path d="M66.023 45.511c0-1.53-.27-2.97-.81-4.321a10.635 10.635 0 0 0-2.26-3.514c-.967-.991-2.122-1.78-3.466-2.365-1.344-.586-2.82-.879-4.428-.879-6.994 0-11.24 4.881-11.24 11.08 0 6.068 4.836 10.813 10.017 10.939l5.733-6.248-.094-.155v5.963h6.548v-10.5Zm-6.571 4.56-4.511.012c-3.091 0-6.509-4.382-3.023-7.815 3.092-3.047 7.726-.548 7.726 3.69l-.192 4.113Z" fill="#292B29"></path></svg>

               <svg fill="none" height="50" viewBox="0 0 150 90" width="120" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#a)" fill="#000"><path d="m65.643 56.943-.105.11c-1.706 1.783-3.687 2.724-5.728 2.724-4.26 0-7.353-3.262-7.353-7.758 0-4.495 3.092-7.759 7.353-7.759 2.041 0 4.022.943 5.728 2.727l.105.11 2.745-3.383-.072-.088c-2.277-2.749-5.017-4.086-8.372-4.086-3.374 0-6.458 1.153-8.686 3.246-2.41 2.264-3.683 5.456-3.683 9.233 0 3.778 1.273 6.968 3.683 9.234 2.228 2.093 5.312 3.246 8.686 3.246 3.355 0 6.095-1.336 8.372-4.086l.072-.088-2.745-3.382Z"></path><path d="M71.157 64.038h4.837V39.93h-4.837v24.108Z"></path><path d="M94.96 58.797c-1.291.801-2.495 1.206-3.579 1.206-1.566 0-2.265-.838-2.265-2.719v-12.79h4.922v-4.539h-4.922V32.45l-4.748 2.595v4.911h-4.094v4.54h4.094V58.1c0 3.71 2.157 6.243 5.366 6.306 2.183.041 3.496-.613 4.292-1.11l.047-.028 1.169-4.648-.283.177Z"></path><path d="M98.966 64.038h4.84V39.93h-4.84v24.108Z"></path><path d="M106.85 36.03c-4.037-6.174-11.491-10.533-19.452-10.53-7.837.003-15.289 4.229-19.459 10.53h5.564c3.795-3.99 8.717-6.162 13.895-6.164 5.085-.003 10.086 2.173 13.889 6.165h5.563Z"></path></g><defs><clipPath id="a"><path d="M0 0h60.522v39H0z" fill="#fff" transform="translate(46.74 25.5)"></path></clipPath></defs></svg>

               <Image src="/about-us/china-logo.svg" height={80} width={100} alt="hello" />

               <Image src="/about-us/goldman.png" height={80} width={100} alt="hello" />

               <Image src="/about-us/kgm.png" height={100} width={120} alt="hello" />

               <Image src="/about-us/american-express.svg" height={70} width={70} alt="hello" />

            </div>
         </div>


         <div className="px-5 sm:px-10 md:px-20 lg:px-40 py-20">
            <h1 className="text-center text-[2rem] mb-10">Company Timeline</h1>

            <div className="relative m-auto w-1/3 before:absolute before:left-1/2 before:block before:h-full before:w-1 before:translate-x-2/4 before:bg-gray-200">
               <div className="relative flex flex-col items-center">
                  <div className="inline-block rounded-full bg-[#017848] px-8 py-2">
                     <h3 className="font-bold leading-heading m-0 p-0 tracking-normal w-auto text-lg md:text-xl text-white">2014</h3>
                  </div>
                  <div className="rounded-sm relative w-full bg-[#dfe0dc] my-4 p-4 lg:p-8 -ml-4 -translate-x-1/2 lg:-ml-8">
                     <p className="font-normal leading-body m-0 p-0 text-left text-[#565d5a] text-base">
                        After Vishal Garg&#39;s first attempt to purchase his own dream home, he quickly realized that the homebuying process is unnecessarily broken. This inspired him to found a technology-first company led by engineers and data experts with the mission of digitizing and automating home finance to make it cheaper, easier, and faster for all.
                     </p>
                  </div>
               </div>

               <div className="relative flex flex-col items-center">
                  <div className="inline-block rounded-full bg-[#017848] px-8 py-2">
                     <h3 className="font-bold leading-heading m-0 p-0 tracking-normal w-auto text-lg md:text-xl text-white">2015</h3>
                  </div>
                  <div className="rounded-sm relative w-full bg-[#dfe0dc] my-4 p-4 lg:p-8 ml-4 translate-x-1/2 lg:ml-8">
                     <p className="font-normal leading-body m-0 p-0 text-left text-[#565d5a] text-base">
                        Better Mortgage funds its first mortgage loan entirely online (without a single phone call!).
                     </p>
                  </div>
               </div>

               <div className="relative flex flex-col items-center">
                  <div className="inline-block rounded-full bg-[#017848] px-8 py-2">
                     <h3 className="font-bold leading-heading m-0 p-0 tracking-normal w-auto text-lg md:text-xl text-white">2016</h3>
                  </div>
                  <div className="rounded-sm relative w-full bg-[#dfe0dc] my-4 p-4 lg:p-8 -ml-4 -translate-x-1/2 lg:-ml-8">
                     <p className="font-normal leading-body m-0 p-0 text-left text-[#565d5a] text-base">
                        Better Mortgage becomes a Fannie Mae approved seller + servicer and establishes relationships with top mortgage investors.
                     </p>
                  </div>
               </div>

               <div className="relative flex flex-col items-center">
                  <div className="inline-block rounded-full bg-[#017848] px-8 py-2">
                     <h3 className="font-bold leading-heading m-0 p-0 tracking-normal w-auto text-lg md:text-xl text-white">2017</h3>
                  </div>
                  <div className="rounded-sm relative w-full bg-[#dfe0dc] my-4 p-4 lg:p-8 ml-4 translate-x-1/2 lg:ml-8">
                     <p className="font-normal leading-body m-0 p-0 text-left text-[#565d5a] text-base">
                        Better expands into the real estate market with Better Real Estate.
                     </p>
                  </div>
               </div>

               <div className="relative flex flex-col items-center">
                  <div className="inline-block rounded-full bg-[#017848] px-8 py-2">
                     <h3 className="font-bold leading-heading m-0 p-0 tracking-normal w-auto text-lg md:text-xl text-white">2018</h3>
                  </div>
                  <div className="rounded-sm relative w-full bg-[#dfe0dc] my-4 p-4 lg:p-8 -ml-4 -translate-x-1/2 lg:-ml-8">
                     <p className="font-normal leading-body m-0 p-0 text-left text-[#565d5a] text-base">
                        Better Mortgage partners with Ally Bank to build Ally powered by Better.
                     </p>
                  </div>
               </div>

               <div className="relative flex flex-col items-center">
                  <div className="inline-block rounded-full bg-[#017848] px-8 py-2">
                     <h3 className="font-bold leading-heading m-0 p-0 tracking-normal w-auto text-lg md:text-xl text-white">2019</h3>
                  </div>
                  <div className="rounded-sm relative w-full bg-[#dfe0dc] my-4 p-4 lg:p-8 ml-4 translate-x-1/2 lg:ml-8">
                     <p className="font-normal leading-body m-0 p-0 text-left text-[#565d5a] text-base">
                        Better Mortgage launches its pilot partnership with American Express to deliver a seamless homebuying experience to AMEX customers.
                     </p>
                  </div>
               </div>

               <div className="relative flex flex-col items-center">
                  <div className="inline-block rounded-full bg-[#017848] px-8 py-2">
                     <h3 className="font-bold leading-heading m-0 p-0 tracking-normal w-auto text-lg md:text-xl text-white">2021</h3>
                  </div>
                  <div className="rounded-sm relative w-full bg-[#dfe0dc] my-4 p-4 lg:p-8 -ml-4 -translate-x-1/2 lg:-ml-8">
                     <p className="font-normal leading-body m-0 p-0 text-left text-[#565d5a] text-base">
                        Better acquires Trussle — The UK&#39;s most innovative online mortgage broker.
                     </p>
                  </div>
               </div>

               <div className="relative flex flex-col items-center">
                  <div className="inline-block rounded-full bg-[#017848] px-8 py-2">
                     <h3 className="font-bold leading-heading m-0 p-0 tracking-normal w-auto text-lg md:text-xl text-white">2022</h3>
                  </div>
                  <div className="rounded-sm relative w-full bg-[#dfe0dc] my-4 p-4 lg:p-8 ml-4 translate-x-1/2 lg:ml-8">
                     <p className="font-normal leading-body m-0 p-0 text-left text-[#565d5a] text-base">
                        Better Mortgage becomes the first fintech to fund $100B home loans entirely online.
                     </p>
                  </div>
               </div>

               <div className="relative flex flex-col items-center">
                  <div className="inline-block rounded-full bg-[#017848] px-8 py-2">
                     <h3 className="font-bold leading-heading m-0 p-0 tracking-normal w-auto text-lg md:text-xl text-white">2023</h3>
                  </div>
                  <div className="rounded-sm relative w-full bg-[#dfe0dc] my-4 p-4 lg:p-8 -ml-4 -translate-x-1/2 lg:-ml-8">
                     <p className="font-normal leading-body m-0 p-0 text-left text-[#565d5a] text-base">
                        Better Mortgage launches One Day Mortgage: The first offering to customers to go from application to full mortgage Commitment Letter within 24 hours vs. typical industry process of 30+ days.
                     </p>
                  </div>
                  <div className="rounded-sm relative w-full bg-[#dfe0dc] my-4 p-4 lg:p-8 ml-4 translate-x-1/2 lg:ml-8">
                     <p className="font-normal leading-body m-0 p-0 text-left text-[#565d5a] text-base">
                        Better Mortgage launches the fully digital 3-day HELOC.
                     </p>
                  </div>
                  <div className="rounded-sm relative w-full bg-[#dfe0dc] my-4 p-4 lg:p-8 -ml-4 -translate-x-1/2 lg:-ml-8">
                     <p className="font-normal leading-body m-0 p-0 text-left text-[#565d5a] text-base">
                        Better Mortgage launches One Day Verified Approval Letter.
                     </p>
                  </div>
               </div>

               <div className="relative flex flex-col items-center">
                  <div className="inline-block rounded-full bg-[#017848] px-8 py-2">
                     <h3 className="font-bold leading-heading m-0 p-0 tracking-normal w-auto text-lg md:text-xl text-white">Today</h3>
                  </div>
                  <div className="rounded-sm relative w-full bg-[#dfe0dc] my-4 p-4 lg:p-8 ml-4 translate-x-1/2 lg:ml-8">
                     <p className="font-normal leading-body m-0 p-0 text-left text-[#565d5a] text-base pb-4">
                        You become part of the story by joining tens of thousands of happy Better Mortgage borrowers.
                     </p>
                     <button className="bg-[#017848] text-white py-3 px-4 rounded-md hover:bg-[#004733] transition-all duration-300">Get Started</button>
                  </div>
               </div>
            </div>


         </div>

         <Section4 />
         <Footer />
      </div>
   )

   return ham ? <Hammenu setHam={setHam} /> : content
}
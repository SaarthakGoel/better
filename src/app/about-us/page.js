'use client'
import Header from "@/components/homePage/header";
import Image from "next/image";
import { useState } from "react";
import ReactPlayer from "react-player";


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
         description: "After Vishal Garg’s first attempt to purchase his own dream home...",
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


   return (
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


         
         <Header />


         <div className="py-60 lg:h-[95vh] px-10 sm:px-20 md:px-40 lg:px-80 flex flex-col gap-8 justify-center items-center">
            <h3 className="text-3xl text-[#017848]">Our mission</h3>
            <h1 className="text-[1.75rem] sm:text-3xl md:text-[2.4rem] font-medium text-center">
               We’re making homeownership simpler, faster — and most importantly, more accessible for all Americans.
            </h1>
         </div>

         <div className="flex flex-col-reverse md:flex-row gap-20 justify-center items-center pb-40 md:py-40 lg:py-0 lg:h-[60vh] px-16 sm:px-20 md:px-40 lg:px-60">
            <div className="flex-1 flex flex-col sm:px-10">
               <h1 className="text-[1.75rem] font-medium">The status quo is broken</h1>
               <p className="text-sm text-[#565d5a] font-thin py-8">The traditional processes around homeownership are opaque and stressful. Fees aren’t transparent and some are simply outrageous in size. Traditional mortgage lending is rife with unnecessary fees and slow, painful processes. It’s a system set up to benefit insiders — not you. Better.com CEO, Vishal Garg, set out to change that.</p>
               <div>
                  <button className="text-white bg-[#017848] p-5 rounded-md hover:bg-[#004733] transition-all duration-300">Read Vishal's story</button>
               </div>
            </div>
            <div onClick={handlepop} className="flex-1 relative">
               <Image src='/about-us/vishal-mission.jpg' className="h-[380px] border-1 border-black" height={500} width={450} alt="hello" />
               <div className="absolute z-2 top-[40%] left-[40%]"><Playsvg /></div>
            </div>
         </div>

         <div className="bg-[#017848]">
            <div className="px-10 sm:px-20 md:px-40 lg:px-80 py-20 text-white">
               <h1 className="text-[2.5rem] py-2">How we’re changing things</h1>
               <p className="text-[0.9rem] font-thin py-4">Homeownership is a huge part of our economy. Housing overall is a $33 trillion business, and mortgages account for $15 trillion. Yet home finance operates in the same way it has for decades — through opaque systems and expensive intermediaries whose interests are misaligned with consumers’.</p>
               <p className="text-[0.9rem] font-thin py-4">That’s why Better.com is redefining the homeownership process from the ground up. We’re using technology to make it faster and more efficient, and humans to help make it friendly and enjoyable.</p>
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
                        After Vishal Garg’s first attempt to purchase his own dream home, he quickly realized that the homebuying process is unnecessarily broken. This inspired him to found a technology-first company led by engineers and data experts with the mission of digitizing and automating home finance to make it cheaper, easier, and faster for all.
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
                        Better acquires Trussle — The UK’s most innovative online mortgage broker.
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
      </div>
   )
}
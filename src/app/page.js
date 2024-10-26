'use client'
import Hammenu from "@/components/hammenu";
import Footer from "@/components/homePage/footer";
import Section2 from "@/components/homePage/section2";
import Section3 from "@/components/homePage/section3";
import Section4 from "@/components/homePage/section4";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {

  const router = useRouter();


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



  const content =  (
    <div>
      <div className="min-h-screen bg-[#004733] flex-col items-center justify-center text-white">


        {/*HEADER*/}

      <div className="flex justify-between items-center bg-[#004733] px-5 sm:px-10 md:px-24 py-6 fixed top-0 left-0 right-0 z-[1000]">
        <Link href='/'><Bettersvg /></Link>
        <ul className="hidden justify-center items-center font-thin xl:flex">
          <li className="relative group py-2 px-4 mx-5 font-extralight rounded-full hover:bg-[#d9e2dc] hover:text-[#004733]"><Link href='/'>Buy</Link>
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
          <li className="relative group py-2 px-4 mx-5 font-extralight rounded-full hover:bg-[#d9e2dc] hover:text-[#004733]"><Link href='/'>Refinance</Link>
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
          <li className="relative group py-2 px-4 mx-5 font-extralight rounded-full hover:bg-[#d9e2dc] hover:text-[#004733]"><Link href='/'>HILOC</Link>
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
          <li className="relative group py-2 px-4 mx-5 font-extralight rounded-full hover:bg-[#d9e2dc] hover:text-[#004733]"><Link href='/'>Rates</Link>
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
          <li className="relative group py-2 px-4 mx-5 font-extralight rounded-full hover:bg-[#d9e2dc] hover:text-[#004733]"><Link href='/'>Better+</Link>
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
        <ul className="flex justify-center items-center gap-2 lg:gap-6">
          <li className="rounded-full p-2 sm:p-4 border-[0.5px] border-white hover:opacity-50 "><Link href='/'><svg width="19" height="18" viewBox="0 0 19 18" className="transition-all ease-in-out h-3 w-3 md:h-4 md:w-4" fill="#017848" xmlns="http://www.w3.org/2000/svg"><path d="M18.5 13.5L18.5 17C18.5 17.55 18.05 18 17.5 18C8.11 18 0.500002 10.39 0.500002 1C0.500002 0.450001 0.950003 0 1.5 0L4.99 0C5.54 0 5.99 0.450001 5.99 1C5.99 2.24 6.19 3.45 6.56 4.57C6.6 4.67 6.61 4.78 6.61 4.88C6.61 5.14 6.51 5.39 6.32 5.59L4.12 7.79C5.57 10.62 7.88 12.94 10.71 14.38L12.91 12.18C13.19 11.9 13.58 11.82 13.93 11.93C15.05 12.3 16.25 12.5 17.5 12.5C18.05 12.5 18.5 12.95 18.5 13.5Z" fill="#fff"></path></svg></Link></li>
          <li className=" hidden md:block rounded-full py-3 px-5 transition-all duration-300 text-white hover:bg-white hover:text-[#004733]"><Link href='/'>Sign in</Link></li>
          <li className="text-black text-sm sm:text-base bg-[#1ee07f] rounded-full py-2 sm:py-3 px-3 sm:px-5 transition-all duration-300 hover:bg-[#004733] hover:text-white"><Link href='/'>Continue</Link></li>
          <li onClick={handleHam} className=" xl:hidden"><Hamsvg /></li>
        </ul>
      </div>

        <div className="container mx-auto px-6 pt-32 pb-12 text-center">
          <div className="flex w-full justify-center items-center">
            <div className="">
              <svg class="w-[24px] h-[24px] md:w-[36px] md:h-[36px]" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="18.8102" cy="18" r="17.8577" fill="#FFFDFA"></circle><path d="M28.3517 22.6302L20.2944 14.572C20.2944 14.5719 20.2944 14.5719 20.2943 14.5719C20.2049 14.4824 20.0988 14.4114 19.9819 14.363C19.8651 14.3145 19.7398 14.2896 19.6132 14.2896C19.4867 14.2896 19.3614 14.3145 19.2446 14.363C19.1277 14.4114 19.0215 14.4824 18.9321 14.5719C18.9321 14.5719 18.9321 14.5719 18.9321 14.572L15.5711 17.9339L8.97631 11.3382L8.9763 11.3382C8.79567 11.1575 8.55067 11.0561 8.29521 11.0561C8.03975 11.0561 7.79475 11.1575 7.61411 11.3382C7.43348 11.5188 7.332 11.7638 7.332 12.0193C7.332 12.2747 7.43348 12.5197 7.61411 12.7004L14.8899 19.9762C14.89 19.9762 14.89 19.9762 14.89 19.9762C14.9794 20.0657 15.0856 20.1367 15.2024 20.1852C15.3193 20.2336 15.4446 20.2585 15.5711 20.2585C15.6976 20.2585 15.8229 20.2336 15.9398 20.1852C16.0566 20.1367 16.1628 20.0657 16.2522 19.9762C16.2522 19.9762 16.2522 19.9762 16.2522 19.9762L19.6133 16.6142L26.9905 23.9914H22.847C22.5916 23.9914 22.3467 24.0928 22.1662 24.2734C21.9856 24.4539 21.8842 24.6988 21.8842 24.9542C21.8842 25.2095 21.9856 25.4544 22.1662 25.6349C22.3467 25.8155 22.5916 25.9169 22.847 25.9169H29.3144C29.5698 25.9169 29.8146 25.8155 29.9952 25.6349C30.1758 25.4544 30.2772 25.2095 30.2772 24.9542V18.4867C30.2772 18.2314 30.1758 17.9865 29.9952 17.8059C29.8146 17.6254 29.5698 17.524 29.3144 17.524C29.0591 17.524 28.8142 17.6254 28.6336 17.8059C28.4531 17.9865 28.3517 18.2314 28.3517 18.4867V22.6302Z" fill="#6E4CF6" stroke="#6E4CF6" stroke-width="0.308665"></path></svg>
            </div>
            <h2 className="text-3xl mx-4 font-extralight">Rate drop alert</h2>
          </div>


          <div className="flex flex-col md:flex-row w-full justify-center items-center pt-44 relative">
            <h1 className="text-[#fffdfa] font-bold text-4xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl mx-5 sm:mx-10 md:mx-28 lg:mx-40 my-5 absolute top-8  ">
              The rate drop you&#39;ve been waiting for
            </h1>
            <div>
              <div className="flex justify-center">
                <button onClick={() => router.push('/start')} className="bg-[#1ee07f] text-black px-10 py-4 sm:py-5 rounded-full text-base hover:text-white hover:bg-[#004733] transition-all duration-300">
                  Start my approval
                </button>
              </div>
              <div className="mt-4 flex justify-center items-center">
                <p className="text-gray-300 text-sm">3 min | No credit impact</p>
              </div>
            </div>

            <p className="text-white text-xl md:text-2xl mb-8">
              <span className="inline-block align-middle">
                <Image
                  src="/rate-drop-notify.webp"  // Replace with the correct image path
                  alt="Phone Notification"
                  width={500}
                  height={500}
                />
              </span>
            </p>

            <div className="mt-8">
              <span className="text-yellow-500 text-xl">★ ★ ★ ★ ☆</span>
              <p className="ml-2 text-gray-300">4.6 Stars | 3177 Google reviews</p>
            </div>
          </div>
        </div>
      </div>
      <Section2 />
      <Section3 />
      <Section4 />
      <Footer />
    </div>
    );

    return ham ? <Hammenu setHam={setHam} /> : content
}

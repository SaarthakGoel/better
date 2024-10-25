'use client'
import Image from "next/image";
import { useState } from "react";

export default function Section3() {

  const [imgSrc, setImgSrc] = useState("Our products");
  const [buttonclass, setButtonClass] = useState("ring-[5px] ring-inset px-6 py-2 rounded-full ring-[#017848] text-[#017848]")

  function handleClick(name) {
    setImgSrc(name);
  }

  const Section3Card1 = ({heading, img}) => {
    return (
      <div className="w-[25vw] flex flex-col bg-[#f0f7f1] rounded-lg p-10 gap-6">
        <div className="flex flex-col gap-6">
          <h1 className="text-2xl">{heading}</h1>
          <button><svg width="48" height="49" viewBox="0 0 48 49" fill="none" class="transition ease-universal duration-300 fill-transparent hover:fill-[#004733] [&amp;_path]:fill-[#004733] group-hover:[&amp;_path]:fill-white [&amp;_rect]:stroke-[#A4A8A4] group-hover:[&amp;_rect]:stroke-none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.843384" width="47" height="47" rx="23.5" stroke="#A4A8A4"></rect><path d="M24 16.3434L22.59 17.7534L28.17 23.3434H16V25.3434H28.17L22.59 30.9334L24 32.3434L32 24.3434L24 16.3434Z" fill="#004733"></path></svg></button>
        </div>
        <div>
          <Image className="rounded-lg" src={img} height={200} width={400} alt="cardimg" />
        </div>
      </div>
    )
  }

  const Section3Card2 = ({heading, img, description}) => {
    return (
      <div className="w-[55vw] flex bg-[#f0f7f1] rounded-lg p-10 gap-6">
        <div className="flex-[0.6] flex flex-col gap-6">
          <h1 className="text-2xl">{heading}</h1>
          <p className="text-sm">{description}</p>
          <button><svg width="48" height="49" viewBox="0 0 48 49" fill="none" class="transition ease-universal duration-300 fill-transparent hover:fill-[#004733] [&amp;_path]:fill-[#004733] group-hover:[&amp;_path]:fill-white [&amp;_rect]:stroke-[#A4A8A4] group-hover:[&amp;_rect]:stroke-none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.843384" width="47" height="47" rx="23.5" stroke="#A4A8A4"></rect><path d="M24 16.3434L22.59 17.7534L28.17 23.3434H16V25.3434H28.17L22.59 30.9334L24 32.3434L32 24.3434L24 16.3434Z" fill="#004733"></path></svg></button>
        </div>
        <div className="flex-[0.4]">
          <Image className="rounded-lg" src={img} height={300} width={300} alt="cardimg" />
        </div>
      </div>
    )
  }

  const Section3Card3 = ({heading, img, description}) => {
    return (
      <div className="w-[55vw] flex flex-row-reverse bg-[#f0f7f1] rounded-lg p-10 gap-6">
        <div className="flex-[0.6] flex flex-col gap-6">
          <h1 className="text-2xl">{heading}</h1>
          <p className="text-sm">{description}</p>
          <button><svg width="48" height="49" viewBox="0 0 48 49" fill="none" class="transition ease-universal duration-300 fill-transparent hover:fill-[#004733] [&amp;_path]:fill-[#004733] group-hover:[&amp;_path]:fill-white [&amp;_rect]:stroke-[#A4A8A4] group-hover:[&amp;_rect]:stroke-none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.843384" width="47" height="47" rx="23.5" stroke="#A4A8A4"></rect><path d="M24 16.3434L22.59 17.7534L28.17 23.3434H16V25.3434H28.17L22.59 30.9334L24 32.3434L32 24.3434L24 16.3434Z" fill="#004733"></path></svg></button>
        </div>
        <div className="flex-[0.4]">
          <Image className="rounded-lg" src={img} height={300} width={300} alt="cardimg" />
        </div>
      </div>
    )
  }

  return (
    <div className="w-[100vw] pb-20 px-10 sm:px-20 md:px-32">

      <div className="flex flex-col md:flex-row justify-between py-20">
        <h1 className="text-4xl md:text-5xl w-[300px] md:w-[500px]">Got questions? We've got answers</h1>
        <div className="flex justify-between flex-wrap gap-4 py-6">
          <button onClick={() => handleClick('Our products')} className={imgSrc === 'Our products' ? buttonclass : `text-sm ring-[1px] px-6 py-2 rounded-full ring-inset ring-gray-300 transition-all duration-300 hover:ring-[5px] hover:ring-[#017848] hover:text-[#017848] `}>Our products</button>
          <button onClick={() => handleClick('Calculators')} className={imgSrc === 'Calculators' ? buttonclass : `text-sm ring-[1px] px-6 py-2 rounded-full ring-inset ring-gray-300 transition-all duration-300 hover:ring-[5px] hover:ring-[#017848] hover:text-[#017848] `}>Calculators</button>
          <button onClick={() => handleClick('Guides & FAQs')} className={imgSrc === 'Guides & FAQs' ? buttonclass : `text-sm ring-[1px] px-6 py-3 rounded-full ring-inset ring-gray-300 transition-all duration-300 hover:ring-[5px] hover:ring-[#017848] hover:text-[#017848] `}>Guides & FAQs</button>
        </div>
      </div>

      
        {
          imgSrc === "Our products" ?
          <div className="flex flex-wrap gap-8">
          <Section3Card1 heading={`Buying Your First Home With Better Mortgage`} img={`/first-home.webp`} />
        <Section3Card2 heading={`One Day Mortgage`} img={`/one-day-mortgage.webp`} description={`Kick your home loan into hyperdrive. Going from locked rate to Commitment Letter takes weeks for traditional lenders. We do it in a single day. Traditional lenders deliver a Commitment Letter in a few weeks.`}/>
        <Section3Card3 heading={`Better HELOC`} img={`/better-heloc.webp`} description={`Introducing One Day HELOC™—your express lane to getting cash from your home with our Home Equity Line of Credit. Access up to 90% of your home equity as cash in as little as 7 days.`}/>
        <Section3Card1 heading={`Insurance`} img={`/insurance.webp`} />
        </div>
          :
          imgSrc === "Calculators" ? 
          <div className="flex flex-wrap gap-8">
          <Section3Card1 heading={`Mortgage Calculator`} img={`/mortgage-calculator.webp`} />
        <Section3Card2 heading={`Affordability Calculator`} img={`/affordability-calculator.webp`} description={`Got homeownership dreams? Let's put some numbers behind them. Our affordability calculator estimates the maximum home you can afford.`}/>
        <Section3Card3 heading={`HELOC Calculator`} img={`/heloc-calculator.webp`} description={`Need cash? Quickly see how much equity you can borrow from your home and what your monthly payments might be.`}/>
        <Section3Card1 heading={`Fixed Rate Loan Comparison Calculator`} img={`/fixed-rate-calculator.webp`} />
        </div>
        :
        <div className="flex flex-wrap gap-8">
          <Section3Card1 heading={`What is a good debt-to-income ratio for a home loan?`} img={`/good-dti.webp`} />
        <Section3Card2 heading={`One DayBuying a house without realtor`} img={`/buy-house-without-realtor.webp`} description={`Thinking about buying a house without a real estate agent? Read this first.`}/>
        <Section3Card3 heading={`Timeline for homebuying process`} img={`/loan-timeline.webp`} description={`Does the process of buying a home seem daunting? Don't stress, we broke it down into 8 easy steps.`}/>
        <Section3Card1 heading={`Conventional loan requirements`} img={`/conventional-loan.webp`} />
        </div>
        }
  
    </div>
  )
}

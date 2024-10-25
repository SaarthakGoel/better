'use client'
import Footer from "@/components/homePage/footer";
import Section4 from "@/components/homePage/section4";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";


export default function Start() {

  const [isHidden, setIsHidden] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const triggerElement = document.getElementById('triggerElement');
      const header = document.getElementById('header');
      const triggerPosition = triggerElement.getBoundingClientRect().top;
      const headerHeight = header.offsetHeight;

      if (triggerPosition <= 0) {
      } else {
        setIsHidden(false);
      }

      if (triggerPosition + triggerElement.offsetHeight <= headerHeight) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div className="bg-[#fffdfa]">

      <div id="header" className={`transition-all duration-300 bg-[#fffdfa] px-10 sm:px-20 md:px-48 fixed top-0 left-0 w-full z-[1000]
        ${isHidden ? 'opacity-0' : 'opacity-100'}`}>
        <div className="flex justify-between items-center py-4 sm:py-8">
          <Image onClick={() => router.push('/')} className="cursor-pointer" src="/about-us/better-mortgage.png" width={80} height={40} alt="yes" />
          <div className="flex justify-center items-center cursor-pointer">
            <span className="bg-[#98f9d2] rounded-full p-[0.35rem] mr-[0.7rem]"><svg fill="none" height="21" viewBox="0 0 20 21" width="20" xmlns="http://www.w3.org/2000/svg"><title>Phone</title><path clip-rule="evenodd" d="M1.1116 0.0151367H5.00049C5.6116 0.0151367 6.1116 0.516439 6.1116 1.12914C6.1116 2.52165 6.33382 3.85845 6.74493 5.10614C6.86715 5.49604 6.77827 5.9305 6.46715 6.24242L4.02271 8.69323C5.62271 11.8459 8.20049 14.4192 11.3449 16.0345L13.7894 13.5837C14.0116 13.3721 14.2894 13.2607 14.5783 13.2607C14.6894 13.2607 14.8116 13.2718 14.9227 13.3164C16.1672 13.7285 17.5116 13.9513 18.8894 13.9513C19.5005 13.9513 20.0005 14.4526 20.0005 15.0653V18.9532C20.0005 19.5659 19.5005 20.0672 18.8894 20.0672C8.45604 20.0672 0.000488281 11.5896 0.000488281 1.12914C0.000488281 0.516439 0.500488 0.0151367 1.1116 0.0151367ZM3.93382 2.24315C4.00049 3.23461 4.16715 4.20379 4.43382 5.12842L3.10049 6.46522C2.64493 5.12842 2.35604 3.71363 2.25604 2.24315H3.93382ZM14.8894 15.6335C15.8338 15.9008 16.8005 16.0679 17.7783 16.1348V17.7947C16.3116 17.6944 14.9005 17.4047 13.556 16.9591L14.8894 15.6335Z" fill="#017848" fill-rule="evenodd"></path></svg></span>
            <span className="hidden lg:block">Need help? Call (415) 523 8837</span>
          </div>
        </div>
        <div className="h-1 rounded-full bg-gray-200 relative"><Image src="/about-us/betty1.jpg" width={50} height={50} alt="betty" className="rounded-full absolute top-[-25px] left-[40%] sm:left-[48%]" /></div>
      </div>


      <div className="h-[120vh] flex flex-col justify-center items-center relative">

        <h1 className="text-center text-2xl sm:text-3xl md:text-4xl pt-28">Hi, I'm Betsy!</h1>
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl mb-8">What can I help you with?</h2>
        <button className="flex w-[20rem] sm:w-[25rem] md:w-[32rem] justify-start items-center border-[1px] border-[#004733] rounded-lg px-10 py-3 mb-5 hover:ring-[3px] hover:ring-inset hover:ring-[#017848] hover:text-[#017848] transition-all duration-300"><svg fill="transparent" height="36" viewBox="0 0 36 36" width="36" xmlns="http://www.w3.org/2000/svg"><title id="start-purchase-icon">Start Purchase</title><path d="M35.579 13.748 18.703.247a1.124 1.124 0 0 0-1.406 0L.42 13.747a1.125 1.125 0 0 0 .698 2.003h2.25v19.126A1.126 1.126 0 0 0 4.494 36h27.001a1.125 1.125 0 0 0 1.125-1.125V15.75h2.25a1.125 1.125 0 0 0 .709-2.002Zm-4.084-.248a1.125 1.125 0 0 0-1.125 1.125V33.75H5.619V14.625A1.126 1.126 0 0 0 4.494 13.5h-.169l13.67-10.936L31.662 13.5h-.168Z" fill="#017848"></path><path d="M16.8 13v2.374h-1.2a3.607 3.607 0 0 0-3.118 1.78 3.527 3.527 0 0 0 0 3.56 3.607 3.607 0 0 0 3.118 1.78h4.8c.429 0 .825.227 1.04.594.214.367.214.82 0 1.187-.215.367-.611.593-1.04.593h-4.8c-.318 0-.624-.125-.849-.347a1.18 1.18 0 0 1-.351-.84H12c0 .945.38 1.85 1.054 2.518a3.622 3.622 0 0 0 2.546 1.043h1.2v2.373h2.4v-2.373h1.2a3.607 3.607 0 0 0 3.118-1.78 3.526 3.526 0 0 0 0-3.56A3.607 3.607 0 0 0 20.4 20.12h-4.8c-.429 0-.825-.226-1.04-.593a1.176 1.176 0 0 1 0-1.187c.215-.367.611-.594 1.04-.594h4.8c.318 0 .624.125.849.348.225.222.351.524.351.84H24c0-.945-.38-1.85-1.054-2.519a3.621 3.621 0 0 0-2.546-1.042h-1.2V13h-2.4Z" fill="#017848"></path></svg><span className="px-3 sm:px-6 text-[1.12rem]">Buying a home</span></button>

        <button className="flex w-[20rem] sm:w-[25rem] md:w-[32rem] justify-start items-center border-[1px] border-[#004733] rounded-lg px-10 py-3 mb-5 hover:ring-[3px] hover:ring-inset hover:ring-[#017848] hover:text-[#017848] transition-all duration-300"><svg fill="transparent" height="36" viewBox="0 0 36 36" width="36" xmlns="http://www.w3.org/2000/svg"><title id="start-refinance-icon">Start Refinance</title><path d="M35.579 13.748 18.703.247a1.124 1.124 0 0 0-1.406 0L.42 13.747a1.125 1.125 0 0 0 .698 2.003h2.25v19.126A1.126 1.126 0 0 0 4.494 36h27.001a1.125 1.125 0 0 0 1.125-1.125V15.75h2.25a1.125 1.125 0 0 0 .709-2.002Zm-4.084-.248a1.125 1.125 0 0 0-1.125 1.125V33.75H5.619V14.625A1.126 1.126 0 0 0 4.494 13.5h-.169l13.67-10.936L31.662 13.5h-.168Z" fill="#017848"></path><path d="M17.6 15v1.768h-.9c-.965 0-1.856.505-2.338 1.326a2.61 2.61 0 0 0 0 2.651 2.709 2.709 0 0 0 2.338 1.326h3.6c.322 0 .619.169.78.442a.87.87 0 0 1 0 .884.903.903 0 0 1-.78.442h-3.6a.908.908 0 0 1-.636-.259.876.876 0 0 1-.264-.625H14c0 .704.284 1.378.79 1.876a2.725 2.725 0 0 0 1.91.776h.9v1.768h1.8v-1.768h.9c.965 0 1.856-.505 2.338-1.326a2.61 2.61 0 0 0 0-2.651 2.709 2.709 0 0 0-2.338-1.326h-3.6a.903.903 0 0 1-.78-.442.87.87 0 0 1 0-.884.903.903 0 0 1 .78-.442h3.6c.239 0 .468.093.636.259.17.165.264.39.264.625H23c0-.704-.285-1.378-.79-1.876a2.725 2.725 0 0 0-1.91-.776h-.9V15h-1.8Z" fill="#017848"></path><path d="M18.456 10C12.5 10 7.67 14.83 7.67 20.785H6l2.869 4.782 2.865-4.782h-1.667a8.383 8.383 0 0 1 8.389-8.388 8.383 8.383 0 0 1 8.389 8.388 8.383 8.383 0 0 1-8.39 8.389 8.32 8.32 0 0 1-5.919-2.469l-1.702 1.702a10.73 10.73 0 0 0 7.622 3.164c5.956 0 10.785-4.83 10.785-10.786C29.241 14.83 24.411 10 18.456 10Z" fill="#017848"></path></svg><span className="px-3 sm:px-6 leading-5 text-[1.12rem]">Refinance my morgage</span></button>

        <button className="flex w-[20rem] sm:w-[25rem] md:w-[32rem] justify-start items-center border-[1px] border-[#004733] rounded-lg px-10 py-3 mb-5 hover:ring-[3px] hover:ring-inset hover:ring-[#017848] hover:text-[#017848] transition-all duration-300"><svg fill="transparent" height="36" viewBox="0 0 36 36" width="36" xmlns="http://www.w3.org/2000/svg"><title id="start-cashout-refinance-icon">Start Cashout Refinance</title><path d="M2.25 18a15.75 15.75 0 0 1 31.5 0H36a18 18 0 1 0-18 18v-2.25A15.75 15.75 0 0 1 2.25 18Z" fill="#017848"></path><path d="M23.143 20.204c0-.877-.352-1.718-.98-2.338a3.363 3.363 0 0 0-2.363-.968h-4.457c-.398 0-.766-.21-.965-.551a1.092 1.092 0 0 1 0-1.102c.199-.341.567-.551.965-.551H19.8c.296 0 .579.116.788.323.209.206.326.487.326.779h2.229c0-.877-.352-1.718-.98-2.338a3.363 3.363 0 0 0-2.363-.968h-1.114v-2.204h-2.229v2.204h-1.114a3.35 3.35 0 0 0-2.895 1.653 3.275 3.275 0 0 0 0 3.306 3.35 3.35 0 0 0 2.895 1.653H19.8c.398 0 .766.21.965.551.199.341.199.761 0 1.102-.199.341-.567.551-.965.551h-4.457a1.12 1.12 0 0 1-.788-.323 1.096 1.096 0 0 1-.326-.779H12c0 .877.352 1.718.979 2.338.627.62 1.477.968 2.364.968h1.114v2.204h2.229V23.51H19.8c.887 0 1.737-.348 2.364-.968.627-.62.979-1.461.979-2.338ZM29.852 19.97a1.13 1.13 0 0 0-1.429 0l-5.714 4.653a1.17 1.17 0 0 0-.423.907v9.307c0 .308.12.604.334.822.215.218.506.341.809.341h11.428c.303 0 .594-.123.808-.34.215-.219.335-.515.335-.823V25.53a1.171 1.171 0 0 0-.434-.907l-5.714-4.654Zm3.862 13.703H31.43v-3.49c0-.308-.12-.604-.335-.822a1.133 1.133 0 0 0-.808-.34H28c-.303 0-.594.122-.808.34a1.174 1.174 0 0 0-.335.822v3.49h-2.285V26.09l4.571-3.723 4.571 3.723v7.584Z" fill="#017848"></path></svg><span className="px-3 sm:px-6 leading-5 text-[1.12rem]">Get cash from my home</span></button>

        <div className="flex justify-center items-center gap-2 sm:gap-8 py-10 px-5 sm:px-0">
          <div><h1 className="text-center text-4xl">$100B</h1><p className="text-xs text-center text-[#565d5a] pt-4">Home loans funded entirely online</p></div>
          <div><h1 className="text-center text-4xl">400K</h1><p className="text-xs text-center text-[#565d5a] pt-4">Customers who chose better mortgage</p></div>
        </div>

        <div className="flex flex-col justify-center items-start gap-4 px-10 sm:px-20 md:px-40 py-10 bg-[#f0f7f1] rounded-lg">
          <div className="flex"><p className="text-sm text-[#565d5a]">After a few questions, you'll unlock:</p></div>
          <div className="flex"><svg fill="none" height="22" width="22" xmlns="http://www.w3.org/2000/svg"><title id="percentage-outlined-icon">Percentage Outlined</title><path clip-rule="evenodd" d="M10 .833C4.94.833.833 4.94.833 10S4.94 19.166 10 19.166 19.167 15.06 19.167 10C19.167 4.94 15.06.833 10 .833Zm0 16.5c-4.042 0-7.333-3.29-7.333-7.333S5.957 2.666 10 2.666 17.333 5.957 17.333 10c0 4.042-3.29 7.333-7.333 7.333ZM7.458 15H5.5l7.057-10h1.958L7.458 15ZM7 9.476a1.71 1.71 0 0 0 1.716-1.738C8.716 6.748 7.946 6 7 6c-.968 0-1.738.748-1.738 1.738S6.032 9.476 7 9.476Zm6 4.5a1.71 1.71 0 0 0 1.716-1.738c0-.99-.77-1.738-1.716-1.738-.968 0-1.738.748-1.738 1.738s.77 1.738 1.738 1.738Z" fill="#017848" fill-rule="evenodd"></path></svg><p className="text-sm text-[#565d5a] px-4"> Custom mortgage rates</p></div>
          <div className="flex"><svg className="h-5 fill-lime-700" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="MonetizationOnOutlinedIcon"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42"></path></svg><p className="text-sm text-[#565d5a] px-4">Exclusive offers</p></div>
          <div className="flex"><svg className="h-5 fill-lime-70" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="PhoneIphoneOutlinedIcon"><path d="M15.5 1h-8C6.12 1 5 2.12 5 3.5v17C5 21.88 6.12 23 7.5 23h8c1.38 0 2.5-1.12 2.5-2.5v-17C18 2.12 16.88 1 15.5 1m-4 21c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5m4.5-4H7V4h9z"></path></svg><p className="text-sm text-[#565d5a] px-4">A personalized dashboard</p></div>
        </div>
      </div>
      <div id="triggerElement" className="h-1"></div>
      <Section4 />
      <Footer />
    </div>
  )
}

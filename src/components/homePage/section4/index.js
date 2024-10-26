import Image from "next/image"
import './index.css';



export default function Section4() {

  const BetterLogo = () => {
    return (
      <svg role="img" className="icon icon-LogoBetter2021" width="85px" height="35px" viewBox="0 0 495 133" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <title>Better</title>
        <path d="M427.207 129.574H457.274V70.2463C460.072 61.2943 473.189 52.9226 492.108 57.1085V28.0354C476.38 28.0354 462.848 38.3964 457.274 54.9119V30.0247H427.207V129.574ZM378.24 49.7521C387.399 49.7521 391.979 54.7254 391.979 59.5122C391.979 66.4749 386.405 73.4582 355.342 77.0224C355.342 60.6934 365.703 49.7521 378.24 49.7521ZM416.659 120.414V93.9316C406.712 102.303 393.367 106.883 382.613 106.883C371.464 106.883 362.512 100.915 358.119 91.3621C397.532 88.5853 416.845 75.0331 416.845 55.9273C416.845 40.593 401.117 27.6624 379.214 27.6624C350.141 27.6624 326.663 48.9647 326.663 80.0271C326.663 109.287 350.742 130.983 381.017 130.983C393.968 130.962 407.106 127.191 416.659 120.414ZM304.78 98.7184V49.7521H325.275V30.2526L304.78 30.4599V6.56731L247.836 46.7889V11.7478L200.258 47.5763V49.7728H218.183V104.313C218.183 121.637 230.927 130.796 248.251 130.796C255.814 130.796 262.197 129.408 267.957 126.03V105.515C265.16 107.111 261.782 108.313 258.011 108.313C251.649 108.313 247.857 105.122 247.857 99.5473V49.7728H275.127V104.127C275.127 121.637 287.871 130.796 305.381 130.796C313.152 130.796 319.514 129.802 325.689 126.03V105.329C323.099 106.924 319.12 108.313 315.141 108.313C308.759 108.271 304.78 104.894 304.78 98.7184ZM159.664 49.7521C168.823 49.7521 173.402 54.7254 173.402 59.5122C173.402 66.4749 167.828 73.4582 136.766 77.0224C136.766 60.6934 147.106 49.7521 159.664 49.7521ZM198.082 120.414V93.9316C188.136 102.303 174.791 106.883 164.036 106.883C152.888 106.883 143.936 100.915 139.543 91.3621C178.956 88.5853 198.269 75.0331 198.269 55.9273C198.269 40.593 182.541 27.6624 160.638 27.6624C131.564 27.6624 108.086 48.9647 108.086 80.0271C108.086 109.287 132.165 130.983 162.44 130.983C175.392 130.962 188.53 127.191 198.082 120.414ZM53.5459 76.0277C62.8915 76.0277 70.6623 81.8092 70.6623 91.5486C70.6623 100.708 62.8915 106.282 53.5459 106.282H30.8552V76.0277H53.5459ZM51.9502 25.0721C60.9022 25.0721 68.072 30.6464 68.072 39.2046C68.072 48.3638 60.9022 53.938 51.9502 53.938H30.8552V25.0721H51.9502ZM0 1.967V129.574H60.1147C83.1991 129.574 101.331 115.441 101.331 93.9316C101.331 80.1929 92.5655 69.2516 79.8215 64.0711C91.3637 58.8906 99.1345 48.7367 99.1345 36.5936C99.1345 15.685 80.8161 1.94629 57.5245 1.94629H0V1.967Z" fill="#017848"></path>
      </svg>
    )
  }


  return (
    <div className="pt-10 lg:pt-20 bg-[#f0f7f1]">

      <hr />

      <div className=" px-10  lg:px-20 xl:px-40 py-20">
        <BetterLogo />

        <div className="flex flex-col lg:flex-row justify-between pt-4 gap-10">
          <div className="w-[80vw] lg:w-[25vw]">
            <span>Better is a family of companies serving all your homeownership needs.</span>
            <div className="mt-6">
              <Image className="cursor-pointer" src="/bottom-links/better-mortgage-logo.svg" width={150} height={50} alt="hello" />
              <p className="text-xs py-4">We can&#39;t wait to say &#34;Welcome home.&#34; Apply 100% online, with expert customer support.</p>
              <Image className="cursor-pointer" src="/bottom-links/better-real-estate-logo.svg" width={150} height={50} alt="hello" />
              <p className="text-xs py-4">Connect with a local Better Real Estate Partner Agent to find out all the ways you can save.</p>
              <Image className="cursor-pointer" src="/bottom-links/better-cover-logo.svg" width={120} height={50} alt="hello" />
              <p className="text-xs py-4">Shop, bundle, and save on insurance coverage for home, auto, life, and more.</p>
              <Image className="cursor-pointer" src="/bottom-links/better-inspect-logo.svg" width={125} height={50} alt="hello" />
              <p className="text-xs py-4">Get free repair estimates, 24-hour turnarounds on reports, and rest easy with our 100-day inspection guarantee.</p>
              <Image className="cursor-pointer" src="/bottom-links/better-settlement-services-logo.svg" width={230} height={50} alt="hello" />
              <p className="text-xs py-4">Get transparent rates when you shop for title insurance all in one convenient place.</p>
            </div>
          </div>

          <div className="w-[80vw] lg:w-[15vw]">
            <h3>Resources</h3>
            <ul className="mt-6">
              <li className="text-sm py-3 text-[#004733] bottomli">Home affordability calculator</li>
              <li className="text-sm py-3 text-[#004733] bottomli">Mortgage calculator</li>
              <li className="text-sm py-3 text-[#004733] bottomli">Free mortgage calculator</li>
              <li className="text-sm py-3 text-[#004733] bottomli">Mortgage calculator with taxes</li>
              <li className="text-sm py-3 text-[#004733] bottomli">Mortgage calculator with PMI</li>
              <li className="text-sm py-3 text-[#004733] bottomli">Rent vs buy calculator</li>
              <li className="text-sm py-3 text-[#004733] bottomli">HELOC payment calculator</li>
              <li className="text-sm py-3 text-[#004733] bottomli">HELOC vs cash-out refinance calculator</li>
              <li className="text-sm py-3 text-[#004733] bottomli">Buy a home</li>
              <li className="text-sm py-3 text-[#004733] bottomli">Sell a home</li>
              <li className="text-sm py-3 text-[#004733] bottomli">Get home inspection</li>
            </ul>
          </div>

          <div className="w-[80vw] lg:w-[15vw]">
            <h3>Company</h3>
            <ul className="mt-6">
              <li className="text-sm py-3 text-[#004733] bottomli">About Us</li>
              <li className="text-sm py-3 text-[#004733] bottomli">Careers</li>
              <li className="text-sm py-3 text-[#004733] bottomli">Media</li>
              <li className="text-sm py-3 text-[#004733] bottomli">Partner With Us</li>
              <li className="text-sm py-3 text-[#004733] bottomli">Learning center</li>
              <li className="text-sm py-3 text-[#004733] bottomli">FAQs</li>
              <li className="text-sm py-3 text-[#004733] bottomli">Investor Relations</li>
            </ul>
          </div>

          <div className="w-[80vw] lg:w-[15vw]">
            <h3>Contact Us</h3>
            <ul className="mt-6">
              <li className="text-sm py-3 text-[#004733] bottomli">hello@better.com</li>
              <li className="text-sm py-3 text-[#004733] bottomli">415-523-8837</li>
              <li className="text-sm py-3 text-[#004733] bottomli">3 World Trade Center, 175 Greenwich Street</li>
              <li className="text-sm py-3 text-[#004733] bottomli">57th Floor, New York, NY 10007</li>
              <li className="text-sm py-3 text-[#004733] bottomli">NMLS ID #330511</li>
            </ul>
            <h3 className="py-3">Legal</h3>
            <ul>
              <li className="text-sm py-3 text-[#004733] bottomli">NMLS Consumer Access</li>
              <li className="text-sm py-3 text-[#004733] bottomli">Privacy Policy</li>
              <li className="text-sm py-3 text-[#004733] bottomli">Terms of Use</li>
              <li className="text-sm py-3 text-[#004733] bottomli">Disclosures & Licensing</li>
              <li className="text-sm py-3 text-[#004733] bottomli">Affiliated Business</li>
              <li className="text-sm py-3 text-[#004733] bottomli">Browser Disclaimer</li>
            </ul>
            
          </div>
        </div>
      </div>
    </div>
  )
}

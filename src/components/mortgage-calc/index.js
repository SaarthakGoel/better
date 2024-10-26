'use client'

import { useState } from "react"

export default function Calculator() {

  const [homePrice, setHomePrice] = useState(300000)
  const [zipcode, setZipcode] = useState(282010)
  const [downpayment, setDownpayment] = useState(20)
  const [interest, setInterest] = useState(6.50)
  const [loanTime, setLoanTime] = useState(30)

  const down = homePrice * (downpayment / 100);

  const principal = homePrice - down;

  const monthlyInterestRate = interest / (12 * 100);

  const totalPayments = loanTime * 12; // n

  const emi = principal * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalPayments)) /
    (Math.pow(1 + monthlyInterestRate, totalPayments) - 1);

  const monthlyEmi = emi.toFixed()

  const [taxes, setTaxes] = useState(265);
  const [insurance, setInsurance] = useState(132);
  const [hoa, setHoa] = useState(132);
  const [utilities, setUtilities] = useState(100);

  const total = Number(monthlyEmi) + taxes + insurance + hoa + utilities;

  // Calculate widths based on total
  const principalWidth = (Number(monthlyEmi) / total) * 100; // Percentage
  const taxesWidth = (taxes / total) * 100; // Percentage
  const insuranceWidth = (insurance / total) * 100; // Percentage
  const hoaWidth = (hoa / total) * 100; // Percentage
  const utilitiesWidth = (utilities / total) * 100; // Percentage

  console.log(principalWidth,taxesWidth,insuranceWidth,hoaWidth,utilitiesWidth)


  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  console.log(formatCurrency(300000))

  return (
    <div className="pt-32 px-8 sm:px-12 md:px-20 lg:px-28">
      <h1 className="text-3xl sm:text-4xl py-6 md:py-12 font-bold text-[#292b29]">Mortgage Calculator</h1>
      <p className="text-[#565d5a] max-w-[850px] mb-10">Our mortgage calculator includes key factors like homeowners association fees, property taxes, and private mortgage insurance (PMI). Get the whole picture and calculate your total monthly payment.</p>

      <div className="flex flex-wrap gap-8 justify-between items-center">
        <div>
          <h1 className="text-lg mb-8">Home Price</h1>
          <span className=" bg-white rounded-md p-5 border-[1px] border-[#004733] text-4xl font-bold text-[#14342b]">{formatCurrency(homePrice)}</span>
        </div>
        <div>
          <h1 className="text-lg mb-8">Monthly payment</h1>
          <span className="py-5 px-8 text-4xl font-bold text-[#14342b]">${total}/mo</span>
        </div>
        <div>
          <button className="text-white bg-[#017848] py-5 px-8 rounded-lg hover:bg-[#004733] transition-all duration-300">Get Pre-approved</button>
        </div>
      </div>

      <input type="range" min={50000} max={3000000} value={homePrice} onChange={(e) => setHomePrice(e.target.value)} className="w-full appearance-none rounded-full h-1 cursor-pointer bg-[#004733] accent-[#004733] my-16  md:mx-5 " />





      <div className="gap-x-5 gap-y-1 lg:flex">
        <div className="flex flex-col md:flex-row flex-1 mb-4 gap-4">
          <div className="flex-1">
            <div className="relative z-0">
              <div className="p-2 relative bg-white rounded-lg bg-backgroundTertiary w-full border border-solid border-strokeBorder ease-in-out duration-300 whitespace-nowrap overflow-hidden truncate focus:shadow-[#017848] focus:border-[#017848] hover:shadow-[#017848] hover:border-[#017848] focus:shadow-[0_0_0_3px_inset] hover:shadow-[0_0_0_3px_inset]">
                <label for="input-1" id="1-label" className="leading-body text-[#6f7672] absolute left-4 ease-in-out duration-300 transition-all transform-origin-top-left z-10 top-2 text-xs font-normal">ZIP code</label>
                <input maxlength="5" type="tel" data-labelalign="top" id="input-1" autocapitalize="off" autocorrect="off" className="text-left px-2 pt-6 pb-3 relative outline-none border-none rounded-sm text-default font-bold w-full h-full box-border" value={zipcode} onChange={(e) => setZipcode(e.target.value)} />
              </div>
            </div>
          </div>
          <div className="flex flex-1">
            <div className="w-9/12">
              <div className="relative z-0 [&>div:first-of-type]:rounded-r-none">
                <div className="px-4 pt-[1.7rem] pb-[1rem] bg-white relative rounded-lg bg-backgroundTertiary w-full border border-solid border-strokeBorder ease-in-out duration-300 whitespace-nowrap overflow-hidden truncate focus:shadow-[#017848] focus:border-[#017848] hover:shadow-[#017848] hover:border-[#017848] focus:shadow-[0_0_0_3px_inset] hover:shadow-[0_0_0_3px_inset]">
                  <label for="input-downpayment" id="downpayment-label" className="leading-body text-[#6f7672] absolute left-4 ease-in-out duration-300 transition-all transform-origin-top-left z-10 top-2 text-xs font-normal">Down payment</label>
                  <div aria-hidden="true" data-testid="input-icon-box" className="mr-2 absolute ease-in-out duration-300 transition-all font-bold z-10 w-lg h-lg flex items-center justify-center top-6 left-2">$</div>
                  <span className="text-left px-6  relative outline-none border-none rounded-sm text-default font-bold w-full h-full box-border">{down.toFixed()}</span>
                </div>
              </div>
            </div>
            <div className="w-3/12 min-w-[12rem]">
              <div className="relative z-0 flex [&>div:first-of-type]:rounded-l-none [&>div:first-of-type]:border-l-0">
                <div className="p-2 bg-white relative rounded-lg bg-backgroundTertiary w-full border border-solid border-strokeBorder ease-in-out duration-300 whitespace-nowrap overflow-hidden truncate focus:shadow-[#017848] focus:border-[#017848] hover:shadow-[#017848] hover:border-[#017848] focus:shadow-[0_0_0_3px_inset] hover:shadow-[0_0_0_3px_inset]">
                  <div aria-hidden="true" data-testid="input-icon-box" className="mr-2 top-6 absolute ease-in-out duration-300 transition-all font-bold z-10 w-lg h-lg flex items-center justify-center right-2">%</div>
                  <input type="number" data-qa="down-payment-ratio" data-labelalign="top" id="input-2" autocapitalize="off" autocorrect="off" className="text-left px-2 pt-6 pb-3 relative outline-none border-none rounded-sm text-default font-bold w-full h-full box-border" value={downpayment} onChange={(e) => setDownpayment(e.target.value)} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row flex-1 mb-4 gap-4">
          <div className="flex-1">
            <div className="relative z-0">
              <div className="p-2 bg-white relative rounded-lg bg-backgroundTertiary w-full border border-solid border-strokeBorder ease-in-out duration-300 whitespace-nowrap overflow-hidden truncate focus:shadow-[#017848] focus:border-[#017848] hover:shadow-[#017848] hover:border-[#017848] focus:shadow-[0_0_0_3px_inset] hover:shadow-[0_0_0_3px_inset]">
                <label for="input-3" id="3-label" className="leading-body text-[#6f7672] absolute left-4 ease-in-out duration-300 transition-all transform-origin-top-left z-10 top-2 text-xs font-normal">Interest rate</label>
                <div aria-hidden="true" data-testid="input-icon-box" className="mr-2 absolute ease-in-out duration-300 transition-all font-bold z-10 w-lg h-lg flex items-center justify-center top-6 right-2">%</div>
                <input data-labelalign="top" id="input-3" autocapitalize="off" autocorrect="off" className="text-left px-2 pb-3 pt-6 relative outline-none border-none rounded-sm text-default font-bold w-full h-full box-border" value={interest} onChange={(e) => setInterest(e.target.value)} />
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="relative w-full">
              <label className="leading-body m-0 p-0 text-left text-[#6f7672] absolute left-4 origin-top-left transition-all duration-300 ease-in-out z-10 top-2 text-xs font-normal" for="4">Length of loan</label>
              <select id="4" className="truncate font-bold text-interactiveForegroundTertiary appearance-none bg-backgroundTertiary outline-none rounded-lg border border-solid border-strokeBorder px-4 w-full pb-4 pt-6 duration-300 ease-in-out z-0 focus:border-[#017848] focus:shadow-[0_0_0_3px_inset] focus:shadow-[#017848] hover:border-[#017848] hover:shadow-[0_0_0_3px_inset] hover:shadow-[#017848] flex-1" onChange={(e) => setLoanTime(e.target.value)}>
                <option value="30" label="30 years">30 years</option>
                <option value="20" label="20 years">20 years</option>
                <option value="15" label="15 years">15 years</option>
              </select>
              <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="absolute pointer-events-none top-1/2 -translate-y-1/2 right-2">
                <path d="M7 9.5L12 14.5L17 9.5H7Z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>






      <section className="bg-white mt-10 pt-32">
        <div className="m-auto max-w-screen-2xl justify-between px-6 md:px-14">
          <div className="grid md:grid-cols-2">
            <div>
              <h4 className="font-bold text-[#292b29] leading-heading m-0 p-0 tracking-normal w-auto text-base md:text-lg">Monthly payment breakdown</h4>
              <p className="leading-body m-0 p-0 text-left mt-8 overflow-hidden text-3xl font-bold text-[#292b29]">
                ${total} /mo
              </p>
              <div className="mt-8">
                <svg height="100" id="svgelem" width="100%" xmlns="http://www.w3.org/2000/svg">
                <rect height="80" rx="40" ry="40" className="duration-300 ease-in-out fill-[#017848]" width={`${principalWidth}%`} />
                <rect height="80" rx="25" ry="25" className="duration-300 ease-in-out fill-[#b451db]" width={`${taxesWidth}%`} x={`${principalWidth}%`} />
                <rect height="80" rx="20" ry="20" className="duration-300 ease-in-out fill-[#83a2ff]" width={`${insuranceWidth}%`} x={`${principalWidth + taxesWidth}%`} />
                <rect height="80" rx="20" ry="20" className="duration-300 ease-in-out fill-[#ece26e]" width={`${hoaWidth}%`} x={`${principalWidth + taxesWidth + insuranceWidth}%`} />
                <rect height="80" rx="20" ry="20" className="duration-300 ease-in-out fill-[#b75757]" width={`${utilitiesWidth}%`} x={`${principalWidth + taxesWidth + insuranceWidth + hoaWidth}%`} />
                </svg>

              </div>
            </div>
             <div className="ml-5">
            {/* Principal & Interest */}
            <div className="flex justify-between h-12 mb-4">
              <div className="flex items-center text-[#292b29] w-1/2">
                <div className="rounded-sm h-4 w-[5px] mr-2 bg-[#017848]"></div>
                <p className="font-normal leading-body m-0 p-0 text-left text-[#292b29] text-base">Principal &amp; interest</p>
              </div>
              <p className="leading-body m-0 p-0 text-base pt-0 items-center text-left w-1/2 sm:w-[160px] flex font-bold text-interactiveForegroundSecondary">
                ${monthlyEmi}
              </p>
            </div>

            {/* Taxes Input */}
            <div className="flex justify-between h-12 mb-4">
              <div className="flex items-center text-[#292b29] w-1/2">
                <div className="rounded-sm h-4 w-[5px] mr-2 bg-[#b451db]"></div>
                <label className="font-normal leading-body m-0 p-0 text-left text-[#292b29] text-base" htmlFor="input-taxes">Property taxes</label>
              </div>
              <input
                type="number"
                value={taxes}
                onChange={(e) => setTaxes(Number(e.target.value))}
                className="text-right px-2 relative outline-none border-none rounded-sm text-default font-bold w-1/2 sm:w-[160px] h-full box-border"
              />
            </div>

            {/* Homeowners Insurance Input */}
            <div className="flex justify-between h-12 mb-4">
              <div className="flex items-center text-[#292b29] w-1/2">
                <div className="rounded-sm h-4 w-[5px] mr-2 bg-[#83a2ff]"></div>
                <label className="font-normal leading-body m-0 p-0 text-left text-[#292b29] text-base" htmlFor="input-insurance">Homeowners insurance</label>
              </div>
              <input
                type="number"
                value={insurance}
                onChange={(e) => setInsurance(Number(e.target.value))}
                className="text-right px-2 relative outline-none border-none rounded-sm text-default font-bold w-1/2 sm:w-[160px] h-full box-border"
              />
            </div>

            {/* HOA Fees Input */}
            <div className="flex justify-between h-12 mb-4">
              <div className="flex items-center text-[#292b29] w-1/2">
                <div className="rounded-sm h-4 w-[5px] mr-2 bg-[#ece26e]"></div>
                <label className="font-normal leading-body m-0 p-0 text-left text-[#292b29] text-base" htmlFor="input-hoa">HOA fees</label>
              </div>
              <input
                type="number"
                value={hoa}
                onChange={(e) => setHoa(Number(e.target.value))}
                className="text-right px-2 relative outline-none border-none rounded-sm text-default font-bold w-1/2 sm:w-[160px] h-full box-border"
              />
            </div>

            {/* Utilities Input */}
            <div className="flex justify-between h-12 mb-4">
              <div className="flex items-center text-[#292b29] w-1/2">
                <div className="rounded-sm h-4 w-[5px] mr-2 bg-[#b75757]"></div>
                <label className="font-normal leading-body m-0 p-0 text-left text-[#292b29] text-base" htmlFor="input-utilities">Utilities</label>
              </div>
              <input
                type="number"
                value={utilities}
                onChange={(e) => setUtilities(Number(e.target.value))}
                className="text-right px-2 relative outline-none border-none rounded-sm text-default font-bold w-1/2 sm:w-[160px] h-full box-border"
              />
            </div>
          </div>
        </div>
      </div>
    </section>






    </div>
  )
}

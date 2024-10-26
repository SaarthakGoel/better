import Image from "next/image";


export default function MortgageCalculatorInfo() {
  return (
    <section
      id="seo-section-wrapper"
      className="max-w-screen-2xl mx-auto px-6 md:px-14 py-16 flex flex-col gap-8 text-[#565d5a]">


      <hr className="border-t border-strokeDivider my-8" />

      {/* Heading and Paragraph */}
      <>
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#292b29] leading-tight mb-4">
          How does a mortgage calculator help me?
        </h2>
        <p className="text-base leading-relaxed text-[#565d5a]">
          When deciding how much house you can afford, one of the most important pieces to determine is whether a home will fit into your monthly budget. A mortgage calculator helps you understand the monthly cost of a home. And ours will allow you to enter different down payments and interest rates to help determine what is affordable for you.
        </p>
    </>

      <hr className="border-t border-strokeDivider my-8" />

      <div>
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#292b29] leading-tight mb-4">
          How much monthly mortgage payment can I afford?
        </h2>
        <p className="text-base leading-relaxed text-[#565d5a] mb-4">
          Lenders determine how much you can afford on a monthly housing payment by calculating your{" "}
          <a
            href="/content/what-is-a-good-debt-to-income-ratio/"
            className="underline text-interactivePrimary"
          >
            debt-to-income ratio (DTI)
          </a>
          . The maximum DTI you can have in order to qualify for most mortgage loans is often between 45-50%, with your anticipated housing costs included.
        </p>
        <p className="text-base leading-relaxed text-[#565d5a] mb-4">
          Your DTI is the balance between your income and your debt. It helps lenders understand how safe or risky it is for them to approve your loan. A DTI ratio represents how much of your gross monthly income is spoken for by creditors, and how much of it is left over to you as disposable income. It’s most commonly written as a percentage. For example, if you pay half your monthly income in debt payments, you would have a DTI of 50%.
        </p>
      </div>

      {/* Image and Example Section */}
      <div className="flex flex-col items-center">
        <p className="text-base leading-relaxed text-[#565d5a] mb-4">Formula for calculating your debt-to-income (DTI) ratio:</p>
        <Image
          src="/mortgage-page/dti-formula.jpg"
          height={500}
          width={500}
          alt="Mortgage calculator | Debt to income ratio (DTI) formula"
          className="w-full max-w-[800px]"
        />
        <p className="text-base leading-relaxed text-[#565d5a] mt-4 mb-2">Here’s an example of what calculating your DTI might look like:</p>
        <Image
          src="/mortgage-page/dti-example.jpg"
          height={500}
          width={500}
          alt="Mortgage calculator | Debt to income ratio (DTI) formula example"
          className="w-full max-w-[800px]"
        />
      </div>

      <hr className="border-t border-strokeDivider my-8" />

      {/* Mortgage Calculation Section */}
      <div>
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#292b29] leading-tight mb-4">
          How to calculate monthly mortgage payments?
        </h2>
        <p className="text-base leading-relaxed text-[#565d5a] mb-4">
          Your monthly mortgage payment includes loan principal and interest, property taxes, homeowners insurance, and mortgage insurance (PMI), if applicable. While not typically included in your mortgage payment, homeowners also pay monthly utilities and sometimes pay homeowners association (HOA) fees, so it’s a good idea to factor these into your monthly budget. This mortgage calculator factors in all these typical monthly costs so you can really crunch the numbers.
        </p>
        <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-[#292b29] leading-tight mt-4 mb-2">Formula for calculating monthly mortgage payments</h3>
        <p className="text-base leading-relaxed text-[#565d5a] mb-4">
          The easiest way to calculate your mortgage payment is to use a calculator, but for the curious or mathematically inclined, here’s the formula for calculating principal and interest yourself:
        </p>
      </div>

      {/* Formula Image and Explanation */}
      <div className="flex flex-col items-center">
      <Image
          src="/mortgage-page/payments-formula.jpg"
          height={500}
          width={500}
          alt="Mortgage calculator | Monthly mortgage payment formula"
          className="w-full max-w-[800px]"
        />
        <div className="mt-4">
          <p className="text-base leading-relaxed text-[#565d5a] mb-2">Where:</p>
          <ul className="list-disc ml-8">
            <li className="text-base leading-relaxed text-[#565d5a] mb-2">
              <b>M</b> is monthly mortgage payments
            </li>
            <li className="text-base leading-relaxed text-[#565d5a] mb-2">
              <b>P</b> is the principal loan amount (the amount you borrow)
            </li>
            <li className="text-base leading-relaxed text-[#565d5a] mb-2">
              <b>r</b> is the monthly interest rate<br />
              (annual interest rate divided by 12 and expressed as a decimal)
              <br />
              <small>
                For example:
                <br />
                if the annual interest rate is <b>5%</b>,
                <br />
                the monthly rate would be <b>0.05/12</b> = .00417, or <b>.417%</b>
              </small>
            </li>
            <li className="text-base leading-relaxed text-[#565d5a] mb-2">
              <b>n</b> is the total number of payments in months
              <br />
              <small>
                For example:
                <br />
                for a 30-year loan, n = 30×12 = <b>360</b> months
              </small>
            </li>
          </ul>
          <p className="text-base leading-relaxed text-[#565d5a] mt-4">Here’s a simple example:</p>
          <Image
          src="/mortgage-page/payments-example.jpg"
          height={500}
          width={500}
          alt="Mortgage calculator | Monthly mortgage payment formula example"
          className="w-full max-w-[800px] mt-4"
          />
        </div>
      </div>




      {/* Property Tax Information Section */}
      <p className="font-normal leading-relaxed text-left text-[#565d5a] text-base">
        This formula assumes a fixed-rate mortgage, where the interest rate remains constant throughout the loan term. And remember, you’ll still need to add on taxes, insurance, utilities, and HOA fees if applicable.
      </p>

      <hr className="my-12 border-t border-strokeDivider" />

      <h3 className="font-bold text-[#292b29] leading-heading text-lg md:text-xl lg:text-2xl tracking-normal">
        How to use this mortgage calculator?
      </h3>
      <p className="font-normal leading-relaxed text-left text-[#565d5a] text-base">
        Play around with different home prices, locations,{" "}
        <a
          href="/faq/loan-process/down-payment-definition/"
          className="underline text-interactivePrimary"
        >
          down payments
        </a>
        , interest rates, and mortgage lengths to see how they impact your monthly mortgage payments.
      </p>
      <p className="font-normal leading-relaxed text-left text-[#565d5a] text-base">
        Increasing your down payment and decreasing your interest rate and mortgage term length will make your monthly payment go down. Taxes, insurance, and HOA fees will vary by location. If you enter a down payment amount that’s less than 20% of the home price,{" "}
        <a
          href="/content/what-is-pmi-or-private-mortgage-insurance/"
          className="underline text-interactivePrimary"
        >
          private mortgage insurance (PMI)
        </a>{" "}
        costs will be added to your monthly mortgage payment. As the costs of utilities can vary from county to county, we’ve included a utilities estimate that you can break down by service. If you’re thinking about buying a condo or into a community with a Homeowners Association (HOA), you can add HOA fees.
      </p>
      <p className="font-normal leading-relaxed text-left text-[#565d5a] text-base">
        The only amounts we haven’t included are the money you’ll need to save for annual home maintenance/repairs or the costs of home improvements. To see how much home you can afford including these costs, take a look at the{" "}
        <a
          href="/how-much-house-can-I-afford/"
          className="underline text-interactivePrimary"
        >
          Better home affordability calculator
        </a>
        .
      </p>
      <p className="font-normal leading-relaxed text-left text-[#565d5a] text-base">
        Fun fact:{" "}
        <a
          href="/content/how-to-calculate-property-tax-on-a-house/"
          className="underline text-interactivePrimary"
        >
          Property tax rates
        </a>{" "}
        are extremely localized, so two homes of roughly the same size and quality on either side of a municipal border could have very different tax rates. Buying in an area with a lower property tax rate may make it easier for you to afford a higher-priced home.
      </p>

      <h3 className="font-bold text-[#292b29] leading-heading text-lg md:text-xl lg:text-2xl tracking-normal">
        Do you know your property tax rate?
      </h3>
      <p className="font-normal leading-relaxed text-left text-[#565d5a] text-base">
        While exact property tax rates vary by county, it can be helpful to look at taxes on the state level to get an idea for taxes in your state. Here’s a helpful chart from{" "}
        <a
          href="https://www.forbes.com/sites/andrewdepietro/2023/09/01/property-taxes-by-state-a-breakdown-of-the-highest-and-lowest-property-taxes-by-state"
          className="underline text-interactivePrimary"
        >
          Forbes
        </a>{" "}
        breaking down the Census Bureau’s 2021 American Community Survey 5-year estimate:
      </p>

      {/* Property Tax Table Section */}
      <div className="my-12 overflow-auto">
        <table className="min-w-full border border-[#d4ebc5] table-auto rounded-lg">
          <thead>
            <tr>
              <th className="border border-strokeInverseBorder text-center bg-[#004733] text-white px-2 py-3 md:px-4">
                <p className="text-sm font-bold text-textInversePrimary">State</p>
              </th>
              <th className="border border-strokeInverseBorder text-center bg-[#004733] text-white px-2 py-3 md:px-4">
                <p className="text-sm font-bold text-textInversePrimary">Median Effective Property Tax Rate</p>
              </th>
              <th className="border border-strokeInverseBorder text-center bg-[#004733] text-white px-2 py-3 md:px-4">
                <p className="text-sm font-bold text-textInversePrimary">Mean Effective Property Tax Rate</p>
              </th>
              <th className="border border-strokeInverseBorder text-center bg-[#004733] text-white px-2 py-3 md:px-4">
                <p className="text-sm font-bold text-textInversePrimary">Median Home Value</p>
              </th>
              <th className="border border-strokeInverseBorder text-center bg-[#004733] text-white px-2 py-3 md:px-4">
                <p className="text-sm font-bold text-textInversePrimary">Median Property Taxes Paid</p>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="even:bg-[#e3ebe2]">
              <td className="border border-[#d4ebc5] text-center px-2 py-3 md:px-4">
                <p className="text-sm text-[#565d5a]">AL</p>
              </td>
              <td className="border border-[#d4ebc5] text-center px-2 py-3 md:px-4">
                <p className="text-sm text-[#565d5a]">0.41%</p>
              </td>
              <td className="border border-[#d4ebc5] text-center px-2 py-3 md:px-4">
                <p className="text-sm text-[#565d5a]">0.40%</p>
              </td>
              <td className="border border-[#d4ebc5] text-center px-2 py-3 md:px-4">
                <p className="text-sm text-[#565d5a]">$157,100</p>
              </td>
              <td className="border border-[#d4ebc5] text-center px-2 py-3 md:px-4">
                <p className="text-sm text-[#565d5a]">$646</p>
              </td>
            </tr>
            <tr className="even:bg-[#e3ebe2]">
              <td className="border border-[#d4ebc5] text-center px-2 py-3 md:px-4">
                <p className="text-sm text-[#565d5a]">AK</p>
              </td>
              <td className="border border-[#d4ebc5] text-center px-2 py-3 md:px-4">
                <p className="text-sm text-[#565d5a]">1.23%</p>
              </td>
              <td className="border border-[#d4ebc5] text-center px-2 py-3 md:px-4">
                <p className="text-sm text-[#565d5a]">1.04%</p>
              </td>
              <td className="border border-[#d4ebc5] text-center px-2 py-3 md:px-4">
                <p className="text-sm text-[#565d5a]">$282,800</p>
              </td>
              <td className="border border-[#d4ebc5] text-center px-2 py-3 md:px-4">
                <p className="text-sm text-[#565d5a]">$3,464</p>
              </td>
            </tr>
            <tr className="even:bg-[#e3ebe2]">
              <td className="border border-[#d4ebc5] text-center px-2 py-3 md:px-4">
                <p className="text-sm text-[#565d5a]">AZ</p>
              </td>
              <td className="border border-[#d4ebc5] text-center px-2 py-3 md:px-4">
                <p className="text-sm text-[#565d5a]">0.62%</p>
              </td>
              <td className="border border-[#d4ebc5] text-center px-2 py-3 md:px-4">
                <p className="text-sm text-[#565d5a]">0.63%</p>
              </td>
              <td className="border border-[#d4ebc5] text-center px-2 py-3 md:px-4">
                <p className="text-sm text-[#565d5a]">$265,600</p>
              </td>
              <td className="border border-[#d4ebc5] text-center px-2 py-3 md:px-4">
                <p className="text-sm text-[#565d5a]">$1,648</p>
              </td>
            </tr>
            <tr className="even:bg-[#e3ebe2]">
              <td className="border border-[#d4ebc5] text-center px-2 py-3 md:px-4">
                <p className="text-sm text-[#565d5a]">AR</p>
              </td>
              <td className="border border-[#d4ebc5] text-center px-2 py-3 md:px-4">
                <p className="text-sm text-[#565d5a]">0.55%</p>
              </td>
              <td className="border border-[#d4ebc5] text-center px-2 py-3 md:px-4">
                <p className="text-sm text-[#565d5a]">0.54%</p>
              </td>
              <td className="border border-[#d4ebc5] text-center px-2 py-3 md:px-4">
                <p className="text-sm text-[#565d5a]">$145,300</p>
              </td>
              <td className="border border-[#d4ebc5] text-center px-2 py-3 md:px-4">
                <p className="text-sm text-[#565d5a]">$831</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>



      <div className="hidden md:group-hover:block absolute w-full h-full bg-black opacity-25 top-0 left-0"></div>
      <button className="rounded-base leading-body text-base text-center font-bold select-none outline-none transition duration-300 ease-universal focus:shadow-[0_0_0_4px_inset] disabled:text-interactiveForegroundMuted disabled:bg-interactiveMuted disabled:shadow-none text-interactiveForegroundSecondary bg-interactiveSecondary hover:bg-accentSecondary focus:bg-accentSecondary focus:shadow-accentBorderSecondary active:bg-accentSecondary px-xl h-3xl w-auto hidden md:group-hover:block left-2/4 top-2/4 -translate-y-2/4 -translate-x-2/4 absolute">
        See all states
      </button>

      <button className="rounded-base leading-body text-base text-center font-bold select-none outline-none transition duration-300 ease-universal focus:shadow-[0_0_0_4px_inset] disabled:text-interactiveForegroundMuted disabled:bg-interactiveMuted disabled:shadow-none text-interactiveForegroundTertiary bg-transparent border border-solid border-strokeBorder hover:text-interactivePrimary hover:border-transparent hover:shadow-[0_0_0_4px_inset] hover:shadow-accentBorderSecondary focus:border-transparent focus:shadow-accentBorderSecondary active:text-interactivePrimary px-xl h-3xl block md:hidden mt-base w-full">
        See all states
      </button>

      <hr className="my-12 border-t border-strokeDivider" />
      <h2 className="font-bold text-[#292b29] leading-heading m-0 p-0 tracking-normal w-auto text-xl md:text-2xl lg:text-3xl md:tracking-tight">
        How is Better’s mortgage calculator different?
      </h2>

      <h3 className="font-bold text-[#292b29] leading-heading m-0 p-0 tracking-normal w-auto text-lg md:text-xl lg:text-2xl">
        This mortgage calculator shows your payments with taxes and insurance
      </h3>
      <p className="font-normal leading-body m-0 p-0 text-left text-[#565d5a] text-base">
        The property taxes you contribute are used to finance the services provided by your local government to the community...
      </p>

      <h3 className="font-bold text-[#292b29] leading-heading m-0 p-0 tracking-normal w-auto text-lg md:text-xl lg:text-2xl">
        This mortgage calculator shows your mortgage costs with PMI
      </h3>
      <p className="font-normal leading-body m-0 p-0 text-left text-[#565d5a] text-base">
        PMI, an abbreviation for private mortgage insurance, aids potential homeowners...
      </p>

      <hr className="my-12 border-t border-strokeDivider" />

      <h2 className="font-bold text-[#292b29] leading-heading m-0 p-0 tracking-normal w-auto text-xl md:text-2xl lg:text-3xl md:tracking-tight">
        More resources
      </h2>

      <div className="flex flex-col justify-between gap-8 pt-[36px] md:flex-row">
        <div className="rounded-lg px-8 py-8 border border-strokeDivider flex-1">
          <img alt="Get pre-approved to see how much you can borrow" loading="lazy" width="32" height="32" decoding="async" src="https://media.better.com/better-com/mortgage-calculator/doc-correct.svg" />
          <p className="font-normal leading-body m-0 py-4 text-left mt-base text-[20px] text-interactiveForegroundSecondary">
            Get pre-approved to see how much you can borrow
          </p>
          <a href="/preapproval/nxt-purchase?utm_source=website&utm_medium=webpage&utm_campaign=calculator&utm_content=mortgage-calculator" className="focus:outline-interactivePrimary focus:outline-1 focus:outline-offset-[theme(spacing.2xs)] text-interactivePrimary block mb-xs mt-base font-bold no-underline hover:underline">
            Get started →
          </a>
          <p className="font-normal leading-body m-0 p-0 text-left text-xs text-[#565d5a]">Won’t impact your credit</p>
        </div>

        <div className="rounded-lg px-8 py-8 border border-strokeDivider flex-1">
          <img alt="See today’s rates in your area" loading="lazy" width="32" height="32" decoding="async" src="https://media.better.com/better-com/mortgage-calculator/downtrend.svg" />
          <p className="font-normal leading-body m-0 py-4 text-left mt-base text-[20px] text-interactiveForegroundSecondary">
            See today’s rates in your area
          </p>
          <a href="/mortgage-rates" className="focus:outline-interactivePrimary focus:outline-1 focus:outline-offset-[theme(spacing.2xs)] text-interactivePrimary block mb-xs mt-base font-bold no-underline hover:underline">
            See rates →
          </a>
        </div>

        <div className="rounded-lg px-8 py-8 border border-strokeDivider flex-1">
          <img alt="Find out your max homebuying budget" loading="lazy" width="32" height="32" decoding="async" src="https://media.better.com/better-com/mortgage-calculator/calculator.svg" />
          <p className="font-normal leading-body m-0 py-4 text-left mt-base text-[20px] text-interactiveForegroundSecondary">
            Find out your max homebuying budget
          </p>
          <a href="/how-much-house-can-i-afford" className="focus:outline-interactivePrimary focus:outline-1 focus:outline-offset-[theme(spacing.2xs)] text-interactivePrimary block mb-xs mt-base font-bold no-underline hover:underline">
            Try our mortgage calculator →
          </a>
        </div>
      </div>

    </section>



  )
}
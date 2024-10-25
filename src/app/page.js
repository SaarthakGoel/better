import Footer from "@/components/homePage/footer";
import Header from "@/components/homePage/header";
import Section2 from "@/components/homePage/section2";
import Section3 from "@/components/homePage/section3";
import Section4 from "@/components/homePage/section4";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="min-h-screen bg-[#004733] flex-col items-center justify-center text-white">

        <Header />

        <div className="container mx-auto px-6 pt-32 pb-12 text-center">
          <div className="flex w-full justify-center items-center">
            <div className="">
              <svg class="w-[24px] h-[24px] md:w-[36px] md:h-[36px]" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="18.8102" cy="18" r="17.8577" fill="#FFFDFA"></circle><path d="M28.3517 22.6302L20.2944 14.572C20.2944 14.5719 20.2944 14.5719 20.2943 14.5719C20.2049 14.4824 20.0988 14.4114 19.9819 14.363C19.8651 14.3145 19.7398 14.2896 19.6132 14.2896C19.4867 14.2896 19.3614 14.3145 19.2446 14.363C19.1277 14.4114 19.0215 14.4824 18.9321 14.5719C18.9321 14.5719 18.9321 14.5719 18.9321 14.572L15.5711 17.9339L8.97631 11.3382L8.9763 11.3382C8.79567 11.1575 8.55067 11.0561 8.29521 11.0561C8.03975 11.0561 7.79475 11.1575 7.61411 11.3382C7.43348 11.5188 7.332 11.7638 7.332 12.0193C7.332 12.2747 7.43348 12.5197 7.61411 12.7004L14.8899 19.9762C14.89 19.9762 14.89 19.9762 14.89 19.9762C14.9794 20.0657 15.0856 20.1367 15.2024 20.1852C15.3193 20.2336 15.4446 20.2585 15.5711 20.2585C15.6976 20.2585 15.8229 20.2336 15.9398 20.1852C16.0566 20.1367 16.1628 20.0657 16.2522 19.9762C16.2522 19.9762 16.2522 19.9762 16.2522 19.9762L19.6133 16.6142L26.9905 23.9914H22.847C22.5916 23.9914 22.3467 24.0928 22.1662 24.2734C21.9856 24.4539 21.8842 24.6988 21.8842 24.9542C21.8842 25.2095 21.9856 25.4544 22.1662 25.6349C22.3467 25.8155 22.5916 25.9169 22.847 25.9169H29.3144C29.5698 25.9169 29.8146 25.8155 29.9952 25.6349C30.1758 25.4544 30.2772 25.2095 30.2772 24.9542V18.4867C30.2772 18.2314 30.1758 17.9865 29.9952 17.8059C29.8146 17.6254 29.5698 17.524 29.3144 17.524C29.0591 17.524 28.8142 17.6254 28.6336 17.8059C28.4531 17.9865 28.3517 18.2314 28.3517 18.4867V22.6302Z" fill="#6E4CF6" stroke="#6E4CF6" stroke-width="0.308665"></path></svg>
            </div>
            <h2 className="text-3xl mx-4 font-extralight">Rate drop alert</h2>
          </div>


          <div className="flex w-full justify-center items-center pt-44 relative">
            <h1 className="text-[#fffdfa] font-bold text-8xl mx-40 my-5 absolute top-8  ">
              The rate drop you've been waiting for
            </h1>
            <div>
              <div className="flex justify-center">
                <button className="bg-[#1ee07f] text-black px-10 py-5 rounded-full text-base hover:text-white hover:bg-[#004733] transition-all duration-300">
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
    </div>

  );
}

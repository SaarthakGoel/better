import localFont from "next/font/local";
import "./globals.css";
import Section4 from "@/components/homePage/section4";
import Footer from "@/components/homePage/footer";

const poppinsMedium = localFont({
  src: "./fonts/poppins-medium-webfont.woff",  // Path to your local Poppins Medium font
  variable: "--font-poppins-medium",           // Custom CSS variable for this font
  weight: "500",                               // Specify the weight for Poppins Medium (500 is typically medium)
});

export const metadata = {
  title: "Simple, Online mortgage | Better mortgage",
  description: "better.com",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppinsMedium.variable} font-poppins`}
      >
        {children}
      </body>
    </html>
  );
}

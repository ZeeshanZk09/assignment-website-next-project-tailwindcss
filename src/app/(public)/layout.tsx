import type { Metadata } from "next";
import localFont from "next/font/local";
// import Link from 'next/link'
import Header from "@/components/Header/Header"

import "./globals.css";
import Footer from "@/components/Footer/Footer";


const geistSans = localFont({
  src: "./../../../public/assets/fonts/GeistVF.woff", // Remove /public from the path
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./../../../public/assets/fonts/GeistMonoVF.woff", // Remove /public from the path
  variable: "--font-geist-mono",
  weight: "100 900",
});
export const metadata: Metadata = {
  title: "Apna Campus - Student Management System",
  description: "Welcome to our Student Management System, empowering students with seamless management solutions.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const styleObj = { clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" };

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

        <div >
          <main className="  ">
          <video className=" absolute -z-10 hidden lg:block   lg:h-fit lg:w-fit" src="/assets/videos/coding-world-background.mp4"
        autoPlay
        loop
        muted
        playsInline 
        preload="none">

        Your browser does not support the video tag.
      </video>
          {/* <video className=" absolute -z-10 lg:hidden block  h-full w-screen" src="/assets/videos/mobile-size-coding-background.mp4"
        autoPlay
        loop
        muted
        playsInline 
        preload="none">

        Your browser does not support the video tag.
      </video> */}
        <Header />
            
            <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
              <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#2f2f31] to-[#76767b] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={styleObj}></div>
            </div>
            
            {children}
            
            <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
              <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#c2bdbf] to-[#eeedf7] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style={styleObj}></div>
            </div>
      <Footer />
          </main>
        </div>
      </body>
    </html>
  );
}

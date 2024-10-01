// import Image from "next/image";
import Link from "next/link";
import * as React from 'react';
// import Footer from '@/components/Footer'
import Banner from '@/components/Banner/Banner'


export default function Home() {


  return (
    <>

<section className="text-center px-6 py-24 sm:px-12 sm:py-32 md:px-20 md:py-24 xl:py-40">
  <div className="hidden lg:mb-8 lg:flex lg:justify-center">
    <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-white ring-1 ring-gray-50 hover:ring-[#93B1A6]">
      New features to enhance student management.
      <Link href="/" className="font-semibold text-indigo-300">
        <span className="absolute inset-0" aria-hidden="true"></span>
        Explore now <span aria-hidden="true">&rarr;</span>
      </Link>
    </div>
  </div>
  <div className="text-center">
    <h1 className="text-[2.2rem] leading-[3rem] lg:leading-relaxed  font-bold tracking-wider bg-gradient-to-r from-[#93B1A6] to-[#ffffffe5] bg-clip-text text-transparent   lg:text-[3.5rem]">
      Empowering Students with Seamless Management
    </h1>
    <p className="px-2 sm:px-12 md:px-28 text-sm tracking-widest leading-6 text-white">
      Simplify student data, enhance learning experiences, and manage everything in one place. Our platform provides easy access to essential tools for students and educators alike.
    </p>
    <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-y-4 sm:gap-x-6">
      <Link href="/login" className="rounded-md bg-[#abdafb] px-4 py-2 text-sm font-extrabold text-black shadow-lg hover:bg-[#abdafb] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#abdafb]">
        Get started
      </Link>
      <Link href="/learn-more" className="text-sm font-semibold leading-6 text-[#abdafb]">
        Learn more <span aria-hidden="true">→</span>
      </Link>
    </div>
  </div>
  <div className="flex my-8 mx-0 lg:hidden justify-center">
    <div className="relative rounded-full px-2 py-[0.1rem] text-[0.67rem] leading-6 text-white ring-1 ring-gray-50 hover:ring-[#93B1A6]">
      New features to enhance student management.
      <Link href="/" className="font-semibold text-indigo-300">
        <span className="absolute inset-0" aria-hidden="true"></span>
        Explore now <span aria-hidden="true">&rarr;</span>
      </Link>
    </div>
  </div>
</section>
      <Banner />


    {/* <Footer />
    <Footer />
    <Footer />
    <Footer />
    <Footer /> */}
    </>
  );
}

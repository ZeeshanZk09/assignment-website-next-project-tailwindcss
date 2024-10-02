import Link from 'next/link'
import React from 'react';

function Hero() {
    return (

        <div className="bg-[#0000009d] z-10 " >
            <section className="    text-center px-6 py-24 h-screen sm:px-12 sm:py-32 md:px-20  xl:py-40 space-y-3 sm:space-y-6 ">

                {/* Notification Banner */}
                <div className="hidden mt-10  lg:flex lg:justify-center">
                    <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-[#e0f5f1] tracking-widest ring-1 ring-[#d1d5db] hover:ring-[#95dccf]">
                        New features to enhance student management.
                        <Link href="/" className="font-semibold text-[#a2d8c5]">
                            <span className="absolute inset-0" aria-hidden="true"></span>
                            Explore now <span aria-hidden="true">&rarr;</span>
                        </Link>
                    </div>
                </div>
                {/* Hero Section */}
                <div className="  text-center space-y-2 sm:space-y-4 py-2">
                    <h1 className="text-[2.4rem] leading-[2.6rem] font-bold tracking-wider z-50 bg-gradient-to-b from-[#74ffa4]  to-[#2eff779d] bg-clip-text text-transparent sm:text-[2.6rem] sm:leading-[3rem] lg:text-6xl lg:leading-normal  ">
                        Empowering Students with Seamless Management
                    </h1>
                    <p className="px-2 sm:px-12 md:px-28 z-1000 text-sm tracking-widest leading-4 text-white">
                        Simplify student data, enhance learning experiences, and manage everything in one place. Our platform provides easy access to essential tools for students and educators alike.
                    </p>
                    <div className=" flex pt-2 items-center justify-center gap-x-6">
                        <Link href="/login" className="rounded-md bg-[#2eff779d] px-4 py-2 sm:text-xl text-lg font-semibold  font-sans text-white shadow-lg hover:bg-[#74ffa4] hover:text-[#000000]">
                            Get started
                        </Link>
                        <Link href="/learn-more" className="sm:text-lg text-sm font-semibold leading-6 text-[#74ffa4]">
                            Learn more <span aria-hidden="true">→</span>
                        </Link>
                    </div>
                </div>
                {/* Mobile Notification Banner */}
                <div className="flex my-8 mx-0 lg:hidden justify-center">
                    <div className="relative rounded-full px-2 py-[0.1rem] text-[0.8rem] leading-4 text-[#cde5e0] tracking-widest ring-1 ring-[#d1d5db] hover:ring-[#95dccf]">
                        New features to enhance student management.
                        <Link href="/" className="font-semibold text-[#95dccf]">
                            <span className="absolute inset-0" aria-hidden="true"></span>
                            Explore now <span aria-hidden="true">&rarr;</span>
                        </Link>
                    </div>
                </div>

            </section>

        </div>
    );
}

export default Hero;

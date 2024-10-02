import Link from 'next/link'
import React from 'react';

function Hero() {
    return (

        <section className="text-center px-6 py-24 h-screen sm:px-12 sm:py-32 md:px-20  xl:py-40 space-y-3 sm:space-y-6">
            {/* Notification Banner */}
            <div className="hidden lg:flex  lg:mb-8 lg:justify-center">
                <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-[#e0f5f1] tracking-widest ring-1 ring-[#d1d5db] hover:ring-[#95dccf]">
                    New features to enhance student management.
                    <Link href="/" className="font-semibold text-[#a2d8c5]">
                        <span className="absolute inset-0" aria-hidden="true"></span>
                        Explore now <span aria-hidden="true">&rarr;</span>
                    </Link>
                </div>
            </div>
            {/* Hero Section */}
            <div className="text-center space-y-2 sm:space-y-4 py-2">
                <h1 className="text-[2.4rem] leading-[2.6rem] lg:leading-relaxed font-bold tracking-wider bg-gradient-to-r from-[#87aeb5] to-[#f1f8fc] bg-clip-text text-transparent sm:text-[2.6rem] sm:leading-[3rem] lg:text-[3.5rem]">
                    Empowering Students with Seamless Management
                </h1>
                <p className="px-2 sm:px-12 md:px-28 text-sm tracking-widest leading-4 text-[#cde5e0]">
                    Simplify student data, enhance learning experiences, and manage everything in one place. Our platform provides easy access to essential tools for students and educators alike.
                </p>
                <div className=" flex pt-2 items-center justify-center gap-x-6">
                    <Link href="/login" className="rounded-md bg-[#58786c] px-4 py-2 text-sm font-extrabold text-white shadow-lg hover:bg-[#6a9aa4] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#95dccf]">
                        Get started
                    </Link>
                    <Link href="/learn-more" className="text-sm font-semibold leading-6 text-[#abdafb] hover:tracking-widest">
                        Learn more <span aria-hidden="true">→</span>
                    </Link>
                </div>
            </div>
            {/* Mobile Notification Banner */}
            <div className="flex my-2 mx-0 lg:hidden justify-center">
                <div className="relative rounded-full px-2 py-[0.1rem] text-[0.8rem] leading-4 text-[#cde5e0] tracking-widest ring-1 ring-[#d1d5db] hover:ring-[#95dccf]">
                    New features to enhance student management.
                    <Link href="/" className="font-semibold text-[#95dccf]">
                        <span className="absolute inset-0" aria-hidden="true"></span>
                        Explore now <span aria-hidden="true">&rarr;</span>
                    </Link>
                </div>
            </div>
        </section>

    );
}

export default Hero;

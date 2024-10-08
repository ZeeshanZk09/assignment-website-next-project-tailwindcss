"use client";
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './Header.css'
export default function Header() {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleToggleMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
<header className="absolute m-2 inset-x-0 top-0 z-50 rounded-lg backdrop-blur-lg bg-[#ffffff36] ">
  <nav className="flex items-center justify-between p-4 lg:px-8" aria-label="Global">
    <div className="flex w-fit lg:w-1/6 ">
      <Link href="/" className="-m-1.5 p-1.5">
        <span className="sr-only">Your Company</span>
        <Image
          className="w-fit h-fit lg:w-48 lg:h-20"
          src='/assets/images/Logo.png'
          alt="Logo"
          width={100}
          height={100}
        />
      </Link>
    </div>
    <div className="flex lg:hidden w-[10%]  justify-end">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-end rounded-md p-2.5  text-gray-300"
            onClick={handleToggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
    {/* Center Links - Fixed */}
    <div className="hidden nav-links  lg:flex lg:justify-between justify-self-center lg:w-2/3 lg:z-50 py-4">
      <Link href="/courses" className="text-lg font-normal hover:underline leading-6 text-white">Courses</Link>
      <Link href="/docs" className="text-lg font-normal hover:underline leading-6 text-white">Docs</Link>
      <Link href="/about" className="text-lg font-normal hover:underline leading-6 text-white">About</Link>
      <Link href="/templates" className="text-lg font-normal hover:underline leading-6 text-white">Templates</Link>
    </div>
    
    <div className="hidden lg:flex lg:justify-end max-w-52">
      <Link href="/login" id="loginBtn" className="relative inline-block px-6 py-3 text-lg font-normal text-white bg-transparent border-2 border-white rounded-lg cursor-pointer outline-none z-50 overflow-hidden group">Log in <span aria-hidden="true" className="text-2xl">&rarr;</span></Link>
    </div>
  </nav>

  {isMobileMenuOpen && (
    <div className="lg:hidden absolute top-0 left-0 right-0 z-50 w-full p-3 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 bg-gradient-to-b from-[#596360db] to-[#021b0cdb] rounded  backdrop-blur-3xl" role="dialog" aria-modal="true" aria-label="Mobile Menu" ref={menuRef} style={{ insetBlockStart: '0', top: '0' }}>
      <div className="flex items-center justify-between ">
        <Link href="/" className="-m-1.5 p-1.5  ">
          <span className="sr-only">Your Company</span>
          <Image
            className="   z-1000 contrast-100"
            src='/assets/images/Logo.png'
            alt="Logo"
            width={120}
            height={50}
          />
        </Link>
        <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700" onClick={handleToggleMenu}>
          <span className="sr-only">Close menu</span>
          <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="mt-6 flow-root">
        <div className="-my-6 divide-y divide-gray-500/10">
          <div className="space-y-2 py-6">
            <Link href="/courses" className="-mx-3 block rounded-lg px-3 py-2 text-base font-light leading-7 text-gray-200 active:bg-gray-50 active:text-gray-800">Courses</Link>
            <Link href="/docs" className="-mx-3 block rounded-lg px-3 py-2 text-base font-light leading-7 text-gray-200 active:bg-gray-50 active:text-gray-800">Docs</Link>
            <Link href="/about" className="-mx-3 block rounded-lg px-3 py-2 text-base font-light leading-7 text-gray-200 active:bg-gray-50 active:text-gray-800">About</Link>
            <Link href="/templates" className="-mx-3 block rounded-lg px-3 py-2 text-base font-light leading-7 text-gray-200 active:bg-gray-50 active:text-gray-800">Templates</Link>
          </div>
          <div className="py-6">
            <Link href="/login" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-medium leading-7 text-gray-200 hover:bg-gray-800">Log in</Link>
          </div>
        </div>
      </div>
    </div>
  )}
</header>

  );
}

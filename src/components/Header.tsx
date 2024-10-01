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
    <header className="absolute inset-x-0 top-0 z-50 ">
      <nav className="flex items-center justify-between p-4  lg:px-8" aria-label="Global">
        <div className="flex w-fit  lg:w-1/6 ">
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
        <div className="hidden lg:flex lg:justify-between justify-self-center lg:w-2/3">
          <Link href="/courses" className="text-lg font-normal hover:underline leading-6 text-white">Courses</Link>
          <Link href="/docs" className="text-lg font-normal hover:underline leading-6 text-white">Docs</Link>
          <Link href="/about" className="text-lg font-normal hover:underline leading-6 text-white">About</Link>
          <Link href="/templates" className="text-lg font-normal hover:underline leading-6 text-white">templates</Link>
        </div>
        <div className="hidden lg:flex  lg:justify-end max-w-52">
          <Link href="/login" id="loginBtn" className="relative inline-block px-6 py-3 text-lg font-normal text-white bg-transparent border-2 border-white rounded-lg cursor-pointer outline-none z-50 overflow-hidden group">Log in <span aria-hidden="true" className="text-2xl">&rarr;</span></Link>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div
          className="lg:hidden absolute right-0 z-50 w-full p-3 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 bg-[#00000064] backdrop-blur"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Menu"
          ref={menuRef}
          style={{ insetBlockStart: '0', top: '0' }}>
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image
                className=" "
                src='/assets/images/Logo.png'
                alt="Logo"
                width={100}
                height={50}
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={handleToggleMenu}
            >
              <span className="sr-only">Close menu</span>
              <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link href="/product" className="-mx-3 block rounded-lg px-3 py-2 text-base font-light leading-7 text-gray-200 active:bg-gray-50 active:text-gray-800">Courses</Link>
                <Link href="/features" className="-mx-3 block rounded-lg px-3 py-2 text-base font-light leading-7 text-gray-200 active:bg-gray-50 active:text-gray-800">Features</Link>
                <Link href="/marketplace" className="-mx-3 block rounded-lg px-3 py-2 text-base font-light leading-7 text-gray-200 active:bg-gray-50 active:text-gray-800">Marketplace</Link>
                <Link href="/company" className="-mx-3 block rounded-lg px-3 py-2 text-base font-light leading-7 text-gray-200 active:bg-gray-50 active:text-gray-800">Company</Link>
              </div>
              <div className="py-6">
                <Link href="/login" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-medium leading-7 text-gray-200 hover:bg-gray-50">Log in</Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

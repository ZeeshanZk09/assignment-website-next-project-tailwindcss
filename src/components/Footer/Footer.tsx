// components/Footer.tsx

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';


const Footer: React.FC = () => {
  return (
    <footer className=" relative w-full bottom-0 h-full bg-gradient-to-b from-[#4f6469] to-[#19211e]  text-black p-2 ">
      <div className="flex gap-20 flex-col  pt-10 h-full w-full   px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex flex-col wrap justify-between">
          {/* Logo & Description */}
          <div className="mb-6 md:mb-10">
            {/* Logo */}
            <div className="flex items-start flex-col">
              <Image
                src="/assets/images/Logo.png"
                alt="Logo"
                width={200}
                height={100}
              />
            </div>
            <p className="mt-4 text-white  tracking-widest">
              Designing Digital Experiences, Building Brand Success.
            </p>
            {/* Social Icons */}
            <div className="mt-4 flex gap-5 saturate-50">
              <Link href="https://www.facebook.com/profile.php?id=61555755279409" className="text-gray-400 hover:text-white">
                <Image src="/assets/images/fb.png" alt="alt" width={20} height={20} />
              </Link>
              <Link href="https://github.com/ZeeshanZk09" className="text-gray-400 hover:text-white">
                <Image src="/assets/images/github.png" alt="alt" width={20} height={20} />
              </Link>
              <Link href="https://x.com/DrZeesh53832561" className="text-gray-400 hover:text-white">
                <Image src="/assets/images/twitter.png" alt="alt" width={20} height={20} />
              </Link>
              <Link href="https://wa.me/923343489702" className="text-gray-400 hover:text-white">
                <Image src="/assets/images/whatsapp.png" alt="alt" width={20} height={20} />
              </Link>
            </div>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {/* Solutions */}
            <div>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Solutions</h3>
              <ul className="mt-4 space-y-4">
                <li><Link href="/" className="text-gray-400 hover:text-white">Marketing</Link></li>
                <li><Link href="/" className="text-gray-400 hover:text-white">Analytics</Link></li>
                <li><Link href="/" className="text-gray-400 hover:text-white">Commerce</Link></li>
                <li><Link href="/" className="text-gray-400 hover:text-white">Insights</Link></li>
              </ul>
            </div>
            {/* Support */}
            <div>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Support</h3>
              <ul className="mt-4 space-y-4">
                <li><Link href="/" className="text-gray-400 hover:text-white">Pricing</Link></li>
                <li><Link href="/" className="text-gray-400 hover:text-white">Documentation</Link></li>
                <li><Link href="/" className="text-gray-400 hover:text-white">Guides</Link></li>
                <li><Link href="/" className="text-gray-400 hover:text-white">API Status</Link></li>
              </ul>
            </div>
            {/* Company */}
            <div>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Company</h3>
              <ul className="mt-4 space-y-4">
                <li><Link href="/" className="text-gray-400 hover:text-white">About</Link></li>
                <li><Link href="/" className="text-gray-400 hover:text-white">Blog</Link></li>
                <li><Link href="/" className="text-gray-400 hover:text-white">Jobs</Link></li>
                <li><Link href="/" className="text-gray-400 hover:text-white">Press</Link></li>
              </ul>
            </div>
            {/* Legal */}
            <div>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Legal</h3>
              <ul className="mt-4 space-y-4">
                <li><Link href="/" className="text-gray-400 hover:text-white">Claim</Link></li>
                <li><Link href="/" className="text-gray-400 hover:text-white">Privacy</Link></li>
                <li><Link href="/" className="text-gray-400 hover:text-white">Terms</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8   pt-6 flex flex-col ">
          <hr />
          <p className="text-sm text-center  text-gray-400 pt-5">© 2024 Apna Campus, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

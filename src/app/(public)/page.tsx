// import Image from "next/image";

import * as React from 'react';

import Banner from '@/components/Banner/Banner'
import CEOSection from "@/components/CEOSection/CEOSection";
import Hero from "@/components/Hero/Hero";
import Mentor from "@/components/Mentor/Mentor";

export default function Home() {

  return (
    <>

      
      <Hero />
      <Banner />
      <Mentor />
      <CEOSection />
    </>
  );
}

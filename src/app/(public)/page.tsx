// import Image from "next/image";

import * as React from 'react';

import Banner from '@/components/Banner/Banner'
import CEOSection from "@/components/CEOSection"; 
import Hero from "@/components/Hero";

export default function Home() {

  return (
    <>
      
      <Hero />

      <Banner />
      <CEOSection />
    </>
  );
}

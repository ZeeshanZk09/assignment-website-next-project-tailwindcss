"use client";
import Dropdownone from './Dropdownone';
import Dropdowntwo from './Dropdowntwo';
import React from 'react';
import Slider from "react-slick";
import Image from 'next/image';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Banner.css'
// Image Data Type
interface Data {
  imgSrc: string;
}

// Carousel Images Data
const data: Data[] = [
  {
    imgSrc: "/assets/images/slickCompany/airbnb.svg"
  },
  {
    imgSrc: "/assets/images/slickCompany/hubspot.svg"
  },
  {
    imgSrc: "/assets/images/slickCompany/microsoft.svg"
  },
  {
    imgSrc: "/assets/images/slickCompany/google.svg"
  },
  {
    imgSrc: "/assets/images/slickCompany/walmart.svg"
  },
  {
    imgSrc: "/assets/images/slickCompany/fedex.svg"
  }
];

// Functional Component for Carousel (MultipleItems)
const MultipleItems: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      }
    ]
  };

  return (
    <div className='text-center bg-lightpink'>
      <div className="mx-auto max-w-2xl py-16 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-lg my-10 text-black">Trusted by companies of all sizes</h2>
        <Slider {...settings}>
          {data.map((item, i) => (
            <div key={i}>
              <Image src={item.imgSrc} alt={item.imgSrc} width={100} height={100} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

// Main Banner Component
const Banner: React.FC = () => {
  return (
    <main className='banner-image bg-[#93B1A6] sm:bg-[#93B1A6]  py-10 px-5 '>
      <div className="mx-auto max-w-5xl sm:pb-24">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-75px">
            Advance your engineering <br /> skills with our courses
          </h1>
          <p className="mt-6 text-lg leading-8 text-black">
            Build skills with our courses and mentor from world-class companies.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <div className="hidden sm:block -space-x-2">
              <Image
                className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                src="/assets/images/photo-1550525811-e5869dd03032.avif"
                alt=""
                width={48}
                height={48}
              />
              <Image
                className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                src="/assets/images/photo-1472099645785-5658abf4ff4e.avif"
                alt=""
                width={48}
                height={48}
              />
              <Image
                className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                src="/assets/images/photo-1491528323818-fdd1faba62cc.avif"
                alt=""
                width={48}
                height={48}
              />
              <Image
                className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                src="/assets/images/photo-1500648767791-00dcc994a43e.avif"
                alt=""
                width={48}
                height={48}
              />
            </div>
            <div className='bannerBorder sm:pl-8'>
              <div className='flex justify-center sm:justify-start'>
                <h3 className='text-2xl text-black font-semibold mr-2'>4.6</h3>
                <Image src="/assets/images/Stars.svg" width={50} height={50} alt="stars-icon" />
              </div>
              <div>
                <h3 className='text-sm text-black'>Rated by 25k on Google.</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Dropdown Buttons */}
        <div className="mx-auto max-w-4xl mt-24 pt-6 pb-8 px-6 lg:max-w-4xl lg:px-8 bg-[#5C8374] rounded-lg boxshadow">
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-8 xl:gap-x-8">
            <div className="col-span-3">
              <Dropdownone />
            </div>
            <div className="col-span-3">
              <Dropdowntwo />
            </div>
            <div className="col-span-3 sm:col-span-2 mt-2">
              <button className="bg-black text-white tracking-widest font-sans text-2xl font-semibold py-3 px-6 rounded">
                Start
              </button>
            </div>
          </div>
        </div>
      </div>
      <MultipleItems />
    </main>
  );
}

export default Banner;

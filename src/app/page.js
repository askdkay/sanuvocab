"use client";
import React from "react";
import Image from "next/image";
import bgn from "@/../public/img/bg.png"; // Adjust the path as necessary
import SpellingGame from "@/app/demo";
// import Mainpage from "@/app/mainpage";
// import Searchx from "@/Components/Searchx";
import Navx from "@/Components/Navx";
// import Carouselx from "@/Components/Carouselx";

export default function Home() {
  return (
    <div className="max-w-screen overflow-x-hidden background-image bg-[url('/img/bg.png')] bg-cover bg-center bg-no-repeat">
      <div className='grid min-h-dvh grid-cols-1 grid-rows-[1fr_1px_auto_1px_auto] justify-center  [--gutter-width:2.5rem] md:-mx-4 md:grid-cols-[var(--gutter-width)_minmax(0,var(--breakpoint-2xl))_var(--gutter-width)] lg:mx-0'>
        <div className='col-start-1 row-span-full row-start-1 hidden border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-black)]/5 md:block dark:[--pattern-fg:var(--color-white)]/10'></div>
        <div className='grid gap-24 p-0 text-gray-950 sm:gap-40  dark:text-white'>
          <div>
            <div className='relative before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-gray-950/5 dark:before:bg-white/10 before:-left-[100vw] after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-gray-950/5 dark:after:bg-white/10 after:-left-[100vw]'></div>
            <div className='relative before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-gray-950/5 dark:before:bg-white/10 before:-left-[100vw] after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-gray-950/5 dark:after:bg-white/10 after:-left-[100vw]'></div>
            <Navx />
            <div className='mt-10 px-4 sm:hidden relative before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-gray-950/5 dark:before:bg-white/10 before:-left-[100vw] after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-gray-950/5 dark:after:bg-white/10 after:-left-[100vw]'>
              <a className='z-1 w-full text-center inline-block rounded-4xl bg-black px-4 py-2 text-sm/6 font-semibold text-white hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600' href='docs/installation'></a>
            </div>
            <div className='mt- sm:px-2 relative before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-gray-950/5 dark:before:bg-white/10 before:-left-[100vw] after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-gray-950/5 dark:after:bg-white/10 after:-left-[100vw]'>
           </div>
            {/* <Carouselx/> */}
            {/* <Searchx /> */}
            <div className='mt-4 relative before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-gray-950/5 dark:before:bg-white/10 before:-left-[100vw] after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-gray-950/5 dark:after:bg-white/10 after:-left-[100vw]'>
              <div className=''>
                <div className='relative border-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-black)]/5 max-lg:h-66 max-lg:border-t lg:border-l dark:[--pattern-fg:var(--color-white)]/10'>
                  <SpellingGame />
                  {/* <Mainpage /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='row-span-full row-start-1 hidden border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-black)]/5 md:col-start-3 md:block dark:[--pattern-fg:var(--color-white)]/10'></div>
      </div>
    </div>
  );
}

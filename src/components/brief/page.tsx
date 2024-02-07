'use client'

import AnimatedText from '@/components/animation/page';
import InfoIcon from '@mui/icons-material/Info';
import { useState } from 'react';

const Brief = () => {
  
  return (
    <main id="brief" className="min-h-screen w-full h-fit-content flex flex-col items-center justify-center m-0 py-20 bg-white">
      <div className="flex flex-wrap justify-center w-100% md:w-[70%] mt-24 gap-8 p-2 sm:p-0">
        {/* PRIMEIRA DIV  */}
        <div className='w-[100%] text-gray-700 text-center text-3xl font-bold'>
          Veja alguns <span className='text-primary-light'>depoimentos</span> de nossos <br/> parceiros
        </div>
        
        <div className="border-[1px] hover:scale-105 ease-in-out  border-gray-200 hover:shadow-card transition-all duration-500 cursor-pointer w-[100%] xl:w-[28%] rounded-lg h-fit p-8">
          <div className="text-gray-900 font-medium mt-6 w-[100%]">
            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
            Vestibulum vitae diam neque.
            Phasellus ac augue porttitor
            diam bibendum fringilla.
          </div>
          <div className='flex flex-row items-center mt-4 gap-2'>
            <div>
              <div className='bg-slate-800 rounded-full w-16 h-16'></div>
            </div>
            <div className='flex flex-col text-gray-700'>
              <AnimatedText
                once
                text="Empresa 1"
                el="h1"
                className=" font-bold"
              />
              <AnimatedText
                once
                text="Gestão de frotas"
                el="h1"
                className="font-normal"
              />
            </div>
          </div>
        </div>

        <div className="border-[1px] hover:scale-105 ease-in-out border-gray-200 hover:shadow-card transition-all duration-500 cursor-pointer w-[100%] xl:w-[28%] rounded-lg h-fit p-8">
          <div className="text-gray-900 font-medium mt-6 w-[100%]">
            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
            Vestibulum vitae diam neque.
            Phasellus ac augue porttitor
            diam bibendum fringilla.
            consectetur adipiscing elit.
            Vestibulum vitae diam neque.
            consectetur adipiscing elit.
            Vestibulum vitae diam neque.
          </div>
          <div className='flex flex-row items-center mt-4 gap-2'>
            <div>
              <div className='bg-slate-800 rounded-full w-16 h-16'></div>
            </div>
            <div className='flex flex-col text-gray-700'>
              <AnimatedText
                once
                text="Empresa 1"
                el="h1"
                className=" font-bold"
              />
              <AnimatedText
                once
                text="Gestão de frotas"
                el="h1"
                className="font-normal"
              />
            </div>
          </div>
        </div>
        
        <div className="border-[1px] hover:scale-105 ease-in-out border-gray-200 hover:shadow-card transition-all duration-500 cursor-pointer w-[100%] xl:w-[28%] rounded-lg h-fit p-8">
          <div className="text-gray-900 font-medium mt-6 w-[100%]">
            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
            Vestibulum vitae diam neque.
            Phasellus ac augue porttitor
            diam bibendum fringilla.
            diam bibendum fringilla.
            consectetur adipiscing elit.
            Vestibulum vitae diam neque.
            consectetur adipiscing elit.
            Vestibulum vitae diam neque.
            consectetur adipiscing elit.
            Vestibulum vitae diam neque.
          </div>
          <div className='flex flex-row items-center mt-4 gap-2'>
            <div>
              <div className='bg-slate-800 rounded-full w-16 h-16'></div>
            </div>
            <div className='flex flex-col text-gray-700'>
              <AnimatedText
                once
                text="Empresa 1"
                el="h1"
                className=" font-bold"
              />
              <AnimatedText
                once
                text="Gestão de frotas"
                el="h1"
                className="font-normal"
              />
            </div>
          </div>
        </div>

        <div className="border-[1px] hover:scale-105 ease-in-out xl:mt-[-100px] border-gray-200 hover:shadow-card transition-all duration-500 cursor-pointer w-[100%] xl:w-[28%] rounded-lg h-fit p-8">
          <div className="text-gray-900 font-medium mt-6 w-[100%]">
            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
            Vestibulum vitae diam neque.
            Phasellus ac augue porttitor
            diam bibendum fringilla.
            Phasellus ac augue porttitor
            diam bibendum fringilla.
          </div>
          <div className='flex flex-row items-center mt-4 gap-2'>
            <div>
              <div className='bg-slate-800 rounded-full w-16 h-16'></div>
            </div>
            <div className='flex flex-col text-gray-700'>
              <AnimatedText
                once
                text="Empresa 1"
                el="h1"
                className=" font-bold"
              />
              <AnimatedText
                once
                text="Gestão de frotas"
                el="h1"
                className="font-normal"
              />
            </div>
          </div>
        </div>

        <div className="border-[1px] hover:scale-105 ease-in-out xl:mt-[-60px] border-gray-200 hover:shadow-card transition-all duration-500 cursor-pointer w-[100%] xl:w-[28%] rounded-lg h-fit p-8">
          <div className="text-gray-900 font-medium mt-6 w-[100%]">
            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
            Vestibulum vitae diam neque.
            Phasellus ac augue porttitor
            diam bibendum fringilla.
            Phasellus ac augue porttitor
            diam bibendum fringilla.
            Phasellus ac augue porttitor
            diam bibendum fringilla.
          </div>
          <div className='flex flex-row items-center mt-4 gap-2'>
            <div>
              <div className='bg-slate-800 rounded-full w-16 h-16'></div>
            </div>
            <div className='flex flex-col text-gray-700'>
              <AnimatedText
                once
                text="Empresa 1"
                el="h1"
                className=" font-bold"
              />
              <AnimatedText
                once
                text="Gestão de frotas"
                el="h1"
                className="font-normal"
              />
            </div>
          </div>
        </div>

        <div className="border-[1px] hover:scale-105 ease-in-out border-gray-200 hover:shadow-card transition-all duration-500 cursor-pointer w-[100%] xl:w-[28%] rounded-lg h-fit p-8">
          <div className="text-gray-900 font-medium mt-6 w-[100%]">
            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
            Vestibulum vitae diam neque.
            Phasellus ac augue porttitor
            diam bibendum fringilla.
          </div>
          <div className='flex flex-row items-center mt-4 gap-2'>
            <div>
              <div className='bg-slate-800 rounded-full w-16 h-16'></div>
            </div>
            <div className='flex flex-col text-gray-700'>
              <AnimatedText
                once
                text="Empresa 1"
                el="h1"
                className=" font-bold"
              />
              <AnimatedText
                once
                text="Gestão de frotas"
                el="h1"
                className="font-normal"
              />
            </div>
          </div>
        </div>
        
      </div>
    </main>
  )
};

export default Brief;

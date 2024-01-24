'use client'

import { NumberTransition } from '@/components/countUp';

export const Manfrota = () => (
  <div className='bg-[#150c21] h-fit gap-4 p-2 flex flex-col items-center justify-center w-[100%] text-white text-left text-3xl font-bold bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]'>
    <div className='w-[50%] flex flex-col'>
      <div className='w-[100%] h-[700px] flex flex-col items-center justify-center'>
        <span className='text-center'>O Manfrota</span>
        <div>
          <div className='text-center text-lg text-white my-4 font-bold'>
            Mais de
          </div>
          <div className='flex justify-center flex-row gap-6 text-white'>
            <div className='flex flex-col items-center text-7xl'>
              <NumberTransition enableScrollSpy end={7} duration={3} />
              <span className='text-lg'>Módulos</span>
            </div>
            <div className='bg-[#2d2538] w-[1px]' />
            <div className='flex flex-col items-center'>
              <div className='text-7xl'>
                <NumberTransition enableScrollSpy end={40} duration={3} />
              </div>
              <span className='text-lg'>Telas</span>
            </div>
            <div className='bg-[#2d2538] w-[1px]' />
            <div className='flex flex-col items-center text-7xl'>
              <NumberTransition enableScrollSpy end={20} duration={3} />
              <span className='text-lg'>Relatórios</span>
            </div>
          </div>
        </div>
        <div className='w-screen flex flex-row justify-center items-center gap-4 my-8'>
          <div className='w-[300px] h-[150px] bg-[#3e1379]'></div>
          <div className='w-[300px] h-[150px] bg-[#3e1379]'></div>
          <div className='w-[300px] h-[150px] bg-[#3e1379]'></div>
          <div className='w-[300px] h-[150px] bg-[#3e1379]'></div>
          <div className='w-[300px] h-[150px] bg-[#3e1379]'></div>
          <div className='w-[300px] h-[150px] bg-[#3e1379]'></div>
          <div className='w-[300px] h-[150px] bg-[#3e1379]'></div>
          <div className='w-[300px] h-[150px] bg-[#3e1379]'></div>
          <div className='w-[300px] h-[150px] bg-[#3e1379]'></div>
        </div>
        <span className='text-lg w-[100%] font-normal text-center'>
          Cada <span className='font-bold'>módulo</span> do nosso sistema é projetado com uma gestão específica, 
          otimizada para atender às necessidades distintas de cada área da sua operação.
        </span>
      </div>
    </div>
  </div>
);

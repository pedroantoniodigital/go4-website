'use client'

import TireIcon from '@/components/icons/tireIcon';
import Image from 'next/image';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { NumberTransition } from '@/components/countUp';
import AnimatedText from '@/components/animation/page';

const LandingPage = () => {
  return (
    <main className="flex flex-col md:flex-row min-h-screen items-center py-0 m-0 bg-white">
      {/* Primeira Div */}
      <div className='flex flex-col w-full md:w-[100%] bg-white p-4 text-center items-center justify-center'>
        <AnimatedText
          once
          text="Gestão de Frotas"
          el="h1"
          className="text-black text-4xl md:text-7xl font-bold mb-7"
        />
        <div className='text-black mb-7 text-xl'>
          <span className='font-bold'>Tudo o que você precisa</span>, em um só lugar
        </div>
        <div className='text-black mb-7 text-xl'>
          <span className='font-bold'> Mais de <NumberTransition enableScrollSpy end={7} duration={3} /> módulos </span>para a gestão completa de sua operação.
        </div>
        <hr className="h-[3px] w-64 border-t-0 bg-[#eae7fd]  mb-7" />
        <button className='flex flex-row w-full md:w-96 h-[70px] rounded-[100px] bg-white drop-shadow-theme'>
          <span className='flex items-center justify-center w-full font-bold text-[#150c21] h-full'>Solicite uma demonstração</span>
        </button>
      </div>

      {/* Segunda Div */}
      {/* <div className='relative h-[700px] mr-0 md:mr-[32px] mt-0 w-full md:w-3/5 overflow-hidden rounded-md custom-shape'>
        <img className="h-auto max-w-full" src="/static/images/imagem-gerada-por-ia-de-um-tractor-num-campo.jpg" alt="image description"/>
      </div> */}
    </main>
  );
};

export default LandingPage;

'use client'

import TireIcon from '@/components/icons/tireIcon';
import Image from 'next/image';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { NumberTransition } from '@/components/countUp';
import AnimatedText from '@/components/animation/page';

const LandingPage = () => {
  return (
    <main id="landingPage" className="flex flex-col md:flex-row min-w-full min-h-screen justify-center items-center py-0 m-0 bg-black">
      <video className='absolute inset-0 object-cover w-full h-full opacity-50' loop autoPlay muted controls={false}>
        <source src="/static/videos/trator.mp4" type="video/mp4" />
      </video>
      <div className='flex z-40 flex-col w-full bg-transparent p-4 text-center items-center justify-center'>
        <AnimatedText
          once
          text="Gestão de Frotas"
          el="h1"
          className="text-white text-4xl md:text-7xl font-bold mb-7"
        />
        <div className='text-white mb-7 text-xl'>
          <span className='font-bold'>Tudo o que você precisa</span>, em um só lugar
        </div>
        <div className='text-white mb-7 text-xl'>
          <span className='font-bold'> Mais de <NumberTransition enableScrollSpy end={7} duration={3} /> módulos </span>para a gestão completa de sua operação.
        </div>
        <hr className="h-[3px] w-64 border-t-0 bg-primary-light/10  mb-7" />
        <button className='flex flex-row w-full md:w-96 h-[70px] rounded-[100px] bg-white drop-shadow-theme'>
          <span className='flex items-center justify-center w-full font-bold text-primary-dark h-full'>Solicite uma demonstração</span>
        </button>
      </div>
    </main>
  );
};

export default LandingPage;

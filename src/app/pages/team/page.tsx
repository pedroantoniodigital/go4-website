'use client'

import AnimatedText from '@/components/animation/page';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import EuroIcon from '@mui/icons-material/Euro';
import ComputerIcon from '@mui/icons-material/Computer';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import AnalyticsIcon from '@mui/icons-material/Analytics';

const OurTeam = () => {
  return (
    <main className="-z-10 p-20 flex flex-row justify-center min-h-screen items-center w-full bg-white ">
      <div className="flex flex-row justify-between w-[70%] p-4">
        <div className='flex flex-col w-[50%] pt-8 gap-8 md:pr-24'>
          <AnimatedText
            once
            text="Nosso time"
            el="h1"
            className="text-3xl font-bold text-black"
          />
          <p>Contamos com um time multidisciplinar de <b>especialistas</b> com vasta 
          experiência no segmento da Manutenção,oferecendo serviços de <b>assessoria,</b> 
          <b> consultoria,</b> <b> treinamento,</b> 
          <b> desenvolvimento</b> e <b>implantação</b> de sistemas 
          de gerenciamento para empresas como <b>Agroindústrias</b> e <b>Frotistas em geral.</b></p>
          <p>Além disto, contamos com um time de desenvolvedores voltado exclusivamente para a <b>criação</b> e <b>elaboração</b> de nossos 
            sistemas, tais como o <span className='font-bold text-primary-light text-xl hover:underline cursor-pointer'>Manfrota</span>.
          </p>
        </div>
        <div className='flex flex-wrap md:flex-wrap w-[50%] gap-4'>
          <div className='w-[100%] md:w-[48%] hover:md:w-[49%] transition-all duration-400 cursor-pointer bg-white shadow-xl flex flex-col items-center text-center p-8 rounded-lg'> 
            <EuroIcon sx={{ color: "#0065af" }} />
            <AnimatedText
              once
              text="Financeiro"
              el="h1"
              className="font-bold"
            />
            <div>
              Lorem ipsum dolor sit amet, 
              consectetur adipiscing elit. 
              Vestibulum vitae diam neque. 
              Phasellus ac augue porttitor 
              diam bibendum fringilla.
              consectetur adipiscing elit. 
              Vestibulum vitae diam neque. 
              Phasellus ac augue porttitor 
              diam bibendum fringilla.
            </div>
          </div>
          <div className='w-[100%] md:w-[48%] hover:md:w-[49%] transition-all duration-400 cursor-pointer bg-primary-light drop-shadow-theme flex flex-col items-center text-center p-8 rounded-lg'> 
            <ComputerIcon sx={{ color: "white" }} />
            <AnimatedText
              once
              text="Desenvolvedores"
              el="h1"
              className="font-bold text-white"
            />
            <div className='text-gray-200'>
              Lorem ipsum dolor sit amet, 
              consectetur adipiscing elit. 
              Vestibulum vitae diam neque. 
              Phasellus ac augue porttitor 
              diam bibendum fringilla.
              consectetur adipiscing elit. 
              Vestibulum vitae diam neque. 
              Phasellus ac augue porttitor 
              diam bibendum fringilla.
            </div>
          </div>
          <div className='w-[100%] md:w-[48%] hover:md:w-[49%] transition-all duration-400 cursor-pointer bg-primary-light drop-shadow-theme flex flex-col items-center text-center p-8 rounded-lg'> 
            <AddIcCallIcon sx={{ color: "white" }} />
            <AnimatedText
              once
              text="Técnicos"
              el="h1"
              className="font-bold text-white"
            />
            <div className='text-gray-200'>
              Lorem ipsum dolor sit amet, 
              consectetur adipiscing elit. 
              Vestibulum vitae diam neque. 
              Phasellus ac augue porttitor 
              diam bibendum fringilla.
              consectetur adipiscing elit. 
              Vestibulum vitae diam neque. 
              Phasellus ac augue porttitor 
              diam bibendum fringilla.
            </div>
          </div>
          <div className='w-[100%] md:w-[48%] hover:md:w-[49%] transition-all duration-400 cursor-pointer bg-white shadow-xl  flex flex-col items-center text-center p-8 rounded-lg'> 
            <AnalyticsIcon sx={{ color: "#0065af" }} />
            <AnimatedText
              once
              text="Gestores"
              el="h1"
              className="font-bold"
            />
            <div>
              Lorem ipsum dolor sit amet, 
              consectetur adipiscing elit. 
              Vestibulum vitae diam neque. 
              Phasellus ac augue porttitor 
              diam bibendum fringilla.
              consectetur adipiscing elit. 
              Vestibulum vitae diam neque. 
              Phasellus ac augue porttitor 
              diam bibendum fringilla.
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default OurTeam;

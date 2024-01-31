'use client'

import AnimatedText from '@/components/animation/page';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import EuroIcon from '@mui/icons-material/Euro';
import ComputerIcon from '@mui/icons-material/Computer';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import AnalyticsIcon from '@mui/icons-material/Analytics';

const OurTeam = () => {
  return (
    <main id="team" className="-z-10 flex flex-row justify-center min-h-screen items-center w-full bg-white ">
      <div className="flex flex-col text-center lg:flex-row justify-between w-[80%] p-4 gap-20 mt-24">
        <div className='flex flex-col text-center w-full lg:w-[50%] pt-24 gap-8 xl:pr-24 xs:justify-center'>
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
          de gerenciamento para empresas como <b>Construtoras,</b> <b>Mineradoras,</b> <b>Transportadoras,</b> <b>Agroindústrias</b> e <b>Frotistas em geral.</b></p>
          <p>Além disto, contamos com um time de desenvolvedores voltado exclusivamente para a <b>criação</b> e <b>elaboração</b> de nossos 
            sistemas, tais como o <span className='font-bold text-primary-light text-xl hover:underline cursor-pointer'>Manfrota</span>.
          </p>
        </div>
        <div className='flex flex-wrap md:flex-wrap w-full xl:w-[50%] gap-4'>
          <div className='w-[100%] xl:w-[48%] hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer bg-white shadow-xl flex flex-col items-center text-center p-8 rounded-lg'> 
            <EuroIcon sx={{ color: "#0065af" }} />
            <AnimatedText
              once
              text="Financeiro"
              el="h1"
              className="font-bold"
            />
            <div>
              Nossa equipe financeira gerencia com precisão todos
              os aspectos financeiros da empresa, garantindo
              transparência e eficiência em nossas operações.
            </div>
          </div>
          <div className='w-[100%] xl:w-[48%] hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer bg-primary-light drop-shadow-theme flex flex-col items-center text-center p-8 rounded-lg'> 
            <ComputerIcon sx={{ color: "white" }} />
            <AnimatedText
              once
              text="Desenvolvedores"
              el="h1"
              className="font-bold text-white"
            />
            <div className='text-gray-200'>
              Contamos com uma equipe talentosa de desenvolvedores de software
              que estão constantemente inovando e aprimorando nossas soluções
              de gestão, garantindo que estejamos na vanguarda da tecnologia.
            </div>
          </div>
          <div className='w-[100%] xl:w-[48%] hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer bg-primary-light drop-shadow-theme flex flex-col items-center text-center p-8 rounded-lg'> 
            <AddIcCallIcon sx={{ color: "white" }} />
            <AnimatedText
              once
              text="Técnicos em Gestão de Frota"
              el="h1"
              className="font-bold text-white"
            />
            <div className='text-gray-200'>
              Nossos técnicos especializados na área de gestão de frota são
              especialistas em garantir que nossos clientes obtenham o máximo
              desempenho de suas frotas, oferecendo suporte técnico e consultoria
              especializada. 
            </div>
          </div>
          <div className='w-[100%] xl:w-[48%] hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer bg-white shadow-xl  flex flex-col items-center text-center p-8 rounded-lg'> 
            <AnalyticsIcon sx={{ color: "#0065af" }} />
            <AnimatedText
              once
              text="Gestores"
              el="h1"
              className="font-bold"
            />
            <div>
              Nossos gestores são líderes experientes que supervisionam todas as operações,
              garantindo que nossa empresa opere de forma eficiente e que nossos clientes
              recebam o mais alto nível de serviço e suporte.
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default OurTeam;

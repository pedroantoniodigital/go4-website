'use client'


import AnimatedText from '@/components/animation/page';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import Image from 'next/image';

const Areas = () => {
  return (
    <main id="areas" className="-z-10 flex flex-col min-h-screen items-center w-full bg-primary-dark">
      <div className="w-[80%] mt-24">
        <div className='flex mt-8 font-bold items-center justify-between flex-col sm:flex-row text-center w-full text-black'>
          <AnimatedText
            once
            text="Áreas de atuação"
            el="h1"
            className="text-3xl text-white w-80"
          />
          <div className='text-base text-[#9e9ca0] w-80'>
            Nossa empresa atua em todas as áreas oferecendo soluções de gestão eficientes
            e personalizadas para atender às necessidades específicas de cada ambiente.
          </div>
        </div>
        <div className='flex flex-col min-h-[500px] xl:flex-row gap-8 mt-24'>
          <div className='bg-primary-dark hover:drop-shadow-theme transition-all duration-1000 gap-3 drop-shadow-theme flex rounded-lg flex-col items-center justify-center text-center py-8 px-8 text-white'>
            <div className="flex-shrink-0">
              <Image 
                src="/static/images/areas/rural.jpg" 
                alt="" 
                width={500}
                height={100}
                className="rounded-lg filter grayscale hover:filter-none hover:cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out"
                style={{
                  maxWidth: "250px",
                  height: '190px'
                }}   
              />
            </div>
            <div className='mt-8'>
              <AnimatedText
                once
                text="Rural"
                el="h1"
                className="font-bold"
              />
              <div>
                Nossa empresa oferece soluções de gestão específicas para ambientes rurais, 
                incluindo software para administração de frotas, controle de combustível e 
                manutenção de pneus, ajudando a maximizar a eficiência das operações agrícolas.
              </div>
            </div>
          </div>
          <div className='bg-primary-light/90 gap-3 hover:drop-shadow-theme transition-all duration-1000 flex rounded-lg flex-col items-center justify-center text-center py-8 px-8 text-white'>
            <div className="flex-shrink-0">
              <Image 
                src="/static/images/areas/urbano.jpg" 
                alt="" 
                width={500}
                height={100}
                className="rounded-lg filter grayscale hover:filter-none hover:cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out"
                style={{
                  maxWidth: "250px",
                  height: '190px'
                }}   
              />
            </div>
            <div className='mt-8'>
              <AnimatedText
                once
                text="Urbano"
                el="h1"
                className="font-bold"
              />
              <div>
                Atendemos às demandas complexas das áreas urbanas com soluções de gestão de frota, 
                combustível e pneus, simplificando as operações de empresas de transporte, 
                serviços públicos e corporações urbanas.
              </div>
            </div>
          </div>
          <div className='bg-primary-dark drop-shadow-theme gap-3 flex rounded-lg flex-col items-center justify-center text-center py-8 px-8 text-white'>
            <div className="flex-shrink-0">
              <Image 
                src="/static/images/areas/florestal.jpg" 
                alt="" 
                width={500}
                height={100}
                className="rounded-lg filter grayscale hover:filter-none hover:cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out"
                style={{
                  maxWidth: "270px",
                  height: '190px'
                }}   
              />
            </div>
            <div className='mt-8'>
              <AnimatedText
                once
                text="Florestal"
                el="h1"
                className="font-bold "
              />
              <div>
                Nossas soluções de gestão são adaptadas para ambientes florestais, fornecendo
                 ferramentas para otimizar frotas, monitorar combustível e garantir a manutenção
                  de pneus, contribuindo para a eficiência e sustentabilidade na gestão de recursos naturais.
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Areas;

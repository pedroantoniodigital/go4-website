'use client'

import MapIcon from '@mui/icons-material/Map';

import { AnimatedText } from '@/components/animation/page';

const TrackerInfo = () => {

  return (
    <>
      <main className="min-h-screen flex flex-col items-center m-0 bg-primary-screens py-4">
        <div className='grid lg:grid-cols-2 max-w-screen-xl mx-auto gap-10 my-20 px-5'>
          <div>
            <div className=' h-[70%]'>
              <img className='h-full filter grayscale hover:filter-none hover:cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out' src="/static/images/system/tracker/map.png" />
            </div>
            <div className='grid grid-cols-3 items-center justify-center max-w-screen-lg mt-6 gap-10'>
              <div>
                <img className='h-full filter grayscale hover:filter-none hover:cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out' src="/static/images/system/tracker/mapTruck.png" />
              </div>
              <div>
                <img className='h-full filter grayscale hover:filter-none hover:cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out' src="/static/images/system/tracker/mapCar.png" />
              </div>
              <div>
                <img className='h-full filter grayscale hover:filter-none hover:cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out' src="/static/images/system/tracker/cluster.png" />
              </div>
            </div>
          </div>
          <div className='bg-white p-14 gap-6 flex flex-col justify-center items-center text-center rounded-lg'>
            <div className='bg-primary-light/10 p-6 rounded-full'>
              <MapIcon sx={{ height: 32, width: 32, color: "#0065af" }} />
            </div>
            <AnimatedText
              once
              text="O que é"
              el="h1"
              className="text-3xl font-bold"
            />
            <div>
              Este recurso é uma ferramenta poderosa que utiliza as <b>coordenadas</b> de
              <b> latitude</b> e <b>longitude</b> dos <b>rastreadores</b> instalados nos equipamentos da
              sua frota. Ao visualizar este mapa, você poderá identificar facilmente
              a localização precisa de cada item da sua frota. Os <b>ícones </b>
              representam os diferentes tipos de equipamentos, permitindo uma rápida
              identificação e uma visão abrangente da distribuição geográfica dos seus
              ativos. Esta visualização detalhada oferece insights valiosos sobre a operação
              e logística da sua frota, facilitando o <b>monitoramento</b>, <b>planejamento</b> e
              tomada de <b>decisões estratégicas</b>.
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default TrackerInfo;

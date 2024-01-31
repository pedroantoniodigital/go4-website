'use client'

import MapIcon from '@mui/icons-material/Map';

import { AnimatedText } from '@/components/animation/page';
import Map from './components/map/map';

const Tracker = () => {

  return (
    <>
      <main className="min-h-screen flex flex-col items-center m-0 bg-primary-screens py-48">
        <AnimatedText
          once
          text="Tracker"
          el="h1"
          className="text-3xl font-bold"
        />
        <div className='text-center'>
          Explorando os Equipamentos por Localização: <br /> Descubra os Recursos Disponíveis em Cada Latitude e Longitude
        </div>
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
          <div className='bg-white drop-shadow-theme p-14 gap-6 flex flex-col justify-center items-center text-center rounded-lg'>
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

        <div className='flex flex-col items-center justify-center bg-white rounded-lg p-4 mx-4'>
          <AnimatedText
            once
            text="Mais Sobre"
            el="h1"
            className="text-3xl font-bold"
          />
          <div className='grid md:grid-cols-3 max-w-[1200px] mx-2 gap-24 my-20 px-5'>
            <div className='flex flex-col items-center justify-center text-center gap-2'>
              <div className='bg-primary-light/10 p-6 rounded-full'>
                <MapIcon sx={{ height: 32, width: 32, color: "#0065af" }} />
              </div>
              <AnimatedText
                once
                text="Visualização do Caminho Percorrido"
                el="h1"
                className="text-xl font-bold text-black"
              />
              <div className=''>
                Veja o histórico de trajetos do equipamento em um período determinado.
              </div>
            </div>
            <div className='flex flex-col items-center justify-center text-center gap-2'>
              <div className='bg-primary-light/10 p-6 rounded-full'>
                <MapIcon sx={{ height: 32, width: 32, color: "#0065af" }} />
              </div>
              <AnimatedText
                once
                text="Cards Interativos"
                el="h1"
                className="text-xl font-bold text-black"
              />
              <div className=''>
                No mapa de nosso sistema, possuimos cards que permite que ao clica-los voce encontre os instantaneamente no mapa.
              </div>
            </div>
            <div className='flex flex-col items-center justify-center text-center gap-2'>
              <div className='bg-primary-light/10 p-6 rounded-full'>
                <MapIcon sx={{ height: 32, width: 32, color: "#0065af" }} />
              </div>
              <AnimatedText
                once
                text="Funcionalidades Avançadas"
                el="h1"
                className="text-xl font-bold text-black"
              />
              <div className=''>
                Os cards exibem status da bateria, ligado/desligado e oferecem controles adicionais.
              </div>
            </div>
          </div>
        </div>


      </main>
    </>
  );
};

export default Tracker;

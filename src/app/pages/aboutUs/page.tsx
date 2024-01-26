'use client'

import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import FavoriteIcon from '@mui/icons-material/Favorite';

import { AnimatedText } from '@/components/animation/page';

type Props = {
  id: string;
};


const AboutUs = ({ id }: Props) => {

  return (
    <>
      <main id="aboutUs" className="min-h-screen items-center m-0 py-56 bg-primary-dark bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
        <div className='flex flex-col items-center'>
          <AnimatedText
            once
            text="Quem Somos"
            el="h1"
            className="text-3xl font-bold text-white"
          />
          <div className='flex w-[40%] justify-center text-center items-center text-lg font-medium text-[#d9d8db] mt-8'>
            <p>
              A <span className='font-bold text-white'>Go4 Digital</span> é uma empresa especializada em soluções digitais para
              <span className='font-bold text-white'> Gestão de Ativos, </span>formada por <span className='font-bold text-white'>profissionais experientes </span>
              no setor de gestão de frotas.Com metodologia inovadora e tecnologia de ponta, oferece soluções modernas para
              <span className='font-bold text-white'> Manutenção e Gerenciamento de Frotas</span>.
            </p>
          </div>


          <div className="grid md:grid-cols-3 max-w-screen-lg mx-auto gap-10 my-20 px-5">
              <div className="flex bg-primary-dark drop-shadow-theme p-8 rounded-xl gap-4 items-start flex-col ">
                  <span className="text-white bg-white/10 p-3 rounded-full">
                    <RocketLaunchIcon />
                  </span>
                  <div>
                      <h3 className="font-semibold text-xl text-white"> Missão</h3>
                      <p className="mt-1 text-gray-300"> 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae diam neque.
                      </p>
                  </div>
              </div>

              <div className="flex bg-white p-8 rounded-xl gap-4 items-start flex-col ">
                  <span className="text-primary-light bg-primary-light/10 p-3 rounded-full">
                    <RemoveRedEyeIcon />
                  </span>
                  <div>
                      <h3 className="font-semibold text-xl">Visão</h3>
                      <p className="mt-1 text-gray-600"> 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae diam neque.
                      </p>
                  </div>
              </div>


              <div className="flex bg-primary-dark drop-shadow-theme p-8 rounded-xl gap-4 items-start flex-col ">
                  <span className="text-white bg-white/10 p-3 rounded-full">
                    <FavoriteIcon />
                  </span>
                  <div>
                      <h3 className="font-semibold text-xl text-white">Valores </h3>
                      <p className="mt-1 text-gray-300"> 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae diam neque.
                      </p>
                  </div>
              </div>
          </div>

          <div className='flex w-[40%] justify-center text-center items-center text-lg font-medium text-[#d9d8db]'>
            <p>
              Com uma metodologia inovadora e tecnologia de ponta, oferece o que há de mais moderno 
              em soluções para o segmento de <b className='text-white'>Manutenção</b> e <b className='text-white'>Gerenciamento de Frotas</b>.
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default AboutUs;

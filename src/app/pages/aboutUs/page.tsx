'use client'

import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import FavoriteIcon from '@mui/icons-material/Favorite';

import { AnimatedText } from '@/components/animation/page';

const AboutUs = () => {

  return (
    <>
      <main className="min-h-screen items-center m-0 py-56 bg-[#150c21] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
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

          <div className='flex flex-col mt-10'>
            <div className='flex flex-row w-full justify-center items-center text-white gap-8'>
              <div className='bg-white rounded-full w-16 h-16 flex items-center justify-center'>
                <RocketLaunchIcon sx={{ color: "#150c21", width: 26, height: 26 }} />
              </div>
              <div className='flex flex-col'>
                <AnimatedText
                  once
                  text="Missao"
                  el="h1"
                  className="font-bold text-lg"
                />
                <div>Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. <br /> In
                  luctus velit interdum ex faucibus venenatis.
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col mt-10'>
            <div className='flex flex-row w-full justify-center items-center text-right text-white gap-8'>
              <div className='flex flex-col'>
                <AnimatedText
                  once
                  text="Visão"
                  el="h1"
                  className="text-right font-bold text-lg"
                />
                <div>Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. <br /> In
                  luctus velit interdum ex faucibus venenatis.
                </div>
              </div>
              <div className='bg-white rounded-full w-16 h-16 flex items-center justify-center'>
                <RemoveRedEyeIcon sx={{ color: "#150c21", width: 26, height: 26 }} />
              </div>
            </div>
          </div>
          <div className='flex flex-col mt-10'>
            <div className='flex flex-row w-full justify-center items-center text-white gap-8'>
              <div className='bg-white rounded-full w-16 h-16 flex items-center justify-center'>
                <FavoriteIcon sx={{ color: "#150c21", width: 26, height: 26 }} />
              </div>
              <div className='flex flex-col'>
                <AnimatedText
                  once
                  text="Valores"
                  el="h1"
                  className="font-bold text-lg"
                />
                <div>Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. <br /> In
                  luctus velit interdum ex faucibus venenatis.
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>
    </>
  );
};

export default AboutUs;

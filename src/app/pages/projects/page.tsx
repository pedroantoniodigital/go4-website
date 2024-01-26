'use client'

import InfoIcon from '@mui/icons-material/Info';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import FireTruckOutlinedIcon from '@mui/icons-material/FireTruckOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Manfrota } from './components/manfrota';

const Projects = () => (
    <main className="min-h-fit w-full m-0">
      <div className='bg-primary-dark h-fit flex justify-center text-white text-left text-3xl font-bold py-20'>
        <div className='w-[50%] flex flex-col gap-4'>
          <span>Mais sobre nossos projetos</span>
          <span className='text-lg w-[40%] font-normal'>
            Lorem ipsum dolor sit amet, consectetur 
            adipiscing elit. Vestibulum vitae diam neque. 
            Phasellus ac augue porttitor diam bibendum fringilla.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Vestibulum vitae diam neque. Phasellus ac augue porttitor 
            diam bibendum fringilla.
          </span>
          <div className='flex flex-row gap-4'>
            <div className='flex flex-col items-center text-sm col text-primary-light cursor-pointer gap-4'>
              <FireTruckOutlinedIcon sx={{ color: "#0065af", width: 48, height: 48 }} />
              Manfrota
            </div>
            <div className='flex flex-col items-center text-sm col text-[#b0bbcc] cursor-pointer gap-4'>
              <LockOutlinedIcon sx={{ color: "#b0bbcc", width: 48, height: 48 }} />
              Em breve
            </div>
            <div className='flex flex-col items-center text-sm col text-[#b0bbcc] cursor-pointer gap-4'>
              <LockOutlinedIcon sx={{ color: "#b0bbcc", width: 48, height: 48 }} />
              Em breve
            </div>
          </div>
        </div>
    </div>
    <Manfrota />
  </main>
);

export default Projects;

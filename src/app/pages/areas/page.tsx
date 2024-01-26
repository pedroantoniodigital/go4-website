'use client'


import AnimatedText from '@/components/animation/page';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

const Areas = () => {
  return (
    <main className="-z-10 p-20 flex flex-col min-h-screen items-center w-full bg-primary-dark">
      <div className="w-[70%]">
        <div className='flex font-bold items-center justify-between w-full text-black'>
          <AnimatedText
            once
            text="Áreas de atuação"
            el="h1"
            className="text-3xl text-white w-80"
          />
          <div className='text-base text-[#8b878f] w-80'>
            Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit. 
            Vestibulum vitae diam neque. 
            Phasellus ac augue porttitor 
            diam bibendum fringilla.
          </div>
        </div>
        <div className='flex flex-col min-h-[500px] md:flex-row gap-8 mt-24'>
          <div className='bg-primary-dark hover:drop-shadow-theme transition-all duration-1000 gap-3 cursor-pointer drop-shadow-theme flex rounded-lg flex-col items-center justify-center text-center py-24 px-8 text-white'>
            <RocketLaunchIcon sx={{ color: "white" }} />
            <AnimatedText
              once
              text="Rural"
              el="h1"
              className="font-bold"
            />
            <div>
              Lorem ipsum dolor sit amet, 
              consectetur adipiscing elit. 
              Vestibulum vitae diam neque. 
              Phasellus ac augue porttitor 
              diam bibendum fringilla.
            </div>
          </div>
          <div className='bg-primary-light gap-3 hover:drop-shadow-theme transition-all duration-1000 cursor-pointer flex rounded-lg flex-col items-center justify-center text-center py-24 px-8 text-white'>
            <RocketLaunchIcon sx={{ color: "white" }} />
            <AnimatedText
              once
              text="Urbano"
              el="h1"
              className="font-bold"
            />
            <div>
              Lorem ipsum dolor sit amet, 
              consectetur adipiscing elit. 
              Vestibulum vitae diam neque. 
              Phasellus ac augue porttitor 
              diam bibendum fringilla.
            </div>
          </div>
          <div className='bg-primary-dark drop-shadow-theme gap-3 flex rounded-lg flex-col items-center justify-center text-center py-24 px-8 text-white'>
            <RocketLaunchIcon sx={{ color: "white" }} />
            <AnimatedText
              once
              text="Florestal"
              el="h1"
              className="font-bold"
            />
            <div>
              Lorem ipsum dolor sit amet, 
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

export default Areas;

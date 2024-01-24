'use client'

import AnimatedText from '@/components/animation/page';
import LightbulbIcon from '@mui/icons-material/Lightbulb';

const WhyUs = () => {

  return (
    <main className="min-h-screen items-center m-0 py-20 bg-[#150c21]">
      <div className="flex flex-col justify-center items-center">
        <AnimatedText
          once
          text="Porque nós"
          el="h1"
          className="text-3xl text-white font-bold mt-8"
        />
        <div className='flex flex-col lg:flex-row mt-20 gap-8 w-[60%]'>
          <div className='relative rounded-lg bg-[#150c21] text-slate-950 drop-shadow-theme  p-10 text-center text-sm border-[2px] border-[#231a2e]'>
            <AnimatedText
              once
              text="Lorem ipsum dolor sit amet"
              el="h1"
              className="font-bold text-white text-lg"
            />
            <div className='text-[#8b878f]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus velit
              interdum ex faucibus venenatis. Nullam facilisis fermentum augue nec condimentum.
              Quisque sagittis, purus a blandit accumsan, turpis orci efficitur massa, a gravida
              sem tortor sit amet nisi. Fusce lacus leo, lacinia vitae erat ac, tincidunt aliquam
              ante. Pellentesque ut urna tristique, suscipit ante sit amet, tincidunt nibh.
              Curabitur viverra nec ex eget dignissim.
            </div>
          </div>
          <div className='relative rounded-lg bg-[#3e1378] text-slate-950 drop-shadow-theme  p-10 text-center text-sm border-[2px] border-[#231a2e]'>
            <AnimatedText
              once
              text="Lorem ipsum dolor sit amet"
              el="h1"
              className="font-bold text-white text-lg"
            />
            <div className='text-gray-300'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus velit
              interdum ex faucibus venenatis. Nullam facilisis fermentum augue nec condimentum.
              Quisque sagittis, purus a blandit accumsan, turpis orci efficitur massa, a gravida
              sem tortor sit amet nisi. Fusce lacus leo, lacinia vitae erat ac, tincidunt aliquam
              ante. Pellentesque ut urna tristique, suscipit ante sit amet, tincidunt nibh.
              Curabitur viverra nec ex eget dignissim.
            </div>
          </div>
          <div className='relative rounded-lg bg-[#150c21] drop-shadow-theme text-slate-950 shadow-lg p-10 text-center text-sm border-[2px] border-[#231a2e]'>
            <AnimatedText
              once
              text="Lorem ipsum dolor sit amet"
              el="h1"
              className="font-bold text-white text-lg"
            />
            <div className='text-[#8b878f]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus velit
              interdum ex faucibus venenatis. Nullam facilisis fermentum augue nec condimentum.
              Quisque sagittis, purus a blandit accumsan, turpis orci efficitur massa, a gravida
              sem tortor sit amet nisi. Fusce lacus leo, lacinia vitae erat ac, tincidunt aliquam
              ante. Pellentesque ut urna tristique, suscipit ante sit amet, tincidunt nibh.
              Curabitur viverra nec ex eget dignissim.
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default WhyUs;

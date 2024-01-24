'use client'

import LightbulbIcon from '@mui/icons-material/Lightbulb';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import AnimatedText from '@/components/animation/page';


const OurTeam = () => {
  return (
    <main className="-z-10 p-20 flex flex-col min-h-screen items-center w-full bg-white ">
      <div className="w-[70%]">
        <div className='flex text-3xl font-bold items-center justify-center w-full text-black mt-8'>
          <AnimatedText
            once
            text="Nosso Time"
            el="h1"
            className="text-3xl"
          />
        </div>
        <div className='flex text-lg text-center w-full text-[#868a90] mt-4'>
          Contamos com um time multidisciplinar de especialistas com vasta experiência no segmento da Manutenção,
          oferecendo serviços de assessoria, consultoria, treinamento, desenvolvimento e implantação
          de sistemas de gerenciamento para empresas como Agroindústrias e Frotistas em geral.
        </div>
        <div className='flex flex-col lg:flex-row mt-20 gap-8'>
          <div className='relative bg-white rounded-lg text-slate-950 shadow-lg p-10 text-center text-sm'>
            <div className="absolute bg-gray-500 shadow-lg rounded-full m-auto left-0 right-0 top-[-100%] bottom-0 w-16 h-16">
              <LightbulbIcon sx={{ color: "#fff", mt: 2.5 }} />
            </div>
            <AnimatedText
              once
              text="Titulo 1"
              el="h1"
              className="font-bold text-black text-lg"
            />
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus velit
              interdum ex faucibus venenatis. Nullam facilisis fermentum augue nec condimentum.
              Quisque sagittis, purus a blandit accumsan, turpis orci efficitur massa, a gravida
              sem tortor sit amet nisi. Fusce lacus leo, lacinia vitae erat ac, tincidunt aliquam
              ante. Pellentesque ut urna tristique, suscipit ante sit amet, tincidunt nibh.
              Curabitur viverra nec ex eget dignissim.
            </div>
          </div>
          <div className='relative bg-white rounded-lg text-slate-950 shadow-lg p-10 text-center text-sm'>
            <div className="absolute bg-gray-500 shadow-lg rounded-full m-auto left-0 right-0 top-[-100%] bottom-0 w-16 h-16">
              <LightbulbIcon sx={{ color: "#fff", mt: 2.5 }} />
            </div>
            <AnimatedText
              once
              text="Titulo 1"
              el="h1"
              className="font-bold text-black text-lg"
            />
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus velit
              interdum ex faucibus venenatis. Nullam facilisis fermentum augue nec condimentum.
              Quisque sagittis, purus a blandit accumsan, turpis orci efficitur massa, a gravida
              sem tortor sit amet nisi. Fusce lacus leo, lacinia vitae erat ac, tincidunt aliquam
              ante. Pellentesque ut urna tristique, suscipit ante sit amet, tincidunt nibh.
              Curabitur viverra nec ex eget dignissim.
            </div>
          </div>
          <div className='relative bg-white rounded-lg text-slate-950 shadow-lg p-10 text-center text-sm'>
            <div className="absolute bg-gray-500 shadow-lg rounded-full m-auto left-0 right-0 top-[-100%] bottom-0 w-16 h-16">
              <LightbulbIcon sx={{ color: "#fff", mt: 2.5 }} />
            </div>
            <AnimatedText
              once
              text="Titulo 1"
              el="h1"
              className="font-bold text-black text-lg"
            />
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus velit
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

export default OurTeam;

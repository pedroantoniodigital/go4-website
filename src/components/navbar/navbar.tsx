import React from "react";

const NavBar = () => {

  return (
    <div className="fixed bg-white w-full h-20 z-40 justify-between">
      <div className="flex justify-between mt-7 h-6 gap-10 bg-white w-full px-4"> 
        <div className="flex flex-row items-center gap-10">
          <img className="max-w-full w-16 h-12" src="/static/images/logotipo-go4-bg-roxa.png" alt="image description"/>
          <div className="text-slate-500 hover:underline hover:text-gray-800 cursor-pointer">
            Home
          </div>
          <div className="text-slate-500 hover:underline hover:text-gray-800 cursor-pointer">
            Quem Somos
          </div>
          <div className="text-slate-500 hover:underline hover:text-gray-800 cursor-pointer">
            Nosso time
          </div>
          <div className="text-slate-500 hover:underline hover:text-gray-800 cursor-pointer">
            Depoimentos
          </div>
          <div className="text-slate-500 hover:underline hover:text-gray-800 cursor-pointer">
            Porque nós
          </div>
          <div className="text-slate-500 hover:underline hover:text-gray-800 cursor-pointer">
            Módulos
          </div>
        </div>
        <div className="flex flex-row items-center gap-10">
          <button className='flex flex-row w-full md:w-72 h-[50px] rounded-[100px] bg-[#7765f3] drop-shadow-theme'>
            <span className='flex items-center justify-center w-full font-bold text-white h-full'>Solicite uma demonstração</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
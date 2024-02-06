"use client"

import AnimatedText from "@/components/animation/page"
import MapIcon from '@mui/icons-material/Map';
import { Typewriter } from "react-simple-typewriter";

const ManualAppropriation = () => {
  return (
    <>
      <div className="p-16">
        <div className="flex felx-col items-center justify-center">
          <span
            className="rounded-full bg-indigo-500 px-2 py-1 text-white uppercase text-sm"
          >
            Como funciona?
          </span>
        </div>
        <AnimatedText
          once
          text="Apropriação de Horas dos Equipamentos"
          el="h1"
          className="text-3xl text-center mt-6 font-bold text-black"
        />
        <p className="text-center mt-6 text-lg font-light text-gray-600">
          Introdução ao processo de Apropriação/Controle de horas dos equipamentos na plataforma.
        </p>
      </div>

      <section className="bg-white">
        <div className="container max-w-xl p-6 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
          <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <AnimatedText
                once
                text="Apropriação Manual"
                el="h1"
                className="text-2xl font-bold sm:text-3xl text-black text-center sm:text-left"
              />
              <p className="mt-3 text-lg text-gray-600 text-center sm:text-left">
                A Apropriação manual consiste na Adição/Giro de Horas dos Equipamentos. Nela, o usuário cria um registro de uma apropriação em determinada
                data, e posteriormente, cria os itens dela contendo o que se foi trabalhado com o equipamento em questão nesta data, rodando assim a kilometragem
                do <b>Equipamento,</b> bem como seus <b>Planos de Manutenção</b> e <b>Uso dos Pneus</b>.
              </p>
            </div>
            <div aria-hidden="true" className="mt-10 lg:mt-0">
              <img src="/static/images/appropriation/manualAppropriation.png" alt="" className="mx-auto rounded-lg shadow-lg dark:bg-gray-500 filter grayscale hover:filter-none hover:cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out" />
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
}

export default ManualAppropriation
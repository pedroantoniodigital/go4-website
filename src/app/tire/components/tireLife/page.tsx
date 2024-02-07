"use client"

import AnimatedText from "@/components/animation/page";

const TireLife = () => {
  return (
    <>
      <div className="p-16">
        <div className="flex felx-col items-center justify-center">
          <span
            className="rounded-full bg-indigo-500 px-2 py-1 text-white uppercase text-sm"
          >
            Descubra
          </span>
        </div>
        <AnimatedText
          once
          text="Módulo de Pneus"
          el="h1"
          className="text-3xl text-center mt-6 font-bold text-gray-700"
        />
        <p className="text-center mt-6 text-lg font-light text-gray-600">
          Introdução ao modulo de Pneus da plataforma.
        </p>
      </div>

      <section className="bg-primary-dark">
        <div className="container max-w-xl p-6 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
          <div className="grid lg:gap-8 lg:items-center py-4">
            <div>
              <AnimatedText
                once
                text="Cadastro dos Pneus"
                el="h1"
                className="text-2xl font-bold sm:text-3xl text-white text-center"
              />
              <p className="mt-3 text-lg text-gray-200 text-center">
                O cadastro de pneus pode ser feita de tres formas, sendo a Mobilização de Pneus, A Compra De Pneus ou a Importação de Pneus por Planilhas.
              </p>
            </div>
            <div aria-hidden="true" className="grid grid-cols-3 mt-10 lg:mt-0 gap-3">
              <img src="/static/images/tires/compra.png" alt="" className="mx-auto rounded-lg shadow-lg dark:bg-gray-500 filter grayscale hover:filter-none hover:cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out" />
              <img src="/static/images/tires/importacao.png" alt="" className="mx-auto rounded-lg shadow-lg dark:bg-gray-500 filter grayscale hover:filter-none hover:cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out" />
              <img src="/static/images/tires/mobilizacao.png" alt="" className="mx-auto rounded-lg shadow-lg dark:bg-gray-500 filter grayscale hover:filter-none hover:cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out" />
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
}

export default TireLife
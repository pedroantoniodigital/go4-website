"use client"

import AnimatedText from "@/components/animation/page"
import MapIcon from '@mui/icons-material/Map';
import { Typewriter } from "react-simple-typewriter";

const MaintenanceStart = () => {
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
          text="Manutenções"
          el="h1"
          className="text-3xl text-center mt-6 font-bold text-black"
        />
        <p className="text-center mt-6 text-lg font-light text-gray-600">
          Introdução ao processo de <b>Manutenções</b> dos equipamentos na plataforma.
        </p>
      </div>

      <section className="bg-white">
        <div className="container max-w-xl p-6 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
          <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <AnimatedText
                once
                text="Start Automático"
                el="h1"
                className="text-2xl font-bold sm:text-3xl text-black text-center sm:text-left"
              />
              <p className="mt-3 text-lg text-gray-600 text-center sm:text-left">
                As manutenções associadas aos equipamentos são programadas com base em uma quilometragem preventiva.
                Quando a quilometragem percorrida por um veículo excede esse limite, a manutenção correspondente é
                automaticamente iniciada, utilizando dados de apropriações e distâncias percorridas pelos equipamentos.
              </p>
            </div>
            <div aria-hidden="true" className="mt-10 lg:mt-0">
              <img src="/static/images/maintenance/start.png" alt="" className="mx-auto rounded-lg shadow-lg dark:bg-gray-500 filter grayscale hover:filter-none hover:cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out" />
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
}

export default MaintenanceStart
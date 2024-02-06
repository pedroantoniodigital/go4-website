"use client"

import AnimatedText from "@/components/animation/page"
import MapIcon from '@mui/icons-material/Map';
import { Typewriter } from "react-simple-typewriter";

const EquipmentCosts = () => {
  return (
    <>
      <section className="bg-primary-dark py-4">
        <div className="container max-w-xl p-6 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
          <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
            <div className="lg:col-start-2">
              <AnimatedText
                once
                text="Composição Custo Hora"
                el="h1"
                className="text-2xl font-bold sm:text-3xl text-white text-center sm:text-left"
              />
              <p className="mt-3 text-lg text-gray-200">
                Anexado ao equipamento, o custo hora possui informações cruciais para o calculo de manutenções e outros custos gerais da frota
              </p>
              <div className="mt-12 space-y-12">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-primary-light drop-shadow-theme">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-white">Custo de Manutenções</h4>
                    <p className="mt-2 text-gray-200">
                      Custos relacionados a manutenções preventivas, corretivas, custos extras
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-primary-light">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-white">Custo de Pneus/Material Rodante</h4>
                    <p className="mt-2 text-gray-200">
                      Custos relacionados aos pneus anexados ao equipamento e/ou o material rodante em caso de esteira.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-primary-light">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round"  strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-white">Custo de Combustível</h4>
                    <p className="mt-2 text-gray-200">
                      Custos relacionados ao uso de combustivel da frota, como o custo de litros de Combustivel e/ou Lubrificante por hora.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
              <img src="/static/images/fleet/custohora.png" alt="" className="mx-auto rounded-lg shadow-lg dark:bg-gray-500 filter grayscale hover:filter-none hover:cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default EquipmentCosts
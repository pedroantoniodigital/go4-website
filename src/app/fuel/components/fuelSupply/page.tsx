"use client"

import AnimatedText from "@/components/animation/page"
import MapIcon from '@mui/icons-material/Map';
import { Typewriter } from "react-simple-typewriter";

const FuelSupply = () => {
  return (
    <>

      <section className="bg-primary-dark py-4">
        <div className="container max-w-xl p-6 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
          <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
            <div aria-hidden="true" className="mt-10 lg:mt-0">
              <img src="/static/images/fuel/abastec.png" alt="" className="mx-auto rounded-lg shadow-lg dark:bg-gray-500 filter grayscale hover:grayscale-0 hover:cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out" />
            </div>
            <div>
              <h3 className="text-2xl font-bold sm:text-3xl text-white text-center sm:text-left">Abastecimentos</h3>
              <p className="mt-3 text-lg text-gray-200 text-center sm:text-left">
                Esta tela é voltada em dar funcionalidade aos tanques em postos criados, abastecendo-os, os usando para
                abastecer sua frota ou transferindo de um posto a outro. <br/><br/>

                É possivel também visualizar os <b>abastecimentos</b> de respectivos tipos, comboios, posto e outros filtros.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FuelSupply
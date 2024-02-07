"use client"

import AnimatedText from "@/components/animation/page";

const EquipmentPanel = () => {
  return (
    <>
      <section className="py-6 dark:bg-gray-800 dark:text-gray-50">
        <AnimatedText
          once
          text="Algumas imagens de nosso módulo"
          el="h1"
          className="text-3xl font-bold text-center my-4"
        />
        <div className="relative w-full flex items-center gap-4 py-6 overflow-x-auto">
          <img className="h-48 aspect-video rounded-sm object-cover object-center dark:bg-gray-500 filter grayscale hover:filter-none hover:cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out" src="/static/images/fleet/Painel.png" alt="Image 1" />
          <img className="h-48 aspect-video rounded-sm object-cover object-center dark:bg-gray-500 filter grayscale hover:filter-none hover:cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out" src="/static/images/fleet/Estrutura.png" alt="Image 2" />
          <img className="h-48 aspect-video rounded-sm object-cover object-center dark:bg-gray-500 filter grayscale hover:filter-none hover:cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out" src="/static/images/fleet/Marca.png" alt="Image 3" />
          <img className="h-48 aspect-video rounded-sm object-cover object-center dark:bg-gray-500 filter grayscale hover:filter-none hover:cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out" src="/static/images/fleet/Material.png" alt="Image 4" />
          <img className="h-48 aspect-video rounded-sm object-cover object-center dark:bg-gray-500 filter grayscale hover:filter-none hover:cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out" src="/static/images/fleet/Arvore.png" alt="Image 5" />
        </div>
      </section>
    </>
  );
}

export default EquipmentPanel
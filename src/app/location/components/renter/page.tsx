"use client"

import AnimatedText from "@/components/animation/page"

const Renter = () => {
  return (
    <>
      <section className="bg-primary-dark">
        <div className="container max-w-xl p-6 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
          <div className="grid lg:gap-10 lg:grid-cols-2 lg:items-center">
            <div aria-hidden="true" className="mt-10 lg:mt-0">
              <img src="/static/images/locator/locator2.jpg" alt="" className="mx-auto rounded-lg shadow-lg dark:bg-gray-500 filter grayscale hover:filter-none hover:cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out" />
            </div>
            <div>
              <AnimatedText
                once
                text="Locatário"
                el="h1"
                className="text-2xl font-bold sm:text-3xl text-white text-center sm:text-left"
              />
              <p className="mt-3 text-lg text-gray-200 text-center sm:text-left">
                No preenchimento do contrato citado anteriormente, este é enviado tanto para o Locador quanto para o <b>Locatário</b>, que é o responsável
                por assinar este para efetiva-lo.
              </p>
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
}

export default Renter
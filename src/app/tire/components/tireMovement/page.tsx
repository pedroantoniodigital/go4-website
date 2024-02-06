"use client"

const TireMovement = () => {
  return (
    <>
     <section className="bg-white">
        <div className="container max-w-xl p-6 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
          <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h3 className="text-2xl font-bold sm:text-3xl text-black text-center sm:text-left">Gestão de Movimentações</h3>
              <p className="mt-3 text-lg text-gray-600 text-center sm:text-left">
                Gerencie as movimentações de cada pneu de sua operação.
              </p>
            </div>
            <div aria-hidden="true" className="mt-10 lg:mt-0">
              <img src="/static/images/tires/movimentacoes.png" alt="" className="mx-auto rounded-sm shadow-lg dark:bg-gray-500 filter grayscale hover:grayscale-0 hover:cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TireMovement
"use client"

const MaintenanceMap = () => {
  return (
    <>

      <section className="bg-white py-4">
        <div className="container max-w-xl p-6 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
          <div className="grid lg:gap-8 lg:items-center"> 
            <div>
              <h3 className="text-2xl font-bold sm:text-3xl text-black text-center">Mapa de Manutenções</h3>
              <p className="mt-3 text-lg text-gray-600 text-center sm:text-left">
                Tendo cadastrado as apropriações, é possivel emitir uma planilha excel que serve como um relatório das apropriações e kilometragens rodadas
                dos equipamentos nos ultimos 3 meses, bem como as que ainda haverão ou já ocorreram neste mês.
              </p>
            </div>           
            <div aria-hidden="true" className="mt-10 lg:mt-0">
              <img src="/static/images/maintenance/mapa.png" alt="" className="mx-auto rounded-lg shadow-lg dark:bg-gray-500 filter grayscale hover:filter-none hover:cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out" />
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
}

export default MaintenanceMap
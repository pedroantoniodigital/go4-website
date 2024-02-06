"use client"

const TireDashboard = () => {
  return (
    <>
      <div className="p-8">
        <div className="flex felx-col items-center justify-center">
          <span
            className="rounded-full bg-indigo-500 px-2 py-1 text-white uppercase text-sm text-center"
          >
            Relatorios e Dashboards
          </span>
        </div>
      </div>

      <section className="bg-white">
        <div className="container max-w-xl p-6 mx-auto lg:px-8 lg:max-w-7xl">
          <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h3 className="text-2xl font-bold sm:text-3xl text-black text-center sm:text-left">Dashboard</h3>
              <p className="mt-3 text-lg text-gray-600 text-center sm:text-left">
                Possuimos um dashboard voltado á gestão de pneus, com diversos gráficos e interatividades, como visualização destes em tabela e planilhas de seus dados assim como o Dashboard de Combustível.
              </p>
            </div>
            <div aria-hidden="true" className="mt-10 lg:mt-0">
              <img src="/static/images/tires/dashboard.png" alt="" className="mx-auto rounded-sm shadow-lg dark:bg-gray-500 filter grayscale hover:grayscale-0 hover:cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out" />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-primary-dark">
        <div className="container max-w-xl p-6 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
          <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center py-4">
            <div aria-hidden="true" className="mt-10 lg:mt-0">
              <img src="/static/images/tires/dashboard.png" alt="" className="mx-auto rounded-sm shadow-lg dark:bg-gray-500 filter grayscale hover:grayscale-0 hover:cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out" />
            </div>
            <div>
              <h3 className="text-2xl font-bold sm:text-3xl text-white text-center sm:text-left">Visualização em Tabela</h3>
              <p className="mt-3 text-lg text-gray-200 text-center sm:text-left">
                Como é a visualização do dashboard em tabela.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="container max-w-xl p-6 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
          <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h3 className="text-2xl font-bold sm:text-3xl text-black text-center sm:text-left">Visualização Pneus por Status</h3>
              <p className="mt-3 text-lg text-gray-600 text-center sm:text-left">
                Além das visualização em tabela, no gráfico de pneus por status possuimos uma visualização subsequente de gráficos dos pneus ordenados por medida, bem como o <b>Custo Real</b> e o <b>Custo Estimado</b> por Medida.
              </p>
            </div>
            <div aria-hidden="true" className="mt-10 lg:mt-0">
              <img src="/static/images/tires/visualizacaostatu.png" alt="" className="mx-auto rounded-sm shadow-lg dark:bg-gray-500 filter grayscale hover:grayscale-0 hover:cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out" />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-primary-dark">
        <div className="container max-w-xl p-6 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
          <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
            <div aria-hidden="true" className="mt-10 lg:mt-0">
              <img src="/static/images/tires/relatorios.png" alt="" className="mx-auto rounded-sm shadow-lg dark:bg-gray-500 filter grayscale hover:grayscale-0 hover:cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out" />
            </div>
            <div>
              <h3 className="text-2xl font-bold sm:text-3xl text-white text-center sm:text-left">Relatórios</h3>
              <p className="mt-3 text-lg text-gray-200 text-center sm:text-left">
                Possuimos também diversos relatórios com diferentes tipos de filtragem para o gerenciamento do combustível de sua operação e do consumo deste.
              </p>
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
}

export default TireDashboard
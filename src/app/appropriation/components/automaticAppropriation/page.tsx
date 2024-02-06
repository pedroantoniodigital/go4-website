"use client"

const AutomaticAppropriation = () => {
  return (
    <>

      <section className="bg-primary-dark py-4">
        <div className="container max-w-xl p-6 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
          <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">            
            <div aria-hidden="true" className="mt-10 lg:mt-0">
              <img src="/static/images/appropriation/automaticAppropriation.png" alt="" className="mx-auto rounded-lg shadow-lg dark:bg-gray-500 filter grayscale hover:filter-none hover:cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out" />
            </div>
            <div>
              <h3 className="text-2xl font-bold sm:text-3xl text-white text-center sm:text-left">Apropriação Automática</h3>
              <p className="mt-3 text-lg text-gray-200 text-center sm:text-left">
                A Apropriação automática segue o mesmo conceito da <b>Adição/Giro de Horas</b> do equipamento, das manutenções e pneus do equipamento,
                porem, nela se são utilizados os dados do rastreador para checar se o equipamento andou em determinado periodo, utilizando o para
                adição automática de horas ao equipamento e o que está anexado a este. Além disto, se é possivel <b>importar uma planilha</b> com os dados
                do equipamento e as horas trabalhadas em determinado periodo, dando a opção do usuário utilizar esta planilha com diversos equipamentos 
                e apropria-los em conjunto.
              </p>
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
}

export default AutomaticAppropriation
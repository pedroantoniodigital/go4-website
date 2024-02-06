"use client"

import AnimatedText from "@/components/animation/page"
import MapIcon from '@mui/icons-material/Map';
import { Typewriter } from "react-simple-typewriter";

const EquipmentDocs = () => {
  return (
    <>
      <section className="m-4 md:m-8 bg-white text-black">
        <div className="container mx-auto p-4 my-6 space-y-2 text-center">
          <AnimatedText
            once
            text="Gestão de Documentos ( Tacógrafo )"
            el="h1"
            className="text-3xl font-bold"
          />
          <p className="dark:text-gray-600">Sobre a gestão das documentaçõs da frota</p>
        </div>
        <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center p-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 text-primary-light">
              <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
            </svg>
            <h3 className="my-3 text-3xl font-semibold text-center">Cadastro de Documentos Auxiliares</h3>
              <p>Cadastro de documentos auxiliares como Carteira de Motorista, Renavam entre outros</p>
          </div>
          <div className="flex flex-col items-center p-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 text-primary-light">
              <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
            </svg>
            <h3 className="my-3 text-3xl font-semibold text-center">Listagem, controle e Relatórios</h3>
            <div className="space-y-1 leadi">
              <p>Os documentos citados são listados na aba de Documentos Auxiliares do equipamento, sendo possivel associar este documento ao equipamento, lista-los e emitir um relatório destes.</p>
            </div>
          </div>
          <div className="flex flex-col items-center p-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 text-primary-light">
              <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
            </svg>
            <h3 className="my-3 text-3xl font-semibold text-center">Anexo ao Tipo do Equipamento</h3>
            <div className="space-y-1 leadi">
              <p>Os documentos auxiliares são vinculados ao tipo, aparecendo na edição do equipamento caso o tipo deste tenha documentos entrelaçados a ele.</p>
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
}

export default EquipmentDocs
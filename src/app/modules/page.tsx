'use client'

import AnimatedText from '@/components/animation/page';

import { IconButton } from '@mui/material';

import MapIcon from '@mui/icons-material/Map';

import { useRouter } from 'next/navigation'

const OurModules = () => {
  
  const router = useRouter()
  
  return (
    <>
      <main className="min-h-screen w-full h-fit-content flex flex-col items-center justify-center m-0 py-20 bg-white">
        <div className="flex flex-wrap justify-center w-100% md:w-[70%] gap-4">
          {/* PRIMEIRA DIV  */}
          <div className="flex flex-col gap-4 w-[100%] lg:w-[42%] text-center rounded-lg h-[300px] text-slate-900 p-10 mt-10">
            {/* Conteúdo da primeira div */}
            <span className="font-bold text-3xl">Conheça nossos módulos</span>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
          </div>
          {/* PRIMEIRA DIV */}
          {/* PRIMEIRO MODULO */}
          <div className="md:shadow-2xl w-[100%] lg:w-[42%] rounded-lg h-fit p-10">
            <div className='flex justify-between items-center'>
              <div className="flex flex-col">
                <AnimatedText
                  once
                  text="01"
                  el="h1"
                  className="text-black text-xl font-bold"
                />
                <AnimatedText
                  once
                  text="Rastreador"
                  el="h1"
                  className="text-blue-700 text-xl font-bold"
                />
              </div>
              <IconButton onClick={() => router.push("/screens/tracker")}>
                <MapIcon sx={{ color: "#1d4ed8" }} />
              </IconButton>
            </div>
            <div className="text-gray-500 mt-6 text-center md:text-left md:w-[50%]">
              Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
              Vestibulum vitae diam neque.
              Phasellus ac augue porttitor
              diam bibendum fringilla.
            </div>
            <div className="mt-10">
              <div className="text-gray-600">
                <span className="text-blue-700 text-lg font-bold">01</span>
                <button onClick={() => router.push("/screens/tracker")} className="ml-4 hover:underline hover:cursor-pointer">Mapa de Equipamentos</button>
              </div>
              <hr className="border-b border-dashed border-gray-300 my-2" />

              <div className="text-gray-600">
                <span className="text-blue-700 text-lg font-bold">02</span>
                <span className="ml-4 ">Tela 02</span>
              </div>
              <hr className="border-b border-dashed border-gray-300 my-2" />

              <div className="text-gray-600">
                <span className="text-blue-700 text-lg font-bold">03</span>
                <span className="ml-4 ">Tela 03</span>
              </div>
              <hr className="border-b border-dashed border-gray-300 my-2" />

              <div className="flex justify-between text-gray-600">
                <div>
                  <span className="text-blue-700 text-lg font-bold">04</span>
                  <span className="ml-4 ">Tela 04</span>
                </div>
              </div>
              <hr className="border-b border-dashed border-gray-300 my-2" />

              <div className="text-gray-600">
                <span className="text-blue-700 text-lg font-bold">05</span>
                <span className="ml-4 ">Tela 05</span>
              </div>
              <hr className="border-b border-dashed border-gray-300 my-2" />

              <div className="text-gray-600">
                <span className="text-blue-700 text-lg font-bold">05</span>
                <span className="ml-4 ">Tela 06</span>
              </div>
              <hr className="border-b border-dashed border-gray-300 my-2" />

              <div className="text-gray-600">
                <span className="text-blue-700 text-lg font-bold">05</span>
                <span className="ml-4 ">Tela 07</span>
              </div>
              <hr className="border-b border-dashed border-gray-300 my-2" />
            </div>
            {/* Conteúdo da segunda div */}
          </div>
          {/* PRIMEIRO MODULO */}

          {/* SEGUNDO MODULO */}
          <div className="md:shadow-2xl lg:mt-[-400px] rounded-lg w-[100%] lg:w-[42%] h-fit p-10">
            <div className="flex flex-col">
              <AnimatedText
                once
                text="02"
                el="h1"
                className="text-black text-xl font-bold"
              />
              <AnimatedText
                once
                text="Frota"
                el="h1"
                className="text-green-700 text-xl font-bold"
              />
            </div>
            <div className="text-gray-500 mt-6 text-center md:text-left md:w-[50%]">
              Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
              Vestibulum vitae diam neque.
              Phasellus ac augue porttitor
              diam bibendum fringilla.
            </div>
            <div className="mt-10">
              <div className="text-gray-600">
                <span className="text-green-700 text-lg font-bold">01</span>
                <span className="ml-4 ">Tela 01</span>
              </div>
              <hr className="border-b border-dashed border-gray-300 my-2" />

              <div className="text-gray-600">
                <span className="text-green-700 text-lg font-bold">02</span>
                <span className="ml-4 ">Tela 02</span>
              </div>
              <hr className="border-b border-dashed border-gray-300 my-2" />

              <div className="text-gray-600">
                <span className="text-green-700 text-lg font-bold">03</span>
                <span className="ml-4 ">Tela 03</span>
              </div>
              <hr className="border-b border-dashed border-gray-300 my-2" />

              <div className="flex justify-between text-gray-600">
                <div>
                  <span className="text-green-700 text-lg font-bold">04</span>
                  <span className="ml-4 ">Tela 04</span>
                </div>
              </div>
              <hr className="border-b border-dashed border-gray-300 my-2" />

              <div className="text-gray-600">
                <span className="text-green-700 text-lg font-bold">05</span>
                <span className="ml-4 ">Tela 05</span>
              </div>
              <hr className="border-b border-dashed border-gray-300 my-2" />

              <div className="text-gray-600">
                <span className="text-green-700 text-lg font-bold">05</span>
                <span className="ml-4 ">Tela 06</span>
              </div>
              <hr className="border-b border-dashed border-gray-300 my-2" />

              <div className="text-gray-600">
                <span className="text-green-700 text-lg font-bold">05</span>
                <span className="ml-4 ">Tela 07</span>
              </div>
              <hr className="border-b border-dashed border-gray-300 my-2" />
            </div>
            {/* Conteúdo da segunda div */}
          </div>
          {/* SEGUNDO MODULO */}

          {/* TERCEIRO MODULO */}
          <div className="md:shadow-2xl w-[100%] lg:w-[42%] rounded-lg h-fit p-10">
            <div className="flex flex-col">
              <AnimatedText
                once
                text="03"
                el="h1"
                className="text-black text-xl font-bold"
              />
              <AnimatedText
                once
                text="Combustível"
                el="h1"
                className="text-purple-700 text-xl font-bold"
              />
            </div>
            <div className="text-gray-500 mt-6 text-center md:text-left md:w-[50%]">
              Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
              Vestibulum vitae diam neque.
              Phasellus ac augue porttitor
              diam bibendum fringilla.
            </div>
            <div className="mt-10">
              <div className="text-gray-600">
                <span className="text-purple-700 text-lg font-bold">01</span>
                <span className="ml-4 ">Tela 01</span>
              </div>
              <hr className="border-b border-dashed border-gray-300 my-2" />

              <div className="text-gray-600">
                <span className="text-purple-700 text-lg font-bold">02</span>
                <span className="ml-4 ">Tela 02</span>
              </div>
              <hr className="border-b border-dashed border-gray-300 my-2" />

              <div className="text-gray-600">
                <span className="text-purple-700 text-lg font-bold">03</span>
                <span className="ml-4 ">Tela 03</span>
              </div>
              <hr className="border-b border-dashed border-gray-300 my-2" />

              <div className="flex justify-between text-gray-600">
                <div>
                  <span className="text-purple-700 text-lg font-bold">04</span>
                  <span className="ml-4 ">Tela 04</span>
                </div>
              </div>
              <hr className="border-b border-dashed border-gray-300 my-2" />

              <div className="text-gray-600">
                <span className="text-purple-700 text-lg font-bold">05</span>
                <span className="ml-4 ">Tela 05</span>
              </div>
              <hr className="border-b border-dashed border-gray-300 my-2" />

              <div className="text-gray-600">
                <span className="text-purple-700 text-lg font-bold">05</span>
                <span className="ml-4 ">Tela 06</span>
              </div>
              <hr className="border-b border-dashed border-gray-300 my-2" />

              <div className="text-gray-600">
                <span className="text-purple-700 text-lg font-bold">05</span>
                <span className="ml-4 ">Tela 07</span>
              </div>
              <hr className="border-b border-dashed border-gray-300 my-2" />
            </div>
          </div>
          {/* TERCEIRO MODULO */}

          {/* QUARTO MODULO */}
          <div className="md:shadow-2xl lg:mt-[-400px] rounded-lg w-[100%] lg:w-[42%] h-fit p-10">
            <div className="flex flex-col">
              <AnimatedText
                once
                text="04"
                el="h1"
                className="text-black text-xl font-bold"
              />
              <AnimatedText
                once
                text="Pneus"
                el="h1"
                className="text-orange-700 text-xl font-bold"
              />
            </div>
            <div className="text-gray-500 mt-6 text-center md:text-left md:w-[50%]">
              Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
              Vestibulum vitae diam neque.
              Phasellus ac augue porttitor
              diam bibendum fringilla.
            </div>
            <div className="mt-10">
              <div className="text-gray-600">
                <span className="text-orange-700 text-lg font-bold">01</span>
                <span className="ml-4 ">Tela 01</span>
              </div>
              <hr className="border-b border-dashed border-gray-300 my-2" />

              <div className="text-gray-600">
                <span className="text-orange-700 text-lg font-bold">02</span>
                <span className="ml-4 ">Tela 02</span>
              </div>
              <hr className="border-b border-dashed border-gray-300 my-2" />

              <div className="text-gray-600">
                <span className="text-orange-700 text-lg font-bold">03</span>
                <span className="ml-4 ">Tela 03</span>
              </div>
              <hr className="border-b border-dashed border-gray-300 my-2" />

              <div className="flex justify-between text-gray-600">
                <div>
                  <span className="text-orange-700 text-lg font-bold">04</span>
                  <span className="ml-4 ">Tela 04</span>
                </div>
              </div>
              <hr className="border-b border-dashed border-gray-300 my-2" />

              <div className="text-gray-600">
                <span className="text-orange-700 text-lg font-bold">05</span>
                <span className="ml-4 ">Tela 05</span>
              </div>
              <hr className="border-b border-dashed border-gray-300 my-2" />

              <div className="text-gray-600">
                <span className="text-orange-700 text-lg font-bold">05</span>
                <span className="ml-4 ">Tela 06</span>
              </div>
              <hr className="border-b border-dashed border-gray-300 my-2" />

              <div className="text-gray-600">
                <span className="text-orange-700 text-lg font-bold">05</span>
                <span className="ml-4 ">Tela 07</span>
              </div>
              <hr className="border-b border-dashed border-gray-300 my-2" />
            </div>
          </div>
          {/* QUARTO MODULO */}

          {/* QUINTO MODULO */}
          <div className="md:shadow-2xl w-[100%] lg:w-[42%] rounded-lg h-fit p-10">
            <div className="flex flex-col">
              <AnimatedText
                once
                text="05"
                el="h1"
                className="text-black text-xl font-bold"
              />
              <AnimatedText
                once
                text="Apropriação"
                el="h1"
                className="text-red-700 text-xl font-bold"
              />
            </div>
            <div className="text-gray-500 mt-6 text-center md:text-left md:w-[50%]">
              Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
              Vestibulum vitae diam neque.
              Phasellus ac augue porttitor
              diam bibendum fringilla.
            </div>
            <div className="mt-10">
              <div className="text-gray-600">
                <span className="text-red-700 text-lg font-bold">01</span>
                <span className="ml-4 ">Tela 01</span>
              </div>
              <hr className="border-b border-dashed border-gray-300 my-2" />

              <div className="text-gray-600">
                <span className="text-red-700 text-lg font-bold">02</span>
                <span className="ml-4 ">Tela 02</span>
              </div>
              <hr className="border-b border-dashed border-gray-300 my-2" />

              <div className="text-gray-600">
                <span className="text-red-700 text-lg font-bold">03</span>
                <span className="ml-4 ">Tela 03</span>
              </div>
              <hr className="border-b border-dashed border-gray-300 my-2" />

              <div className="flex justify-between text-gray-600">
                <div>
                  <span className="text-red-700 text-lg font-bold">04</span>
                  <span className="ml-4 ">Tela 04</span>
                </div>
              </div>
              <hr className="border-b border-dashed border-gray-300 my-2" />

              <div className="text-gray-600">
                <span className="text-red-700 text-lg font-bold">05</span>
                <span className="ml-4 ">Tela 05</span>
              </div>
              <hr className="border-b border-dashed border-gray-300 my-2" />

              <div className="text-gray-600">
                <span className="text-red-700 text-lg font-bold">05</span>
                <span className="ml-4 ">Tela 06</span>
              </div>
              <hr className="border-b border-dashed border-gray-300 my-2" />

              <div className="text-gray-600">
                <span className="text-red-700 text-lg font-bold">05</span>
                <span className="ml-4 ">Tela 07</span>
              </div>
              <hr className="border-b border-dashed border-gray-300 my-2" />
            </div>
          </div>
          {/* QUINTO MODULO */}

          {/* SEXTO MODULO */}
          <div className="md:shadow-2xl lg:mt-[-400px] rounded-lg w-[100%] lg:w-[42%] h-fit p-10">
            <div className="flex flex-col">
              <AnimatedText
                once
                text="06"
                el="h1"
                className="text-black text-xl font-bold"
              />
              <AnimatedText
                once
                text="Dashboards"
                el="h1"
                className="text-yellow-400 text-xl font-bold"
              />
            </div>
            <div className="text-gray-500 mt-6 text-center md:text-left md:w-[50%]">
              Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
              Vestibulum vitae diam neque.
              Phasellus ac augue porttitor
              diam bibendum fringilla.
            </div>
            <div className="mt-10">
              <div className="text-gray-600">
                <span className="text-yellow-400 text-lg font-bold">01</span>
                <span className="ml-4 ">Tela 01</span>
              </div>
              <hr className="border-b border-dashed border-gray-300 my-2" />

              <div className="text-gray-600">
                <span className="text-yellow-400 text-lg font-bold">02</span>
                <span className="ml-4 ">Tela 02</span>
              </div>
              <hr className="border-b border-dashed border-gray-300 my-2" />

              <div className="text-gray-600">
                <span className="text-yellow-400 text-lg font-bold">03</span>
                <span className="ml-4 ">Tela 03</span>
              </div>
              <hr className="border-b border-dashed border-gray-300 my-2" />

              <div className="flex justify-between text-gray-600">
                <div>
                  <span className="text-yellow-400 text-lg font-bold">04</span>
                  <span className="ml-4 ">Tela 04</span>
                </div>
              </div>
              <hr className="border-b border-dashed border-gray-300 my-2" />

              <div className="text-gray-600">
                <span className="text-yellow-400 text-lg font-bold">05</span>
                <span className="ml-4 ">Tela 05</span>
              </div>
              <hr className="border-b border-dashed border-gray-300 my-2" />

              <div className="text-gray-600">
                <span className="text-yellow-400 text-lg font-bold">05</span>
                <span className="ml-4 ">Tela 06</span>
              </div>
              <hr className="border-b border-dashed border-gray-300 my-2" />

              <div className="text-gray-600">
                <span className="text-yellow-400 text-lg font-bold">05</span>
                <span className="ml-4 ">Tela 07</span>
              </div>
              <hr className="border-b border-dashed border-gray-300 my-2" />
            </div>
          </div>
          {/* SEXTO MODULO */}

          {/* SETIMO MODULO */}
          <div className="md:shadow-2xl w-[100%] lg:w-[42%] rounded-lg h-fit p-10">
            <div className="flex justify-between">
              <div className="flex flex-col">
                <AnimatedText
                  once
                  text="07"
                  el="h1"
                  className="text-black text-xl font-bold"
                />
                <AnimatedText
                  once
                  text="Manutenção"
                  el="h1"
                  className="text-pink-700 text-xl font-bold"
                />
              </div>
            </div>
            <div className="text-gray-500 mt-6 text-center md:text-left md:w-[50%]">
              Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
              Vestibulum vitae diam neque.
              Phasellus ac augue porttitor
              diam bibendum fringilla.
            </div>
            <div className="mt-10">
              <div className="text-gray-600">
                <span className="text-pink-700 text-lg font-bold">01</span>
                <span className="ml-4 ">Tela 01</span>
              </div>
              <hr className="border-b border-dashed border-gray-300 my-2" />

              <div className="text-gray-600">
                <span className="text-pink-700 text-lg font-bold">02</span>
                <span className="ml-4 ">Tela 02</span>
              </div>
              <hr className="border-b border-dashed border-gray-300 my-2" />

              <div className="text-gray-600">
                <span className="text-pink-700 text-lg font-bold">03</span>
                <span className="ml-4 ">Tela 03</span>
              </div>
              <hr className="border-b border-dashed border-gray-300 my-2" />

              <div className="flex justify-between text-gray-600">
                <div>
                  <span className="text-pink-700 text-lg font-bold">04</span>
                  <span className="ml-4 ">Tela 04</span>
                </div>
              </div>
              <hr className="border-b border-dashed border-gray-300 my-2" />

              <div className="text-gray-600">
                <span className="text-pink-700 text-lg font-bold">05</span>
                <span className="ml-4 ">Tela 05</span>
              </div>
              <hr className="border-b border-dashed border-gray-300 my-2" />

              <div className="text-gray-600">
                <span className="text-pink-700 text-lg font-bold">05</span>
                <span className="ml-4 ">Tela 06</span>
              </div>
              <hr className="border-b border-dashed border-gray-300 my-2" />

              <div className="text-gray-600">
                <span className="text-pink-700 text-lg font-bold">05</span>
                <span className="ml-4 ">Tela 07</span>
              </div>
              <hr className="border-b border-dashed border-gray-300 my-2" />
            </div>
          </div>
          {/* SETIMO MODULO */}
        </div>
      </main>
    </>
  )
}

export default OurModules;

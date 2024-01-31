"use client"

import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AnimatedText from "@/components/animation/page";
import './index.css';
import Image from "next/image";
import NextArrow from "@/components/arrows/nextArrow";
import PrevArrow from "@/components/arrows/prevArrow";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      centerMode: true,
      centerPadding: "60px",
      slidesToScroll: 1,
      autoplay: true,
      pauseOnHover: true,
      autoplaySpeed: 1500,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    return (
      <div id="clients" className=" flex flex-col items-center justify-center py-24 bg-gray-100">
        <span className="font-bold text-3xl text-black">Nossos clientes</span>
        <div style={{ width: "100%", marginTop: "5rem" }}> {/* Limitar a largura do contêiner do Slider */}
          <Slider {...settings} className="flex items-center justify-center">

          <div className="flex hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer flex-col w-auto md:max-w-sm rounded-lg shadow-lg my-8 max-h-fit">
            <div className="flex-shrink-0">
              <Image 
                src="/static/images/clients/logoandrade.png" 
                alt="" 
                width={500}
                height={100}
                style={{
                  maxWidth: "100%",
                  height: '300px'
                }}   
              />
            </div>
            <div className="flex flex-1 flex-col justify-between bg-white p-6">
              <div className="flex-1 text-center">
                <a href="#" className="mt-2 block">
                  <AnimatedText
                    once
                    text="Andrade Gutierrez"
                    el="h1"
                    className="text-xl font-semibold text-gray-900"
                  />
                  <p className="mt-3 text-base text-gray-500">Construtora
                  </p>
                </a>
              </div>
            </div>
          </div>

          <div className="flex hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer flex-col w-auto md:max-w-sm rounded-lg shadow-lg mx-2 my-8 max-h-fit">
            <div className="flex-shrink-0">
              <Image 
                src="/static/images/clients/mgmlogo5.png" 
                alt="" 
                width={500}
                height={100}
                style={{
                  marginLeft: '30px',
                  maxWidth: "300px",
                  height: '300px'
                }}   
              />
            </div>
            <div className="flex flex-1 flex-col justify-between bg-white p-6">
              <div className="flex-1 text-center">
                <a href="#" className="mt-2 block">
                  <AnimatedText
                    once
                    text="Mgm Rental"
                    el="h1"
                    className="text-xl font-semibold text-gray-900"
                  />
                  <p className="mt-3 text-base text-gray-500">Transportadora
                  </p>
                </a>
              </div>
            </div>
          </div>

          <div className="flex hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer flex-col w-auto md:max-w-sm rounded-lg shadow-lg mx-2 my-8 max-h-fit">
            <div className="flex-shrink-0">
              <Image 
                src="/static/images/clients/carpelo.png" 
                alt="" 
                width={500}
                height={100}
                style={{
                  marginLeft: '20px',
                  maxWidth: "350px",
                  height: '300px'
                }}   
              />
            </div>
            <div className="flex flex-1 flex-col justify-between bg-white p-6">
              <div className="flex-1 text-center">
                <a href="#" className="mt-2 block">
                  <AnimatedText
                    once
                    text="Carpelo"
                    el="h1"
                    className="text-xl font-semibold text-gray-900"
                  />
                  <p className="mt-3 text-base text-gray-500">Transportadora
                  </p>
                </a>
              </div>
            </div>
          </div>

          <div className="flex hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer flex-col w-auto md:max-w-sm rounded-lg shadow-lg mx-2 my-8 max-h-fit">
            <div className="flex-shrink-0">
              <Image 
                src="/static/images/clients/elevacaoLogo.png" 
                alt="" 
                width={500}
                height={100}
                style={{
                  marginLeft: '20px',
                  maxWidth: "350px",
                  height: '300px'
                }}   
              />
            </div>
            <div className="flex flex-1 flex-col justify-between bg-white p-6">
              <div className="flex-1 text-center">
                <a href="#" className="mt-2 block">
                  <AnimatedText
                    once
                    text="Construtora Elevacao"
                    el="h1"
                    className="text-xl font-semibold text-gray-900"
                  />
                  <p className="mt-3 text-base text-gray-500">Construtora
                  </p>
                </a>
              </div>
            </div>
          </div>

          <div className="flex hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer flex-col w-auto md:max-w-sm rounded-lg shadow-lg mx-2 my-8 max-h-fit">
            <div className="flex-shrink-0">
              <Image 
                src="/static/images/clients/ecbLogo.png" 
                alt="" 
                width={500}
                height={100}
                style={{
                  marginLeft: '10px',
                  maxWidth: "350px",
                  height: '300px'
                }}   
              />
            </div>
            <div className="flex flex-1 flex-col justify-between bg-white p-6">
              <div className="flex-1 text-center">
                <a href="#" className="mt-2 block">
                  <AnimatedText
                    once
                    text="ECB Brasil"
                    el="h1"
                    className="text-xl font-semibold text-gray-900"
                  />
                  <p className="mt-3 text-base text-gray-500">Construtora
                  </p>
                </a>
              </div>
            </div>
          </div>
        
          <div className="flex hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer flex-col w-auto md:max-w-sm rounded-lg shadow-lg mx-2 my-8 max-h-fit">
            <div className="flex-shrink-0">
              <Image 
                src="/static/images/clients/eratecnica.png" 
                alt="" 
                width={500}
                height={100}
                style={{
                  marginLeft: '15px',
                  maxWidth: "350px",
                  height: '300px'
                }}   
              />
            </div>
            <div className="flex flex-1 flex-col justify-between bg-white p-6">
              <div className="flex-1 text-center">
                <a href="#" className="mt-2 block">
                  <AnimatedText
                    once
                    text="Era Técnica"
                    el="h1"
                    className="text-xl font-semibold text-gray-900"
                  />
                  <p className="mt-3 text-base text-gray-500">Construtora
                  </p>
                </a>
              </div>
            </div>
          </div>

          <div className="flex hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer flex-col w-auto md:max-w-sm rounded-lg shadow-lg mx-2 my-8 max-h-fit">
            <div className="flex-shrink-0">
              <Image 
                src="/static/images/clients/fsgLogo.png" 
                alt="" 
                width={500}
                height={100}
                style={{
                  marginLeft: 1,
                  maxWidth: "350px",
                  height: '300px'
                }}   
              />
            </div>
            <div className="flex flex-1 flex-col justify-between bg-white p-6">
              <div className="flex-1 text-center">
                <a href="#" className="mt-2 block">
                  <AnimatedText
                    once
                    text="Fsg"
                    el="h1"
                    className="text-xl font-semibold text-gray-900"
                  />
                  <p className="mt-3 text-base text-gray-500">Construtora
                  </p>
                </a>
              </div>
            </div>
          </div>

          <div className="flex hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer flex-col w-auto md:max-w-sm rounded-lg shadow-lg mx-2 my-8 max-h-fit">
            <div className="flex-shrink-0">
              <Image 
                src="/static/images/clients/brazabeLogo.png" 
                alt="" 
                width={500}
                height={100}
                style={{
                  marginLeft: '25px',
                  maxWidth: "350px",
                  height: '300px'
                }}   
              />
            </div>
            <div className="flex flex-1 flex-col justify-between bg-white p-6">
              <div className="flex-1 text-center">
                <a href="#" className="mt-2 block">
                  <AnimatedText
                    once
                    text="Brazabe"
                    el="h1"
                    className="text-xl font-semibold text-gray-900"
                  />
                  <p className="mt-3 text-base text-gray-500">Construtora
                  </p>
                </a>
              </div>
            </div>
          </div>

          <div className="flex hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer flex-col w-auto md:max-w-sm rounded-lg shadow-lg mx-2 my-8 max-h-fit">
            <div className="flex-shrink-0">
              <Image 
                src="/static/images/clients/egf.png" 
                alt="" 
                width={500}
                height={100}
                style={{
                  marginLeft: '15px',
                  maxWidth: "350px",
                  height: '300px'
                }}   
              />
            </div>
            <div className="flex flex-1 flex-col justify-between bg-white p-6">
              <div className="flex-1 text-center">
                <a href="#" className="mt-2 block">
                  <AnimatedText
                    once
                    text="EGF"
                    el="h1"
                    className="text-xl font-semibold text-gray-900"
                  />
                  <p className="mt-3 text-base text-gray-500">Construtora
                  </p>
                </a>
              </div>
            </div>
          </div>

          <div className="flex hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer flex-col w-auto md:max-w-sm rounded-lg shadow-lg mx-2 my-8 max-h-fit">
            <div className="flex-shrink-0">
              <Image 
                src="/static/images/clients/hidroplanLogo.png" 
                alt="" 
                width={500}
                height={100}
                style={{
                  marginLeft: '15px',
                  maxWidth: "350px",
                  height: '300px'
                }}   
              />
            </div>
            <div className="flex flex-1 flex-col justify-between bg-white p-6">
              <div className="flex-1 text-center">
                <a href="#" className="mt-2 block">
                  <AnimatedText
                    once
                    text="Hidroplan"
                    el="h1"
                    className="text-xl font-semibold text-gray-900"
                  />
                  <p className="mt-3 text-base text-gray-500">Construtora
                  </p>
                </a>
              </div>
            </div>
          </div>

          <div className="flex hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer flex-col w-auto md:max-w-sm rounded-lg shadow-lg mx-2 my-8 max-h-fit">
            <div className="flex-shrink-0">
              <Image 
                src="/static/images/clients/logolopes.png" 
                alt="" 
                width={500}
                height={100}
                style={{
                  marginLeft: '15px',
                  maxWidth: "350px",
                  height: '300px'
                }}   
              />
            </div>
            <div className="flex flex-1 flex-col justify-between bg-white p-6">
              <div className="flex-1 text-center">
                <a href="#" className="mt-2 block">
                  <AnimatedText
                    once
                    text="Lopes Engenharia"
                    el="h1"
                    className="text-xl font-semibold text-gray-900"
                  />
                  <p className="mt-3 text-base text-gray-500">Construtora
                  </p>
                </a>
              </div>
            </div>
          </div>
          
          <div className="flex hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer flex-col w-auto md:max-w-sm rounded-lg shadow-lg mx-2 my-8 max-h-fit">
            <div className="flex-shrink-0">
              <Image 
                src="/static/images/clients/logoValot.png" 
                alt="" 
                width={500}
                height={100}
                style={{
                  marginLeft: '15px',
                  maxWidth: "350px",
                  height: '300px'
                }}   
              />
            </div>
            <div className="flex flex-1 flex-col justify-between bg-white p-6">
              <div className="flex-1 text-center">
                <a href="#" className="mt-2 block">
                  <AnimatedText
                    once
                    text="Valot"
                    el="h1"
                    className="text-xl font-semibold text-gray-900"
                  />
                  <p className="mt-3 text-base text-gray-500">Construtora
                  </p>
                </a>
              </div>
            </div>
          </div>
            
          </Slider>
        </div>
      </div>
    );
  }
}

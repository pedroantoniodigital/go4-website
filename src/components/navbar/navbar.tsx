"use client"

import React, { useEffect, useState } from "react";

import { Link } from 'react-scroll';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const menus = [
  {
    label: 'Home',
    to: 'landingPage',
  },
  {
    label: 'Produtos',
    to: 'projects'
  },
  {
    label: 'Vantagens',
    to: 'advantages'
  },
  {
    label: 'Quem Somos',
    to: 'aboutUs'
  },
  {
    label: 'Time',
    to: 'team'
  },
  {
    label: 'Áreas',
    to: 'areas'
  },
  {
    label: 'Porque nós',
    to: 'whyUs'
  },
  {
    label: 'Parceiros',
    to: 'clients'
  },
  {
    label: 'Depoimentos',
    to: 'brief'
  },
]

const NavBar = () => {

  const [navbar, setNavbar] = useState(false);
  
  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <div className={`fixed ${!navbar ? `bg-transparent` : `bg-white`} w-full h-14 z-50 justify-between transition-all duration-500 ease-in-out`}>
      <div className="flex justify-around items-center bg-transparent h-full">
        <img className="max-w-full w-14 h-w-14 rounded-lg" src={navbar ? "/static/images/go4-icon-azul.png" : "/static/images/logotipo-go4-bg-white.png"} alt="image description" />

        <div className="flex flex-row items-center gap-10">
          {menus.map((e, index) => (
            <div key={index} className={`${!navbar ? `text-white` : `text-gray-700`} font-medium hover:underline ${!navbar ? `hover:text-primary-light` : `hover:text-primary-light`} transition-all duration-500 ease-in-out  cursor-pointer`}>
              <Link
                activeClass="active"
                to={e.to}
                spy={true}
                smooth={true}
                offset={0}
                duration={700}
              >
                {e.label}
              </Link>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 divide-x">
          <a href="https://www.instagram.com/go4_digital/" target="_blank">
            <InstagramIcon className={`hover:text-[#fb6e02] ${!navbar ? `text-white` : `text-gray-700`} transition-all duration-1000 ease-in-out mr-2`} sx={{ width: 28, height: 28}} />
          </a>
          <a href="https://www.linkedin.com/company/go4-digital/" target="_blank">
            <LinkedInIcon className={`hover:text-[#0a66c2] ${!navbar ? `text-white` : `text-gray-700`} transition-all duration-1000 ease-in-out ml-2`} sx={{ width: 28, height: 28}} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
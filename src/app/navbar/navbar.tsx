"use client"

import React, { useState } from "react";

import { Link } from 'react-scroll';
import NextLink from 'next/link';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const menus = [
  {
    label: 'Home',
    to: 'landingPage',
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
    label: 'Depoimentos',
    to: 'brief'
  },
  {
    label: 'Porque nós',
    to: 'whyUs'
  },
  {
    label: 'Projetos',
    to: 'projects'
  },
  {
    label: 'Parceiros',
    to: 'clients'
  },
  {
    label: 'Dúvidas',
    to: 'questions'
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

  console.log(navbar);

  return (
    <div className={`fixed ${!navbar ? `bg-transparent` : `bg-white/95`} w-full h-14 z-50 justify-between transition-all duration-500 ease-in-out`}>
      <div className="flex justify-around items-center bg-transparent h-full">
        <img className="max-w-full w-8 h-w-8 rounded-lg" src="/static/images/1665837042487.jpeg" alt="image description" />

        <div className="flex flex-row items-center gap-10">
          {menus.map((e, index) => (
            <div key={index} className={`${!navbar ? `text-white` : `text-black`} font-semibold hover:underline ${!navbar ? `hover:text-white` : `hover:text-gray-800ck`}  cursor-pointer`}>
              <Link
                activeClass="active"
                to={e.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={700}
              >
                {e.label}
              </Link>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 divide-x">
          <a href="https://www.instagram.com/go4_digital/" target="_blank">
            <InstagramIcon className={`hover:text-[#fb6e02] ${!navbar ? `text-white` : `text-black`} transition-all duration-1000 ease-in-out mr-2`} sx={{ width: 28, height: 28}} />
          </a>
          <a href="https://www.linkedin.com/company/go4-digital/" target="_blank">
            <LinkedInIcon className={`hover:text-[#0a66c2] ${!navbar ? `text-white` : `text-black`} transition-all duration-1000 ease-in-out ml-2`} sx={{ width: 28, height: 28}} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
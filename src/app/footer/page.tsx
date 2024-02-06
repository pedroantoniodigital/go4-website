import React, { useState, useEffect } from "react";

import LocationOnIcon from '@mui/icons-material/LocationOn';

const Footer = () => {

  return (
    <main className="flex flex-col bg-primary-dark w-full h-[60px]">
      <div className="h-[100%] bg-primary-dark text-white w-full flex text-base justify-center items-center">
      <span>
        Go4 Digital - Todos os direitos reservados - {" "}
        {new Date().getFullYear()} 
        <a target="_blank" href="https://www.google.com/maps/place/Digital+Automação/@-20.2091282,-50.929647,17z/data=!4m6!3m5!1s0x9499c152ca678535:0x7d7eabcf9594a02!8m2!3d-20.2091495!4d-50.9296278!16s%2Fg%2F11h42p_fl4?entry=ttu">
          <LocationOnIcon sx={{ width: 36, height: 36, color: "primary.light", "&:hover": { cursor: "pointer" }  }}/>   
        </a> 
        <b>Núcleo Tecnológico  </b> |
        Santa fé do Sul - SP
      </span>
      </div>
    </main>
  );
};

export default Footer;
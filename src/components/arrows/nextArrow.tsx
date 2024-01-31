import React from "react";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const NextArrow = ({ onClick }) => {
  return (
    <div className="absolute right-[20px] -top-[80px]" onClick={onClick}>
      <div className="bg-white h-[50px] w-[50px] rounded-full grid place-items-center cursor-pointer">
        <NavigateNextIcon />
      </div>
    </div>
  )
}

export default NextArrow
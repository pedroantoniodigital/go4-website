import React from "react";
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

const PrevArrow = ({ onClick }) => {
  return (
    <div className="absolute right-[80px] -top-[80px]" onClick={onClick}>
      <div className="bg-white h-[50px] w-[50px] rounded-full grid place-items-center cursor-pointer">
        <NavigateBeforeIcon />
      </div>
    </div>
  )
}

export default PrevArrow
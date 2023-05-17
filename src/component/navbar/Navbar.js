import React from 'react'
import img from "../../assets/images/Ellipse 47.svg"
const Navbar = () => {
  return (
    <div className='w-[80vw] h-[3.2rem] border-b-[1px] border-solid border-b-gray-200 flex items-center justify-end'>
          <div className='pr-6 flex gap-x-3 items-center font-semibold'>
            John Doe 
          <img src={img}  />
          </div>
    </div>
  )
}

export default Navbar
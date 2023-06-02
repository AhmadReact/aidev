import React from 'react'
import img from "../../assets/images/Ellipse 47.svg";
const Heading = ({data}) => {

  


  return (
    <div className='flex gap-x-[20px]'>

        <img src={img}  />
        <div>
            <p className='font-medium text-base'>{Object.keys(data)[0]}</p>
            <div className='flex text-gray-400' >
                <p className='text-sm font-normal'>{Object.keys(data).length-1} Questions Asked</p>
                <p className='ml-7 text-sm font-normal'><span className='font-extrabold text-gray-500 mr-2'>.</span>2mins ago</p>
            </div>
        </div>
    </div>
    
  )
}

export default Heading
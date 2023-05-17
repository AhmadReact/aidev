import React from 'react'
import Heading from './Heading'
import { Button } from '@mui/material'
import ChatButton from './ChatButton'

const SearchHistory = () => {
  return (
    <div className='w-[800px] border-[1px] border-solid border-b-gray-200 p-[15px] mt-[20px] rounded'>
      <h2 className='font-semibold'>Search History</h2>

        <div className='flex justify-between my-5'>
        <Heading/>
      <ChatButton/>
        </div>
      
        <div className='flex justify-between my-5'>
        <Heading/>
      <ChatButton/>
        </div>
      
        <div className='flex justify-between my-5'>
        <Heading/>
      <ChatButton/>
        </div>
      
        <div className='flex justify-between my-5'>
        <Heading/>
      <ChatButton/>
        </div>
      

        <div className='flex justify-center border-t-[1px] border-t-gray-200 pt-4 mb-1 mt-8'>
        <button className='border-[1px] bg-[#EDEDED] rounded-3xl text-[#737679] h-fit px-[10px] py-[3px]'>
       Clear Chat History
    </button>
        </div>

        </div>
  )
}

export default SearchHistory
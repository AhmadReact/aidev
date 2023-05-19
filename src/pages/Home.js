import React from 'react'
import Sidebar from '../component/sidebar/Sidebar'
import Navbar from '../component/navbar/Navbar'
import SearchHistory from '../component/searchhistory/SearchHistory'
import MyChat from '../component/chat/Chat'

const Home = () => {


  return (
        <div className='flex'>


                <Sidebar/>
                <div>
                <Navbar />
                <div className='flex flex-col items-center  mt-[20px]'>
                  <div>
                <h1 className='text-lg font-semibold'>Get answers in a seconds</h1>
        <p className='text-sm'>Create and complete tasks using boards</p>
                <SearchHistory/>
                </div>
              <MyChat/>
                </div>
                </div>
        </div>


  )
}

export default Home
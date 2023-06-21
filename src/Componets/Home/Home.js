import React from 'react'
import WelcomeContent from './WelcomeContent'
import Sliders from './Sliders'
import Cards from './Cards'
const Home = () => {
  return (
    <>
    
    <div className='relative bg-[#FFFFF7] h-auto  max-w[1024] mx-auto sm:px-8 md:px-8 lg:px-10 py-16 sm:py-12 md:py-8 flex flex-col'>
        <WelcomeContent/>
        <Sliders/>
        <Cards/> 
    </div>
    </>
  )
}

export default Home
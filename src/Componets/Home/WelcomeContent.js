import React from 'react'
import { Input } from "@material-tailwind/react";
const WelcomeContent = () => {
  return (
    <div className='grid grid-cols-1 gap-4'>
        <div className='w-full flex flex-col items-center justify-center py-10 '>
            <h2 className='w-full text-center font-bold text-6xl sm:text-5xl mb-8'>Best way to grow your local business </h2>
            <p className='sm:w-[100%] lg:w-[50%]  text-center text-2xl mb-8'>Artificial Intelligence powered easy-to-use tools to get more customers & give them a better experience</p>
            <div className=" sm:w-[100%] lg:w-[50%]">
                <form className='text-center'>
                    <Input size="lg" label="Enter Your Email" type='email' required/>
                    <button className="mt-5 bg-[#23297a] hover:bg-[#FFFFFF] hover:-translate-y-0.5 text-white hover:text-[#000000]  py-2 px-4 border border-[#23297a] rounded duration-200">
                        Get Demo
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default WelcomeContent
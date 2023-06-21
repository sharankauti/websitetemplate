import React from 'react'
import { Carousel} from "@material-tailwind/react";
import  slider1  from '../../Assets/slider1.png'
import  slider2  from '../../Assets/slider2.png'
import  slider3  from '../../Assets/slider3.png'
const Sliders = () => {
  return (
    <div className='grid grid-cols-1 gap-4'>
        <div className='py-10'>
        <div className='w-full text-center mb-5'>
            <h3 className='text-5xl sm:text-4xl font-bold text-[#000000] mb-4'>Expert Insights and Resources</h3>
            <p className='text-2xl text-[#808080]'>Get the latest business intelligence relevant to your industry, designed to help you grow.</p>
        </div>
        <div className='w-full'>
            <Carousel transition={{ duration: 1 }} className="rounded-xl">
                <div className='relative h-full w-full'>
                    <img
                            src={slider1}
                            alt="first"
                            className="h-full w-full object-cover"
                    />
                    <div className='absolute inset-0 grid h-full w-full place-items-center'>
                        <div className='w-3/4 text-center md:w-2/4'>
                            <p className='text-2xl text-[#FFFFFF] font-semibold'>Google My Business Basics: How to get more customers from GMB.</p>
                        </div>
                    </div>
                </div>
                <div className='relative h-full w-full'>
                    <img
                            src={slider2}
                            alt="second"
                            className="h-full w-full object-cover"
                    />
                    <div className='absolute inset-0 grid h-full w-full place-items-center'>
                        <div className='w-3/4 text-center md:w-2/4'>
                            <p className='text-2xl text-[#FFFFFF] font-semibold'>How to use Google's Business Messaging tool to get new customers</p>
                        </div>
                    </div>
                </div>
                <div className='relative h-full w-full'>
                    <img
                            src={slider3}
                            alt="third"
                            className="h-full w-full object-cover"
                    />
                    <div className='absolute inset-0 grid h-full w-full place-items-center'>
                        <div className='w-3/4 text-center md:w-2/4'>
                            <p className='text-2xl text-[#FFFFFF] font-semibold'>6 Ways to Increase Your Website Traffic and Leads</p>
                        </div>
                    </div>
                </div>    
            </Carousel>
        </div>
        </div>
       
    </div>
  )
}

export default Sliders
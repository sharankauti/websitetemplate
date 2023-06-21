import React from 'react'
import footerlogo from '../../Assets/footerlogo.png'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='relative  w-full h-auto px-4 py-6 bg-[#242124]'> 
        <footer className='flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 sm:px-0 md:px-4 lg:px-10  text-center md:justify-between'>
            <div>
            <Link to="/">
                <img src={footerlogo} alt='logo' style={{width:'150px',height:'auto'}} />
            </Link>
            </div>
           
            <ul className='flex flex-wrap items-center gap-y-2 gap-x-8'>
            <li className='text-[#FFFFFF] font-normal  hover:font-medium hover:-translate-y-0.5 duration-100'>
                    <Link to="/">Products</Link>
                </li>
                <li className='text-[#FFFFFF] font-normal hover:font-medium hover:-translate-y-0.5 duration-100'>
                    <Link to="/">Solution</Link>
                </li>
                <li className='text-[#FFFFFF] font-normal hover:font-medium hover:-translate-y-0.5 duration-100'>
                <Link to="/">Support</Link>
                </li>
                <li className='text-[#FFFFFF] font-normal hover:font-medium hover:-translate-y-0.5 duration-100'>
                    <Link to="/">Pricing</Link>
                </li>
                <li className='text-[#FFFFFF] font-normal hover:font-medium hover:-translate-y-0.5 duration-100'>
                    <Link to="/">Resources</Link>
                </li>
            </ul>
        </footer>
    </div>
  )
}

export default Footer
import React,{useState} from 'react'
import Logo from '../../Assets/Logo.svg'
import {HiMenuAlt1} from 'react-icons/hi'
import {MdOutlineClose} from 'react-icons/md'

import {FaLinkedin,FaFacebook,FaInstagram,FaTwitter} from 'react-icons/fa'
import {AiOutlineMail,AiFillHome,AiOutlineOrderedList,AiOutlineContacts} from 'react-icons/ai'
import {FcAbout} from 'react-icons/fc'
import {FiUserPlus} from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { Button } from "@material-tailwind/react";
const Navbar = () => {
    const navigate = useNavigate();
    const iconStyles = {color:'#FFFFFF',fontSize:'1.6rem'}
    const hamburgerstyle = {color:'#000000',fontSize:'1.6rem'}
    const [toggle,setToggle] = useState(false);
    const handleToggler = ()=>{
        setToggle(!toggle)
        const Body = document.getElementsByTagName('body')[0];
        console.log(Body)
        Body.style.position = Body.style.position === 'static' ? Body.style.position = 'fixed' : Body.style.position = 'static'
    }
    const handleClick = ()=>{
        navigate('/login')
        setToggle(!toggle)
    }
  return (
    <div  className='relative w-full h-[60px] flex justify-between items-center px-4 bg-[#f5f5f5] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]'>
        <div className='logo'>
            <Link to="/">
                <img src={Logo} alt='logo' style={{width:'150px',height:'auto'}} />
            </Link>
        </div>
        {/* desktop menu */}
            <ul className='hidden lg:flex items-center'>
                <li className='text-[#000000] hover:text-[#000080] hover:font-medium hover:translate-x-0.5  duration-100'>
                    <Link to="/">Products</Link>
                </li>
                <li className='text-[#000000] hover:text-[#000080] hover:font-medium hover:translate-x-0.5 duration-100'>
                    <Link to="/">Solution</Link>
                </li>
                <li className='text-[#000000] hover:text-[#000080] hover:font-medium hover:translate-x-0.5 duration-100'>
                <Link to="/">Support</Link>
                </li>
                <li className='text-[#000000] hover:text-[#000080] hover:font-medium hover:translate-x-0.5 duration-100'>
                    <Link to="/">Pricing</Link>
                </li>
                <li className='text-[#000000] hover:text-[#000080] hover:font-medium hover:translate-x-0.5 duration-100'>
                    <Link to="/">Resources</Link>
                </li>
               
                <li>
                    <button onClick={handleClick} className="bg-[#FFFFFF] hover:bg-[#23297a] hover:-translate-y-0.5 text-[#000] hover:text-white py-2 px-4 border border-[#23297a] hover:border-transparent rounded duration-200">
                        Login
                    </button>
                </li>
                <Link to="/">
                    <li>
                        <button  className="bg-[#23297a] hover:bg-[#FFFFFF] hover:-translate-y-0.5 text-white hover:text-[#000000]  py-2 px-4 border border-[#23297a] rounded duration-200">
                            Get Started
                        </button>
                    </li>
                </Link>
            </ul>
        {/* hamburger */}
        <div className='lg:hidden z-40' onClick={handleToggler}>
            {!toggle ? <HiMenuAlt1 style={hamburgerstyle}/> :<MdOutlineClose style={iconStyles}/>}   
        </div>
        {/* mobile menu */}
        {toggle && <ul className='pt-8 fixed overflow-hidden top-0 left-0 h-[100%] w-full bg-[#101820] flex flex-col z-30'>
            <li className='p-4 w-[80%] flex flex-row items-center justify-start text-left text-white text-2xl' onClick={handleToggler}>
                
                <Link to="/">Products</Link>
            </li>
            <li className='p-4 w-[80%] flex flex-row items-center justify-start text-left text-white text-2xl' onClick={handleToggler}>
               
                <Link to="/">Solution</Link>
            </li>
            <li className='p-4 w-[80%] flex flex-row items-center justify-start text-left text-white text-2xl' onClick={handleToggler}>
               
                <Link to="/">Support</Link>
            </li>
            <li className='p-4 w-[80%] flex flex-row items-center justify-start text-left text-white text-2xl' onClick={handleToggler}>
                
                <Link to="/">Pricing</Link>
            </li>
            <li className='p-4 w-[80%] flex flex-row items-center justify-start text-left text-white text-2xl' onClick={handleToggler}>
                
                <Link to="/">Resources</Link>
            </li>
            <li className='flex flex-row align-middle'>
                <button onClick={handleClick} className="mr-4 bg-[#FFFFFF] hover:bg-[#23297a] text-[#000] hover:text-white py-2 px-4 border border-[#23297a] hover:border-transparent rounded">
                    Login
                </button>
                <button onClick={handleToggler} className="bg-[#23297a] hover:bg-[#FFFFFF] text-white hover:text-[#000000]  py-2 px-4 border border-[#23297a] rounded">
                    Get Started
                </button>
            </li>
        
        </ul>}

        {/* social icons */}
        <div className='hidden fixed md:flex flex-col top-[35%]  right-0 z-10'>
            <ul>
               
                <li className='relative bg-[#0165E1] rounded-s-lg w-[120px] h-[40px] flex justify-between items-center right-[-75px] hover:right-[0px]  duration-200'>
                        <a href='https://www.facebook.com/SalesCaptainHQ/' target='_blank' className='w-full  text-sm text-white flex justify-between items-center'> 
                            <FaFacebook style={iconStyles}/>Facebook
                        </a>
                </li>
                <li className='relative bg-[#1D9BF0] rounded-s-lg  w-[120px] h-[40px] flex justify-between items-center right-[-75px] hover:right-[0px] duration-200'>
                        <a href='https://twitter.com/SalesCaptainInc' target='_blank' className='w-full  text-sm text-white flex justify-between items-center'> 
                            <FaTwitter style={iconStyles}/>Twitter
                        </a>
                </li>
                <li className='relative bg-[#E1306C] rounded-s-lg  w-[120px] h-[40px] flex justify-between items-center right-[-75px] hover:right-[0px] duration-200'>
                        <a href='https://www.instagram.com/salescaptainhq/' target='_blank' className='w-full  text-sm text-white flex justify-between items-center'> 
                            <FaInstagram style={iconStyles}/>Instagram
                        </a>
                </li>
               
                <li className='relative bg-[#0A66C2] rounded-s-lg  w-[120px] h-[40px] flex justify-between items-center right-[-75px] hover:right-[0px] duration-200'>
                        <a href='https://www.linkedin.com/company/salescaptainhq' target='_blank' className='w-full  text-sm text-white flex justify-between items-center'>
                            <FaLinkedin style={iconStyles}/>Linkedin
                        </a>
                </li>
                
            </ul>
        </div>

    </div>
  )
}

export default Navbar
import React,{useState} from 'react'
import Logo from '../Assets/logo.png'
import {HiMenuAlt1} from 'react-icons/hi'
import {MdOutlineClose} from 'react-icons/md'
import {FaUser} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'
import {AiOutlineMail,AiFillHome,AiOutlineOrderedList,AiOutlineContacts} from 'react-icons/ai'
import {FcAbout} from 'react-icons/fc'
import {FiUserPlus} from 'react-icons/fi'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const iconStyles = {color:'#FFFFFF',fontSize:'1.6rem'}
    const [toggle,setToggle] = useState(false);
    const handleToggler = ()=>{
        setToggle(!toggle)
    }
  return (
    <div className='relative w-full h-[60px] flex justify-between items-center px-4 bg-[#8A307F]'>
        <div className='logo'>
            <img src={Logo} alt='logo' style={{width:'50px'}} />
        </div>
        {/* desktop menu */}
            <ul className='hidden sm:flex items-center'>
                <li className='text-white'>
                    <Link to="/">Home</Link>
                </li>
                <li className='text-white'>
                    <Link to="/about">About</Link>
                </li>
                <li className='text-white'>
                   <Link to="/skills">Skills</Link>
                </li>
                <li className='text-white'>
                    <Link to="/experiance">Experiance</Link>
                </li>
                <li className='text-white'>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        {/* hamburger */}
        <div className='sm:hidden z-10' onClick={handleToggler}>
            {!toggle ? <HiMenuAlt1 style={iconStyles}/> :<MdOutlineClose style={iconStyles}/>}   
        </div>
        {/* mobile menu */}
        {toggle && <ul className='pt-8 absolute top-0 left-0 h-screen w-full bg-[#101820] flex flex-col'>
            <li className='p-4 w-[80%] flex flex-row align-middle justify-start text-left text-white text-2xl' onClick={handleToggler}>
                <AiFillHome className='mr-4' style={iconStyles}/>
                <Link to="/">Home</Link>
            </li>
            <li className='p-4 w-[80%] flex flex-row align-middle justify-start text-left text-white text-2xl' onClick={handleToggler}>
                <FcAbout className='mr-4' style={iconStyles}/>
                <Link to="/about">About</Link>
            </li>
            <li className='p-4 w-[80%] flex flex-row align-middle justify-start text-left text-white text-2xl' onClick={handleToggler}>
                <AiOutlineOrderedList className='mr-4' style={iconStyles}/>
                <Link to="/skills">Skills</Link>
            </li>
            <li className='p-4 w-[80%] flex flex-row align-middle justify-start text-left text-white text-2xl' onClick={handleToggler}>
                <FiUserPlus className='mr-4' style={iconStyles}/>
                <Link to="/experiance">Experiance</Link>
            </li>
            <li className='p-4 w-[80%] flex flex-row align-middle justify-start text-left text-white text-2xl' onClick={handleToggler}>
                <AiOutlineContacts className='mr-4' style={iconStyles}/>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>}

        {/* social icons */}
        <div className='hidden fixed md:flex flex-col top-[35%]  right-0 z-10'>
            <ul>
                <li className='relative bg-blue-600  w-[120px] h-[40px] flex justify-between items-center right-[-75px] hover:right-[0px] duration-200'>
                        <a href='#' className='w-full font-semibold text-sm text-white flex justify-between items-center'>
                            <FaLinkedin style={iconStyles}/>Linkedin
                        </a>
                </li>
                <li className='relative bg-[#6fc2b0]  w-[120px] h-[40px] flex justify-between items-center right-[-75px] hover:right-[0px]  duration-200'>
                        <a href='#' className='w-full font-semibold text-sm text-white flex justify-between items-center'> 
                            <AiOutlineMail style={iconStyles}/>Email
                        </a>
                </li>
                <li className='relative bg-[#333333]  w-[120px] h-[40px] flex justify-between items-center right-[-75px] hover:right-[0px] duration-200'>
                        <a href='#' className='w-full font-semibold text-sm text-white flex justify-between items-center'> 
                            <FaGithub style={iconStyles}/>Github
                        </a>
                </li>
                <li className='relative bg-[#565f69]  w-[120px] h-[40px] flex justify-between items-center right-[-75px] hover:right-[0px] duration-200'>
                        <a href='#' className='w-full font-semibold text-sm text-white flex justify-between items-center'> 
                            <FaUser style={iconStyles}/>Resume
                        </a>
                </li>
                
            </ul>
        </div>

    </div>
  )
}

export default Navbar
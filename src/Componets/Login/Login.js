import React,{useState} from 'react'
import Logo from '../../Assets/Logo.svg'
import {
  Input,
  
} from "@material-tailwind/react";
import { useSnackbar } from 'notistack'
const Login = () => {
  const [user,setUser] = useState("")
  const [password,setPassword] = useState("")
  const { enqueueSnackbar} = useSnackbar()
  


  const handleForm = (e)=>{
      e.preventDefault();
      if (user.length <= 0 || password.length <=0) {
        enqueueSnackbar('Invalid Inputs',{variant:'error'})
   
      }
  }




  return (
    <div className='relative bg-[#FFFFF7] h-[100%]  max-w[1024] mx-auto sm:px-8 md:px-8 lg:px-10  sm:py-12 md:py-8 lg:py-16 flex flex-col items-center'>
        <div className=''>
            <img className='mb-5' src={Logo} alt='logo' style={{width:'150px',height:'auto'}} />
            <h2 className='text-4xl text-center text-[#000000]'>Login</h2>
        </div>
        <form  onSubmit={handleForm} className='my-10  sm:w-[100%] md:w-[90] lg:w-[60%]'>
          <div className='mb-8 flex flex-col gap-6'> 
              <Input value={user} onChange={(e)=> setUser(e.target.value)} size="lg" label="username" />
              
              <Input value={password} onChange={(e)=> setPassword(e.target.value)} size="lg" label="Password" />
              <button  className="bg-[#23297a] hover:bg-[#FFFFFF] hover:-translate-y-0.5 text-white hover:text-[#000000]  py-2 px-4 border border-[#23297a] rounded duration-200">
                      Login
            </button>
          </div>
        
        </form>
        
    </div>
    
  )
}

export default Login
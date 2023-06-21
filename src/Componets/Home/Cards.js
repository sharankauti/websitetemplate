import React from 'react'
import {
    Card,
    CardBody,
  } from "@material-tailwind/react";
import card1 from '../../Assets/card1.png'
import card2 from '../../Assets/card2.png'
import card3 from '../../Assets/card3.png'
import card4 from '../../Assets/card4.png'
const Cards = () => {
  return (
    <div className='grid grid-cols-1 w-full place-content-center gap-4'>
       
            <Card className='drop-shadow-2xl mb-6 cursor-pointer hover:translate-x-1.5 duration-200'> 
                <CardBody>
                    <div className='grid sm:grid-cols-1 lg:grid-cols-2 gap-6'>
                        <div className='sm:order-last md:order-last lg:order-first'>
                            <h4 className='text-3xl text-[#000000] font-semibold mb-5'>Get discovered by more customers</h4>
                            <p className='text-1xl text-[#808080] mb-5'>Higher reviews & better listings make
                                you more discoverable to people
                                organically</p>
                                <button className="bg-[#23297a] hover:bg-[#FFFFFF] hover:-translate-y-0.5 text-white hover:text-[#000000]  py-2 px-4 border border-[#23297a] rounded duration-200">
                                    Get Started
                                </button>
                        </div>
                        <div>
                            <img 
                                src={card1}
                                alt="image" 
                                className="w-full h-[250px] object-cover rounded"
                            />
                        </div>
                    </div>
                  
                   
                </CardBody>
            </Card>
            <Card className='drop-shadow-2xl mb-6 cursor-pointer hover:-translate-x-1.5 duration-200'> 
                <CardBody>
                    <div className='grid sm:grid-cols-1 lg:grid-cols-2 gap-6'>
                        <div className='sm:order-first md:order-first lg:order-first'>
                            <img 
                                src={card2} 
                                alt="image" 
                                className="w-full h-[250px] object-cover rounded"
                            />
                        </div>
                        <div>
                            <h4 className='text-3xl text-[#000000] font-semibold mb-5'>Faster conversion with our Captain AI</h4>
                            <p className='text-1xl text-[#808080] mb-5'>Automate web chat, messaging, reviews
& feedbacks with our AI assistant</p>
                                <button className="bg-[#23297a] hover:bg-[#FFFFFF] hover:-translate-y-0.5 text-white hover:text-[#000000]  py-2 px-4 border border-[#23297a] rounded duration-200">
                                    Get Started
                                </button>
                        </div>
                    </div>
                  
                   
                </CardBody>
            </Card>
            <Card className='drop-shadow-2xl mb-6 cursor-pointer hover:translate-x-1.5 duration-200'> 
                <CardBody>
                    <div className='grid sm:grid-cols-1 lg:grid-cols-2 gap-6'>
                    <div className='sm:order-last md:order-last lg:order-first'>
                            <h4 className='text-3xl text-[#000000] font-semibold mb-5'>Marketing that works for you</h4>
                            <p className='text-1xl text-[#808080] mb-5'>Run highly effective & targeted
campaigns on text & emails and put
your customer data to use</p>
                                <button className="bg-[#23297a] hover:bg-[#FFFFFF] hover:-translate-y-0.5 text-white hover:text-[#000000]  py-2 px-4 border border-[#23297a] rounded duration-200">
                                    Get Started
                                </button>
                        </div>
                        <div>
                            <img 
                                src={card3} 
                                alt="image" 
                                className="w-full h-[250px] object-cover rounded"
                            />
                        </div>
                       
                    </div>
                  
                   
                </CardBody>
            </Card>
            <Card className='drop-shadow-2xl mb-6 cursor-pointer hover:-translate-x-1.5 duration-200'> 
                <CardBody>
                    <div className='grid sm:grid-cols-1 lg:grid-cols-2 gap-6'>
                        <div className='sm:order-first md:order-first lg:order-first'>
                            <img 
                                src={card4} 
                                alt="image" 
                                className="w-full h-[250px] object-cover rounded"
                            />
                        </div>
                        <div>
                            <h4 className='text-3xl text-[#000000] font-semibold mb-5'>Training & Support</h4>
                            <p className='text-1xl text-[#808080] mb-5'>Talk to a dedicated relationship manager
to get the help you need. No wait time, a
dedicated line just for you.</p>
                                <button className="bg-[#23297a] hover:bg-[#FFFFFF] hover:-translate-y-0.5 text-white hover:text-[#000000]  py-2 px-4 border border-[#23297a] rounded duration-200">
                                    Get Started
                                </button>
                        </div>
                    </div>
                  
                   
                </CardBody>
            </Card>
     
    </div>
  )
}

export default Cards
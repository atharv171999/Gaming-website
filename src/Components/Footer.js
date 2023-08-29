import React from 'react'
import '../App.css'
import Logo from '../Images/gamex.svg'
import Cardimg from '../Images/footer-bottom-img.png'


const Footer = () => {
  return (
    <footer>
        <div>
            <div className='footer  text-white'>
                <div className='flex flex-col lg:flex-row lg:w-[60rem] xl:w-[76rem] lg:mx-auto lg:justify-between pt-[50px]  items-center '>
                    <a href="/">
                        <img src={Logo} alt="" />
                    </a>
                    <div className='flex flex-col md:flex-row md:justify-between md:items-start items-center mt-[50px] lg:w-[47rem] xl:w-[60rem]  px-9 lg:px-0' >
                        <ul className='flex flex-wrap justify-center md:justify-start xl:justify-center text-[15px] mb-[20px] gap-x-12 gap-y-2 lg:w-[31rem] xl:w-[100%] font-bold '>
                            <li className=' -tracking-[1px]' >HOME</li>
                            <li className=' -tracking-[1px]' >ABOUT</li>
                            <li className=' -tracking-[1px]' >TOURNAMENT</li>
                            <li className=' -tracking-[1px]' >TEAM</li>
                            <li className=' -tracking-[1px]' >GEARS</li>
                            <li className=' -tracking-[1px]' >CONTACT</li>
                        </ul>
                        <div className=' relative md:w-[35%] lg:w-[30%] xl:w-[25rem]    '>
                            <input type="text" placeholder='Find Here Now' className='input-footer w-[100%] bg-[#1b1320] py-[12px] px-[25px] ' />
                            <button className='btn-footer absolute right-0.5 bg-[#ff8605] py-[12px] px-[25px] '>0</button>
                        </div>
                    </div>
                </div>
                <hr className='w-[92%] xl:w-[76rem]  h-1 mx-auto mt-8 border-[1px] border-[#80808033]' />
                <div className=' items-center xl:w-[82rem] xl:mx-auto flex flex-col md:flex-row md:justify-between mt-[50px] pb-[50px] lg:pb-[6rem] gap-y-2 px-9 lg:px-14'>
                    <ul className='flex flex-wrap text-[12px] gap-x-6 gap-y-2 font-semibold justify-center'>
                        <li>FAQ</li>
                        <li>HELP</li>
                        <li>TERMS OF USE</li>
                        <li>PRIVACY</li>
                    </ul>
                    <ul className=' flex flex-wrap gap-x-4'>
                        <li>0</li>
                        <li>0</li>
                        <li>0</li>
                        <li>0</li>
                    </ul>
                </div>
            </div>
        </div>
        <div>
            <div className=' bg-[#1b1320] flex flex-col md:flex-row md:gap-x-7 lg:gap-x-[31rem] xl:gap-x-[33.5rem] md:justify-center md:items-center gap-y-5 py-[30px] md:mx-auto    '>
                <p className=' text-[14px] text-white -tracking-[1px] font-semibold text-center '>COPYRIGHT © 2022 <span className='text-[#ff8605]'>CODEWITHSADEE</span>. ALL RIGHTS RESERVED</p>
                <figure className=' '>
                    <img className=' mx-auto'  src={Cardimg} alt="" />
                </figure>
            </div>
        </div>
    </footer>
  )
}

export default Footer
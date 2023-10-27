import React, { Component } from 'react';
import CoinexLogo from '../assets/CoinexLogo.png';
import { useDispatch, useSelector } from 'react-redux';
import { languages } from '../data/languages';





function NavbarApp() {


    const language = useSelector(state => state.language);



    return ( 
        <div className='flex border-[1px] p-2 border-[#212329] justify-between w-full h-12 '>
           <div className='flex'> <img className='w-8 h-8' src={CoinexLogo} alt="" />
            <span className='font-bold text-lg text-white'>APE/USDT</span>
            <span className='font-semibold text-xl text-[#0EAD98]'>0.034090 </span>
                </div>
                <div className='flex w-7/12 gap-8'>
            <p className='flex flex-col ml-4 text-xs font-bold text-[#909399]'>24H change
                <span className='text-[#0EAD98]'>
                    {languages[language].hchange}
                </span>
            </p>
            <p className='flex flex-col text-xs font-bold text-[#909399]'>24H Highest
                <span className='text-[#BABDC2]'>
                0.033209
                </span>
            </p>
            <p className='flex flex-col text-xs font-bold text-[#909399]'>24H Lowest
                <span className='text-[#BABDC2]'>
                0.033209
                </span>
            </p>
            <p className='flex flex-col text-xs font-bold text-[#909399]'>24H Bolume(Cet)
                <span className='text-[#BABDC2]'>
                    794.33k
                </span>
            </p>
            <p className='flex flex-col text-xs font-bold text-[#909399]'>24H Value(USDT)
                <span className='text-[#BABDC2]'>
                26.57K
                </span>
            </p>

            </div>
            <p className='text-[#0EAD98] text-end text-sm font-bold ml-10'>About ApeCoin</p>
        </div>
     );
}

export default NavbarApp;
import React, { Component } from 'react';
import { useState } from 'react';
import starBox from '../assets/star-svgrepo-com.svg'
import { useDispatch, useSelector } from 'react-redux';
import { languages } from '../data/languages';


function MarketLev() {




    const dispatch = useDispatch();
    const language = useSelector(state => state.language);


    console.log("langugafaklsdfjsadf",language)







    const [clickedIndex, setClickedIndex] = useState(null);

    const onItemClicked = (item , index) => {
        setClickedIndex(index);
        dispatch({ type: 'SET_LANGUAGE', payload: item });

    };

   
    
    const Marketing = Object.entries(languages).map(([key, language] , index) => {

        return (
            <div key={index}
                onClick={() => onItemClicked(key , index)}
                className={`Market-box cursor-pointer flex py-[5px] px-2 justify-between ${index === clickedIndex ? 'left-box' : ''}`} >


                <div className='flex items-center' >
                    <span>
                        <img className='w-3 h-3' src={starBox} alt="" />
                    </span>
                    <span className='text-xs ml-1 font-semibold text-[#F9FBFE]'>{key}</span>
                    <span className='text-xs font-bold text-[#5A5E66] '>/USDT</span>
                    <span className='text-xs font-bold pl-2 text-[#0EAD98]'>{language.leverage}x</span>

                </div>


                {/* <div>
                            
                            
                            <span className='text-xs font-medium text-[#F9FBFE]'>{item.name}</span>
                            <span className='text-xs font-normal text-[#5A5E66] '>/USDT</span>
                            <span className='text-xs font-bold pl-2 text-[#0EAD98]'>{item.leverage}x</span>
                            
                        </div> */}



                <span className='text-[#DB5641] font-medium text-xs'>{language.price}</span>
                <span className='text-[#DB5641] font-medium text-xs'>{language.hchange}</span>
            </div>
        )
    })



    return (
        <>
            <form action="" className='flex h-7 relative px-3' id="search_form">
                <button className='absolute top-[3px] left-4'>
                    <svg width="20" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.6">
                            <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#585768" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            </path>
                            <path d="M20.9984 20.9999L16.6484 16.6499" stroke="#585768" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                        </g>
                    </svg>
                </button>
                <input type="text" className='search-box w-full outline-none bg-[#2C3038] pl-6 rounded-md' name="search" value="" id="search" placeholder="search" />
            </form>

            <div className='flex gap-3 px-3'>
                <button className='p-1 text-[#909399] bg-[#23272E] rounded-lg  w-14 text-[12px]'>
                    All    </button>
                <button className='p-1 text-[#909399] bg-[#23272E] rounded-lg  w-14 text-[12px]'>
                    AMM    </button>
                <button className='p-1 text-[#909399] bg-[#23272E] rounded-lg  w-14 text-[12px]'>
                    Margin    </button>
                <button className='p-1 text-[#909399] bg-[#23272E] rounded-lg  w-14 text-[12px]'>
                    MEME
                </button>
            </div>
            <div className='flex items-center pl-4 gap-3'>
                <button className='flex justify-center items-center w-6 h-6 bg-[#2C3038] rounded-md'>
                    <img className='w-[18px] h-[18px]' src={starBox} alt="" />
                </button>
                <button className='p-1 text-[#15A38F] border-b-[2px] border-[#15A38F] w-10 text-xs font-bold'>
                    USDT
                </button>
                <button className='p-1 text-[#909399] rounded-lg  w-10 text-xs font-bold'>
                    USDC
                </button>
                <button className='p-1 text-[#909399] rounded-lg  w-10 text-xs font-bold'>
                    BTC
                </button>
            </div>

            <div className='border-r-[1px] border-[#212329]'>
                <div className='flex justify-between px-5'>
                    <span className='text-[#909399] w-4/12 text-xs font-bold'>Market</span>
                    <span className='text-[#909399] text-xs font-bold pr-5'>Price</span>
                    <span className='text-[#909399] text-xs font-bold'>24H Change </span>

                </div>

                <div className='scroll-Market h-[70vh] border-b-[1px] border-[#212329]'>
                    {Marketing}
                </div>

            </div>
        </>
    );
}

export default MarketLev;
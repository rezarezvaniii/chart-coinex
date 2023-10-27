import React, { Component } from 'react';
import ProgressFirst from './progressFirst';
import { useState } from 'react';


function Sellask() {

    const seller = [
        { price: 0.033339, amount: 999.000, total: "79.70k ", persont: 12 },
        { price: 0.033339, amount: 999.000, total: "79.70k ", persont: 95 },
        { price: 0.033339, amount: 999.000, total: "79.70k ", persont: 25 },
        { price: 0.033339, amount: 999.000, total: "79.70k ", persont: 65 },
        { price: 0.033339, amount: 999.000, total: "79.70k ", persont: 45 },
        { price: 0.033339, amount: 999.000, total: "79.70k ", persont: 54 },
        { price: 0.033339, amount: 999.000, total: "79.70k ", persont: 24 },
        { price: 0.033339, amount: 999.000, total: "79.70k ", persont: 75 },
        { price: 0.033339, amount: 999.000, total: "79.70k ", persont: 85 },
        { price: 0.033339, amount: 999.000, total: "79.70k ", persont: 63 },
        { price: 0.033339, amount: 999.000, total: "79.70k ", persont: 3 },
        { price: 0.033339, amount: 999.000, total: "79.70k ", persont: 47 },
        { price: 0.033339, amount: 999.000, total: "79.70k ", persont: 4 },
        { price: 0.033339, amount: 999.000, total: "79.70k ", persont: 24 },
        { price: 0.033339, amount: 999.000, total: "79.70k ", persont: 10 },
        { price: 0.033339, amount: 999.000, total: "79.70k ", persont: 35 },
        { price: 0.033339, amount: 999.000, total: "79.70k ", persont: 56 },
        { price: 0.033339, amount: 999.000, total: "79.70k ", persont: 32 },
        { price: 0.033339, amount: 999.000, total: "79.70k ", persont: 42 },
        { price: 0.033339, amount: 999.000, total: "79.70k ", persont: 25 },
        { price: 0.033339, amount: 999.000, total: "79.70k ", persont: 25 },
        { price: 0.033339, amount: 999.000, total: "79.70k ", persont: 25 },
        { price: 0.033339, amount: 999.000, total: "79.70k ", persont: 25 },

    ]


    const [indexHover, setIndexHover] = useState(24);

    const handleMouseEnter = (index) => {
        //   setIsHovered(true);
        setIndexHover(index)
    };

    const handleMouseLeave = () => {
        setIndexHover(24);
    };


    const sellask = seller.map((items, index) => {


        return (

            <div className='relative cursor-pointer flex py-[5px] px-5 justify-between'>
                <div onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                    className={`z-40 absolute right-0 top-0 h-full w-full ${index >= indexHover ? "hover-full" : ""
                        }`}></div>


                <div style={{ width: `${items.persont}%` }} className='absolute z-0 right-0 top-0 h-full w-1/2 bg-[#241D20]'></div>
                <p onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave} className='text-xs font-medium text-[#DB5641] z-50'>{items.price}</p>
                <span onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave} className='text-[#B0B2B7] text-xs font-medium z-10'>{items.amount}</span>
                <span onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave} className='text-[#B0B2B7] text-xs font-medium z-10'>{items.total}</span>
            </div>


        )
    })




    return (<>
        <p className='flex ml-4 gap-4'>
            <span className='font-bold text-base text-[#85888E]'>Bid-Ask</span>
            <span className='font-bold text-base text-[#85888E]'>AMM</span>
        </p>

        <div className="w-full flex justify-center"><ProgressFirst done={50} percent={50} /></div>

        <div>
            <div className='flex justify-between px-5'>
                <span className='text-[#909399] text-xs font-bold'>Price(USDT)</span>
                <span className='text-[#909399] text-xs font-bold pr-5'>Amount(CET)</span>
                <span className='text-[#909399] text-xs font-bold'>Total</span>

            </div>

            <div className='Market-ask h-[55vh] border-[#909399] '>
                {sellask}
            </div>

        </div>





    </>

    );
}

export default Sellask;



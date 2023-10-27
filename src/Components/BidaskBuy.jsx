import React, { Component } from 'react';
import { useState } from 'react';


function Buyask() {



const buyer = [
    {prise:  0.033339, amount: 999.000 , total:"79.70k ", persont: 12},
    {prise:  0.033339, amount: 999.000 , total:"79.70k ", persont: 95},
    {prise:  0.033339, amount: 999.000 , total:"79.70k ", persont: 25},
    {prise:  0.033339, amount: 999.000 , total:"79.70k ", persont: 65},
    {prise:  0.033339, amount: 999.000 , total:"79.70k ", persont: 45},
    {prise:  0.033339, amount: 999.000 , total:"79.70k ", persont: 54},
    {prise:  0.033339, amount: 999.000 , total:"79.70k ", persont: 24},
    {prise:  0.033339, amount: 999.000 , total:"79.70k ", persont: 75},
    {prise:  0.033339, amount: 999.000 , total:"79.70k ", persont: 85},
    {prise:  0.033339, amount: 999.000 , total:"79.70k ", persont: 63},
    {prise:  0.033339, amount: 999.000 , total:"79.70k ", persont: 3 },
    {prise:  0.033339, amount: 999.000 , total:"79.70k ", persont: 47},
    {prise:  0.033339, amount: 999.000 , total:"79.70k ", persont: 4 },
    {prise:  0.033339, amount: 999.000 , total:"79.70k ", persont: 24},
    {prise:  0.033339, amount: 999.000 , total:"79.70k ", persont: 10},
    {prise:  0.033339, amount: 999.000 , total:"79.70k ", persont: 35},
    {prise:  0.033339, amount: 999.000 , total:"79.70k ", persont: 56},
    {prise:  0.033339, amount: 999.000 , total:"79.70k ", persont: 32},
    {prise:  0.033339, amount: 999.000 , total:"79.70k ", persont: 42},
    {prise:  0.033339, amount: 999.000 , total:"79.70k ", persont: 25},
    {prise:  0.033339, amount: 999.000 , total:"79.70k ", persont: 25},
    {prise:  0.033339, amount: 999.000 , total:"79.70k ", persont: 25},
    {prise:  0.033339, amount: 999.000 , total:"79.70k ", persont: 25},
    {prise:  0.033339, amount: 999.000 , total:"79.70k ", persont: 47},
    {prise:  0.033339, amount: 999.000 , total:"79.70k ", persont: 4 },
    {prise:  0.033339, amount: 999.000 , total:"79.70k ", persont: 24},
    {prise:  0.033339, amount: 999.000 , total:"79.70k ", persont: 10},
    {prise:  0.033339, amount: 999.000 , total:"79.70k ", persont: 35},
    {prise:  0.033339, amount: 999.000 , total:"79.70k ", persont: 56},
    {prise:  0.033339, amount: 999.000 , total:"79.70k ", persont: 32},
    {prise:  0.033339, amount: 999.000 , total:"79.70k ", persont: 42},
    {prise:  0.033339, amount: 999.000 , total:"79.70k ", persont: 25},
    {prise:  0.033339, amount: 999.000 , total:"79.70k ", persont: 25},
    {prise:  0.033339, amount: 999.000 , total:"79.70k ", persont: 25},
    {prise:  0.033339, amount: 999.000 , total:"79.70k ", persont: 25},

]


const [indexHover , setIndexHover] = useState(null);
   
    const handleMouseEnter = (index) => {
        //   setIsHovered(true);
        setIndexHover(index)
        };
        
      


const buyask = buyer.map((items , index)=>{
    return(
                        
                            <div className=' relative bg-[#181A1F] cursor-pointer h-8 flex py-[4px] px-5  justify-between'>
                                <div onMouseEnter={()=>handleMouseEnter(index)}
                                    onMouseLeave={()=>handleMouseEnter(-1)}
                                    className={`z-40 absolute right-0 top-0 h-full w-full ${
                                        index <= indexHover ? "hover-full" : "" 
                                    }`}></div>
                                <div style={{width: `${items.persont}%`}} className='absolute right-0 top-0 h-full w-1/2 bg-[#1A2226]'>
                                </div>
                                
                                <p onMouseEnter={()=>handleMouseEnter(index)}
                                    onMouseLeave={()=>handleMouseEnter(-1)} className='text-xs font-bold text-[#0EAD98] z-20'>{items.prise}</p>
                                <span onMouseEnter={()=>handleMouseEnter(index)}
                                    onMouseLeave={()=>handleMouseEnter(-1)} className='text-[#B0B2B7] text-xs font-bold z-20'>{items.amount}</span>
                                <span onMouseEnter={()=>handleMouseEnter(index)}
                                    onMouseLeave={()=>handleMouseEnter(-1)} className='text-[#B0B2B7] text-xs font-bold z-20'>{items.total}</span>
                            </div>

       
    )
})



    return ( 
        <>
        <div className='Market-ask'>
            <div className='flex items-center justify-between'>
        <p className='flex flex-col font-bold text-base py-[9px] px-2 text-[#0EAD98] '>0.0332983
                                <span className='text-xs font-medium text-[#909399]'>≈ 0.03298 USD</span>
                            </p>
            <p className='index-market text-xs font-medium h-6 text-[#909399]'>Index: 1665.56</p>
                </div >     
                       <div className='h-[55vh]'>
                                {buyask}

                       </div>
                    </div>
        </>
     );
}

export default Buyask;
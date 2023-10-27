import React, { Component } from 'react';

function LateExecution() {

    const DataLate=[
        {Price : 1.8118  , Amount : 226.01 , Time: "00:01:56"},
        {Price : 1.8118  , Amount : 226.01 , Time: "00:01:56"},
        {Price : 1.8118  , Amount : 226.01 , Time: "00:01:56"},
        {Price : 1.8118  , Amount : 226.01 , Time: "00:01:56"},
        {Price : 1.8118  , Amount : 226.01 , Time: "00:01:56"},
        {Price : 1.8118  , Amount : 226.01 , Time: "00:01:56"},
        {Price : 1.8118  , Amount : 226.01 , Time: "00:01:56"},
        {Price : 1.8118  , Amount : 226.01 , Time: "00:01:56"},
        {Price : 1.8118  , Amount : 226.01 , Time: "00:01:56"},
        {Price : 1.8118  , Amount : 226.01 , Time: "00:01:56"},
        {Price : 1.8118  , Amount : 226.01 , Time: "00:01:56"},
        {Price : 1.8118  , Amount : 226.01 , Time: "00:01:56"},
        {Price : 1.8118  , Amount : 226.01 , Time: "00:01:56"},
        {Price : 1.8118  , Amount : 226.01 , Time: "00:01:56"},
        {Price : 1.8118  , Amount : 226.01 , Time: "00:01:56"},
        {Price : 1.8118  , Amount : 226.01 , Time: "00:01:56"},
        {Price : 1.8118  , Amount : 226.01 , Time: "00:01:56"},
        {Price : 1.8118  , Amount : 226.01 , Time: "00:01:56"},
    ]
    const Latebox = DataLate.map((item , index)=>{
        return(
            <div className='Market-box cursor-pointer flex px-2 justify-between'>
                    
                            <div>
                                <span className='text-[#0EAD98] text-xs font-bold'>{item.Price}</span>
                            </div>
                        <span className='text-[#DB5641] text-xs font-normal '>{item.Amount}</span>
                        <span className='text-[#DB5641] text-xs font-normal '>{item.Time}</span>
                    </div>
        )
    })
    
    return (
        <>
        <div>
            <p className='text-white font-bold text-[16px]'>Latest Execution</p>
            
                <div className='flex px-2 justify-between'>
                            <p className='text-[#909399] text-xs font-bold'>price(USDT)</p>
                            <span className='text-[#909399] text-xs font-bold pr-5'>Amount(APE)</span>
                            <span className='text-[#909399] text-xs font-bold'>Time</span>
                    </div>

                <div className='scroll-Market h-[45vh] '>
                {Latebox}
                </div>

            </div>
        </>
);
}

export default LateExecution;
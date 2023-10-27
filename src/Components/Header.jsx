import React, { Component } from 'react';

function HeaderApp() {
    return (
        <header className='flex justify-between bg-[#181A1F] '>
            <div className='flex pl-2 gap-8 bg-p[#181A1F] items-center w-6/12 h-16'>
                <img className='w-28' src="https://www.coinex.com/assets/img/logo-white.svg?1" alt="" />
                <p className='cursor-pointer font-medium text-sm text-[#F4F6F9] capitalize'>Fiat</p>
                <p className='cursor-pointer font-medium text-sm text-[#F4F6F9] capitalize'>Markets</p>
                <p className='cursor-pointer font-medium text-sm text-[#F4F6F9] capitalize'>Exchange</p>
                <p className='cursor-pointer font-medium text-sm text-[#F4F6F9] capitalize'>Futures</p>
                <p className='cursor-pointer font-medium text-sm text-[#F4F6F9] capitalize'>Finance</p>
                <p className='cursor-pointer font-medium text-sm text-[#F4F6F9] capitalize'>Promotion</p>
                <p className='cursor-pointer font-medium text-sm text-[#F4F6F9] capitalize'>More</p>
            </div>

            <div className='flex bg-yel[#181A1F] justify-evenly flex-end gap-2 items-center w-3/12  h-16'>
                <span className='font-medium text-sm text-white'>Log In</span>
                <button className='w-24 rounded-md text-white font-semibold text-sm h-7 bg-[#0EAD98]'>sign Up</button>
                <span className='flex justify-evenly px-2 w-3/12 border-x-[1px] border-[#5A5E66]'> <svg width="20px" height="20px" viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 12L12 17M12 17L7 12M12 17V4M17 20H7" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

                    <svg width="20px" height="20px" viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 3V4M12 20V21M4 12H3M6.31412 6.31412L5.5 5.5M17.6859 6.31412L18.5 5.5M6.31412 17.69L5.5 18.5001M17.6859 17.69L18.5 18.5001M21 12H20M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width="20px" height="20px" viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z" /></svg>
            </div>

        </header>
    );
}

export default HeaderApp;
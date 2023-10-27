import React, { Component } from 'react';
import HeaderApp from './Header';
import MarketLev from './MarketLev';
import LateExecution from './LateExecution';
import NavbarApp from './NavbarApp';
import Sellask from './BidaskSell';
import Buyask from './BidaskBuy';
import TradingViewWidget from './ChartTradingview';
import Trading from './Trade'

function AppContainer() {


    



    return (
        <>

            <HeaderApp />

            <div className='flex'>

                <div className='w-[23%] bg-[#181A1F] pt-2 border-[#212329] border-t-[1px] border-r-[1px] flex flex-col gap-2'>
                    <MarketLev />
                    <div className='border-r-[1px] border-[#212329]'>
                        <LateExecution />
                    </div>
                </div>

                <div className='flex flex-col w-[77%] bg-[#181A1F]'>

                    <div>
                        <NavbarApp />
                    </div>
                    <div className='flex'>





                        <div className='w-[72%] bg-[#181A1F] h-screen'>
                            <TradingViewWidget />

                            <Trading/>
                        </div>









                        <div className='w-[28%] bg-[#181A1F] h-screen '>

                            <Sellask />


                            <Buyask />

                        </div>
                    </div>
                </div>

            </div>


        </>
    );
}

export default AppContainer;
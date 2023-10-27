import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import optional from "../assets/options-outline-svgrepo-com.svg"
function Trading() {




    return (
        <div className='p-5 flex flex-col gap-5'>
            <div>
                <p className='flex gap-1 text-[#909399] text-[12px] font-normal '>
                    <span className='index-market'>How to Trade Margin
                    </span>
                    ------- <span className='w-4 text-center font-semibold h-4 bg-[#393E47] text-[#909399] rounded-full'>1
                    </span>
                    Asset Transfer ------
                    <span className='w-4 text-center font-semibold h-4 bg-[#393E47] text-[#909399] rounded-full'>2
                    </span>
                    Borrow ------<span className='w-4 text-center font-semibold h-4 bg-[#393E47] text-[#909399] rounded-full'>3
                    </span>
                    Trade ------
                    <span className='w-4 text-center font-semibold h-4 bg-[#393E47] text-[#909399] rounded-full'>
                        4</span> Repay


                </p>

            </div>
            <div className='flex gap-5 justify-between '>
                
                    <p className='text-[#139F8D] border-b-[2px] border-b-[#139F8D] text-base  font-semibold'>
                        spot trading
                    </p>
                    

                

                <div className='flex gap-2 items-center'>
                    <div className='flex gap-1 items-center '>
                        <svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="24" height="24" fill="" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM15.5963 10.3318C16.8872 11.0694 16.8872 12.9307 15.5963 13.6683L11.154 16.2068C9.9715 16.8825 8.5002 16.0287 8.5002 14.6667L8.5002 9.33339C8.5002 7.97146 9.9715 7.11762 11.154 7.79333L15.5963 10.3318Z" fill="#0EAD98" />
                        </svg>
                        <p className='text-[#0EAD98] text-[12px]  font-medium'>
                            Spot Tutorial
                        </p>

                    </div>

                    <div className='bg-[#1B292B] w-8 h-8 justify-center rounded-md flex items-center'>
                        <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 6.72C12 6.47161 12 6.34742 12.0567 6.24546C12.1028 6.1624 12.1921 6.08326 12.2801 6.04738C12.3881 6.00333 12.4981 6.0166 12.7183 6.04315C13.52 6.13981 14.2964 6.39764 15 6.80385C15.9121 7.33046 16.6695 8.08788 17.1962 9C17.7228 9.91212 18 10.9468 18 12C18 13.0532 17.7228 14.0879 17.1962 15C16.6695 15.9121 15.9121 16.6695 15 17.1962C14.0879 17.7228 13.0532 18 12 18C10.9468 18 9.91211 17.7228 9 17.1962C8.29643 16.7899 7.68491 16.2464 7.20036 15.6005C7.0673 15.4231 7.00077 15.3344 6.98491 15.2189C6.97199 15.1247 6.9959 15.0078 7.04475 14.9263C7.10472 14.8263 7.21227 14.7642 7.42739 14.64L11.64 12.2078C11.7711 12.1321 11.8367 12.0943 11.8844 12.0413C11.9266 11.9944 11.9585 11.9392 11.978 11.8793C12 11.8115 12 11.7357 12 11.5843V6.72Z" fill="#0EAD98" />
                            <circle cx="12" cy="12" r="8.5" stroke="#0EAD98" />
                        </svg>
                    </div>

                    <div className='bg-[#1B292B] rounded-md flex justify-center items-center  w-8 h-8'>
                        <img src={optional} alt="" />
                    </div>
                </div>


            </div>

            <div className='flex justify-between'>
                <div className='flex gap-3'>
                    <button className='p-1 text-[#0EAD98] bg-[#17292B] rounded-lg h-8 w-28 font-medium text-[14px]'>
                        Limit    </button>
                    <button className='p-1 text-[#909399] bg-[#23272E] rounded-lg  h-8 w-28 font-medium text-[14px]'>
                        Market    </button>
                    <button className='p-1 text-[#909399] bg-[#23272E] rounded-lg h-8 w-28 font-medium text-[14px]'>
                        Spot Limit    </button>
                    <button className='p-1 text-[#909399] bg-[#23272E] rounded-lg h-8 w-28 font-medium text-[14px]'>
                        Stop Market
                    </button>
                </div>
                <div>
                    <button className='p-1 text-[#0EAD98] bg-[#17292B] rounded-lg h-7 w-20 font-normal text-[12px]'>
                        Borrow
                    </button>
                </div>
            </div>

            <div className='flex justify-between'>
                <div className='flex gap-2 items-center'>
                    <p className='text-xs font-medium text-[#909399]'>advanced: </p>
                    <button className='p-1 text-[#0EAD98] bg-[#17292B]  rounded-lg  w-[55px] font-medium text-[14px]'>
                        AL
                    </button>
                    <button className='p-1 text-[#909399] bg-[#23272E] rounded-lg  w-8 font-medium text-[14px]'>
                        M
                    </button>
                    <button className='flex justify-center items-center rounded-md w-6 h-6 bg-[#23272E]'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#909399" className="bi bi-eye-slash" viewBox="0 0 16 16">
                            <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z" />
                            <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z" />
                            <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z" />
                        </svg>
                    </button>

                </div>
                <div className='flex gap-8'>
                    <p className='index-market font-bold text-[14px] text-[#909399]'>Auto Loan</p>

                    <p className='index-market font-bold text-[14px] text-[#909399]'>Auto Repayment</p>
                </div>
            </div>


            <div className='w-full flex '>

                <div className='w-1/2 px-2 flex flex-col gap-4 '>
                    <p className='text-xs font-medium text-[#909399]'>Avaliable:--USDT </p>


                    <div className='div-input w-full px-2 flex items-center rounded-lg justify-between gap-2 h-10 bg-[#1D1F24]'>
                        <p className='font-bold text-[14px] text-[#909399]'>price</p>
                        <div className='w-1 h-5 ml-5 bg-[#909399]'></div>
                        <input className='input-box text-white w-full bg-[#1D1F24]' type="text" />
                        <p className='font-bold text-[14px] text-[#909399]'>USDT</p>
                    </div>

                    <div className='w-full px-2 flex items-center rounded-lg justify-between gap-2 h-10 bg-[#1D1F24]'>
                        <p className='font-bold text-[14px] text-[#909399]'>Amount</p>
                        <div className='w-1 h-5 bg-[#909399]'></div>
                        <input className='input-box text-white w-full bg-[#1D1F24]' type="text" />
                        <p className='font-bold text-[14px] text-[#909399]'>CET</p>
                    </div>


                    <Box className="w-11/12 ">
                        <Slider
                            aria-label="Temperature"
                            defaultValue={0}
                            valueLabelDisplay="auto"
                            step={25}
                            marks
                            min={0}
                            max={100}
                            sx={{
                                color: '#0EAD98',
                            }}
                        />
                    </Box>


                    <div className='w-full px-2 flex items-center rounded-lg justify-between gap-2 h-10 bg-[#1D1F24]'>
                        <p className='font-bold text-[14px] text-[#909399]'>Value</p>
                        <div className='w-1 h-5 ml-4 bg-[#909399]'></div>
                        <input className='input-box text-white w-full bg-[#1D1F24]' type="text" />
                        <p className='font-bold text-[14px] text-[#909399]'>USDT</p>
                    </div>

                    <div className='w-full px-2 flex items-center rounded-lg justify-center gap-2 h-10 bg-[#2C3038]'>
                        <p className='flex gap-1 font-bold text-[14px] text-[#0EAD98]'>Log In
                            <span className='font-bold text-[12px] text-[#909399]'>or</span>
                            Sign Up
                        </p>
                    </div>




                </div>


                <div className='w-1/2 px-2 flex flex-col gap-4'>

                    <p className='text-xs font-medium text-[#909399]'>Avaliable:--CET </p>


                    <div className='w-full px-2 flex items-center rounded-lg justify-between gap-2 h-10 bg-[#1D1F24]'>
                        <p className='font-bold text-[14px] text-[#909399]'>price</p>
                        <div className='w-1 h-5 ml-5 bg-[#909399]'></div>
                        <input className='input-box text-white w-full bg-[#1D1F24]' type="text" />
                        <p className='font-bold text-[14px] text-[#909399]'>USDT</p>
                    </div>

                    <div className='w-full px-2 flex items-center rounded-lg justify-between gap-2 h-10 bg-[#1D1F24]'>
                        <p className='font-bold text-[14px] text-[#909399]'>Amount</p>
                        <div className='w-1 h-5 bg-[#909399]'></div>
                        <input className='input-box text-white w-full bg-[#1D1F24]' type="text" />
                        <p className='font-bold text-[14px] text-[#909399]'>CET</p>
                    </div>


                    <Box className="w-11/12 ">
                        <Slider
                            aria-label="Temperature"
                            defaultValue={0}
                            valueLabelDisplay="auto"
                            step={25

                            }
                            marks
                            min={0}
                            max={100}
                            sx={{
                                color: '#DB5541',
                            }}
                        />
                    </Box>



                    <div className='w-full px-2 flex items-center rounded-lg justify-between gap-2 h-10 bg-[#1D1F24]'>
                        <p className='font-bold text-[14px] text-[#909399]'>Value</p>
                        <div className='w-1 h-5 ml-4 bg-[#909399]'></div>
                        <input className='input-box text-white w-full bg-[#1D1F24]' type="text" />
                        <p className='font-bold text-[14px] text-[#909399]'>USDT</p>
                    </div>

                    <div className='w-full px-2 flex items-center rounded-lg justify-center gap-2 h-10 bg-[#2C3038]'>
                        <p className='flex gap-1 font-bold text-[14px] text-[#0EAD98]'>Log In
                            <span className='font-bold text-[12px] text-[#909399]'>or</span>
                            Sign Up
                        </p>
                    </div>



                </div>




            </div>







        </div>
    );
}

export default Trading;
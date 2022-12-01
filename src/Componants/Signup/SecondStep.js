import React from 'react';
import { BsArrowRight } from "react-icons/bs";

const SecondStep = () => {
    return (
        <div>
            <div className='flex gap-3'>
                <input disabled type="number" className='w-[20%] ' placeholder='+880' />
                <input type="number" placeholder='1XXXXXXXXXX' />
            </div>
            <input className='mt-[64px]' type="email" placeholder='Write Email Address' />

            <div className='mt-[64px] flex justify-around gap-6'>
                <button className='text-[#767676]'>Back</button>
                <button className='flex items-center gap-4 bg-[#1678CB] nextbtn'>Next Step <span><BsArrowRight /></span></button>
            </div>
        </div>
    );
};

export default SecondStep;
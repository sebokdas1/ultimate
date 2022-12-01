import React from 'react';
import { BsArrowRight } from "react-icons/bs";

const FirstStep = () => {
    return (
        <div>
            <input type="text" placeholder='Write First Name' />
            <input className='mt-[64px]' type="text" placeholder='Write Last Name' />

            <div className='mt-[64px] flex justify-center'>
                <button className='flex items-center gap-4 bg-[#1678CB] nextbtn'>Next Step <span><BsArrowRight /></span></button>
            </div>
        </div>
    );
};

export default FirstStep;
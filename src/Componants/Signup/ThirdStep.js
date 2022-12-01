import React from 'react';

const ThirdStep = () => {
    return (
        <div>
            <input type="text" placeholder='Write Password' />
            <h6><small className='text-[#7E7E7E] text-[12px]'>Your Password must be 8 character</small></h6>

            <div className='mt-[64px] flex justify-around gap-6'>
                <button className='text-[#767676]'>Back</button>
                <button className='flex items-center gap-4 bg-[#1678CB] nextbtn'>Sign Up</button>
            </div>
        </div>
    );
};

export default ThirdStep;
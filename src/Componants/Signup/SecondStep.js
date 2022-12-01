import React, { useContext } from 'react';
import { BsArrowRight } from "react-icons/bs";
import { multiStepContext } from './Stepcontext';

const SecondStep = () => {
    const { setStep, userData, setUserData } = useContext(multiStepContext)
    return (
        <div>
            <div className='flex gap-3'>
                <input disabled type="number" className='w-[20%] ' placeholder='+880' />
                <input type="number" placeholder='1XXXXXXXXXX' name='phone' value={userData["phone"]} onChange={(e) => setUserData({ ...userData, "phone": e.target.value })} />
            </div>
            <input className='mt-[64px]' type="email" placeholder='Write Email Address' name='email' value={userData["email"]} onChange={(e) => setUserData({ ...userData, "email": e.target.value })} />

            <div className='mt-[64px] flex justify-around gap-6'>
                <button onClick={() => setStep(1)} className='text-[#767676]'>Back</button>
                <button onClick={() => setStep(3)} className='flex items-center gap-4 bg-[#1678CB] nextbtn'>Next Step <span><BsArrowRight /></span></button>
            </div>
        </div>
    );
};

export default SecondStep;
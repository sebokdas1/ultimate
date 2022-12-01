import React, { useContext } from 'react';
import { BsArrowRight } from "react-icons/bs";
import { multiStepContext } from './Stepcontext';

const FirstStep = () => {
    const { setStep, userData, setUserData } = useContext(multiStepContext)
    return (
        <div>
            <input type="text" placeholder='Write First Name' name='firstName' value={userData["firstName"]} onChange={(e) => setUserData({ ...userData, "firstName": e.target.value })} />
            <input className='mt-[64px]' type="text" placeholder='Write Last Name' name='lastName' value={userData["lastName"]} onChange={(e) => setUserData({ ...userData, "lastName": e.target.value })} />

            <div className='mt-[64px] flex justify-center'>
                <button onClick={() => setStep(2)} className='flex items-center gap-4 bg-[#1678CB] nextbtn'>Next Step <span><BsArrowRight /></span></button>
            </div>
        </div>
    );
};

export default FirstStep;
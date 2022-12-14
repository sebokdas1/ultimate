import React, { useContext } from 'react';
import { BsArrowRight } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { multiStepContext } from './Stepcontext';

const FirstStep = () => {
    const { setStep, userData, setUserData } = useContext(multiStepContext)
    return (
        <div>
            <input type="text" placeholder='Write First Name' name='first_Name' value={userData["first_Name"]} onChange={(e) => setUserData({ ...userData, "first_Name": e.target.value })} />
            <input className='mt-[64px]' type="text" placeholder='Write Last Name' name='last_Name' value={userData["last_Name"]} onChange={(e) => setUserData({ ...userData, "last_Name": e.target.value })} />

            <div className='mt-[64px] flex justify-center'>
                <button onClick={() => setStep(2)} className='flex items-center gap-4 bg-[#1678CB] nextbtn'>Next Step <span><BsArrowRight /></span></button>
            </div>

            <h4 className='mt-12 lg:mt-24'><span className='text-[#7E7E7E]'>Already have an account?</span> <Link to="/login" className='uppercase text-[#1678CB] underline'>Login Here</Link></h4>
        </div>
    );
};

export default FirstStep;
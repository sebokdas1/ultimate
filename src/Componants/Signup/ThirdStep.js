import React, { useContext } from 'react';
import { multiStepContext } from './Stepcontext';

const ThirdStep = () => {
    const { setStep, userData, setUserData, submitData } = useContext(multiStepContext)
    return (
        <div>
            <input type="password" placeholder='Write Password' name='password' value={userData["password"]} onChange={(e) => setUserData({ ...userData, "password": e.target.value })} />
            <h6><small className={userData?.password?.length < 8 ? "text-red-600" : "text-[#7E7E7E] "} >Your Password must be 8 character</small></h6>

            <div className='mt-[64px] flex justify-around gap-6'>
                <button onClick={() => setStep(2)} className='text-[#767676]'>Back</button>
                <button disabled={userData?.password?.length < 8} onClick={submitData} className='flex items-center gap-4 bg-[#1678CB] nextbtn'>Sign Up</button>
            </div>
        </div>
    );
};

export default ThirdStep;
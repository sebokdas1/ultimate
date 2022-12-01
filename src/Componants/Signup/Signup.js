import React, { useContext } from 'react';
import FirstStep from './FirstStep';
import Photo from './photo.png';
import SecondStep from './SecondStep';
import ThirdStep from './ThirdStep';
import './Signup.css';
import { multiStepContext } from './Stepcontext';
const Signup = () => {
    const { currentStep, finalData } = useContext(multiStepContext)
    function showStep(step) {
        switch (step) {
            case 1:
                return <FirstStep />;
            case 2:
                return <SecondStep />;
            case 3:
                return <ThirdStep />;

            default:
                return "unknown step"
        }
    }
    return (
        <div className='lg:flex md:flex justify-evenly'>
            <div>
                <img className='w-[100%]' src={Photo} alt="" />
            </div>
            <div className='shadow-lg h-[90vh] pl-10 lg:pl-32 lg:pr-8'>
                <h2 className='signhead text-center'>SignUp Form</h2>
                <div className='mt-[100px]'>
                    {showStep(currentStep)}
                </div>
            </div>
        </div>
    );
};

export default Signup;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Signup from './Signup';

export const multiStepContext = React.createContext();
const Stepcontext = () => {
    const [currentStep, setStep] = useState(1)
    const [userData, setUserData] = useState([]);
    const [finalData, setFinalData] = useState([]);
    const navigate = useNavigate()

    const submitData = () => {

        fetch('https://test.nexisltd.com/signup', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
            .then(res => res.json())
            .then(data => {
                alert('User Sign Up Successfull, Please log in!!')
                navigate('/')
            });
    }
    return (
        <div>
            <multiStepContext.Provider value={{ currentStep, setStep, userData, setUserData, finalData, setFinalData, submitData }}>
                <Signup />
            </multiStepContext.Provider>

        </div>
    );
};

export default Stepcontext;
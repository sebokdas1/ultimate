import React, { useState } from 'react';
import Signup from './Signup';

export const multiStepContext = React.createContext();
const Stepcontext = () => {
    const [currentStep, setStep] = useState(1)
    const [userData, setUserData] = useState([]);
    const [finalData, setFinalData] = useState([]);

    const submitData = () => {

        // console.log(userData)
        fetch('https://test.nexisltd.com/signup', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    alert(`Your Order is Placed`)
                }

            });
        // setUserData('')
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
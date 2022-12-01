import React, { useState } from 'react';
import Signup from './Signup';

export const multiStepContext = React.createContext();
const Stepcontext = () => {
    const [currentStep, setStep] = useState(1)
    const [userData, setUserData] = useState([]);
    const [finalData, setFinalData] = useState([]);

    const submitData = () => {

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
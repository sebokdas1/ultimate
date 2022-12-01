import React, { useState } from 'react';
import Signup from './Signup';

export const multiStepContext = React.createContext();
const Stepcontext = () => {
    const [currentStep, setStep] = useState(3)
    const [candidatedata, setCandidatedata] = useState([]);
    const [finalData, setFinalData] = useState([]);
    return (
        <div>
            <multiStepContext.Provider value={{ currentStep, setStep, candidatedata, setCandidatedata, finalData, setFinalData }}>
                <Signup />
            </multiStepContext.Provider>

        </div>
    );
};

export default Stepcontext;
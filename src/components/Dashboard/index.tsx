import React, { useState } from 'react';

// Import all your step components
import ChooseProfileStep from './Onboarding'; // The component from our previous conversation
import Step2_About from './Step2_About.tsx';
import Step3_Upload from './Step3_Upload.tsx';
import Step4_Success from './Step4_Success.tsx';

const RegistrationController: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);

  // Function to advance to the next step
  const handleNextStep = () => {
    if (currentStep < 4) {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  // Function to go back to the homepage (from step 4)
  const handleGoHome = () => {
    setCurrentStep(1); // Or redirect to '/'
  };

  // Render the current step based on the state
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        // Pass the handleNextStep function as a prop
        return <ChooseProfileStep onNext={handleNextStep} />;
      case 2:
        return <Step2_About onNext={handleNextStep} />;
      case 3:
        return <Step3_Upload onNext={handleNextStep} />;
      case 4:
        return <Step4_Success onGoHome={handleGoHome} />;
      default:
        return <ChooseProfileStep onNext={handleNextStep} />;
    }
  };

  return <div className="min-h-screen bg-slate-50">{renderStep()}</div>;
};

export default RegistrationController;
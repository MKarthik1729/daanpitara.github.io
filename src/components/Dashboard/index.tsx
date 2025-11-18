import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { organisationService } from '@/assets/Services/organisation.service';

// Import all your step components
import ChooseProfileStep from './Onboarding'; // The component from our previous conversation
import Step2_About from './Step2_About.tsx';
// import Step3_Upload from './Step3_Upload.tsx';
import Step4_Success from './Step4_Success.tsx';

const RegistrationController: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const checkStatus = async () => {
      // Check for a 'sign' cookie to determine login status
      

      try {
        const status = await organisationService.checkOrganisationStatus();
        console.log('Organisation status:', status);
        if (status.data.isRegistered) {
          setCurrentStep(3); // User has an organisation, jump to step 3
        }
      } catch (error) {
        console.error("Failed to check organisation status:", error);
        // Decide how to handle the error, e.g., show an error message
        // For now, we'll proceed to step 1
      } finally {
        setLoading(false);
      }
    }
    checkStatus();
  }, [navigate]);

  // Function to advance to the next step
  const handleNextStep = () => {
    if (currentStep < 3) {
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
      //   return <Step3_Upload onNext={handleNextStep} />;
      // case 4:
        return <Step4_Success onGoHome={handleGoHome} />;
      default:
        return <ChooseProfileStep onNext={handleNextStep} />;
    }
  };

  if (loading) {
    return <div className="min-h-screen bg-slate-50 flex items-center justify-center">Loading...</div>;
  }

  return <div className="min-h-screen bg-slate-50">{renderStep()}</div>;
};

export default RegistrationController;
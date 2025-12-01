import React from 'react';
import { ArrowRightIcon, CheckCircleIcon, EnvelopeSimpleIcon } from '@phosphor-icons/react';
import { useNavigate } from 'react-router-dom';

interface Step4Props {
  onGoHome: () => void;
}

// Component for the numbered step
const WhatNextStep = ({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) => (
  <div className="flex items-start">
    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-blue-100 rounded-full text-blue-600 font-bold">
      {number}
    </div>
    <div className="ml-4">
      <h4 className="font-semibold text-gray-900">{title}</h4>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  </div>
);

const Step4_Success: React.FC<Step4Props> = ({ onGoHome }) => {
  const navigate = useNavigate();
  return (
    <div className="max-w-2xl mx-auto p-8 flex flex-col items-center text-center min-h-screen justify-center">
      {/* Step Indicator */}
      <div className="absolute top-8 left-8">
        <span className="text-sm font-medium text-blue-600 border border-blue-300 bg-blue-50 py-1 px-3 rounded-md">
          Step 4 of 4
        </span>
      </div>

      {/* Success Icon */}
      <CheckCircleIcon
        size={80}
        className="text-blue-500 bg-blue-100 rounded-full p-2"
        weight="fill"
      />

      {/* Header */}
      <p className="text-lg font-medium text-blue-600 mt-4">
        Thank You For Registering!
      </p>
      <h1 className="text-4xl font-bold text-gray-900 my-2">
        Your application has been submitted successfully
      </h1>
      <p className="text-md text-gray-600 max-w-lg">
        Our team is reviewing your details and documents. You'll receive an
        update within 2–3 working days.
      </p>

      {/* What Happens Next Box */}
      <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 text-left mt-10 w-full">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">
          What Happens Next?
        </h3>
        <div className="space-y-6">
          <WhatNextStep
            number="1"
            title="Document Verification"
            description="Our team will review all submitted documents to ensure authenticity and compliance."
          />
          <WhatNextStep
            number="2"
            title="Profile Activation"
            description="Once verified, your profile will be activated and you'll receive full access to the platform."
          />
          <WhatNextStep
            number="3"
            title="Personalized Onboarding"
            description="We'll provide a guided tour and connect you with relevant opportunities based on your profile."
          />
        </div>

        <hr className="my-6" />

        {/* Assistance */}
        <div>
          <h4 className="font-semibold text-gray-900">Need Assistance?</h4>
          <div className="flex items-center text-sm mt-2">
            <EnvelopeSimpleIcon size={16} className="text-gray-500 mr-2" />
            <a
              href="mailto:support@daanpitara.com"
              className="text-blue-600 hover:underline"
            >
              support@daanpitara.com
            </a>
            <span className="text-gray-500 ml-4">
              Response within 24 hours
            </span>
          </div>
        </div>
      </div>

      {/* Footer Buttons */}
      <div className="flex items-center gap-4 mt-8">
        <button
          onClick={()=>{
            navigate('/dashboard')
          }} // Trigger going home

          type="button"
          className="inline-flex items-center px-6 py-2.5 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Go to Dashboard
          <ArrowRightIcon size={16} className="ml-2" weight="bold" />
        </button>
        <button
          type="button"
          onClick={onGoHome} // Trigger going home
          className="inline-flex items-center px-6 py-2.5 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Return To Homepage
          <ArrowRightIcon size={16} className="ml-2" weight="bold" />
        </button>
      </div>
    </div>
  );
};

export default Step4_Success;
import React, { useState } from 'react';
import { ArrowRight } from '@phosphor-icons/react';

// Define props for the component, including the onNext function
interface Step2Props {
  onNext: () => void;
}

// Reusable component for the input fields to reduce repetition
const FormInput = ({
  label,
  id,
  placeholder,
  required = false,
  note,
}: {
  label: string;
  id: string;
  placeholder: string;
  required?: boolean;
  note?: string;
}) => (
  <div className="mb-4">
    <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <input
      type="text"
      id={id}
      name={id}
      placeholder={placeholder}
      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
    />
    {note && <p className="mt-1 text-xs text-gray-500">{note}</p>}
  </div>
);

// Reusable button for the "Focused Area"
const FocusAreaButton = ({ label }: { label: string }) => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setIsSelected(!isSelected)}
      className={`px-4 py-2 border rounded-md text-sm font-medium ${
        isSelected
          ? 'bg-blue-100 border-blue-300 text-blue-700'
          : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
      }`}
    >
      {label}
    </button>
  );
};

const Step2_About: React.FC<Step2Props> = ({ onNext }) => {
  const focusAreas = [
    'Education',
    'Healthcare',
    'Livelihood',
    'Disaster Relief',
    'Child Welfare',
    'Animal Welfare',
    'Women Empowerment',
    'Elderly Care',
    'Others',
  ];

  return (
    <div className="max-w-4xl mx-auto p-8">
      {/* Step Indicator */}
      <div className="mb-4">
        <span className="text-sm font-medium text-blue-600 border border-blue-300 bg-blue-50 py-1 px-3 rounded-md">
          Step 2 of 4
        </span>
      </div>

      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Tell Us About Yourself
        </h1>
        <p className="text-md text-gray-600">
          Help us understand your goals so we can provide the best support
        </p>
      </div>

      {/* Form */}
      <form
        className="bg-white p-8 rounded-lg shadow-sm border border-gray-200"
        onSubmit={(e) => {
          e.preventDefault();
          onNext();
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
          <FormInput
            label="Organization Name"
            id="orgName"
            placeholder="Enter Organization Name"
            required
          />
          <FormInput
            label="Registration Number"
            id="regNum"
            placeholder="Enter Organization Name"
            required
            note="(NGO/NPO ID)"
          />
          <FormInput
            label="Year Of Establishment"
            id="year"
            placeholder="YYYY"
            required
          />
          <FormInput
            label="Website / Social Links"
            id="website"
            placeholder="https://yourorganization.org"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="address"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Registered Address <span className="text-red-500">*</span>
          </label>
          <textarea
            id="address"
            name="address"
            rows={4}
            placeholder="Enter Complete Registered Address"
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        <hr className="my-6" />

        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Primary Contact Person
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
          <FormInput
            label="Full Name"
            id="contactName"
            placeholder="Enter Full Name"
            required
          />
          <FormInput
            label="Designation"
            id="designation"
            placeholder="Enter Organization Name"
            required
          />
          <FormInput
            label="Email Address"
            id="email"
            placeholder="Contact@gmail.com"
            required
          />
          {/* --- THIS IS THE FIX --- */}
          <FormInput
            label="Phone Number"
            id="phone"
            placeholder="+91-XXXXXXXXXX"
            required
            // The word 'Next' was here and has been removed.
          />
          {/* --- END FIX --- */}
        </div>

        <hr className="my-6" />

        <FormInput
          label="Operational Regions"
          id="regions"
          placeholder="Enter Organization Name"
          required
        />

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Focused Area <span className="text-red-500">*</span>
          </label>
          <div className="flex flex-wrap gap-3">
            {focusAreas.map((area) => (
              <FocusAreaButton key={area} label={area} />
            ))}
          </div>
        </div>

        <div className="mb-4">
          <label
            htmlFor="about"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Tell us what brings you to DaanPitara{' '}
            <span className="text-red-500">*</span>
          </label>
          <textarea
            id="about"
            name="about"
            rows={4}
            placeholder="Enter Organization Name"
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        <div className="flex justify-between items-center mt-8">
          <p className="text-xs text-gray-500">
            All fields marked with <span className="text-red-500">*</span> are
            required
          </p>
          <button
            type="submit"
            className="inline-flex items-center px-6 py-2.5 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Continue
            <ArrowRight size={16} className="ml-2" weight="bold" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Step2_About;
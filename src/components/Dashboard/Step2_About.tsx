import React, { useState } from 'react';
import { ArrowRight } from '@phosphor-icons/react';
import { useFormStore } from './formStore';
import { organisationService } from '../../assets/Services/organisation.service';
import { validationService } from '../../assets/Services/validation.service';

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
  value,
  error,
  type = 'text',
  onChange,
}: {
  label: string;
  id: string;
  placeholder: string;
  required?: boolean;
  note?: string;
  type?: string;
  error?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => (
  <div className="mb-4">
    <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <input
      type={type}
      id={id}
      name={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
      aria-invalid={!!error}
      aria-describedby={error ? `${id}-error` : undefined}
    />
    {note && <p className="mt-1 text-xs text-gray-500">{note}</p>}
    {error && <p id={`${id}-error`} className="mt-1 text-xs text-red-600">{error}</p>}
  </div>
);

// Reusable button for the "Focused Area"
const FocusAreaButton = ({
  label,
  isSelected,
  onClick,
}: {
  label: string;
  isSelected: boolean;
  onClick: () => void;
}) => {
  return (
    <button type="button" onClick={onClick} className={`px-4 py-2 border rounded-md text-sm font-medium ${
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
  // Use the Zustand store for state management
  const {
    orgName, regNum, year, website, address, contactName, designation, email, phone, regions, about, focusAreas: selectedFocusAreas,
    setFormField, toggleFocusArea
  } = useFormStore();

  const [errors, setErrors] = useState<Record<string, string>>({});

  const focusAreas = [
    'Education',
    'Healthcare',
    'Livelihood',
    'Disaster Relief',
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormField(name as any, value);
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    const state = useFormStore.getState();

    if (!state.orgName) newErrors.orgName = 'Organization name is required.';
    if (!state.regNum) newErrors.regNum = 'Registration number is required.';
    if (!state.year) {
      newErrors.year = 'Establishment year is required.';
    } else if (!validationService.isYear(state.year)) {
      newErrors.year = 'Please enter a valid 4-digit year.';
    }
    if (!state.website) newErrors.website = 'Website or social link is required.';
    if (!state.address) newErrors.address = 'Registered address is required.';
    if (!state.contactName) newErrors.contactName = 'Contact name is required.';
    if (!state.designation) newErrors.designation = 'Designation is required.';
    if (!state.email) {
      newErrors.email = 'Email address is required.';
    } else if (!validationService.isEmail(state.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!state.phone) {
      newErrors.phone = 'Phone number is required.';
    } else if (!validationService.isPhoneNumber(state.phone)) {
      newErrors.phone = 'Please enter a valid 10-digit phone number.';
    }
    if (!state.regions) newErrors.regions = 'Operational regions are required.';
    if (state.focusAreas.length === 0) {
      newErrors.focusAreas = 'Please select at least one focused area.';
    }
    if (!state.about) newErrors.about = 'This field is required.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

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
        onSubmit={async (e) => {
          e.preventDefault();
          if (validateForm()) {
            console.log('Submit button clicked'); 
            const state = useFormStore.getState();
            console.log('Form data to submit:', state); 

            try { // The `type` property is now correctly named, and `profile_type` has been removed.
              const response = await organisationService.registerOrganisation({ 
                type: state.profileType,
                organisation_name: state.orgName,
                registration_number: state.regNum,
                year_of_establishment: state.year,
                websites: state.website,
                address: state.address,
                person_full_name: state.contactName,
                person_designation: state.designation,
                person_email: state.email,
                person_phone: state.phone,
                operation_region: state.regions,
                focused_area: state.focusAreas,
                note_to_daanpitara: state.about,
              });
              console.log('Organisation registered successfully:', response);
              // Proceed to the next step on successful registration
              onNext();
            } catch (error) {
              console.error('Failed to register organisation:', error);
              // Here you could set an error state and display a message to the user
            }
          }
          else {
            console.log('Form validation failed');
            
          }
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
          <FormInput
            label="Organization Name"
            id="orgName"
            placeholder="Enter Organization Name"
            value={orgName}
            onChange={handleChange}
            error={errors.orgName}
            required
          />
          <FormInput
            label="Registration Number"
            id="regNum"
            placeholder="Enter Organization Name"
            value={regNum}
            onChange={handleChange}
            error={errors.regNum}
            required
            note="(NGO/NPO ID)"
          />
          <FormInput
            label="Year Of Establishment"
            id="year"
            placeholder="YYYY"
            value={year}
            onChange={handleChange}
            error={errors.year}
            required
          />
          <FormInput
            label="Website / Social Links"
            id="website"
            placeholder="https://yourorganization.org"
            value={website}
            onChange={handleChange}
            error={errors.website}
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
            value={address}
            onChange={handleChange}
            placeholder="Enter Complete Registered Address"
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
          {errors.address && <p className="mt-1 text-xs text-red-600">{errors.address}</p>}
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
            value={contactName}
            onChange={handleChange}
            error={errors.contactName}
            required
          />
          <FormInput
            label="Designation"
            id="designation"
            placeholder="Enter Organization Name"
            value={designation}
            onChange={handleChange}
            error={errors.designation}
            required
          />
          <FormInput
            label="Email Address"
            id="email"
            placeholder="Contact@gmail.com"
            value={email}
            onChange={handleChange}
            error={errors.email}
            required
          />
          {/* --- THIS IS THE FIX --- */}
          <FormInput
            label="Phone Number"
            type="number"
            id="phone"
            placeholder="+91-XXXXXXXXXX"
            value={phone}
            onChange={handleChange}
            error={errors.phone}
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
          value={regions}
          onChange={handleChange}
          error={errors.regions}
          required
        />

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Focused Area <span className="text-red-500">*</span>
          </label>
          <div className="flex flex-wrap gap-3">
            {focusAreas.map((area) => (
              <FocusAreaButton
                key={area}
                label={area}
                isSelected={selectedFocusAreas.includes(area)}
                onClick={() => toggleFocusArea(area)}
              />
            ))}
          </div>
          {errors.focusAreas && <p className="mt-1 text-xs text-red-600">{errors.focusAreas}</p>}
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
            value={about}
            onChange={handleChange}
            placeholder="Enter Organization Name"
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
          {errors.about && <p className="mt-1 text-xs text-red-600">{errors.about}</p>}
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
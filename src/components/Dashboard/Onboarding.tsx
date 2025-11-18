import React from 'react';
import {
  FileText,
  Users,
  Heart,
  HandHeart,
  ArrowRight,
} from '@phosphor-icons/react';
import { useFormStore } from './formStore';

// --- Props Definitions ---

// Props for the main step component
interface Step1Props {
  onNext: () => void; // Function to call to go to the next step
}

// Props for a single profile card
interface ProfileCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  onClick: () => void;
}

// --- Data ---

// Array of data for the cards
const profileTypes = [
  {
    icon: FileText,
    title: 'NGO / Nonprofit Organization',
    description:
      'Register your NGO to access CSR funding, digital tools & impact reports',
  },
  {
    icon: Users,
    title: 'Corporate / CSR Partner',
    description:
      'Register your NGO to access CSR funding, digital tools & impact reports',
  },
  {
    icon: HandHeart,
    title: 'Individual / Volunteer',
    description:
      'Register your NGO to access CSR funding, digital tools & impact reports',
  },
  {
    icon: Heart,
    title: 'Donor / Philanthropist',
    description:
      'Register your NGO to access CSR funding, digital tools & impact reports',
  },
];

// --- Reusable Card Component ---
const ProfileTypeCard: React.FC<ProfileCardProps> = ({
  icon: Icon,
  title,
  description,
  onClick,
}) => (
  <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200 flex flex-col">
    {/* Icon */}
    <div className="mb-4">
      <Icon
        size={40}
        className="p-2 bg-blue-500 text-white rounded-lg"
        weight="fill"
      />
    </div>

    {/* Title */}
    <h2 className="text-lg font-semibold text-gray-900 mb-2">{title}</h2>

    {/* Description */}
    <p className="text-sm text-gray-600 mb-5 flex-grow">{description}</p>

    {/* Continue Button */}
    <button
      onClick={onClick}
      className="text-blue-600 font-medium inline-flex items-center group text-sm text-left"
    >
      Continue
      <ArrowRight
        size={16}
        className="ml-1.5 transition-transform group-hover:translate-x-1"
        weight="bold"
      />
    </button>
  </div>
);

// --- Main Step 1 Component ---
const ChooseProfileStep: React.FC<Step1Props> = ({ onNext }) => {
  const setFormField = useFormStore((state) => state.setFormField);
  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-4xl w-full">
        {/* Step Indicator */}
        <div className="mb-4">
          <span className="text-sm font-medium text-blue-600 border border-blue-300 bg-blue-50 py-1 px-3 rounded-md">
            Step 1 of 4
          </span>
        </div>

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Choose Your Profile Type
          </h1>
          <p className="text-md text-gray-600">
            Help us understand how you want to create impact.
          </p>
        </div>

        {/* Grid of Profile Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {profileTypes.map((profile) => {
            const handleClick = () => {
              setFormField('profileType', profile.title);
              onNext();
            };
            return (
              <ProfileTypeCard
                key={profile.title}
                {...profile}
                onClick={handleClick}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ChooseProfileStep;
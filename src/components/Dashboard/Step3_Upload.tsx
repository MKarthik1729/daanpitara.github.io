import React from 'react';
import { ArrowRight, Info, UploadSimple } from '@phosphor-icons/react';

interface Step3Props {
  onNext: () => void;
}

// A reusable component for the dashed file upload box
const FileUploadBox = ({
  label,
  required = false,
}: {
  label: string;
  required?: boolean;
}) => (
  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
    <label className="block text-sm font-medium text-gray-700 mb-2">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-blue-500 bg-gray-50">
      <UploadSimple size={24} className="mx-auto text-gray-400" />
      <p className="text-sm text-gray-600 mt-2">
        <span className="font-semibold text-blue-600">
          Drop file here or click to browse
        </span>
      </p>
      <p className="text-xs text-gray-500 mt-1">
        PDF or JPG, PNG (max 5MB)
      </p>
    </div>
  </div>
);

const Step3_Upload: React.FC<Step3Props> = ({ onNext }) => {
  // Array of document names to render
  const documents = [
    { name: 'Registration Certificate', required: true },
    { name: '12A Certificate', required: true },
    { name: 'PAN Card / Tax Identification', required: true },
    { name: '80G Certificate', required: true },
    { name: 'Audited Financial Statements (last 2 years preferred)', required: true },
    { name: 'Bank Details Document', required: true },
    { name: 'Darpan ID / NITI Aayog Registration', required: true },
    { name: 'Office Address Proof', required: true },
    { name: 'Office Photograph / NGO Premises Photo', required: true },
    { name: 'CSR-1 Approval Letter', required: true },
    { name: 'FCRA Certificate', required: true },
    { name: 'Board Member List with Aadhar/PAN of Trustees', required: true },
  ];

  return (
    <div className="max-w-6xl mx-auto p-8">
      {/* Step Indicator */}
      <div className="mb-4">
        <span className="text-sm font-medium text-blue-600 border border-blue-300 bg-blue-50 py-1 px-3 rounded-md">
          Step 3 of 4
        </span>
      </div>

      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Upload Verification Documents
        </h1>
        <p className="text-md text-gray-600">
          Help us verify your identity and ensure transparency. All documents are
          securely encrypted.
        </p>
      </div>

      {/* Document Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {documents.map((doc) => (
          <FileUploadBox
            key={doc.name}
            label={doc.name}
            required={doc.required}
          />
        ))}
      </div>

      {/* Security Alert */}
      <div className="bg-blue-50 border border-blue-200 text-blue-700 p-4 rounded-lg flex items-start mt-8">
        <Info size={20} className="mr-3 flex-shrink-0" weight="fill" />
        <div>
          <h4 className="font-semibold">Document Security</h4>
          <p className="text-sm">
            Your documents are encrypted and stored securely. We use them only
            for verification purposes and comply with data protection
            regulations. Your information is safe with us.
          </p>
        </div>
      </div>

      {/* Footer Buttons */}
      <div className="flex justify-between items-center mt-8">
        <button
          type="button"
          className="text-sm font-medium text-blue-600 hover:underline"
        >
          Upload Later
        </button>
        <button
          type="button"
          onClick={onNext} // Trigger the next step
          className="inline-flex items-center px-6 py-2.5 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Continue To verification
          <ArrowRight size={16} className="ml-2" weight="bold" />
        </button>
      </div>
    </div>
  );
};

export default Step3_Upload;
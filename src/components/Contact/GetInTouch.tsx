import React from 'react';
import { Envelope, Phone, MapPin } from '@phosphor-icons/react';
// 1. Import your cropped laptop image
// import laptopImage from './assets/laptop-image.png'; // <-- Adjust path

// Define props for the helper component
interface InfoBoxProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

// Helper sub-component for the info boxes
const InfoBox: React.FC<InfoBoxProps> = ({ icon, title, children }) => {
  return (
    <div className="flex items-center gap-4 p-4 bg-sky-50 rounded-lg flex-1 min-w-[200px]">
      <div className="text-sky-600">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600">{children}</p>
      </div>
    </div>
  );
}

const GetInTouch: React.FC = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-5 gap-8">
      
      {/* === LEFT COLUMN (Text, Buttons, Info) === */}
      <div className="lg:col-span-3 flex flex-col justify-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Get in Touch with the DaanPitara Team
        </h1>
        <p className="text-gray-600 mb-6">
          We're here to listen, support, and collaborate with changemakers like you. 
          Whether you're an NGO looking for digital growth, a CSR partner seeking 
          impactful collaborations, or a donor eager to make a difference — the DaanPitara 
          team is just a message away.
        </p>
        
        {/* Buttons */}
        <div className="flex flex-wrap gap-4 mb-8">
          <button className="px-6 py-2.5 border border-gray-300 rounded-md font-medium text-gray-700 hover:bg-gray-50">
            Need Help?
          </button>
          <button className="px-6 py-2.5 bg-sky-600 text-white rounded-md font-medium hover:bg-sky-700">
            Connect With Us
          </button>
        </div>

        {/* Info Boxes */}
        <div className="flex flex-wrap gap-4">
          <InfoBox icon={<Envelope size={24} weight="fill" />} title="Email">
            info@gmail.com
          </InfoBox>
          <InfoBox icon={<Phone size={24} weight="fill" />} title="Phone">
            +91 9341857008
          </InfoBox>
          <InfoBox icon={<MapPin size={24} weight="fill" />} title="Location">
            Mohali, Phase 1
          </InfoBox>
        </div>
      </div>

      {/* === RIGHT COLUMN (Image) === */}
      <div className="lg:col-span-2">
        <div className="rounded-lg overflow-hidden h-full">
          <img 
            src={"./org1.jpg"} // <-- Use your imported image
            alt="Collaboration" 
            className="w-full h-full object-cover" 
          />
        </div>
      </div>
    </section>
  );
}

export default GetInTouch;
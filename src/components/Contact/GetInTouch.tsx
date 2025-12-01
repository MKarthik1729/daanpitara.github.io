import React from 'react';
import { Envelope, Phone, MapPin } from '@phosphor-icons/react';
import HeroTitle from '@/assets/HeadingText/HeroTitle';
import HeroDescription from '@/assets/HeadingText/HeroDescription';

// Define props for the helper component
interface InfoBoxProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

// Helper sub-component for the info boxes
const InfoBox: React.FC<InfoBoxProps> = ({ icon, title, children }) => {
  return (
    <div className="flex items-center gap-4 p-4 bg-[#D3EBF5] rounded-lg flex-1">
      {/* Icon Container */}
      <div className="text-sky-600 shrink-0">
        {icon}
      </div>
      {/* Text Content */}
      <div>
        <h3 className="font-bold text-gray-900 text-sm sm:text-base">{title}</h3>
        <p className="text-gray-600 text-xs sm:text-sm">{children}</p>
      </div>
    </div>
  );
};

const GetInTouch: React.FC = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-12">
      
      {/* Main Layout: Grid with exact 51px gap as per design */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] lg:gap-[51px] gap-8">
        
        {/* === LEFT COLUMN === */}
        <div className="flex flex-col justify-center">
          
          {/* Header Section */}
          <div className="mb-6">
            <HeroTitle 
            heading="Get in Touch with the DaanPitara Team" 
            size={40} 
            />
            <HeroDescription
              text="We're here to listen, support, and collaborate with changemakers like you. 
              Whether you're an NGO looking for digital growth, a CSR partner seeking 
              impactful collaborations, or a donor eager to make a difference — the DaanPitara 
              team is just a message away."
              size={18}
              color="#4C4B4B"
            />
          </div>
          
          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <button className="px-8 py-3 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors">
              Need Help ?
            </button>
            
            <button className="px-8 py-3 bg-[#2D9CDB] text-white rounded-lg font-medium hover:bg-sky-600 transition-colors flex items-center gap-2">
              <Phone size={20} weight="fill" />
              Connect With Us
            </button>
          </div>

          {/* Info Boxes - Margin Top 10 (40px) as per design redline */}
          <div className="mt-10 flex flex-wrap gap-4">
            
            <InfoBox icon={<Envelope size={32} weight="fill" />} title="Email">
              info@gmail.com
            </InfoBox>
            
            <InfoBox icon={<Phone size={32} weight="fill" />} title="Phone">
              +91 9341857008
            </InfoBox>
            
            <InfoBox icon={<MapPin size={32} weight="fill" />} title="Location">
              Mohali, Phase 1
            </InfoBox>
            
          </div>
        </div>

        {/* === RIGHT COLUMN (Image) === */}
        <div className="relative h-full min-h-[300px] lg:min-h-auto lg:max-w-[456px]">
          <div className="rounded-xl overflow-hidden h-full w-full">
            <img 
              src="./org1.jpg" 
              alt="DaanPitara Team Collaboration" 
              className="w-full h-full object-cover object-center" 
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default GetInTouch;
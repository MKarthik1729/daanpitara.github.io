import React, { useState, useEffect } from 'react';
import {HandshakeIcon, UsersThreeIcon} from "@phosphor-icons/react";
import { useNavigate } from 'react-router-dom';
import { organisationService } from '@/assets/Services/organisation.service';
import FeaturesSection from '../Home/WhyUs';

const RegistrationController: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const checkStatus = async () => {
      try {
        const status = await organisationService.checkOrganisationStatus();
        console.log('Organisation status:', status);
        if (!status.data.isRegistered){
          navigate('/signupform')
        }
      } catch (error) {
        console.error("Failed to check organisation status:", error);
      } finally {
        setLoading(false);
      }
    }
    checkStatus();
  }, [navigate]);

 
  if (loading) {
    return <div className="min-h-screen bg-slate-50 flex items-center justify-center">Loading...</div>;
  }


 const servicesData = [
  {
    icon: <HandshakeIcon size={80} weight="fill" className="text-orange-600" />,
    heading: "Get Listed With Us",
    description: "Collaborate with verified NGOs and CSR partners who share genuine values and commitment to change.",
    buttonText:"Get Listed",
    buttonLink:"get-listed"
  },
  {
    icon: <UsersThreeIcon size={80} weight="fill" className="text-teal-600" />,
    heading: "Profile",
    description: "Our NGO success team provides continuous assistance from setup to growth and compliance.",
  }
];


  return <div className="min-h-screen bg-slate-50 lg:px-15 px-5 py-15">
                      <FeaturesSection
                        features={servicesData}
                        title={"Our Services and support"}
                        
                      />
  </div>;
};

export default RegistrationController;
import React from "react";
import { GlobeHemisphereWestIcon } from "@phosphor-icons/react";
import CardSection from "@/assets/theme/CardSection";
const data = [
  {
    icon: <GlobeHemisphereWestIcon size={60} weight="duotone" className="text-green-600" />,
    name: "Company Name",
    info: "Company Info with confidence. We make it easy for NGOs to get online, be seen, and start creating impact faster.",
  },
  {
    icon: <GlobeHemisphereWestIcon size={60} weight="duotone" className="text-green-600" />,
    name: "Company Name",
    info: "Company Info with confidence. We make it easy for NGOs to get online, be seen, and start creating impact faster.",
  },
  {
    icon: <GlobeHemisphereWestIcon size={60} weight="duotone" className="text-green-600" />,
    name: "Company Name",
    info: "Company Info with confidence. We make it easy for NGOs to get online, be seen, and start creating impact faster.",
  },
];

const CaseStudies: React.FC = () => {
  return (
    <div className="px-4 lg:px-15 mb-10">
      <CardSection
      title="Our Case Studies"
      data={data}
      center={true}
      />



    </div>
  );
};

export default CaseStudies;

import React from "react";
import CardSection from "@/assets/theme/CardSection";
const data = [
  {
    icon: <img src="/clients/vasundharaMaitri.png"  className="text-green-600 bg-black" />,
    name: "Vasundhara Maitri ",
    info: "Strengthening their voice for the planet. By improving their online presence, we made it simpler for supporters to discover their environmental initiatives."
    },
  {
    icon: <img src="/clients/matagujri.png"  className="text-green-600" />,
    name: "Mata Gujri Ji Birdh Ashram",
    info: "Supporting dignified elder care. We helped the organization present its work with clarity and trust, making it easier for donors to understand their impact.",
  },  {
    icon: <img src="/clients/JJEducation.png"  className="text-green-600" />,
    name: "J.J Education Academy",
    info: "Helping education reach more children. We enhanced their digital identity so parents, students, and well-wishers can easily connect with their programs.",
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

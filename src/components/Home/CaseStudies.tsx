import React from "react";
import { GlobeHemisphereWestIcon } from "@phosphor-icons/react";
import HeroTitle from "@/assets/HeadingText/HeroTitle";

const data = [
  {
    name: "Company Name",
    info: "Company Info with confidence. We make it easy for NGOs to get online, be seen, and start creating impact faster.",
  },
  {
    name: "Company Name",
    info: "Company Info with confidence. We make it easy for NGOs to get online, be seen, and start creating impact faster.",
  },
  {
    name: "Company Name",
    info: "Company Info with confidence. We make it easy for NGOs to get online, be seen, and start creating impact faster.",
  },
];

const CaseStudies: React.FC = () => {
  return (
    <div className="px-4 lg:px-15 mb-10">
    <div className="w-full bg-[#6ab0d6] pt-6 pb-12 rounded-2xl px-6 lg:px-12.5 ">
      {/* Title */}
      {/* <h2 className="text-center text-2xl font-semibold text-white mb-9">
        Our Case Studies
      </h2> */}
      <HeroTitle
      heading="Our Case Studies"
        className="text-center mb-9"
        color="#fff"
        />

      {/* Cards container */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-14 px-4">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 shadow-md border border-gray-200 w-full max-w-sm lg:max-w-[320px]"
          >
            <div className="flex justify-center mb-4">
              <GlobeHemisphereWestIcon size={60} weight="duotone" className="text-green-600" />
            </div>

            <h3 className="text-center text-lg font-medium mb-2">
              {item.name}
            </h3>

            <p className="text-sm text-center">
              <span className="font-semibold">Company Info</span> {item.info.replace("Company Info", "")}
            </p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default CaseStudies;

import React from "react";
import HeroTitle from "@/assets/HeadingText/HeroTitle";
import HeroDescription from "../HeadingText/HeroDescription";
import { ArrowRightIcon } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";
import IconHolder from "@/assets/ButtonDesigns/IconHolder";

interface CardSectionProps {
  title: string;
  data: {
    icon?: React.ReactNode;
    name: string;
    info: string;
    list?: string[];
    listIcon?: React.ReactNode;
    link?: string;
  }[];
  center?: boolean;
}

const CardSection = ({ title, data, center = false }: CardSectionProps) => {
  const navigate = useNavigate();
  
  return (
    <div className="px-4 lg:px-15 mb-10">
      <div className="w-full bg-[#AFCDDD] pt-6 pb-12 rounded-2xl px-6 lg:px-12.5 ">
        <HeroTitle
          heading={title}
          className={`mb-9 text-center`}
          color="#fff"
        />

        <div
          className={`grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 px-4 ${
            center
              ? "place-items-center text-center justify-center items-center"
              : ""
          }`}
        >
          {data.map((item, index) => (
            <div
              key={index}
              // Added flex flex-col to ensure proper vertical flow
              className="bg-white rounded-xl p-6 shadow-md border border-gray-200 w-full max-w-sm lg:max-w-[320px] flex flex-col"
            >
              <div className="mb-4">
                <IconHolder icon={item.icon} />
              </div>
              
              <div className="mb-2">
                <HeroTitle heading={item.name} size={20} />
              </div>
              
              <HeroDescription
                text={item.info}
                size={16}
                color={"#6A7282"}
              />

              {/* LIST SECTION */}
              {item.list && item.listIcon && (
                // mt-6 = 24px (based on design annotations)
                // gap-3 = 12px (based on design annotations)
                <div className="mt-6 flex flex-col gap-3">
                  {item.list.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      {/* shrink-0 ensures icon doesn't squish on long text */}
                      <span className="shrink-0 mt-0.5 text-blue-500">
                        {item.listIcon}
                      </span>
                      <HeroDescription 
                        text={point} 
                        size={14} 
                        color="#4B5563" // Changed to dark gray for visibility on white card
                      />
                    </div>
                  ))}
                </div>
              )}

              {/* READ MORE LINK */}
              {item.link && (
                // mt-6 = 24px spacing from content above
                <div
                  className="mt-6 flex items-center gap-2 cursor-pointer hover:opacity-75 transition-opacity"
                  onClick={() => navigate(item.link!)}
                >
                  <HeroDescription text={"Read More"} size={16} color="#000" />
                  <ArrowRightIcon
                    size={16}
                    weight="bold"
                    className="text-black"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardSection;
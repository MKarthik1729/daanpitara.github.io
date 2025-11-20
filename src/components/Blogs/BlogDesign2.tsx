import React from "react";
import { CalendarBlankIcon, ClockIcon } from "@phosphor-icons/react";
import HeroTitle from "@/assets/HeadingText/HeroTitle";
import HeroDescription from "@/assets/HeadingText/HeroDescription";

interface CardProps {
  img: string;
  label?: string;
  heading: string;
  description: string;
  date?: string;
  readTime?: string;
  readMoreLink?: string;
}

const Card: React.FC<CardProps> = ({
  img,
  label = "News",
  heading,
  description,
  date = "Nov 5, 2025",
  readTime = "5 min read",
  readMoreLink,
}) => {
  return (
    <div className="
      flex flex-col md:flex-row 
      bg-white rounded-3xl p-4 gap-6 
      hover:shadow-md transition-all 
      max-w-4xl items-center md:items-start
    ">
      
      {/* LEFT IMAGE (Responsive) */}
      <div className="
        relative 
        w-full md:min-w-[288px] md:max-w-[260px] 
        h-[220px] md:h-[224px]
        flex-shrink-0
      ">
        <img
          src={img}
          alt={heading}
          className="w-full h-full object-cover rounded-2xl"
        />

        <span className="absolute top-3 left-3 bg-white text-blue-600 text-sm px-3 py-1 rounded-full shadow">
          {label}
        </span>
      </div>

      {/* RIGHT CONTENT */}
      <div className="flex flex-col justify-between flex-1 pr-0 md:pr-4 w-full h-full">

        <div>
          <HeroTitle
            heading={heading}
            size={20}
            color="#0A0A0A"
            className="mb-3"
          />

          <HeroDescription
            text={description}
            size={16}
            color="#4A5565"
            no_of_lines={3}
            className="mb-6 md:mb-8"
          />
        </div>

        {/* BOTTOM SECTION */}
        <div className="flex items-center justify-between w-full mt-auto gap-4">

          {/* DATE + READ TIME */}
          <div className="flex items-center gap-3 sm:gap-5 text-gray-500 text-sm flex-wrap">
            <div className="flex items-center gap-1 whitespace-nowrap">
              <CalendarBlankIcon size={18} />
              <span>{date}</span>
            </div>

            <div className="flex items-center gap-1 whitespace-nowrap">
              <ClockIcon size={18} />
              <span>{readTime}</span>
            </div>
          </div>

          {/* LEARN MORE BUTTON - FIXED */}
          <a
            href={readMoreLink || "#"}
            className="
              bg-blue-500 text-white px-5 py-2 rounded-xl font-medium 
              hover:bg-blue-600 transition 
              whitespace-nowrap flex-shrink-0
            "
          >
            Learn more →
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
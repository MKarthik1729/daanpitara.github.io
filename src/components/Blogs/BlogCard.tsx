import React from "react";
import { CalendarBlank, Clock } from "@phosphor-icons/react";

interface CardProps {
  img: string;
  heading: string;
  date: string | Date;
  readTime: number;
  readMoreLink?: string;
}

const Card: React.FC<CardProps> = ({ img, heading, date, readTime, readMoreLink }) => {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300 bg-gray-50 ">
      <div className="overflow-hidden">
        <img
          src={img}
          alt={heading}
          className="w-full h-68 object-cover transform transition-transform duration-300 hover:scale-130"
        />
      </div>

      <div className="flex flex-col justify-between flex-1 p-4">
        {/* Allow multiline heading */}
        <h2 className="text-lg font-semibold text-gray-800 mb-3 leading-snug line-clamp-none">
          {heading}
        </h2>

        <a
          href={readMoreLink || "#"}
          className="text-blue-600 text-sm font-medium hover:underline mb-3"
        >
          Read more →
        </a>

        <hr className="my-2 border-gray-300" />

        <div className="flex items-center justify-between text-gray-600 text-sm mt-auto">
          <div className="flex items-center gap-1">
            <CalendarBlank size={16} weight="regular" />
            <span>{formattedDate}</span>
          </div>

          <div className="flex items-center gap-1">
            <Clock size={16} weight="regular" />
            <span>{readTime} min read</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

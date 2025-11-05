import React from "react";

interface CardProps {
  label?: string; // e.g. "News"
  heading: string;
  description: string;
  readMoreLink?: string;
}

const Card: React.FC<CardProps> = ({  label = "News", heading, description, readMoreLink }) => {

  return (
    <div className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200 max-w-sm">

      <div className="flex flex-col p-5 gap-5">
        <span className="text-blue-600 text-sm font-medium">{label}</span>
   

        <h2 className="text-2xl font-bold text-gray-900">
          {heading}
        </h2>

        <p className="text-gray-600 text-base mb-4">
          {description}
        </p>

        <a
          href={readMoreLink || "#"}
          className="text-blue-600 text-sm font-medium hover:underline mt-auto"
        >
          Learn more →
        </a>
      </div>
    </div>
  );
};

export default Card;

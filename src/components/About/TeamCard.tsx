import React from "react";

interface CardProps {
  img: string;
  label?: string; // e.g. "News"
  heading: string;
  description: string;
  readMoreLink?: string;
}

const Card: React.FC<CardProps> = ({ img, label = "News", heading, description, readMoreLink }) => {
  console.log(label,readMoreLink);
  return (
    <div className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200 max-w-sm">
      {/* Image */}
      <div className="bg-gray-100">
        <img
          src={img}
          alt={heading}
          className="w-full h-68 object-cover rounded-t-2xl"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col p-5">
        {/* <span className="text-blue-600 text-sm font-medium mb-2">{label}</span> */}

        <h2 className="text-xl font-semibold text-gray-900 leading-snug mb-3">
          {heading}
        </h2>

        <p className="text-gray-600 text-base mb-4">
          {description}
        </p>

        {/* <a
          href={readMoreLink || "#"}
          className="text-blue-600 text-sm font-medium hover:underline mt-auto"
        >
          Learn more →
        </a> */}
      </div>
    </div>
  );
};

export default Card;

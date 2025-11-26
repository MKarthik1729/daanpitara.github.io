import React from "react";

interface GradientCardProps {
  icon: React.ReactNode;
  children?: React.ReactNode;
}

const GradientCard: React.FC<GradientCardProps> = ({ icon, children }) => {
  return (
    <div
      className="
        rounded-lg
        p-[18px_20px]
        items-start
        gap-[10px]
        bg-[linear-gradient(180deg,rgba(54,178,241,0.10)_0%,rgba(31,103,139,0.10)_100%)]
        w-[70px]
      "
    >
      <div className="flex items-center">
        {icon}
      </div>
    </div>
  );
};

export default GradientCard;

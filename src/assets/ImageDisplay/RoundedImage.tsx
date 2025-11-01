// RoundedImage.tsx
import React from "react";

interface RoundedImageProps {
  src: string;
  alt?: string;
  className?: string;
}

const RoundedImage: React.FC<RoundedImageProps> = ({ src, alt = "", className = "" }) => {
  return (
    <div
      className={`overflow-hidden rounded-full w-full h-full object-cover ${className}`}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default RoundedImage;

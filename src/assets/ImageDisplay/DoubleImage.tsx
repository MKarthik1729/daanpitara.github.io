// OverlappingImages.tsx
import React from "react";
import RoundedImage from "./RoundedImage";

interface OverlappingImagesProps {
  leftImage: string;
  rightImage: string;
}

const OverlappingImages: React.FC<OverlappingImagesProps> = ({ leftImage, rightImage }) => {
  return (
    <div className="relative flex items-center justify-center mb-20">
      {/* Left (shorter) image */}
      <div className="absolute left-0 z-10 w-40 h-80 md:w-48 md:h-80 translate-x-[-27%] translate-y-[35%]">
        <RoundedImage src={leftImage} className="rounded-[45%]" />
      </div>

      {/* Right (taller) image */}
      <div className="w-50 h-120 md:w-72 md:h-120 z-0 translate-x-[15%] ml-10">
        <RoundedImage src={rightImage} className="rounded-[30%]" />
      </div>
    </div>
  );
};

export default OverlappingImages;

import ImageCard from "@/assets/ImageDisplay/ImageCard";
import Globe from "@/assets/Images/globe.jpg";
import HighlightButton from "@/assets/ButtonDesigns/HighlightButton";
import TopicHeading from "@/assets/HeadingText/TopicHeading";
import TopicDesc from "@/assets/HeadingText/TopicDesc";

export default function Landing() {
  return (
    <div className="flex flex-col lg:flex-row gap-6 lg:gap-16 items-center lg:items-stretch p-4 sm:p-6 lg:p-12">
      {/* Left Section */}
      <div className="flex flex-col justify-center flex-1 text-center lg:text-left space-y-4 lg:space-y-5 max-w-xl">
        <TopicHeading heading="Trusted Digital Platform for NGOs & Fundraising" />

        <TopicDesc
          heading="DaanPitara empowers NGOs worldwide to grow digitally, raise funds, and build top CSR funding opportunities through digital branding, fundraising tools, and transparent donor engagement for lasting impact."
        />

        {/* Highlight Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start pt-2">
          <HighlightButton to="/register" text="Register your NGO Now" />
          <HighlightButton to="/fund-form" text="Grow with DaanPitara" />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-1 items-center justify-center mt-6 lg:mt-0 w-full">
        <ImageCard
          src={Globe}
          altImage="/images/fallback.png"
          altText="Globe illustration"
          className="rounded-full border border-gray-300 w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-full lg:h-full object-cover shadow-md"
        />
      </div>
    </div>
  );
}

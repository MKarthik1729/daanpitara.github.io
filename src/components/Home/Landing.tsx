import ImageCard from "@/assets/ImageDisplay/ImageCard";
import Globe from "@/assets/Images/globe.jpg";
import HighlightButton from "@/assets/ButtonDesigns/HighlightButton";
import TopicHeading from "@/assets/HeadingText/TopicHeading";
import TopicDesc from "@/assets/HeadingText/TopicDesc";

export default function Landing() {
  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center lg:items-stretch p-6 lg:p-12">
      {/* Left Section */}
      <div className="flex flex-col justify-center flex-1 text-center lg:text-left space-y-4 lg:space-y-5 max-w-xl">
        <TopicHeading heading="Trusted Digital Platform for NGOs & Fundraising" />
        {/* <p className="text-base sm:text-lg lg:text-lg text-gray-700 leading-relaxed">
          DaanPitara empowers NGOs worldwide to grow digitally, raise funds, and build top CSR funding
          opportunities through digital branding, fundraising tools, and transparent donor engagement for
          lasting impact.
        </p> */}

        <TopicDesc heading = "DaanPitara empowers NGOs worldwide to grow digitally, raise funds, and build top CSR funding opportunities through digital branding, fundraising tools, and transparent donor engagement for lasting impact."/>

        {/* Highlight Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
          <HighlightButton to="/register" text="Register your NGO Now" />
          <HighlightButton to="/fund-form" text="Grow with DaanPitara" />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-1 items-center justify-center mt-8 lg:mt-0">
        <ImageCard
          src={Globe}
          altImage="/images/fallback.png"
          altText="Globe illustration"
          className="rounded-full border border-gray-300 w-48 h-48 sm:w-56 sm:h-56 md:w-full lg:w-full lg:h-full object-cover shadow-md"
        />
      </div>
    </div>
  );
}

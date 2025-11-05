// import DoubleImage from "@/assets/ImageDisplay/DoubleImage";
import Globe from "@/assets/Images/globe.jpg";
// import Tag from "@/assets/HeadingText/Tag";
// import { HeartIcon, HandshakeIcon, GlobeHemisphereWestIcon } from "@phosphor-icons/react";
import ImageCard from "@/assets/ImageDisplay/ImageCard";
import SubsectionHeading from "@/assets/HeadingText/SubsectionHeading";

export default function Mission() {
  return (
    <div className="lg:flex mt-20 items-start justify-center gap-10 ">
      <div className="flex flex-col space-y-10 max-w-xl justify-center lg:pt-20 sm:pt-5">
        {/* Mission Tag */}
        {/* <Tag text="Our Vision" /> */}

        {/* Section Heading */}
        <h1 className="text-4xl font-bold text-gray-900 text-center">
          Our Mission
        </h1>

        {/* Items */}
        <div className="space-y-6">


        <SubsectionHeading heading="To empower NGOs worldwide with digital tools, data-driven visibility, and transparent donor connections, creating a future where compassion meets innovation." />


        </div>
      </div>
            {/* <div className="flex justify-center mx-20">
        <DoubleImage leftImage={Globe} rightImage={Globe} />
      </div> */}
            <div className="flex flex-1 items-center justify-center mt-8 lg:mt-0">
        <ImageCard
          src={Globe}
          altImage="/images/fallback.png"
          altText="Globe illustration"
          className="rounded-full border border-gray-300 w-35 h-35 sm:w-56 sm:h-56 md:w-full lg:w-full lg:h-full object-cover shadow-md"
        />
        </div>
    </div>
  );
}

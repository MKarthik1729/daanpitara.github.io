// import DoubleImage from "@/assets/ImageDisplay/DoubleImage";
import Globe from "@/assets/Images/globe.jpg";
import Tag from "@/assets/HeadingText/Tag";
import { HeartIcon, HandshakeIcon, GlobeHemisphereWestIcon } from "@phosphor-icons/react";
import ImageCard from "@/assets/ImageDisplay/ImageCard";

export default function Mission() {
  return (
    <div className="lg:flex mt-20 items-start justify-center gap-10 ">
      {/* Left Images */}


      {/* Right Content */}
      <div className="flex flex-col space-y-10 max-w-xl">
        {/* Mission Tag */}
        <Tag text="Our Vision" />

        {/* Section Heading */}
        <h1 className="text-4xl font-bold text-gray-900">
          Supporting Communities Through Meaningful Actions
        </h1>

        {/* Items */}
        <div className="space-y-6">
          {/* Compassionate Outreach */}
          <div className="flex items-start gap-4">
            <div className="bg-green-100 p-4 rounded-full shadow-md flex items-center justify-center">
              <HeartIcon size={32} weight="fill" className="text-green-600" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-1">
                Compassionate Outreach
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We aim to uplift communities through empathy-driven initiatives
                that focus on well-being and equality for all.
              </p>
            </div>
          </div>

          {/* Empowerment Programs */}
          <div className="flex items-start gap-4">
            <div className="bg-blue-100 p-4 rounded-full shadow-md flex items-center justify-center">
              <HandshakeIcon size={32} weight="fill" className="text-blue-600" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-1">
                Empowerment Programs
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Our mission is to empower individuals with education, resources,
                and opportunities for sustainable growth.
              </p>
            </div>
          </div>

          {/* Global Impact */}
          <div className="flex items-start gap-4">
            <div className="bg-yellow-100 p-4 rounded-full shadow-md flex items-center justify-center">
              <GlobeHemisphereWestIcon
                size={32}
                weight="fill"
                className="text-yellow-600"
              />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-1">
                Global Impact
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We collaborate across borders to create meaningful change and
                promote global solidarity for a better future.
              </p>
            </div>
          </div>
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
          className="rounded-full border border-gray-300 w-48 h-48 sm:w-56 sm:h-56 md:w-full lg:w-full lg:h-full object-cover shadow-md"
        />
        </div>
    </div>
  );
}

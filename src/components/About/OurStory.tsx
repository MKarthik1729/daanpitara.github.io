import DoubleImage from "@/assets/ImageDisplay/DoubleImage";
// import Globe from "@/assets/Images/globe.jpg";
// import Tag from "@/assets/HeadingText/Tag";
// import { HeartIcon, HandshakeIcon, GlobeHemisphereWestIcon } from "@phosphor-icons/react";

export default function Mission() {
  return (
    <div className="lg:flex mt-20 items-start justify-center gap-10 ">
      {/* Left Images */}
      <div className="flex justify-center mx-20">
        <DoubleImage rightImage={"/story1.jpg"} leftImage={"/support.jpg"} />
      </div>

      {/* Right Content */}
      <div className="flex flex-col space-y-10 max-w-xl lg:pt-20 sm:pt-8">
        {/* Mission Tag */}
        {/* <Tag text="Our Story" /> */}

        {/* Section Heading */}
        <h1 className="text-4xl font-bold text-gray-900">
          Our Story
        </h1>

        {/* Items */}
        <div className="space-y-6">
          {/* Compassionate Outreach */}
          <div className="flex items-start gap-4">
              <p className="text-gray-700 leading-relaxed">
                Founded with a belief that every act of kindness deserves to be seen and supported, DaanPitara connects NGOs, donors, and CSR partners through technology and trust.
              </p>
          </div>
          <div className="flex items-start gap-4">
              <p className="text-gray-700 leading-relaxed">
                What started as a small initiative in India has now grown into a global networking areas, helping changemakers raise funds, build credibility, and grow their impact online.
              </p>
          </div>          

          {/* Empowerment Programs */}
          {/* <div className="flex items-start gap-4">
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
          </div> */}

          {/* Global Impact */}
          {/* <div className="flex items-start gap-4">
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
          </div> */}
        </div>
      </div>
    </div>
  );
}

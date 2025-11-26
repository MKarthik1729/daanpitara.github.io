import SubsectionHeading from "@/assets/HeadingText/SubsectionHeading";
import {
 GlobeIcon,
 HandshakeIcon,
 MagnifyingGlassIcon,
} from "@phosphor-icons/react";

export default function About() {
  const principles =[
  {
    icon: <GlobeIcon size={48} weight="duotone" className="text-bg-white" />,
    title: "Digital Growth & Branding",
    description:
      "Empowering NGOs to build strong online identities.",
  },
  {
    icon: <HandshakeIcon size={48} weight="duotone" className="text-bg-white" />,
    title: "Fundraiser Matchmaking",
    description:
      "Connecting verified NGOs with genuine donors and CSR programs.",
  },
  {
    icon: <MagnifyingGlassIcon size={48} weight="duotone" className="text-bg-white" />,
    title: "Transparent Engagement",
    description:
      "Ensuring every donation is traceable, measurable, and meaningful.",
  },
];


  return (
    <div className="text-center py-6 px-5 bg-gray-50 flex flex-col items-center gap-8 sm:pt-10">
      {/* <Tag text="What we do" /> */}
              <h1 className="text-4xl font-bold text-gray-900 text-center">
          What we do
        </h1>
      {/* <SectionHeading heading="What we do" /> */}
      <SubsectionHeading heading="At DaanPitara, we bridge the gap between purpose and opportunity through:" />
      {/* <HighlightButton text="Learn More" /> */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8  w-full max-w-6xl text-bg-white">
        {principles.map((item, index) => (
          <div
            key={index}
            className="bg-brand-blue shadow-lg rounded-xl p-6 flex flex-col items-center text-center hover:shadow-2xl transition"
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-bg-white">{item.description}</p>
          </div>
        ))}
      </div>
      <SubsectionHeading heading="Whether you’re an NGO looking to expand your reach or a donor seeking trusted causes, we make giving simple, safe, and scalable." />
    </div>
  );
}

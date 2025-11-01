import Tag from "@/assets/HeadingText/Tag";
import SectionHeading from "@/assets/HeadingText/SectionHeading";
// import HighlightButton from "@/assets/ButtonDesigns/HighlightButton";
import {
  HandsClappingIcon,
  StarIcon,
  ShieldCheckIcon
} from "@phosphor-icons/react";

export default function About() {
  const principles = [
    {
      icon: <HandsClappingIcon size={48} weight="duotone" className="text-bg-white" />,
      title: "Compassion",
      description:
        "We prioritise empathy and understanding, ensuring every NGO partner feels supported and empowered in their mission.",
    },
    {
      icon: <StarIcon size={48} weight="duotone" className="text-bg-white" />,
      title: "Excellence",
      description:
        "We are committed to delivering the highest standards of service in helping NGOs achieve their goals and impact.",
    },
    {
      icon: <ShieldCheckIcon size={48} weight="duotone" className="text-bg-white" />,
      title: "Integrity",
      description:
        "We uphold honesty and transparency in all interactions, building trust with NGOs, donors, and the communities they serve.",
    },
  ];

  return (
    <div className="text-center py-16 px-5 bg-gray-50 flex flex-col items-center gap-8">
      <Tag text="Our Values" />
      <SectionHeading heading="Core principles guiding our healthcare mission" />
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
    </div>
  );
}

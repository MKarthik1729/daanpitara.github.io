// import SectionHeading from "@/assets/Headings/SectionHeading";
import type { JSX } from "react";
import TopicHeading from "@/assets/HeadingText/TopicHeading";
import CardHeading from "@/assets/HeadingText/CardHeading";
import CardDesc from "@/assets/HeadingText/CardDesc";
import TopicDesc from "@/assets/HeadingText/TopicDesc";
// src/data/featuresData.tsx

import {

    HandshakeIcon,
  IdentificationBadgeIcon,
  FileTextIcon,
  GlobeHemisphereEastIcon,
  ChatsCircleIcon,
  // FileMedicalIcon,
  UsersThreeIcon,
} from "@phosphor-icons/react";
// import Card from "../Blogs/TextBlog";

export interface FeatureItem {
  icon: JSX.Element;
  heading: string;
  description: string;
}

export const featuresData: FeatureItem[] = [
  {
    icon: <HandshakeIcon size={40} weight="fill" className="text-blue-600" />,
    heading: "Seamless Onboarding",
    description:
      "Start your journey with confidence. We make it easy for NGOs to get online, be seen, and start creating impact faster.",
  },
  {
    icon: <IdentificationBadgeIcon size={40} weight="fill" className="text-green-600" />,
    heading: "Verified NGO Profiles",
    description:
      "Show the world who you are. Verified listings build trust and help donors connect with your story and mission.",
  },
  {
    icon: <UsersThreeIcon size={40} weight="fill" className="text-purple-600" />,
    heading: "CSR Matchmaking",
    description:
      "Find partners who care as much as you do. We connect you with purpose-driven brands through the best CSR partnership platform in India.",
  },
  {
    icon: <FileTextIcon size={40} weight="fill" className="text-pink-600" />,
    heading: "Compliance & DPR Guidance",
    description:
      "We take the stress out of documentation so you can focus on what matters most — your cause and your community.",
  },
  {
    icon: <GlobeHemisphereEastIcon size={40} weight="fill" className="text-yellow-600" />,
    heading: "Mission Growth Network",
    description:
      "Join a growing ecosystem of 1000+ NGOs working together to share learning, resources, and collective impact.",
  },
  {
    icon: <ChatsCircleIcon size={40} weight="fill" className="text-teal-600" />,
    heading: "Personalized NGO Mentorship",
    description:
      "Get one-on-one guidance from experts who truly understand your challenges. Together, we build confidence, clarity, and a sustainable path forward.",
  },
];





// src/components/FeaturesSection.tsx

// interface FeatureItem {
//   icon: JSX.Element;
//   heading: string;
//   description: string;
// }

interface FeaturesSectionProps {
  features: FeatureItem[];
  title?: string;
  subtitle?: string;

}
export default function FeaturesSection({
  features,
  title = "Our Healthcare Features",
  subtitle = "Explore the tools and services that make your healthcare experience simple, personalized, and accessible anytime.",
}: FeaturesSectionProps) {
  return (
    <section className="px-8 py-8  bg-gray-50">
      {/* Title and subtitle */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        {/* <h2 className="text-3xl font-bold text-gray-800 mb-3">{title}</h2> */}
        <TopicHeading heading={title} />
        {/* <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p> */}
        <TopicDesc heading={subtitle} className="mt-5" />
      </div>

      {/* Grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-8 border border-gray-200 rounded-2xl bg-white shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-200"
          >
            <div className="mb-4 p-3 bg-blue-50 rounded-full">
              {feature.icon}
            </div>
            {/* <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {feature.heading}
            </h3> */}
            <CardHeading heading={feature.heading} />

            {/* <p className="text-gray-600 text-sm">{feature.description}</p> */}
            <CardDesc heading={feature.description} className="mt-5" />
          </div>
        ))}
      </div>
    </section>
  );
}

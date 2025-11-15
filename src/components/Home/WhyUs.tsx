import type { JSX } from "react";
import HeroTitle from "@/assets/HeadingText/HeroTitle";
import HeroDescription from "@/assets/HeadingText/HeroDescription";

export interface FeatureItem {
  icon: JSX.Element | string;
  heading: string;
  description: string;
}

export const featuresData: FeatureItem[] = [
  {
    icon: './icons/s1.svg',
    heading: "Seamless Onboarding",
    description:
      "Start your journey with confidence. We make it easy for NGOs to get online, be seen, and start creating impact faster.",
  },
  {
    icon: './icons/s2.svg',
    heading: "Verified NGO Profiles",
    description:
      "Show the world who you are. Verified listings build trust and help donors connect with your story and mission.",
  },
  {
    icon: './icons/s3.svg',
    heading: "CSR Matchmaking",
    description:
      "Find partners who care as much as you do. We connect you with purpose-driven brands through the best CSR partnership platform in India.",
  },
  {
    icon: './icons/s4.svg',
    heading: "Compliance & DPR Guidance",
    description:
      "We take the stress out of documentation so you can focus on what matters most — your cause and your community.",
  },
  {
    icon: './icons/s5.svg',
    heading: "Mission Growth Network",
    description:
      "Join a growing ecosystem of 1000+ NGOs working together to share learning, resources, and collective impact.",
  },
  {
    icon: './icons/s6.svg',
    heading: "Personalized NGO Mentorship",
    description:
      "Get one-on-one guidance from experts who truly understand your challenges. Together, we build confidence, clarity, and a sustainable path forward.",
  },
];





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
    <section className="lg:px-15 px-5 py-10  bg-bg-blue flex flex-col gap-10 rounded-2xl">
      <div className="max-w-7xl mx-auto">
        <HeroTitle heading={title}
        color="#fff"
        />
        <HeroDescription text={subtitle} 
        color="#D6D6D6"
        size={20}
        className="mt-3" />
      </div>

      {/* Grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col text-start  p-8 border border-gray-200 rounded-2xl bg-white shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-200"
          >
            <div className="mb-4 p-3 rounded-full">
              {typeof feature.icon=== "string"? (
                <img
                  src={feature.icon}
                  alt={feature.heading}
                  className="w-[86px] h-[80px]"
                />
              ) : 
              (feature.icon)
              } 
                  

            </div>
            <HeroTitle 
            heading={feature.heading}
            color="#0A0A0A"
            size={20}
           />

            <HeroDescription 
            text={feature.description} 
            color="var(--Grey-1, #4C4B4B)"
            size={16}
            no_of_lines={3}
            />
              <div
                className="w-34 h-[40px] flex justify-center items-center bg-[#86D1F7] rounded-lg"
              
              >

              <p
              className="text-[#fff]"
              >
                Book a call
              </p>
              </div>
          </div>
        ))}
      </div>
    </section>
  );
}

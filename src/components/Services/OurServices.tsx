import { 
  DesktopIcon, 
  HandshakeIcon, 
  ToolboxIcon, 
  CheckIcon 
} from "@phosphor-icons/react";

import CardSection from "@/assets/theme/CardSection";

export default function OurServices() {
  const ourServicesData = {
    title: "Our Services",
    data: [
      {
        icon: <DesktopIcon size={60} weight="duotone" className="text-sky-600" />,
        name: "Digital Branding & Online Presence",
        info: "Build a compelling digital identity that showcases your mission and attracts supporters.",
        list: [
          "Brand storytelling and messaging",
          "SEO optimization for discoverability",
          "Digital marketing strategy",
        ],
        listIcon: <CheckIcon size={16} weight="bold" className="text-sky-600" />,
        link: '#'
      },
      {
        icon: <HandshakeIcon size={60} weight="duotone" className="text-sky-600" />,
        name: "CSR Partnership Facilitation",
        info: "Connect with corporate partners aligned with your mission for meaningful collaborations.",
        list: [
          "Curated CSR opportunity matching",
          "Corporate outreach support",
          "Relationship management tools",
        ],
        listIcon: <CheckIcon size={16} weight="bold" className="text-sky-600" />,
        link: '#'
      },
      {
        icon: <ToolboxIcon size={60} weight="duotone" className="text-sky-600" />,
        name: "Fundraising Tools & Donor Engagement",
        info: "Streamline fundraising with tools that make giving easy, transparent, and impactful.",
        list: [
          "Curated CSR opportunity matching",
          "Corporate outreach support",
          "Relationship management tools",
        ],
        listIcon: <CheckIcon size={16} weight="bold" className="text-sky-600" />,
        link: '#'
      },
    ]
  }

  return (
    <CardSection
      title={ourServicesData.title}
      data={ourServicesData.data}
    />
  );
}

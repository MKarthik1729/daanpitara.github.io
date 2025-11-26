import { 
  UsersThreeIcon, 
  FileTextIcon, 
  HandshakeIcon, 
  ChartPieSliceIcon, 
  GearIcon, 
  ShieldCheckIcon 
} from "@phosphor-icons/react";

import CardSection from "@/assets/theme/CardSection";

export default function WhyUs() {
  const whypeoplechooseus = {
    title: "Why Choose DaanPitara",
    data: [
      {
        icon: <UsersThreeIcon size={34} weight="duotone" className="text-sky-600" />,
        name: "Transparent Engagement",
        info: "Every transaction and partnership is visible, verifiable, and built on trust.",
      },
      {
        icon: <FileTextIcon size={34} weight="duotone" className="text-sky-600" />,
        name: "CSR-Ready Documentation",
        info: "Pre-built templates that meet corporate compliance requirements.",
      },
      {
        icon: <HandshakeIcon size={34} weight="duotone" className="text-sky-600" />,
        name: "Trusted by NGOs",
        info: "Over 1,000 verified nonprofits trust DaanPitara for their digital growth.",
      },
      {
        icon: <ChartPieSliceIcon size={34} weight="duotone" className="text-sky-600" />,
        name: "Impact Visualization",
        info: "Powerful analytics tools that showcase your real-world impact.",
      },
      {
        icon: <GearIcon size={34} weight="duotone" className="text-sky-600" />,
        name: "Growth-Focused Tools",
        info: "Scalable solutions designed to grow with your organization.",
      },
      {
        icon: <ShieldCheckIcon size={34} weight="duotone" className="text-sky-600" />,
        name: "Secure & Verified Platform",
        info: "Bank-grade security with multi-layer verification for all organizations.",
      },
    ]
  }
  
  return (
    <CardSection
      title={whypeoplechooseus.title}
      data={whypeoplechooseus.data}
    />
  );
}

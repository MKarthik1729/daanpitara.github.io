import { GlobeHemisphereWestIcon } from "@phosphor-icons/react";
import CardSection from "@/assets/theme/CardSection";

export default function WhyUs() {
  const whypeoplechooseus = {
    title: "Why Choose DaanPitara",
    data:[
       {
    icon: <GlobeHemisphereWestIcon size={60} weight="duotone" className="text-green-600" />,
    name: "Company Name",
    info: "Company Info with confidence. We make it easy for NGOs to get online, be seen, and start creating impact faster.",
  },
  {
    icon: <GlobeHemisphereWestIcon size={60} weight="duotone" className="text-green-600" />,
    name: "Company Name",
    info: "Company Info with confidence. We make it easy for NGOs to get online, be seen, and start creating impact faster.",
  },
  {
    icon: <GlobeHemisphereWestIcon size={60} weight="duotone" className="text-green-600" />,
    name: "Company Name",
    info: "Company Info with confidence. We make it easy for NGOs to get online, be seen, and start creating impact faster.",
  },{
    icon: <GlobeHemisphereWestIcon size={60} weight="duotone" className="text-green-600" />,
    name: "Company Name",
    info: "Company Info with confidence. We make it easy for NGOs to get online, be seen, and start creating impact faster.",
  },
  {
    icon: <GlobeHemisphereWestIcon size={60} weight="duotone" className="text-green-600" />,
    name: "Company Name",
    info: "Company Info with confidence. We make it easy for NGOs to get online, be seen, and start creating impact faster.",
  },
  {
    icon: <GlobeHemisphereWestIcon size={60} weight="duotone" className="text-green-600" />,
    name: "Company Name",
    info: "Company Info with confidence. We make it easy for NGOs to get online, be seen, and start creating impact faster.",
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

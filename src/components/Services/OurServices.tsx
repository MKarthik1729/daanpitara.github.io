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
        list:[
            'this is point 1',
            'this is point 2',
            'this is point 3',
            'this is point 4',
            'this is point 5',
        ],
        listIcon:<GlobeHemisphereWestIcon size={10} weight="fill" />,
        link:'#'
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

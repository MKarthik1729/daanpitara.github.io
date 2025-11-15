import HeroDescription from "@/assets/HeadingText/HeroDescription";
import HeroTitle from "@/assets/HeadingText/HeroTitle";
import DoubleImage from "@/assets/ImageDisplay/DoubleImage";
import { HandshakeIcon } from "@phosphor-icons/react";
import HighlightButton from "@/assets/ButtonDesigns/HighlightButton";

export default function Mission() {

  const specialities = [
    {
      icon: <HandshakeIcon size={40} color="#2563EB" />,
      count: "1000+",
      title: "NGOs Supported",
    },
    {
      icon: <HandshakeIcon size={40} color="#2563EB" />,
      count: "1000+",
      title: "NGOs Supported",
    },
    {
      icon: <HandshakeIcon size={40} color="#2563EB" />,
      count: "1000+",
      title: "NGOs Supported",
    },
    {
      icon: <HandshakeIcon size={40} color="#2563EB" />,
      count: "1000+",
      title: "NGOs Supported",
    },
  ]

  return (
    <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-30 p-4 md:p-8">
      <div className="flex justify-center w-full lg:w-auto flex-1">
        <DoubleImage rightImage={"/story1.jpg"} leftImage={"/support.jpg"} />
      </div>

      <div className="flex-1 flex flex-col max-w-xl gap-10 items-center lg:items-start">
        <div className="lg:text-left">

          <HeroTitle heading="Our Story" />
          <HeroDescription
            text="Founded with a belief that every act of kindness deserves to be seen and supported, DaanPitara connects NGOs, donors, and CSR partners through technology and trust."
            size={20}
          />
          <HeroDescription
            text="What started as a small initiative in India has now grown into a global networking areas, helping changemakers raise funds, build credibility, and grow their impact online."
            size={20}
          />
        </div>
        <div
          className="flex flex-row items-center gap-10 self-stretch"
        >

          {specialities.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-2
              w-[149px] h-[142px] 
              pt-[18px] pr-[8px] pb-[17px] pl-[8px]
              rounded-[14px] border border-[#E5E7EB]/[0.8] bg-white shadow-sm"
            >
              <div>{item.icon}</div>

              <span className="font-bold text-2xl">{item.count}</span>

              <HeroDescription
                text={item.title}
                size={11}
              />

            </div>
          ))}
        </div>
          <HighlightButton 
          text="Join our Mission"
          className="w-full sm:w-auto lg:w-[246px]" 
          
          />

      </div>

    </div>
  );
}

import Card from "@/assets/theme/CardDesign";
import IconHolder from "@/assets/ButtonDesigns/IconHolder";
import HeroTitle from "@/assets/HeadingText/HeroTitle";
import HeroDescription from "@/assets/HeadingText/HeroDescription";

interface CardProps {
    icon: React.ReactNode;
    Heading?: string;
    desc?: string;
    width?: string;
    className?: string;
    headingSize?:number;

}

export default function Aboutus_Card({icon, Heading, desc,width,className= "",headingSize}: CardProps) {
  return (
    <Card
    width={width}
    className={className}
    >
        <IconHolder icon={icon} />
        {Heading && <HeroTitle heading={Heading}
        size={headingSize}
        />}
        {desc && <HeroDescription text={desc}/>}
    </Card>
  );
}

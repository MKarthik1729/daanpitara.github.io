import Tag from "@/assets/HeadingText/Tag";
import ImageCard from "@/assets/ImageDisplay/ImageCard";
import SubsectionHeading from "@/assets/HeadingText/SubsectionHeading";
import SectionHeading from "@/assets/HeadingText/SectionHeading";


export default function About() {
  return (
    <div className="text-center my-5 w-full items-center flex flex-col gap-5">
      <Tag text="About Us" />

      <SectionHeading heading="Redefining Giving with Trust and Technology" />

      <SubsectionHeading heading="In a world full of causes, DaanPitara stands for one mission: to make generosity smarter, transparent, and truly global." />
      <div className="lg:flex lg:flex-row lg:gap-5">
        <ImageCard
          src={"/org2.avif"}
          altImage="/images/fallback.png"
          altText="Globe illustration"
          width="27vw"
          height="80vh"
          className="lg:h-120"
        />
        <ImageCard
          src={"/org1.jpg"}
          altImage="/images/fallback.png"
          altText="Globe illustration"
          width="27vw"
          className="my-10"
        />
        <ImageCard
          src={"/org3.jpg"}
          altImage="/images/fallback.png"
          altText="Globe illustration"
          width="27vw"

        />
      </div>
    </ div>
  );
}

import Tag from "@/assets/HeadingText/Tag";
// import SectionHeading from "@/assets/HeadingText/SectionHeading";
// import HighlightButton from "@/assets/ButtonDesigns/HighlightButton";
import ImageCard from "@/assets/ImageDisplay/ImageCard";
import Globe from "@/assets/Images/globe.jpg";
import SubsectionHeading from "@/assets/HeadingText/SubsectionHeading";


export default function About() {
  return (
    <div className="text-center my-5 w-full items-center flex flex-col gap-5">
      <Tag text="About Us" />
      {/* <SectionHeading heading="Redefining Giving with Trust and Technology" /> */}
              <h1 className="text-4xl font-bold text-gray-900 text-center">
          Redefining Giving with Trust and Technology
        </h1>
      <SubsectionHeading heading="In a world full of causes, DaanPitara stands for one mission: to make generosity smarter, transparent, and truly global." />
      {/* <HighlightButton text="Learn More" /> */}
      <div className="lg:flex lg:flex-row lg:gap-5">
        <ImageCard
          src={Globe}
          altImage="/images/fallback.png"
          altText="Globe illustration"
          width="27vw"
          height="80vh"
          // className="md:h-30"
        // className="rounded-full border border-gray-300 w-48 h-48 sm:w-56 sm:h-56 lg:w-80 lg:h-80 object-cover shadow-md"
        />
        <ImageCard
          src={Globe}
          altImage="/images/fallback.png"
          altText="Globe illustration"
          width="27vw"
        // className="rounded-full border border-gray-300 w-48 h-48 sm:w-56 sm:h-56 lg:w-80 lg:h-80 object-cover shadow-md"
          className="my-10"
        />
        <ImageCard
          src={Globe}
          altImage="/images/fallback.png"
          altText="Globe illustration"
          width="27vw"
        // className="rounded-full borde  r border-gray-300 w-48 h-48 sm:w-56 sm:h-56 lg:w-80 lg:h-80 object-cover shadow-md"
        />
      </div>
    </ div>
  );
}

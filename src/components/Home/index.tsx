import Landing from "./Landing";
// import WhyUs from "./WhyUs";
import SlidingBarWhyUs from "./SlidingBarWhyUs";
import OurStory from "../About/OurStory";
import LatestInsights from "../Blogs/LatestInsights";
// import AddBanner from "@/assets/Hero/AddBanner";
// import CaseStudies from "./CaseStudies";

export default function Home() {
  return (
    <>
          <Landing />
          {/* <AddBanner /> */}
          <SlidingBarWhyUs />
          <OurStory />
          {/* <CaseStudies /> */}
          
          <LatestInsights />
    </>
  );
}

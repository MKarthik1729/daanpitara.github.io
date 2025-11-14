import Landing from "./Landing";
// import WhyUs from "./WhyUs";
import SlidingBarWhyUs from "./SlidingBarWhyUs";
import OurStory from "../About/OurStory";
import LatestInsights from "../Blogs/LatestInsights";

export default function Home() {
  return (
    <>
          <Landing />
          <SlidingBarWhyUs />
          <OurStory />
          <LatestInsights />
    </>
  );
}

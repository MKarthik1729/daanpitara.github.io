import AboutUs from './AboutUs';
import Mission from './OurStory';
// import HowWeWork from './HowWeWork';
import Principles from './WhatWeDO';
import Vision from './Vision';
// import OurTeam from './OurTeam';

export default function About() {
  return (
    <div
    className="px-4 sm:px-6 md:px-8 lg:px-pd-lg"
    >

      <AboutUs />
      <Mission />
      <Principles />
      <Vision />
    </div>

  );
}

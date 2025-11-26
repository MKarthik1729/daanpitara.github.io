// import AboutUs from './AboutUs';
import OurStory from './OurStory';
// import HowWeWork from './HowWeWork';
// import Principles from './WhatWeDO';
// import Vision from './Vision';
import Landing from '../Home/Landing';
// import Mission from './OurStory';
import Mission_Vision_Cards from './Mission_Vision_Cards';
import { EyeIcon, TargetIcon } from '@phosphor-icons/react';
import HeroTitle from '@/assets/HeadingText/HeroTitle';
import HeroDescription from '@/assets/HeadingText/HeroDescription';
import WhyUs from './WhyUs';
// import OurTeam from './OurTeam';

export default function About() {

  const Values = [
    {
      icon: <TargetIcon size={32} weight="fill" />,
      Heading: "Our Mission",
    },
    {
      icon: <TargetIcon size={32} weight="fill" />,
      Heading: "Our Mission",
    },
    {
      icon: <TargetIcon size={32} weight="fill" />,
      Heading: "Our Mission",
    },
    {
      icon: <TargetIcon size={32} weight="fill" />,
      Heading: "Our Mission",
    },
    {
      icon: <TargetIcon size={32} weight="fill" />,
      Heading: "Our Mission",
    },

  ]




  return (
    <div>

      <Landing />
      <OurStory />
      <WhyUs />
      <section className="flex flex-col lg:flex-row gap-14 justify-center items-center my-10">
        <Mission_Vision_Cards
          width="420px"
          icon={<TargetIcon size={32} weight="fill" />}
          Heading="Our Mission"
          desc="To empower NGOs through digital transformation and transparent donor engagement."
        />

        <Mission_Vision_Cards
          width="420px"
          icon={<EyeIcon size={32} weight="fill" />}
          Heading="Our Vision"
          desc="A world where every NGO thrives with the support of engaged and informed donors."
        />
      </section>

      <section className='items-center text-center'>
        <HeroTitle heading="Our Core Values" size={36} />
        <HeroDescription
          text="Comprehensive solutions designed to empower NGOs and enable meaningful CSR partnerships"
        />
        <div className="flex flex-wrap justify-center gap-6 my-10">
          {Values.map((item, index) => (
            <div
              key={index}
              className="w-1/2 sm:w-auto flex justify-center" // 2 per row on mobile, auto width on larger screens
            >
              <Mission_Vision_Cards
                width="150px"
                className="items-center text-center mx-2 justify-center"
                icon={item.icon}
                desc={item.Heading}
              />
            </div>
          ))}
        </div>




      </section>

      <section className='items-center text-center'>
        <HeroTitle heading="Our Core Values" size={36} />
        <HeroDescription
          text="Comprehensive solutions designed to empower NGOs and enable meaningful CSR partnerships"
        />
        <div className='flex flex-row flex-wrap justify-center text-start items-start gap-6 my-10'>
          <Mission_Vision_Cards
            width="290px"
            icon={<TargetIcon size={32} weight="fill" />}
            Heading="Our Mission"
            desc="To empower NGOs through digital transformation and transparent donor engagement."
          />

          <Mission_Vision_Cards
            width="290px"
            icon={<EyeIcon size={32} weight="fill" />}
            Heading="Our Vision"
            desc="A world where every NGO thrives with the support of engaged and informed donors."
          />
          <Mission_Vision_Cards
            width="290px"
            icon={<TargetIcon size={32} weight="fill" />}
            Heading="Our Mission"
            desc="To empower NGOs through digital transformation and transparent donor engagement."
          />



        </div>

      </section>

    </div>

  );
}

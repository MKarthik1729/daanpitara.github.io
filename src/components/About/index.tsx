import OurStory from './OurStory';
import Landing from '../Home/Landing';
import Mission_Vision_Cards from './Mission_Vision_Cards';
import { EyeIcon, TargetIcon } from '@phosphor-icons/react';
import HeroTitle from '@/assets/HeadingText/HeroTitle';
import HeroDescription from '@/assets/HeadingText/HeroDescription';
import WhyUs from './WhyUs';

// UPDATED IMPORTS — all icons now have `Icon` suffix
import { 
  MagnifyingGlassIcon, 
  ShieldCheckIcon, 
  TargetIcon as TargetFillIcon, 
  HandFistIcon, 
  UsersThreeIcon,
  GlobeIcon,
  HandshakeIcon,
  ChartBarIcon
} from "@phosphor-icons/react";

export default function About() {

  const Values = [
    {
      icon: <MagnifyingGlassIcon size={32} weight="duotone" className="text-sky-600" />,
      Heading: "Transparency",
    },
    {
      icon: <ShieldCheckIcon size={32} weight="duotone" className="text-sky-600" />,
      Heading: "Trust",
    },
    {
      icon: <TargetFillIcon size={32} weight="duotone" className="text-sky-600" />,
      Heading: "Impact",
    },
    {
      icon: <HandFistIcon size={32} weight="duotone" className="text-sky-600" />,
      Heading: "Empowerment",
    },
    {
      icon: <UsersThreeIcon size={32} weight="duotone" className="text-sky-600" />,
      Heading: "Collaboration",
    },
  ];

  return (
    <div>

      <Landing
        title="Empowering NGOs Through Digital Innovation & Transparency"
        description='At DaanPitara, we connect nonprofits and purpose-driven brands across the world to foster strategic CSR partnerships — empowering each organization to grow their digital footprint, accelerate funding, and deepen donor trust. With tools for storytelling, online fundraising, streamlined documentation, and transparent engagement.'
      />

      <OurStory />
      <WhyUs />

      <section className="flex flex-col lg:flex-row gap-14 justify-center items-center my-10">
        <Mission_Vision_Cards
          width="420px"
          icon={<TargetIcon size={32} weight="duotone" className="text-sky-600" />}
          Heading="Our Mission"
          desc="To empower NGOs through digital transformation and transparent donor engagement."
        />

        <Mission_Vision_Cards
          width="420px"
          icon={<EyeIcon size={32} weight="duotone" className="text-sky-600" />}
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
              className="w-1/2 sm:w-auto flex justify-center"
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
        <HeroTitle heading="How We Help You Create Impact" size={36} />
        <HeroDescription text="The principles that guide everything we do" />

        <div className='flex flex-row flex-wrap justify-center text-start items-start gap-6 my-6'>
          <Mission_Vision_Cards
            width="290px"
            icon={<GlobeIcon size={32} weight="duotone" className="text-sky-600" />}
            Heading="Digital Branding & Online Presence"
            desc="Build a compelling digital identity that attracts supporters and showcases your impact."
            headingSize={20}
          />

          <Mission_Vision_Cards
            width="290px"
            icon={<HandshakeIcon size={32} weight="duotone" className="text-sky-600" />}
            Heading="CSR Partnerships & Corporate Outreach"
            desc="Connect with corporate partners aligned with your mission for meaningful collaborations."
            headingSize={20}
          />

          <Mission_Vision_Cards
            width="290px"
            icon={<ChartBarIcon size={32} weight="duotone" className="text-sky-600" />}
            Heading="NGO Growth Analytics"
            desc="Track your performance with data-driven insights and actionable metrics."
            headingSize={20}
          />
        </div>

      </section>

    </div>
  );
}

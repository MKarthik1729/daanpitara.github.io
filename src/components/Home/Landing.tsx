// import React from 'react';
import HighlightButton from '@/assets/ButtonDesigns/HighlightButton';
import SubmitButton from '@/assets/ButtonDesigns/SubmitButton';
import ClientAvatars from '@/assets/Hero/ClientAvatars';
import HeroTitle from '@/assets/HeadingText/HeroTitle';
import HeroDescription from '@/assets/HeadingText/HeroDescription';

// import DaanPitara from '@/assets/Images/DaanPitara.png';

export default function Landing() {
  const title = (
    <>
      Trusted Digital Platform For NGOs &
      Fundraising
    </>
  );
  const description =
    'DaanPitara empowers NGOs across the globe to embrace digital transformation, amplify their social impact, and attract meaningful CSR partnerships. Through powerful digital branding, smart fundraising tools, and transparent donor engagement systems, we help organizations build trust, raise sustainable funds, and create long-lasting change within their communities.';
  const primaryCta = {
    text: 'Register Your NGO Now',
    onClick: () => (window.location.href = '/register'),
    bgColor: 'var(--Primary, #36B2F1)',
  };
  const secondaryCta: { text: string; onClick: () => void; bgColor?: string } = {
    text: 'Grow With DaanPitara',
    onClick: () => (window.location.href = '/fund-form'),
  };
  const imageSrc = './CatchGlobe.png';
  const avatars = [
    { src: "./post/1.png" },
    { src: "./post/2.png" },
    { src: "./post/3.png" },
    { src: "./org3.jpg" },
    { src: "./org1.jpg" },
  ];
  const avatarCountLabel = '1.5K';

  return (
    <div className="w-full lg:px-15 px-5">
      <section className="flex flex-col lg:flex-row items-center gap-8 lg:gap-40 py-9">
        <div className="flex max-w-3xl flex-col gap-6">
          <HeroTitle heading={title} size={40} />
          <HeroDescription text={description} size={18} no_of_lines={5} />

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4">
            {primaryCta ? (
            <div className="w-full sm:w-auto">
                <HighlightButton
                  to="#"
                  text={primaryCta.text}
                  bgColor={primaryCta.bgColor}
                  className="lg:w-[265px]"
                />
              </div>
            ) : null}
            {secondaryCta ? (
              <div className="w-full sm:w-auto">
                <SubmitButton
                  submit={secondaryCta.onClick || (() => {})}
                  text={secondaryCta.text}
                  bgColor={secondaryCta.bgColor}
                  className="lg:w-[265px]"
                />
              </div>
            ) : null}
          </div>

          {avatars.length > 0 ? (
            <div className="flex items-center gap-4 mt-4">
              <div
                className="font-satoshi text-[18px] font-medium leading-[20.813px]"
                style={{ color: 'var(--Grey-3, #4C4B4B)' }}
              >
                Our Happy Clients
              </div>
              <ClientAvatars avatars={avatars} countLabel={avatarCountLabel} />
            </div>
          ) : null}
        </div>

        <div className="w-full lg:w-[426px] flex-shrink-0">
          {imageSrc ? (
            <img
              src={imageSrc}
              alt="hero"
              className="w-full h-full rounded-lg object-cover shadow-lg"
            />
          ) : null}
        </div>
      </section>
    </div>
  );
}
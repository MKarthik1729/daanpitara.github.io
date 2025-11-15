import React from "react";

const LogoBanner: React.FC = () => {
  const logos = [
    {
      src: "/logos/Spotify.svg",
      alt: "Spotify",
      width: 130,
      height: 52.501,
    },
    {
      src: "/logos/Google.svg",
      alt: "Google",
      width: 130,
      height: 54.7,
    },
    {
      src: "/logos/Pinterest.svg",
      alt: "Pinterest",
      width: 130,
        height: 42.8,
    },
    {
      src: "/logos/Stripe.svg",
      alt: "Stripe",
      width: 130,
        height: 83.35,
    },
    {
      src: "/logos/Reddit.svg",
      alt: "Reddit",
      width: 130,
        height: 81.6,
    },
  ];

return (
    <div
      className="
        flex 
        h-[123px]
        p-[10px]
        flex-col 
        justify-center 
        items-start 
        gap-[10px]
        w-full
         bg-[#e4f2f8]
      "
    >
      <div
        className="
          flex
          justify-center
          items-center
          gap-[45px]
          w-full
        "
      >
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo.src}
            alt={logo.alt}
            className={`w-[174.85px] h-[${logo.height}px] object-contain`}
          />
        ))}
      </div>
    </div>
  );
};

export default LogoBanner;

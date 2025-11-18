import React from "react";
import HeroDescription from "@/assets/HeadingText/HeroDescription";
import HeroTitle from "@/assets/HeadingText/HeroTitle";
import {
  FacebookLogo,
  InstagramLogo,
  TwitterLogo,
  LinkedinLogo,
  YoutubeLogo,
  EnvelopeSimple,
  Phone,
  MapPin,
  Clock,
} from "@phosphor-icons/react";

const Footer = () => {
  const SocialIconBox = ({ children }: React.PropsWithChildren<any>) => (
    <div className="w-10 h-10 flex items-center justify-center border border-gray-400 rounded-lg text-gray-500 hover:bg-[#2D7EFF] hover:text-white hover:border-[#2D7EFF] transition-all cursor-pointer bg-transparent">
      {children}
    </div>
  );

  return (
    <footer className="bg-[#E7F0F3] text-[#1A1A1A] pt-16 pb-8 font-sans">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-8">

          {/* COLUMN 1: BRAND */}
          <div className="lg:col-span-4 flex flex-col gap-6 pr-4">
            <div className="flex items-center gap-3">
              <img 
                src={'./DaanPitara.png'} 
                alt="DaanPitara Logo"
                className="w-12 h-12 object-contain" 
              />
              <h2 className="text-3xl font-bold text-gray-900 tracking-tight">DaanPitara</h2>
            </div>
            <div className="leading-relaxed opacity-80 pr-4">
              <HeroDescription
                text="Recognized as the best CSR fundraising platform, DaanPitara connects NGOs and corporates through seamless digital support, impactful campaigns, and transparent donor engagement."
                size={15} 
                color="#525252"
              />
            </div>
            <div className="flex gap-3 mt-2">
              <SocialIconBox><FacebookLogo size={20} weight="regular" /></SocialIconBox>
              <SocialIconBox><TwitterLogo size={20} weight="regular" /></SocialIconBox>
              <SocialIconBox><LinkedinLogo size={20} weight="regular" /></SocialIconBox>
              <SocialIconBox><InstagramLogo size={20} weight="regular" /></SocialIconBox>
              <SocialIconBox><YoutubeLogo size={20} weight="regular" /></SocialIconBox>
            </div>
          </div>

          {/* COLUMN 2: QUICK LINKS */}
          <div className="lg:col-span-2 flex flex-col gap-6 lg:pl-6">
            <div className="font-bold text-gray-900">
                <HeroTitle heading="Quick Links" size={18} />
            </div>
            <ul className="flex flex-col gap-4">
              {['Home', 'About Us', 'Fundraiser form', "FAQ's", 'Blogs'].map((item, index) => (
                <li key={index} className="cursor-pointer hover:text-[#2D7EFF] transition-colors w-fit">
                  <HeroDescription text={item} size={15} color="#525252" />
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: GET IN TOUCH */}
          <div className="lg:col-span-3 flex flex-col gap-6">
             <div className="font-bold text-gray-900">
                <HeroTitle heading="Get In Touch" size={18} />
             </div>
            <ul className="flex flex-col gap-5">
              <li className="flex gap-3 items-start">
                <MapPin size={24} weight="regular" className="text-gray-500 mt-0.5 shrink-0" />
                <div className="max-w-[240px]">
                    <HeroDescription text="D38, Phase 1, Sector 57, Sahibzada Ajit Singh Nagar, Punjab 160055, India" size={15} color="#525252" />
                </div>
              </li>
              <li className="flex gap-3 items-center">
                <Phone size={24} weight="regular" className="text-gray-500 shrink-0" />
                <HeroDescription text="9876577721" size={15} color="#525252" />
              </li>
              <li className="flex gap-3 items-center">
                <EnvelopeSimple size={24} weight="regular" className="text-gray-500 shrink-0" />
                <HeroDescription text="contact@daanpitara.com" size={15} color="#525252" />
              </li>
              <li className="flex gap-3 items-center">
                <Clock size={24} weight="regular" className="text-gray-500 shrink-0" />
                <HeroDescription text="Mon - Sat, 10 AM - 6 PM" size={15} color="#525252" />
              </li>
            </ul>
          </div>

          {/* COLUMN 4: SUBSCRIBE - FIXED */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <div className="font-bold text-gray-900 pr-2">
                 <HeroTitle heading="Subscribe Our Zheal Media to get the Latest!" size={18} />
            </div>
           
            {/* FIX APPLIED:
                1. Used 'w-full' and 'max-w-md' to ensure container sizing.
                2. Input has 'min-w-0' so it doesn't force overflow.
                3. Button has 'shrink-0' to maintain its size.
            */}
            <div className="flex items-center bg-[#6B7280] p-1.5 rounded-lg shadow-sm w-full max-w-[320px]">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 min-w-0 bg-transparent px-3 text-white placeholder-gray-300 outline-none text-sm"
              />
              <button className="shrink-0 bg-[#2BA0FA] hover:bg-[#1d8ce0] text-white font-medium px-5 py-2 rounded-md text-sm transition-colors shadow-sm">
                Subscribe
              </button>
            </div>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="mt-16 pt-6 border-t border-gray-300 flex flex-col md:flex-row justify-between items-center text-[13px] text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} DaanPitara, All Right Reserved.</p>
          <div className="flex gap-8">
            <span className="cursor-pointer hover:text-[#2D7EFF] transition-colors">Terms & Conditions</span>
            <span className="cursor-pointer hover:text-[#2D7EFF] transition-colors">Privacy Policies</span>
            <span className="cursor-pointer hover:text-[#2D7EFF] transition-colors">Cookies</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
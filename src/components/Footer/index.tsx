import HeroDescription from "@/assets/HeadingText/HeroDescription";
import HeroTitle from "@/assets/HeadingText/HeroTitle";
import {
  FacebookLogo,
  InstagramLogo,
  TwitterLogo,
  LinkedinLogo,
  YoutubeLogo, // Added Youtube to match image
  EnvelopeSimple,
  Phone,
  MapPin,
  Clock,
} from "@phosphor-icons/react";

const Footer = () => {
  // Helper component for Social Icons to match the image style
  const SocialIconBox = ({ children  }: React.PropsWithChildren<any>) => (
    <div className="w-10 h-10 flex items-center justify-center border border-gray-400 rounded-lg text-gray-600 hover:bg-[#2D7EFF] hover:text-white hover:border-[#2D7EFF] transition-all cursor-pointer">
      {children}
    </div>
  );

  return (
    <footer className="bg-[#E7F0F3] text-[#1A1A1A] pt-16 pb-8">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-20">
        
        {/* MAIN GRID: Used Grid-cols-12 for precise column widths like the image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-x-8">

          {/* COLUMN 1: BRAND (Spans 4 columns) */}
          <div className="lg:col-span-4 flex flex-col gap-6 pr-4">
            <div className="flex items-center gap-3">
              {/* Removed scale-150, sized properly */}
              <img 
                src={'./DaanPitara.png'} 
                alt="DaanPitara Logo"
                className="w-auto h-12 object-contain" 
              />
              <h2 className="text-3xl font-bold tracking-tight">DaanPitara</h2>
            </div>
            
            <div>
              <HeroDescription
                text="Recognized as the best CSR fundraising platform, DaanPitara connects NGOs and corporates through seamless digital support, impactful campaigns, and transparent donor engagement."
                size={16}
                color="#4C4B4B"
              />
            </div>

            <div className="flex gap-3 mt-2">
              <SocialIconBox><FacebookLogo size={20} weight="fill" /></SocialIconBox>
              <SocialIconBox><TwitterLogo size={20} weight="fill" /></SocialIconBox>
              <SocialIconBox><LinkedinLogo size={20} weight="fill" /></SocialIconBox>
              <SocialIconBox><InstagramLogo size={20} weight="fill" /></SocialIconBox>
              <SocialIconBox><YoutubeLogo size={20} weight="fill" /></SocialIconBox>
            </div>
          </div>

          {/* COLUMN 2: QUICK LINKS (Spans 2 columns) */}
          <div className="lg:col-span-2 flex flex-col gap-6 lg:pl-4">
            <HeroTitle heading="Quick Links" size={20} />
            <ul className="flex flex-col gap-4">
              {['Home', 'About Us', 'Fundraiser form', "FAQ's", 'Blogs'].map((item, index) => (
                <li key={index} className="cursor-pointer hover:translate-x-1 transition-transform">
                  <HeroDescription text={item} size={16} color="#4C4B4B" />
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: GET IN TOUCH (Spans 3 columns) */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <HeroTitle heading="Get In Touch" size={20} />
            <ul className="flex flex-col gap-5">
              {/* Address */}
              <li className="flex gap-3 items-start">
                <MapPin size={24} className="text-gray-600 mt-1 shrink-0" />
                <div className="max-w-[200px]">
                    <HeroDescription
                    text="706 First Floor, Phase 4, Sector 59, Mohali — 160059"
                    size={16}
                    color="#4C4B4B"
                    />
                </div>
              </li>
              
              {/* Phone */}
              <li className="flex gap-3 items-center">
                <Phone size={24} className="text-gray-600 shrink-0" />
                <HeroDescription text="9876577721" size={16} color="#4C4B4B" />
              </li>

              {/* Email */}
              <li className="flex gap-3 items-center">
                <EnvelopeSimple size={24} className="text-gray-600 shrink-0" />
                <HeroDescription text="Tarun@gmail.com" size={16} color="#4C4B4B" />
              </li>

              {/* Hours */}
              <li className="flex gap-3 items-center">
                <Clock size={24} className="text-gray-600 shrink-0" />
                <HeroDescription text="Mon - Sat, 10 AM - 6 PM" size={16} color="#4C4B4B" />
              </li>
            </ul>
          </div>

          {/* COLUMN 4: SUBSCRIBE (Spans 3 columns) */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <div className="leading-snug">
                 <HeroTitle heading="Subscribe Our Zheal Media to get the Latest!" size={20} />
            </div>
           
            {/* Subscribe Box styled like the image (Dark Grey Container) */}
            <div className="flex bg-[#6B7280] p-1.5 rounded-lg overflow-hidden shadow-sm">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 bg-transparent px-3 text-white placeholder-gray-300 outline-none text-sm"
              />
              <button className="bg-[#2BA0FA] hover:bg-[#1d8ce0] text-white font-medium px-5 py-2.5 rounded text-sm transition-colors">
                Subscribe
              </button>
            </div>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="mt-16 pt-6 border-t border-gray-300 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} DaanPitara, All Right Reserved.</p>
          
          <div className="flex gap-8">
            <span className="cursor-pointer hover:text-gray-900">Terms & Conditions</span>
            <span className="cursor-pointer hover:text-gray-900">Privacy Policies</span>
            <span className="cursor-pointer hover:text-gray-900">Cookies</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
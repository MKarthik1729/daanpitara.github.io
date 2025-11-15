import {
  FacebookLogo,
  InstagramLogo,
  TwitterLogo,
  LinkedinLogo,
  EnvelopeSimple,
  Phone,
  MapPin,
  Clock,
} from "@phosphor-icons/react";
import DaanPitara from "@/assets/Images/DaanPitara.png";

const Footer = () => {
  return (
    <footer className="bg-[#E7F0F3] text-[#1A1A1A] py-14">
      <div className="max-w-7xl mx-auto px-6">

        {/* MAIN WRAPPER */}
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-0 lg:justify-between">

          {/* 1) DAANPITARA COLUMN */}
          <div className="flex flex-col gap-5 w-full lg:w-[353px]">
            <div className="flex items-center gap-3">
              <img src={DaanPitara} className="w-14 h-14 object-contain" />
              <h2 className="text-3xl font-semibold">DaanPitara</h2>
            </div>

            <p className="text-sm leading-relaxed">
              Recognized as the best CSR fundraising platform, DaanPitara connects
              NGOs and corporates through seamless digital support, impactful
              campaigns, and transparent donor engagement.
            </p>

            <div className="flex gap-4 mt-2 lg:mt-4 lg:justify-start justify-center">
              <FacebookLogo size={26} weight="fill" />
              <InstagramLogo size={26} weight="fill" />
              <TwitterLogo size={26} weight="fill" />
              <LinkedinLogo size={26} weight="fill" />
            </div>
          </div>

          {/* GROUP 2–3–4 */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:gap-16 gap-12">

            {/* QUICK LINKS */}
            <div className="flex flex-col w-full lg:w-[111px] gap-6">
              <h3 className="font-semibold text-lg">Quick Links</h3>
              <ul className="space-y-3 text-sm">
                <li className="hover:text-gray-700 cursor-pointer">Home</li>
                <li className="hover:text-gray-700 cursor-pointer">About Us</li>
                <li className="hover:text-gray-700 cursor-pointer">Fundraiser Form</li>
                <li className="hover:text-gray-700 cursor-pointer">FAQ’s</li>
                <li className="hover:text-gray-700 cursor-pointer">Blogs</li>
              </ul>
            </div>

            {/* GET IN TOUCH */}
            <div className="flex flex-col w-full lg:w-[231px] gap-6">
              <h3 className="font-semibold text-lg">Get In Touch</h3>

              <ul className="space-y-3 text-sm">
                <li className="flex gap-2 items-start">
                  <MapPin size={20} weight="fill" />
                  706 First Floor, Phase 4, Sector 59, Mohali – 160059
                </li>

                <li className="flex gap-2 items-center">
                  <Phone size={20} weight="fill" /> 9876577721
                </li>

                <li className="flex gap-2 items-center">
                  <EnvelopeSimple size={20} weight="fill" />
                  Tarun@gmail.com
                </li>

                <li className="flex gap-2 items-center">
                  <Clock size={20} weight="fill" />
                  Mon – Sat, 10 AM – 6 PM
                </li>
              </ul>
            </div>

            {/* SUBSCRIBE BOX */}
            <div className="flex flex-col w-full lg:w-[350px] gap-6">
              <h3 className="font-semibold text-lg leading-snug text-left">
                Subscribe Our Zheal Media to get the Latest!
              </h3>

              <div className="flex w-full bg-[#707C8B] rounded-lg overflow-hidden">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-3 text-white bg-transparent placeholder-gray-200 outline-none"
                />
                <button className="bg-[#2D7EFF] text-white px-6 py-3">
                  Subscribe
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-14 border-t border-gray-300 pt-5 flex flex-col md:flex-row justify-between text-sm text-gray-600 gap-4">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} DaanPitara, All Right Reserved.
          </p>

          <div className="flex gap-8 justify-center md:justify-end">
            <p className="cursor-pointer hover:text-gray-900">Terms & Conditions</p>
            <p className="cursor-pointer hover:text-gray-900">Privacy Policies</p>
            <p className="cursor-pointer hover:text-gray-900">Cookies</p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

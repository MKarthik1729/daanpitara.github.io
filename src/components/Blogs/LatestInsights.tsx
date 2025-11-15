import React from "react";
import { motion, easeInOut } from "framer-motion";
import type { Variants } from "framer-motion";
import Card from "./BlogDesign2";
import { Link } from "react-router-dom";
import HeroTitle from "@/assets/HeadingText/HeroTitle";
import HeroDescription from "@/assets/HeadingText/HeroDescription";

const blogData = [
  {
    img: "/post/4.png",
    label: "News",
    heading: "How DaanPitara Can Leverage AI to Create a Greater Social Impact",
    description:
      "Artificial Intelligence has evolved from a technological advancement into a powerful instrument for solving real-world challenges.",
    readMoreLink: "/blogs/aileverage",
  },
  {
    img: "/post/3.png",
    label: "News",
    heading:
      "The Digital Transformation of CSR in India: How DaanPitara is Empowering Corporate Social Responsibility",
    description:
      "The landscape of Corporate Social Responsibility (CSR) in India is undergoing a massive transformation.",
    readMoreLink: "/blogs/csr-impact",
  },
  {
    img: "/post/1.png",
    label: "Insights",
    heading:
      "A Day in the Life of an NGO Volunteer: Creating Real Change with DaanPitara",
    description:
      "Volunteering for an NGO is more than just lending a helping hand; it’s about becoming part of a mission that touches lives and strengthens communities.",
    readMoreLink: "/blogs/life-of-volunteer",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
      ease: easeInOut,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: easeInOut },
  },
};

const LatestInsights: React.FC = () => {
  return (
    <div className="px-8 py-14 min-h-screen bg-bg-blue bg-opacity-10 mt-14 rounded-t-2xl">
      <HeroTitle
      heading="Latest Insights"
        className="text-center mb-3"
        color="#fff"
        size={30}
        />
        <HeroDescription
        text="Stay updated with the latest news and insights from DaanPitara"
        color="#D6D6D6"
        size={20}
        className="text-center mb-14"
        />

      {/* MAIN GRID – 2 COLUMNS */}
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-14 max-w-7xl mx-auto px-14">

        {/* LEFT SIDE – BLOG CARDS */}
        <motion.div
          className="flex flex-col gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {blogData.slice(0, 2).map((blog, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Card {...blog} />
            </motion.div>
          ))}
        </motion.div>

        {/* RIGHT SIDE – HIGHLIGHTS */}
        <motion.div
          className="bg-white rounded-3xl p-6 shadow-md h-fit flex flex-col gap-7"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <HeroTitle 
          heading="Highlights"
          size={20}
          className="mb-3"
          />

          {blogData.map((blog, index) => (
        <motion.div
  key={index}
  variants={cardVariants}
  whileHover={{ scale: 1.02 }}
  className="relative pb-4 pl-6 last:border-none 
             group transition-all"
>
  {/* DOT */}
  <span className="absolute left-0 top-2 w-2 h-2 rounded-full bg-[#155DFC]"></span>

  {/* HOVER BLUE LINE */}
  <span className="absolute left-0 top-5 h-[70%] w-[2px] bg-blue-500 
                   opacity-0 group-hover:opacity-100 transition-all m-1"></span>

  <HeroDescription
    text={blog.label}
    size={12}
    className="mb-2"
    color="#155DFC"
  />

  <Link to={blog.readMoreLink || "#"}>
    <HeroDescription
      text={blog.heading}
      size={16}
      color="#101828"
    />

    <HeroDescription
      text="Read more"
      size={14}
      color="#4C4B4B"
      className="mt-1"
    />
  </Link>
</motion.div>

          ))}
        </motion.div>

      </div>
    </div>
  );
};

export default LatestInsights;

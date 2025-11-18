import React from "react";
import { motion, easeInOut } from "framer-motion";
import type { Variants } from "framer-motion";
import Card from "./BlogDesign2";
import LatestInsights from "./LatestInsights";

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
  {
    img: "/post/2.png",
    label: "Insights",
    heading:
      "CSR Funding for NGOs: A Comprehensive Guide to Attracting Corporate Support",
    description:
      "For many NGOs in India, securing steady funding is one of the biggest challenges in sustaining impactful work.",
    readMoreLink: "/blogs/csr-funding",
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

const RecentPosts: React.FC = () => {
  return (
    <div className=" sm:p-2 min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100">
      <div 
      className="mb-10"
      >
      <LatestInsights />
      </div>
      <h1 className="text-4xl font-bold text-gray-900 text-center mb-12">
        Recent Posts
      </h1>

      <motion.div
        className="grid gap-6 sm:grid-cols-2 auto-rows-[1fr]"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {blogData.map((blog, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.98 }}
            className="flex"
          >
            <Card {...blog} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default RecentPosts;

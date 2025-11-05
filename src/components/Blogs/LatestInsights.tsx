import React from "react";
import { motion, easeInOut } from "framer-motion";
import type { Variants } from "framer-motion";
import Card from "./BlogDesign2";
import TopicHeading from "@/assets/HeadingText/TopicHeading";
import { Link } from "react-router-dom";

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
    <div className="p-8 min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100 mb-10">
      <h1 className="text-4xl font-bold text-gray-900 text-center mb-12">
        Latest Insights
      </h1>

      <motion.div
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[1fr]"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {blogData.slice(0, 2).map((blog, index) => (
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

        <motion.div>
          <TopicHeading heading="Highlights" />
          {blogData.map((blog, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.98 }}
              className="my-4 border-b pb-2"
            >
              <p className="text-blue-600 text-lg font-medium mb-2">{blog.label}</p>
              <Link
                className="text-lg font-semibold text-gray-900 leading-snug mb-3 hover:underline hover:text-blue-600"
                to={blog.readMoreLink || "#"}
              >
                {blog.heading}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LatestInsights;

import React from "react";
import Card from "./TeamCard";

const blogData = [
  {
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    label: "News",
    heading: "Founder & CEO",
    description: "A visionary leader who believes in blending empathy with innovation. Akshay’s mission is to make DaanPitara the go-to digital growth partner for NGOs worldwide.",
    // readMoreLink: "/blog/future-of-work",
  },
  {
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    label: "Insights",
    heading: "Head of Digital Strategy",
    description: "With deep expertise in SEO, branding, and communication, Khushbu ensures that every NGO story is seen, heard, and trusted by the right audience.",
    readMoreLink: "/blog/data-driven-culture",
  },
  {
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    label: "Productivity",
    heading: "Operations & Partnerships Lead",
    description: "Rahul builds bridges between NGOs, CSR teams, and donors, ensuring every collaboration delivers measurable impact and long-term value.",
    readMoreLink: "/blog/automation-tips",
  },
];

const BlogList: React.FC = () => {
  return (
    <div className="p-8 min-h-screen">
      <h1 className="text-4xl font-bold text-gray-900 text-center mb-12">
          Meet Our Team
        </h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
        {blogData.map((blog, index) => (
          <Card key={index} {...blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogList;

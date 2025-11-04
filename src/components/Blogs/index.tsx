import React from "react";
import Card from "./BlogDesign2";

const blogData = [
  {
    img: "https://images.unsplash.com/photo-1522202222345-5293f8a52c51",
    label: "News",
    heading: "How Collaboration Tools Are Reshaping the Future of Work",
    description: "Explore how modern platforms like Slack are empowering teams to communicate seamlessly and boost productivity worldwide.",
    readMoreLink: "/blog/future-of-work",
  },
  {
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    label: "Insights",
    heading: "Building Data-Driven Cultures: A Leader’s Guide to Smarter Decisions",
    description: "Learn how to foster a workplace culture that thrives on analytics, transparency, and informed strategy.",
    readMoreLink: "/blog/data-driven-culture",
  },
  {
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    label: "Productivity",
    heading: "10 Simple Automations That Save You Hours Every Week",
    description: "Discover small but powerful automations that streamline your workflow and reduce repetitive tasks.",
    readMoreLink: "/blog/automation-tips",
  },
  {
    img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2",
    label: "Technology",
    heading: "AI Meets Teamwork: Transforming Collaboration with Intelligent Tools",
    description: "See how AI is enhancing teamwork, from predictive task management to personalized notifications.",
    readMoreLink: "/blog/ai-collaboration",
  },
  {
    img: "https://images.unsplash.com/photo-1508830524289-0adcbe822b40",
    label: "Culture",
    heading: "Why Remote Work Is Here to Stay — And How to Do It Right",
    description: "Understand the new dynamics of remote work and the best practices for keeping teams connected.",
    readMoreLink: "/blog/remote-work",
  },
  {
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    label: "Trends",
    heading: "The Future of Hybrid Offices: Designing for Flexibility and Focus",
    description: "Balance collaboration and deep work with office spaces that adapt to your team's evolving needs.",
    readMoreLink: "/blog/hybrid-offices",
  },
  {
    img: "https://images.unsplash.com/photo-1497493292307-31c376b6e479",
    label: "Strategy",
    heading: "How to Align Marketing and Sales for Better Customer Outcomes",
    description: "Break down silos and create a unified customer journey through shared insights and tools.",
    readMoreLink: "/blog/marketing-sales-alignment",
  },
  {
    img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
    label: "Engineering",
    heading: "Behind the Code: Building Scalable Platforms for Millions of Users",
    description: "Dive into the architecture principles that power reliable, high-performance web apps.",
    readMoreLink: "/blog/scalable-platforms",
  },
  {
    img: "https://images.unsplash.com/photo-1531482615713-2afd69097998",
    label: "Design",
    heading: "The Psychology of Color: How Design Choices Impact User Behavior",
    description: "Uncover the subtle ways color palettes influence engagement and emotional response.",
    readMoreLink: "/blog/design-psychology",
  },
  {
    img: "https://images.unsplash.com/photo-1504386106331-3e4e71712b38",
    label: "Leadership",
    heading: "Leading with Empathy: Building Trust in a Digital Workplace",
    description: "Learn how emotional intelligence drives better communication, morale, and results.",
    readMoreLink: "/blog/leading-with-empathy",
  },
  {
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    label: "Innovation",
    heading: "Rethinking the Customer Experience with Automation",
    description: "Discover how smart workflows and chatbots are redefining how customers interact with businesses.",
    readMoreLink: "/blog/customer-automation",
  },
  {
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    label: "Updates",
    heading: "Slack Connect: How Businesses Are Breaking Barriers with Shared Channels",
    description: "Learn how enterprises are collaborating securely with partners, vendors, and clients in real time.",
    readMoreLink: "/blog/slack-connect",
  },
];

const BlogList: React.FC = () => {
  return (
    <div className="p-8 min-h-screen">
      <h1 className="text-2xl font-bold mb-8 text-center text-gray-800">
        Latest Insights
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 auto-rows-fr">
        {blogData.map((blog, index) => (
          <Card key={index} {...blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogList;

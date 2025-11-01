import React from "react";
import Card from "./BlogCard";

const blogData = [
  {
    img: "https://images.unsplash.com/photo-1503264116251-35a269479413",
    heading: "Exploring the Mountains and the Wonders of Nature Beyond the Horizon",
    date: "2025-10-15",
    readTime: 5,
    readMoreLink: "/blog/mountains",
  },
  {
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    heading: "A Journey Through the Ocean — Discovering the Depths of Blue Serenity",
    date: "2025-09-21",
    readTime: 6,
    readMoreLink: "/blog/ocean",
  },
  {
    img: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
    heading: "Finding Peace in the Forest: A Guide to Mindful Exploration and Calm",
    date: "2025-08-30",
    readTime: 4,
    readMoreLink: "/blog/forest",
  },
  {
    img: "https://images.unsplash.com/photo-1481277542470-605612bd2d61",
    heading: "City Lights and Night Vibes — Capturing Urban Energy Through the Lens",
    date: "2025-07-10",
    readTime: 3,
    readMoreLink: "/blog/city-lights",
  },
  {
    img: "https://images.unsplash.com/photo-1503264116251-35a269479413",
    heading: "Capturing the Moment: A Photographer’s Guide to Creative Expression",
    date: "2025-10-05",
    readTime: 7,
    readMoreLink: "/blog/photography",
  },
  {
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    heading: "The Beauty of Simplicity — Learning to Appreciate the Minimalist Life",
    date: "2025-11-01",
    readTime: 5,
    readMoreLink: "/blog/simplicity",
  },
  {
    img: "https://images.unsplash.com/photo-1470770903676-69b98201ea1c",
    heading: "Cooking with Passion: Creating Flavorful Dishes from Everyday Ingredients",
    date: "2025-10-22",
    readTime: 8,
    readMoreLink: "/blog/cooking",
  },
  {
    img: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    heading: "Adventures in the Desert — The Art of Surviving and Thriving in the Sand",
    date: "2025-09-05",
    readTime: 6,
    readMoreLink: "/blog/desert",
  },
];

const BlogList: React.FC = () => {
  return (
    <div className="p-8 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-center">Latest Blogs</h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3  auto-rows-fr">
        {blogData.map((blog, index) => (
          <Card key={index} {...blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogList;

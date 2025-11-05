// ContentRenderer.tsx
import React from "react";
import { motion } from "framer-motion";

interface ContentItem {
  type: string;
  text: string | string[];
}

interface ContentRendererProps {
  items: ContentItem[];
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const ContentRenderer: React.FC<ContentRendererProps> = ({ items }) => {
  return (
    <div className="content-container mx-auto max-w-3xl px-4 py-8 text-gray-800">
      {items.map((item, index) => {
        switch (item.type) {
          case "heading":
            return (
              <motion.h1
                key={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
                className="text-4xl font-bold text-gray-900 mb-6 leading-tight"
              >
                {item.text}
              </motion.h1>
            );

          case "subheading":
            return (
              <motion.h2
                key={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
                className="text-2xl font-semibold text-blue-700 mb-4"
              >
                {item.text}
              </motion.h2>
            );

          case "sectionheading":
            return (
              <motion.h3
                key={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
                className="text-xl font-semibold text-gray-900 mt-10 mb-4 border-l-4 border-blue-500 pl-3"
              >
                {item.text}
              </motion.h3>
            );

          case "passage":
            return (
              <motion.p
                key={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.02 }}
                className="text-lg text-gray-700 leading-relaxed mb-5"
              >
                {item.text}
              </motion.p>
            );

          case "unorderedlist":
            return (
              <motion.ul
                key={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.02 }}
                className="list-disc pl-6 text-gray-700 space-y-2 mb-5"
              >
                {(item.text as string[]).map((li, i) => (
                  <li key={i} className="leading-relaxed">
                    {li}
                  </li>
                ))}
              </motion.ul>
            );

          case "orderedlist":
            return (
              <motion.ol
                key={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.02 }}
                className="list-decimal pl-6 text-gray-700 space-y-2 mb-5"
              >
                {(item.text as string[]).map((li, i) => (
                  <li key={i} className="leading-relaxed">
                    {li}
                  </li>
                ))}
              </motion.ol>
            );

          case "image":
            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="my-8 flex justify-center"
              >
                <img
                  src={item.text as string}
                  alt={`content-${index}`}
                  className="rounded-lg shadow-md max-w-full h-auto transition-transform duration-300 hover:scale-[1.02]"
                />
              </motion.div>
            );

          default:
            return (
              <motion.p
                key={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="text-gray-700 mb-4"
              >
                {item.text}
              </motion.p>
            );
        }
      })}
    </div>
  );
};

export default ContentRenderer;

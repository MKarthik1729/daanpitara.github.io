"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FeaturesSection from "./WhyUs";
import { featuresData } from "./WhyUs";
import { facilitiesData } from "./facilitiesData";
import { servicesData } from "./servicesData";
import SubmitButton from "@/assets/ButtonDesigns/SubmitButton";
const tabs = [
  { 
    id: "features", 
    label: "Empowering NGOs", 
    desc: "We walk alongside every NGO, turning purpose into measurable progress.", 
    data: featuresData 
  },
  { 
    id: "facilities", 
    label: "Digital & Funding Support", 
    desc: "Bridge the gap between purpose and technology to amplify your mission.", 
    data: facilitiesData 
  },
  { 
    id: "services", 
    label: "Trust & Transparency", 
    desc: "Why NGOs and donors believe in our vision and platform.", 
    data: servicesData 
  },
];



export default function FeaturesTabs() {
  const [activeTab, setActiveTab] = useState("features");

  return (
    <div className="w-full py-10 text-gray-600 text-center lg:px-15 px-5" >
      <div className="relative mb-10">
        <div
          className="
            flex gap-4 sm:gap-6 
            justify-start sm:justify-center 
            px-4 sm:px-0
            overflow-x-auto sm:overflow-x-visible
            overflow-y-hidden
            scrollbar-hide
            border-b border-gray-200
            pb-2 mt-8
          "
        >
          {tabs.map((tab) => (
              <SubmitButton 
              submit={()=>setActiveTab(tab.id)}
              text={tab.label}
              className={activeTab === tab.id ? "text-white bg-blue-500" : "text-gray-600"}
              />
          ))}
        </div>
      </div>

      <div className="relative">
        <AnimatePresence mode="wait">
          {tabs.map(
            (tab) =>
              activeTab === tab.id && (
                <motion.div
                  key={tab.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.4 }}
                >
                  <FeaturesSection
                    features={tab.data}
                    title={tab.label}
                    subtitle={`${tab.desc}.`}
                  />
                </motion.div>
              )
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

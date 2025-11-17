import React from 'react';
import GetInTouch from "./GetInTouch";
import ContactForm from "./ContactForm";
import Location from "./Location";

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-white p-4 md:p-8 lg:p-12">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        
        {/* === TOP SECTION: Get in Touch + Image === */}
        <GetInTouch />

        {/* === BOTTOM SECTION: Form + Map === */}
        {/* CHANGED: grid-cols-2 for equal 50/50 width split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          
          {/* Left Column (Form) */}
          <div className="h-full">
            <ContactForm />
          </div>

          {/* Right Column (Map) */}
          {/* min-h added to ensure map has height on mobile/tablet before stacking */}
          <div className="h-full min-h-[500px] lg:min-h-0">
            <Location />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
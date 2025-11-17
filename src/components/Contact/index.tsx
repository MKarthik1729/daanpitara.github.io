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
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          
          {/* Left Column (Form) */}
          <div className="lg:col-span-3">
            <ContactForm />
          </div>

          {/* Right Column (Map) */}
          <div className="lg:col-span-2">
            <Location />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
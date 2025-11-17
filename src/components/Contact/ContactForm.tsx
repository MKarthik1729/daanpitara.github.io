import React from 'react';

const ContactForm: React.FC = () => {
  
  // You could add event handlers here with proper types, e.g.:
  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   console.log("Form submitted");
  // };

  return (
    <section className="bg-slate-50 p-6 md:p-8 rounded-lg shadow-sm h-full">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Send Us a Message</h2>
      <p className="text-gray-600 mb-6">
        Fill out the form below and our team will get back to you within 24 hours.
      </p>

      {/* <form onSubmit={handleSubmit}> */}
      <form action="#" method="POST">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Full Name */}
          <div>
            <label htmlFor="full-name" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="full-name"
              id="full-name"
              placeholder="Enter Your Name"
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Your Name"
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500"
            />
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              placeholder="Enter Your Name"
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500"
            />
          </div>

          {/* Company */}
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
              Company
            </label>
            <input
              type="text"
              name="company"
              id="company"
              placeholder="Enter Your Name"
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500"
            />
          </div>
        </div>

        {/* Enquiry Type */}
        <div className="mt-6">
          <label htmlFor="enquiry-type" className="block text-sm font-medium text-gray-700 mb-1">
            Enquiry Type
          </label>
          <select
            id="enquiry-type"
            name="enquiry-type"
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm bg-white focus:ring-sky-500 focus:border-sky-500"
          >
            <option>Select an enquiry type</option>
            <option>NGO Partnership</option>
            <option>CSR Collaboration</option>
            <option>Donation</option>
            <option>General Enquiry</option>
          </select>
        </div>

        {/* Message */}
        <div className="mt-6">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Enter Your Message Here
          </label>
          <textarea
            name="message"
            id="message"
            rows={5}
            placeholder="Type text"
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="mt-6">
          <button
            type="submit"
            className="w-full py-3 px-6 border border-transparent rounded-md shadow-sm text-white font-medium bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700"
          >
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
}

export default ContactForm;
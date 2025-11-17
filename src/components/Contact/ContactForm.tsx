const ContactForm: React.FC = () => {
  
  return (
    // Updated background color to match design (Light Bluish-Gray)
    <section className="bg-[#E9EEF2] p-6 md:p-8 rounded-lg shadow-sm h-full">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Send Us a Message</h2>
      <p className="text-gray-500 mb-8 text-sm md:text-base">
        Fill out the form below and our team will get back to you within 24 hours.
      </p>

      <form action="#" method="POST">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Full Name */}
          <div>
            <label htmlFor="full-name" className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              name="full-name"
              id="full-name"
              placeholder="Enter Your Name"
              className="w-full p-3 bg-transparent border border-gray-400 rounded-md placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-gray-500 transition-colors"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Your Name"
              className="w-full p-3 bg-transparent border border-gray-400 rounded-md placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-gray-500 transition-colors"
            />
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              placeholder="Enter Your Name"
              className="w-full p-3 bg-transparent border border-gray-400 rounded-md placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-gray-500 transition-colors"
            />
          </div>

          {/* Company */}
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
              Company
            </label>
            <input
              type="text"
              name="company"
              id="company"
              placeholder="Enter Your Name"
              className="w-full p-3 bg-transparent border border-gray-400 rounded-md placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-gray-500 transition-colors"
            />
          </div>
        </div>

        {/* Enquiry Type */}
        <div className="mt-6">
          <label htmlFor="enquiry-type" className="block text-sm font-medium text-gray-700 mb-2">
            Enquiry Type
          </label>
          <div className="relative">
            <select
              id="enquiry-type"
              name="enquiry-type"
              className="w-full p-3 bg-transparent border border-gray-400 rounded-md text-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-gray-500 appearance-none cursor-pointer"
            >
              <option>Select an enquiry type</option>
              <option>NGO Partnership</option>
              <option>CSR Collaboration</option>
              <option>Donation</option>
              <option>General Enquiry</option>
            </select>
            {/* Custom Chevron for better styling match */}
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Message */}
        <div className="mt-6">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Enter Your Message Here
          </label>
          <textarea
            name="message"
            id="message"
            rows={5}
            placeholder="Type text"
            className="w-full p-3 bg-transparent border border-gray-400 rounded-md placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-gray-500 transition-colors resize-none"
          ></textarea>
        </div>

        {/* Submit Button - Updated to Outline Style */}
        <div className="mt-8">
          <button
            type="submit"
            className="w-full py-3 px-6 border border-gray-900 rounded-md text-gray-900 font-medium hover:bg-gray-900 hover:text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
}

export default ContactForm;
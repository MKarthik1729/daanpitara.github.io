import SectionHeading from "@/assets/HeadingText/SectionHeading";
import FaqSingleQuestion from "@/assets/theme/FaqSingleQuestion";
import SubsectionHeading from "@/assets/HeadingText/SubsectionHeading";

export default function Faqs() {

  const basic_faqs =[
  {
    question: "How does DaanPitara support NGOs?",
    answer: "DaanPitara is the best NGO support platform designed to help non-profits grow digitally and raise funds online. We empower NGOs through digital fundraising tools, CSR funding opportunities, and visibility programs like Google Ad Grants. As your digital growth partner, we ensure your mission reaches the right audience and drives lasting impact."
  },
  {
    question: "What makes Mission Mosaic special?",
    answer: "Mission Mosaic is our exclusive NGO collaboration network, a unique initiative within DaanPitara that connects changemakers, donors, and volunteers across India. It’s a CSR impact platform where shared missions unite, ensuring that every effort contributes to collective progress and nationwide transformation."
  },
  {
    question: "What do you mean by “signing up for free”?",
    answer: "When we say sign up for free, it means your NGO can create a verified listing on our NGO visibility platform without paying anything. This free access helps you showcase your cause, get NGO onboarding and verification, and start attracting donors and CSR partners instantly, giving every organization an equal chance to shine."
  },
  {
    question: "Who can be part of DaanPitara?",
    answer: "Any registered NGO in India, foundation, or social impact organization is welcome to join DaanPitara. Whether your focus is on education, health, women empowerment, or the environment, our NGO fundraising support system and CSR partnership opportunities help your mission grow faster and reach further."
  },
  {
    question: "What benefits will my NGO get after joining?",
    answer: "Once you’re onboard, your NGO receives a verified profile, access to CSR funding tools, and enhanced donor engagement through our trusted NGO fundraising website. You’ll also enjoy a strong digital presence, mentorship opportunities, and visibility under the best NGO support platform built for transparency and growth."
  },
  {
    question: "Does the free access expire?",
    answer: "No. Your free NGO digital access never expires. We believe in continuous NGO growth support, allowing you to stay active, visible, and impactful for as long as you wish. You can upgrade anytime to access premium digital tools for expansion."
  }
];



const paymentFAQ =  [
  {
    question: "Does joining DaanPitara require any initial cost?",
    answer: "To join DaanPitara, a small NGO onboarding fee of ₹5,100 is required. This covers your verified NGO registration, onboarding, and digital listing on our best NGO support platform, ensuring you can access all our digital tools and fundraising features seamlessly."
  },
  {
    question: "What’s included once my NGO is successfully registered?",
    answer: "After registration, you’ll gain access to your personalized NGO dashboard tools, fundraising and branding features, and dedicated expert guidance. Our NGO digital support system helps your cause get discovered by donors, CSR partners, and volunteers worldwide."
  },
  {
    question: "Are the pricing plans flexible for different NGOs?",
    answer: "Yes, absolutely. DaanPitara’s NGO pricing plans are flexible and designed to meet your organization’s size, needs, and goals. Our customized NGO support solutions ensure that both small and large NGOs can grow with confidence."
  },
  {
    question: "When should payments be made for services?",
    answer: "Payments are made before your chosen service begins. For larger projects, we offer flexible NGO payment options such as milestone-based or scheduled payments, ensuring convenience and transparency."
  },
  {
    question: "Can you ensure definite results for each service?",
    answer: "Our goal is genuine progress, not empty promises. While results may vary, we provide transparent NGO reporting and continuous performance tracking to measure your organization’s real growth and digital impact."
  },
  {
    question: "Is it possible to stop services midway if needed?",
    answer: "Yes. You can pause or cancel your NGO plan anytime with prior notice. Our NGO service cancellation policy ensures a smooth process, and our team will guide you through any formalities."
  },
  {
    question: "Do you offer refunds once payment is made?",
    answer: "Since our work begins immediately after payment, refunds aren’t typically applicable. However, our NGO refund policy ensures that any genuine issue or technical concern is reviewed personally by our support team for a fair solution."
  },
  {
    question: "What payment methods are accepted?",
    answer: "We support secure NGO payments through UPI, net banking, credit/debit cards, and verified payment gateways. Every digital NGO transaction is encrypted, ensuring 100% safety and instant acknowledgment."
  }
];





return (
  <div className="flex flex-col items-center w-full px-4 sm:px-6 md:px-8 lg:px-0">
    <SectionHeading heading="Frequently asked questions for quick answers" />

    <div
      className="
        w-full
        max-w-[700px]
      "
    >
      <div className="py-8">
        <SubsectionHeading heading="Basic FAQ's Block" />

        {basic_faqs.length > 1 &&
          basic_faqs.map((faq, index) => (
            <FaqSingleQuestion
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
      </div>

      <SubsectionHeading heading="Payment & Refund" />
      {paymentFAQ.length > 1 &&
        paymentFAQ.map((faq, index) => (
          <FaqSingleQuestion
            key={index}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
    </div>
  </div>
);

}

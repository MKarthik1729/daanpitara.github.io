import { useRef, useState } from "react";
import InputField from "@/assets/theme/FormInputField";
import {
  UserIcon,
  PhoneIcon,
  EnvelopeSimpleIcon,
  MapPinIcon,
  BuildingsIcon,
  GlobeIcon,
  ListIcon,
  ClipboardTextIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  CalendarIcon
} from "@phosphor-icons/react";
import SubmitButton from "@/assets/ButtonDesigns/SubmitButton";
import { sendFundraise } from "@/assets/Services/fundraise";



export default function CsrConnectionForm() {
  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Step 1 refs
  const nameRef = useRef<HTMLInputElement>(null);
  const contactRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const locationRef = useRef<HTMLInputElement>(null);

  // Step 2 state
  const [userType, setUserType] = useState("");
  const [purpose, setPurpose] = useState("");

  // Step 3 state/refs
  const [focusArea, setFocusArea] = useState<string[]>([]);
  const summaryRef = useRef<HTMLTextAreaElement>(null);
  const beneficiariesRef = useRef<HTMLInputElement>(null);

  // Step 4 refs
  const websiteRef = useRef<HTMLInputElement>(null);
  const achievementsRef = useRef<HTMLInputElement>(null);

  // Step 5 refs
  const [agree, setAgree] = useState(false);
  const authorizedRef = useRef<HTMLInputElement>(null);
  const dateRef = useRef<HTMLInputElement>(null);

  const stepTitles = [
    "Basic Details",
    "Type & Purpose",
    "Focus Area & Project Info",
    "Documents & Credentials",
    "Declaration & Submission",
  ];

  const toggleFocus = (area: string) => {
    setFocusArea((prev) =>
      prev.includes(area) ? prev.filter((a) => a !== area) : [...prev, area]
    );
  };

  const validateStep = () => {
    const newErrors: Record<string, string> = {};

    if (step === 1) {
      if (!nameRef.current?.value.trim()) newErrors.name = "Name / Organization is required";
      if (!contactRef.current?.value.trim()) newErrors.contact = "Contact person is required";
      // if (!emailRef.current?.value.trim()) newErrors.email = "Email is required";

    const email = emailRef.current?.value.trim();
    if (!email) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = "Enter a valid email";

    const phone = phoneRef.current?.value.trim();
    if (!phone) newErrors.phone = "Phone number is required";
    else if (!/^\+?[0-9\s-]{8,15}$/.test(phone)) newErrors.phone = "Enter a valid phone number";

      // if (!phoneRef.current?.value.trim()) newErrors.phone = "Phone is required";
      if (!locationRef.current?.value.trim()) newErrors.location = "Location is required";
    }

    if (step === 2) {
      if (!userType) newErrors.userType = "Select user type";
      if (!purpose) newErrors.purpose = "Select purpose";
    }

    if (step === 3) {
      if (focusArea.length === 0) newErrors.focusArea = "Select at least one focus area";
      if (!summaryRef.current?.value.trim()) newErrors.summary = "Summary is required";
      if (!beneficiariesRef.current?.value.trim()) newErrors.beneficiaries = "Beneficiaries info is required";
    }

    if (step === 4) {
      if (!websiteRef.current?.value.trim()) newErrors.website = "Website / Social link is required";
      if (!achievementsRef.current?.value.trim()) newErrors.achievements = "Achievements info is required";
    }

    if (step === 5) {
      if (!agree) newErrors.agree = "You must confirm";
      if (!authorizedRef.current?.value.trim()) newErrors.authorized = "Authorized name is required";
      if (!dateRef.current?.value.trim()) newErrors.date = "Date is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) setStep((prev) => Math.min(prev + 1, 5));
  };

  const handleBack = () => setStep((prev) => Math.max(prev - 1, 1));

  const handleSubmit = async () => {
    if (!validateStep()) return;

const formData = {
  name: nameRef.current?.value || '',
  contact_person: contactRef.current?.value || '',
  email: emailRef.current?.value || '',
  phone: phoneRef.current?.value || '',
  location: locationRef.current?.value || '',
  user_type: userType || '',
  purpose: purpose || '',
  focus_area: focusArea || '',
  summary: summaryRef.current?.value || '',
  beneficiaries: beneficiariesRef.current?.value || '',
  website: websiteRef.current?.value || '',
  achievements: achievementsRef.current?.value || '',
  authorized_name: authorizedRef.current?.value || '',
  date: dateRef.current?.value || '',
};


      try {
    const response = await sendFundraise(formData)

    console.log('Fundraise successfully sent:', response);
    alert("Fundraise successfully sent!");
  } catch (error) {
    console.error('Failed to send fundraise data:', error);
    alert("Failed to send fundraise data.");
  }

  // name: 'John Doe',
  // phone: '9876543210',
  // email: 'john@example.com',
  // website: 'https://example.com',
  // location: 'Hyderabad',
  // contact_person: 'Jane Smith',
  // authorized_name: 'Authorized Person',
  // date: '2025-10-27',
  // user_type: 'Individual Donor',
  // purpose: 'Seeking CSR Support / Partnership',
  // focus_area: ['Animal Welfare', 'Environment & Sustainability'],
  // summary: 'This is a dummy fundraise record.',
  // achievements: 'Good achievements',
  // beneficiaries: 'Local community in Hyderabad',

  };

  return (
    <div className="max-w-2xl mx-auto rounded-lg bg-white relative">
      {/* Header */}
      <div className="relative mb-4 text-center p-4">
        <h2 className="text-lg font-semibold text-gray-800">
          CSR | NGO | Fundraiser Connection Form
        </h2>
        <h3 className="text-base text-gray-600 font-medium mt-2">
          {step}. {stepTitles[step - 1]}
        </h3>
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden mt-2">
          <div
            className="h-full bg-brand-blue transition-all duration-300"
            style={{ width: `${(step / 5) * 100}%` }}
          ></div>
        </div>
      </div>

      <div className="px-4 max-h-[600px] min-h-[500px] overflow-y-auto space-y-5">
        {/* Step 1 */}
        <div className={step === 1 ? "block" : "hidden"}>
          <InputField
            ref={nameRef}
            text="Full Name / Organization Name:"
            placeholder="Enter your name or organization"
            icon={<BuildingsIcon size={20} />}
            error={errors.name}
          />
          <InputField
            ref={contactRef}
            text="Contact Person:"
            placeholder="Full name of the authorized contact"
            icon={<UserIcon size={20} />}
            error={errors.contact}
          />
          <InputField
            ref={emailRef}
            text="Email Address:"
            placeholder="example@email.com"
            icon={<EnvelopeSimpleIcon size={20} />}
            error={errors.email}
            
          />
          <InputField
            ref={phoneRef}
            text="Phone / WhatsApp:"
            placeholder="+91-XXXXXXXXXX"
            icon={<PhoneIcon size={20} />}
            error={errors.phone}
            type="number"
          />
          <InputField
            ref={locationRef}
            text="Country / City:"
            placeholder="Enter your location"
            icon={<MapPinIcon size={20} />}
            error={errors.location}
          />
        </div>

        {/* Step 2 */}
        <div className={step === 2 ? "block" : "hidden"}>
          <div>
            <p className="font-medium mb-2">You are:</p>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {["NGO / Non-Profit", "Corporate (CSR)", "Individual Donor"].map((type) => (
                <label key={type} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="userType"
                    value={type}
                    checked={userType === type}
                    onChange={() => setUserType(type)}
                  />
                  {type}
                </label>
              ))}
            </div>
            {errors.userType && <p className="text-red-500 text-sm">{errors.userType}</p>}
          </div>
          <div>
            <p className="font-medium mb-2">Purpose of Submission:</p>
            {[
              "Seeking CSR Support / Partnership",
              "Offering CSR Collaboration",
              "Running a Fundraising Campaign",
              "Volunteering or Awareness Partnership",
            ].map((p) => (
              <label key={p} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="purpose"
                  value={p}
                  checked={purpose === p}
                  onChange={() => setPurpose(p)}
                />
                {p}
              </label>
            ))}
            {errors.purpose && <p className="text-red-500 text-sm">{errors.purpose}</p>}
          </div>
        </div>

        {/* Step 3 */}
        <div className={step === 3 ? "block" : "hidden"}>
          <p className="font-medium mb-2">Primary Focus Area:</p>
          <div className="grid grid-cols-2 gap-2 text-sm">
            {[
              "Education",
              "Health & Hygiene",
              "Environment & Sustainability",
              "Women Empowerment",
              "Rural Development",
              "Skill Development",
              "Animal Welfare",
              "Other",
            ].map((area) => (
              <label key={area} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={focusArea.includes(area)}
                  onChange={() => toggleFocus(area)}
                />
                {area}
              </label>
            ))}
          </div>
          {errors.focusArea && <p className="text-red-500 text-sm">{errors.focusArea}</p>}

          <div>
            <label className="block text-sm font-medium mb-1">
              Project / Initiative Summary:
            </label>
            <textarea
              ref={summaryRef}
              rows={4}
              placeholder="Write a brief description..."
              className="w-full border-b focus:outline-none focus:border-black p-2"
            />
            {errors.summary && <p className="text-red-500 text-sm">{errors.summary}</p>}
          </div>

          <InputField
            ref={beneficiariesRef}
            text="Target Beneficiaries / Location:"
            placeholder="Mention your community or region"
            icon={<ListIcon size={20} />}
            error={errors.beneficiaries}
          />
        </div>

        {/* Step 4 */}
        <div className={step === 4 ? "block" : "hidden"}>
          <InputField
            ref={websiteRef}
            text="Website / Social Links:"
            placeholder="Paste your website or social handles"
            icon={<GlobeIcon size={20} />}
            error={errors.website}
          />
          <InputField
            ref={achievementsRef}
            text="Previous CSR Partners / Achievements:"
            placeholder="Mention past collaborations or awards"
            icon={<ClipboardTextIcon size={20} />}
            error={errors.achievements}
          />
        </div>

        {/* Step 5 */}
        <div className={step === 5 ? "block" : "hidden"}>
          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
            />
            <p className="text-sm">
              I confirm that the information provided is accurate and may be
              shared for CSR / fundraising matchmaking purposes.
            </p>
          </div>
          {errors.agree && <p className="text-red-500 text-sm">{errors.agree}</p>}

          <InputField
            ref={authorizedRef}
            text="Authorized Signatory Name:"
            placeholder="Enter authorized person name"
            icon={<UserIcon size={20} />}
            error={errors.authorized}
          />
          <InputField
            ref={dateRef}
            text="Date:"
            placeholder="DD/MM/YYYY"
            icon={<CalendarIcon size={20} />}
            type="date"
            error={errors.date}
          />
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between p-4 border-t mt-4">
        {step > 1 ? (
          <button
            type="button"
            onClick={handleBack}
            className="flex items-center gap-1 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          >
            <ArrowLeftIcon size={20} /> Back
          </button>
        ) : <div />}

        {step < 5 ? (
          <button
            type="button"
            onClick={handleNext}
            className="flex items-center gap-1 px-4 py-2 bg-brand-blue text-white rounded hover:bg-blue-700"
          >
            Next <ArrowRightIcon size={20} />
          </button>
        ) : (
          <SubmitButton submit={handleSubmit} text="Submit" />
        )}
      </div>
    </div>
  );
}

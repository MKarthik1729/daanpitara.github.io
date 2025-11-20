import React, { useRef } from "react";
import { Input } from "@/assets/theme/InputField.tsx";
import { EnvelopeSimple, ArrowRight } from "@phosphor-icons/react";

function VerifyOtp({ email, onSubmit}: { email: string, onSubmit?: (otp: { otp: string }) => void }) {
  const otpRefs = useRef<HTMLInputElement[]>(Array(6).fill(null));

  const handleChange = (index: number, value: string) => {
    if (!/^[0-9]?$/.test(value)) return; // Allow only a single digit

    if (value && index < 5) {
      otpRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !otpRefs.current[index].value && index > 0) {
      otpRefs.current[index - 1].focus();
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const otp = otpRefs.current.map((input) => input.value).join("");
    console.log("OTP Entered:", otp);
  if (onSubmit) onSubmit({ otp });
  };

  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-xl font-medium text-gray-700">Enter OTP</h2>

      <form className="space-y-6" onSubmit={handleSubmit}>
        <Input
          id="email-display"
          label="Email Address"
          type="email"
          value={email}
          readOnly
          disabled
          className="bg-gray-100 cursor-not-allowed"
          preIcon={<EnvelopeSimple size={20} className="text-gray-400" />}
        />

        {/* OTP Inputs */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Enter your 6-digit code
          </label>

          <div className="flex justify-between gap-2">
{Array.from({ length: 6 }).map((_, index) => (
  <input
    key={index}
    type="text"
    inputMode="numeric"
    maxLength={1}
    pattern="[0-9]"
    className="w-12 h-12 sm:w-14 sm:h-14 text-center text-2xl 
               border border-gray-300 rounded-md shadow-sm 
               focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
    ref={(el) => { otpRefs.current[index] = el! }}
    onChange={(e) => handleChange(index, e.target.value)}
    onKeyDown={(e) => handleKeyDown(index, e)}
    required
  />
))}

          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full flex justify-center items-center gap-2 rounded-md 
                     bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-3 
                     text-sm font-semibold text-white shadow-sm 
                     hover:opacity-90"
        >
          Verify OTP
          <ArrowRight size={18} weight="bold" />
        </button>

        {/* Resend */}
        <button
          type="button"
          onClick={() => console.log("Resending OTP...")}
          className="w-full flex justify-center items-center gap-3 rounded-md 
                     border border-gray-300 bg-white px-4 py-2.5 
                     text-sm font-medium text-gray-700 shadow-sm 
                     hover:bg-gray-50"
        >
          Resend OTP
          <ArrowRight size={18} weight="bold" />
        </button>
      </form>
    </div>
  );
}

export default VerifyOtp;

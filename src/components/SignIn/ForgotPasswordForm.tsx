import React, { useState } from "react";
import { Input } from "@/assets/theme/InputField.tsx"; // Adjust path as needed
import { 
  EnvelopeSimple, 
  ArrowRight, 
  ArrowLeft 
} from "@phosphor-icons/react";
// import { Verify } from "crypto";
import VerifyOtp from "./VerifyOtp.tsx";

export default function ForgotPasswordForm({ onBackToLogin }: { onBackToLogin: () => void }) {
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [email, setEmail] = useState("");

  // Handler for the form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!isOtpSent) {
      // Logic to send OTP
      console.log("Sending OTP to:", email);
      setIsOtpSent(true); // Move to the next step
    } else {
      // Logic to verify OTP
      console.log("Verifying OTP...");
      // On success, you might redirect or show a "reset password" form
      alert("OTP Verified! (Demo)");
    }
  };

  return (
    <div className="w-full max-w-md space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">
        Forgot Password?
      </h1>

      {!isOtpSent ? (
        // --- STATE 1: Request OTP Form ("Verify Your Status") ---
        <>
          <h2 className="text-xl font-medium text-gray-700">
            Verify Your Status
          </h2>
          <form className="space-y-5" onSubmit={handleSubmit}>
            <Input
              id="email"
              label="Email Address"
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              preIcon={
                <EnvelopeSimple size={20} className="text-gray-400" />
              }
            />
            <button
              type="submit"
              className="w-full flex justify-center items-center gap-2 rounded-md 
                         bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-3 
                         text-sm font-semibold text-white shadow-sm 
                         hover:opacity-90 focus-visible:outline"
            >
              Send OTP
              <ArrowRight size={18} weight="bold" />
            </button>
            
            {/* This is now a standard link. 
              If you use React Router, you would change this to:
              import { Link } from "react-router-dom";
              <Link to="/login" className="...">...</Link>
            */}
            <a
              href="/login" // Or whatever your login route is
              className="w-full flex justify-center items-center gap-3 rounded-md 
                         border border-gray-300 bg-white px-4 py-2.5 
                         text-sm font-medium text-gray-700 shadow-sm 
                         hover:bg-gray-50"
                onClick={(e) => {
                  e.preventDefault();
                  onBackToLogin();
                }}
            >
              <ArrowLeft size={18} weight="bold" />
              Back To Login
            </a>
          </form>
        </>
      ) : (
        // --- STATE 2: Verify OTP Form ("Enter OTP") ---
        <VerifyOtp email={email || ""} /> 
      )}
    </div>
  );
}
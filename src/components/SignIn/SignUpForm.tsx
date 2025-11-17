import { useState } from "react";
import { Input } from "@/assets/theme/InputField.tsx"; // Adjust path as needed
import { 
  ArrowRight, 
  Eye, 
  EyeSlash, 
  GoogleLogo, 
  LinkedinLogo,
  EnvelopeSimple,
  Lock
} from "@phosphor-icons/react";

// Define props for the component
// interface SignUpFormProps {
//   onSignInClick: () => void; // Function to switch to Sign In view
// }

export default function SignUpForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);

  return (
    <div className="w-full max-w-md space-y-6">
      {/* Titles */}
      <div className="space-y-1">
        <h1 className="text-3xl font-bold text-gray-900">
          Welcome To DaanPitara
        </h1>
        <h2 className="text-xl font-medium text-gray-700">Sign Up</h2>
      </div>

      {/* Form */}
      <form className="space-y-5">
        <Input
          id="email"
          label="Email Address"
          type="email"
          placeholder="you@example.com"
          autoComplete="email"
          required
          preIcon={
            <EnvelopeSimple size={20} className="text-gray-400" />
          }
        />

        <Input
          id="password"
          label="Password"
          type={showPassword ? "text" : "password"}
          placeholder="••••••••"
          autoComplete="new-password"
          required
          preIcon={
            <Lock size={20} className="text-gray-400" />
          }
          postIcon={
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="text-gray-400 hover:text-gray-500"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeSlash size={20} /> : <Eye size={20} />}
            </button>
          }
        />

        <Input
          id="repeat-password"
          label="Repeat Password"
          type={showRepeatPassword ? "text" : "password"}
          placeholder="••••••••"
          autoComplete="new-password"
          required
          preIcon={
            <Lock size={20} className="text-gray-400" />
          }
          postIcon={
            <button
              type="button"
              onClick={() => setShowRepeatPassword(!showRepeatPassword)}
              className="text-gray-400 hover:text-gray-500"
              aria-label={showRepeatPassword ? "Hide password" : "Show password"}
            >
              {showRepeatPassword ? <EyeSlash size={20} /> : <Eye size={20} />}
            </button>
          }
        />

        {/* Sign Up Button */}
        <button
          type="submit"
          className="w-full flex justify-center items-center gap-2 rounded-md 
                     bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-3 
                     text-sm font-semibold text-white shadow-sm 
                     hover:opacity-90 focus-visible:outline 
                     focus-visible:outline-2 focus-visible:outline-offset-2 
                     focus-visible:outline-indigo-600 transition-opacity"
        >
          Sign Up
          <ArrowRight size={18} weight="bold" />
        </button>
      </form>

      {/* Divider */}
      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center">
          <span className="bg-white px-3 text-sm text-gray-500">
            Or Continue with
          </span>
        </div>
      </div>

      {/* Social Logins */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <button
          type="button"
          className="w-full flex justify-center items-center gap-3 rounded-md 
                     border border-gray-300 bg-white px-4 py-2.5 
                     text-sm font-medium text-gray-700 shadow-sm 
                     hover:bg-gray-50"
        >
          <GoogleLogo size={20} weight="bold" />
          Google
        </button>
        <button
          type="button"
          className="w-full flex justify-center items-center gap-3 rounded-md 
                     border border-gray-300 bg-white px-4 py-2.5 
                     text-sm font-medium text-gray-700 shadow-sm 
                     hover:bg-gray-50"
        >
          <LinkedinLogo size={20} weight="bold" />
          LinkedIn
        </button>
      </div>

      {/* Sign In Link */}
      {/* <div className="text-center">
        <p className="text-sm text-gray-600">
          Already have an account?{" "}
          <button
            type="button"
            onClick={onSignInClick}
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Sign In
          </button>
        </p>
      </div> */}
    </div>
  );
}
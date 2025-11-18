import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/assets/theme/InputField.tsx"; // Adjust path as needed
import { validatePassword, confirmPassword } from "../Services/Validation.ts";
import { registerUser } from "../../assets/Services/authService";
import { getAuthErrorMessage } from "../../assets/Services/errorHandler";
import { 
  ArrowRight, 
  Eye, 
  EyeSlash, 
  GoogleLogo, 
  LinkedinLogo,
  EnvelopeSimple,
  Lock
} from "@phosphor-icons/react";


export default function SignUpForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [errors, setErrors] = useState<Record<string, string | null>>({});
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({}); // Clear previous errors
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    const email = data.email as string;
    const password = data.password as string;
    const repeatPassword = data["repeat-password"] as string;

    const passwordError = validatePassword(password);
    const repeatPasswordError = confirmPassword(password, repeatPassword);

    if (passwordError || repeatPasswordError || !email) {
      setErrors({
        email: !email ? "Email is required." : null,
        password: passwordError,
        "repeat-password": repeatPasswordError,
      });
      return; // Stop submission if there are errors
    }

    try {
      await registerUser({ email, password });
      setShowSuccessPopup(true);
    } catch (error: any) {
      console.error("Registration error:", error);
      const message = error.message || 'An unknown error occurred.';
      const statusCodeMatch = message.match(/status code (\d{3})/);
      const statusCode = statusCodeMatch ? parseInt(statusCodeMatch[1], 10) : null;

      if (statusCode === 409) {
        const errorMessage = getAuthErrorMessage(409);
        setErrors((prevErrors) => ({ ...prevErrors, email: errorMessage }));
      } else {
        const errorMessage = statusCode ? getAuthErrorMessage(statusCode) : message;
        setErrors((prevErrors) => ({ ...prevErrors, api: errorMessage }));
      }
    }
  };

  const handlePopupOk = () => {
    setShowSuccessPopup(false);
    navigate("/signin");
  };


  return (
    <div className="w-full max-w-md space-y-6">
      {showSuccessPopup && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
          <div className="p-8 border w-96 shadow-lg rounded-md bg-white">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900">Success!</h3>
              <div className="mt-2 px-7 py-3">
                <p className="text-lg text-gray-500">You have been successfully registered.</p>
              </div>
              <div className="flex justify-center mt-4">
                <button
                  onClick={handlePopupOk}
                  className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
                >
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Titles */}
            <div className="mb-8">
        <h1 className="text-3xl font-bold text-black">
          Welcome To <span className="text-cyan-500">DaanPitara</span>
        </h1>
      </div>
      <div className="space-y-1">

        <h2 className="text-xl font-medium text-gray-700">Sign Up</h2>
      </div>

      {/* Form */}
      <form className="space-y-5" onSubmit={handleSubmit}>
        {errors.api && <p className="mt-2 text-sm text-red-600">{errors.api}</p>}
        <div>
          <Input
            id="email"
            label="Email Address"
            type="email"
            placeholder="you@example.com"
            name="email"
            autoComplete="email"
            required
            preIcon={
              <EnvelopeSimple size={20} className="text-gray-400" />
            }
          />
          {errors.email && (
            <p className="mt-2 text-sm text-red-600">
              {errors.email}{" "}
              <a href="/signin" className="font-medium text-indigo-600 hover:text-indigo-500">
                Sign In
              </a>
            </p>
          )}
        </div>

        <div>
          <Input
            id="password"
            label="Password"
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="••••••••"
            autoComplete="new-password"
            error={errors.password}
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
          {errors.password && <p className="mt-2 text-sm text-red-600">{errors.password}</p>}
        </div>

        <div>
          <Input
            id="repeat-password"
            label="Repeat Password"
            type={showRepeatPassword ? "text" : "password"}
            name="repeat-password"
            placeholder="••••••••"
            autoComplete="new-password"
            error={errors["repeat-password"]}
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
          {errors["repeat-password"] && <p className="mt-2 text-sm text-red-600">{errors["repeat-password"]}</p>}
        </div>

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
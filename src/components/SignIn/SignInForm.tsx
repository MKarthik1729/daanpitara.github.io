import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/assets/theme/InputField.tsx";
import { loginUser } from "../../assets/Services/authService";
import { getAuthErrorMessage } from "../../assets/Services/errorHandler";
import { 
  ArrowRight, 
  Eye, 
  EyeSlash, 
  // GoogleLogo, 
  // LinkedinLogo,
  EnvelopeSimple,
  Lock
} from "@phosphor-icons/react";

interface SignInFormProps {
  onForgotPasswordClick: () => void;
}

export default function SignInForm({ onForgotPasswordClick }: SignInFormProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<Record<string, string | null>>({});
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({}); // Clear previous errors

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    const email = data.email as string;
    const password = data.password as string;

    if (!email || !password) {
      setErrors({
        email: !email ? "Email is required." : null,
        password: !password ? "Password is required." : null,
      });
      return;
    }

    try {
      await loginUser({ email, password });
      navigate("/dashboard");
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

  return (
    <div className="w-full max-w-md mx-auto">
      
      {/* Header Section - Added to match image */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-black">
          Welcome To <span className="text-cyan-500">DaanPitara</span>
        </h1>
      </div>

      {/* Sub-Header */}
      <div className="mb-6 text-left">
        <h2 className="text-xl font-medium text-gray-900">Login</h2>
      </div>

      {/* Form */}
      <form className="space-y-5" onSubmit={handleSubmit}>
        {errors.api && <p className="mt-2 text-sm text-red-600">{errors.api}</p>}
        
        <div>
          <Input
            id="email"
            label="Email Address"
            type="email"
            placeholder="yoy@example.com"
            name="email"
            autoComplete="email"
            required
            preIcon={<EnvelopeSimple size={20} className="text-gray-400" />}
          />
          {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email}</p>}
        </div>

        <div>
          <Input
            id="password"
            label="Password"
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="••••••••"
            autoComplete="current-password"
            required
            preIcon={<Lock size={20} className="text-gray-400" />}
            postIcon={
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-gray-400 hover:text-gray-500 focus:outline-none"
              >
                {showPassword ? <EyeSlash size={20} /> : <Eye size={20} />}
              </button>
            }
          />
          {errors.password && <p className="mt-2 text-sm text-red-600">{errors.password}</p>}

          {/* Forgot Password - Color updated to Red */}
          <div className="text-right mt-2">
            <button
              type="button"
              onClick={onForgotPasswordClick}
              className="text-sm font-normal text-red-500 hover:text-red-600 transition-colors"
            >
              Forgot Password ?
            </button>
          </div>
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="w-full flex justify-center items-center gap-2 rounded-md 
                     bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-3 
                     text-sm font-semibold text-white shadow-sm 
                     hover:opacity-90 transition-opacity"
        >
          Login
          <ArrowRight size={18} weight="bold" />
        </button>
      </form>

      {/* Divider */}
      {/* <div className="relative my-8">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center">
          <span className="bg-white px-4 text-sm text-gray-500">
            Or Continue with
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        <button
          type="button"
          className="w-full flex justify-center items-center gap-3 rounded-md 
                     border border-gray-300 bg-white px-4 py-2.5 text-sm 
                     font-medium text-gray-700 shadow-sm hover:bg-gray-50 transition-colors"
        >

          <GoogleLogo size={20} weight="bold" className="text-red-500" />
          Google
        </button>

        <button
          type="button"
          className="w-full flex justify-center items-center gap-3 rounded-md 
                     border border-gray-300 bg-white px-4 py-2.5 text-sm 
                     font-medium text-gray-700 shadow-sm hover:bg-gray-50 transition-colors"
        >

          <LinkedinLogo size={20} weight="bold" className="text-blue-700" />
          LinkedIn
        </button>
      </div> */}

      {/* Sign Up Link using useNavigate */}
      <div className="text-center mt-5">
        <p className="text-sm text-gray-500">
          Don't have an account?{" "}
          <button 
            type="button"
            onClick={() => navigate('/signup')}
            className="font-medium text-gray-700 underline underline-offset-2 hover:text-black transition-colors"
          >
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
}
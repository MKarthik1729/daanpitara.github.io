import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/assets/theme/InputField.tsx";
import { loginUser } from "../../assets/Services/authService";
import { 
  ArrowRight, 
  Eye, 
  EyeSlash, 
  GoogleLogo, 
  LinkedinLogo,
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
      setErrors({ api: error.message || "User or Password is incorrect or not found." });
    }
  };

  return (
    <div className="w-full max-w-md space-y-6">

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
                className="text-gray-400 hover:text-gray-500"
              >
                {showPassword ? <EyeSlash size={20} /> : <Eye size={20} />}
              </button>
            }
          />
          {errors.password && <p className="mt-2 text-sm text-red-600">{errors.password}</p>}

          <div className="text-right mt-2">
            <button
              type="button"
              onClick={onForgotPasswordClick}
              className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
            >
              Forgot Password?
            </button>
          </div>
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="w-full flex justify-center items-center gap-2 rounded-md 
                     bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-3 
                     text-sm font-semibold text-white shadow-sm 
                     hover:opacity-90 transition-opacity"
        >
          Login
          <ArrowRight size={18} weight="bold" />
        </button>
      </form>

      {/* Divider */}
      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
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
                     border border-gray-300 bg-white px-4 py-2.5 text-sm 
                     font-medium text-gray-700 shadow-sm hover:bg-gray-50"
        >
          <GoogleLogo size={20} weight="bold" />
          Google
        </button>

        <button
          type="button"
          className="w-full flex justify-center items-center gap-3 rounded-md 
                     border border-gray-300 bg-white px-4 py-2.5 text-sm 
                     font-medium text-gray-700 shadow-sm hover:bg-gray-50"
        >
          <LinkedinLogo size={20} weight="bold" />
          LinkedIn
        </button>
      </div>

      {/* Sign Up Link */}
      <div className="text-center">
        <p className="text-sm text-gray-600">
          Don't have an account?{" "}
          <a href="/signup" className="font-medium text-indigo-600 hover:text-indigo-500">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}

import { useState } from "react";
import SignInForm from "./SignInForm"; // Adjust path as needed
import ForgotPasswordForm from "./ForgotPasswordForm"; // Adjust path
import SignUp from "./SignUp"; 
// import Logo from "@/assets/daanpitara.jpg"; 
// import HeroDescription from "@/assets/HeadingText/HeroDescription";

// Define the possible states for the form
type FormView = "signin" | "signup" | "forgot";

// --- 1. Define props for LoginPage ---
interface LoginPageProps {
  initialView?: FormView; // Make it optional, default to 'signin'
}

// --- 2. Accept prop and set default value ---
export default function LoginPage({ initialView = "signin" }: LoginPageProps) { 
  
  // --- 3. Use prop to set initial state ---
  const [formView, setFormView] = useState<FormView>(initialView);

  // Helper function to render the correct form
  const renderForm = () => {
    switch (formView) {
      case "signin":
        return (
          <SignInForm 
            onForgotPasswordClick={() => setFormView("forgot")} 
          />
        );
      case "signup":
        return (
          <SignUp
          />
        );
      case "forgot":
        return (
          <ForgotPasswordForm 
            onBackToLogin={() => setFormView("signin")} 
          />
        );
      
      default:
        // Fallback to signin just in case
        return (
          <SignInForm 
            onForgotPasswordClick={() => setFormView("forgot")} 
          />
        );
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* Left side (Form) */}
          <div className="flex justify-center md:justify-end">
            {renderForm()}
          </div>

          {/* Right side (Logo + Slogan) */}
          <div className="flex flex-col items-center justify-center space-y-6 
                        order-first md:order-last">
            {/* <p className="text-2xl font-semibold italic text-gray-600 text-center"> */}
            {/* <HeroDescription
              text="Your Compassion Our Code!"
              size={40}

              /> */}
            {/* </p> */}
            <img
              src={'/DaanPitara.png'}
              alt="DaanPitara Logo"
              className="w-80 h-80 lg:w-96 lg:h-96 object-contain scale-200"
            />
          </div>

        </div>
      </div>
    </div>
  );
}
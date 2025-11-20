import { useState } from "react";
import SignUpForm from "./SignUpForm";
import VerifyOtp from "./VerifyOtp";
import { registerUser } from "../../assets/Services/authService";
import {sendOtp} from "@/assets/Services/sendOtp";
// import { getAuthErrorMessage } from "../../assets/Services/errorHandler";
import { useNavigate } from "react-router-dom";

export default function SignUp() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showVerifyOtp, setShowVerifyOtp] = useState(false);
  const [errors, setErrors] = useState<Record<string, string | null>>({});
  const handleSignUpSuccess = async (email: string, password: string) => {
  setEmail(email);
  setPassword(password);

  const result = await sendOtp({ email, service: 'new-user' });
    console.log("OTP send result:", result);
  if (result.success) {
    setShowVerifyOtp(true);
  } else {

    console.error('OTP failed:', result.message);
    setErrors({ api: `${result.message}` });
  }
  };

  const handleOtpSubmit = async(otp: { otp: string }) => {
    console.log("OTP submitted:", otp.otp);
    console.log("For email:", email);
    console.log("Password:", password);
    await registerUser({ email, password, otp: otp.otp })
    alert("Registration successful! Please log in.");
    navigate('/signin')

  };


  return (
    <>

      {/* {errors && <div className="error-message">{errors.email || errors.api || errors.password || errors["repeat-password"]}</div>} */}
      {!showVerifyOtp ? (
        <SignUpForm onSignUpSuccess={handleSignUpSuccess} errors={errors} setErrors={setErrors} />
      ) : (
        <VerifyOtp email={email} onSubmit={handleOtpSubmit} />
      )}
    </>
  );
}
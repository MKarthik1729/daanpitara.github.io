import React from "react";
import { WarningCircle } from "@phosphor-icons/react";

const PasswordResetSupport: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50%] bg-gray-100 px-4">
      <WarningCircle size={64} weight="bold" className="text-red-500 mb-4" />
      <h2 className="text-2xl font-bold text-red-600 mb-2">
        Password Reset Required
      </h2>
      <p className="text-gray-700 text-center max-w-md">
        Please contact your admin for support to reset your password.
      </p>
      <a
        href="./contact"
        className="mt-4 inline-block bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition"
      >
        Contact Admin
      </a>
    </div>
  );
};

export default PasswordResetSupport;

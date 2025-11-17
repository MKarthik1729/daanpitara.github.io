import * as React from "react";

// Define the properties for the Input component
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  preIcon?: React.ReactNode;
  postIcon?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, id, preIcon, postIcon, ...props }, ref) => {
    return (
      <div className="w-full">
        {/* Label for the input */}
        <label
          htmlFor={id}
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {label}
        </label>
        
        {/* Wrapper for input and icons */}
        <div className="relative rounded-md shadow-sm">
          
          {/* Pre-icon (if provided) */}
          {preIcon && (
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              {preIcon}
            </div>
          )}

          {/* The actual input field */}
          <input
            type={type}
            id={id}
            ref={ref}
            className={`
              block w-full rounded-md border-gray-300 shadow-sm
              focus:border-indigo-500 focus:ring-indigo-500
              sm:text-sm py-3
              ${preIcon ? "pl-10" : "pl-4"}
              ${postIcon ? "pr-10" : "pr-4"}
              ${className}
            `}
            {...props}
          />

          {/* Post-icon (if provided) */}
          {postIcon && (
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              {postIcon}
            </div>
          )}
        </div>
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
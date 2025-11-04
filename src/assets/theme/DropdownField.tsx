import React, { forwardRef } from "react";

interface DropdownFieldProps {
  text?: string; // Label text
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
  placeholder?: string;
  icon?: React.ReactNode;
  error?: string;
  className?: string;
}

const DropdownField = forwardRef<HTMLSelectElement, DropdownFieldProps>(
  (
    {
      text,
      name,
      value,
      onChange,
      options,
      placeholder = "Select an option",
      icon,
      error,
      className = "",
    },
    ref
  ) => {
    return (
      <div className={`flex flex-col mb-4 ${className}`}>
        {text && (
          <label
            htmlFor={name}
            className="mb-1 text-sm font-medium text-gray-700"
          >
            {text}
          </label>
        )}

        <div
          className={`flex items-center border rounded-md px-3 py-2 focus-within:ring-2 ${
            error
              ? "border-red-500 focus-within:ring-red-400"
              : "border-gray-300 focus-within:ring-blue-400"
          }`}
        >
          {icon && <div className="mr-2 text-gray-500">{icon}</div>}
          <select
            ref={ref}
            name={name}
            value={value}
            onChange={onChange}
            className="flex-1 outline-none bg-transparent text-gray-700"
          >
            <option value="">{placeholder}</option>
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
      </div>
    );
  }
);

DropdownField.displayName = "DropdownField";

export default DropdownField;

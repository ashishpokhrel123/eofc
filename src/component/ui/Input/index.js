import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaEye, FaEyeSlash } from "react-icons/fa";

const CustomInput = ({ type, label, required, ...rest }) => {
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (event) => {
  const inputValue = event.target.value;
  if (required && inputValue.trim() === "") {
    setError(`${label} is required`);
  } else if (type === "email" && !/\S+@\S+\.\S+/.test(inputValue)) {
    setError("Please enter a valid email address");
  } else {
    setError("");
  }

  if (rest.onChange) {
    rest.onChange(event);
  }
};


  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const getInputType = () => {
    switch (type) {
      case "password":
        return (
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder={`Enter ${label}`}
              className="border border-black rounded w-full py-2 px-3 pr-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              {...rest}
              onChange={handleInputChange}
            />
            <span
              className="absolute right-3 top-3 text-gray-400 cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
        );
      case "phone":
        return (
          <div className="relative">
            <input
              type="phone"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              placeholder={`Enter ${label}`}
              className="border border-black rounded w-full py-2 px-3 pr-10 text-gray-100 leading-tight"
              {...rest}
              onChange={handleInputChange}
            />
            <FaPhone className="absolute right-3 top-3 text-gray-400" />
          </div>
        );
      case "email":
        return (
          <div className="relative">
            <input
              type="email"
              placeholder={`Enter ${label}`}
              className="border border-black rounded w-full py-2 px-3 pr-10 text-gray-700 leading-tight"
              {...rest}
              onChange={handleInputChange}
            />
            <FaEnvelope className="absolute right-3 top-3 text-gray-400" />
          </div>
        );
      default:
        return (
          <input
            type="text"
            placeholder={`Enter ${label}`}
            className="border border-black rounded w-full py-2 px-3 pr-10 text-gray-700 leading-tight"
            {...rest}
            onChange={handleInputChange}
          />
        );
    }
  };

  return (
    <div className="mb-4">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor={rest.id}
      >
        {label}
      </label>
      {getInputType()}
      {error && <p className="text-red-500 text-sm bold">{error}</p>}
    </div>
  );
};

export default CustomInput;

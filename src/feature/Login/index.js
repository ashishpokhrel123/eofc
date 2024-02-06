import React, { useState } from "react";
import gov from "../../assets/images/gov2.png";
import CustomInput from "../../component/ui/Input";
import CustomButton from "../../component/ui/Button";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let formValid = true;
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      formValid = false;
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
      formValid = false;
    }

    setErrors(newErrors);

    if (formValid) {
      // If form is valid, you can proceed with form submission
      console.log("Form is valid, submitting...");
      // You can submit the form here
    } else {
      console.log("Form is invalid, please fix the errors");
    }
  };

  return (
    <div className="flex justify-center mt-10">
      <div className="flex flex-col items-center max-w-lg mx-auto px-4">
        <div className="mb-2">
          <img
            src={gov}
            alt="government"
            className="object-contain"
            style={{ height: "80px", width: "150px" }}
          />
        </div>
        <span className="mt-2 text-lg font-bold">
          भूमि व्यवस्था, सहकारी तथा गरिबी निवारण मन्त्रालय
        </span>
        <span className="text-sm">सहकारी बिभाग</span>
        <span className="text-sm">नयाँ बानेश्वर, काठमाडौँ</span>
        <span className="text-sm">नेपाल</span>

        <h2 className="font-bold mt-4 mb-2 text-lg">Login to your account</h2>
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="flex flex-col mb-4">
            <CustomInput
              type="email"
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
            <CustomInput
              type="password"
              label="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            {errors.password && <p className="text-red-500 text-xs italic">{errors.password}</p>}
            <CustomButton type="submit" label="Sign in" />
          </div>

          <div className="flex flex-wrap gap-2">
            <CustomButton type="button" label="प्रतिक्रिया फाराम" />
            <CustomButton type="button" label="Request Username and Password" />
            <CustomButton type="button" label="Copomis Enrollment" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;

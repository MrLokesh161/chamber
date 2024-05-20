import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import loginImage from "../assets/login2.png";
import logoImage from "../assets/rect.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import BASE_URL from "./Appconfig";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    username: "",
    password: "",
    general: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const updateProperty = (propertyName, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [propertyName]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [propertyName]: "",
      general: "",
    }));
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };

    if (!formData.username.trim()) {
      newErrors.username = "Username is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
      isValid = false;
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
      isValid = false;
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async () => {
    try {
      if (!validateForm()) return;

      setIsLoading(true); // Start loading

      const response = await axios.post(`${BASE_URL}/api/signup/`, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.data.message === "User created successfully") {
        navigate("/");
      }
    } catch (error) {
      if (error.response && error.response.data) {
        const errorData = error.response.data;
        if (errorData.email) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            email: errorData.email,
          }));
        }
        if (errorData.message) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            general: errorData.message,
          }));
        }
      } else {
        console.error("An unexpected error occurred:", error);
      }
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  return (
    <div className="flex h-screen">
      <div className="hidden lg:flex flex-1 bg-gradient-to-r from-purple-500 to-indigo-600">
        <div className="w-full h-full flex flex-col justify-center items-center text-white px-8">
          <h1 className="text-4xl font-bold mb-4">Join Us!</h1>
          <p className="text-lg mb-6 text-center">
            Sign up to become a member of the Indian Chamber of Commerce and Industry.
          </p>
          <img src={logoImage} className="w-64 mb-6" alt="Logo" />
          <button
            className="bg-blue-500 text-white py-3 px-8 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue text-lg font-bold"
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      </div>
      <div className="w-full lg:w-1/2 bg-cover bg-center flex justify-center items-center">
        <div className="w-full max-w-md px-8 py-12 bg-white rounded-lg shadow-xl">
          <div className="text-center">
            <FontAwesomeIcon icon={faUser} className="text-indigo-600 text-6xl mb-4" />
            <h2 className="text-2xl font-bold mb-6 text-indigo-600">Sign Up</h2>
          </div>
          <div>
            <div className="mb-4">
              <label htmlFor="username" className="block text-gray-700 font-bold mb-2">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                className={`mt-1 p-3 w-full border rounded-md focus:outline-none focus:border-indigo-500 ${errors.username ? "border-red-500" : "border-gray-300"}`}
                placeholder="Enter your username"
                onChange={(e) => updateProperty("username", e.target.value)}
              />
              {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className={`mt-1 p-3 w-full border rounded-md focus:outline-none focus:border-indigo-500 ${errors.email ? "border-red-500" : "border-gray-300"}`}
                placeholder="Enter your email"
                onChange={(e) => updateProperty("email", e.target.value)}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                className={`mt-1 p-3 w-full border rounded-md focus:outline-none focus:border-indigo-500 ${errors.password ? "border-red-500" : "border-gray-300"}`}
                placeholder="Enter your password"
                onChange={(e) => updateProperty("password", e.target.value)}
              />
              {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
            </div>
            {errors.general && <p className="text-red-500 text-sm">{errors.general}</p>}
            <button
              type="button"
              className={`w-full py-3 mt-4 bg-indigo-600 text-white font-bold rounded-md focus:outline-none focus:bg-indigo-700 ${isLoading ? "opacity-50 cursor-not-allowed" : "hover:bg-indigo-700"}`}
              onClick={handleSubmit}
              disabled={isLoading}
            >
              {isLoading ? "Signing up..." : "Sign Up"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;

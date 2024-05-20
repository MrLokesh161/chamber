import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import loginImage from "../assets/login2.png";
import logoImage from "../assets/rect.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useBaseUrl } from "../context";

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const { baseUrl } = useBaseUrl();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState(false); // State for loading animation

  const updateProperty = (propertyName, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [propertyName]: value,
    }));
  };

  const handleSignup = () => {
    navigate("/Signup");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!formData.username.trim()) {
        throw new Error("Username is required");
      } else if (!formData.password.trim()) {
        throw new Error("Password is required");
      }

      setLoading(true); // Set loading state to true

      const formDataToSend = new FormData();

      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });

      const response = await axios.post(
        `${baseUrl}/obtainAuthToken/`,
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (response.data["login"] === "Success") {
        console.log(response.data["login"]);
        console.log(response.data);
        localStorage.setItem("token", response.data.token);
        navigate("/");
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setError("Check your username and password");
      } else if (error.response && error.response.status === 401) {
        setError("Invalid credentials");
      } else if (error.response && error.response.status === 403) {
        setError("Invalid credentials");
      } else if (error.response && error.response.status === 500) {
        setError(
          "There is a problem with the server. Please try again later."
        );
      } else {
        setError(error.message);
      }
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen">
      <div className="hidden lg:flex flex-1 bg-gradient-to-r from-purple-500 to-indigo-600">
        <div className="w-full h-full flex flex-col justify-center items-center text-white px-8">
          <h1 className="text-4xl font-bold mb-4">Welcome Back!</h1>
          <p className="text-lg mb-6 text-center">
            This website is for membership applications for the Indian Chamber
            of Commerce and Industry.
          </p>
          <img src={logoImage} className="w-64 mb-6" alt="Logo" />
          <button
            className="bg-blue-500 text-white py-3 px-8 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue text-lg font-bold"
            onClick={handleSignup}
          >
            Sign Up
          </button>
        </div>
      </div>
      <div className="w-full lg:w-1/2 bg-cover bg-center flex justify-center items-center">
        <div className="w-full max-w-md px-8 py-12 bg-white rounded-lg shadow-xl">
          <div className="text-center">
            <FontAwesomeIcon
              icon={faUsers}
              className="text-indigo-600 text-5xl mb-4"
            />
            <h2 className="text-2xl font-bold mb-4 text-indigo-600">Sign In</h2>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-lg font-semibold text-gray-600"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="mt-1 p-3 w-full border rounded-md bg-gray-100 focus:outline-none focus:border-indigo-500"
                placeholder="Enter your username"
                onChange={(e) => updateProperty("username", e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-lg font-semibold text-gray-600"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="mt-1 p-3 w-full border rounded-md bg-gray-100 focus:outline-none focus:border-indigo-500"
                placeholder="Enter your password"
                onChange={(e) => updateProperty("password", e.target.value)}
              />
            </div>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <button
              type="submit"
              className="bg-indigo-600 text-white py-3 px-4 w-full rounded-md hover:bg-indigo-700 focus:outline-none focus:shadow-outline-indigo"
              disabled={loading}
            >
              {loading ? "Loading..." : "Login"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import signupImage from "../assets/login2.png";
import { useState } from 'react';
import logoImage from "../assets/rect.png";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Signup = () => {

  const navigate = useNavigate();

  const updateProperty = (propertyName, value) => {
    setFormData(prevData => ({
      ...prevData,
      [propertyName]: value,
    }));
  };
  
  const handlelogin = () => {
    navigate("/login")
  };

  const [formData, setFormData] = useState({
    username: "",
    emailid: "",
    password: ""
  });

  const handleSubmit = async () => {
    try {
      const formDataToSend = new FormData();
  
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });
    
      const response = await axios.post(
        'http://192.168.68.83:8000/api/signup/', // Adjust the signup API endpoint
        formData,
        {
          headers:{ 
            'Content-Type': 'multipart/form-data',
          }
        }
      );
  
      if (response.data["message"] === "User created successfully") {
        console.log(response.data["message"]);
        navigate('/');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex h-screen bg-blue-600">
      <div className="w-[50%] pt-[13%] pl-[15%] text-white font-extrabold text-[300%]">
        <h1 className="pl-[15%]">Sign Up!</h1>
        <p className="text-xl mt-4 w-[80%] pt-5">
          Join the Indian Chamber of Commerce and Industry.
        </p>
        <img
          loading="lazy"
          src={logoImage}
          className="w-[50%] pl-[10%] pt-6"
          alt="home"
        />
        <div className="pl-[15%]">
          <button
            type="submit"
            className="bg-blue-500 text-white rounded-full py-2 px-16 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800 text-lg font-bold"
            onClick={handlelogin}
          >
            Login
          </button>
        </div>
      </div>

      <div
        className="w-[50%] pt-[05%]"
        style={{ backgroundImage: `url(${signupImage})`, height: '100vh', width: '50%' }}
      >
        <div className="max-w-md mx-auto">
          <div className="pl-[40%]">
            <FontAwesomeIcon icon={faUsers} className="text-indigo-600 text-6xl pb-[10%]" />
            <h2 className="text-2xl font-bold mb-6 text-indigo-600 pb-[5%]">SIGN UP</h2>
          </div>

          <div className="mb-4">
            <label htmlFor="username" className="block text-lg font-bold text-indigo-600">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="mt-1 p-2 w-full border rounded-xl bg-indigo-300 text-indigo-600 placeholder-indigo-600"
              placeholder="Enter your username"
              onChange={(e) => updateProperty("username", e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-bold text-indigo-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 p-2 w-full border rounded-xl bg-indigo-300 text-indigo-600 placeholder-indigo-600"
              placeholder="Enter your email"
              onChange={(e) => updateProperty("email", e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-lg font-bold text-indigo-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 p-2 w-full border rounded-xl bg-indigo-300 text-indigo-600 placeholder-indigo-600"
              placeholder="Enter your password"
              onChange={(e) => updateProperty("password", e.target.value)}
            />
          </div>

          <div className="pl-[30%] pt-[4%]">
            <button
              type="submit"
              className="bg-blue-500 text-white px-[20%] py-[3%] rounded-3xl hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
              onClick={handleSubmit}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;

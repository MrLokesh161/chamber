import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import loginImage from "../assets/login2.png";
import { useState } from 'react';
import logoImage from "../assets/rect.png";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const navigate = useNavigate();

  const updateProperty = (propertyName, value) => {
    setFormData(prevData => ({
      ...prevData,
      [propertyName]: value,
    }));
  };

  const [formData, setFormData] = useState({
    cdemail: "",
    password:""
  });

  const handleSubmit = async () => {
    try {
      const formDataToSend = new FormData();
  
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });
    
      const response = await axios.post(
        'http://192.168.68.83:8000/api/login/',
        formData,
        {
          headers:{ 
            'Content-Type': 'multipart/form-data',
          }
        }
      );
  
      if (response.data["login"] === "Success") {
        console.log(response.data["login"]);
        navigate('/');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex h-screen bg-indigo-600">
      <div className="w-[50%] pt-[13%] pl-[15%] text-white font-extrabold text-[300%]">
        <h1 className="pl-[10%]">Welcome Back!</h1>
        <p className="text-xl mt-4 w-[80%]">
          This website is for membership applications for the Indian Chamber of Commerce and Industry.
        </p>
        <img
          loading="lazy"
          src={logoImage}
          className="w-[50%] pl-[10%] pt-6"
          alt="home"
        />
      </div>

      <div
        className="w-[50%] pt-[10%]"
        style={{ backgroundImage: `url(${loginImage})`, height: '100vh', width: '50%' }}
      >
        <div className="max-w-md mx-auto">
          <div className="pl-[40%]">
            <FontAwesomeIcon icon={faUsers} className="text-indigo-600 text-6xl pb-[10%]" />
            <h2 className="text-2xl font-bold mb-6 text-indigo-600 pb-[5%]">SIGNIN</h2>
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
              onChange={(e) => updateProperty("cdemail", e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="username" className="block text-lg font-bold text-indigo-600">
              Password
            </label>
            <input
              type="Password"
              id="Password"
              name="Password"
              className="mt-1 p-2 w-full border rounded-xl bg-indigo-300 text-indigo-600 placeholder-indigo-600"
              placeholder="Enter your username"
              onChange={(e) => updateProperty("cdemail", e.target.value)}
            />
          </div>

          <div className="pl-[30%] pt-[4%]">
            <button
              type="submit"
              className="bg-blue-500 text-white px-[20%] py-[3%] rounded-3xl hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
              onClick={handleSubmit}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;


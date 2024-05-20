import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import userImage from "../assets/user.png";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const [currentUser, setCurrentUser] = useState({
    form1_data: {}, // Initialize with an empty object
  });
  const [isLoading, setIsLoading] = useState(false);
  const Navigate = useNavigate();

  useEffect(() => {
    const fetchCurrentUser = async () => {
      setIsLoading(true);
      try {
        const accessToken = localStorage.getItem("token");
        const response = await axios.get("http://127.0.0.1:8000/api/user/", {
          headers: {
            Authorization: `Token ${accessToken}`,
          },
        });
        if (!response.data) {
          throw new Error("Failed to fetch user data");
        }
        setCurrentUser(response.data.find(user => user.token === accessToken) || {});
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCurrentUser();
  }, []);

  const handlePayment = () => {
    // Add logic to handle payment
    console.log("Redirecting to payment page...");
    Navigate("/payment");
    // Example: window.location.replace("/payment");
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const isPaymentEnabled = currentUser.form1_data && currentUser.form1_data.form_status === "waiting for payment";
  
  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-5">
        <div key={currentUser.id} className="border p-4 mb-4">
          <div className="flex items-center mb-2">
            <img
              src={userImage}
              alt="User"
              className="rounded-full w-12 h-12 mr-4"
            />
            <div>
              <h2 className="text-lg font-semibold">{currentUser.username}</h2>
              <p className="text-gray-600">{currentUser.email}</p>
            </div>
          </div>
          <div className="border-t pt-2">
            <h3 className="text-lg font-semibold mb-2">Form Data</h3>
            <ul className="divide-y divide-gray-300">
              {Object.entries(currentUser.form1_data || {}).map(([key, value]) => (
                <li key={key} className="py-1">
                  <span className="font-semibold">{key}:</span> {value}
                </li>
              ))}
            </ul>
            <h3 className="text-lg font-semibold mb-2">Payment Transaction Data</h3>
            <ul className="divide-y divide-gray-300">
              {Object.entries(currentUser.payment_transaction_data || {}).map(([key, value]) => (
                <li key={key} className="py-1">
                  <span className="font-semibold">{key}:</span> {value}
                </li>
              ))}
            </ul>
          </div>
        </div>
        {isPaymentEnabled && (
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
            onClick={handlePayment}
          >
            Proceed to Payment
          </button>
        )}
      </div>
      <div className="container mx-auto mt-5"></div>
    </div>
  );
};

export default UserProfile;

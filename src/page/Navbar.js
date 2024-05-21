import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import logo from "../assets/rect.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [userType, setUserType] = useState("Member");
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [showMembershipDropdown, setShowMembershipDropdown] = useState(false);
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const toggleProfileDropdown = () => {
    setShowProfileDropdown(!showProfileDropdown);
  };

  const toggleMembershipDropdown = () => {
    setShowMembershipDropdown(!showMembershipDropdown);
  };

  const handleTableClick = () => {
    navigate("/admintable");
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
    navigate("/");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setUserType("Member");
    } else {
      setUserType("notyetlogin");
    }

    fetch("https://chamber.lokeshdev.co/api/user/", {
      method: "GET",
      headers: {
        Authorization: `Token ${token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        if (data && Array.isArray(data)) {
          const currentUser = data.find((user) => user.token === token);
          if (currentUser && currentUser.username) {
            setUsername(currentUser.username);
            console.log(currentUser.username);

            if (currentUser.username.includes("AdminAO")) {
              setUserType("AdminAO");
            } else if (currentUser.username.includes("AdminCEO")) {
              setUserType("AdminCEO");
            } else if (currentUser.username.includes("AdminMC")) {
              setUserType("AdminMC");
            } else if (currentUser.username.includes("AdminOB")) {
              setUserType("AdminOB");
            } else if (currentUser.username.includes("AdminGC")) {
              setUserType("AdminGC");
            }
          } else {
            console.error("Username data is missing");
          }
        } else {
          console.error("Invalid data format returned from the server");
        }
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  const handleAdminPanelClick = () => {
    switch (userType) {
      case "AdminAO":
        navigate("/adminconf");
        break;
      case "AdminCEO":
        navigate("/adminconfCEO");
        break;
      case "AdminMC":
        navigate("/adminconfMC");
        break;
      case "AdminOB":
        navigate("/adminconfOB");
        break;
      case "AdminGC":
        navigate("/adminconfGC");
        break;
      default:
        break;
    }
  };

  return (
    <nav className="bg-white p-4 py-6 shadow-md">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <img src={logo} alt="Chamber" className="h-[4%] w-[15%]" />
          <ul className="flex space-x-4">
            {userType === "Member" && (
              <>
                <li>
                  <Link
                    to="/"
                    className="text-gray-800 font-semibold font-sans transition duration-300 no-underline relative mr-4 hover:text-blue-900"
                  >
                    HOME
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-transparent transition-all duration-300"></span>
                  </Link>
                </li>
                <li className="relative">
                  <button
                    onClick={toggleMembershipDropdown}
                    className="text-gray-800 font-semibold font-sans transition duration-300 no-underline mr-4 relative hover:text-blue-900"
                  >
                    MEMBERSHIP REGISTRATION
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-transparent transition-all duration-300"></span>
                  </button>
                  {showMembershipDropdown && (
                    <ul className="absolute left-0 w-48 bg-white border border-gray-300 rounded shadow-lg">
                      <li>
                        <Link
                          to="/membership"
                          className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                        >
                          New Member
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/existing"
                          className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                        >
                          Existing Member
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
                <div className="relative">
                  <button
                    onClick={toggleProfileDropdown}
                    className="flex items-center focus:outline-none"
                  >
                    <FontAwesomeIcon
                      icon={faUser}
                      className="text-gray-800 text-lg mr-2"
                    />
                    <svg
                      className={`w-3 h-3 ml-1 text-gray-800 ${
                        showProfileDropdown ? "transform rotate-180" : ""
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {showProfileDropdown && (
                    <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                      <ul>
                        <li>
                          <Link
                            to="/user"
                            className="block py-2 text-gray-800 font-semibold hover:bg-gray-100 no-underline font-sans transition duration-300 relative hover:text-blue-900"
                          >
                            PROFILE
                          </Link>
                        </li>
                        <li>
                          <button
                            onClick={handleLogout}
                            className="block w-full text-left py-2 text-gray-800 font-semibold hover:bg-gray-100 no-underline font-sans transition duration-300 relative hover:text-blue-900"
                          >
                            LOGOUT
                          </button>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </>
            )}
            {userType.includes("Admin") && (
              <>
                <li>
                  <Link
                    to="/"
                    className="text-gray-800 font-semibold font-sans transition duration-300 no-underline relative hover:text-blue-900"
                  >
                    HOME
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-transparent transition-all duration-300"></span>
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handleAdminPanelClick}
                    className="text-gray-800 font-semibold transition duration-300 no-underline relative hover:text-blue-900"
                  >
                    ADMIN PANEL
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-transparent transition-all duration-300"></span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={handleTableClick}
                    className="text-gray-800 font-semibold transition duration-300 no-underline relative hover:text-blue-900"
                  >
                    ADMIN TABLE
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-transparent transition-all duration-300"></span>
                  </button>
                </li>
                <div className="relative">
                  <button
                    onClick={toggleProfileDropdown}
                    className="flex items-center focus:outline-none"
                  >
                    <FontAwesomeIcon
                      icon={faUser}
                      className="text-gray-800 text-lg mr-2"
                    />
                    <svg
                      className={`w-3 h-3 ml-1 text-gray-800 ${
                        showProfileDropdown ? "transform rotate-180" : ""
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {showProfileDropdown && (
                    <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                      <ul>
                        <li>
                          <Link
                            to="/user"
                            className="block px-4 py-2 text-gray-800 font-semibold hover:bg-gray-100 no-underline font-sans transition duration-300 relative hover:text-blue-900"
                          >
                            PROFILE
                            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-transparent transition-all duration-300"></span>
                          </Link>
                        </li>
                        <li>
                          <button
                            onClick={handleLogout}
                            className="block w-full text-left px-4 py-2 text-gray-800 font-semibold hover:bg-gray-100 no-underline font-sans transition duration-300 relative hover:text-blue-900"
                          >
                            LOGOUT
                            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-transparent transition-all duration-300"></span>
                          </button>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </>
            )}
            {userType.includes("notyetlogin") && (
              <>
                <li>
                  <Link
                    to="/"
                    className="text-gray-800 font-semibold font-sans transition duration-300 no-underline relative hover:text-blue-900"
                  >
                    HOME
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-transparent transition-all duration-300"></span>
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handleLogin}
                    className="text-gray-800 font-semibold transition duration-300 no-underline relative hover:text-blue-900"
                  >
                    LOGIN
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-transparent transition-all duration-300"></span>
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

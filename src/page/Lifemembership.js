import React, { useState } from "react";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import BASE_URL from "./Appconfig";

const MembershipForm2 = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    iande: null,
    incometaxtpan: null,
    FactoryRegistrationCertificate: null,
    MemorandumArticleofAssociation: null,
    GSTINRegistrationCopy: null,
    IECodeCertificate: null,
    ProfessionalCertificate: null,
    CopyofLandDocument: null,
    LandHolding: null,
    passportsizephoto: null,
    DirectorsPartners: null,
  });

  const handleFileChange = (propertyName, file) => {
    setFormData((prevData) => ({
      ...prevData,
      [propertyName]: file,
    }));
  };

  const accessToken = localStorage.getItem("token");

  const handleSubmit = async () => {
    const data = new FormData();
    for (const key in formData) {
      if (formData[key]) {
        data.append(key, formData[key]);
      }
    }

    try {
      const response = await axios.post(`${BASE_URL}/api/form2/`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Token ${accessToken}`,
        },
      });

      if (response.data["Form2"] === "Success") {
        navigate("/user");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto my-8">
        <h1 className="text-3xl font-bold mb-4">Membership Application</h1>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {Object.keys(formData).map((key) => (
            <div className="flex flex-col" key={key}>
              <label className="block text-xl font-bold mb-1">
                {key.replace(/([A-Z])/g, " $1")}
              </label>
              <div className="flex items-center py-7">
                <label className="cursor-pointer ">
                  <span className="mr-2 text-gray-700">
                    {formData[key] ? formData[key].name : "Choose a file"}
                  </span>
                  <FontAwesomeIcon icon={faUpload} className="text-gray-500" />
                  <input
                    type="file"
                    onChange={(e) => handleFileChange(key, e.target.files[0])}
                    className="hidden"
                  />
                </label>
                {formData[key] && (
                  <p className="text-sm text-gray-500">
                    {`File Selected: ${formData[key].name}`}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
        <button
          className="bg-blue-500 text-white px-4 py-3 rounded-3xl hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800 mt-4"
          onClick={handleSubmit}
        >
          Submit & Proceed Next
        </button>
      </div>
      <footer className="bg-gray-800 text-white text-center py-4">
        <p>&copy; 2024 Metaverse Association. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default MembershipForm2;

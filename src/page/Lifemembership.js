import React, { useState } from "react";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import BASE_URL from "./Appconfig"


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
    try {
      const response = await axios.post(`${BASE_URL}api/form2/`, formData, {
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
        {/* Form elements */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {/* Income and Expenditure statement */}
          <div className="flex flex-col">
            <label className="block text-xl font-bold mb-1">
              Income and Expenditure statement and your Assets and Liabilities Statement for the last three financial years
            </label>
            <div className="flex items-center py-7">
              <label>
                <span className="mr-2 text-gray-700">{formData.iande ? formData.iande.name : "Choose a file"}</span>
                <FontAwesomeIcon icon={faUpload} className="text-gray-500" />
                <input
                  type="file"
                  onChange={(e) => handleFileChange("iande", e.target.files[0])}
                  className="hidden "
                />
              </label>
              {formData.iande && <p className="text-sm text-gray-500">{`File Selected: ${formData.iande.name}`}</p>}
            </div>
          </div>
          {/* Income Tax PAN */}
          <div className="flex flex-col">
            <label className="block text-xl font-bold mb-1">Income Tax PAN</label>
            <div className="flex items-center py-7">
              <label>
                <span className="mr-2 text-gray-700">{formData.incometaxtpan ? formData.incometaxtpan.name : "Choose a file"}</span>
                <FontAwesomeIcon icon={faUpload} className="text-gray-500" />
                <input
                  type="file"
                  onChange={(e) => handleFileChange("incometaxtpan", e.target.files[0])}
                  className="hidden"
                />
              </label>
              {formData.incometaxtpan && <p className="text-sm text-gray-500">{`File Selected: ${formData.incometaxtpan.name}`}</p>}
            </div>
          </div>
          {/* Factory Registration Certificate */}
          <div className="flex flex-col">
            <label className="block text-xl font-bold mb-1">Factory Registration Certificate</label>
            <div className="flex items-center py-7">
              <label>
                <span className="mr-2 text-gray-700">{formData.FactoryRegistrationCertificate ? formData.FactoryRegistrationCertificate.name : "Choose a file"}</span>
                <FontAwesomeIcon icon={faUpload} className="text-gray-500" />
                <input
                  type="file"
                  onChange={(e) => handleFileChange("FactoryRegistrationCertificate", e.target.files[0])}
                  className="hidden"
                />
              </label>
              {formData.FactoryRegistrationCertificate && <p className="text-sm text-gray-500">{`File Selected: ${formData.FactoryRegistrationCertificate.name}`}</p>}
            </div>
          </div>
          {/* Memorandum & Article of Association */}
          <div className="flex flex-col">
            <label className="block text-xl font-bold mb-1">Memorandum & Article of Association</label>
            <div className="flex items-center py-7">
              <label>
                <span className="mr-2 text-gray-700">{formData.MemorandumArticleofAssociation ? formData.MemorandumArticleofAssociation.name : "Choose a file"}</span>
                <FontAwesomeIcon icon={faUpload} className="text-gray-500" />
                <input
                  type="file"
                  onChange={(e) => handleFileChange("MemorandumArticleofAssociation", e.target.files[0])}
                  className="hidden"
                />
              </label>
              {formData.MemorandumArticleofAssociation && <p className="text-sm text-gray-500">{`File Selected: ${formData.MemorandumArticleofAssociation.name}`}</p>}
            </div>
          </div>
          {/* GSTIN Registration Copy */}
          <div className="flex flex-col">
            <label className="block text-xl font-bold mb-1">GSTIN Registration Copy</label>
            <div className="flex items-center py-7">
              <label>
                <span className="mr-2 text-gray-700">{formData.GSTINRegistrationCopy ? formData.GSTINRegistrationCopy.name : "Choose a file"}</span>
                <FontAwesomeIcon icon={faUpload} className="text-gray-500" />
                <input
                  type="file"
                  onChange={(e) => handleFileChange("GSTINRegistrationCopy", e.target.files[0])}
                  className="hidden"
                />
              </label>
              {formData.GSTINRegistrationCopy && <p className="text-sm text-gray-500">{`File Selected: ${formData.GSTINRegistrationCopy.name}`}</p>}
            </div>
          </div>
          {/* IE Code Certificate */}
          <div className="flex flex-col">
            <label className="block text-xl font-bold mb-1">IE Code Certificate</label>
            <div className="flex items-center py-7">
              <label>
                <span className="mr-2 text-gray-700">{formData.IECodeCertificate ? formData.IECodeCertificate.name : "Choose a file"}</span>
                <FontAwesomeIcon icon={faUpload} className="text-gray-500" />
                <input
                  type="file"
                  onChange={(e) => handleFileChange("IECodeCertificate", e.target.files[0])}
                  className="hidden"
                />
              </label>
              {formData.IECodeCertificate && <p className="text-sm text-gray-500">{`File Selected: ${formData.IECodeCertificate.name}`}</p>}
            </div>
          </div>
          {/* Professional Certificate */}
          <div className="flex flex-col">
            <label className="block text-xl font-bold mb-1">Professional Certificate</label>
            <div className="flex items-center py-7">
              <label>
                <span className="mr-2 text-gray-700">{formData.ProfessionalCertificate ? formData.ProfessionalCertificate.name : "Choose a file"}</span>
                <FontAwesomeIcon icon={faUpload} className="text-gray-500" />
                <input
                  type="file"
                  onChange={(e) => handleFileChange("ProfessionalCertificate", e.target.files[0])}
                  className="hidden"
                />
              </label>
              {formData.ProfessionalCertificate && <p className="text-sm text-gray-500">{`File Selected: ${formData.ProfessionalCertificate.name}`}</p>}
            </div>
          </div>
          {/* Copy of Land Document */}
          <div className="flex flex-col">
            <label className="block text-xl font-bold mb-1">Copy of Land Document</label>
            <div className="flex items-center py-7">
              <label>
                <span className="mr-2 text-gray-700">{formData.CopyofLandDocument ? formData.CopyofLandDocument.name : "Choose a file"}</span>
                <FontAwesomeIcon icon={faUpload} className="text-gray-500" />
                <input
                  type="file"
                  onChange={(e) => handleFileChange("CopyofLandDocument", e.target.files[0])}
                  className="hidden"
                />
              </label>
              {formData.CopyofLandDocument && <p className="text-sm text-gray-500">{`File Selected: ${formData.CopyofLandDocument.name}`}</p>}
            </div>
          </div>
          {/* Land Holding */}
          <div className="flex flex-col">
            <label className="block text-xl font-bold mb-1">Land Holding</label>
            <div className="flex items-center py-7">
              <label>
                <span className="mr-2 text-gray-700">{formData.LandHolding ? formData.LandHolding.name : "Choose a file"}</span>
                <FontAwesomeIcon icon={faUpload} className="text-gray-500" />
                <input
                  type="file"
                  onChange={(e) => handleFileChange("LandHolding", e.target.files[0])}
                  className="hidden"
                />
              </label>
              {formData.LandHolding && <p className="text-sm text-gray-500">{`File Selected: ${formData.LandHolding.name}`}</p>}
            </div>
          </div>
          {/* Passport Size Photo */}
          <div className="flex flex-col">
            <label className="block text-xl font-bold mb-1">Passport Size Photo</label>
            <div className="flex items-center py-7">
              <label>
                <span className="mr-2 text-gray-700">{formData.passportsizephoto ? formData.passportsizephoto.name : "Choose a file"}</span>
                <FontAwesomeIcon icon={faUpload} className="text-gray-500" />
                <input
                  type="file"
                  onChange={(e) => handleFileChange("passportsizephoto", e.target.files[0])}
                  className="hidden"
                />
              </label>
              {formData.passportsizephoto && <p className="text-sm text-gray-500">{`File Selected: ${formData.passportsizephoto.name}`}</p>}
            </div>
          </div>
          {/* Directors & Partners */}
          <div className="flex flex-col">
            <label className="block text-xl font-bold mb-1">Directors & Partners</label>
            <div className="flex items-center py-7">
              <label>
                <span className="mr-2 text-gray-700">{formData.DirectorsPartners ? formData.DirectorsPartners.name : "Choose a file"}</span>
                <FontAwesomeIcon icon={faUpload} className="text-gray-500" />
                <input
                  type="file"
                  onChange={(e) => handleFileChange("DirectorsPartners", e.target.files[0])}
                  className="hidden"
                />
              </label>
              {formData.DirectorsPartners && <p className="text-sm text-gray-500">{`File Selected: ${formData.DirectorsPartners.name}`}</p>}
            </div>
          </div>
          {/* End of form element block */}
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

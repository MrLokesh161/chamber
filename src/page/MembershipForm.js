import React, { useState } from "react";
import Navbar from "./Navbar";
import pdfUrl from "../assets/Chamber-Membership-Form.pdf";
import Footer from "./Footer";
import axios from "axios";
import BASE_URL from "./Appconfig";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [selectedConstitution, setSelectedConstitution] = useState([]);
  const [individualName, setIndividualName] = useState("");
  const [moaoa, setMOAOA] = useState([]);
  const [ap, setAP] = useState([]);
  const [esign, setEsign] = useState(null);
  const [seal, setSeal] = useState(null);

  const [formData, setFormData] = useState({
    directors: [],
    Nameofapplicant: "",
    constitution: null,
    individual_name: "",
    is_individual: false,
    Businessactivity: "",
    regoffadd: "",
    acoffice: "",
    acwork: "",
    cdlan: "",
    cdphone: "",
    cdemail: "",
    cdweb: "",
    aadhar: null,
    pancardno: null,
    GSTNo: null,
    CompanyFirmRegNo: null,
    SocietyAssociationRegNo: null,
    paname: "",
    papan: "",
    paphone: "",
    padesignation: "",
    paaadhaar: "",
    pamail_id: "",
    indmain_category: "",
    indsub_category: "",
    cmdomestic: "",
    cmboth: "",
    cmpercentage_of_imports: "",
    cmglobal_market: "",
    cmpercentage_of_exports: "",
    country_name_foreign_collaboration: "",
    collaborator_name_foreign_collaboration: "",
    annual_turnover_year1: null,
    annual_turnover_year2: null,
    annual_turnover_year3: null,
    classindustry: null,
    direct_office_employees: null,
    indirect_contractual_employees: null,
    works_employees: null,
    outsourced_employees: null,
    esic: "",
    epf: "",
    branches_outside_india: "",
    is_member_of_association: null,
    association_name: "",
    is_office_bearer: null,
    association_position: "",
    reason_for_joining_chamber: "",
    e_sign: null,
    seal_image: null,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  
    // If the 'constitution' field is being updated, update the selectedConstitution state
    if (name === 'constitution') {
      setSelectedConstitution([value]);
    }
  };


  const accessToken = localStorage.getItem("token");


  

  const handleSubmit = async () => {
    try {
      const formDataToSend = new FormData();

      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });

      formDataToSend.append("e_sign", formData.e_sign);

      const accessToken = localStorage.getItem("token");

      console.log(accessToken);

      if (!accessToken) {
        throw new Error("Access token is missing");
      }

      console.log(accessToken);
      console.log(formData);

      const response = await axios.post(`${BASE_URL}/api/form1/`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `token ${accessToken}`,
        },
      });

      if (response.data["detail"] === "Success") {
        console.log(response.data["detail"]);
        console.log(formData);
        navigate("/membership2/");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleDownload = (event) => {
    event.preventDefault();
    const a = document.createElement("a");
    a.href = pdfUrl;
    a.setAttribute("download", "");
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const constitutionOptions = [
    "Individual",
    "Proprietory Firm",
    "Partnership Firm",
    "LLP",
    "Private Limited",
    "Public Limited Unlisted",
    "Public Limited Listed",
    "Trust",
    "Society",
    "Associations",
  ];

  const marketOptions = [
    "Domestic",
    "Global",
    "Both"
  ];

  const classindustriesOptions = [
    "Large", 
    "Medium", 
    "Small", 
    "Micro"
  ];

  const yesno = [
    "Yes", 
    "No"
  ];

  const yesno1 = [
    "Yes", 
    "No"
  ];

  const handleMOAOA = (value) => {
    if (moaoa.includes(value)) {
      setMOAOA([]);
      updateProperty("is_member_of_association", null);
    } else {
      setMOAOA([value]);
      updateProperty("is_member_of_association", value);
    }
  };

  const handleAP = (value) => {
    if (ap.includes(value)) {
      setAP([]);
      updateProperty("is_office_bearer", null);
    } else {
      setAP([value]);
      updateProperty("is_office_bearer", value);
    }
  };

  const handleEsign = (e) => {
    const selectedFile = e.target.files[0];
    setEsign(selectedFile);
    updateProperty("e_sign", selectedFile);
  };
  const handleSeal = (e) => {
    const selectedFile = e.target.files[0];
    setSeal(selectedFile);
    updateProperty("seal_image", selectedFile);
  };


  const handleCheckboxChange = (option) => {
    if (selectedConstitution.includes(option)) {
      setSelectedConstitution(selectedConstitution.filter((item) => item !== option));
    } else {
      setSelectedConstitution([...selectedConstitution, option]);
    }
  
    setFormData({ ...formData, constitution: option });
  
    if (option === 'Individual') {
      setIndividualName("");
    }
  };
  

  const updateProperty = (propertyName, value) => {
    if (propertyName === "individual_name") {
      setIndividualName(value);
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col">
        <div className="flex justify-center items-center px-16 py-11 w-full font-bold text-black border border-black border-solid bg-zinc-300 bg-opacity-20 max-md:px-5 max-md:max-w-full">
          <div className="flex gap-5 justify-between w-full max-w-[1351px] max-md:flex-wrap max-md:max-w-full">
            <div className="flex-auto text-4xl ">Membership Application</div>
            <div className="flex gap-5 justify-between my-auto text-sm whitespace-nowrap">
              <a
                href="/"
                className="my-auto grow italic"
                style={{ textDecoration: "none", color: "your-color" }}
              >
                home
              </a>
              <div className="my-auto py-0 text-xl">&gt;&gt;</div>
              <div className="grow italic my-auto">Membership Application</div>
            </div>
          </div>
        </div>
        <h1 className="font-bold text-2xl pl-[10%] pt-[2%]"></h1>
        <p className="pl-[15%] pt-[1%] text-lg font-semibold text-gray-800">
          <a href="#" onClick={handleDownload}>
            Click here to download the membership form
          </a>
        </p>
      </div>
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold my-4"></h1>
        <form className="max-w-8xl mx-auto ">
          <div className="grid grid-cols-3 gap-4">
            <div className="mb-4 col-span-1">
              <label className="block text-gray-700 font-bold capitalize">
                Name of Applicant
              </label>
              <input
                type="text"
                name="Nameofapplicant"
                value={formData.Nameofapplicant}
                onChange={handleChange}
                className="border border-gray-400 rounded-md p-2 w-full mt-1"
                placeholder="Name of Applicant"
              />
            </div>
            <div className="mb-4 col-span-1">
              <label className="block text-gray-700 font-bold capitalize">
                Business Activity
              </label>
              <input
                type="text"
                name="Businessactivity"
                value={formData.Businessactivity}
                onChange={handleChange}
                className="border border-gray-400 rounded-md p-2 w-full mt-1"
                placeholder="Business Activity"
              />
            </div>

            <div className="flex flex-col w-[90%] max-md:ml-0 max-md:w-full pl-[10%]">
              <div className="mb-4 col-span-1">
                <label className="block text-gray-700 font-bold capitalize">
                  Constitution
                </label>
                <div className="flex flex-col">
                  {constitutionOptions.map((option) => (
                    <div key={option} className="flex items-center mb-2">
                      <input
                        type="radio"
                        id={option}
                        name="constitution"
                        checked={
                          selectedConstitution &&
                          selectedConstitution.includes(option)
                        }
                        onChange={() => handleCheckboxChange(option)}
                        className="mr-2"
                      />
                      <label htmlFor={option}>{option}</label>
                    </div>
                  ))}
                </div>
                {selectedConstitution &&
            selectedConstitution.includes("Individual") && (
              <input
                type="text"
                placeholder="Enter the name of the Individual"
                className="border border-solid border-stone-500 px-2 py-4 rounded-xl mb-6"
                onChange={(e) =>
                  updateProperty("individual_name", e.target.value)
                }
              />
            )}
              </div>
            </div>

            <div className="mb-4 col-span-1 mt-[-60%]">
              <label className="block text-gray-700 font-bold capitalize">
                Registered Office Address
              </label>
              <input
                type="text"
                name="regoffadd"
                value={formData.regoffadd}
                onChange={handleChange}
                className="border border-gray-400 rounded-md p-2 w-full mt-1"
                placeholder="Registered Office Address"
              />
            </div>
          </div>

          <label className="block text-gray-700 font-bold capitalize pb-6">
              Address for Communication
          </label>
          <div className="grid grid-cols-3 gap-4">
          <div className="mb-4 col-span-1">
            <label className="block text-gray-700 font-bold capitalize">
              Office
            </label>
            <input
              type="text"
              name="acoffice"
              value={formData.acoffice}
              onChange={handleChange}
              className="border border-gray-400 rounded-md p-2 w-full mt-1"
              placeholder="Acquisition Office"
            />
          </div>

          <div className="mb-4 col-span-1">
            <label className="block text-gray-700 font-bold capitalize">
              Works / Factory
            </label>
            <input
              type="text"
              name="acwork"
              value={formData.acwork}
              onChange={handleChange}
              className="border border-gray-400 rounded-md p-2 w-full mt-1"
              placeholder="Acquisition Work"
            />
          </div>
          </div>


          <label className="block text-gray-700 font-bold capitalize pb-8">
              Communication Details
          </label>
          <div className="grid grid-cols-3 gap-4">
          <div className="mb-4 col-span-1">
            <label className="block text-gray-700 font-bold capitalize">
              Phone - Landline
            </label>
            <input
              type="text"
              name="cdlan"
              value={formData.cdlan}
              onChange={handleChange}
              className="border border-gray-400 rounded-md p-2 w-full mt-1"
              placeholder="CD lan"
            />
          </div>

          <div className="mb-4 col-span-1">
            <label className="block text-gray-700 font-bold capitalize">
              Phone - Mobile
            </label>
            <input
              type="text"
              name="cdphone"
              value={formData.cdphone}
              onChange={handleChange}
              className="border border-gray-400 rounded-md p-2 w-full mt-1"
              placeholder="CD Phone"
            />
          </div>

          <div className="mb-4 col-span-1">
            <label className="block text-gray-700 font-bold capitalize">
              Email
            </label>
            <input
              type="email"
              name="cdemail"
              value={formData.cdemail}
              onChange={handleChange}
              className="border border-gray-400 rounded-md p-2 w-full mt-1"
              placeholder="CD Email"
            />
          </div>

          <div className="mb-4 col-span-1">
            <label className="block text-gray-700 font-bold capitalize">
              Website
            </label>
            <input
              type="url"
              name="cdweb"
              value={formData.cdweb}
              onChange={handleChange}
              className="border border-gray-400 rounded-md p-2 w-full mt-1"
              placeholder="CD Website"
            />
          </div>
          </div>

          <label className="block text-gray-700 font-bold capitalize py-8">
            Legal Information
          </label>
          <div className="grid grid-cols-3 gap-4">
          <div className="mb-4 col-span-1">
            <label className="block text-gray-700 font-bold capitalize">
              Aadhar
            </label>
            <input
              type="text"
              name="aadhar"
              value={formData.aadhar}
              onChange={handleChange}
              className="border border-gray-400 rounded-md p-2 w-full mt-1"
              placeholder="Aadhar"
            />
          </div>

          <div className="mb-4 col-span-1">
            <label className="block text-gray-700 font-bold capitalize">
              PAN Card No
            </label>
            <input
              type="text"
              name="pancardno"
              value={formData.pancardno}
              onChange={handleChange}
              className="border border-gray-400 rounded-md p-2 w-full mt-1"
              placeholder="PAN Card No"
            />
          </div>

          <div className="mb-4 col-span-1">
            <label className="block text-gray-700 font-bold capitalize">
              GST No
            </label>
            <input
              type="text"
              name="GSTNo"
              value={formData.GSTNo}
              onChange={handleChange}
              className="border border-gray-400 rounded-md p-2 w-full mt-1"
              placeholder="GST No"
            />
          </div>

          <div className="mb-4 col-span-1">
            <label className="block text-gray-700 font-bold capitalize">
              Company/Firm Registration No
            </label>
            <input
              type="text"
              name="CompanyFirmRegNo"
              value={formData.CompanyFirmRegNo}
              onChange={handleChange}
              className="border border-gray-400 rounded-md p-2 w-full mt-1"
              placeholder="Company/Firm Registration No"
            />
          </div>

          <div className="mb-4 col-span-1">
            <label className="block text-gray-700 font-bold capitalize">
              Society/Association Registration No
            </label>
            <input
              type="text"
              name="SocietyAssociationRegNo"
              value={formData.SocietyAssociationRegNo}
              onChange={handleChange}
              className="border border-gray-400 rounded-md p-2 w-full mt-1"
              placeholder="Society/Association Registration No"
            />
          </div>
          </div>


          <label className="block text-gray-700 font-bold capitalize py-8">
             Details of the Person Authorized
          </label>
          <div className="grid grid-cols-3 gap-4">
          <div className="mb-4 col-span-1">
            <label className="block text-gray-700 font-bold capitalize">
               Name
            </label>
            <input
              type="text"
              name="paname"
              value={formData.paname}
              onChange={handleChange}
              className="border border-gray-400 rounded-md p-2 w-full mt-1"
              placeholder="PAN Name"
            />
          </div>

          <div className="mb-4 col-span-1">
            <label className="block text-gray-700 font-bold capitalize">
               PAN
            </label>
            <input
              type="text"
              name="papan"
              value={formData.papan}
              onChange={handleChange}
              className="border border-gray-400 rounded-md p-2 w-full mt-1"
              placeholder="PAN PAN"
            />
          </div>

          <div className="mb-4 col-span-1">
            <label className="block text-gray-700 font-bold capitalize">
               Phone
            </label>
            <input
              type="text"
              name="paphone"
              value={formData.paphone}
              onChange={handleChange}
              className="border border-gray-400 rounded-md p-2 w-full mt-1"
              placeholder="PA Phone"
            />
          </div>

          <div className="mb-4 col-span-1">
            <label className="block text-gray-700 font-bold capitalize">
               Designation
            </label>
            <input
              type="text"
              name="padesignation"
              value={formData.padesignation}
              onChange={handleChange}
              className="border border-gray-400 rounded-md p-2 w-full mt-1"
              placeholder="PA Designation"
            />
          </div>

          <div className="mb-4 col-span-1">
            <label className="block text-gray-700 font-bold capitalize">
               Aadhaar
            </label>
            <input
              type="text"
              name="paaadhaar"
              value={formData.paaadhaar}
              onChange={handleChange}
              className="border border-gray-400 rounded-md p-2 w-full mt-1"
              placeholder="PA Aadhaar"
            />
          </div>

          <div className="mb-4 col-span-1">
            <label className="block text-gray-700 font-bold capitalize">
               Mail ID
            </label>
            <input
              type="email"
              name="pamail_id"
              value={formData.pamail_id}
              onChange={handleChange}
              className="border border-gray-400 rounded-md p-2 w-full mt-1"
              placeholder="PA Mail ID"
            />
          </div>
          </div>


          <label className="block text-gray-700 font-bold capitalize py-8">
            Category of Industry/ Trade/ Services
          </label>
          <div className="grid grid-cols-3 gap-4">
          <div className="mb-4 col-span-1">
            <label className="block text-gray-700 font-bold capitalize">
               Main Category
            </label>
            <input
              type="text"
              name="indmain_category"
              value={formData.indmain_category}
              onChange={handleChange}
              className="border border-gray-400 rounded-md p-2 w-full mt-1"
              placeholder="Industry Main Category"
            />
          </div>

          <div className="mb-4 col-span-1">
            <label className="block text-gray-700 font-bold capitalize">
               Sub Category
            </label>
            <input
              type="text"
              name="indsub_category"
              value={formData.indsub_category}
              onChange={handleChange}
              className="border border-gray-400 rounded-md p-2 w-full mt-1"
              placeholder="Industry Sub Category"
            />
          </div>
          </div>

          <label className="block text-gray-700 font-bold capitalize py-8">
            Catering to Market
          </label>
          <div className="grid grid-cols-3 gap-4">
          <div className="mb-4 col-span-1">
            <label className="block text-gray-700 font-bold capitalize">
              CM Percentage of Imports
            </label>
            <input
              type="text"
              name="cmpercentage_of_imports"
              value={formData.cmpercentage_of_imports}
              onChange={handleChange}
              className="border border-gray-400 rounded-md p-2 w-full mt-1"
              placeholder="CM Percentage of Imports"
            />
          </div>

          <div className="mb-4 col-span-1">
            <label className="block text-gray-700 font-bold capitalize">
              CM Percentage of Exports
            </label>
            <input
              type="text"
              name="cmpercentage_of_exports"
              value={formData.cmpercentage_of_exports}
              onChange={handleChange}
              className="border border-gray-400 rounded-md p-2 w-full mt-1"
              placeholder="CM Percentage of Exports"
            />
          </div>

          <div className="mb-4 col-span-1">
            <label className="block text-gray-700 font-bold capitalize">CM Domestic/Global/Both</label>
            <div>
              {marketOptions.map((option) => (
                <div key={option} className="flex items-center mb-2">
                  <input
                    type="radio"
                    id={option}
                    name="cmdomesticglobalboth"
                    value={option}
                    checked={formData.cmdomesticglobalboth === option}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  <label htmlFor={option}>{option}</label>
                </div>
              ))}
            </div>
          </div>

          </div>

          <label className="block text-gray-700 font-bold capitalize py-8">
          Foreign Collaboration if any
          </label>
          <div className="grid grid-cols-3 gap-4">
          <div className="mb-4 col-span-1">
            <label className="block text-gray-700 font-bold capitalize">
            Name of the Country
            </label>
            <input
              type="text"
              name="country_name_foreign_collaboration"
              value={formData.country_name_foreign_collaboration}
              onChange={handleChange}
              className="border border-gray-400 rounded-md p-2 w-full mt-1"
              placeholder="Country Name for Foreign Collaboration"
            />
          </div>

          <div className="mb-4 col-span-1">
            <label className="block text-gray-700 font-bold capitalize">
              Name of the Collaborator / Joint Venture obal
            </label>
            <input
              type="text"
              name="collaborator_name_foreign_collaboration"
              value={formData.collaborator_name_foreign_collaboration}
              onChange={handleChange}
              className="border border-gray-400 rounded-md p-2 w-full mt-1"
              placeholder="Collaborator Name for Foreign Collaboration"
            />
          </div>
          </div>

          <label className="block text-gray-700 font-bold capitalize py-8">
          Annual Turnover for the last three years (Rs in Million)
          </label>
          <div className="grid grid-cols-3 gap-4">
          <div className="mb-4 col-span-1">
            <label className="block text-gray-700 font-bold capitalize">
              Annual Turnover Year 1
            </label>
            <input
              type="text"
              name="annual_turnover_year1"
              value={formData.annual_turnover_year1}
              onChange={handleChange}
              className="border border-gray-400 rounded-md p-2 w-full mt-1"
              placeholder="Annual Turnover Year 1"
            />
          </div>

          <div className="mb-4 col-span-1">
            <label className="block text-gray-700 font-bold capitalize">
              Annual Turnover Year 2
            </label>
            <input
              type="text"
              name="annual_turnover_year2"
              value={formData.annual_turnover_year2}
              onChange={handleChange}
              className="border border-gray-400 rounded-md p-2 w-full mt-1"
              placeholder="Annual Turnover Year 2"
            />
          </div>

          <div className="mb-4 col-span-1">
            <label className="block text-gray-700 font-bold capitalize">
              Annual Turnover Year 3
            </label>
            <input
              type="text"
              name="annual_turnover_year3"
              value={formData.annual_turnover_year3}
              onChange={handleChange}
              className="border border-gray-400 rounded-md p-2 w-full mt-1"
              placeholder="Annual Turnover Year 3"
            />
          </div>
          </div>

          <label className="block text-gray-700 font-bold capitalize py-8">
             No of Persons Employed
          </label>
          <div className="grid grid-cols-3 gap-4">
          <div className="mb-4 col-span-1">
            <label className="block text-gray-700 font-bold capitalize">
              Direct Office 
            </label>
            <input
              type="text"
              name="direct_office_employees"
              value={formData.direct_office_employees}
              onChange={handleChange}
              className="border border-gray-400 rounded-md p-2 w-full mt-1"
              placeholder="Direct Office Employees"
            />
          </div>

          <div className="mb-4 col-span-1">
            <label className="block text-gray-700 font-bold capitalize">
              Indirect Contractual 
            </label>
            <input
              type="text"
              name="indirect_contractual_employees"
              value={formData.indirect_contractual_employees}
              onChange={handleChange}
              className="border border-gray-400 rounded-md p-2 w-full mt-1"
              placeholder="Indirect Contractual Employees"
            />
          </div>

          <div className="mb-4 col-span-1">
            <label className="block text-gray-700 font-bold capitalize">
              Works 
            </label>
            <input
              type="text"
              name="works_employees"
              value={formData.works_employees}
              onChange={handleChange}
              className="border border-gray-400 rounded-md p-2 w-full mt-1"
              placeholder="Works Employees"
            />
          </div>

          <div className="mb-4 col-span-1">
            <label className="block text-gray-700 font-bold capitalize">
              Outsourced 
            </label>
            <input
              type="text"
              name="outsourced_employees"
              value={formData.outsourced_employees}
              onChange={handleChange}
              className="border border-gray-400 rounded-md p-2 w-full mt-1"
              placeholder="Outsourced Employees"
            />
          </div>
          </div>


          <label className="block text-gray-700 font-bold capitalize py-8">
            Welfare Obligations
          </label>
          <div className="grid grid-cols-2 gap-4">

          <div className="grid grid-cols-3 gap-4">
          <div className="mb-4 col-span-1">
            <label className="block text-gray-700 font-bold capitalize">
              ESIC
            </label>
            <input
              type="text"
              name="esic"
              value={formData.esic}
              onChange={handleChange}
              className="border border-gray-400 rounded-md p-2 w-full mt-1"
              placeholder="ESIC"
            />
          </div>

          <div className="mb-4 col-span-1">
            <label className="block text-gray-700 font-bold capitalize">
              EPF
            </label>
            <input
              type="text"
              name="epf"
              value={formData.epf}
              onChange={handleChange}
              className="border border-gray-400 rounded-md p-2 w-full mt-1"
              placeholder="EPF"
            />
          </div>
          </div>

          <div className="mb-4 col-span-1">
            <label className="block text-gray-700 font-bold capitalize pb-8">
              Class Industry
            </label>
            <div>
              {classindustriesOptions.map((option) => (
                <div key={option} className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    id={option}
                    name="classindustry"
                    value={option}
                    checked={formData.classindustry === option}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  <label htmlFor={option}>{option}</label>
                </div>
              ))}
            </div>
          </div>
          </div>

          
          <div className="grid grid-cols-3 gap-4">
  <div>
    <label className="block text-gray-700 font-bold capitalize py-8">
      Are you a member of any other Association
    </label>
    <div className="mb-4 col-span-1">
      <label className="block text-gray-700 font-bold capitalize">
        Branches Outside India
      </label>
      <div>
        {yesno.map((option) => (
          <div key={option} className="flex items-center mb-2">
            <input
              type="checkbox"
              id={option}
              name="is_member_of_association"
              value={option}
              checked={formData.is_member_of_association === option}
              onChange={handleChange}
              className="mr-2"
            />
            <label htmlFor={option}>{option}</label>
          </div>
        ))}
      </div>
    </div>
    {formData.is_member_of_association === 'No' && (
      <div className="mb-4 col-span-1">
        <label className="block text-gray-700 font-bold capitalize">
          Enter the reason
        </label>
        <input
          type="text"
          name="reason_for_office_bearer_no"
          value={formData.association_name}
          onChange={handleChange}
          className="border border-gray-400 rounded-md p-2 w-full mt-1"
          placeholder="Reason for not being an office bearer"
        />
      </div>
    )}
  </div>

  <div>
    <label className="block text-gray-700 font-bold capitalize py-8">
      Do you hold any Office Bearers position in any Association
    </label>
    <div className="mb-4 col-span-1">
      <label className="block text-gray-700 font-bold capitalize">
        If yes - mention the Association Name & position
      </label>
      <div>
        {yesno1.map((option) => (
          <div key={option} className="flex items-center mb-2">
            <input
              type="checkbox"
              id={option}
              name="is_office_bearer"
              value={option}
              checked={formData.is_office_bearer === option}
              onChange={handleChange}
              className="mr-2"
            />
            <label htmlFor={option}>{option}</label>
          </div>
        ))}
      </div>
    </div>
    {formData.is_office_bearer === 'No' && (
      <div className="mb-4 col-span-1">
        <label className="block text-gray-700 font-bold capitalize">
          Enter the reason
        </label>
        <input
          type="text"
          name="reason_for_office_bearer_no"
          value={formData.association_position}
          onChange={handleChange}
          className="border border-gray-400 rounded-md p-2 w-full mt-1"
          placeholder="Reason for not being an office bearer"
        />
      </div>
    )}
  </div>
</div>


          <div className="mb-4 col-span-1">
            <label className="block text-gray-700 font-bold capitalize mb-8">
              Reason for Joining Chamber
            </label>
            <input
              type="text"
              name="reason_for_joining_chamber"
              value={formData.reason_for_joining_chamber}
              onChange={handleChange}
              className="border border-gray-400 rounded-md p-2 w-full mt-1"
              placeholder="Reason for Joining Chamber"
            />
          </div>

          <div className="mb-4 col-span-1">
  <label className="block text-gray-700 font-bold capitalize">
    E-Sign
  </label>
  <div className="relative">
    <input
      type="file"
      name="e_sign"
      accept="image/*"
      onChange={handleEsign}
      className="hidden"
      id="e_sign_input"
    />
    <label
      htmlFor="e_sign_input"
      className="border border-gray-400 rounded-md p-2 w-full mt-1 cursor-pointer text-center"
    >
      Click here to upload E-Sign
    </label>
  </div>
  {esign && (
          <div className="flex items-center">
            <img
              src={URL.createObjectURL(esign)}
              alt="Preview"
              className="mr-4 rounded"
              style={{ maxWidth: "100px", maxHeight: "100px" }}
            />
          </div>
        )}
</div>

<div className="mb-4 col-span-1">
  <label className="block text-gray-700 font-bold capitalize">
    Seal Image
  </label>
  <div className="relative">
    <input
      type="file"
      name="seal_image"
      accept="image/*"
      onChange={handleSeal}
      className="hidden"
      id="seal_image_input"
    />
    <label
      htmlFor="seal_image_input"
      className="border border-gray-400 rounded-md p-2 w-full mt-1 cursor-pointer text-center"
    >
      Click here to upload Seal Image
    </label>
  </div>
  {seal && (
          <div className="flex items-center">
            <img
              src={URL.createObjectURL(seal)}
              alt="Preview"
              className="mr-4 rounded"
              style={{ maxWidth: "100px", maxHeight: "100px" }}
            />
          </div>
        )}
</div>



          <div className="col-span-3 text-center"></div>
        </form>
      </div>
      <div className="flex justify-center py-[6%]">
  <button
    className="bg-blue-500 text-white px-[10%] py-3 rounded-3xl hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
    onClick={handleSubmit}
  >
    Submit & Proceed Next
  </button>
</div>

      <div className="pb-10"></div>
      <Footer />
    </>
  );
}

export default Dashboard;

import * as React from "react";
import logoImage from "../assets/rect.png";
import know from "../assets/knowmore.png";
import { useState } from 'react';

function Form(props) {
  const [selectedConstitution, setSelectedConstitution] = useState([]);
  const [data, setData] = useState([]);
  const [inputValues, setInputValues] = useState({ name: '', designation: '', pan: '' });
  

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const selectedFile = e.target.files[0];
    setSelectedImage(selectedFile);
  };


  const handleCheckboxChange = (value) => {
    if (selectedConstitution.includes(value)) {
      setSelectedConstitution(selectedConstitution.filter((item) => item !== value));
    } else {
      setSelectedConstitution([value]);
    }
  };

  const handleInputChange = (e) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    setData([...data, inputValues]);
    setInputValues({ name: '', designation: '', pan: '' });
  };

  const constitutionOptions = [
    'Individual',
    'Proprietory Firm',
    'Partnership Firm',
    'LLP',
    'Private Limited',
    'Public Limited Unlisted',
    'Public Limited Listed',
    'Trust',
    'Society',
    'Associations',
  ];

  const classindustry = [
    'Large',
    'Medium',
    'Small',
    'Micro',
  ];

  const yesno = [
    'Yes',
    'No',
  ];

  return (
    <div className="flex flex-col bg-white">
      {/* Header */}
      <div className="flex gap-5 justify-between items-center self-center px-5 mt-1 w-full font-bold whitespace-nowrap max-w-[1653px] max-md:flex-wrap max-md:max-w-full">
        {/* Logo */}
        <img
          loading="lazy"
          src={logoImage}
          className="self-stretch max-w-full aspect-[2.5] w-[329px]"
          alt="logo"
        />
        {/* Navigation */}
        <div className="flex flex-row gap-8 justify-center items-center self-stretch my-auto text-sm text-black max-md:flex-wrap max-md:max-w-full">
          <a href="/" className="nav-button px-9">
            HOME
          </a>
          <a href="/membership" className="nav-button px-9">
            MEMBERSHIPS
          </a>
          <a href="#journals" className="nav-button px-9">
            JOURNALS
          </a>
          <a href="#members" className="nav-button px-9">
            MEMBERS
          </a>
        </div>
        {/* Join Now Button */}
        <div className="justify-center self-stretch px-3.5 py-3 my-auto text-xs text-white bg-violet-800 rounded-3xl">
          JOIN NOW
        </div>
      </div>

      <div className="flex flex-col">
        <div className="flex justify-center items-center px-16 py-11 w-full font-bold text-black border border-black border-solid bg-zinc-300 bg-opacity-20 max-md:px-5 max-md:max-w-full">
          <div className="flex gap-5 justify-between w-full max-w-[1351px] max-md:flex-wrap max-md:max-w-full">
            <div className="flex-auto text-4xl">Membership Application</div>
            <div className="flex gap-5 justify-between my-auto text-sm whitespace-nowrap">
              <a href="/" className="my-auto grow italic">home</a>
              <div className="my-auto py-0 text-xl">&gt;&gt;</div>
              <div className="grow italic my-auto">For Life Membership</div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-[100%] mt-[6%]">
        <div className="w-2"></div>
        <div className="flex flex-col w-[30%] max-md:ml-0 max-md:w-full pl-[10%]">
          <div className="flex items-center mb-4">
            <label className="text-base font-bold">1. Name of the Applicant</label>
            <img
              loading="lazy"
              src={know}
              alt="logo"
              className="ml-2"
            />
          </div>
          <input 
            type="text"
            placeholder="Enter the name of the applicant"  
            className="border border-solid border-stone-500 px-2 py-7 rounded-xl mb-6"
          />
          
          <div className="flex items-center mb-4">
            <label className="text-base font-bold">3. Business Activity</label>
            <img
              loading="lazy"
              src={know}
              alt="logo"
              className="ml-2"
            />
          </div>
          <input 
            type="text"
            placeholder="Enter Business Activity"  
            className="border border-solid border-stone-500 px-2 py-7 rounded-xl mb-6"
          />
          
          <div className="flex items-center mb-4">
            <label className="text-base font-bold">4. Registered Office Address</label>
            <img
              loading="lazy"
              src={know}
              alt="logo"
              className="ml-2"
            />
          </div>
          <input 
            type="text"
            placeholder="Enter Registered Office Address"  
            className="border border-solid border-stone-500 px-2 py-7 rounded-xl mb-6"
          />
        </div>
        
        <div className="flex flex-col w-[30%] max-md:ml-0 max-md:w-full pl-[10%]">
          <div className="text-base font-bold mb-4">2. Constitution</div>
          <div className="flex flex-col">
            {constitutionOptions.map((option) => (
              <div key={option} className="flex items-center mb-2">
                <input
                  type="checkbox"
                  id={option}
                  checked={selectedConstitution.includes(option)}
                  onChange={() => handleCheckboxChange(option)}
                  className="mr-2"
                />
                <label htmlFor={option}>{option}</label>
              </div>
            ))}
          </div>
          {selectedConstitution.includes('Individual') && (
            <input
              type="text"
              placeholder="Enter the name of the Individual"
              className="border border-solid border-stone-500 px-2 py-4 rounded-xl mb-6"
            />
          )}
        </div>        
        <div className="flex w-[30%] pl-[5%]">
          <div className="flex flex-col w-full bg-F4E3E3 border border-solid border-black p-4 rounded-xl">
            <div className="text-4xl mb-4">Membership Opportunities</div>
            <p className="text-justify mb-4">
              The Membership of the chamber is open to all those who are engaged in any business activity in the State of Tamil Nadu, including trade, industry, services, and agriculture and related activities. Professionals, Sole Proprietorship, LLPs, Partnerships, Associations, and Companies are eligible to be admitted as members under any one of the following categories.
            </p>
            <div className="text-xl mb-4">Membership Types</div>
            <ul className="list-disc list-inside">
              <li>For Life Membership</li>
              <li>Annual Membership</li>
              {/* ... (Other membership types) */}
            </ul>
            <div className="text-xl mt-4">Member Benefits</div>
            <ul className="list-disc list-inside">
              <li>Latest notifications of State & Central Governments.</li>
              <li>Trade delegations and foreign delegations related information.</li>
              {/* ... (Other member benefits) */}
            </ul>
          </div>
        </div>
      </div>


      <label className="text-base font-bold pl-[10%]">5. Address for Communication</label>
      <div className="flex w-[100%] py-[2%]">      
        <div className="flex flex-col w-[30%] max-md:ml-0 max-md:w-full pl-[10%]">
          <div className="flex items-center mb-4">
            <label className="text-base font-bold">Office</label>
          </div>
          <input 
            type="text"
            placeholder="Enter the name of the applicant"  
            className="border border-solid border-stone-500 px-2 py-7 rounded-xl mb-6"
          />
                    
        </div>
        
        <div className="flex flex-col w-[30%] max-md:ml-0 max-md:w-full pl-[10%]">
          <div className="flex items-center mb-4">
              <label className="text-base font-bold">Works / Factory</label>
            </div>
            <input 
              type="text"
              placeholder="Enter Registered Office Address"  
              className="border border-solid border-stone-500 px-2 py-7 rounded-xl mb-6"
            />
        </div>        
      </div>
      
      <label className="text-base font-bold pl-[10%]">6. Communication Details</label>
      <div className="flex w-[100%] py-[2%]">      
        <div className="flex flex-col w-[30%] max-md:ml-0 max-md:w-full pl-[10%]">
          <div className="flex items-center mb-4">
            <label className="text-base font-bold">Phone/Landline</label>
          </div>
          <input 
            type="text"
            placeholder="Enter the name of the applicant"  
            className="border border-solid border-stone-500 px-2 py-5 rounded-xl mb-6"
          />

          <div className="flex items-center mb-4">
            <label className="text-base font-bold">Email Id</label>
          </div>
          <input 
            type="text"
            placeholder="Enter the name of the applicant"  
            className="border border-solid border-stone-500 px-2 py-5 rounded-xl mb-6"
          />
                    
        </div>
        
        <div className="flex flex-col w-[30%] max-md:ml-0 max-md:w-full pl-[10%]">
        <div className="flex items-center mb-4">
              <label className="text-base font-bold">Phone/Mobile</label>
            </div>
            <input 
              type="text"
              placeholder="Enter Registered Office Address"  
              className="border border-solid border-stone-500 px-2 py-5 rounded-xl mb-6"
            />
          <div className="flex items-center mb-4">
            <label className="text-base font-bold">Website</label>
          </div>
          <input 
            type="text"
            placeholder="Enter Registered Office Address"  
            className="border border-solid border-stone-500 px-2 py-5 rounded-xl mb-6"
          />
        </div>        
      </div>


      <label className="text-base font-bold pl-[10%]">7. Legal Information:</label>
      <div className="flex w-[100%] py-[2%]">      
        <div className="flex flex-col w-[30%] max-md:ml-0 max-md:w-full pl-[10%]">
          <div className="flex items-center mb-4">
            <label className="text-base font-bold">Aadhaar Card No</label>
          </div>
          <input 
            type="text"
            placeholder="Enter the name of the applicant"  
            className="border border-solid border-stone-500 px-2 py-5 rounded-xl mb-6"
          />

          <div className="flex items-center mb-4">
            <label className="text-base font-bold">GST No</label>
          </div>
          <input 
            type="text"
            placeholder="Enter the name of the applicant"  
            className="border border-solid border-stone-500 px-2 py-5 rounded-xl mb-6"
          />

          <div className="flex items-center mb-4">
            <label className="text-base font-bold">Society/Association Registration No</label>
          </div>
          <input 
            type="text"
            placeholder="Enter the name of the applicant"  
            className="border border-solid border-stone-500 px-2 py-5 rounded-xl mb-6"
          />
                    
        </div>
        
        <div className="flex flex-col w-[30%] max-md:ml-0 max-md:w-full pl-[10%]">
        <div className="flex items-center mb-4">
              <label className="text-base font-bold">PAN Card No</label>
            </div>
            <input 
              type="text"
              placeholder="Enter Registered Office Address"  
              className="border border-solid border-stone-500 px-2 py-5 rounded-xl mb-6"
            />
          <div className="flex items-center mb-4">
            <label className="text-base font-bold">Company/Firm Registration No</label>
          </div>
          <input 
            type="text"
            placeholder="Enter Registered Office Address"  
            className="border border-solid border-stone-500 px-2 py-5 rounded-xl mb-6"
          />
        </div>        
      </div>


      <label className="text-base font-bold pl-[10%]">8. List of Directors/ Partners/ Office Bearers/ Trustees:</label>
      <div>
        <ul>
          <li className="text-base font-bold pl-[10%]">
            <div className="flex gap-2">
              <span className="font-bold">SN No</span>
              <span>Name</span>
              <span>Designation</span>
              <span>PAN</span>
            </div>
          </li>
          {data.map((item, index) => (
            <li key={index} className="text-base font-bold pl-[10%]">
              <div className="flex gap-2">
                <span>{index + 1}.</span>
                <span>{item.name}</span>
                <span>{item.designation}</span>
                <span>{item.pan}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex gap-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={inputValues.name}
          className="border border-solid border-stone-500 px-2 py-5 rounded-xl mb-6"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="designation"
          placeholder="Designation"
          value={inputValues.designation}
          className="border border-solid border-stone-500 px-2 py-5 rounded-xl mb-6"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="pan"
          placeholder="PAN"
          className="border border-solid border-stone-500 px-2 py-5 rounded-xl mb-6"
          value={inputValues.pan}
          onChange={handleInputChange}
        />
        <button onClick={handleAdd}>Add</button>
      </div>

      <label className="text-base font-bold pl-[10%]">9. Details of the Person Authorized:</label>
      <div className="flex w-[100%] py-[2%]">      
        <div className="flex flex-col w-[30%] max-md:ml-0 max-md:w-full pl-[10%]">
          <div className="flex items-center mb-4">
            <label className="text-base font-bold">Name</label>
          </div>
          <input 
            type="text"
            placeholder="Enter the name of the applicant"  
            className="border border-solid border-stone-500 px-2 py-5 rounded-xl mb-6"
          />

          <div className="flex items-center mb-4">
            <label className="text-base font-bold">PAN</label>
          </div>
          <input 
            type="text"
            placeholder="Enter the name of the applicant"  
            className="border border-solid border-stone-500 px-2 py-5 rounded-xl mb-6"
          />

          <div className="flex items-center mb-4">
            <label className="text-base font-bold">Phone</label>
          </div>
          <input 
            type="text"
            placeholder="Enter the name of the applicant"  
            className="border border-solid border-stone-500 px-2 py-5 rounded-xl mb-6"
          />
                    
        </div>
        
        <div className="flex flex-col w-[30%] max-md:ml-0 max-md:w-full pl-[10%]">
        <div className="flex items-center mb-4">
              <label className="text-base font-bold">Designation</label>
            </div>
            <input 
              type="text"
              placeholder="Enter Registered Office Address"  
              className="border border-solid border-stone-500 px-2 py-5 rounded-xl mb-6"
            />
            <div className="flex items-center mb-4">
              <label className="text-base font-bold">Aadhaar</label>
            </div>
            <input 
              type="text"
              placeholder="Enter Registered Office Address"  
              className="border border-solid border-stone-500 px-2 py-5 rounded-xl mb-6"
            />
          <div className="flex items-center mb-4">
            <label className="text-base font-bold">Mail Id</label>
          </div>
          <input 
            type="text"
            placeholder="Enter Registered Office Address"  
            className="border border-solid border-stone-500 px-2 py-5 rounded-xl mb-6"
          />
        </div>        
      </div>


      <label className="text-base font-bold pl-[10%]">10. Category of Industry/ Trade/ Services:</label>
      <div className="flex w-[100%] py-[2%]">      
        <div className="flex flex-col w-[30%] max-md:ml-0 max-md:w-full pl-[10%]">
          <div className="flex items-center mb-4">
            <label className="text-base font-bold">Main Category</label>
          </div>
          <input 
            type="text"
            placeholder="Enter the name of the applicant"  
            className="border border-solid border-stone-500 px-2 py-5 rounded-xl mb-6"
          />
                    
        </div>
        
        <div className="flex flex-col w-[30%] max-md:ml-0 max-md:w-full pl-[10%]">
        <div className="flex items-center mb-4">
              <label className="text-base font-bold">Sub Category</label>
            </div>
            <input 
              type="text"
              placeholder="Enter Registered Office Address"  
              className="border border-solid border-stone-500 px-2 py-5 rounded-xl mb-6"
            />
        </div>        
      </div>


      <label className="text-base font-bold pl-[10%]">11. Catering to Market:</label>
      <div className="flex w-[100%] py-[2%]">      
        <div className="flex flex-col w-[30%] max-md:ml-0 max-md:w-full pl-[10%]">
          <div className="flex items-center mb-4">
            <label className="text-base font-bold">Domestic</label>
          </div>
          <input 
            type="text"
            placeholder="Enter the name of the applicant"  
            className="border border-solid border-stone-500 px-2 py-5 rounded-xl mb-6"
          />

          <div className="flex items-center mb-4">
            <label className="text-base font-bold">Both</label>
          </div>
          <input 
            type="text"
            placeholder="Enter the name of the applicant"  
            className="border border-solid border-stone-500 px-2 py-5 rounded-xl mb-6"
          />

          <div className="flex items-center mb-4">
            <label className="text-base font-bold">% of Imports</label>
          </div>
          <input 
            type="text"
            placeholder="Enter the name of the applicant"  
            className="border border-solid border-stone-500 px-2 py-5 rounded-xl mb-6"
          />
                    
        </div>
        
        <div className="flex flex-col w-[30%] max-md:ml-0 max-md:w-full pl-[10%]">
        <div className="flex items-center mb-4">
              <label className="text-base font-bold">Global</label>
            </div>
            <input 
              type="text"
              placeholder="Enter Registered Office Address"  
              className="border border-solid border-stone-500 px-2 py-5 rounded-xl mb-6"
            />
            <div className="flex items-center mb-4">
              <label className="text-base font-bold">% of Exports</label>
            </div>
            <input 
              type="text"
              placeholder="Enter Registered Office Address"  
              className="border border-solid border-stone-500 px-2 py-5 rounded-xl mb-6"
            />
        </div>        
      </div>


      <label className="text-base font-bold pl-[10%]">12.  Foreign Collaboration if any:</label>
      <div className="flex w-[100%] py-[2%]">      
        <div className="flex flex-col w-[30%] max-md:ml-0 max-md:w-full pl-[10%]">
          <div className="flex items-center mb-4">
            <label className="text-base font-bold">Name of the Country</label>
          </div>
          <input 
            type="text"
            placeholder="Enter the name of the applicant"  
            className="border border-solid border-stone-500 px-2 py-5 rounded-xl mb-6"
          />
                    
        </div>
        
        <div className="flex flex-col w-[30%] max-md:ml-0 max-md:w-full pl-[10%]">
        <div className="flex items-center mb-4">
              <label className="text-base font-bold">GlName of the Collaborator / Joint Venture obal</label>
            </div>
            <input 
              type="text"
              placeholder="Enter Registered Office Address"  
              className="border border-solid border-stone-500 px-2 py-5 rounded-xl mb-6"
            />
        </div>        
      </div>
      

      <div className="flex w-[100%]">
      <div className="flex flex-col w-[30%] max-md:ml-0 max-md:w-full pl-[10%]">
      <label className="text-base font-bold">13. Annual Turnover for the last three years 
(Rs in Million)</label>
          <div className="flex items-center mb-4">
            <label className="text-base font-bold">1st year :</label>
            <img
              loading="lazy"
              src={know}
              alt="logo"
              className="ml-2"
            />
          </div>
          <input 
            type="text"
            placeholder="Enter the name of the applicant"  
            className="border border-solid border-stone-500 px-2 py-2 rounded-xl mb-6"
          />
          
          <div className="flex items-center mb-4">
            <label className="text-base font-bold">2nd year :</label>
            <img
              loading="lazy"
              src={know}
              alt="logo"
              className="ml-2"
            />
          </div>
          <input 
            type="text"
            placeholder="Enter Business Activity"  
            className="border border-solid border-stone-500 px-2 py-2 rounded-xl mb-6"
          />
          
          <div className="flex items-center mb-4">
            <label className="text-base font-bold">3rd year :</label>
            <img
              loading="lazy"
              src={know}
              alt="logo"
              className="ml-2"
            />
          </div>
          <input 
            type="text"
            placeholder="Enter Registered Office Address"  
            className="border border-solid border-stone-500 px-2 py-2 rounded-xl mb-6"
          />
        </div>
        
        <div className="flex flex-col w-[30%] max-md:ml-0 max-md:w-full pl-[10%]">
          <div className="text-base font-bold mb-4">2. Constitution</div>
          <div className="flex flex-col">
            {classindustry.map((option) => (
              <div key={option} className="flex items-center mb-2">
                <input
                  type="checkbox"
                  id={option}
                  checked={selectedConstitution.includes(option)}
                  onChange={() => handleCheckboxChange(option)}
                  className="mr-2"
                />
                <label htmlFor={option}>{option}</label>
              </div>
            ))}
          </div>
        </div>    

      </div>
      

      <label className="text-base font-bold pl-[10%]">15. No of Persons Employed :</label>
      <div className="flex w-[100%] py-[2%]">      
        <div className="flex flex-col w-[30%] max-md:ml-0 max-md:w-full pl-[10%]">
          <div className="flex items-center mb-4">
            <label className="text-base font-bold">Direct - Office</label>
          </div>
          <input 
            type="text"
            placeholder="Enter the name of the applicant"  
            className="border border-solid border-stone-500 px-2 py-5 rounded-xl mb-6"
          />
          
          <div className="flex items-center mb-4">
            <label className="text-base font-bold">Indirect - Contractual</label>
          </div>
          <input 
            type="text"
            placeholder="Enter the name of the applicant"  
            className="border border-solid border-stone-500 px-2 py-5 rounded-xl mb-6"
          />
                    
        </div>
        
        <div className="flex flex-col w-[30%] max-md:ml-0 max-md:w-full pl-[10%]">
        <div className="flex items-center mb-4">
              <label className="text-base font-bold">Works</label>
            </div>
            <input 
              type="text"
              placeholder="Enter Registered Office Address"  
              className="border border-solid border-stone-500 px-2 py-5 rounded-xl mb-6"
            />
            <div className="flex items-center mb-4">
            <label className="text-base font-bold">Outsourced</label>
          </div>
          <input 
            type="text"
            placeholder="Enter the name of the applicant"  
            className="border border-solid border-stone-500 px-2 py-5 rounded-xl mb-6"
          />
        </div>        
      </div>

      <label className="text-base font-bold pl-[10%]">16. Welfare Obligations:</label>
      <div className="flex w-[100%] py-[2%]">      
        <div className="flex flex-col w-[30%] max-md:ml-0 max-md:w-full pl-[10%]">
          <div className="flex items-center mb-4">
            <label className="text-base font-bold">ESIC</label>
          </div>
          <input 
            type="text"
            placeholder="Enter the name of the applicant"  
            className="border border-solid border-stone-500 px-2 py-5 rounded-xl mb-6"
          />
                    
        </div>
        
        <div className="flex flex-col w-[30%] max-md:ml-0 max-md:w-full pl-[10%]">
        <div className="flex items-center mb-4">
              <label className="text-base font-bold">EPF</label>
            </div>
            <input 
              type="text"
              placeholder="Enter Registered Office Address"  
              className="border border-solid border-stone-500 px-2 py-5 rounded-xl mb-6"
            />
        </div>        
      </div>
      
      <label className="text-base font-bold pl-[10%]">17.  Details of branches / Outlet outside India</label>
      <div className="flex w-[100%] py-[2%] pl-[10%]">      
          <input 
            type="text"
            placeholder="Enter the name of the applicant"  
            className="border border-solid border-stone-500 px-[20%] py-5 rounded-xl mb-6"
          />
                
      </div>


      <div className="flex w-[100%]">
      <div className="flex flex-col w-[30%] max-md:ml-0 max-md:w-full pl-[10%]">
          <div className="text-base font-bold mb-4">18. Are you member of any other Association

If yes, mention details:</div>
          <div className="flex flex-col">
            {yesno.map((option) => (
              <div key={option} className="flex items-center mb-2">
                <input
                  type="checkbox"
                  id={option}
                  checked={selectedConstitution.includes(option)}
                  onChange={() => handleCheckboxChange(option)}
                  className="mr-2"
                />
                <label htmlFor={option}>{option}</label>
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex flex-col w-[30%] max-md:ml-0 max-md:w-full pl-[10%]">
          <div className="text-base font-bold mb-4">19. Do you hold any Office Bearers position
in any Association</div>
          <div className="text-base font-bold mb-4">If yes - mention the Association Name & position</div>
          <div className="flex flex-col">
            {yesno.map((option) => (
              <div key={option} className="flex items-center mb-2">
                <input
                  type="checkbox"
                  id={option}
                  checked={selectedConstitution.includes(option)}
                  onChange={() => handleCheckboxChange(option)}
                  className="mr-2"
                />
                <label htmlFor={option}>{option}</label>
              </div>
            ))}
          </div>
          {selectedConstitution.includes('Yes') && (
            <input
              type="text"
              placeholder="Enter the name of the Individual"
              className="border border-solid border-stone-500 px-2 py-4 rounded-xl mb-6"
            />
          )}
        </div>
      </div>


      <label className="text-base font-bold pl-[10%]">20. Reason for Joining the Chamber</label>
      <div className="flex w-[100%] py-[2%] pl-[10%]">      
          <input 
            type="text"
            placeholder="Enter the name of the applicant"  
            className="border border-solid border-stone-500 px-[20%] py-5 rounded-xl mb-6"
          />
                
      </div>


      <label className="text-base font-bold pl-[40%]">Upload your E- Sign</label>
      <div className="flex w-[100%] py-[1%] pl-[40%]">      
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="border border-solid border-stone-500 px-[1%] py-2 rounded-xl mb-6"
        />

        {selectedImage && (
          <div className="flex items-center">
            <img
              src={URL.createObjectURL(selectedImage)}
              alt="Preview"
              className="mr-4 rounded"
              style={{ maxWidth: '100px', maxHeight: '100px' }}
            />
          </div>
        )}
                
      </div>

      <label className="text-base font-bold pl-[40%]">Upload your seal</label>
      <div className="flex w-[100%] py-[1%] pl-[40%]">      
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="border border-solid border-stone-500 px-[1%] py-2 rounded-xl mb-6"
        />

        {selectedImage && (
          <div className="flex items-center">
            <img
              src={URL.createObjectURL(selectedImage)}
              alt="Preview"
              className="mr-4 rounded"
              style={{ maxWidth: '100px', maxHeight: '100px' }}
            />
          </div>
        )}
                
      </div>

      <label className="text-base font-bold pl-[40%]">Signature of Authorized person with seal</label>

      <div className="ml-[10%] mt-[8%]">
        <button
          className="bg-blue-500 text-white px-4 py-3 rounded-3xl hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
        >
          Submit & Proceed Next >>
        </button>
      </div>



      <div className="p-[5%]"></div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Form;

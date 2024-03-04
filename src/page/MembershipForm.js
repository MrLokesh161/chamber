import * as React from "react";
import logoImage from "../assets/rect.png";
import know from "../assets/knowmore.png";
import { useState } from 'react';

function Form(props) {

  const [selectedConstitution, setSelectedConstitution] = useState([]);

  const handleCheckboxChange = (value) => {
    if (selectedConstitution.includes(value)) {
      setSelectedConstitution(selectedConstitution.filter((item) => item !== value));
    } else {
      setSelectedConstitution([value]);
    }
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



      <div className="flex justify-between items-start px-16 py-11 w-full max-w-[100%] max-md:flex-wrap max-md:max-w-full">
      <div className="w-[2%]"></div>
      <div className="flex flex-col w-[30%] max-md:ml-0 max-md:w-full ">
        <div className="flex items-center mb-2">
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
            placeholder="Enter the name of applicant"  
            className="border border-solid border-stone-500 px-2 py-5 rounded-xl" />
          <>
            <div className="flex items-center mb-2 pt-[8%]">
              <label className="text-base font-bold">4. Business Activity</label>
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
              className="border border-solid border-stone-500 px-2 py-5 rounded-xl"
            />
          </>

          <>
            <div className="flex items-center mb-2 pt-[8%]">
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
              placeholder="Enter the name of the applicant"  
              className="border border-solid border-stone-500 px-2 py-5 rounded-xl"
            />
          </>
          

        </div>
        

        
      <div className="flex flex-col w-[30%] max-md:ml-0 max-md:w-full">
      <div className="text-base font-bold mb-2">2. Constitution</div>
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
              className="border border-solid border-stone-900 px-3 py-2 mb-4"
            />
          )}
        </div>


        <div className="flex flex-col w-[25%] bg-F4E3E3 border border-solid border-black p-9 rounded-xl">
          <div className="text-4xl">Membership Opportunities</div>
          <p className="text-justify mt-4">
            The Membership of the chamber is open to all those who are engaged in any business activity in the State of Tamil Nadu, including trade, industry, services and agriculture and related activities. Professionals, Sole Proprietorship, LLPs, Partnerships, Associations, and Companies are eligible to be admitted as members under any one of the following categories.
          </p>
          <div className="text-xl mt-8">Membership Types</div>
          <ul className="list-disc list-inside mt-4">
            <li>For Life Membership</li>
            <li>Annual Membership</li>
            {/* ... (Other membership types) */}
          </ul>
          <div className="text-xl mt-8">Member Benefits</div>
          <ul className="list-disc list-inside mt-4">
            <li>Latest notifications of State & Central Governments.</li>
            <li>Trade delegations and foreign delegations related information.</li>
            {/* ... (Other member benefits) */}
          </ul>
        </div>
      </div>

      <div className="flex flex-col">
  <div className="flex w-[75%]">
    <div className="w-[2%]"></div>
    <div className="flex flex-col w-[30%] max-md:ml-0 max-md:w-full ">
      <div className="flex items-center mb-2">
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
        className="border border-solid border-stone-500 px-2 py-5 rounded-xl"
      />
      
      <div className="flex items-center mb-2 pt-[8%]">
        <label className="text-base font-bold">4. Business Activity</label>
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
        className="border border-solid border-stone-500 px-2 py-5 rounded-xl"
      />
      
      <div className="flex items-center mb-2 pt-[8%]">
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
        placeholder="Enter the name of the applicant"  
        className="border border-solid border-stone-500 px-2 py-5 rounded-xl"
      />
    </div>
    
    <div className="flex flex-col w-[30%] max-md:ml-0 max-md:w-full">
      <div className="text-base font-bold mb-2">2. Constitution</div>
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
          className="border border-solid border-stone-900 px-3 py-2 mb-4"
        />
      )}
    </div>
  </div>

  <div className="flex w-[25%]">
    <div className="flex flex-col w-[25%] bg-F4E3E3 border border-solid border-black p-9 rounded-xl">
      <div className="text-4xl">Membership Opportunities</div>
      <p className="text-justify mt-4">
        The Membership of the chamber is open to all those who are engaged in any business activity in the State of Tamil Nadu, including trade, industry, services and agriculture and related activities. Professionals, Sole Proprietorship, LLPs, Partnerships, Associations, and Companies are eligible to be admitted as members under any one of the following categories.
      </p>
      <div className="text-xl mt-8">Membership Types</div>
      <ul className="list-disc list-inside mt-4">
        <li>For Life Membership</li>
        <li>Annual Membership</li>
        {/* ... (Other membership types) */}
      </ul>
      <div className="text-xl mt-8">Member Benefits</div>
      <ul className="list-disc list-inside mt-4">
        <li>Latest notifications of State & Central Governments.</li>
        <li>Trade delegations and foreign delegations related information.</li>
        {/* ... (Other member benefits) */}
      </ul>
    </div>
  </div>
</div>


      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Form;
